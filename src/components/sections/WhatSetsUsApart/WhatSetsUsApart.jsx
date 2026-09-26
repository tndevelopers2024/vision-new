import { whatSetsUsApart } from '../../../data/home.js'
import useInView from '../../../hooks/useInView.js'
import './WhatSetsUsApart.css'

/**
 * WhatSetsUsApart — 2x2 elevated white card grid with centered header.
 * Rebuilt to match the Pride & Property reference design:
 * - Centered headline + subtitle
 * - Clean 2x2 grid of modern rounded cards with soft depth
 * - High-contrast bold typography and spacious padding
 */

function WsCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`wsCard wsReveal${inView ? ' is-inView' : ''}`}
      style={{ '--reveal-delay': `${index * 80}ms` }}
    >
      <h3 className="wsCard__title">{item.title}</h3>
      <p className="wsCard__text">{item.text}</p>
    </div>
  )
}

export default function WhatSetsUsApart() {
  const { title, intro, items } = whatSetsUsApart
  const [headRef, headInView] = useInView({ threshold: 0.2 })

  return (
    <section className="whatSets" id="why-vision">
      <div className="whatSets__container">
        <header
          className={`whatSets__header wsReveal${headInView ? ' is-inView' : ''}`}
          ref={headRef}
        >
          <h2 className="whatSets__title">{title}</h2>
          {intro && <p className="whatSets__intro">{intro}</p>}
        </header>

        <div className="whatSets__grid">
          {items.map((item, index) => (
            <WsCard item={item} index={index} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
