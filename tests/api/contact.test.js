import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../../api/contact.js'

function createMockReqRes({ method = 'POST', headers = {}, body = null } = {}) {
  const req = {
    method,
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      ...headers,
    },
    body,
    socket: { remoteAddress: '127.0.0.1' },
    on(event, callback) {
      if (event === 'data' && body && typeof body === 'string') {
        callback(Buffer.from(body))
      }
      if (event === 'end') {
        callback()
      }
      return req
    },
  }

  const res = {
    statusCode: 200,
    headers: {},
    ended: false,
    body: '',
    redirectUrl: '',
    setHeader(key, value) {
      this.headers[key.toLowerCase()] = value
    },
    writeHead(code, headers = {}) {
      this.statusCode = code
      Object.entries(headers).forEach(([k, v]) => {
        this.headers[k.toLowerCase()] = v
        if (k.toLowerCase() === 'location') {
          this.redirectUrl = v
        }
      })
    },
    end(data) {
      if (data) this.body = data
      this.ended = true
    },
  }

  return { req, res }
}

test('Contact Handler — Disallows non-POST/OPTIONS methods', async () => {
  const { req, res } = createMockReqRes({ method: 'GET' })
  await handler(req, res)

  assert.strictEqual(res.statusCode, 405)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, false)
  assert.strictEqual(json.error, 'Method Not Allowed')
})

test('Contact Handler — Handles OPTIONS preflight gracefully', async () => {
  const { req, res } = createMockReqRes({ method: 'OPTIONS' })
  await handler(req, res)

  assert.strictEqual(res.statusCode, 204)
  assert.strictEqual(res.headers['access-control-allow-methods'], 'POST, OPTIONS')
})

test('Contact Handler — Honeypot spam defense silently drops bot requests (JSON)', async () => {
  const { req, res } = createMockReqRes({
    body: {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      phone: '+1234567890',
      message: 'Buy cheap goods here',
      _gotcha: 'I am a spam bot filling hidden fields',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 200)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, true)
  assert.ok(json.message.includes('inquiry has been received'))
})

test('Contact Handler — Honeypot spam defense silently drops bot requests (Form Fallback)', async () => {
  const { req, res } = createMockReqRes({
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'text/html',
    },
    body: {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      phone: '+1234567890',
      message: 'Buy cheap goods here',
      _gotcha: 'hidden value',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 302)
  assert.ok(res.redirectUrl.includes('/contact?status=success'))
})

test('Contact Handler — Validates required name', async () => {
  const { req, res } = createMockReqRes({
    body: {
      name: 'A', // too short
      email: 'valid@example.com',
      phone: '+971501234567',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 400)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, false)
  assert.ok(json.error.includes('minimum 2 characters'))
})

test('Contact Handler — Requires at least one contact channel (phone or email)', async () => {
  const { req, res } = createMockReqRes({
    body: {
      name: 'Valid Name',
      message: 'Just looking',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 400)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, false)
  assert.ok(json.error.includes('provide either a phone number or an email'))
})

test('Contact Handler — Rejects malformed email address', async () => {
  const { req, res } = createMockReqRes({
    body: {
      name: 'Valid Name',
      email: 'not-an-email',
      phone: '+971501234567',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 400)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, false)
  assert.ok(json.error.includes('valid email address'))
})

test('Contact Handler — Successfully processes legitimate JSON inquiry', async () => {
  process.env.NODE_ENV = 'test'
  const { req, res } = createMockReqRes({
    body: {
      name: 'Mohammed Al-Falasi',
      email: 'mohammed@example.ae',
      phone: '+971 50 123 4567',
      service: 'UAE Mainland Setup',
      message: 'Interested in mainland licensing timeline and requirements.',
      source: 'Contact Page',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 200)
  const json = JSON.parse(res.body)
  assert.strictEqual(json.success, true)
  assert.ok(json.message.includes('inquiry has been received'))
})

test('Contact Handler — Successfully processes legitimate browser form fallback', async () => {
  process.env.NODE_ENV = 'test'
  const { req, res } = createMockReqRes({
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'text/html',
    },
    body: {
      name: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      phone: '+971 55 555 1234',
      service: 'Free Zone Visa',
      message: 'Need 3 visas for my new entity.',
    },
  })

  await handler(req, res)

  assert.strictEqual(res.statusCode, 302)
  assert.ok(res.redirectUrl.includes('/contact?status=success#request-callback'))
})
