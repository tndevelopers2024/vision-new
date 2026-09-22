import { useState } from 'react'
import { contact, hasPhone, whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import SmartLink from '../../ui/SmartLink.jsx'
import './MinimalContact.css'

/**
 * MinimalContact — Sleek, high-converting minimal callback form for the Home page.
 * Replaces the heavy two-section combination (CallbackForm + GetInTouch).
 * Full form and interactive map are located on `/contact`.
 */
export default function MinimalContact() {
  const [status, setStatus] = useState('idle') // idle | success
  const [phone, setPhone] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    // eslint-disable-next-line no-console
    console.info('[MinimalContact] submission', data)
    setPhone(data.phone || '')
    form.reset()
    setStatus('success')
  }

  return (
    <section className="minimalContact" id="request-callback">
      <div className="minimalContact__container">
        <div className="minimalContact__card">
          <header className="minimalContact__header">
            <span className="minimalContact__super">EVERY BUSINESS STARTS WITH VISION</span>
            <h2 className="minimalContact__title">Request a Callback</h2>
            <p className="minimalContact__desc">
              Whether you are starting fresh or expanding your presence, our team is here to guide you with
              expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service
              built around you.
            </p>
          </header>

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
            <form className="minimalContact__form" onSubmit={handleSubmit} noValidate>
              <div className="minimalContact__field">
                <label htmlFor="min-fullname" className="minimalContact__label">Full Name *</label>
                <input
                  id="min-fullname"
                  name="fullname"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
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
                  className="minimalContact__input"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-service" className="minimalContact__label">Service Required</label>
                <select id="min-service" name="service" defaultValue="" className="minimalContact__select">
                  <option value="" disabled>Select Setup Service</option>
                  <option value="mainland">UAE Mainland</option>
                  <option value="freezone">UAE Free Zone</option>
                  <option value="offshore">UAE Offshore</option>
                  <option value="licence">Licence</option>
                  <option value="visa">Visa</option>
                  <option value="finance-banking">Finance &amp; Banking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="minimalContact__submitWrap">
                <button type="submit" className="minimalContact__submitBtn">
                  <span>Request Callback</span>
                  <Icon name="arrow-right" size="small" />
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
                <Icon name="check" size="small" /> UAE Mainland, Free Zone &amp; Offshore
              </span>
            </div>

            <div className="minimalContact__pageLink">
              <span>Need our full inquiry form?</span>{' '}
              <SmartLink href="/contact" className="minimalContact__contactLink">
                Contact Us →
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
