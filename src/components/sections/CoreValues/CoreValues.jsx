import { useRef, useState, useEffect, useCallback } from 'react'
import { coreValues } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './CoreValues.css'

import imgTrust from '../../../assets/images/values/trust.jpg'
import imgTransparency from '../../../assets/images/values/transparency.jpg'
import imgUnderstanding from '../../../assets/images/values/understanding.jpg'
import imgSolutions from '../../../assets/images/values/tailored-solutions.jpg'
import imgQuality from '../../../assets/images/values/quality-service.jpg'
import imgReliability from '../../../assets/images/values/reliability.jpg'
import imgSupport from '../../../assets/images/values/end-to-end-support.jpg'

const VALUE_IMAGES = {
  'trust.jpg': imgTrust,
  'transparency.jpg': imgTransparency,
  'understanding.jpg': imgUnderstanding,
  'tailored-solutions.jpg': imgSolutions,
  'quality-service.jpg': imgQuality,
  'reliability.jpg': imgReliability,
  'end-to-end-support.jpg': imgSupport,
}

/**
 * Section 9 — Our Core Values (Luxury Carousel)
 * Inspired by Pride & Property Dubai:
 * - Header row with title on the left and rectangular [ ← ] [ → ] controls on the right.
 * - Horizontal carousel showing 3 full-bleed photo cards on desktop.
 * - Dynamic scroll snapping, smooth navigation, and a bottom progress tracker.
 */
export default function CoreValues() {
  const { super: eyebrow, title, accent, subtitle, items } = coreValues
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
    const card = el.querySelector('.cvSlide')
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
    <section className="coreValues" id="values">
      <div className="coreValues__cell">
        {/* Header Row: Title & Subtitle on Left, Carousel Controls on Right */}
        <div className="coreValues__headerRow">
          <header className="coreValues__head">
            {eyebrow && <span className="coreValues__badge">{eyebrow}</span>}
            <h2 className="coreValues__title">
              <span className="coreValues__titlePlain">{title}</span>{' '}
              <strong className="coreValues__titleAccent">{accent}</strong>
            </h2>
            {subtitle && <p className="coreValues__subtitle">{subtitle}</p>}
          </header>

          <div className="coreValues__controls" aria-label="Carousel navigation">
            <button
              type="button"
              className={`cvNavBtn cvNavBtn--prev ${!canScrollLeft ? 'cvNavBtn--disabled' : ''}`}
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous core value"
            >
              <Icon name="arrow-left" />
            </button>
            <button
              type="button"
              className={`cvNavBtn cvNavBtn--next ${!canScrollRight ? 'cvNavBtn--disabled' : ''}`}
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              aria-label="Next core value"
            >
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div className="coreValues__sliderWrap">
          <div className="coreValues__track" ref={trackRef}>
            {items.map((item) => {
              const imgSrc = VALUE_IMAGES[item.image] || imgTrust

              return (
                <article className="cvSlide" key={item.title}>
                  <div className="cvSlide__media">
                    <img
                      src={imgSrc}
                      alt={`${item.title} - Vision Business Setup`}
                      className="cvSlide__image"
                      loading="lazy"
                    />
                    <div className="cvSlide__overlay" />
                  </div>

                  <div className="cvSlide__content">
                    <div className="cvSlide__meta">
                      <span className="cvSlide__icon" aria-hidden="true">
                        <Icon name={item.icon} />
                      </span>
                      <h3 className="cvSlide__title">{item.title}</h3>
                    </div>
                    <p className="cvSlide__text">{item.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Bottom Progress Bar & Counter */}
        <div className="coreValues__pagination">
          <div
            className="coreValues__progressTrack"
            role="scrollbar"
            aria-label="Core values carousel scrollbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            onPointerDown={handleTrackPointerDown}
          >
            <div
              className="coreValues__progressBar"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
          <span className="coreValues__counter">
            0{activeIndex + 1} / 0{items.length}
          </span>
        </div>
      </div>
    </section>
  )
}
