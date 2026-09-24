import { useState, useRef, useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import Icon from '../components/ui/Icon.jsx'
import {
  servicesHero,
  servicesStats,
  serviceCategories,
  categoryBanners,
} from '../data/services.js'
import imgHero from '../assets/images/services-page-hero-new.jpg'
import './Services.css'

function ServiceCategorySlider({ category, catIndex, handleEnquireClick }) {
  const trackRef = useRef(null)
  const items = category.services
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(items.length > 3)
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
    const card = el.querySelector('.svcSlide')
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
    <section
      id={category.id}
      className={`svcCategorySection ${catIndex % 2 === 1 ? 'svcCategorySection--alt' : ''}`}
    >
      <div className="svcCategorySection__container">
        {/* Category Header (Two Column Layout) */}
        <header className="svcCategoryHead">
          <div className="svcCategoryHead__left">
            <span className="svcCategoryHead__badge">
              <Icon name={category.icon} size="small" />
              <span>{category.shortTitle.toUpperCase()} SERVICES</span>
            </span>
            <h2 className="svcCategoryHead__title">{category.title}</h2>
          </div>
          <div className="svcCategoryHead__right">
            <p className="svcCategoryHead__desc">{category.description}</p>
            <div className="svcCategoryHead__actions">
              <button
                className="svcCategoryHead__cta"
                onClick={() => handleEnquireClick(category.title)}
              >
                <span>Enquire Now</span>
                <Icon name="arrow-up-right" size="small" />
              </button>
              <div className="svcCategoryHead__nav">
                <button
                  type="button"
                  className={`svcSliderBtn ${!canScrollLeft ? 'svcSliderBtn--disabled' : ''}`}
                  onClick={() => scrollBy(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Previous services"
                >
                  <Icon name="arrow-left" size="small" />
                </button>
                <button
                  type="button"
                  className={`svcSliderBtn ${!canScrollRight ? 'svcSliderBtn--disabled' : ''}`}
                  onClick={() => scrollBy(1)}
                  disabled={!canScrollRight}
                  aria-label="Next services"
                >
                  <Icon name="arrow-right" size="small" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Horizontal Scrollable Slider Track */}
        <div className="svcTrackWrapper">
          <div className="svcTrack" ref={trackRef}>
            {items.map((service) => {
              const bgImage = service.heroImage || categoryBanners[category.id] || imgHero
              return (
                <div key={service.id} className="svcSlide">
                  <Link to={`/services/${service.id}`} className="svcCard">
                    <div className="svcCard__imgWrap">
                      <img src={bgImage} alt={service.title} className="svcCard__img" />
                      <div className="svcCard__badge">{category.shortTitle.toUpperCase()}</div>
                    </div>
                    <div className="svcCard__content">
                      <header className="svcCard__header">
                        <div className="svcCard__iconWrap">
                          <Icon name={service.icon || category.icon} size="small" />
                        </div>
                        <h3 className="svcCard__title">{service.title}</h3>
                      </header>
                      <p className="svcCard__summary">{service.summary}</p>

                      {service.deliverables && service.deliverables.length > 0 && (
                        <ul className="svcCard__featureList">
                          {service.deliverables.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="svcCard__featureItem">
                              <span className="svcCard__bullet">♦</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="svcCard__footer">
                        <span className="svcCard__enquiry">
                          ENQUIRY <Icon name="arrow-right" size="small" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Bar & Counter (Exact Match to Reference Screenshot) */}
        <div className="svcSliderPagination">
          <div
            className="svcSliderProgressTrack"
            onPointerDown={handleTrackPointerDown}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Services carousel progress"
          >
            <div className="svcSliderProgressBar" style={{ width: `${progress}%` }} />
          </div>
          <div className="svcSliderCounter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace(/^#/, '')
    return serviceCategories.some((c) => c.id === hash) ? hash : 'all'
  })
  const targetCategoryFromHash = location.hash ? location.hash.replace(/^#/, '') : null
  const [prevHash, setPrevHash] = useState(location.hash)
  if (prevHash !== location.hash) {
    setPrevHash(location.hash)
    if (targetCategoryFromHash && serviceCategories.some((c) => c.id === targetCategoryFromHash)) {
      setActiveTab(targetCategoryFromHash)
    }
  }

  // Flatten all services for count
  const allServicesList = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({ id: s.id, title: s.title, category: cat.shortTitle }))
  )

  function handleEnquireClick() {
    navigate('/contact')
  }

  const displayedCategories =
    activeTab === 'all'
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeTab)

  return (
    <main className="svcPage">
      {/* 1 — Hero */}
      <PageHero
        crumbs={servicesHero.crumbs}
        eyebrow={servicesHero.eyebrow}
        title={servicesHero.title}
        intro={servicesHero.intro}
        image={imgHero}
      />

      {/* 2 — Key Metrics Strip */}
      <section className="svcMetrics">
        <div className="svcMetrics__container">
          <div className="svcMetrics__grid">
            {servicesStats.map((stat) => (
              <div className="svcMetricCard" key={stat.label}>
                <div className="svcMetricCard__value">{stat.value}</div>
                <div className="svcMetricCard__label">{stat.label}</div>
                <div className="svcMetricCard__desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Category Filter Tabs Bar */}
      <nav className="svcNav" aria-label="Service categories filter">
        <div className="svcNav__container">
          <div className="svcNav__list">
            <button
              type="button"
              className={`svcNav__item ${activeTab === 'all' ? 'svcNav__item--active' : ''}`}
              onClick={() => {
                setActiveTab('all')
                window.history.replaceState(null, '', '/services')
              }}
            >
              <span className="svcNav__label">All Services</span>
              <span className="svcNav__badge">{allServicesList.length}</span>
            </button>

            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`svcNav__item ${activeTab === cat.id ? 'svcNav__item--active' : ''}`}
                onClick={() => {
                  setActiveTab(cat.id)
                  window.history.replaceState(null, '', `/services#${cat.id}`)
                  const el = document.getElementById(cat.id)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="svcNav__icon">
                  <Icon name={cat.icon} size="small" />
                </span>
                <span className="svcNav__label">{cat.title}</span>
                <span className="svcNav__badge">{cat.services.length}</span>
              </button>
            ))}

            <Link to="/contact" className="svcNav__item svcNav__item--cta">
              <span>Quick Callback</span>
              <Icon name="arrow-right" size="small" />
            </Link>
          </div>
        </div>
      </nav>

      {/* 4 — Service Categories Content */}
      <div className="svcBody">
        {displayedCategories.map((category, catIndex) => (
          <ServiceCategorySlider
            key={category.id}
            category={category}
            catIndex={catIndex}
            handleEnquireClick={handleEnquireClick}
          />
        ))}
      </div>
    </main>
  )
}
