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
  phoneDisplay: '+971 50 545 9247',
  phoneHref: 'tel:+971505459247',
  secondaryPhoneDisplay: '+971 55 161 2342',
  secondaryPhoneHref: 'tel:+971551612342',

  phones: [
    {
      display: '+971 50 545 9247',
      href: 'tel:+971505459247',
      shortDisplay: '050',
      raw: '050 545 9247',
    },
  ],

  whatsappNumber,
  whatsappDisplay: '+971 55 161 2342',
  whatsappMessage,

  email: 'admin@visionbusinesssetup.ae',
  address: 'IDS Global Business Center, Office no. 107, Karama, Dubai',
  addressLines: [
    'IDS Global Business Center',
    'Office no. 107, Karama, Dubai',
  ],

  hours: '09:00 AM – 07:00 PM, Sunday Closed',

  // Get in Touch map.
  mapEmbedUrl: 'https://www.google.com/maps?q=IDS+Global+Business+Center+Karama+Dubai&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=IDS+Global+Business+Center+Karama+Dubai',

  social: [],
}

/** True while a public phone number is configured (display + tel: link). */
export const hasPhone = Boolean(contact.phoneDisplay && contact.phoneHref)
