import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import WhatSetsUsApart from '../components/sections/WhatSetsUsApart/WhatSetsUsApart.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import Founder from '../components/sections/Founder/Founder.jsx'
import { ourStory, coreValues } from '../data/home.js'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import imgStory from '../assets/images/our-story-advisory.jpg'
import imgHero from '../assets/images/about-page-hero.jpg'
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
  return (
    <main className="aboutPage">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="About Us"
        intro="Every Business starts with Vision."
        image={imgHero}
      />

      {/* ── 2. Our Story ────────────────────────────────────────── */}
      <section className="aboutStory" id="our-story">
        <div className="aboutStory__inner">
          <div className="aboutStory__panel">
            <span className="aboutStory__badge">Established in 2015</span>
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
      <Founder />

    </main>
  )
}
