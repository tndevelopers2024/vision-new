import test from 'node:test'
import assert from 'node:assert/strict'
import { getMailTransporter, sendInquiryEmail } from '../../api/_lib/mailer.js'

test('Mailer module — Transporter Configuration', () => {
  const originalEnv = { ...process.env }

  try {
    process.env.NODE_ENV = 'test'
    process.env.SMTP_HOST = 'smtp.example.com'
    process.env.SMTP_PORT = '587'
    process.env.SMTP_SECURE = 'false'
    process.env.SMTP_USER = 'test-user'
    process.env.SMTP_PASS = 'test-pass'

    const transporter = getMailTransporter()
    assert.ok(transporter, 'Transporter should be created')
    assert.strictEqual(typeof transporter.sendMail, 'function', 'Transporter must have sendMail method')
  } finally {
    process.env = originalEnv
  }
})

test('Mailer module — HTML generation and security escaping', async () => {
  const originalEnv = { ...process.env }
  try {
    process.env.NODE_ENV = 'test'
    process.env.SMTP_FROM = '"Vision Setup" <test@visionbusinesssetup.ae>'
    process.env.CONTACT_RECIPIENT_EMAIL = 'recipient@visionbusinesssetup.ae'

    const payload = {
      name: 'Jane <script>alert("XSS")</script>',
      email: 'jane@example.com',
      phone: '+971 50 123 4567',
      service: 'UAE Mainland & Freezone',
      message: 'Hello & welcome! Test <img src=x onerror=alert(1)>',
      source: 'Test Runner',
      ip: '192.168.1.1',
      userAgent: 'NodeTest/1.0',
    }

    const result = await sendInquiryEmail(payload)

    assert.ok(result, 'sendInquiryEmail must return a transmission result')
    const messageData = JSON.parse(result.message)

    // Verify recipient and sender
    assert.strictEqual(messageData.to[0].address, 'recipient@visionbusinesssetup.ae')
    assert.strictEqual(messageData.from.address, 'test@visionbusinesssetup.ae')
    assert.strictEqual(messageData.replyTo[0].address, 'jane@example.com')
    assert.ok(messageData.subject.includes('Jane'), 'Subject must include sender name')

    // Verify security escaping in HTML output
    assert.ok(!messageData.html.includes('<script>'), 'HTML output must escape <script> tags')
    assert.ok(messageData.html.includes('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'), 'XSS payload must be escaped')
    assert.ok(!messageData.html.includes('<img src=x'), 'HTML output must escape injection tags')
    assert.ok(messageData.html.includes('&amp;'), 'Ampersands must be escaped')
  } finally {
    process.env = originalEnv
  }
})

test('Mailer module — Default fallback values when fields are omitted', async () => {
  const originalEnv = { ...process.env }
  try {
    process.env.NODE_ENV = 'test'
    delete process.env.CONTACT_RECIPIENT_EMAIL
    delete process.env.SMTP_FROM

    const result = await sendInquiryEmail({
      name: 'Ahmed',
      phone: '+971 55 987 6543',
    })

    assert.ok(result, 'sendInquiryEmail should succeed with minimal parameters')
    const messageData = JSON.parse(result.message)
    assert.strictEqual(messageData.to[0].address, 'admin@visionbusinesssetup.ae')
    assert.strictEqual(messageData.from.address, 'no-reply@visionbusinesssetup.ae')
    assert.ok(messageData.html.includes('Not provided'), 'Missing email should be marked as Not provided')
    assert.ok(messageData.html.includes('+971 55 987 6543'), 'Phone number must be present')
  } finally {
    process.env = originalEnv
  }
})
