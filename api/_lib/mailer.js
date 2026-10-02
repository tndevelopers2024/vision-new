import nodemailer from 'nodemailer'

/**
 * Escapes HTML characters in user-submitted strings to prevent HTML injection in email clients.
 */
function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Creates and returns the enterprise SMTP transporter.
 * Supports standard SMTP environment variables:
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_SECURE
 * - SMTP_USER
 * - SMTP_PASS
 */
export function getMailTransporter() {
  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587', 10)
  const isSecure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  // In test environment or if host is dummy/unconfigured in dev, use JSON transport
  if (process.env.NODE_ENV === 'test' || !host || host === 'smtp.example.com') {
    return nodemailer.createTransport({
      jsonTransport: true,
    })
  }

  const transportConfig = {
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
    // Pool connections for enterprise efficiency
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
  }

  return nodemailer.createTransport(transportConfig)
}

/**
 * Formats and transmits an inquiry email via SMTP.
 *
 * @param {Object} inquiry
 * @param {string} inquiry.name - Client name
 * @param {string} [inquiry.email] - Client email
 * @param {string} [inquiry.phone] - Client phone or WhatsApp number
 * @param {string} [inquiry.service] - Service or topic of interest
 * @param {string} [inquiry.message] - Client notes or inquiry message
 * @param {string} [inquiry.source] - Form location (e.g., 'Contact Page', 'Callback Widget', 'Service Page')
 * @param {string} [inquiry.ip] - Submitter IP address
 * @param {string} [inquiry.userAgent] - Submitter user agent
 */
export async function sendInquiryEmail({
  name,
  email,
  phone,
  service,
  message,
  source = 'Website Contact Form',
  ip = 'Unknown',
  userAgent = 'Unknown',
}) {
  const transporter = getMailTransporter()

  const fromAddress = process.env.SMTP_FROM || '"Vision Business Setup" <no-reply@visionbusinesssetup.ae>'
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'admin@visionbusinesssetup.ae'

  const safeName = escapeHtml(name || 'Website Visitor')
  const safeEmail = escapeHtml(email || 'Not provided')
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeService = escapeHtml(service || 'General Business Setup Inquiry')
  const safeMessage = escapeHtml(message || 'No additional message provided').replace(/\n/g, '<br />')
  const safeSource = escapeHtml(source)

  const timestampIso = new Date().toISOString()
  const timestampDubai = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dubai',
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date())

  const subject = `[Vision Setup Inquiry] ${name} — ${service || 'General'}`

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Inquiry from ${safeName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 32px 16px; color: #2d3748; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0; }
    .email-header { background-color: #1c3b5f; padding: 28px 32px; text-align: left; }
    .email-header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
    .email-header p { color: rgba(255, 255, 255, 0.8); margin: 6px 0 0; font-size: 13px; }
    .email-body { padding: 32px; }
    .badge { display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; background-color: #edf2f7; color: #1c3b5f; border-radius: 4px; margin-bottom: 20px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; }
    .info-table td.label { font-weight: 600; color: #718096; width: 35%; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
    .info-table td.value { color: #1a202c; font-weight: 500; }
    .info-table td.value a { color: #1c3b5f; text-decoration: none; font-weight: 600; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #1c3b5f; padding: 16px 20px; border-radius: 4px; margin: 20px 0 24px; font-size: 14px; line-height: 1.6; color: #334155; }
    .meta-footer { font-size: 11px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 20px; margin-top: 24px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Vision Business Setup</h1>
      <p>New Client Consultation Request</p>
    </div>
    <div class="email-body">
      <div class="badge">Source: ${safeSource}</div>
      <table class="info-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">${email ? `<a href="mailto:${safeEmail}">${safeEmail}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value">${phone ? `<a href="tel:${safePhone}">${safePhone}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Service Required</td>
          <td class="value">${safeService}</td>
        </tr>
        <tr>
          <td class="label">Received (UAE / GST)</td>
          <td class="value">${timestampDubai}</td>
        </tr>
      </table>

      <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #718096; margin-bottom: 8px;">Inquiry / Notes</h3>
      <div class="message-box">
        ${safeMessage}
      </div>

      <div class="meta-footer">
        <p><strong>Submission Context:</strong> Submitted at ${timestampIso} UTC from IP <code>${escapeHtml(ip)}</code> via <code>${escapeHtml(userAgent)}</code>.</p>
        <p>This automated message was generated by the Vision Business Setup website SMTP gateway.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim()

  const textContent = `
New Consultation Request — Vision Business Setup
==================================================
Source: ${source}
Full Name: ${name}
Email: ${email || 'Not provided'}
Phone / WhatsApp: ${phone || 'Not provided'}
Service Required: ${service || 'General Business Setup Inquiry'}
Received: ${timestampDubai} (${timestampIso} UTC)

Inquiry Details:
--------------------------------------------------
${message || 'No additional message provided'}

--------------------------------------------------
Origin IP: ${ip}
User Agent: ${userAgent}
  `.trim()

  const mailOptions = {
    from: fromAddress,
    to: recipientEmail,
    subject,
    text: textContent,
    html: htmlContent,
  }

  // Set reply-to client email if valid
  if (email && email.includes('@')) {
    mailOptions.replyTo = email
  }

  const result = await transporter.sendMail(mailOptions)
  return result
}
