import { useRef, useState, useEffect, useCallback } from 'react'
import { testimonials } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './Testimonials.css'

import imgQuote01 from '../../../assets/images/img-quote-01.jpg'
import imgQuote02 from '../../../assets/images/img-quote-02.jpg'
import imgQuote03 from '../../../assets/images/img-quote-03.jpg'
import imgQuote04 from '../../../assets/images/img-quote-04.jpg'
import imgQuote05 from '../../../assets/images/img-quote-05.jpg'
import imgQuote06 from '../../../assets/images/img-quote-06.jpg'

const IMAGES = {
  'img-quote-01.jpg': imgQuote01,
  'img-quote-02.jpg': imgQuote02,
  'img-quote-03.jpg': imgQuote03,
  'img-quote-04.jpg': imgQuote04,
  'img-quote-05.jpg': imgQuote05,
  'img-quote-06.jpg': imgQuote06,
}

/**
 * Section 8 — Client Testimonials & Trust (Executive UAE Redesign)
 *
 * Designed in full alignment with the Vision Business Setup luxury corporate theme:
 * - Sarabun & Roboto typography
 * - Refined pill badge, headline & introductory lead
 * - Top-right navigation controls [ ← ] [ → ]
 * - Executive testimonial cards featuring:
 *   · 5-star ratings & jurisdiction / industry badges
 *   · Quotation icon accent
 *   · Value-driven review title & specific UAE business setup copy
 *   · Verified client details: avatar, name, designation, company, location
 * - Interactive carousel slider with smooth scroll snapping & progress bar
 * - Regional trust metrics counter strip
 */
export default function Testimonials() {
  const { super: eyebrow, title, accent, intro, items = [] } = testimonials
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState((1 / (items.length || 1)) * 100)

  const checkScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    setCanScrollLeft(scrollLeft > 6)
    setCanScrollRight(scrollLeft < maxScroll - 6)

    if (maxScroll <= 0) {
      setActiveIndex(0)
      setProgress(100)
      return
    }

    const ratio = Math.min(1, Math.max(0, scrollLeft / maxScroll))
    const idx = Math.min(items.length - 1, Math.max(0, Math.round(ratio * (items.length - 1))))
    setActiveIndex(idx)

    const minPercent = (1 / items.length) * 100
    const progressWidth = minPercent + ratio * (100 - minPercent)
    setProgress(progressWidth)
  }, [items.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scrollBy = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.tCard')
    const gap = 24
    const amount = card ? (card.offsetWidth + gap) * direction : 380 * direction
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handleTrackPointerDown = (e) => {
    const track = e.currentTarget
    track.setPointerCapture(e.pointerId)

    const seek = (clientX, smooth = false) => {
      const el = trackRef.current
      if (!el) return
      const rect = track.getBoundingClientRect()
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
      const maxScroll = el.scrollWidth - el.clientWidth
      if (smooth) {
        el.scrollTo({ left: ratio * maxScroll, behavior: 'smooth' })
      } else {
        el.scrollLeft = ratio * maxScroll
      }
    }

    seek(e.clientX, true)

    const onPointerMove = (evt) => {
      seek(evt.clientX, false)
    }

    const onPointerUp = (evt) => {
      try {
        track.releasePointerCapture(evt.pointerId)
      } catch {
        // ignore
      }
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
    }

    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', onPointerUp)
    track.addEventListener('pointercancel', onPointerUp)
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__cell">
        {/* Header Row */}
        <div className="testimonials__headerRow">
          <header className="testimonials__head">
            {eyebrow && (
              <div className="testimonials__badgeWrapper">
                <span className="testimonials__badge">{eyebrow}</span>
              </div>
            )}
            <h2 className="testimonials__title">
              <span className="testimonials__plain">{title}</span>{' '}
              <strong className="testimonials__accent">{accent}</strong>
            </h2>
            {intro && <p className="testimonials__intro">{intro}</p>}
          </header>

          <div className="testimonials__controls" aria-label="Testimonial navigation">
            <button
              type="button"
              className={`tNavBtn tNavBtn--prev ${!canScrollLeft ? 'tNavBtn--disabled' : ''}`}
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
            >
              <Icon name="arrow-left" />
            </button>
            <button
              type="button"
              className={`tNavBtn tNavBtn--next ${!canScrollRight ? 'tNavBtn--disabled' : ''}`}
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
            >
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div className="testimonials__sliderWrap">
          <div className="testimonials__track" ref={trackRef}>
            {items.map((item) => (
              <article className="tCard" key={item.name}>
                {/* Top card bar: Stars + Service Badge */}
                <div className="tCard__topBar">
                  <div className="tCard__rating" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span className="tCard__star" key={i} aria-hidden="true">
                        <Icon name="star" />
                      </span>
                    ))}
                  </div>

                  {item.serviceTag && (
                    <span className="tCard__tag">{item.serviceTag}</span>
                  )}
                </div>

                {/* Decorative Quote Icon */}
                <div className="tCard__quoteMark" aria-hidden="true">
                  <Icon name="quote" />
                </div>

                {/* Review Headline & Body */}
                <h3 className="tCard__title">{item.title}</h3>
                <p className="tCard__quote">“{item.quote}”</p>

                {/* Client Profile Footer */}
                <div className="tCard__footer">
                  <div className="tCard__avatar">
                    <img
                      src={IMAGES[item.image]}
                      alt={item.name}
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </div>

                  <div className="tCard__clientInfo">
                    <h4 className="tCard__name">{item.name}</h4>
                    <p className="tCard__role">
                      <span>{item.role}</span>
                      <span className="tCard__dot">•</span>
                      <strong className="tCard__company">{item.company}</strong>
                    </p>

                    <div className="tCard__meta">
                      {item.location && (
                        <span className="tCard__location">
                          <Icon name="pin" size="small" />
                          <span>{item.location}</span>
                        </span>
                      )}
                      {item.verified && (
                        <span className="tCard__verified">
                          <Icon name="badge-check" size="small" />
                          <span>Verified Client</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Progress Bar & Slide Counter */}
        <div className="testimonials__pagination">
          <div
            className="testimonials__progressTrack"
            role="scrollbar"
            aria-label="Testimonials carousel scrollbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            onPointerDown={handleTrackPointerDown}
          >
            <div
              className="testimonials__progressBar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="testimonials__counter">
            0{activeIndex + 1} / 0{items.length}
          </span>
        </div>


      </div>
    </section>
  )
}
