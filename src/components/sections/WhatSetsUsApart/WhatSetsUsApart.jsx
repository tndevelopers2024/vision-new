import { whatSetsUsApart } from '../../../data/home.js'
import useInView from '../../../hooks/useInView.js'
import Icon from '../../ui/Icon.jsx'
import './WhatSetsUsApart.css'

/**
 * Section 4 — What Sets Us Apart.
 *
 * Editorial treatment in the site's monochrome section language (black type,
 * hairline rules, flip-to-black button — as in Who We Work With and Our
 * Services): an asymmetric two-column layout with the headline column beside
 * four hairline-divided rows, each led by an index numeral.
 *
 * Scroll behaviour: the headline column is sticky, and both it and the rows
 * reveal on entry via `useInView` — each row is observed on its own so the
 * stagger follows the scroll rather than firing all at once. Everything is
 * disabled under `prefers-reduced-motion`.
 *
 * Content is unchanged from the source document: eyebrow, two-part headline,
 * intro line, the four differentiators and the closing call to action.
 */

/** One differentiator row — observed individually so it reveals as it arrives. */
function WsItem({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <li
      ref={ref}
      className={`wsItem wsReveal${inView ? ' is-inView' : ''}`}
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="wsItem__icon">
        <Icon name={item.icon} />
      </span>

      <div className="wsItem__body">
        <h3 className="wsItem__title">{item.title}</h3>
        <p className="wsItem__text">{item.text}</p>
      </div>
    </li>
  )
}

export default function WhatSetsUsApart() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, items } = whatSetsUsApart
  const [headRef, headInView] = useInView({ threshold: 0.3 })

  return (
    <section className="whatSets" id="why-vision">
      <div className="whatSets__cell">
        <div className="whatSets__layout">
          <header
            className={`whatSets__head${headInView ? ' is-inView' : ''}`}
            ref={headRef}
          >
            <span className="whatSets__super wsReveal">{eyebrow}</span>

            <h2 className="whatSets__title">
              <span
                className="whatSets__titlePlain wsReveal"
                style={{ '--reveal-delay': '90ms' }}
              >
                {title}
              </span>
              <strong
                className="whatSets__titleAccent wsReveal"
                style={{ '--reveal-delay': '170ms' }}
              >
                {accent}
              </strong>
            </h2>

            <p className="whatSets__intro wsReveal" style={{ '--reveal-delay': '260ms' }}>
              {intro}
            </p>

            <a
              href={ctaHref}
              className="whatSets__button wsReveal"
              style={{ '--reveal-delay': '350ms' }}
            >
              <span>{cta}</span>
              <Icon name="arrow-right" size="small" />
            </a>
          </header>

          <ol className="whatSets__grid">
            {items.map((item, index) => (
              <WsItem item={item} index={index} key={item.title} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
