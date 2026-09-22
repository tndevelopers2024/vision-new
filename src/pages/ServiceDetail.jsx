import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import Icon from '../components/ui/Icon.jsx'
import { getServiceBySlug } from '../data/services.js'
import { contact, hasPhone } from '../config/contact.js'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  const [activeFaq, setActiveFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!service) {
    return (
      <main className="sdNotFound">
        <div className="sdNotFound__container">
          <span className="sdNotFound__icon">
            <Icon name="close" size="large" />
          </span>
          <h1 className="sdNotFound__title">Service Not Found</h1>
          <p className="sdNotFound__text">
            We could not find the service you are looking for. Please browse our comprehensive list of corporate services.
          </p>
          <Link to="/services" className="sdBtn sdBtn--primary">
            <span>Browse All Services</span>
            <Icon name="arrow-right" size="small" />
          </Link>
        </div>
      </main>
    )
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    // eslint-disable-next-line no-console
    console.info(`[ServiceDetail:${service.id}] Consultation request:`, data)
    e.currentTarget.reset()
    setFormSubmitted(true)
  }

  const encodedWhatsAppMessage = encodeURIComponent(
    `Hello Vision Business Setup, I am interested in your ${service.title} service and would like to request more information.`
  )
  const serviceWhatsAppUrl = `https://wa.me/${contact.whatsappRaw}?text=${encodedWhatsAppMessage}`

  return (
    <main className="sdPage">
      {/* 1 — Hero */}
      <PageHero
        eyebrow={`${service.categoryShortTitle.toUpperCase()} • ${service.badge.toUpperCase()}`}
        title={service.title}
        intro={[service.summary]}
        image={service.heroImage}
      />


      {/* 3 — Main Two-Column Layout */}
      <div className="sdLayout">
        <div className="sdLayout__container">
          {/* Main Content Column */}
          <article className="sdContent">
            {/* Detailed Description */}
            <section className="sdSection sdSection--overview">
              <span className="sdSection__eyebrow">COMPREHENSIVE ADVISORY</span>
              <h2 className="sdSection__title">Overview of {service.title}</h2>
              <div className="sdSection__body">
                <p className="sdText--lead">{service.description}</p>
              </div>
            </section>

            {/* Applicable Amendments (if present) */}
            {service.applicableAmendments && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Eligible License Amendments</h3>
                <p className="sdSection__lead">
                  Our specialists handle all official commercial modifications across the Department of Economy and Tourism (DET) and Free Zone jurisdictions:
                </p>
                <ul className="sdFeatureGrid">
                  {service.applicableAmendments.map((amendment) => (
                    <li key={amendment} className="sdFeatureCard">
                      <span className="sdFeatureCard__bullet" aria-hidden="true" />
                      <span>{amendment}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Reasons to Cancel (if present) */}
            {service.reasonsToCancel && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Why Proper License Cancellation Matters</h3>
                <ul className="sdFeatureGrid">
                  {service.reasonsToCancel.map((reason) => (
                    <li key={reason} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="shield" size="small" />
                      </span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Rules (if present) */}
            {service.keyRules && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Regulatory Rules & Guidelines</h3>
                <ul className="sdFeatureGrid">
                  {service.keyRules.map((rule) => (
                    <li key={rule} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="badge-check" size="small" />
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Eligibility Criteria (if present) */}
            {service.eligibilityCriteria && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Qualifying Categories & Eligibility</h3>
                <div className="sdCriteriaList">
                  {service.eligibilityCriteria.map((item, idx) => (
                    <div key={item} className="sdCriteriaItem">
                      <span className="sdCriteriaItem__number">{String(idx + 1).padStart(2, '0')}</span>
                      <p className="sdCriteriaItem__text">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Benefits (if present) */}
            {service.keyBenefits && (
              <section className="sdSection sdSection--benefits">
                <h3 className="sdSection__subTitle">Key Privileges & Advantages</h3>
                <ul className="sdBenefitsList">
                  {service.keyBenefits.map((benefit) => (
                    <li key={benefit} className="sdBenefitsItem">
                      <span className="sdBenefitsItem__icon">
                        <Icon name="star" size="small" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Types of Visas / Dependents (if present) */}
            {service.typesOfVisas && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Covered Residency Categories</h3>
                <ul className="sdFeatureGrid">
                  {service.typesOfVisas.map((visaType) => (
                    <li key={visaType} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="passport" size="small" />
                      </span>
                      <span>{visaType}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Types of Dependents & Housing (if present) */}
            {service.typesOfDependents && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Eligible Family Dependents</h3>
                <ul className="sdFeatureGrid">
                  {service.typesOfDependents.map((dep) => (
                    <li key={dep} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="users" size="small" />
                      </span>
                      <span>{dep}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.salaryAndHousing && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Income & Tenancy Requirements</h3>
                <div className="sdThresholdBox">
                  {service.salaryAndHousing.map((thresh) => (
                    <div key={thresh} className="sdThresholdRow">
                      <span className="sdThresholdRow__dot" aria-hidden="true" />
                      <span>{thresh}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Freelance Sectors (if present) */}
            {service.eligibilityAndSectors && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Approved Professional Sectors</h3>
                <ul className="sdFeatureGrid">
                  {service.eligibilityAndSectors.map((sector) => (
                    <li key={sector} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="briefcase" size="small" />
                      </span>
                      <span>{sector}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Banking Partners (if present) */}
            {service.bankingPartners && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Premier Partner Banks in the UAE</h3>
                <p className="sdSection__lead">
                  We maintain direct institutional connections with leading local and international banks in Dubai:
                </p>
                <div className="sdBankPills">
                  {service.bankingPartners.map((bank) => (
                    <span key={bank} className="sdBankPill">
                      <Icon name="bank" size="small" />
                      <span>{bank}</span>
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Corporate Tax Pillars (if present) */}
            {service.keyTaxPillars && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Key Pillars of UAE Corporate Tax</h3>
                <ul className="sdFeatureGrid">
                  {service.keyTaxPillars.map((pillar) => (
                    <li key={pillar} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="compass" size="small" />
                      </span>
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* VAT Registration Rules (if present) */}
            {service.vatRegistrationRules && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">VAT Registration Thresholds</h3>
                <ul className="sdFeatureGrid">
                  {service.vatRegistrationRules.map((rule) => (
                    <li key={rule} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="badge-check" size="small" />
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Bookkeeping Inclusions (if present) */}
            {service.bookkeepingInclusions && (
              <section className="sdSection">
                <h3 className="sdSection__subTitle">Accounting & Bookkeeping Deliverables</h3>
                <ul className="sdFeatureGrid">
                  {service.bookkeepingInclusions.map((item) => (
                    <li key={item} className="sdFeatureCard">
                      <span className="sdFeatureCard__iconWrap" aria-hidden="true">
                        <Icon name="check" size="small" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Scope of Deliverables */}
            <section className="sdSection">
              <span className="sdSection__eyebrow">WHAT WE DELIVER</span>
              <h3 className="sdSection__title">Scope of Service & Inclusions</h3>
              <ul className="sdDeliverablesList">
                {service.deliverables.map((deliv) => (
                  <li key={deliv} className="sdDeliverableItem">
                    <span className="sdDeliverableItem__check" aria-hidden="true">
                      <Icon name="check" size="small" />
                    </span>
                    <span className="sdDeliverableItem__text">{deliv}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Required Documents */}
            {service.requirements && service.requirements.length > 0 && (
              <section className="sdSection sdSection--requirements">
                <span className="sdSection__eyebrow">DOCUMENTATION CHECKLIST</span>
                <h3 className="sdSection__title">Required Documents</h3>
                <p className="sdSection__lead">
                  To ensure a swift submission without regulatory queries, please prepare clear digital copies of the following documents:
                </p>
                <div className="sdReqList">
                  {service.requirements.map((req, rIdx) => (
                    <div key={req} className="sdReqItem">
                      <span className="sdReqItem__badge">{rIdx + 1}</span>
                      <span className="sdReqItem__text">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Step-by-Step Procedure */}
            {service.process && service.process.length > 0 && (
              <section className="sdSection sdSection--procedure">
                <span className="sdSection__eyebrow">CLEAR WORKFLOW</span>
                <h3 className="sdSection__title">Step-by-Step Procedure</h3>
                <div className="sdTimeline">
                  {service.process.map((step, sIdx) => (
                    <div key={step} className="sdTimelineStep">
                      <div className="sdTimelineStep__marker">
                        <span className="sdTimelineStep__num">
                          {String(sIdx + 1).padStart(2, '0')}
                        </span>
                        {sIdx < service.process.length - 1 && (
                          <span className="sdTimelineStep__line" aria-hidden="true" />
                        )}
                      </div>
                      <div className="sdTimelineStep__content">
                        <h4 className="sdTimelineStep__heading">Stage {sIdx + 1}</h4>
                        <p className="sdTimelineStep__desc">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="sdSection sdSection--faqs">
                <span className="sdSection__eyebrow">COMMON QUERIES</span>
                <h3 className="sdSection__title">Frequently Asked Questions</h3>
                <div className="sdFaqAccordion">
                  {service.faqs.map((faq, fIdx) => {
                    const isOpen = activeFaq === fIdx
                    return (
                      <div
                        key={faq.question}
                        className={`sdFaqItem ${isOpen ? 'sdFaqItem--open' : ''}`}
                      >
                        <button
                          type="button"
                          className="sdFaqItem__trigger"
                          onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                          aria-expanded={isOpen}
                        >
                          <span className="sdFaqItem__q">{faq.question}</span>
                          <span className="sdFaqItem__icon">
                            <Icon
                              name={isOpen ? 'chevron-up' : 'chevron-down'}
                              size="small"
                            />
                          </span>
                        </button>
                        {isOpen && (
                          <div className="sdFaqItem__answer">
                            {Array.isArray(faq.answer) ? (
                              faq.answer.map((para, pIdx) => {
                                if (para.includes('•')) {
                                  const items = para.split('\n').filter((it) => it.trim())
                                  return (
                                    <ul key={pIdx}>
                                      {items.map((item, iIdx) => (
                                        <li key={iIdx}>
                                          {item.replace(/^[•\s*-]+/, '').trim()}
                                        </li>
                                      ))}
                                    </ul>
                                  )
                                }
                                return <p key={pIdx}>{para}</p>
                              })
                            ) : (
                              faq.answer
                                .split('\n\n')
                                .map((para, pIdx) => {
                                  if (para.includes('•')) {
                                    const items = para.split('\n').filter((it) => it.trim())
                                    return (
                                      <ul key={pIdx}>
                                        {items.map((item, iIdx) => (
                                          <li key={iIdx}>
                                            {item.replace(/^[•\s*-]+/, '').trim()}
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
              </section>
            )}
          </article>

          {/* Sidebar Column */}
          <aside className="sdSidebar">
            {/* Quick Consultation Request Form */}
            <div className="sdFormCard" id="consultation-form">
              <div className="sdFormCard__head">
                <span className="sdFormCard__badge">DIRECT CONSULTANT ACCESS</span>
                <h3 className="sdFormCard__title">Request a Consultation</h3>
                <p className="sdFormCard__desc">
                  Enquire specifically for <strong>{service.title}</strong> and receive a customized timeline and fee proposal.
                </p>
              </div>

              {formSubmitted ? (
                <div className="sdFormSuccess">
                  <span className="sdFormSuccess__icon">
                    <Icon name="check-circle" size="large" />
                  </span>
                  <h4>Thank You!</h4>
                  <p>
                    Your request for <strong>{service.title}</strong> has been received. Our senior advisor will contact you within 2 business hours.
                  </p>
                  <button
                    type="button"
                    className="sdBtn sdBtn--outline"
                    onClick={() => setFormSubmitted(false)}
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form className="sdForm" onSubmit={handleFormSubmit}>
                  <div className="sdForm__field">
                    <label htmlFor="sd-name" className="sdForm__label">Your Full Name *</label>
                    <input
                      id="sd-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="sdForm__input"
                    />
                  </div>

                  <div className="sdForm__field">
                    <label htmlFor="sd-email" className="sdForm__label">Email Address *</label>
                    <input
                      id="sd-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      className="sdForm__input"
                    />
                  </div>

                  <div className="sdForm__field">
                    <label htmlFor="sd-phone" className="sdForm__label">Phone / WhatsApp *</label>
                    <input
                      id="sd-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="Your phone number"
                      className="sdForm__input"
                    />
                  </div>

                  <div className="sdForm__field">
                    <label htmlFor="sd-service" className="sdForm__label">Selected Service</label>
                    <input
                      id="sd-service"
                      type="text"
                      name="service"
                      readOnly
                      value={service.title}
                      className="sdForm__input sdForm__input--readonly"
                    />
                  </div>

                  <div className="sdForm__field">
                    <label htmlFor="sd-notes" className="sdForm__label">Brief Details or Questions</label>
                    <textarea
                      id="sd-notes"
                      name="notes"
                      rows="3"
                      placeholder="Brief details or questions..."
                      className="sdForm__textarea"
                    />
                  </div>

                  <button type="submit" className="sdBtn sdBtn--primary sdBtn--block">
                    <span>Submit Service Inquiry</span>
                    <Icon name="arrow-right" size="small" />
                  </button>
                </form>
              )}

              <div className="sdFormCard__direct">
                <span className="sdFormCard__directDivider">or speak immediately</span>
                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sdBtn sdBtn--whatsapp sdBtn--block"
                >
                  <Icon name="whatsapp" size="small" />
                  <span>Chat on WhatsApp</span>
                </a>
                {hasPhone && (
                  <a
                    href={contact.phoneHref}
                    className="sdBtn sdBtn--outline sdBtn--block"
                  >
                    <Icon name="phone" size="small" />
                    <span>Call {contact.phoneDisplay}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Sibling Category Services Card */}
            {service.relatedServices && service.relatedServices.length > 0 && (
              <div className="sdSiblingCard">
                <h4 className="sdSiblingCard__title">
                  More in {service.categoryTitle}
                </h4>
                <ul className="sdSiblingList">
                  {service.relatedServices.map((sibling) => (
                    <li key={sibling.id} className="sdSiblingItem">
                      <Link
                        to={`/services/${sibling.id}`}
                        className="sdSiblingLink"
                      >
                        <div className="sdSiblingLink__info">
                          <strong className="sdSiblingLink__title">{sibling.title}</strong>
                          <span className="sdSiblingLink__time">{sibling.timeframe}</span>
                        </div>
                        <Icon name="chevron-right" size="small" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="sdSiblingCard__footer">
                  <Link to="/services" className="sdSiblingCard__allLink">
                    <span>View All Services</span>
                    <Icon name="arrow-right" size="small" />
                  </Link>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* 4 — Related Services Section */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="sdRelated">
          <div className="sdRelated__container">
            <header className="sdRelated__head">
              <span className="sdRelated__eyebrow">EXPLORE COMPLEMENTARY SOLUTIONS</span>
              <h2 className="sdRelated__title">Related {service.categoryShortTitle} Services</h2>
            </header>

            <div className="sdRelated__grid">
              {service.relatedServices.slice(0, 3).map((rel) => (
                <article key={rel.id} className="sdRelatedCard">
                  <div className="sdRelatedCard__top">
                    <span className="sdRelatedCard__badge">{rel.badge}</span>
                    <span className="sdRelatedCard__time">{rel.timeframe}</span>
                  </div>
                  <h3 className="sdRelatedCard__title">{rel.title}</h3>
                  <p className="sdRelatedCard__summary">{rel.summary}</p>
                  <Link
                    to={`/services/${rel.id}`}
                    className="sdRelatedCard__link"
                  >
                    <span>Explore Service</span>
                    <Icon name="arrow-right" size="small" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
