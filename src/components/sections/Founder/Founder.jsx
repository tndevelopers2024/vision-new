import { founder } from '../../../data/home.js'
import viekramPic from '../../../assets/images/about/viekram_pic.jpg'
import './Founder.css'

/**
 * Section 8 — Our Founder.
 *
 * Full-length executive portrait of Viekram Sadwani on the left,
 * with his name, leadership title, and narrative on the right.
 */
export default function Founder() {
  const { super: eyebrow, name, role, initials, image, paragraphs } = founder
  const photoSrc = image || viekramPic

  return (
    <section className="founder" id="founder">
      <div className="founder__cell">
        <div className="founder__grid">
          {photoSrc ? (
            <div className="founder__media">
              <img
                src={photoSrc}
                alt={`${name} — ${role}`}
                className="founder__image"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="founder__monogramCard">
              <span className="founder__monogram" aria-hidden="true">{initials}</span>
            </div>
          )}

          <div className="founder__content">
            {eyebrow && <span className="founder__super">{eyebrow}</span>}
            <h2 className="founder__title">
              Our <strong>Founder</strong>
            </h2>

            <div className="founder__identity">
              <span className="founder__name">{name}</span>
              <span className="founder__role">{role}</span>
            </div>

            {paragraphs.map((p) => (
              <div className="founder__block" key={p.text.slice(0, 24)}>
                {p.heading && <h3 className="founder__subhead">{p.heading}</h3>}
                <p className="founder__para">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
