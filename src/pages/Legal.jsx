import { useMemo } from 'react'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import Icon from '../components/ui/Icon.jsx'
import heroImg from '../assets/images/banner-night.jpg'
import './Legal.css'

const LEGAL_DATA = {
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'LEGAL & DATA COMPLIANCE',
    lastUpdated: 'January 2025',
    intro: [
      'Vision Business Setup is committed to protecting your privacy and ensuring your personal information is handled in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL).',
      'This Privacy Policy outlines how we collect, use, process, and safeguard the data you provide when consulting with us, accessing our digital portals, or engaging our corporate services.',
    ],
    sections: [
      {
        title: '1. Information We Collect',
        content: [
          'We collect information required to facilitate UAE company formation, licensing, residency visas, corporate banking, and related PRO services. This includes:',
          '• Personal Identification: Full names, passport copies, Emirates ID copies, nationality, residency status, photographs, and contact numbers.',
          '• Corporate & Business Data: Proposed trade names, business activity classifications, shareholding structures, board resolutions, MOAs, and lease documentation.',
          '• Financial & Due Diligence Information: Source of funds declarations, bank statements, CVs, and professional reference letters required for bank account opening compliance.',
        ],
      },
      {
        title: '2. Purpose of Data Processing',
        content: [
          'Your information is processed strictly for legitimate corporate and regulatory purposes, including:',
          '• Preparing and lodging trade license applications with the Department of Economy and Tourism (DET) or relevant Free Zone authorities.',
          '• Facilitating entry permits, medical fitness tests, and Emirates ID biometric processing with the GDRFA and ICP.',
          '• Coordinating with accredited UAE financial institutions for corporate and personal bank account opening.',
          '• Fulfilling ongoing regulatory obligations such as corporate tax registration and VAT filings with the Federal Tax Authority (FTA).',
        ],
      },
      {
        title: '3. Data Sharing & Third-Party Disclosures',
        content: [
          'We do not sell, rent, or lease client data to commercial third parties. We share your information exclusively with:',
          '• UAE Government Agencies: DET, Free Zone Authorities, Ministry of Human Resources and Emiratisation (MOHRE), General Directorate of Residency and Foreigners Affairs (GDRFA), and Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).',
          '• Licensed Banking Partners: Tier-1 UAE commercial banks where you have explicitly authorized an introduction.',
          '• Authorized Service Providers: Secure IT infrastructure providers and notarization agents acting under binding confidentiality agreements.',
        ],
      },
      {
        title: '4. Data Security & Storage',
        content: [
          'All client documentation and records are safeguarded using enterprise-grade 256-bit encryption, access controls, and restricted staff permissions. Physical files, where required by government departments, are held securely within our Dubai premises and handled only by accredited PRO specialists.',
        ],
      },
      {
        title: '5. Data Retention & Your Rights',
        content: [
          'We retain client records for the period required to fulfill our contractual advisory mandate and comply with UAE anti-money laundering (AML) and corporate record-keeping laws.',
          'Under the UAE PDPL, you have the right to request access to your stored data, rectify inaccurate records, or withdraw processing consent where statutory exceptions do not apply. Requests may be directed to our compliance desk at admin@visionbusinesssetup.ae.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'TERMS OF ENGAGEMENT',
    lastUpdated: 'January 2025',
    intro: [
      'These Terms & Conditions govern the professional corporate advisory, company incorporation, visa processing, and PRO services provided by Vision Business Setup to corporate and individual clients.',
      'By engaging our services or utilizing our consultation channels, you agree to be bound by the terms outlined below.',
    ],
    sections: [
      {
        title: '1. Advisory & Service Scope',
        content: [
          'Vision Business Setup acts as an independent corporate service provider and management consultancy in Dubai, UAE.',
          'Our scope encompasses document preparation, strategic jurisdiction advisory (Mainland, Free Zone, Offshore), liaison with licensing authorities, immigration processing coordination, and banking assistance.',
          'We do not operate as an immigration authority, court, or banking institution; our role is professional facilitation and consultancy.',
        ],
      },
      {
        title: '2. Client Obligations & Document Authenticity',
        content: [
          'The client guarantees that all documents, identification records, declarations, and background information provided are true, authentic, valid, and legally obtained.',
          'The client agrees to promptly supply requested attestations, apostilles, translations, and approvals required by UAE ministerial departments. Any delays or rejections arising from forged, expired, or misrepresented documentation remain the sole responsibility of the client.',
        ],
      },
      {
        title: '3. Government Approvals & Timelines',
        content: [
          'Processing timeframes provided by our advisors are based on standard operating benchmarks across Dubai Economy & Tourism (DET), Free Zone registries, and the GDRFA.',
          'Final approval, security clearances, background checks, and trade license issuance are strictly at the discretion of the sovereign UAE government entities. Vision Business Setup shall not be liable for regulatory delays or changes in local statutory regulations.',
        ],
      },
      {
        title: '4. Fees, Expenses & Payments',
        content: [
          'All service agreements specify our professional advisory fees separately from mandatory government disbursements (license fees, immigration deposits, medical tests, visa fees).',
          'Government fees paid directly to public registries, immigration departments, or economic authorities are non-refundable once processed. Advisory retainers are earned upon commencement of document preparation and dossier compilation.',
        ],
      },
      {
        title: '5. Limitation of Liability & Governing Law',
        content: [
          'Vision Business Setup shall not be held liable for indirect, incidental, or consequential losses, including lost commercial profits or business interruptions.',
          'These terms and any disputes arising out of our engagement shall be governed exclusively by the laws of the Emirate of Dubai and the applicable Federal Laws of the United Arab Emirates. Both parties submit to the non-exclusive jurisdiction of the Dubai Courts.',
        ],
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    eyebrow: 'REGULATORY & LEGAL NOTICE',
    lastUpdated: 'January 2025',
    intro: [
      'The information provided on this website and in our advisory publications is for general informational and educational guidance regarding business setup in Dubai and across the United Arab Emirates.',
      'This notice sets forth important clarifications regarding our regulatory status, government authorizations, and the nature of our corporate consultancy.',
    ],
    sections: [
      {
        title: '1. Corporate Advisory Status',
        content: [
          'Vision Business Setup is a private corporate service advisory and management consulting firm registered in Dubai, UAE. We are not a government agency, economic department, or judicial organ.',
          'The content provided on this portal does not constitute binding legal, financial, or formal tax counsel. Clients requiring certified legal opinions or audited fiscal opinions should consult with licensed UAE legal advocates and registered tax auditors.',
        ],
      },
      {
        title: '2. Authority Discretion & Regulatory Independence',
        content: [
          'Every UAE jurisdiction (Dubai Mainland / DET, DMCC, IFZA, DAFZA, JAFZA, Abu Dhabi DED, and all Northern Emirates free zones) operates under sovereign regulatory autonomy.',
          'Trade license issuance, activity permissions, residency visa grants, Golden Visa eligibility, and corporate bank account approvals rest entirely within the independent discretion of the responsible governmental or banking authorities. No corporate advisor can lawfully promise unconditional or guaranteed government sanctions.',
        ],
      },
      {
        title: '3. Currency & Regulatory Currency of Information',
        content: [
          'UAE economic legislation, corporate tax rules, VAT decrees, and immigration laws evolve rapidly. While we make every effort to maintain accurate and up-to-date content across our digital materials, regulations and official fees may change without prior notice.',
          'We recommend consulting directly with a Vision Business Setup specialist for current fee schedules and procedural guidelines before executing agreements.',
        ],
      },
      {
        title: '4. External Links & Third-Party Platforms',
        content: [
          'This website may contain links or references to government portals, free zone authorities, banking institutions, and third-party tools. Vision Business Setup has no control over the content, uptime, or privacy policies of third-party websites and accepts no responsibility for external resources.',
        ],
      },
    ],
  },
}

export default function Legal({ type = 'privacy' }) {
  const data = useMemo(() => LEGAL_DATA[type] || LEGAL_DATA.privacy, [type])

  return (
    <div className="legalPage">
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: data.title },
        ]}
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        image={heroImg}
      />

      <section className="legalContent">
        <div className="legalContent__container">
          {/* Quick tab switcher for all three legal policies */}
          <nav className="legalNav" aria-label="Legal Documents">
            <SmartLink
              href="/privacy-policy"
              className={`legalNav__item ${type === 'privacy' ? 'legalNav__item--active' : ''}`}
            >
              <Icon name="check-circle" size="small" />
              <span>Privacy Policy</span>
            </SmartLink>
            <SmartLink
              href="/terms-conditions"
              className={`legalNav__item ${type === 'terms' ? 'legalNav__item--active' : ''}`}
            >
              <Icon name="check-circle" size="small" />
              <span>Terms & Conditions</span>
            </SmartLink>
            <SmartLink
              href="/disclaimer"
              className={`legalNav__item ${type === 'disclaimer' ? 'legalNav__item--active' : ''}`}
            >
              <Icon name="check-circle" size="small" />
              <span>Disclaimer</span>
            </SmartLink>
          </nav>

          <article className="legalBody">
            <header className="legalBody__head">
              <span className="legalBody__stamp">Last Updated: {data.lastUpdated}</span>
              <p className="legalBody__lead">
                Applicable to all services rendered by Vision Business Setup within the United Arab Emirates.
              </p>
            </header>

            <div className="legalBody__sections">
              {data.sections.map((section) => (
                <div key={section.title} className="legalSection">
                  <h2 className="legalSection__title">{section.title}</h2>
                  <div className="legalSection__text">
                    {section.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="legalCard">
              <div className="legalCard__iconHolder">
                <Icon name="mail" />
              </div>
              <div className="legalCard__content">
                <h3 className="legalCard__title">Have compliance or regulatory questions?</h3>
                <p className="legalCard__desc">
                  Our compliance officer and senior setup consultants are available to clarify any contractual or data protection questions.
                </p>
                <SmartLink href="/contact" className="legalCard__btn">
                  <span>Speak with our team</span>
                  <Icon name="arrow-right" size="small" />
                </SmartLink>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
