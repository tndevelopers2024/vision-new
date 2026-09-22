import { Link } from 'react-router-dom'
import { businessSetup } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './BusinessSetup.css'

import bgnBoxes01 from '../../../assets/images/bgn-boxes-01.jpg'
import bgnBoxes02 from '../../../assets/images/bgn-boxes-02.jpg'
import bgnBoxes03 from '../../../assets/images/bgn-boxes-03.jpg'

const IMAGES = {
  'bgn-boxes-01.jpg': bgnBoxes01,
  'bgn-boxes-02.jpg': bgnBoxes02,
  'bgn-boxes-03.jpg': bgnBoxes03,
}

/**
 * Section 2 — Business Setup Options.
 *
 * Reuses the Avantage "three overlapping cards" treatment (cards ride up over
 * the hero, faded photo background, crisp border). Each card introduces one of
 * the three UAE jurisdictions and links to its future dedicated page.
 */
export default function BusinessSetup() {
  const { super: eyebrow, title, accent, intro, options } = businessSetup

  return (
    <section className="businessSetup" id="business-setup">
      <div className="businessSetup__cell">
        <header className="bsHead">
          {eyebrow && <span className="bsHead__super">{eyebrow}</span>}
          <h2 className="bsHead__title">
            <span className="bsHead__plain">{title}</span>{' '}
            <strong className="bsHead__accent">{accent}</strong>
          </h2>
          <p className="bsHead__intro">{intro}</p>
        </header>

        <div className="businessSetup__row">
          {options.map((box) => (
            <article className="bsCard" key={box.title}>
              <div
                className="bsCard__content"
                style={{ backgroundImage: `url(${IMAGES[box.bg]})` }}
              >
                <span className="bsCard__icon">
                  <Icon name={box.icon} />
                </span>
                <span className="bsCard__super">{box.super}</span>
                <h3 className="bsCard__title">{box.title}</h3>
                <p className="bsCard__text">{box.text}</p>

                <ul className="bsCard__benefits">
                  {box.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span className="bsCard__benefitIcon" aria-hidden="true">
                        <Icon name="check" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to={box.href} className="bsCard__cta">
                  <span>{box.cta}</span>
                  <Icon name="arrow-right" size="small" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
