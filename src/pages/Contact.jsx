import { useState } from 'react'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import Icon from '../components/ui/Icon.jsx'
import { callbackForm, ctaBanner } from '../data/home.js'
import { contact, hasPhone, whatsappLink } from '../config/contact.js'
import './Contact.css'

import contactHero from '../assets/images/contact-page-hero.jpg'

const officeQuery = contact.addressLines.filter(Boolean).join(', ')
const mapSrc =
  contact.mapEmbedUrl ||
  (officeQuery ? `https://www.google.com/maps?q=${encodeURIComponent(officeQuery)}&z=11&output=embed` : '')
const mapLink =
  contact.mapLink ||
  (officeQuery ? `https://www.google.com/maps/search/${encodeURIComponent(officeQuery)}` : '')

/** Direct lines — only channels with a configured value are listed. */
const CONTACT_LINES = [
  hasPhone && { icon: 'phone', label: 'Call us', value: contact.phoneDisplay, href: contact.phoneHref },
  contact.secondaryPhoneDisplay && {
    icon: 'phone',
    label: 'Direct line',
    value: contact.secondaryPhoneDisplay,
    href: contact.secondaryPhoneHref,
  },
  { icon: 'whatsapp', label: 'WhatsApp', value: contact.whatsappDisplay, href: whatsappLink, external: true },
  contact.email && { icon: 'mail', label: 'Email Us', value: contact.email, href: `mailto:${contact.email}` },
  officeQuery && { icon: 'pin', label: 'Office', value: officeQuery, href: mapLink, external: true },
  contact.hours && { icon: 'clock', label: 'Office hours', value: contact.hours },
].filter(Boolean)

/**
 * Contact page
 *   1. Shared PageHero
 *   2. Contact desk — direct lines (left) beside the callback form (right)
 *   3. Office map with a floating location card
 *
 * The form is frontend-only: submitting logs the payload and shows a
 * confirmation. Wire `handleSubmit` to a real endpoint when one exists.
 */
export default function Contact() {
  const [sent, setSent] = useState(false)
  const { title, accent, text, points, fields, submitLabel } = callbackForm

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    // TODO: replace with a real submission (API route / form service).
    // eslint-disable-next-line no-console
    console.info('[Contact] callback request', data)
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <main className="contactPage">
      <PageHero
        title="Contact Us"
        intro="Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service built around you."
        image={contactHero}
      />

      {/* ── 2. Contact desk ─────────────────────────────────────── */}
      <section className="contactDesk" id="request-callback">
        <div className="contactDesk__inner">
          <div className="contactDesk__aside">
            <span className="contactEyebrow">Get in touch</span>
            <h2 className="contactDesk__title">{ctaBanner.title}</h2>

            <ul className="contactLines">
              {CONTACT_LINES.map((line) => {
                const body = (
                  <>
                    <span className="contactLine__icon">
                      <Icon name={line.icon} />
                    </span>
                    <span className="contactLine__text">
                      <span className="contactLine__label">{line.label}</span>
                      <span className="contactLine__value">{line.value}</span>
                    </span>
                    {line.href && (
                      <span className="contactLine__arrow">
                        <Icon name="arrow-right" size="small" />
                      </span>
                    )}
                  </>
                )

                return (
                  <li key={line.label}>
                    {line.href ? (
                      <a
                        className="contactLine"
                        href={line.href}
                        target={line.external ? '_blank' : undefined}
                        rel={line.external ? 'noopener noreferrer' : undefined}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="contactLine">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <ul className="contactPoints">
              {points.map((point) => (
                <li key={point}>
                  <Icon name="check" size="small" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contactCard">
            {sent ? (
              <div className="contactCard__success" role="status">
                <span className="contactCard__successIcon" aria-hidden="true">
                  <Icon name="check" />
                </span>
                <h3>Thank you — request received</h3>
                <p>
                  A Vision Business Setup consultant will be in touch shortly. For anything urgent,{' '}
                  {hasPhone
                    ? `call us on ${contact.phoneDisplay}${contact.secondaryPhoneDisplay ? ` or ${contact.secondaryPhoneDisplay}` : ''}.`
                    : 'message us on WhatsApp.'}
                </p>
                <button type="button" onClick={() => setSent(false)}>
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <header className="contactCard__head">
                  <h2 className="contactCard__title">
                    {title} <strong>{accent}</strong>
                  </h2>
                  <p className="contactCard__text">{text}</p>
                </header>

                <form className="contactForm" onSubmit={handleSubmit} noValidate>
                  {fields.map((field) => {
                    const id = `contact-${field.name}`
                    const full = field.type === 'textarea' || field.type === 'email'
                    return (
                      <div className={`contactField${full ? ' contactField--full' : ''}`} key={field.name}>
                        <label htmlFor={id}>
                          {field.label}
                          {field.required && <span aria-hidden="true"> *</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={id}
                            name={field.name}
                            rows="5"
                            placeholder={field.placeholder}
                            required={field.required}
                          />
                        ) : (
                          <input
                            id={id}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            autoComplete={field.autoComplete}
                            required={field.required}
                          />
                        )}
                      </div>
                    )
                  })}

                  <button type="submit" className="contactForm__submit">
                    <span>{submitLabel}</span>
                    <Icon name="arrow-right" size="small" />
                  </button>

                  <p className="contactForm__note">
                    By submitting this form you agree to be contacted by Vision Business Setup about your
                    enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. Office map ───────────────────────────────────────── */}
      <section className="contactMap" id="contact">
        {mapSrc && (
          <iframe
            className="contactMap__frame"
            src={mapSrc}
            title="Vision Business Setup location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}

        <div className="contactMap__inner">
          <div className="contactMap__card">
            <span className="contactEyebrow contactEyebrow--light">Office</span>
            {contact.addressLines && contact.addressLines.length > 1 ? (
              <>
                <p className="contactMap__city">{contact.addressLines[0]}</p>
                <p className="contactMap__addressDetail">{contact.addressLines.slice(1).join(', ')}</p>
              </>
            ) : (
              <p className="contactMap__city">{officeQuery || 'Office address to be added'}</p>
            )}
            {contact.hours && <p className="contactMap__hours">{contact.hours}</p>}
            {mapLink && (
              <a className="contactMap__link" href={mapLink} target="_blank" rel="noopener noreferrer">
                <span>Open in Google Maps</span>
                <Icon name="arrow-right" size="small" />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
