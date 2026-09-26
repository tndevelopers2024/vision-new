import { Link } from 'react-router-dom'
import './PageHero.css'

const DEFAULT_HERO_BUTTONS = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

/**
 * PageHero — the opening band of every inner page (About, Contact, the
 * Business Setup jurisdictions, Services, Service Detail, Legal).
 *
 * A deep-navy ground with the page photograph laid over it in luminosity
 * blend, so every image resolves to a navy monochrome and the band stays
 * on-palette whatever photo is passed in.
 *
 *   eyebrow optional small label above the title
 *   title   page <h1>
 *   intro   string or string[] — one <p> per entry
 *   image   imported image URL for the background
 *   buttons optional custom buttons array or default About Us / Contact Us
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  buttons = DEFAULT_HERO_BUTTONS,
}) {
  const paragraphs = [].concat(intro || [])
  const actionButtons = Array.isArray(buttons) ? buttons : []

  return (
    <header className="pageHero">
      {image && (
        <div className="pageHero__media" aria-hidden="true">
          <img className="pageHero__img" src={image} alt="" fetchPriority="high" />
        </div>
      )}

      <div className="pageHero__container">
        {eyebrow && <span className="pageHero__eyebrow">{eyebrow}</span>}
        <h1 className="pageHero__title">{title}</h1>

        {paragraphs.length > 0 && (
          <div className="pageHero__intro">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        )}

        {actionButtons.length > 0 && (
          <div className="pageHero__buttons">
            {actionButtons.map((btn) => {
              const isInternal = btn.href?.startsWith('/')
              return isInternal ? (
                <Link key={btn.label} to={btn.href} className="pageHero__btn">
                  {btn.label}
                </Link>
              ) : (
                <a key={btn.label} href={btn.href} className="pageHero__btn">
                  {btn.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
