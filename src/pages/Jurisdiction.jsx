import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import './Jurisdiction.css'

/**
 * Business Setup inner page — one renderer for UAE Mainland, UAE Free Zone
 * and UAE Offshore.
 *
 * Every string comes from `src/data/jurisdictions.js`, which is a verbatim
 * transcription of "Website Content_Vision.docx". Sections that the document
 * does not provide for a given jurisdiction (Free Zone has no closing CTA,
 * only Offshore has "Why Choose Vision Business Setup") are simply not
 * rendered.
 *
 * Opens on the shared PageHero; `heroImage` is supplied per route in App.jsx.
 */
export default function Jurisdiction({ data, heroImage }) {
  const {
    title,
    eyebrow,
    intro = [],
    definition,
    advantages,
    services,
    approach,
    whyChoose,
    closing,
  } = data

  return (
    <main className="jurPage">
      {/* 1 — Hero banner */}
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        image={heroImage}
      />

      {/* 2 — "What is a … Company?" + key advantages */}
      <section className="jurIntro">
        <div className="jurIntro__container">
          <div className="jurIntro__grid">
            <div className="jurIntro__content">
              <h2 className="jurIntro__title">{definition.title}</h2>
              {definition.paragraphs.map((para) => (
                <p className="jurIntro__para" key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            <aside className="jurAdvantages">
              <h3 className="jurAdvantages__title">{advantages.title}</h3>
              <ul className="jurAdvantages__list">
                {advantages.items.map((item) => (
                  <li className="jurAdvantages__item" key={item}>
                    <span className="jurAdvantages__check" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* 3 — "Our … Services Include" */}
      <section className="jurServices">
        <div className="jurServices__container">
          <header className="jurServices__head">
            <h2 className="jurServices__title">{services.title}</h2>
          </header>

          <ul className="jurServices__grid">
            {services.items.map((item) => (
              <li className="jurSvcCard" key={item.title}>
                <span className="jurSvcCard__icon">
                  <Icon name={item.icon} />
                </span>
                <h3 className="jurSvcCard__title">{item.title}</h3>
                <p className="jurSvcCard__text">{item.text}</p>

                {item.subItems && (
                  <ul className="jurSvcCard__subList">
                    {item.subItems.map((sub) => (
                      <li className="jurSvcCard__subItem" key={sub}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — "Our Approach" (+ "Why Choose Vision Business Setup" on Offshore) */}
      <section className="jurApproach">
        <div className="jurApproach__overlay" aria-hidden="true" />
        <div className="jurApproach__container">
          <div className={`jurApproach__grid${whyChoose ? '' : ' jurApproach__grid--single'}`}>
            <div className="jurApproach__content">
              <h2 className="jurApproach__title">{approach.title}</h2>
              {approach.paragraphs.map((para) => (
                <p className="jurApproach__para" key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>

            {whyChoose && (
              <aside className="jurWhy">
                <h3 className="jurWhy__title">{whyChoose.title}</h3>
                <ul className="jurWhy__list">
                  {whyChoose.items.map((item) => (
                    <li className="jurWhy__item" key={item}>
                      <span className="jurWhy__check" aria-hidden="true">
                        <Icon name="check" size="small" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* 5 — Closing call to action (absent for Free Zone in the document) */}
      {closing && (
        <section className="jurClosing">
          <div className="jurClosing__container">
            <div className="jurClosing__box">
              <h2 className="jurClosing__title">{closing.title}</h2>
              {closing.lines.map((line) => (
                <p className="jurClosing__line" key={line.slice(0, 32)}>{line}</p>
              ))}
              <Link to="/contact" className="jurClosing__cta">
                <span>{closing.cta}</span>
                <Icon name="arrow-right" size="small" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
