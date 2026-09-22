/**
 * Vision Business Setup — contact configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDERS — the source document does not include contact details.
 *  Replace every value below with Vision Business Setup's real information
 *  before launch. Nothing here is a verified number or address.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * `whatsappNumber` must be digits only in full international format (no "+",
 * spaces or dashes) so it can be dropped straight into a wa.me link.
 */
const whatsappNumber = '971551612342'
const whatsappMessage =
  'Hi Vision Business Setup, I would like to know more about setting up my business in the UAE.'

/** wa.me deep link built from the configured number + prefilled message. */
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`

export const contact = {
  // Public phone line is configured site-wide.
  phoneDisplay: '+971 55 161 2342',
  phoneHref: 'tel:+971551612342',

  whatsappNumber,
  whatsappDisplay: '+971 55 161 2342',
  whatsappMessage,

  email: 'admin@visionbusinesssetup.ae',
  addressLines: ['IDS Business Center, Office no. 107', 'Karama, Dubai'],

  hours: '09.30 AM – 6.30 PM, Sunday Closed',

  // Get in Touch map. Leave `mapEmbedUrl` empty to show the styled placeholder;
  // paste a Google Maps / OpenStreetMap "embed" src URL once the office
  // location is confirmed. `mapLink` opens the full map in a new tab.
  mapEmbedUrl: '',
  mapLink: '',

  social: [
    { icon: 'whatsapp', href: whatsappLink, label: 'WhatsApp' },
  ],
}

/** True while a public phone number is configured (display + tel: link). */
export const hasPhone = Boolean(contact.phoneDisplay && contact.phoneHref)
