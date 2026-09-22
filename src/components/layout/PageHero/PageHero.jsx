import SmartLink from '../../ui/SmartLink.jsx'
import './PageHero.css'

/**
 * PageHero — the opening band of every inner page (About, Contact, the
 * Business Setup jurisdictions).
 *
 * A deep-navy ground with the page photograph laid over it in luminosity
 * blend, so every image resolves to a navy monochrome and the band stays
 * on-palette whatever photo is passed in.
 *
 *   crumbs  [{ label, href? }]  — last item is the current page (no href)
 *   eyebrow optional small label above the title
 *   title   page <h1>
 *   intro   string or string[] — one <p> per entry
 *   image   imported image URL for the background
 */
export default function PageHero({ crumbs = [], eyebrow, title, intro, image }) {
  const paragraphs = [].concat(intro || [])

  return (
    <header className="pageHero">
      {image && (
        <div className="pageHero__media" aria-hidden="true">
          <img className="pageHero__img" src={image} alt="" fetchPriority="high" />
        </div>
      )}

      <div className="pageHero__container">
        {crumbs.length > 0 && (
          <nav className="pageHero__crumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb, index) => {
                const isCurrent = index === crumbs.length - 1
                return (
                  <li key={crumb.label}>
                    {isCurrent ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <SmartLink href={crumb.href}>{crumb.label}</SmartLink>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}

        {eyebrow && <span className="pageHero__eyebrow">{eyebrow}</span>}
        <h1 className="pageHero__title">{title}</h1>

        {paragraphs.length > 0 && (
          <div className="pageHero__intro">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
