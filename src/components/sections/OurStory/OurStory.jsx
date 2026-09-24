import { ourStory } from '../../../data/home.js'
import SmartLink from '../../ui/SmartLink.jsx'
import imgAboutUs from '../../../assets/images/about/AI-Powered Image Generation.avif'
import './OurStory.css'

/**
 * Checklist mark — a hairline circle with a fine check. Geometric rather than
 * hand-drawn, and deliberately not a bordered square, which would read as a
 * checkbox form control.
 */
function CheckMarkIcon() {
  return (
    <svg
      className="aboutCheckIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11.25" stroke="currentColor" strokeWidth="0.9" />
      <path
        d="M7.2 12.3 10.6 15.7 17 9.3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

/**
 * Section 3 — Why Choose Vision Business Setup?
 * Recreated with luxury precision inspired by the user's reference image.
 */
export default function OurStory() {
  const {
    badge = 'About Us',
    title = 'Our Story',
    paragraphs = [],
    lead = [],
    checklist = [],
    quote,
    buttonText = 'More about us',
    buttonHref = '/about',
  } = ourStory

  return (
    <section className="aboutWhySection" id="our-story" data-id="about-us">
      <div className="aboutWhyContainer">
        {/* Left Column: Content */}
        <div className="aboutWhyContent">
          <div className="aboutWhyBadgeWrapper">
            <span className="aboutWhyBadge">{badge}</span>
          </div>

          <h2 className="aboutWhyTitle">{title}</h2>

          {/* Short teaser on the homepage; the full story lives on /about. */}
          <div className="aboutWhyParagraphs">
            {(lead.length > 0 ? lead : paragraphs.slice(0, 2)).map((para) => (
              <p className="aboutWhyParagraph" key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          {checklist.length > 0 && (
            <ul className="aboutWhyList">
              {checklist.map((item, index) => (
                <li className="aboutWhyListItem" key={index}>
                  <span className="aboutWhyIconWrapper">
                    <CheckMarkIcon />
                  </span>
                  <span className="aboutWhyItemText">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {quote && (
            <div className="aboutWhyQuote">
              <span className="aboutWhyQuoteText">{quote}</span>
            </div>
          )}

          <div className="aboutWhyAction">
            <SmartLink href={buttonHref} className="aboutWhyButton">
              <span>{buttonText}</span>
            </SmartLink>
          </div>
        </div>

        {/* Right Column: Visual Media Presentation */}
        <div className="aboutWhyMedia">
          <div className="aboutWhyImageFrame">
            <img
              src={imgAboutUs}
              alt="Vision Business Setup — UAE Corporate Advisory and Company Formation"
              className="aboutWhyImage"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
