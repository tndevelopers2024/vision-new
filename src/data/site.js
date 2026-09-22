/**
 * Site-wide chrome for Vision Business Setup: header top bar, primary
 * navigation and footer content.
 *
 * Contact details (phone, WhatsApp, email, address) live in
 * `src/config/contact.js` — that is the single place to edit them.
 */
import { contact, hasPhone, whatsappLink } from '../config/contact.js'

export const brand = {
  name: 'Vision Business Setup',
  tagline: 'Every Business starts with Vision',
}

export const topBar = {
  tagline: brand.tagline,
  hours: { icon: 'clock', title: brand.tagline },
  // Rendered only while a phone number is configured — see `hasPhone`.
  phone: hasPhone
    ? { icon: 'phone', title: 'Speak to a consultant', text: contact.phoneDisplay, href: contact.phoneHref }
    : null,
  social: contact.social,
}

/**
 * Primary menu — the Vision homepage navigation.
 * `m(label, href, children)` builds one node; the menu renders up to three
 * levels (top item → dropdown → flyout).
 */
const m = (label, href = '#', children) => ({ label, href, ...(children && { children }) })

export const mainMenu = [
  m('Home', '/'),
  m('Business Setup', '/#business-setup', [
    m('UAE Mainland', '/business-setup/uae-mainland'),
    m('UAE Free Zone', '/business-setup/uae-free-zone'),
    m('UAE Offshore', '/business-setup/uae-offshore'),
  ]),
  m('Our Services', '/services', [
    m('Licence', '/services#licence', [
      m('License Renewal', '/services/license-renewal'),
      m('License Modification', '/services/license-modification'),
      m('License Cancellation', '/services/license-cancellation'),
      m('License Freezing', '/services/license-freezing'),
    ]),
    m('Visa', '/services#visa', [
      m('Residence Visa', '/services/residence-visa'),
      m('Dependent Visa', '/services/dependent-visa'),
      m('Remote Work Visa', '/services/remote-work-visa'),
      m('Golden Visa', '/services/golden-visa'),
      m('Freelance Visa', '/services/freelance-visa'),
    ]),
    m('Finance & Banking', '/services#finance-banking', [
      m('Bank Account Opening', '/services/bank-account-opening'),
      m('Corporate Tax Guide', '/services/corporate-tax-guide'),
      m('Bookkeeping & VAT Registration', '/services/bookkeeping-vat'),
    ]),
  ]),
  m('About Us', '/about'),
  m('Contact Us', '/contact'),
]

/** Index of the item rendered as current (0 = Home, active gold like reference). */
export const currentMenuIndex = 0

/** The header's accent button is the phone number — null while it is hidden. */
export const headerPhone = hasPhone
  ? {
      label: contact.phoneDisplay,
      href: contact.phoneHref,
    }
  : null

export const footer = {
  cta: {
    badge: 'START YOUR JOURNEY',
    headline:
      'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication.',
    subheadline:
      'Connect with Vision Business Setup and experience a service built around you.',
    primaryBtn: {
      label: 'Contact Us',
      href: '/contact',
    },
    secondaryBtn: {
      label: 'Chat Now',
      href: whatsappLink,
    },
  },
  contactCards: [
    ...(hasPhone
      ? [
          {
            icon: 'phone',
            label: 'Round-the-Clock Support',
            value: contact.phoneDisplay,
            href: contact.phoneHref,
            detail: 'Support whenever you need it, beyond the conventional 9-to-5 framework',
          },
        ]
      : [
          {
            icon: 'whatsapp',
            label: 'Round-the-Clock Support',
            value: contact.whatsappDisplay,
            href: whatsappLink,
            detail: 'Support whenever you need it, beyond the conventional 9-to-5 framework',
            target: '_blank',
          },
        ]),
    {
      icon: 'mail',
      label: 'Request a Callback',
      value: contact.email,
      href: `mailto:${contact.email}`,
      detail: 'Connect with Vision Business Setup and experience a service built around you',
    },
    {
      icon: 'pin',
      label: 'Business Setup in the UAE',
      value: contact.addressLines.join(', '),
      href: `https://www.google.com/maps/search/${encodeURIComponent(contact.addressLines.join(' '))}`,
      detail: 'Open in Google Maps ↗',
      target: '_blank',
    },
  ],
  company: {
    title: brand.name,
    text: `At ${brand.name}, we provide end-to-end business setup and corporate support services in the UAE. From company formation across Mainland, Free Zone, and Offshore jurisdictions to visa processing and PRO services, we manage the entire process with precision and efficiency.`,
    workingHoursLabel: 'Business Hours',
    workingHours: contact.hours,
    accreditation: brand.tagline,
  },
  columns: [
    {
      id: 'business-setup',
      title: 'Business Setup',
      links: [
        { label: 'UAE Mainland', href: '/business-setup/uae-mainland' },
        { label: 'UAE Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'UAE Offshore', href: '/business-setup/uae-offshore' },
        { label: 'DMCC Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'IFZA Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'License Renewal', href: '/services/license-renewal' },
      ],
    },
    {
      id: 'corporate-services',
      title: 'Our Services',
      links: [
        { label: 'Residence Visa', href: '/services/residence-visa' },
        { label: 'Golden Visa', href: '/services/golden-visa' },
        { label: 'Bank Account Opening', href: '/services/bank-account-opening' },
        { label: 'Corporate Tax Guide', href: '/services/corporate-tax-guide' },
        { label: 'Bookkeeping & VAT Registration', href: '/services/bookkeeping-vat' },
        { label: 'Remote Work Visa', href: '/services/remote-work-visa' },
      ],
    },
    {
      id: 'company-links',
      title: 'About Us',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Story', href: '/#our-story' },
        { label: 'Who We Work With', href: '/#industries' },
        { label: 'Our Core Values', href: '/#values' },
        { label: 'Our Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
  copyright: `© ${new Date().getFullYear()} Vision Business Setup. All rights reserved.`,
  social: contact.social,
}

export const footerBottom = {
  copyright: `© ${new Date().getFullYear()} Vision Business Setup. All rights reserved.`,
  social: contact.social,
}
