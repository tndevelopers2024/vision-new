import { useCallback } from 'react'
import { footer } from '../../../data/site.js'
import Icon from '../../ui/Icon.jsx'
import SmartLink from '../../ui/SmartLink.jsx'
import './Footer.css'

const logo = `${import.meta.env.BASE_URL}logo-lockup-light.png`

/**
 * Footer — Redesigned High-Utility Luxury Footer:
 * 1. Top Callout & Action Card (Headline, Subheadline & Twin Action Buttons)
 * 2. Interactive Contact Cards (Direct Phone, Email, and Google Maps office direction)
 * 3. 4-Column Navigation & Brand Authority (Logo, Trust credentials, Business Setup, Corporate Services, Quick Links)
 * 4. Polished Bottom Bar (Dynamic copyright, Legal links, Social links & Back to top)
 */
export default function Footer() {
  const { contactCards, company, columns, legal, copyright, social } = footer

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <footer className="luxuryFooter">
      <div className="luxuryFooter__container">
        {/* Interactive Contact Cards */}
        {contactCards && contactCards.length > 0 && (
          <div className="luxuryFooter__contactGrid">
            {contactCards.map((card, idx) => (
              <SmartLink
                key={idx}
                href={card.href}
                target={card.target || undefined}
                className="luxuryFooter__contactCard"
              >
                <div className="luxuryFooter__cardIconHolder">
                  <Icon name={card.icon} />
                </div>
                <div className="luxuryFooter__cardBody">
                  <span className="luxuryFooter__cardLabel">{card.label}</span>
                  <span className="luxuryFooter__cardValue">{card.value}</span>
                  <span className="luxuryFooter__cardDetail">{card.detail}</span>
                </div>
              </SmartLink>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="luxuryFooter__divider" />

        {/* 3. Main Multi-Column Grid */}
        <div className="luxuryFooter__mainGrid">
          {/* Col 1: Brand & Profile */}
          <div className="luxuryFooter__block luxuryFooter__block--brand">
            <SmartLink href="/" className="luxuryFooter__logoLink" aria-label="Vision Business Setup">
              <img src={logo} alt={company.title} className="luxuryFooter__logoImg" />
            </SmartLink>
            <p className="luxuryFooter__desc">{company.text}</p>

            <div className="luxuryFooter__metaGroup">
              <div className="luxuryFooter__hours">
                <span className="luxuryFooter__metaIcon">
                  <Icon name="clock" />
                </span>
                <div className="luxuryFooter__hoursText">
                  <span className="luxuryFooter__hoursLabel">{company.workingHoursLabel}: </span>
                  <span className="luxuryFooter__hoursValue">{company.workingHours}</span>
                </div>
              </div>
              {company.accreditation && (
                <div className="luxuryFooter__accreditation">
                  <span className="luxuryFooter__accreditationDot" />
                  <span>{company.accreditation}</span>
                </div>
              )}
            </div>
          </div>

          {/* Cols 2-4: Structured Navigation */}
          {columns &&
            columns.map((col) => (
              <div key={col.id} className="luxuryFooter__block">
                <h3 className="luxuryFooter__title">{col.title}</h3>
                <ul className="luxuryFooter__list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <SmartLink href={link.href} className="luxuryFooter__link">
                        <span className="luxuryFooter__linkArrow" aria-hidden="true">
                          ›
                        </span>
                        <span>{link.label}</span>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* 4. Polished Bottom Bar */}
        <div className="luxuryFooter__bottom">
          <p className="luxuryFooter__copy">{copyright}</p>

          {legal && (
            <div className="luxuryFooter__legal">
              {legal.map((item, idx) => (
                <span key={item.label} className="luxuryFooter__legalItem">
                  {idx > 0 && <span className="luxuryFooter__legalSep">·</span>}
                  <SmartLink href={item.href} className="luxuryFooter__legalLink">
                    {item.label}
                  </SmartLink>
                </span>
              ))}
            </div>
          )}

          <div className="luxuryFooter__bottomRight">
            <div className="luxuryFooter__social">
              {social.map((item) => (
                <a
                  key={item.icon}
                  href={item.href}
                  className="luxuryFooter__socialLink"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={item.icon} />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="luxuryFooter__toTopBtn"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <Icon name="chevron-up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
