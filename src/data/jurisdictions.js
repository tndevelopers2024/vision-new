/**
 * Business Setup inner pages — UAE Mainland / UAE Free Zone / UAE Offshore.
 *
 * Source of truth: "Website Content_Vision.docx" (see `Website-Content-Vision.txt`).
 * Every string below is taken verbatim from that document — headings, intro
 * paragraphs, bullet lists, service items and closing calls to action. Nothing
 * here is written copy; if a line is missing from the document, the slot is
 * omitted rather than filled in.
 *
 * All three pages share one renderer: `src/pages/Jurisdiction.jsx`.
 */

/* --- UAE Mainland ---------------------------------------------------------- */

const mainland = {
  slug: 'uae-mainland',
  /* Nav label — "Business Setup › UAE Mainland" */
  eyebrow: 'BUSINESS SETUP',
  title: 'UAE Mainland',
  intro: [
    'Setting up a Mainland company in the UAE offers unmatched flexibility, allowing you to operate freely across the local market and beyond. At Vision Business Setup, we provide a streamlined and strategic approach to Mainland company formation, ensuring your business is structured for growth, compliance, and long-term success.',
    'Whether you are an entrepreneur launching a new venture or an established company expanding into the UAE, our consultants deliver tailored solutions aligned with your business objectives.',
  ],
  definition: {
    title: 'What is a Mainland Company?',
    paragraphs: [
      'A Mainland company is licensed by the Department of Economic Development & Tourism (DET) and allows you to conduct business anywhere within the UAE market. This structure provides the freedom to work with government entities, corporate clients, and individuals without geographical restrictions.',
      'With recent regulatory advancements, many business activities now allow 100% foreign ownership, making Mainland setup more attractive than ever for international investors.',
    ],
  },
  advantages: {
    title: 'Key Advantages of Mainland Company Formation',
    items: [
      'No restrictions on business location within the UAE',
      'Ability to work with government and private sectors',
      'No currency limitations',
      'Flexibility to expand operations across multiple emirates',
      'Eligibility for unlimited visa quotas (based on office space)',
    ],
  },
  services: {
    title: 'Our Mainland Setup Services Include',
    items: [
      {
        icon: 'compass',
        title: 'Business Activity Consultation',
        text: 'We help you choose the right activity aligned with your goals and compliance requirements.',
      },
      {
        icon: 'badge-check',
        title: 'Trade Name Registration',
        text: 'Secure a professional and approved business name that reflects your brand identity.',
      },
      {
        icon: 'id-card',
        title: 'License Processing',
        text: 'Complete handling of all documentation and approvals for your trade license.',
      },
      {
        icon: 'building',
        title: 'Office Space Assistance',
        text: 'Support in finding suitable office solutions that meet regulatory requirements.',
      },
      {
        icon: 'passport',
        title: 'Visa & Immigration Support',
        text: 'End-to-end assistance with investor and employee visas.',
      },
      {
        icon: 'network',
        title: 'PRO & Government Liaison',
        text: 'Efficient handling of all government procedures, saving you time and effort.',
      },
    ],
  },
  approach: {
    title: 'Our Approach',
    paragraphs: [
      'At Vision Business Setup, we go beyond basic company formation. Our process is designed to provide clarity, speed, and confidence at every stage.',
      'We begin with a detailed consultation to understand your business model, followed by a structured setup plan tailored to your requirements. Our team manages the entire process—from documentation to final license issuance—ensuring accuracy and efficiency throughout.',
    ],
  },
  closing: {
    title: 'Start Your Mainland Business Today',
    lines: [
      'Unlock the full potential of the UAE market with a Mainland company designed for growth and flexibility. Let Vision Business Setup handle the complexities while you focus on building your business.',
      'Speak to our consultants today and take the first step toward establishing your presence in the UAE.',
    ],
    cta: 'Contact Us',
  },
}

/* --- UAE Free Zone --------------------------------------------------------- */

const freeZone = {
  slug: 'uae-free-zone',
  eyebrow: 'BUSINESS SETUP',
  title: 'UAE Free Zone',
  intro: [
    'Free Zone company formation in the UAE offers a streamlined pathway for entrepreneurs and international investors seeking full ownership, simplified processes, and a globally connected business environment. At Vision Business Setup, we deliver tailored Free Zone solutions designed for speed, efficiency, and long-term scalability.',
    'Whether you are launching a startup, building an international presence, or optimizing your business structure, our team ensures a seamless setup experience aligned with your goals.',
  ],
  definition: {
    title: 'What is a Free Zone Company?',
    paragraphs: [
      'A Free Zone company is established within a designated economic zone, offering investor-friendly regulations, operational advantages and 100% foreign ownership. These zones are designed to attract global businesses by providing simplified procedures, tax efficiencies, and industry-specific ecosystems.',
      'Free Zones are ideal for businesses focused on international trade, consulting, digital services, and specialized industries.',
    ],
  },
  advantages: {
    title: 'Key Benefits of Free Zone Company Formation',
    items: [
      '100% foreign ownership',
      'Fast and simplified registration process',
      'Tax-efficient structure',
      'Full repatriation of profits and capital',
      'Access to world-class infrastructure and business hubs',
    ],
  },
  services: {
    title: 'Our Free Zone Setup Services Include',
    items: [
      {
        icon: 'globe',
        title: 'Business Activity & Free Zone Selection',
        text: 'We guide you in choosing the most suitable Free Zone based on your industry and expansion plans, such as DMCC and IFZA.',
      },
      {
        icon: 'id-card',
        title: 'License Registration & Documentation',
        text: 'Complete management of approvals, paperwork, and licensing procedures.',
      },
      {
        icon: 'building',
        title: 'Flexible Office Solutions',
        text: 'Assistance with virtual offices, flexi-desks, and dedicated office spaces.',
      },
      {
        icon: 'passport',
        title: 'Visa Processing',
        text: 'End-to-end support for investor and employee visas.',
      },
      {
        icon: 'bank',
        title: 'Banking Assistance',
        text: 'Guidance in opening corporate bank accounts with trusted institutions.',
      },
    ],
  },
  approach: {
    title: 'Our Approach',
    paragraphs: [
      'At Vision Business Setup, we combine strategic insight with operational efficiency. We assess your business requirements and recommend the most advantageous Free Zone structure, ensuring your setup is not only fast but also future-ready.',
      'Our team manages every stage of the process with precision, allowing you to focus on growing your business from day one.',
    ],
  },
  /* The document carries no closing CTA block for this page. */
  closing: null,
}

/* --- UAE Offshore ---------------------------------------------------------- */

const offshore = {
  slug: 'uae-offshore',
  eyebrow: 'BUSINESS SETUP',
  title: 'UAE Offshore',
  intro: [
    'Offshore company formation in the UAE provides a strategic solution for international investors seeking asset protection, global operations, and efficient corporate structuring. At Vision Business Setup, we offer expert guidance to help you establish a compliant and effective offshore entity tailored to your long-term objectives.',
    'Our approach ensures discretion, efficiency, and clarity throughout the entire process.',
  ],
  definition: {
    title: 'What is an Offshore Company?',
    paragraphs: [
      'An offshore company is a legal entity established in a jurisdiction that allows businesses to operate internationally without conducting direct commercial activities within the UAE market. These offshore companies are prohibited from operating within the UAE domestic market.',
      'This structure is commonly used for holding companies, international trade, asset protection, and wealth management.',
    ],
  },
  advantages: {
    title: 'Key Advantages of Offshore Company Formation',
    items: [
      '100% foreign ownership',
      'No requirement for physical office space',
      'High level of confidentiality',
      'Efficient corporate structuring',
      'Ideal for international business operations',
    ],
  },
  services: {
    title: 'Our Offshore Services Include',
    items: [
      {
        icon: 'building',
        title: 'Company Incorporation',
        text: 'Complete handling of offshore company registration and documentation.',
      },
      {
        icon: 'pin',
        title: 'Registered Office & Agent Services',
        text: 'Provision of required registered address and compliance support.',
      },
      {
        icon: 'shield',
        title: 'Corporate Structuring Advisory',
        text: 'Strategic guidance for asset protection and international operations.',
      },
      {
        icon: 'bank',
        title: 'Bank Account Assistance',
        text: 'Support in establishing secure international banking relationships.',
      },
      {
        icon: 'sync',
        title: 'Ongoing Compliance Support',
        text: 'Ensuring your company remains aligned with regulatory requirements.',
      },
    ],
  },
  approach: {
    title: 'Our Approach',
    paragraphs: [
      'At Vision Business Setup, we focus on building offshore structures that are practical, compliant, and aligned with global business strategies. We take the time to understand your objectives and design a solution that supports long-term efficiency and growth.',
    ],
  },
  whyChoose: {
    title: 'Why Choose Vision Business Setup',
    items: [
      'Confidential and professional service delivery',
      'Expertise in international business structuring',
      'Efficient setup with minimal complexity',
      'Reliable ongoing support and advisory',
    ],
  },
  closing: {
    title: 'Establish Your Offshore Company Today',
    lines: [
      'Create a strong international business foundation with a UAE offshore company tailored to your strategic needs. Let Vision Business Setup guide you through every step with precision and professionalism.',
      'Connect with our consultants to get started.',
    ],
    cta: 'Contact Us',
  },
}

export const jurisdictions = { mainland, freeZone, offshore }

/** Lookup by route slug — used by `App.jsx` to mount the three pages. */
export const jurisdictionBySlug = {
  [mainland.slug]: mainland,
  [freeZone.slug]: freeZone,
  [offshore.slug]: offshore,
}
