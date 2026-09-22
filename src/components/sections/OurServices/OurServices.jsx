import { Link } from 'react-router-dom'
import { ourServices } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './OurServices.css'

/**
 * Section 6 — Our Services.
 *
 * Three corporate-support categories (Licence / Visa / Finance & Banking)
 * presented as a joined hairline matrix: the columns share one grid rule,
 * so unequal list lengths no longer leave ragged card bottoms. Each column
 * carries an index numeral, the category icon, its documented sub-services
 * and a pinned footer (count + enquiry link), and inverts on hover / keyboard focus.
 */
export default function OurServices() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, groups } = ourServices

  return (
    <section className="ourServices" id="services">
      <div className="ourServices__cell">
        <header className="svcHead">
          <div className="svcHead__lead">
            <span className="svcHead__super">{eyebrow}</span>
            <h2 className="svcHead__title">
              <span className="svcHead__plain">{title}</span>{' '}
              <strong className="svcHead__accent">{accent}</strong>
            </h2>
            {intro && <p className="svcHead__intro">{intro}</p>}
          </div>

          <div className="svcHead__aside">
            <Link to={ctaHref} className="ourServices__button">
              <span>{cta}</span>
              <Icon name="arrow-right" size="small" />
            </Link>
          </div>
        </header>

        <ol className="svcMatrix">
          {groups.map((group) => (
            <li className="svcCol" key={group.title}>
              <div className="svcCol__top">
                <span className="svcCol__icon">
                  <Icon name={group.icon} />
                </span>
              </div>

              <h3 className="svcCol__title">{group.title}</h3>

              <ul className="svcCol__list">
                {group.items.map((item) => {
                  const serviceSlugMap = {
                    'License Renewal': '/services/license-renewal',
                    'License Modification': '/services/license-modification',
                    'License Cancellation': '/services/license-cancellation',
                    'License Freezing': '/services/license-freezing',
                    'Residence Visa': '/services/residence-visa',
                    'Dependent Visa': '/services/dependent-visa',
                    'Remote Work Visa': '/services/remote-work-visa',
                    'Golden Visa': '/services/golden-visa',
                    'Freelance Visa': '/services/freelance-visa',
                    'Bank Account Opening': '/services/bank-account-opening',
                    'Corporate Tax Guide': '/services/corporate-tax-guide',
                    'Bookkeeping & VAT Registration': '/services/bookkeeping-vat',
                  }
                  const href = serviceSlugMap[item]
                  return (
                    <li className="svcCol__item" key={item}>
                      <span className="svcCol__bullet" aria-hidden="true" />
                      {href ? (
                        <Link to={href} className="svcCol__itemLink">
                          {item}
                        </Link>
                      ) : (
                        <span className="svcCol__itemText">{item}</span>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="svcCol__foot">
                <span className="svcCol__tally">
                  {String(group.items.length).padStart(2, '0')} services
                </span>
                <Link className="svcCol__link" to={`/services#${group.slug || 'licence'}`}>
                  <span>Explore</span>
                  <Icon name="arrow-right" size="small" />
                  <span className="svcCol__linkLabel">
                    {' '}about {group.title}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
