import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappLink } from '../../../config/contact.js'
import './WhatsApp.css'

/**
 * Floating WhatsApp button — Clean white rounded card with react-icons FaWhatsapp.
 */
export default function WhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-float__icon" aria-hidden="true" />
      <span className="whatsapp-float__label">Chat Now</span>
    </a>
  )
}
