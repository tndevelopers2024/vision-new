import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import Icon from '../components/ui/Icon.jsx'
import {
  servicesHero,
  servicesStats,
  serviceCategories,
  servicesProcess,
  servicesFaq,
} from '../data/services.js'
import { contact } from '../config/contact.js'
import imgHero from '../assets/images/banner-burj-khalifa.jpg'
import './Services.css'

export default function Services() {
  const [selectedService, setSelectedService] = useState('')
  const [activeFaq, setActiveFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [expandedCards, setExpandedCards] = useState({})

  // Flatten all services for the inquiry dropdown
  const allServicesList = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({ id: s.id, title: s.title, category: cat.shortTitle }))
  )

  function handleEnquireClick(serviceTitle) {
    setSelectedService(serviceTitle)
    const el = document.getElementById('request-callback')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function toggleCardDetails(serviceId) {
    setExpandedCards((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    // eslint-disable-next-line no-console
    console.info('[Services] Inquiry submission:', data)
    e.currentTarget.reset()
    setSubmitted(true)
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
              onClick={() => setActiveTab('all')}
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

            <a href="#request-callback" className="svcNav__item svcNav__item--cta">
              <span>Quick Callback</span>
              <Icon name="arrow-right" size="small" />
            </a>
          </div>
        </div>
      </nav>

      {/* 4 — Service Categories Content */}
      <div className="svcBody">
        {displayedCategories.map((category, catIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`svcCategorySection ${catIndex % 2 === 1 ? 'svcCategorySection--alt' : ''}`}
          >
            <div className="svcCategorySection__container">
              {/* Category Header */}
              <header className="svcCategoryHead">
                <div className="svcCategoryHead__badgeRow">
                  <span className="svcCategoryHead__badge">
                    <Icon name={category.icon} size="small" />
                    <span>CATEGORY {category.shortTitle.toUpperCase()}</span>
                  </span>
                  <span className="svcCategoryHead__tally">
                    {category.services.length} Specialized Solutions
                  </span>
                </div>

                <h2 className="svcCategoryHead__title">{category.title}</h2>
                <p className="svcCategoryHead__tagline">{category.tagline}</p>
                <p className="svcCategoryHead__desc">{category.description}</p>
              </header>

              {/* Service Cards Grid */}
              <div className="svcGrid">
                {category.services.map((service, sIndex) => {
                  const isExpanded = Boolean(expandedCards[service.id])

                  return (
                    <article
                      key={service.id}
                      id={service.id}
                      className={`svcCard ${isExpanded ? 'svcCard--expanded' : ''}`}
                    >
                      <div className="svcCard__top">
                        <span className="svcCard__index">
                          {String(catIndex + 1).padStart(2, '0')}.{String(sIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="svcCard__badges">
                          {service.timeframe && (
                            <span className="svcCard__timeBadge">
                              <Icon name="clock" size="small" />
                              <span>{service.timeframe}</span>
                            </span>
                          )}
                          <span className="svcCard__badge">{service.badge}</span>
                        </div>
                      </div>

                      <div className="svcCard__iconWrap">
                        <Icon name={service.icon} size="normal" />
                      </div>

                      <h3 className="svcCard__title">{service.title}</h3>
                      <p className="svcCard__summary">{service.summary}</p>
                      <p className="svcCard__desc">{service.description}</p>

                      {/* Decisive Zone Applicable Amendments (if present) */}
                      {service.applicableAmendments && (
                        <div className="svcCard__featureBlock">
                          <h4 className="svcCard__featureTitle">Available Amendments:</h4>
                          <ul className="svcCard__featureList">
                            {service.applicableAmendments.map((item) => (
                              <li key={item} className="svcCard__featureItem">
                                <span className="svcCard__featureDot" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Decisive Zone Eligibility Criteria (if present) */}
                      {service.eligibilityCriteria && (
                        <div className="svcCard__featureBlock">
                          <h4 className="svcCard__featureTitle">Qualifying Categories & Criteria:</h4>
                          <ul className="svcCard__featureList">
                            {service.eligibilityCriteria.map((item) => (
                              <li key={item} className="svcCard__featureItem">
                                <span className="svcCard__featureDot" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Decisive Zone Key Benefits (if present) */}
                      {service.keyBenefits && (
                        <div className="svcCard__featureBlock svcCard__featureBlock--highlight">
                          <h4 className="svcCard__featureTitle">Exclusive Key Benefits:</h4>
                          <ul className="svcCard__featureList">
                            {service.keyBenefits.map((item) => (
                              <li key={item} className="svcCard__featureItem">
                                <Icon name="star" size="small" className="svcCard__starIcon" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Decisive Zone Partner Banks (if present) */}
                      {service.bankingPartners && (
                        <div className="svcCard__featureBlock">
                          <h4 className="svcCard__featureTitle">Premier UAE Banking Partners:</h4>
                          <div className="svcCard__tagCloud">
                            {service.bankingPartners.map((bank) => (
                              <span key={bank} className="svcCard__tag">
                                {bank}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Decisive Zone Key Tax Pillars (if present) */}
                      {service.keyTaxPillars && (
                        <div className="svcCard__featureBlock">
                          <h4 className="svcCard__featureTitle">Corporate Tax Framework (9% FTA):</h4>
                          <ul className="svcCard__featureList">
                            {service.keyTaxPillars.map((item) => (
                              <li key={item} className="svcCard__featureItem">
                                <span className="svcCard__featureDot" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Decisive Zone Bookkeeping Inclusions (if present) */}
                      {service.bookkeepingInclusions && (
                        <div className="svcCard__featureBlock">
                          <h4 className="svcCard__featureTitle">Bookkeeping & Reporting Inclusions:</h4>
                          <ul className="svcCard__featureList">
                            {service.bookkeepingInclusions.map((item) => (
                              <li key={item} className="svcCard__featureItem">
                                <span className="svcCard__featureDot" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Deliverables / Scope of Work */}
                      <div className="svcCard__deliverables">
                        <h4 className="svcCard__delivTitle">What is included:</h4>
                        <ul className="svcCard__delivList">
                          {service.deliverables.map((deliv) => (
                            <li className="svcCard__delivItem" key={deliv}>
                              <span className="svcCard__delivCheck" aria-hidden="true">
                                <Icon name="check" size="small" />
                              </span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Requirements & Process Drawer */}
                      {(service.requirements || service.process) && (
                        <div className="svcCard__accordion">
                          <button
                            type="button"
                            className="svcCard__toggleBtn"
                            onClick={() => toggleCardDetails(service.id)}
                            aria-expanded={isExpanded}
                          >
                            <span>
                              {isExpanded
                                ? 'Hide Requirements & Process'
                                : 'View Required Documents & Steps'}
                            </span>
                            <Icon
                              name={isExpanded ? 'chevron-up' : 'chevron-down'}
                              size="small"
                            />
                          </button>

                          {isExpanded && (
                            <div className="svcCard__expandedPanel">
                              {service.requirements && (
                                <div className="svcCard__drawerSection">
                                  <h5 className="svcCard__drawerHeading">
                                    Required Documents:
                                  </h5>
                                  <ul className="svcCard__drawerList">
                                    {service.requirements.map((req) => (
                                      <li key={req}>{req}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {service.process && (
                                <div className="svcCard__drawerSection">
                                  <h5 className="svcCard__drawerHeading">
                                    Step-by-Step Procedure:
                                  </h5>
                                  <ol className="svcCard__drawerNumberedList">
                                    {service.process.map((step) => (
                                      <li key={step}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Card Actions */}
                      <div className="svcCard__footer">
                        <Link
                          to={`/services/${service.id}`}
                          className="svcCard__pageBtn"
                        >
                          <span>Full Service Details</span>
                          <Icon name="arrow-right" size="small" />
                        </Link>
                        <button
                          type="button"
                          className="svcCard__ctaBtn"
                          onClick={() => handleEnquireClick(service.title)}
                        >
                          <span>Quick Enquire</span>
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5 — 4-Step Process Section */}
      <section className="svcProcess">
        <div className="svcProcess__container">
          <header className="svcProcess__head">
            <span className="svcProcess__super">{servicesProcess.super}</span>
            <h2 className="svcProcess__title">
              {servicesProcess.title} <strong>{servicesProcess.accent}</strong>
            </h2>
            <p className="svcProcess__intro">{servicesProcess.intro}</p>
          </header>

          <div className="svcProcess__grid">
            {servicesProcess.steps.map((step) => (
              <div className="svcStepCard" key={step.num}>
                <div className="svcStepCard__num" aria-hidden="true">
                  {step.num}
                </div>
                <h3 className="svcStepCard__title">{step.title}</h3>
                <p className="svcStepCard__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — FAQ Section */}
      <section className="svcFaq">
        <div className="svcFaq__container">
          <header className="svcFaq__head">
            <span className="svcFaq__super">{servicesFaq.super}</span>
            <h2 className="svcFaq__title">
              {servicesFaq.title} <strong>{servicesFaq.accent}</strong>
            </h2>
          </header>

          <div className="svcFaq__list">
            {servicesFaq.items.map((item, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={item.question}
                  className={`svcFaqItem ${isOpen ? 'svcFaqItem--open' : ''}`}
                >
                  <button
                    type="button"
                    className="svcFaqItem__question"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <span className="svcFaqItem__toggleIcon" aria-hidden="true">
                      <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size="small" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="svcFaqItem__answer">
                      {Array.isArray(item.answer) ? (
                        item.answer.map((para, pIdx) => {
                          if (para.includes('•')) {
                            const items = para.split('\n').filter((it) => it.trim())
                            return (
                              <ul key={pIdx}>
                                {items.map((it, iIdx) => (
                                  <li key={iIdx}>
                                    {it.replace(/^[•\s*-]+/, '').trim()}
                                  </li>
                                ))}
                              </ul>
                            )
                          }
                          return <p key={pIdx}>{para}</p>
                        })
                      ) : (
                        item.answer
                          .split('\n\n')
                          .map((para, pIdx) => {
                            if (para.includes('•')) {
                              const items = para.split('\n').filter((it) => it.trim())
                              return (
                                <ul key={pIdx}>
                                  {items.map((it, iIdx) => (
                                    <li key={iIdx}>
                                      {it.replace(/^[•\s*-]+/, '').trim()}
                                    </li>
                                  ))}
                                </ul>
                              )
                            }
                            return <p key={pIdx}>{para}</p>
                          })
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7 — Request a Callback / Inquiry Form */}
      <section className="svcContact" id="request-callback">
        <div className="svcContact__container">
          <div className="svcContact__inner">
            {/* Form Column */}
            <div className="svcContact__formCol">
              <span className="svcContact__super">GET IN TOUCH</span>
              <h2 className="svcContact__title">Request a Callback</h2>
              <p className="svcContact__lead">
                Need guidance on a specific service? Tell us about your requirement and an experienced
                Vision consultant will connect with you promptly.
              </p>

              {submitted ? (
                <div className="svcContact__sent" role="status">
                  <div className="svcContact__sentIcon">
                    <Icon name="check-circle" size="large" />
                  </div>
                  <h3 className="svcContact__sentTitle">Inquiry Received Successfully</h3>
                  <p className="svcContact__sentDesc">
                    Thank you for reaching out. One of our dedicated corporate consultants will contact
                    you shortly to assist with your requirement.
                  </p>
                  <button
                    type="button"
                    className="svcContact__againBtn"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form className="svcContact__form" onSubmit={handleSubmit}>
                  <div className="svcField">
                    <label htmlFor="svc-name">Full Name *</label>
                    <input
                      id="svc-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Mohammed Al Mansoori"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="svcFieldRow">
                    <div className="svcField">
                      <label htmlFor="svc-phone">Phone Number *</label>
                      <input
                        id="svc-phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 50 000 0000"
                        autoComplete="tel"
                        required
                      />
                    </div>
                    <div className="svcField">
                      <label htmlFor="svc-email">Email Address *</label>
                      <input
                        id="svc-email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="svcField">
                    <label htmlFor="svc-service">Service of Interest</label>
                    <select
                      id="svc-service"
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">-- Select a corporate service --</option>
                      {allServicesList.map((s) => (
                        <option key={s.id} value={s.title}>
                          [{s.category}] {s.title}
                        </option>
                      ))}
                      <option value="Other / General Inquiry">Other / General Corporate Inquiry</option>
                    </select>
                  </div>

                  <div className="svcField">
                    <label htmlFor="svc-message">Message or Requirements (Optional)</label>
                    <textarea
                      id="svc-message"
                      name="message"
                      rows={4}
                      placeholder="Please share any specific details, timelines, or questions regarding your service requirement..."
                    />
                  </div>

                  <button type="submit" className="svcContact__submitBtn">
                    <span>Submit Inquiry</span>
                    <Icon name="arrow-right" size="small" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="svcContact__sideCol">
              <div className="svcSideCard">
                <span className="svcSideCard__badge">WHY VISION</span>
                <h3 className="svcSideCard__title">Client-First Corporate Support</h3>
                <p className="svcSideCard__text">
                  We don’t just process documentation — we act as your strategic advisors, ensuring
                  every setup, license renewal, and visa is legally compliant, cost-effective, and
                  delivered on time.
                </p>

                <ul className="svcSideCard__points">
                  <li>
                    <span className="svcSideCard__pointCheck" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span>Round-the-clock support beyond 9-to-5 hours</span>
                  </li>
                  <li>
                    <span className="svcSideCard__pointCheck" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span>Direct liaison with DET, MOHRE, GDRFA & FTA</span>
                  </li>
                  <li>
                    <span className="svcSideCard__pointCheck" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span>Fixed, transparent pricing with no hidden surprises</span>
                  </li>
                  <li>
                    <span className="svcSideCard__pointCheck" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span>Dedicated corporate account manager</span>
                  </li>
                </ul>

                <div className="svcSideCard__contactBlock">
                  <div className="svcSideContactItem">
                    <Icon name="phone" size="small" />
                    <div>
                      <span className="svcSideContactItem__label">Direct Hotline</span>
                      <a href={contact.phoneHref} className="svcSideContactItem__val">
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="svcSideContactItem">
                    <Icon name="mail" size="small" />
                    <div>
                      <span className="svcSideContactItem__label">Email Support</span>
                      <a href={`mailto:${contact.email}`} className="svcSideContactItem__val">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="svcSideContactItem">
                    <Icon name="pin" size="small" />
                    <div>
                      <span className="svcSideContactItem__label">Office Address</span>
                      <span className="svcSideContactItem__val">
                        {contact.addressLines.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="svcSideCard__ctaWrap">
                  <Link to="/contact" className="svcSideCard__linkBtn">
                    <span>Contact Us Directly</span>
                    <Icon name="arrow-right" size="small" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
