import { useRef, useState, useEffect, useCallback } from 'react'
import { whoWeWorkWith } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './WhoWeWorkWith.css'

import workWith01 from '../../../assets/images/industry-real-estate.jpg'
import workWith02 from '../../../assets/images/industry-food-beverage.jpg'
import workWith03 from '../../../assets/images/industry-trading-commerce.jpg'
import workWith04 from '../../../assets/images/industry-salons-lifestyle.jpg'
import workWith05 from '../../../assets/images/industry-manpower-workforce.jpg'

const IMAGES = {
  'industry-real-estate.jpg': workWith01,
  'industry-food-beverage.jpg': workWith02,
  'industry-trading-commerce.jpg': workWith03,
  'industry-salons-lifestyle.jpg': workWith04,
  'industry-manpower-workforce.jpg': workWith05,
}

/**
 * Section 5 — Who We Work With (Luxury Executive Redesign)
 *
 * Designed in full alignment with the Pride & Property / Avantage monochrome luxury theme:
 * - Sarabun typography with proper weight contrast
 * - Refined pill badge & tracking
 * - Dual view modes: Luxury Carousel Slider (default) & Balanced All-Industries Grid
 * - Full-height photographic cards with deep multi-stop gradient scrims
 * - Industry tags, numeral badges, dedicated SVG icons, and setup capabilities
 * - Interactive carousel controls with touch/swipe support and progress indicator
 * - Executive closing consultation banner connecting to #request-callback
 */
export default function WhoWeWorkWith() {
  const { super: eyebrow, title, accent, intro, items } = whoWeWorkWith
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState((1 / items.length) * 100)

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
    const card = el.querySelector('.whoCard')
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
    <section className="whoWork" id="industries">
      <div className="whoWork__cell">
        {/* Header Row: Title & Subtitle on Left, Navigation Controls on Right */}
        <div className="whoWork__headerRow">
          <header className="whoWork__head">
            <div className="whoWork__badgeWrapper">
              <span className="whoWork__badge">{eyebrow}</span>
            </div>
            <h2 className="whoWork__title">
              <span className="whoWork__plain">{title}</span>{' '}
              <strong className="whoWork__accent">{accent}</strong>
            </h2>
            <p className="whoWork__intro">{intro}</p>
          </header>

          <div className="whoWork__toolbar">
            {/* Carousel Navigation Buttons */}
            <div className="whoWork__controls" aria-label="Industries carousel controls">
              <button
                type="button"
                className={`whoNavBtn whoNavBtn--prev ${!canScrollLeft ? 'whoNavBtn--disabled' : ''}`}
                onClick={() => scrollBy(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous industry"
              >
                <Icon name="arrow-left" />
              </button>
              <button
                type="button"
                className={`whoNavBtn whoNavBtn--next ${!canScrollRight ? 'whoNavBtn--disabled' : ''}`}
                onClick={() => scrollBy(1)}
                disabled={!canScrollRight}
                aria-label="Next industry"
              >
                <Icon name="arrow-right" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="whoWork__container">
          <div className="whoWork__track" ref={trackRef}>
            {items.map((item) => {
              const imgSrc = IMAGES[item.image] || workWith01

              return (
                <article className="whoCard" key={item.title}>
                  {/* Full-bleed high-resolution imagery */}
                  <div className="whoCard__media">
                    <img
                      src={imgSrc}
                      alt={`${item.title} - Vision Business Setup UAE`}
                      className="whoCard__image"
                      loading="lazy"
                    />
                    <div className="whoCard__overlay" />
                    {item.tag && (
                      <div className="whoCard__topMeta">
                        <span className="whoCard__tag">{item.tag}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Overlay */}
                  <div className="whoCard__content">
                    <div className="whoCard__headingRow">
                      {item.icon && (
                        <span className="whoCard__icon" aria-hidden="true">
                          <Icon name={item.icon} />
                        </span>
                      )}
                      <h3 className="whoCard__title">{item.title}</h3>
                    </div>

                    {item.desc && (
                      <p className="whoCard__desc">{item.desc}</p>
                    )}

                    {item.features && item.features.length > 0 && (
                      <ul className="whoCard__features">
                        {item.features.map((feat) => (
                          <li key={feat} className="whoCard__featureItem">
                            <span className="whoCard__featureBullet" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="whoCard__foot">
                      <a href="/contact" className="whoCard__link">
                        <span>Contact Us</span>
                        <Icon name="arrow-right" size="small" />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <p className="whoWork__intro">{whoWeWorkWith.closing}</p>

        {/* Bottom Progress Bar & Counter */}
        <div className="whoWork__pagination">
          <div
            className="whoWork__progressTrack"
            role="scrollbar"
            aria-label="Industries carousel scrollbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            onPointerDown={handleTrackPointerDown}
          >
            <div
              className="whoWork__progressBar"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
          <span className="whoWork__counter">
            0{activeIndex + 1} / 0{items.length}
          </span>
        </div>
      </div>
    </section>
  )
}
