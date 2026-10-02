import { useState } from 'react'
import { contact, hasPhone, whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import SmartLink from '../../ui/SmartLink.jsx'
import './MinimalContact.css'

/**
 * MinimalContact — Sleek, high-converting minimal callback form for the Home page.
 * Replaces the heavy two-section combination (CallbackForm + GetInTouch).
 * Full form and interactive map are located on `/contact`.
 * Integrated with enterprise SMTP mail API and honeypot protection.
 */
export default function MinimalContact() {
  const [status, setStatus] = useState('idle') // idle | sending | success
  const [errorMessage, setErrorMessage] = useState('')
  const [phone, setPhone] = useState('')

  const loading = status === 'sending'

  async function handleSubmit(event) {
    event.preventDefault()
    setErrorMessage('')
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    data.source = 'Home Callback Form'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to request callback. Please try again.')
      }

      setPhone(data.phone || '')
      form.reset()
      setStatus('success')
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred while sending your request.')
      setStatus('idle')
    }
  }

  return (
    <section className="minimalContact" id="request-callback">
      <div className="minimalContact__container">
        <div className="minimalContact__card">
          <header className="minimalContact__header">
            <span className="minimalContact__super">Every Business starts with Vision</span>
            <h2 className="minimalContact__title">Request a Callback</h2>
            <p className="minimalContact__desc">
              Whether you are starting fresh or expanding your presence, our team is here to guide you with
              expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service
              built around you.
            </p>
          </header>

          {errorMessage && (
            <div className="is-error" role="alert" aria-live="assertive">
              <Icon name="close" size="small" />
              <span>{errorMessage}</span>
            </div>
          )}

          {status === 'success' ? (
            <div className="minimalContact__success" role="status">
              <div className="minimalContact__successIcon">
                <Icon name="check" />
              </div>
              <div className="minimalContact__successBody">
                <h3 className="minimalContact__successTitle">Callback Request Received</h3>
                <p className="minimalContact__successText">
                  Thank you. A Vision Business Setup consultant will call you {phone ? `at ${phone}` : 'shortly'}. For immediate assistance, contact us on{' '}
                  {hasPhone ? (
                    <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                  ) : (
                    <>WhatsApp at <a href={whatsappLink} target="_blank" rel="noreferrer">{contact.whatsappDisplay}</a></>
                  )}.
                </p>
                <button
                  type="button"
                  className="minimalContact__successAgain"
                  onClick={() => setStatus('idle')}
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form className="minimalContact__form" onSubmit={handleSubmit} action="/api/contact" method="POST" noValidate>
              {/* Honeypot field for spam prevention */}
              <div className="is-honeypot" aria-hidden="true">
                <label htmlFor="min-gotcha">Do not fill this field</label>
                <input
                  id="min-gotcha"
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-fullname" className="minimalContact__label">Full Name *</label>
                <input
                  id="min-fullname"
                  name="fullname"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  disabled={loading}
                  className="minimalContact__input"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-phone" className="minimalContact__label">Phone / WhatsApp *</label>
                <input
                  id="min-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                  disabled={loading}
                  className="minimalContact__input"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-service" className="minimalContact__label">Service Required</label>
                <select id="min-service" name="service" defaultValue="" disabled={loading} className="minimalContact__select">
                  <option value="" disabled>Select Setup Service</option>
                  <option value="UAE Mainland">UAE Mainland</option>
                  <option value="UAE Free Zone">UAE Free Zone</option>
                  <option value="UAE Offshore">UAE Offshore</option>
                  <option value="Licence Services">Licence</option>
                  <option value="Visa Services">Visa</option>
                  <option value="Finance & Banking">Finance &amp; Banking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="minimalContact__submitWrap">
                <button type="submit" className="minimalContact__submitBtn" disabled={loading}>
                  <span>{loading ? 'Sending...' : 'Request a Callback'}</span>
                  <Icon name={loading ? 'sync' : 'arrow-right'} size="small" />
                </button>
              </div>
            </form>
          )}

          {/* Trust badges & link to full contact page */}
          <div className="minimalContact__footer">
            <div className="minimalContact__trustList">
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> Round-the-Clock Support
              </span>
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> Tailored Solutions
              </span>
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> End-to-End Support
              </span>
            </div>

            <div className="minimalContact__pageLink">
              {' '}
              <SmartLink href="/contact" className="minimalContact__contactLink">
                Contact Us
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
