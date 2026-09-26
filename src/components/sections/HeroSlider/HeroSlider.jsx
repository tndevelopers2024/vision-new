import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../../../data/home.js'
import './HeroSlider.css'

import bannerBurjKhalifa from '../../../assets/images/banner-burj-khalifa.jpg'
import bannerPalmJumeirah from '../../../assets/images/banner-palm-jumeirah.jpg'
import bannerAtlantis from '../../../assets/images/banner-atlantis.webp'
import bannerNight from '../../../assets/images/banner-night.jpg'

const IMAGES = {
  'banner-burj-khalifa.jpg': bannerBurjKhalifa,
  'banner-palm-jumeirah.jpg': bannerPalmJumeirah,
  'banner-atlantis.webp': bannerAtlantis,
  'banner-night.jpg': bannerNight,
}

const resolveImage = (imgName) => {
  if (IMAGES[imgName]) return IMAGES[imgName]
  if (imgName?.startsWith('/')) return imgName
  return `/banner/${imgName}`
}

const AUTOPLAY_MS = 5500

/**
 * Section 1 — Hero slider.
 *
 * Full-bleed, centered luxury banner with dark Dubai skyline,
 * elegant typography and stable dual outline buttons inspired by Pride and Property.
 *
 * Background crossfades independently so foreground buttons never duplicate or ghost.
 */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const count = heroSlides.length
  const timer = useRef(null)

  const goTo = useCallback((i) => setCurrent(((i % count) + count) % count), [count])
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count])

  useEffect(() => {
    timer.current = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(timer.current)
  }, [next])

  const pick = useCallback(
    (i) => {
      window.clearInterval(timer.current)
      timer.current = window.setInterval(next, AUTOPLAY_MS)
      goTo(i)
    },
    [goTo, next],
  )

  const activeSlide = heroSlides[current] || heroSlides[0]

  return (
    <section
      className="heroSlider"
      aria-roledescription="carousel"
      aria-label="Vision Business Setup"
    >
      {/* Background layer crossfades smoothly behind the content */}
      <div className="heroSlider__bgLayer">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className={`heroSlideBg${i === current ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${resolveImage(slide.image)})` }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Foreground Content — Rendered once to eliminate ghosting / double buttons */}
      <div className="heroSlide__inner">
        <div className="heroSlide__content">
          <p className="heroSlide__super" key={`super-${current}`}>
            {activeSlide.super}
          </p>

          <div className="heroSlide__titleBox">
            <h1 className="heroSlide__title" key={`title-${current}`}>
              {activeSlide.title}
            </h1>
          </div>

          {activeSlide.text && (
            <p className="heroSlide__sub" key={`sub-${current}`}>
              {activeSlide.text}
            </p>
          )}

          {/* Stable single instance of action buttons — never duplicates or shifts */}
          <div className="heroButtons">
            <Link to="/about" className="heroButton" style={{ color: '#ffffff' }}>
              About Us
            </Link>
            <Link to="/contact" className="heroButton" style={{ color: '#ffffff' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <ul className="heroDots" role="tablist" aria-label="Select a slide">
        {heroSlides.map((slide, i) => (
          <li key={slide.title} className={i === current ? 'is-active' : ''}>
            <button
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              onClick={() => pick(i)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
