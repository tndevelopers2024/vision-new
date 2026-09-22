import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import WhatSetsUsApart from '../components/sections/WhatSetsUsApart/WhatSetsUsApart.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import Founder from '../components/sections/Founder/Founder.jsx'
import { ourStory, coreValues, commitment } from '../data/home.js'
import { contact, hasPhone } from '../config/contact.js'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import imgStory from '../assets/images/our-story-advisory.jpg'
import imgHero from '../assets/images/banner-burj-khalifa.jpg'
import './AboutUs.css'

/**
 * About Us.
 *
 * Every user-facing string on this page comes from the client's own copy deck,
 * "Website Content_Vision.docx" (mirrored in `Website-Content-Vision.txt`), and
 * the sections follow that document's "About Us" order:
 *
 *   1. Hero
 *   2. Our Story
 *   3. Our Founder
 *   4. Who We Work With
 *   5. What Sets Us Apart
 *   6. Our Core Values
 *   7. Our Commitment
 *   8. Request a Callback  (a required feature per "Other Requirements")
 *
 * Nothing here is written copy: no invented statistics, straplines or intros.
 */
export default function AboutUs() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    // eslint-disable-next-line no-console
    console.info('[AboutUs] contact submission', data)
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <main className="aboutPage">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        title="About Us"
        intro="Every Business starts with Vision."
        image={imgHero}
      />

      {/* ── 2. Our Story ────────────────────────────────────────── */}
      <section className="aboutStory" id="our-story">
        <div className="aboutStory__inner">
          <div className="aboutStory__panel">
            <span className="aboutStory__badge">EST. 2015</span>
            <h2 className="aboutStory__title">{ourStory.title}</h2>
            {ourStory.paragraphs.map((p, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'aboutStory__lead'
                    : index === 2
                      ? 'aboutStory__quote'
                      : 'aboutStory__para'
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="aboutStory__media">
            <img
              src={imgStory}
              alt="Vision Business Setup — established in 2015"
              className="aboutStory__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Our Founder ──────────────────────────────────────── */}
      <Founder />

      {/* ── 4. Who We Work With ─────────────────────────────────── */}
      <WhoWeWorkWith />

      {/* ── 5. What Sets Us Apart ───────────────────────────────── */}
      <WhatSetsUsApart />

      {/* ── 6. Our Core Values ──────────────────────────────────── */}
      <section className="aboutStand" id="values">
        <header className="aboutStand__head">
          <h2 className="aboutStand__title">Our Core Values</h2>
        </header>

        <div className="aboutStand__grid">
          {coreValues.items.map((item) => (
            <article className="aboutValue" key={item.title}>
              <span className="aboutValue__num" aria-hidden="true">{item.num}</span>
              <span className="aboutValue__rule" aria-hidden="true" />
              <h3 className="aboutValue__title">{item.title}</h3>
              <p className="aboutValue__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 7. Our Commitment ───────────────────────────────────── */}
      <Commitment />

      {/* ── 8. Request a Callback ───────────────────────────────── */}
      <section className="aboutContact" id="request-callback">
        <div className="aboutContact__inner">
          <div className="aboutContact__formCol">
            <h2 className="aboutContact__formTitle">Request a Callback</h2>

            {sent ? (
              <div className="aboutContact__sent" role="status">
                <Icon name="check-circle" />
                <p>{commitment.closing.lines[0]}</p>
                <button type="button" className="aboutContact__again" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="aboutContact__form" onSubmit={handleSubmit}>
                <div className="aboutField">
                  <label htmlFor="ab-name">Name</label>
                  <input id="ab-name" name="name" type="text" placeholder="e.g. Mohammed Al Mansoori" autoComplete="name" />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-phone">Phone*</label>
                  <input id="ab-phone" name="phone" type="tel" placeholder="+971 50 000 0000" autoComplete="tel" required />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-email">Email*</label>
                  <input id="ab-email" name="email" type="email" placeholder="mohammed@example.com" autoComplete="email" required />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-message">Message</label>
                  <textarea id="ab-message" name="message" rows={4} placeholder="Tell us about your business setup requirements..." />
                </div>
                <button type="submit" className="aboutContact__submit">Request a Callback</button>
              </form>
            )}
          </div>

          <aside className="aboutContact__panel">
            <h2 className="aboutContact__panelTitle">{commitment.closing.tagline}</h2>
            <p className="aboutContact__panelText">{commitment.closing.lines[0]}</p>
            <p className="aboutContact__panelText">{commitment.closing.lines[1]}</p>
            <p className="aboutContact__panelMeta">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {hasPhone && <a href={contact.phoneHref}>{contact.phoneDisplay}</a>}
              <span>{contact.addressLines.join(', ')}</span>
              <span>{contact.hours}</span>
            </p>
            <Link to="/contact" className="aboutContact__cta">Contact Us</Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
