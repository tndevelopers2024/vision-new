import { sendInquiryEmail } from './_lib/mailer.js'

/**
 * Helper to parse body from incoming stream if not already parsed by middleware.
 */
async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      // Could be form-urlencoded
      return Object.fromEntries(new URLSearchParams(req.body))
    }
  }

  // Stream parsing fallback (for raw Node / Vite dev middleware)
  return new Promise((resolve, reject) => {
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      if (!raw) return resolve({})
      const contentType = req.headers['content-type'] || ''
      if (contentType.includes('application/json')) {
        try {
          resolve(JSON.parse(raw))
        } catch {
          reject(new Error('Invalid JSON payload'))
        }
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        resolve(Object.fromEntries(new URLSearchParams(raw)))
      } else {
        // Try JSON then urlencoded fallback
        try {
          resolve(JSON.parse(raw))
        } catch {
          resolve(Object.fromEntries(new URLSearchParams(raw)))
        }
      }
    })
    req.on('error', reject)
  })
}

/**
 * Contact API handler supporting both JSON API and browser form POST fallbacks.
 * Adheres strictly to the Global Mail & Form Architecture Standard.
 */
export default async function handler(req, res) {
  // CORS & Allowed Methods
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }))
    return
  }

  const isJsonRequest =
    (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) ||
    (req.headers.accept && req.headers.accept.includes('application/json')) ||
    req.headers['x-requested-with'] === 'XMLHttpRequest'

  let body = {}
  try {
    body = await parseRequestBody(req)
  } catch {
    if (isJsonRequest) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: 'Malformed request payload' }))
      return
    }
    res.statusCode = 400
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>400 Bad Request</h1><p>Malformed request payload</p>')
    return
  }

  const {
    name,
    fullname,
    email,
    phone,
    service,
    message,
    notes,
    source,
    _gotcha,
    honeypot,
    website,
  } = body

  // 1. Honeypot Spam Defense: Silent drop if honeypot is filled
  const honeypotTriggered = Boolean(
    (_gotcha && String(_gotcha).trim().length > 0) ||
    (honeypot && String(honeypot).trim().length > 0) ||
    (website && String(website).trim().length > 0)
  )

  if (honeypotTriggered) {
    // eslint-disable-next-line no-console
    console.warn('[Spam Defense] Honeypot field filled. Silently dropping submission.')
    if (isJsonRequest) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
      }))
      return
    }
    // Browser fallback redirect
    res.writeHead(302, { Location: '/contact?status=success#request-callback' })
    res.end()
    return
  }

  // Normalize incoming fields
  const clientName = (name || fullname || '').trim()
  const clientEmail = (email || '').trim()
  const clientPhone = (phone || '').trim()
  const clientService = (service || '').trim()
  const clientMessage = (message || notes || '').trim()
  const clientSource = (source || 'Website Contact Form').trim()

  // 2. Input Validation
  if (!clientName || clientName.length < 2) {
    const errorMsg = 'Please provide your full name (minimum 2 characters).'
    if (isJsonRequest) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: errorMsg }))
      return
    }
    res.writeHead(302, { Location: '/contact?status=error&msg=' + encodeURIComponent(errorMsg) + '#request-callback' })
    res.end()
    return
  }

  if (!clientEmail && !clientPhone) {
    const errorMsg = 'Please provide either a phone number or an email address so we can reach you.'
    if (isJsonRequest) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: errorMsg }))
      return
    }
    res.writeHead(302, { Location: '/contact?status=error&msg=' + encodeURIComponent(errorMsg) + '#request-callback' })
    res.end()
    return
  }

  if (clientEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
    const errorMsg = 'Please provide a valid email address.'
    if (isJsonRequest) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, error: errorMsg }))
      return
    }
    res.writeHead(302, { Location: '/contact?status=error&msg=' + encodeURIComponent(errorMsg) + '#request-callback' })
    res.end()
    return
  }

  // 3. Dispatch Email via SMTP Transporter
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1'
  const userAgent = req.headers['user-agent'] || 'Unknown'

  try {
    await sendInquiryEmail({
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      service: clientService,
      message: clientMessage,
      source: clientSource,
      ip: clientIp,
      userAgent,
    })

    if (isJsonRequest) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        success: true,
        message: 'Your inquiry has been received. Our team will contact you shortly.',
      }))
      return
    }

    res.writeHead(302, { Location: '/contact?status=success#request-callback' })
    res.end()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[SMTP Mailer Error]', error)

    const failureMsg = 'We were unable to transmit your message at this time. Please call or WhatsApp us directly.'
    if (isJsonRequest) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        success: false,
        error: failureMsg,
      }))
      return
    }

    res.writeHead(302, { Location: '/contact?status=error&msg=' + encodeURIComponent(failureMsg) + '#request-callback' })
    res.end()
  }
}
