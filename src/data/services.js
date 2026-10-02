/**
 * Data for Our Services hub (/services) and individual dedicated service pages (/services/:slug).
 *
 * Tailored exclusively for Vision Business Setup:
 *   1. Licence Services (Renewal, Modification, Cancellation, Freezing)
 *   2. Visa Solutions (Residence, Golden, Dependent, Remote Work, Freelance, Domestic Worker)
 *   3. Finance & Banking (Bank Account Opening, Corporate Tax Guide, Bookkeeping & VAT)
 *   4. Corporate & Executive Support (VIP Medical & Emirates ID, Customs, Office Spaces)
 */

import heroLicence from '../assets/images/banner-night.jpg'
import heroVisa from '../assets/images/banner-burj-khalifa.jpg'
import heroFinance from '../assets/images/banner-palm-jumeirah.jpg'
import heroLicenseRenewal from '../assets/images/license-renewal-hero.jpg'
import heroLicenseModification from '../assets/images/license-modification-hero.jpg'
import heroLicenseCancellation from '../assets/images/license-cancellation-hero.jpg'
import heroLicenseFreezing from '../assets/images/license-freezing-hero.jpg'
import overviewLicenseRenewal from '../assets/images/license-renewal-overview.jpg'
import overviewLicenseModification from '../assets/images/license-modification-overview.jpg'
import overviewLicenseCancellation from '../assets/images/license-cancellation-overview.jpg'
import overviewLicenseFreezing from '../assets/images/license-freezing-overview.jpg'
import heroDependentVisa from '../assets/images/dependent-visa-hero.jpg'
import overviewDependentVisa from '../assets/images/dependent-visa-overview.jpg'
import heroResidenceVisa from '../assets/images/residence-visa-hero.jpg'
import overviewResidenceVisa from '../assets/images/residence-visa-overview.jpg'
import heroRemoteWorkVisa from '../assets/images/remote-work-visa-hero.jpg'
import overviewRemoteWorkVisa from '../assets/images/remote-work-visa-overview.jpg'
import heroGoldenVisa from '../assets/images/golden-visa-hero.jpg'
import overviewGoldenVisa from '../assets/images/golden-visa-overview.jpg'
import heroFreelanceVisa from '../assets/images/freelance-visa-hero.jpg'
import overviewFreelanceVisa from '../assets/images/freelance-visa-overview.jpg'
import heroBankAccount from '../assets/images/bank-account-hero.jpg'
import overviewBankAccount from '../assets/images/bank-account-opening-overview.jpg'
import heroCorporateTax from '../assets/images/corporate-tax-hero.jpg'
import overviewCorporateTax from '../assets/images/corporate-tax-overview.jpg'
import heroBookkeepingVat from '../assets/images/bookkeeping_vat_hero.png'
import overviewBookkeepingVat from '../assets/images/bookkeeping-vat-overview.jpg'
import heroDomesticWorkerVisa from '../assets/images/domestic-worker-visa-hero.jpg'
import overviewDomesticWorkerVisa from '../assets/images/domestic-worker-visa-overview.jpg'
import heroVipMedical from '../assets/images/vip-medical-eid-hero.jpg'
import overviewVipMedical from '../assets/images/vip-medical-eid-overview.jpg'
import heroCustoms from '../assets/images/customs-registration-hero.jpg'
import overviewCustoms from '../assets/images/customs-registration-overview.jpg'
import heroOfficeSpaces from '../assets/images/office_spaces_hero.png'
import overviewOfficeSpaces from '../assets/images/office-spaces-overview.jpg'

export const servicesHero = {
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Our Services' }],
  eyebrow: 'END-TO-END CORPORATE SUPPORT IN THE UAE',
  title: 'Our Services',
  intro: [
    'Comprehensive business setup and corporate support services across Dubai and the wider UAE. From trade license renewals and amendments to investor visas, corporate banking, tax compliance, and government liaison — our specialists handle every requirement with precision and efficiency.',
    'Whether you are setting up, expanding, or maintaining ongoing regulatory compliance, we provide end-to-end guidance tailored to your commercial objectives.',
  ],
}

export const servicesStats = [
  { value: '13+', label: 'Corporate Services', desc: 'Covering licensing, visas, tax, banking & PRO compliance' },
  { value: '100%', label: 'Compliance Assurance', desc: 'Strict alignment with DET, MOHRE, ICP & FTA regulations' },
  { value: '24/7', label: 'Dedicated Support', desc: 'Round-the-clock advisory beyond conventional 9-to-5 hours' },
  { value: '2015', label: 'Established In', desc: 'Over a decade of proven expertise in the UAE corporate landscape' },
]

export const categoryBanners = {
  licence: heroLicence,
  visa: heroVisa,
  'finance-banking': heroFinance,
  other: heroLicence,
}

export const serviceCategories = [
  {
    id: 'licence',
    slug: 'licence',
    title: 'Licence Services',
    shortTitle: 'Licence',
    icon: 'id-card',
    tagline: 'Trade license lifecycle management for Mainland, Free Zone & Offshore companies',
    description:
      'Both mainland and free zone companies must maintain their trade license compliance annually. Delays can disrupt company operations, employee visas, and corporate banking. We manage the entire license lifecycle to ensure seamless business continuity.',
    services: [
  {
    id: 'license-renewal',
    title: 'License Renewal',
    heroImage: heroLicenseRenewal,
    overviewImage: overviewLicenseRenewal,
    authority: 'Department of Economy and Tourism (DET / Invest in Dubai) & UAE Free Zone Authorities',
    timeframe: '24 – 48 Hours (Same-Day for Expedited Mainland Files)',
    badge: 'Mandatory Annual Compliance',
    icon: 'sync',
    summary: 'Maintaining unbroken commercial licensing is the legal bedrock of your UAE enterprise. Ensure uninterrupted enterprise operations, secure banking covenants, and achieve rapid 24-hour statutory clearance.',
    description: 'Securing an active commercial license renewal requires synchronizing vital milestones: an authenticated Ejari lease validated for subsequent tenure, statutory fine reconciliation on the Invest in Dubai portal, and ministry-specific activity clearances. We audit your documentation, liaise with ministerial desks, and secure statutory clearance 30–60 days ahead of cutoff. This proactive execution protects your corporate banking mandates, establishment cards, and prevents any operational downtime or bank freezes.',
    requirements: [
      'Certified commercial registers and current trade license copy',
      'Authenticated Ejari contracts valid beyond the subsequent 30 days',
      'Updated Ultimate Beneficial Ownership (UBO) declarations',
      'Passport and Emirates ID dossiers of authorized signatories',
      'Specialized ministry NOCs and external regulatory clearances (DHA, KHDA, Civil Defence)',
      'Audited financial statements (mandatory for specific Free Zone jurisdictions)'
    ],
    process: [
      'Tenancy validation & Ejari authentication for subsequent commercial tenure',
      'Comprehensive portal audit & municipal fine reconciliation via Invest in Dubai',
      'External regulator clearance procurement for specialized activities',
      'Digital filing and corporate compliance updates via DET or respective Free Zone portals',
      'Official government fee voucher settlement and payment execution',
      'Issuance of renewed license & updated Chamber of Commerce certificate'
    ],
    deliverables: [
      'Unbroken commercial legitimacy across all UAE banking and government databases',
      'Full Ejari verification and commercial lease compliance audit',
      'Expedited external regulatory approvals and ministerial NOCs',
      'Zero-downtime execution shielding against late penalties and establishment card suspension',
      'Immediate payment voucher settlement and Chamber of Commerce renewal',
      'Priority same-day submission for fully compliant mainland files'
    ],
    faqs: [
      {
        question: 'How does Vision handle trade license renewals in Dubai?',
        answer: [
          'Securing an active commercial license renewal requires synchronizing three vital milestones: an authenticated Ejari lease validated for subsequent tenure, statutory fine reconciliation on the Invest in Dubai portal, and ministry-specific activity clearances.',
          'Our senior consultants navigate the multi-stage DET verification sequence, reconciling commercial lease records and resolving potential municipal blocks to ensure rapid 24-hour statutory clearance.'
        ]
      },
      {
        question: 'What exact documentation is mandated for a smooth renewal?',
        answer: [
          'A compliant renewal file demands precision. We require:',
          '• Certified commercial registers and current trade license copy\n• Authenticated Ejari contracts valid beyond the subsequent 30 days\n• Updated UBO declarations\n• Specialized ministry NOCs where applicable',
          'Free zone entities may also require audited financial statements depending on the jurisdiction.'
        ]
      },
      {
        question: 'What are the explicit penalties for failing to renew on time?',
        answer: [
          'Lapsing on your trade license triggers cascading penalties. You face an AED 250 monthly late fee directly from the licensing authority, compounded by an AED 5,000 penalty for unlicensed commercial trading.',
          'Beyond fines, an expired license initiates operational suspension, freezing corporate bank accounts and preventing the renewal or issuance of any employee visas.'
        ]
      },
      {
        question: 'Can the renewal be executed digitally without physical presence?',
        answer: [
          'Yes, mainland licenses are renewed via the Invest in Dubai portal, and eligible straightforward renewals can leverage the SMS 6969 system. Free Zone licenses are managed through their respective authority portals.',
          'Vision acts as your dedicated corporate advisory partner, managing these digital portals on your behalf to guarantee faultless execution without requiring your physical presence at government centers.'
        ]
      },
      {
        question: 'What role does an Ejari play in the statutory renewal sequence?',
        answer: [
          'For mainland entities, an authenticated Ejari commercial lease is the foundational prerequisite. The DET mandates that your tenancy contract remains valid for at least one month beyond your new license tenure.',
          'Free Zone entities operate under lease agreements directly with the zone authority, which must similarly be renewed concurrently with the license.'
        ]
      },
      {
        question: 'How long does the regulatory renewal clearance take?',
        answer: [
          'When orchestrated proactively, a mainland renewal file with validated Ejari and zero outstanding fines achieves same-day statutory clearance.',
          'Files requiring external ministerial approvals or those blocked by unresolved municipal fines may take 24 to 48 hours to reconcile.'
        ]
      },
      {
        question: 'Why is proactive renewal critical for maintaining banking mandates?',
        answer: [
          'UAE commercial banks mandate active trade licenses to maintain KYC compliance. A lapsed license triggers automated compliance holds, freezing corporate accounts and halting payroll processing.',
          'We initiate renewal protocols 30 to 60 days prior to expiration to safeguard your corporate banking covenants and ensure unbroken financial continuity.'
        ]
      }
    ]
  },
  {
    id: 'license-modification',
    title: 'License Modification & Amendments',
    heroImage: heroLicenseModification,
    overviewImage: overviewLicenseModification,
    authority: 'DET, Free Zone Authorities, Dubai Courts & Notary Public',
    timeframe: '3 – 5 Working Days',
    badge: 'Corporate Structuring & Amendments',
    icon: 'puzzle',
    summary: 'Execute strategic corporate adaptation by reconciling your operational growth with strict legal registry alignment. We manage the complex legal drafting and electronic notary sessions with fiduciary precision.',
    description: 'As your enterprise scales, modifying your license to add commercial activities, restructure capital, or change partners requires precision drafting of Memorandum of Association (MoA) addendums, board resolutions, and shareholder agreements. Any inaccuracy creates ripple effects on bank mandates and immigration quotas. Vision Business Setup orchestrates this legal evolution, handling certified Arabic translations and electronic court notarizations to keep your corporate file pristine.',
    applicableAmendments: [
      'Corporate Legal Form Reclassification',
      'Capital Structure & Share Allotment Adjustments',
      'Executive Management & Signatory Authority Reassignment',
      'Trade Name Rebranding & Reservation',
      'Addition, Change, or Withdrawal of Commercial Activities',
      'Relocation of Corporate Headquarters (Ejari Update)',
      'Change of Local Sponsor or Corporate Service Agent',
      'Addition, Removal, or Transfer of Shareholders'
    ],
    requirements: [
      'Current trade license copy & commercial register certificate',
      'Bilingual drafted MoA addendums and attested board resolutions',
      'Passport and Emirates ID dossiers of all relevant executives and shareholders',
      'Official trade name reservation certificate (for rebranding)',
      'Authenticated Ejari commercial lease agreements (for relocations)',
      'Commercial activity feasibility clearances from external regulators'
    ],
    process: [
      'Initial DET or Free Zone activity assessment and preliminary approval',
      'Drafting of precise bilingual legal instruments (MoA addendums, resolutions)',
      'Electronic notary attestation coordination via Dubai Courts / MoJ',
      'External regulatory clearance procurement for specialized activities',
      'Regulatory submissions of lease registrations and identification dossiers',
      'Government payment voucher clearance and fee settlement',
      'Downstream bank mandate updates and issuance of the amended commercial register'
    ],
    deliverables: [
      'Certified bilingual MoA addendums and corporate resolutions',
      'Electronic court notary coordination and certified legal translation',
      'Updated commercial registers and official amended trade licenses',
      'Post-amendment banking advisory for mandate alignment',
      'Expedited activity-specific approvals from external government bodies',
      'Complete management of ownership transfer mechanics and liability transitions'
    ],
    faqs: [
      {
        question: 'What constitutes a license modification under UAE corporate law?',
        answer: [
          'License modification is the statutory procedure to amend an entity’s legal identity in the commercial register. This encompasses structural adjustments like trade name rebranding, capital structure changes, or signatory authority reassignment.',
          'Maintaining absolute accuracy in the registry is a fiduciary requirement, ensuring your operational activities remain compliant with your official legal standing.'
        ]
      },
      {
        question: 'How do corporate amendments impact existing bank mandates?',
        answer: [
          'Any modification involving shareholder transfers, management changes, or company name amendments directly affects your Ultimate Beneficial Ownership (UBO) records and banking mandates.',
          'Failure to promptly synchronize your amended license and MoA with your banking institution can trigger automated compliance freezes on corporate accounts.'
        ]
      },
      {
        question: 'What is the specific procedure for altering shareholder structures?',
        answer: [
          'Transferring shares demands a precise legal sequence. It requires a formal shareholder resolution, a drafted MoA addendum, No Objection Certificates, and mandatory notarization.',
          'Vision Business Setup acts as your dedicated corporate advisory partner, liaising directly with regulatory authorities and the Notary Public to finalize ownership transfers while safeguarding your immigration quotas.'
        ]
      },
      {
        question: 'Is it necessary to draft a new Memorandum of Association for every change?',
        answer: [
          'For mainland LLCs, any change to ownership, management, capital structure, or trade name requires a certified addendum to the MoA, drafted in bilingual format and notarized by the Dubai Courts.',
          'Minor administrative changes, such as updating an Ejari address without altering the legal structure, generally do not require full MoA notarization.'
        ]
      },
      {
        question: 'What are the timeframes and costs associated with license modifications?',
        answer: [
          'Statutory modifications typically require 3 to 5 working days, pending notary scheduling and external approvals.',
          'Government fees vary based on the jurisdiction and the complexity of the amendment, such as whether it involves simple activity additions (AED 1,000 – AED 3,000) or complex shareholder transfers necessitating legal translations and notary fees.'
        ]
      },
      {
        question: 'Do external regulator approvals delay the amendment process?',
        answer: [
          'Certain commercial activities require explicit clearance from external authorities (such as the Central Bank, SIRA, or RTA).',
          'Our advisors audit your documentation and liaise with ministerial desks proactively, expediting these clearances to prevent bureaucratic bottlenecks during the modification.'
        ]
      },
      {
        question: 'How do management transitions affect executive liability?',
        answer: [
          'Appointing or terminating a general manager holds significant legal weight. The outgoing manager retains liability until the MoA amendment is formalized and the commercial register is updated.',
          'We ensure meticulous fiduciary discharge for outgoing executives while establishing clear signatory mandates for incoming leadership.'
        ]
      },
      {
        question: 'Can multiple amendments be processed simultaneously?',
        answer: [
          'Yes, consolidating multiple changes—such as rebranding, adding an activity, and relocating offices—into a single amendment application is highly efficient.',
          'This strategic structuring minimizes repetitive government fees and consolidates the notary sessions required for the MoA addendums.'
        ]
      }
    ]
  },
  {
    id: 'license-cancellation',
    title: 'License Cancellation & Liquidation',
    heroImage: heroLicenseCancellation,
    overviewImage: overviewLicenseCancellation,
    authority: 'DET, Free Zone Authorities, MoHRE, FTA & Dubai Courts',
    timeframe: '1 – 4 Weeks (Free Zone) | 6 – 10 Weeks (Mainland LLC Liquidation)',
    badge: 'Compliant Closure & Fiduciary Discharge',
    icon: 'close',
    summary: 'Execute formal statutory dissolution and achieve complete liability discharge. Shield shareholders and directors from future liabilities, travel bans, and financial blacklisting through meticulous liquidation.',
    description: 'Abandoning a corporate entity without formal statutory dissolution exposes shareholders to compounding fines, sponsor blacklisting, and permanent damage to immigration and credit standing. The legal necessity of formal closure cannot be overstated. Vision Business Setup orchestrates the complete liquidation matrix, ensuring absolute fiduciary discharge. We manage liquidator appointments, labor quota clearances, and tax de-registration, definitively terminating your enterprise liabilities and preserving your future commercial eligibility.',
    reasonsToCancel: [
      'Fiduciary Liability Discharge and definitive termination of corporate legal obligations',
      'Sovereign Visa Quota & Establishment Card Release preventing sponsor blacklisting',
      'Cessation of Corporate Tax & VAT Filing Obligations with the FTA',
      'Immigration Standing & Future Venture Preservation avoiding long-term travel bans'
    ],
    requirements: [
      'Liquidator appointment letters and board dissolution resolution',
      'Official Arabic newspaper notices for the mandatory creditor notification period',
      'MoHRE quota clearance certificates and labor file closure documentation',
      'FTA tax de-registration numbers for Corporate Tax and VAT',
      'Utility, customs, telecom, and corporate bank account final clearances',
      'Cancellation documentation for all employee and investor visas'
    ],
    process: [
      'Board dissolution resolution execution & official liquidator appointment',
      'MoHRE employee visa cancellation & comprehensive labor file closure',
      'Mandatory 45-day gazette/newspaper advertisement publication for creditor notice',
      'Utility, customs, and corporate bank account final clearance acquisition',
      'FTA tax clearance certificate procurement via EmaraTax',
      'Final liquidation report submission to DET or respective Free Zone',
      'Issuance of formal Certificate of Dissolution and commercial register deletion'
    ],
    deliverables: [
      'Certified liquidation reports and complete liquidator appointment handling',
      'Official gazette publication handling and creditor notice management',
      'Final de-registration certificates definitively dissolving the entity',
      'Corporate bank account closure coordination and tax clearance execution'
    ],
    faqs: [
      {
        question: 'Why is formal license cancellation legally mandatory?',
        answer: [
          'Allowing a license to expire without formal closure is a critical compliance failure. Abandoned licenses accumulate compounding fines, trigger administrative blacklisting, and can lead to travel bans for directors.',
          'Formal statutory dissolution guarantees complete fiduciary liability discharge, shielding shareholders from future claims and preserving their standing for future UAE investments.'
        ]
      },
      {
        question: 'What is the distinction between sole proprietorship cancellation and LLC formal liquidation?',
        answer: [
          'Sole establishments and professional licenses generally follow a streamlined deregistration process involving visa cancellations, clearances, and a direct DET filing.',
          'A Mainland LLC requires a complex formal liquidation. This mandates appointing a certified liquidator, publishing a 45-day creditor notice in local newspapers, and submitting a final audited liquidation report to dissolve the corporate veil.'
        ]
      },
      {
        question: 'How does the 45-day creditor notice window function?',
        answer: [
          'During an LLC liquidation, the UAE Commercial Companies Law mandates publishing a dissolution notice in two local newspapers. This initiates a 45-day statutory window for any creditors to lodge outstanding claims against the entity.',
          'Once this period elapses without unresolved claims, the liquidator issues the final report required to secure the Certificate of Dissolution.'
        ]
      },
      {
        question: 'Are there tax prerequisites prior to company closure?',
        answer: [
          'Yes. You must secure a final tax clearance from the Federal Tax Authority (FTA). This involves submitting final tax returns, settling any outstanding Corporate Tax or VAT liabilities, and formally de-registering your Tax Registration Number (TRN).',
          'Failure to de-register exposes the directors to significant FTA penalties even after commercial operations have ceased.'
        ]
      },
      {
        question: 'What happens to sponsored employees and establishment cards?',
        answer: [
          'Before initiating the final DET cancellation, absolute clearance is required from MoHRE and GDRFA. All employee visas must be cancelled or transferred, labor quotas cleared, and the corporate establishment card formally revoked.',
          'We navigate this multi-stage verification sequence with flawless execution, ensuring no residual immigration holds block the final dissolution.'
        ]
      }
    ]
  },
  {
    id: 'license-freezing',
    title: 'License Freezing',
    heroImage: heroLicenseFreezing,
    overviewImage: overviewLicenseFreezing,
    authority: 'DET (Dubai Economy and Tourism) & Designated Free Zone Registries',
    timeframe: '3 – 5 Working Days',
    badge: 'Strategic Operational Pause (Up to 3 Years)',
    icon: 'shield',
    summary: 'Legally mothball your commercial entity to save massive office lease and annual overhead costs while preserving your legal entity and trade name.',
    description: 'During restructuring, market downturns, or strategic pivots, proactive enterprises utilize statutory license freezing as an asset preservation maneuver. Freezing legally exempts companies from mandatory Ejari renewals, inspection fines, and active overheads for up to 36 months without forfeiting brand equity. Vision Business Setup orchestrates this strategic operational pause, ensuring all labor and immigration files are properly suspended to maintain your sovereign compliance until you are ready to reactivate.',
    keyRules: [
      'Maximum 3-Year Statutory Window for Mainland LLCs (1 year for sole establishments)',
      'Complete Visa Liquidation Pre-requisite for all sponsored personnel',
      'Prohibition of Commercial Invoicing & Trading during the frozen tenure',
      'Exemption from Active Commercial Lease Requirements (no Ejari needed)',
      'Maintenance of Corporate Tax Reporting Baseline with the FTA',
      'Rapid Unfreezing Protocol allowing reactivation at any time'
    ],
    requirements: [
      'Official freezing request letter detailing strategic justifications',
      'Valid shareholder resolutions authorizing the corporate freeze',
      'MoHRE labor file suspension clearance',
      'Clearance letters from utility providers and municipal authorities',
      'Current trade license copy and commercial register',
      'Proof of complete establishment card and visa cancellation',
      'Clearance of any outstanding government or municipal fines'
    ],
    process: [
      'Audit eligibility and initiate cancellation of linked employment visas',
      'Obtain labor, immigration, and utility clearance certificates',
      'Draft and execute valid shareholder resolutions and formal request letters',
      'Submit the comprehensive DET freeze application alongside inspection reports',
      'Settle statutory freezing fees and reconcile any pending municipal dues',
      'Obtain the official freeze certificate marking the entity inactive'
    ],
    deliverables: [
      'Formal freeze certification confirming inactive registry status',
      'Cancellation of annual physical lease requirements and Ejari obligations',
      'Protection against non-renewal penalties and administrative blacklisting',
      'Preservation of registered trade name and corporate commercial history',
      'Strategic advisory on tax reporting baseline maintenance',
      'Seamless reactivation roadmap for future operational resumption'
    ],
    faqs: [
      {
        question: 'What does it mean to legally freeze a trade license?',
        answer: [
          'Freezing a license is a statutory mechanism that marks your company as officially inactive. It serves as an asset preservation maneuver, allowing you to pause operations without cancelling the entity outright.',
          'This strategy preserves your trade name and commercial history while exempting the business from mandatory Ejari lease renewals and standard licensing fees.'
        ]
      },
      {
        question: 'Can shareholder or employee visas be retained during the freeze?',
        answer: [
          'No. A mandatory prerequisite for freezing a license is the complete liquidation of all linked visas. All sponsored employees, dependents, and investor visas must be cancelled, and the MoHRE labor file must be cleared.',
          'You cannot maintain UAE residency under a company that is in a frozen statutory state.'
        ]
      },
      {
        question: 'Are we exempt from corporate tax obligations while frozen?',
        answer: [
          'Freezing exempts you from commercial lease requirements and licensing fines, but it does not absolve your entity from Federal Tax Authority (FTA) obligations.',
          'You must maintain your Corporate Tax Reporting Baseline, filing nil returns where applicable, to ensure ongoing sovereign compliance.'
        ]
      },
      {
        question: 'What is the maximum permitted duration for a license freeze?',
        answer: [
          'Under DET regulations, a mainland commercial company (LLC) can freeze its license for a maximum statutory window of 3 years.',
          'For sole establishments, the freeze period is limited to 1 year. Free Zone registries have varying internal policies, which our senior consultants will verify based on your jurisdiction.'
        ]
      },
      {
        question: 'Are we permitted to conduct any trading activities while frozen?',
        answer: [
          'There is a strict prohibition on commercial invoicing, trading, or signing new vendor contracts while the license is frozen.',
          'Engaging in active business operations under a frozen license is a severe statutory violation and can result in significant regulatory penalties.'
        ]
      },
      {
        question: 'How quickly can the company resume operations?',
        answer: [
          'The Rapid Unfreezing Protocol allows you to reactivate the entity at any point before the freeze tenure expires.',
          'Our advisors audit your documentation, coordinate the registration of a new Ejari commercial lease, and execute the unfreezing sequence to restore your active commercial standing.'
        ]
      },
      {
        question: 'Is freezing more cost-effective than cancelling and restarting later?',
        answer: [
          'Yes, if you plan to resume operations within the statutory window. Freezing bypasses the heavy costs of formal liquidation and the subsequent fees of establishing a completely new legal entity.',
          'It acts as a highly efficient bridge, saving massive office lease and annual overhead costs while preserving your established brand equity in the market.'
        ]
      }
    ]
  }
]
  },
  {
    id: 'visa',
    slug: 'visa',
    title: 'Visa Solutions',
    shortTitle: 'Visa',
    icon: 'passport',
    tagline: 'End-to-end residency, immigration, and long-term residency visas in the UAE',
    description:
      'A residence permit certifies the legitimacy of an expatriate to live, work, and invest legally across the UAE. We manage the full visa lifecycle — from initial entry permits and VIP medical fitness tests to Emirates ID biometrics and electronic stamping.',
    services: [
  {
    id: 'residence-visa',
    title: 'Residence Visa (Investor & Employment)',
    heroImage: heroResidenceVisa,
    overviewImage: overviewResidenceVisa,
    authority: 'GDRFA (Dubai), ICP (Federal), & MoHRE',
    timeframe: '10 – 15 Working Days (VIP Fast-Track: 3 – 5 Days)',
    badge: 'Sovereign Residency Foundation',
    icon: 'id-card',
    summary: 'A high-impact presentation of UAE legal residency enabling tax optimization, asset protection, and familial security.',
    description: 'Securing legal residency in the UAE is the foundational step for tax optimization, uninterrupted global banking access, and establishing a secure base for your family. There are distinct structural differences between Investor and Partner Visas, which are tethered to DET or Free Zone trade licenses, and Employment Visas, which operate strictly under Ministry of Human Resources and Emiratisation (MoHRE) contracts. Vision Business Setup delivers an elite executive handling experience. We manage the entire migration chain, from initiating electronic entry permits to coordinating VIP medical screening and executing doorstep Emirates ID biometric appointments, ensuring zero friction with regulatory authorities.',
    typesOfVisas: [
      'Mainland Commercial Investor Visa',
      'Free Zone Company Shareholder Visa',
      'Executive Employment Visa (MoHRE Tier 1)',
      'Specialized Skill Professional Visa',
      'Retirement Residency Visa'
    ],
    requirements: [
      'Valid corporate trade license copy',
      'Official company establishment card',
      'Attested educational degree certificates (strictly for skilled professional categories)',
      'Comprehensive passport dossiers (minimum 6 months validity)',
      'Standardized digital passport photographs with white background'
    ],
    process: [
      'Initiation and issuance of the electronic entry permit',
      'Execution of status change procedures (accommodating both in-country and out-of-country adjustments)',
      'Coordination of VIP medical fitness screening',
      'Execution of Emirates ID biometrics appointment',
      'Binding of mandatory UAE health insurance coverage',
      'Finalization via electronic residency stamping and digital Emirates ID issuance'
    ],
    deliverables: [
      'Digital residency permit securing your sovereign immigration status',
      'Expedited physical Emirates ID delivery',
      'Premium VIP escort services through all government and medical checkpoints',
      'Full labor card issuance for employment categories',
      'Proactive lifecycle tracking and renewal reminders'
    ],
    faqs: [
      {
        question: 'What is the validity period of the initial entry permit?',
        answer: [
          'Once issued, the standard employment or investor entry permit remains valid for 60 days.',
          'During this 60-day window, you must complete the status change, medical fitness examination, and Emirates ID biometric registration to finalize the residency stamping before the permit expires.'
        ]
      },
      {
        question: 'What does the mandatory medical fitness test screen for?',
        answer: [
          'The UAE requires a statutory medical fitness screening for all new residency applications and renewals.',
          'The examination specifically involves a blood test to screen for communicable diseases (such as HIV and Hepatitis B/C for certain professions) and a chest X-ray to detect pulmonary tuberculosis.'
        ]
      },
      {
        question: 'Are there specific salary thresholds for employment visas?',
        answer: [
          'Yes, employment visas are categorized into different skill tiers governed by MoHRE.',
          'To sponsor family members, an employee must meet a minimum monthly salary threshold of AED 4,000, or AED 3,000 if company accommodation is provided, ensuring statutory financial capability.'
        ]
      },
      {
        question: 'How does the 180-day travel window rule affect my residency?',
        answer: [
          'Standard UAE residence visas mandate that the holder must not remain outside the UAE for more than 180 consecutive days.',
          'Violating this rule automatically invalidates the residency visa, necessitating a completely new application. Exceptions exist solely for specific visa classes like the Golden Visa.'
        ]
      },
      {
        question: 'What is the difference between an Investor Visa and an Employment Visa?',
        answer: [
          'An Investor or Partner Visa is intrinsically linked to corporate ownership via a DET or Free Zone trade license, offering longer validity and exemption from MoHRE labor restrictions.',
          'Conversely, an Employment Visa requires sponsorship by a locally licensed corporate entity, is regulated by a MoHRE employment contract, and mandates adherence to the Wage Protection System (WPS).'
        ]
      },
      {
        question: 'Can I switch from an employment visa to an investor visa without leaving the UAE?',
        answer: [
          'Absolutely. We seamlessly facilitate an in-country status adjustment.',
          'This requires cancelling the existing employment visa and labor card, followed immediately by issuing the new investor entry permit and executing the status amendment, ensuring uninterrupted legal presence.'
        ]
      },
      {
        question: 'Why do I need an establishment card for visa processing?',
        answer: [
          'An establishment card is a mandatory statutory credential that registers your company with the General Directorate of Residency and Foreigners Affairs (GDRFA).',
          'It acts as the corporate immigration file, without which a company is legally barred from issuing entry permits or sponsoring any personnel.'
        ]
      },
      {
        question: 'Do all professions require an attested degree certificate?',
        answer: [
          'No, degree attestation is strictly enforced for skilled professional designations (MoHRE Skill Levels 1-3) such as Managers, Engineers, or Directors.',
          'Unskilled or semi-skilled labor categories do not require educational attestations, though they are subject to different quota and regulatory frameworks.'
        ]
      }
    ]
  },
  {
    id: 'golden-visa',
    title: 'UAE Golden Visa (10 Years)',
    heroImage: heroGoldenVisa,
    overviewImage: overviewGoldenVisa,
    authority: 'ICP, GDRFA & DET / Dubai Land Department',
    timeframe: '10 – 12 Working Days',
    badge: '10-Year Long-Term Self-Sponsored Residency',
    icon: 'star',
    summary: 'The premier 10-year residency program, providing elite investors and exceptional talents with unfettered global mobility and enduring family stability.',
    description: 'The UAE Golden Visa represents the pinnacle of long-term residency, conferring a 10-year, renewable, and entirely self-sponsored status. This transformative program detaches your residency from local employer sponsorship, offering unprecedented career flexibility and absolute immigration security. Vision Business Setup meticulously constructs your nomination dossier, securing direct institutional endorsements. Key privileges include the permanent removal of the standard 6-month consecutive absence restriction, granting true global mobility, alongside the power to unconditionally sponsor family members across all age brackets and an unlimited quota for domestic support staff.',
    eligibilityCriteria: [
      'Real Estate Investors (AED 2M+ equity, including off-plan/mortgaged properties)',
      'Senior Executives (Commanding an AED 30,000/mo salary paired with a bachelor’s degree)',
      'Entrepreneurs/Business Owners (Operating with AED 2M+ capital or within an approved incubator)',
      'Exceptional Talents & Specialized Industry Experts',
      'Ph.D. Holders, Scientists, and Leading Researchers',
      'Outstanding Students and Exceptional Academic Performers'
    ],
    keyBenefits: [
      '10-Year Renewable Self-Sponsorship',
      'Exemption from the 6-Month Consecutive Absence Rule',
      'Unlimited Sponsorship of Family Members of Any Age',
      'Extended 6-Month Grace Period Post-Expiry',
      'Right to Sponsor Multiple Domestic Support Staff'
    ],
    requirements: [
      'Verified Title deeds or mortgage No Objection Certificates (NOCs) from the Dubai Land Department (DLD)',
      'Attested employment contracts coupled with 6 months of stamped bank salary statements',
      'Active MoHRE labor contracts demonstrating the requisite income tier',
      'Fully attested educational degrees via MoFA and relevant UAE embassies'
    ],
    process: [
      'Initial eligibility audit and meticulous documentation file preparation',
      'Direct nomination application submission via GDRFA/ICP portals',
      'Procurement of initial approval and issuance of a 6-month multiple-entry visa for processing',
      'Execution of comprehensive VIP medical fitness screening',
      'Priority Emirates ID biometrics capturing',
      'Final issuance and electronic stamping of the 10-Year Golden Visa'
    ],
    deliverables: [
      'Direct institutional nomination handling and advocacy',
      'Impeccable government documentation assembly and submission',
      'VIP concierge coordination for medical screening and biometrics',
      'Delivery of the prestigious 10-year digital residency and physical Emirates ID'
    ],
    faqs: [
      {
        question: 'How is the AED 2,000,000 real estate equity threshold calculated?',
        answer: [
          'The valuation is strictly based on the purchase price of the property registered with the Dubai Land Department (DLD), not the current market appraisal.',
          'Crucially, this includes off-plan properties and mortgaged assets, provided the investor\'s paid equity or the bank\'s NOC satisfies the regulatory financial thresholds.'
        ]
      },
      {
        question: 'Does the AED 30,000 salary requirement refer to basic or gross income?',
        answer: [
          'The AED 30,000 threshold applies to the gross monthly salary as explicitly stated in your MoHRE labor contract.',
          'This must be consistently reflected in your bank statements over a trailing 6-month period, demonstrating stable executive compensation.'
        ]
      },
      {
        question: 'Is the 6-month travel restriction completely removed for Golden Visa holders?',
        answer: [
          'Yes. Golden Visa holders are entirely exempt from the standard rule that invalidates residency if the holder remains outside the UAE for more than 180 consecutive days.',
          'You may reside abroad indefinitely without compromising your UAE residency status.'
        ]
      },
      {
        question: 'Can I sponsor my adult children under the Golden Visa?',
        answer: [
          'Absolutely. Unlike standard residency visas which cap dependent sons at age 25, the Golden Visa allows you to sponsor family members of any age without restriction.',
          'This ensures long-term familial unity regardless of your dependents\' marital or educational status.'
        ]
      },
      {
        question: 'Are there limits on sponsoring domestic support staff?',
        answer: [
          'The Golden Visa grants the exceptional privilege to sponsor an unlimited number of domestic workers, subject only to the standard spatial requirements of your registered residence.',
          'This facilitates the seamless management of large private households.'
        ]
      },
      {
        question: 'If my Golden Visa expires, how long do I have to renew it?',
        answer: [
          'Golden Visa holders benefit from a uniquely extended 6-month grace period following visa expiration.',
          'This generous window ensures you can arrange renewals or adjust your status without incurring immediate overstay penalties or risking administrative blacklisting.'
        ]
      },
      {
        question: 'Do I lose my Golden Visa if I change employers?',
        answer: [
          'No. As a self-sponsored residency, the Golden Visa is decoupled from your employer.',
          'You retain your 10-year residency status and full mobility across the UAE job market, completely independent of corporate sponsorship transfers.'
        ]
      },
      {
        question: 'What defines an "Outstanding Student" for Golden Visa eligibility?',
        answer: [
          'Outstanding students include high school graduates achieving exceptional national percentiles, as well as university graduates with a GPA of 3.8 or higher from accredited institutions.',
          'Nominations are typically facilitated in conjunction with the Ministry of Education.'
        ]
      },
      {
        question: 'Can business partners combine property values to reach the AED 2M threshold?',
        answer: [
          'Yes, provided that each partner\'s individual share of the equity clearly amounts to AED 2,000,000 or more as per the DLD title deed.',
          'Joint ownership is permissible so long as the fractional value meets the sovereign requirement.'
        ]
      },
      {
        question: 'Does obtaining a Golden Visa require cancelling my current active trade license?',
        answer: [
          'Not at all. You may seamlessly hold a Golden Visa while maintaining active ownership and directorship roles in your mainland or free zone commercial entities.',
          'Your corporate legal standing remains fully intact while your personal immigration status is elevated.'
        ]
      }
    ]
  },
  {
    id: 'dependent-visa',
    title: 'Dependent & Family Visa',
    heroImage: heroDependentVisa,
    overviewImage: overviewDependentVisa,
    authority: 'GDRFA (Dubai) & ICP (Federal Authority)',
    timeframe: '7 – 10 Working Days',
    badge: 'Comprehensive Family Sponsorship',
    icon: 'users',
    summary: 'Seamless family integration. Relocate your loved ones to Dubai with absolute immigration compliance and zero procedural stress.',
    description: 'Keeping families united in the UAE requires precise navigation of federal immigration protocols. Vision Business Setup delivers dignified, efficient, and compassionate visa processing for spouses, children, dependent parents, and domestic workers. We meticulously audit your statutory salary thresholds and authenticate your housing contracts (Ejari) before submission. Sponsoring parents involves distinct humanitarian criteria and higher financial thresholds compared to spouses and children. Our senior advisors manage the entire attestation and application lifecycle, ensuring your family’s transition is legally bulletproof and entirely frictionless.',
    typesOfDependents: [
      'Spouse (Husband/Wife)',
      'Sons (Sponsored up to Age 25, Unlimited for People of Determination)',
      'Unmarried Daughters (Any Age)',
      'Parents and Parents-in-Law (Under Humanitarian Sponsorship Rules)',
      'Stepchildren & Custody Dependents',
      'Newborn Infants Born in the UAE'
    ],
    salaryAndHousing: [
      'Minimum AED 4,000/mo salary (or AED 3,000 + company accommodation) for spouse and children',
      'Minimum AED 20,000/mo salary + 2-bedroom registered Ejari for sponsoring both parents simultaneously',
      'Mandatory health insurance coverage across all emirates'
    ],
    requirements: [
      'Attested marriage certificate (Legalized by MoFA & relevant UAE Embassy)',
      'Attested birth certificates for all dependent children',
      'Sponsor\'s certified salary certificate or active MoHRE labor contract',
      'Registered Ejari tenancy contract reflecting adequate residential space',
      'Sponsor\'s trailing 3-month stamped bank statements',
      'Clear passport copies of all sponsored family members'
    ],
    process: [
      'Comprehensive attestation audit and document legalization guidance',
      'Preparation and filing of the dependent entry permit application',
      'Execution of in-country status change to activate the file',
      'Coordination of medical fitness screening for dependents aged 18 and above',
      'Emirates ID biometrics appointment execution',
      'Final residency stamping and mandatory health insurance issuance'
    ],
    deliverables: [
      'Expert guidance on international document attestation pipelines',
      'End-to-end management of GDRFA/ICP file processing',
      'Priority booking for medical fitness centers and biometrics',
      'Delivery of physical family Emirates IDs',
      'Implementation of calendarized renewal tracking to prevent overstay penalties'
    ],
    faqs: [
      {
        question: 'What is the correct attestation pipeline for marriage and birth certificates?',
        answer: [
          'Documents must follow a strict diplomatic legalization sequence to be recognized in the UAE.',
          'They must first be attested by the Ministry of Foreign Affairs in the issuing country, followed by the UAE Embassy in that country, and finally legalized by the UAE Ministry of Foreign Affairs (MoFA) inside the UAE.'
        ]
      },
      {
        question: 'Can a female resident sponsor her husband and children?',
        answer: [
          'Yes, women can sponsor their families under UAE law.',
          'The requirements mandate a minimum monthly salary threshold (typically AED 4,000, though subject to specific professional categories) and an Ejari registered in her name. Certain professions may require additional approval from the GDRFA.'
        ]
      },
      {
        question: 'What is the age limit for sponsoring male children?',
        answer: [
          'Recent federal reforms have significantly extended the age limit.',
          'Expatriate residents can now sponsor their sons up to the age of 25. For People of Determination, the sponsorship right is completely unlimited regardless of age.'
        ]
      },
      {
        question: 'What are the specific rules for sponsoring parents?',
        answer: [
          'Sponsoring parents falls under humanitarian rules and requires a higher financial baseline.',
          'The sponsor must earn a minimum of AED 20,000 per month, maintain a minimum 2-bedroom Ejari-registered apartment, and typically sponsor both parents simultaneously unless one is deceased or divorced.'
        ]
      },
      {
        question: 'Is a humanitarian deposit required when sponsoring parents?',
        answer: [
          'Yes, the GDRFA mandates a refundable humanitarian deposit (historically around AED 2,500 to AED 3,000 per parent) as a financial guarantee.',
          'This deposit is fully refunded upon the cancellation of the parents\' residency visas.'
        ]
      },
      {
        question: 'Can I sponsor stepchildren in the UAE?',
        answer: [
          'Yes, sponsoring stepchildren is permissible, but it requires rigorous legal documentation.',
          'You must provide an attested No Objection Certificate (NOC) from the biological parent, alongside attested custody verdicts from the relevant courts, all fully legalized through MoFA.'
        ]
      },
      {
        question: 'How long do I have to sponsor a newborn infant born in the UAE?',
        answer: [
          'Sponsors are granted a strict 120-day grace period from the date of the child’s birth to secure their passport and finalize the residency visa.',
          'Failing to complete the process within this window will result in compounding daily overstay fines.'
        ]
      },
      {
        question: 'Are medical fitness tests required for children?',
        answer: [
          'No, medical fitness screenings (blood tests and X-rays) are only mandatory for dependents who are 18 years of age or older.',
          'Minors are exempt from the medical screening portion of the residency process.'
        ]
      },
      {
        question: 'Is an Ejari tenancy contract absolutely mandatory for family sponsorship?',
        answer: [
          'Yes, a valid Ejari (or equivalent registered tenancy contract in other emirates) is a non-negotiable statutory requirement.',
          'It proves the sponsor has adequate physical housing to support the dependents, a critical parameter for GDRFA approval.'
        ]
      }
    ]
  },
  {
    id: 'remote-work-visa',
    title: 'Remote Work Visa (Digital Nomad)',
    heroImage: heroRemoteWorkVisa,
    overviewImage: overviewRemoteWorkVisa,
    authority: 'GDRFA Dubai & ICP (Federal Virtual Working Programme)',
    timeframe: '10 – 12 Working Days',
    badge: '1-Year Self-Sponsored Global Nomad Program',
    icon: 'laptop',
    summary: 'Position Dubai as your ultimate global base. Live in the world’s safest hub while retaining your overseas employment or business.',
    description: 'The Remote Work Visa transforms Dubai into the ultimate global hub for location-independent tech professionals, international remote workers, and overseas company founders. You can legally reside in the UAE, rent residential apartments via Ejari, open local bank accounts, enroll your children in elite schools, and obtain a UAE driving license—all without requiring a domestic employer or corporate sponsor. Vision Business Setup manages the stringent financial audits required by the Virtual Working Programme, ensuring your overseas income documentation aligns perfectly with federal requirements, allowing you to enjoy zero personal income tax and ultra-fast infrastructure.',
    eligibilityCriteria: [
      'Proof of remote employment outside the UAE with minimum 1-year contract validity OR Proof of ownership of an overseas company operating for 1+ years',
      'Minimum monthly income of USD 3,500 (or equivalent foreign currency)',
      '6 months of certified bank statements reflecting consistent salary or dividend credits',
      'Valid health insurance coverage for the UAE'
    ],
    requirements: [
      'Attested employment contract or official corporate ownership certificates',
      'Trailing 6 months of stamped, official bank statements',
      'Valid passport maintaining a minimum of 6 months validity',
      'Comprehensive UAE health insurance certificate',
      'Digital passport photographs conforming to biometric standards'
    ],
    process: [
      'Stringent eligibility vetting and overseas income audit',
      'Application and issuance of the Virtual Work Entry Permit',
      'Official entry into the UAE or in-country status adjustment',
      'Execution of medical fitness screening and Emirates ID biometrics',
      'Final stamping of the 1-Year Residence Visa and Emirates ID delivery'
    ],
    deliverables: [
      'Comprehensive audit of your international income documentation for compliance',
      'End-to-end government portal submission and liaison',
      'Priority scheduling for VIP medical screening and biometrics',
      'Procurement and delivery of your self-sponsored Emirates ID',
      'Strategic transition advisory for subsequent 10-year Golden Visa pathways'
    ],
    faqs: [
      {
        question: 'How is the USD 3,500 monthly income threshold calculated?',
        answer: [
          'The threshold must be demonstrated as net income consistently deposited into your personal bank account.',
          'Whether you draw a salary from an overseas employer or dividends as a company owner, the trailing 6 months of bank statements must unequivocally show these incoming transfers averaging at least USD 3,500.'
        ]
      },
      {
        question: 'Does the Remote Work Visa make me a UAE tax resident?',
        answer: [
          'Holding the visa allows you to live in a zero personal income tax jurisdiction, but securing a formal Tax Domicile Certificate from the UAE Federal Tax Authority (FTA) requires meeting specific physical presence tests (e.g., 183 days).',
          'We advise consulting on double taxation treaties applicable to your home country.'
        ]
      },
      {
        question: 'Can I sponsor my family on a Remote Work Visa?',
        answer: [
          'Absolutely. Once your 1-Year Remote Work Visa is stamped, you hold full legal rights to sponsor your spouse and children.',
          'You must meet the standard family sponsorship requirements, including an Ejari-registered tenancy contract and valid health insurance for all dependents.'
        ]
      },
      {
        question: 'Is the Remote Work Visa renewable annually?',
        answer: [
          'Yes, the visa is renewable every year.',
          'To renew, you must simply re-submit updated documentation proving you still meet the USD 3,500 income threshold and possess valid health insurance.'
        ]
      },
      {
        question: 'Can I open a corporate bank account in the UAE with this visa?',
        answer: [
          'No. The Remote Work Visa grants you the right to open a personal, resident bank account.',
          'Corporate bank accounts in the UAE are strictly reserved for entities holding a valid mainland or free zone commercial trade license issued by UAE authorities.'
        ]
      },
      {
        question: 'Am I allowed to work for UAE-based companies on this visa?',
        answer: [
          'No. The Remote Work Visa explicitly restricts you from accepting employment from any company based within the UAE.',
          'Your income must be sourced entirely from employers or business operations located outside the country.'
        ]
      },
      {
        question: 'What if my salary fluctuates month to month?',
        answer: [
          'The authorities review the trailing 6 months of bank statements to establish consistency.',
          'Minor fluctuations are permissible, provided the average clearly meets or exceeds the USD 3,500 statutory requirement.'
        ]
      },
      {
        question: 'Can this visa lead to a Golden Visa?',
        answer: [
          'Yes, it serves as an excellent stepping stone.',
          'If your remote income scales to meet the AED 30,000 monthly threshold, or if you invest AED 2M in Dubai real estate while holding the Remote Work Visa, you can transition smoothly to the 10-Year Golden Visa.'
        ]
      },
      {
        question: 'Do I need an Ejari to apply for the initial visa?',
        answer: [
          'An Ejari is not strictly required for the initial issuance of your own Remote Work Visa, as you can reside in hotels or serviced apartments initially.',
          'However, an Ejari becomes mandatory the moment you intend to sponsor family members or open certain local banking facilities.'
        ]
      }
    ]
  },
  {
    id: 'freelance-visa',
    title: 'Freelance Visa & Permit',
    heroImage: heroFreelanceVisa,
    overviewImage: overviewFreelanceVisa,
    authority: 'UAE Free Zone Authorities (TECOM, GoFreelance, Shams, DAFZA, etc.) & MoHRE',
    timeframe: '10 – 12 Working Days',
    badge: 'Independent Professional & Sole Practitioner',
    icon: 'briefcase',
    summary: 'Empowering specialized consultants, creatives, and developers to monetize their expertise legitimately across the UAE market.',
    description: 'Transform your professional skills into a recognized, legitimate business entity. The UAE Freelance Visa allows independent professionals to issue tax invoices, sign corporate vendor contracts, and reside legally in Dubai without the crippling overheads of physical office leases. Vision Business Setup precisely differentiates between a Free Zone freelance permit (ideal for media and tech consultants) and a mainland MoHRE green freelance visa. We architect your setup to ensure you are fully equipped to establish corporate bank accounts, navigate vendor onboarding with multinational clients, and register for VAT when your billings exceed mandatory thresholds.',
    eligibilityAndSectors: [
      'Media, Film & Content Creation',
      'Technology, Software & AI Development',
      'Design, Architecture & Fashion',
      'Education, Coaching & Corporate Training',
      'Management Consulting & Professional Advisory'
    ],
    requirements: [
      'Updated Professional CV or extensive Portfolio of Work',
      'Attested educational degree or recognized diploma certificate',
      'Clear passport copy with minimum 6 months validity',
      'Professional reference letters highlighting industry expertise',
      'Digital passport-sized photograph adhering to biometric standards'
    ],
    process: [
      'Sector verification and submission of the freelance permit application',
      'Issuance of the official Freelance Talent Permit by the relevant authority',
      'Generation of the Entry Permit and linked establishment card',
      'Execution of VIP medical examination and Emirates ID biometrics',
      'Final Residence permit issuance and digital stamping'
    ],
    deliverables: [
      'Official Free Zone / MoHRE Freelance Permit certifying your legal status',
      '1 to 2-year UAE residence visa and Emirates ID',
      'Corporate establishment card enabling government interactions',
      'Strategic guidance on corporate invoicing and establishing banking mandates',
      'Pre-emptive VAT registration evaluation and fiscal advisory'
    ],
    faqs: [
      {
        question: 'Can I hire employees under a Freelance Permit?',
        answer: [
          'No, a freelance permit strictly licenses you as a sole practitioner. You are not permitted to sponsor employee visas or hire staff on your permit.',
          'However, you are entirely free to collaborate with other licensed freelancers or engage corporate agencies as external contractors.'
        ]
      },
      {
        question: 'Is it possible to open a corporate bank account as a freelancer?',
        answer: [
          'Yes, but it requires navigating specific compliance frameworks. While some tier-1 banks prefer LLCs, several digital banks (such as Wio) and specific commercial accounts cater directly to licensed freelancers.',
          'We guide you in assembling the necessary proof of business and client contracts to secure a functional business account.'
        ]
      },
      {
        question: 'Can I transition to a freelance visa while currently employed?',
        answer: [
          'Yes, you can transition, provided your current employer cancels your existing labor contract and residence visa.',
          'Alternatively, if you wish to freelance part-time while remaining employed, you must obtain a formal No Objection Certificate (NOC) from your current MoHRE sponsor.'
        ]
      },
      {
        question: 'How do I invoice multinational corporate clients legally?',
        answer: [
          'Your freelance permit acts as your trade license, granting you a legal commercial identity.',
          'You can issue formal invoices featuring your permit number, allowing corporate clients to legally onboard you as an official vendor in their procurement systems.'
        ]
      },
      {
        question: 'Do I need to register for Corporate Tax or VAT?',
        answer: [
          'Freelancers are considered natural persons conducting business and are subject to the UAE Corporate Tax regime if their revenue exceeds AED 1 Million.',
          'For VAT, registration becomes mandatory if your taxable supplies exceed AED 375,000 over a 12-month period, or voluntary at AED 187,500.'
        ]
      },
      {
        question: 'What is the difference between a Free Zone and a MoHRE Freelance Visa?',
        answer: [
          'Free Zone freelance permits are jurisdiction-specific, heavily favored by media, tech, and education professionals (e.g., TECOM).',
          'A MoHRE green freelance visa operates on the mainland, offering broader geographic flexibility but entails different regulatory oversight under federal labor frameworks.'
        ]
      },
      {
        question: 'Can I sponsor my family on a Freelance Visa?',
        answer: [
          'Yes, holding a freelance residence visa grants you full rights to sponsor your dependents (spouse and children).',
          'You must meet the standard family sponsorship requirements, including demonstrating sufficient income and providing a registered Ejari tenancy contract.'
        ]
      },
      {
        question: 'Do I need to rent physical office space?',
        answer: [
          'No, one of the primary advantages of the freelance permit is the exemption from commercial lease requirements.',
          'You operate virtually or utilize designated flexi-desks provided by the issuing free zone, drastically reducing your operational overhead.'
        ]
      },
      {
        question: 'Are there age restrictions for obtaining a freelance permit?',
        answer: [
          'Generally, applicants must be at least 18 years old to apply for a standard freelance permit.',
          'There is no strict upper age limit, provided the applicant successfully clears the mandatory DHA/EHS medical fitness examination.'
        ]
      }
    ]
  },
  {
    id: 'domestic-worker-visa',
    title: 'Domestic Worker Visa',
    heroImage: heroDomesticWorkerVisa,
    overviewImage: overviewDomesticWorkerVisa,
    authority: 'Ministry of Human Resources and Emiratisation (MoHRE) & ICP (Tadbeer Centers)',
    timeframe: '5 – 7 Working Days',
    badge: 'Private Household Staff Sponsorship',
    icon: 'home',
    summary: 'Professional, dignified, and fully regulated visa management ensuring absolute compliance for your domestic household staff.',
    description: 'Sponsoring household staff requires strict adherence to modernized federal regulations. Vision Business Setup delivers fully compliant visa management for domestic assistants, nannies, private drivers, and household cooks under Federal Decree-Law No. 9 of 2022. We safeguard your family and your employees by ensuring transparent MoHRE standard unified employment contracts, mandatory health insurance binding, and structured Wage Protection System (WPS) integration. Our senior consultants manage the entire liaison with Tadbeer centers, eliminating administrative friction and ensuring dignified, error-free processing.',
    requirements: [
      'Sponsor\'s original passport, valid UAE residence visa, and Emirates ID copy',
      'Registered Ejari tenancy contract demonstrating adequate living quarters',
      'Certified salary certificate or audited income statements of the sponsor',
      'Domestic worker\'s original passport with minimum 6 months validity',
      'Domestic worker\'s digital passport photographs (white background)'
    ],
    process: [
      'Submission and approval of the MoHRE domestic quota allocation',
      'Generation of the official entry permit via Tadbeer/ICP systems',
      'Facilitation of worker travel or execution of in-country status adjustment',
      'Coordination of the mandatory medical fitness examination',
      'Execution of biometrics capturing for the Emirates ID',
      'Signing of the MoHRE standard contract and final residence permit delivery'
    ],
    deliverables: [
      'Generation and registration of the MoHRE unified employment contract',
      'Issuance of the domestic worker entry permit and residency status',
      'Complete coordination of medical fitness clearance and biometrics',
      'Fast-tracked physical Emirates ID processing',
      'Strategic guidance on implementing the Wage Protection System (WPS)'
    ],
    faqs: [
      {
        question: 'What is the minimum sponsor salary required to hire a domestic worker?',
        answer: [
          'To legally sponsor a domestic worker, the sponsoring resident must earn a minimum monthly salary of AED 25,000.',
          'Alternatively, exceptions can be made if the sponsor holds specific professional designations or if the sponsor is a UAE National, subject to MoHRE evaluation.'
        ]
      },
      {
        question: 'Which occupational categories are covered under the Domestic Workers Law?',
        answer: [
          'Federal Decree-Law No. 9 of 2022 explicitly covers 19 categories of household staff.',
          'This includes housemaids, nannies, private drivers, cooks, private nurses, gardeners, and household guards, ensuring comprehensive regulatory protection across all domestic roles.'
        ]
      },
      {
        question: 'Is health insurance mandatory for domestic workers?',
        answer: [
          'Yes, it is a strict statutory mandate.',
          'The sponsor is legally obligated to provide and bear the cost of comprehensive health insurance coverage for the domestic worker for the entire duration of their residency and employment.'
        ]
      }
    ]
  }
]
  },
  {
      id: 'finance-banking',
      slug: 'finance-banking',
      title: 'Finance & Banking',
      shortTitle: 'Finance & Banking',
      icon: 'bank',
      tagline: 'Corporate bank accounts, UAE Corporate Tax advisory & VAT compliance',
      description:
        'Solid financial management is the backbone of any successful enterprise. We assist with opening tier-one corporate bank accounts, navigating UAE Corporate Tax laws (9%), and ensuring meticulous bookkeeping and quarterly VAT filings.',
      services: [
        {
          id: 'bank-account-opening',
          title: 'Corporate Bank Account Opening',
          heroImage: heroBankAccount,
          overviewImage: overviewBankAccount,
          authority: 'Central Bank of the UAE & Partner Commercial Banks',
          timeframe: '2 – 4 Weeks',
          badge: 'Tier-1 UAE Banks',
          icon: 'bank',
          summary:
            'Vision Business Setup acts as your strategic bridge, connecting international entrepreneurs with discerning UAE commercial banks for guaranteed account activation.',
          description:
            'Securing a corporate bank account in the UAE demands far more than basic paperwork; it requires passing rigorous Know Your Customer (KYC), Source of Wealth, and Ultimate Beneficial Ownership (UBO) compliance checks. Unguided applications frequently face high rejection rates due to inadequate demonstrations of economic substance or structural misunderstandings. We eliminate these regulatory bottlenecks by architecting watertight business profiles, preparing robust transactional projections, and introducing your enterprise directly to senior relationship managers at top-tier institutions.',
          bankingPartners: [
            'Emirates NBD',
            'Mashreq Bank / Mashreq NeoBiz',
            'Wio Bank (Digital Enterprise)',
            'First Abu Dhabi Bank (FAB)',
            'Dubai Islamic Bank (DIB)',
            'Commercial Bank of Dubai (CBD)',
            'Abu Dhabi Commercial Bank (ADCB)',
          ],
          requirements: [
            'Valid trade license and commercial register',
            'Memorandum of Association (MoA) and shareholder resolutions',
            '6 months personal and corporate bank statements of ultimate shareholders',
            'Comprehensive corporate business profile with invoices/contracts',
            'Supplier and customer counterparties list',
            'Ejari lease agreement',
            'Shareholder passports and Emirates IDs',
          ],
          process: [
            'Business activity & financial profile risk assessment',
            'Comprehensive KYC dossier & business plan compilation',
            'Bank matching & pre-screening with relationship managers',
            'In-person banker interview & signature verification',
            'Bank compliance & AML committee review',
            'IBAN generation, online portal activation, and debit card dispatch',
          ],
          deliverables: [
            'Dedicated relationship manager introduction',
            'Customized business plan and financial forecast dossier',
            'Multi-currency corporate account IBAN',
            'Online banking onboarding support',
            'Ongoing compliance advisory',
          ],
          faqs: [
            {
              question: 'What are the minimum balance requirements for corporate bank accounts in the UAE?',
              answer: [
                'Minimum balance thresholds vary significantly depending on the banking institution and account tier you select.',
                'Digital business banks often feature zero or very low minimum balance requirements, making them ideal for startups. In contrast, tier-one conventional commercial banks typically require an average monthly balance ranging from AED 50,000 to AED 500,000. Falling below these thresholds may trigger monthly penalty fees.',
              ],
            },
            {
              question: 'Is a physical office lease mandatory to open a business bank account?',
              answer: [
                'Historically, conventional banks mandated a physical office lease (Ejari) to prove economic substance. However, the landscape has evolved.',
                'While a physical office strengthens your application for premium banking tiers, many institutions and digital banks now accept verified co-working spaces or flexi-desk agreements. Our advisors assess your operational setup to match you with a bank that aligns with your specific lease type.',
              ],
            },
            {
              question: 'What are the main hurdles for offshore entities opening accounts in Dubai?',
              answer: [
                'Offshore companies face intensified scrutiny under stringent Central Bank AML and KYC directives, as they often lack physical economic substance within the UAE.',
                'Banks require comprehensive disclosures of Ultimate Beneficial Ownership (UBO), detailed source of wealth declarations, and extensive counterparty verification. Without a strategically prepared dossier, offshore entities face exceptionally high rejection rates.',
              ],
            },
            {
              question: 'How do requirements differ for resident versus non-resident shareholders?',
              answer: [
                'Resident shareholders holding a valid Emirates ID and UAE visa experience a much faster onboarding process, as they are instantly verifiable through domestic databases.',
                'Non-resident shareholders must undergo enhanced due diligence. This includes providing authenticated international bank statements, detailed home-country tax residency proofs, and often requires an in-person visit to the UAE for signature verification.',
              ],
            },
            {
              question: 'Can I open a multi-currency account for my UAE business?',
              answer: [
                'Yes. Most premier UAE commercial banks and digital banking platforms offer robust multi-currency capabilities as a standard feature.',
                'You can seamlessly hold, receive, and transfer funds in major fiat currencies including AED, USD, EUR, and GBP, effectively shielding your enterprise from unnecessary foreign exchange conversion fees during international trade.',
              ],
            },
            {
              question: 'How long does the compliance and AML review take?',
              answer: [
                'The duration of the compliance review depends entirely on the complexity of your corporate structure and the risk profile of your business activities.',
                'Digital banks may process straightforward applications within 5 to 7 days. Conventional banks conducting deep AML and UBO investigations typically require 3 to 4 weeks to issue the final IBAN and activate the account.',
              ],
            },
          ],
        },
        {
          id: 'corporate-tax-guide',
          title: 'Corporate Tax Guide & Registration',
          heroImage: heroCorporateTax,
          overviewImage: overviewCorporateTax,
          authority: 'Federal Tax Authority (FTA)',
          timeframe: '3 – 5 Working Days',
          badge: 'FTA 9% Regime',
          icon: 'compass',
          summary:
            'Transform statutory compliance into strategic fiscal advantage. Secure your Corporate Tax Registration Number (TRN) and establish compliant accounting frameworks.',
          description:
            'Navigating the UAE Corporate Tax landscape requires precise fiscal strategy. A prevalent misconception is that Free Zone companies are automatically tax-exempt; in reality, they must actively maintain Qualifying Free Zone Person (QFZP) status and file annual returns. The federal regime imposes a headline 9% rate on taxable income above AED 375,000. Our expert advisory ensures your enterprise is properly registered, structurally optimized, and fully compliant with Federal Decree-Law No. 47 of 2022.',
          keyTaxPillars: [
            '0% Rate on Taxable Profits up to AED 375,000',
            'Standard 9% Rate on Taxable Profits Exceeding AED 375,000',
            'Small Business Relief (Article 21) for Revenues up to AED 3,000,000',
            'Qualifying Free Zone Person (QFZP) 0% Exemption Framework',
            'Mandatory Audited Financial Reporting & Transfer Pricing Documentation',
          ],
          requirements: [
            'Valid trade license',
            'Memorandum of Association',
            'Emirates ID and passport copies of authorized signatories',
            'Registered office address details',
            'Financial year start/end dates',
            'Corporate contact details',
          ],
          process: [
            'Financial year-end and business activity tax classification',
            'EmaraTax corporate profile setup',
            'Corporate tax registration submission',
            'Issuance of Corporate Tax TRN',
            'Tax impact assessment & transfer pricing audit',
            'Annual return compilation and electronic filing',
          ],
          deliverables: [
            'Corporate Tax Registration Number (TRN) issuance',
            'Fiscal impact analysis',
            'Free Zone qualifying income assessment',
            'Statutory filing timeline roadmap',
          ],
          faqs: [
            {
              question: 'What are the deadlines for UAE Corporate Tax registration?',
              answer: [
                'The Federal Tax Authority has issued strict, staggered deadlines based on the month your original trade license was issued, regardless of the year of incorporation.',
                'Failing to submit your corporate tax registration application by your specific mandated deadline will automatically trigger an administrative penalty of AED 10,000. It is critical to register well in advance to avoid this punitive fine.',
              ],
            },
            {
              question: 'How does Small Business Relief (SBR) work and when does it sunset?',
              answer: [
                'Under Article 21, resident taxable persons with total gross revenues of AED 3,000,000 or less within a tax period can elect for Small Business Relief, treating their taxable income as zero.',
                'However, this relief is a transitional measure designed to help startups adapt to the new tax regime and is currently legislated to sunset at the end of the 2026 tax periods. Post-2026, standard tax rules will apply unless the relief is extended.',
              ],
            },
            {
              question: 'Are Free Zone companies exempt from paying the 9% corporate tax?',
              answer: [
                'Free Zone entities are not automatically exempt. To benefit from the 0% corporate tax rate, a company must satisfy the stringent conditions of a Qualifying Free Zone Person (QFZP).',
                'This involves maintaining adequate economic substance in the UAE and deriving income strictly from Qualifying Activities. Any income generated from Non-Qualifying Activities or transactions with mainland entities may still be subject to the standard 9% tax rate.',
              ],
            },
            {
              question: 'Can director salaries be deducted as business expenses?',
              answer: [
                'Director remuneration can be deducted as a legitimate business expense, thereby lowering taxable corporate profit, but only if the salary meets strict arm\'s-length transfer pricing principles.',
                'The salary must reflect the actual market value of the services rendered to the company. Excessive remuneration designed solely to erode the tax base will be rejected by the FTA during an audit.',
              ],
            },
            {
              question: 'What is the distinction between Qualifying and Non-Qualifying revenue?',
              answer: [
                'Qualifying revenue refers to income generated from specific activities approved by cabinet decisions, such as manufacturing, holding shares, or logistics, conducted within a designated Free Zone.',
                'Non-Qualifying revenue is income derived from excluded activities or direct sales to mainland consumers. If non-qualifying revenue exceeds 5% of total revenue or AED 5,000,000 (whichever is lower), the entity loses its QFZP status and all income becomes taxable at 9%.',
              ],
            },
            {
              question: 'Do companies with zero profit still need to register for corporate tax?',
              answer: [
                'Absolutely. The legal obligation to register for corporate tax and obtain a TRN applies to all commercial entities in the UAE, irrespective of whether they are generating profit or operating at a loss.',
                'You must still file an annual corporate tax return declaring your financial position. Failure to register will result in the standard AED 10,000 late registration penalty.',
              ],
            },
            {
              question: 'What financial records must be maintained for corporate tax compliance?',
              answer: [
                'The UAE mandates that all taxable persons maintain comprehensive accounting records and financial statements that accurately reflect their financial position.',
                'These records—including general ledgers, invoices, receipts, and transfer pricing documentation—must be securely retained for a minimum of 7 years following the end of the relevant tax period to satisfy potential FTA audits.',
              ],
            },
          ],
        },
        {
          id: 'bookkeeping-vat',
          title: 'Bookkeeping & VAT Registration',
          heroImage: heroBookkeepingVat,
          overviewImage: overviewBookkeepingVat,
          authority: 'Federal Tax Authority (FTA) & EmaraTax',
          timeframe: 'Monthly / Quarterly Service',
          badge: 'Certified Accountants',
          icon: 'badge-check',
          summary:
            'Maintain essential operational intelligence that satisfies FTA audits, safeguards banking facilities, and optimizes cash flow.',
          description:
            'Proper financial stewardship extends far beyond simple transaction recording; it is a statutory legal mandate in the UAE requiring companies to maintain accurate financial records for a minimum of 5 years. Navigating the strict thresholds for mandatory and voluntary VAT registration demands rigorous oversight. Vision Business Setup deploys certified tax agents and chartered accountants to architect audit-proof financial infrastructures, ensuring your double-entry bookkeeping and quarterly VAT submissions are flawless.',
          vatRegistrationRules: [
            'Mandatory Registration: Taxable supplies exceed AED 375,000 in previous 12 months (or expected within 30 days)',
            'Voluntary Registration: Taxable supplies or expenses exceed AED 187,500',
            'Zero-Rated vs Exempt Activities Assessment',
          ],
          bookkeepingInclusions: [
            'General Ledger & Chart of Accounts Maintenance',
            'Bank, Credit Card & Merchant Account Reconciliations',
            'Monthly Profit & Loss, Balance Sheet & Cash Flow Reports',
            'VAT Invoicing Compliance & Input Tax Reclamation Audits',
            'Quarterly VAT 201 Return Preparation & EmaraTax Submission',
          ],
          requirements: [
            'Monthly sales invoices and customer contracts',
            'Purchase bills and vendor receipts',
            'Bank account statements',
            'Payroll / WPS records',
            'Previous VAT return records (if applicable)',
          ],
          process: [
            'Initial chart of accounts setup',
            'Monthly transactional data entry and categorization',
            'Reconciliation of bank and merchant accounts',
            'Management financial reporting',
            'Quarterly VAT calculation and return filing via EmaraTax',
          ],
          deliverables: [
            'Dedicated certified accountant',
            'Cloud accounting software setup (Xero / Zoho / QuickBooks)',
            'Monthly financial reporting packs',
            'VAT return submission receipts',
            'FTA tax audit representation',
          ],
          faqs: [
            {
              question: 'What is the timeframe for quarterly VAT return filing?',
              answer: [
                'The standard tax period for VAT in the UAE is quarterly. Businesses must prepare and submit their VAT return via the EmaraTax portal within a strict 28-day window following the end of their respective tax quarter.',
                'If the 28th day falls on a weekend or public holiday, the deadline is automatically extended to the next official business day. Missing this window results in immediate administrative penalties.',
              ],
            },
            {
              question: 'What are the penalties for late VAT registration and late filing?',
              answer: [
                'The FTA enforces compliance through rigid financial penalties. Failing to register for VAT when your taxable supplies breach the mandatory AED 375,000 threshold incurs a severe AED 10,000 late registration fine.',
                'Submitting a VAT return after the 28-day deadline triggers a late filing penalty starting at AED 1,000 for the first offense, which escalates for subsequent violations, alongside cumulative percentage-based late payment penalties on the tax owed.',
              ],
            },
            {
              question: 'What are the criteria for reclaiming input VAT on business expenses?',
              answer: [
                'To successfully recover input VAT, the expense must be strictly incurred for making taxable supplies in the course of your business. Personal expenses or entertainment costs for clients are generally blocked from recovery.',
                'Furthermore, you must hold a valid, original tax invoice containing the supplier’s TRN, and the input tax must be claimed within the correct tax period as mandated by the FTA.',
              ],
            },
            {
              question: 'How long am I legally required to retain my financial records?',
              answer: [
                'Under UAE commercial and tax legislation, businesses must retain all accounting books, tax invoices, receipts, and supporting commercial records for a minimum statutory period of 5 years.',
                'For companies engaged in real estate transactions, this retention period is extended to 15 years. Failure to produce these documents during an FTA audit can lead to substantial fines and assessments.',
              ],
            },
            {
              question: 'Does voluntary VAT registration provide any business advantages?',
              answer: [
                'Yes. Voluntarily registering for VAT when your turnover exceeds AED 187,500 allows your business to start reclaiming input VAT on early-stage commercial expenses and capital investments.',
                'Additionally, holding a valid TRN enhances corporate credibility, signaling to larger corporate clients and vendors that your enterprise operates with institutional transparency and regulatory compliance.',
              ],
            },
            {
              question: 'What happens if my business conducts zero-rated or exempt activities?',
              answer: [
                'Zero-rated supplies (like international exports) are taxable at 0%, meaning you can still reclaim input VAT on related expenses. Exempt supplies (like specific residential leases) are not subject to VAT, but you cannot reclaim input VAT on expenses tied to them.',
                'A meticulous assessment of your revenue streams is essential, as mixing standard-rated, zero-rated, and exempt activities requires complex proportional input tax apportionment calculations.',
              ],
            },
            {
              question: 'Why should we utilize cloud accounting software for UAE bookkeeping?',
              answer: [
                'Implementing FTA-accredited cloud software such as Xero, Zoho Books, or QuickBooks ensures your financial data is structured according to precise UAE tax standards.',
                'These platforms provide automated bank feeds, compliant tax invoice generation, and real-time ledger visibility, drastically reducing human error and ensuring your financial reporting is continuously audit-ready.',
              ],
            },
          ],
        },
      ],
    },
  {
    id: 'other',
    slug: 'other',
    title: 'PRO & Value-Added Services',
    shortTitle: 'PRO & Other',
    icon: 'briefcase',
    tagline: 'Specialized VIP Concierge, Dubai Customs Codes & Commercial Real Estate Infrastructure',
    description: 'High-touch operational infrastructure that accelerates time-to-market. We eliminate queue fatigue, enable physical and cross-border trade, and secure verified Ejari commercial leases.',
    services: [
      {
        id: 'vip-medical-eid',
        title: 'VIP Medical & Emirates ID Assistance',
        heroImage: heroVipMedical,
        overviewImage: overviewVipMedical,
        authority: 'Dubai Health Authority (DHA), Emirates Health Services (EHS) & ICP Smart Centers',
        timeframe: 'Same-Day / 24 Hours',
        badge: 'Executive VIP Priority Fast-Track',
        icon: 'heartbeat',
        summary: 'Skip long administrative queues with white-glove executive medical screening and expedited Emirates ID biometrics across Dubai.',
        description: 'Every UAE residence visa applicant must undergo a mandatory medical fitness examination, which includes a blood test for communicable diseases and a pulmonary tuberculosis chest X-ray. Instead of enduring traditional 48-hour processing queues in crowded centers, our executive VIP lounge protocol delivers white-glove treatment. We respect your executive time by providing private appointments, dedicated biometric priority lanes, and door-to-door escort assistance for a seamless, same-day clearance.',
        requirements: [
          'Original passport',
          'Valid UAE residence entry permit copy',
          'Digital passport-sized photo with white background',
          'Existing Emirates ID card (for renewals)'
        ],
        process: [
          'Dedicated VIP appointment booking',
          'Private chauffeur / executive center reception',
          'Express blood draw & digital chest X-ray',
          'Priority ICP biometrics fingerprinting',
          'Same-day electronic medical clearance certificate delivery'
        ],
        deliverables: [
          'Pre-booked VIP appointment at premium health screening centers (e.g., Salem Smart Center)',
          'Dedicated Vision PRO escort',
          'Same-day electronic medical fitness certificate',
          'Priority biometric booking',
          'Digital tracking until Emirates ID dispatch'
        ],
        faqs: [
          {
            question: 'What medical conditions affect residency clearance?',
            answer: [
              'The mandatory medical fitness test screens primarily for communicable diseases.',
              'Specifically, it includes a blood test to check for HIV and Hepatitis B/C (for specified categories), along with a chest X-ray to detect pulmonary tuberculosis. A positive result for these conditions may result in the denial of a residence visa.'
            ]
          },
          {
            question: 'What is the timeframe difference between regular and VIP express medical pathways?',
            answer: [
              'Traditional medical screening pathways can take up to 48 hours or more just for the results to be processed and transmitted.',
              'Under our executive VIP priority fast-track, results are typically released within 2 to 4 hours directly to the government immigration portal, allowing for same-day electronic clearance.'
            ]
          }
        ]
      },
      {
        id: 'customs-registration',
        title: 'Customs Registration',
        heroImage: heroCustoms,
        overviewImage: overviewCustoms,
        authority: 'Dubai Customs & Federal Customs Authority (Mirsal 2)',
        timeframe: '24 – 48 Hours',
        badge: 'Cross-Border Import & Export Clearance',
        icon: 'plane',
        summary: 'Official Dubai Customs registration and Mirsal 2 code issuance for commercial trading, import/export, and industrial enterprises.',
        description: 'Holding an active commercial trade license is not sufficient on its own to import goods. Corporate entities must obtain a dedicated Customs Client Code, linked directly to their trade license, to successfully clear consignments, utilize bonded warehouses, and claim Free Zone customs duty exemptions. Our experts navigate the Mirsal 2 electronic system, ensuring you secure your official code without delays, avoiding costly customs detention and demurrage fees.',
        requirements: [
          'Valid commercial trade license (Mainland or Free Zone) with import/export activities',
          'Passport and Emirates ID of the authorized signatory',
          'Valid Ejari tenancy contract or Free Zone lease agreement',
          'Official company registration application'
        ],
        process: [
          'Document verification & activity eligibility check',
          'Dubai Customs electronic portal filing',
          'Regulatory verification & inspection approval',
          'Payment voucher settlement',
          'Issuance of active Dubai Customs Code & Mirsal 2 credentials'
        ],
        deliverables: [
          'Official Dubai Customs Client Code',
          'Mirsal 2 account registration',
          'Customs declaration enablement',
          'Guidance on duty exemptions and bonded transfers',
          'Annual code renewal management'
        ],
        faqs: [
          {
            question: 'What is the difference between Free Zone and Mainland customs codes?',
            answer: [
              'A Free Zone customs code permits the import of goods into the designated free zone without immediate application of the standard 5% customs duty, provided the goods do not enter the mainland market.',
              'Conversely, a Mainland customs code is used for goods entering the local UAE market directly, which typically triggers the standard duty upon clearance.'
            ]
          },
          {
            question: 'How does the 5% customs duty and duty suspension mechanism work?',
            answer: [
              'The standard customs duty in the UAE is 5% of the CIF (Cost, Insurance, and Freight) value of the imported goods.',
              'However, duty suspension mechanisms allow goods to be stored in bonded warehouses or free zones without paying the duty immediately. The duty is only applied when the goods cross into the mainland commercial market for local consumption.'
            ]
          }
        ]
      },
      {
        id: 'office-spaces',
        title: 'Office Spaces & Flexi-Desks',
        heroImage: heroOfficeSpaces,
        overviewImage: overviewOfficeSpaces,
        authority: 'Dubai Land Department (Ejari), DET & UAE Free Zones',
        timeframe: 'Same-Day Allocation',
        badge: 'RERA & Ejari Certified Commercial Workspaces',
        icon: 'building',
        summary: 'Certified physical workspaces, serviced executive suites, and flexi-desk co-working arrangements with guaranteed Ejari authentication.',
        description: 'The foundation of commercial licensing in Dubai is intrinsically linked to your office space. The Department of Economy and Tourism (DET) and Free Zone authorities strictly mandate an authenticated lease to issue or renew any commercial license. Furthermore, the square footage of your chosen premises directly governs your visa quotas—typically requiring 9 square meters per visa in mainland Dubai. We provide access to premium addresses across the city with guaranteed Ejari certification, balancing your operational budget with regulatory compliance.',
        requirements: [
          'Valid trade license copy (or trade name reservation certificate for new formations)',
          'Passport and Emirates ID of authorized signatory',
          'Signed commercial lease agreement'
        ],
        process: [
          'Workspace needs and visa quota assessment',
          'Location selection across premier Dubai commercial hubs',
          'Commercial lease agreement finalization',
          'Instant Ejari authentication via Dubai Land Department',
          'Submission of tenancy certificate to licensing authorities'
        ],
        deliverables: [
          'Authenticated Ejari tenancy certificate',
          'Physical inspection compliance guarantee',
          'Meeting room and business address facilities',
          'Mail and courier handling',
          'Scalability options for additional visa quotas'
        ],
        faqs: [
          {
            question: 'What exactly is Ejari and why is it legally mandatory for mainland trade licenses?',
            answer: [
              'Ejari is the official electronic registration system initiated by the Real Estate Regulatory Agency (RERA) to regulate and record all tenancy contracts in Dubai.',
              'It is legally mandatory because the Department of Economy and Tourism (DET) uses the Ejari certificate to verify that a business has a legitimate physical operating address before issuing or renewing a mainland commercial trade license.'
            ]
          },
          {
            question: 'What are the visa allocation ratios for flexi-desks versus dedicated physical offices?',
            answer: [
              'For businesses utilizing a flexi-desk or shared co-working arrangement, the visa quota is generally limited to 1 to 3 visas, depending on the specific Free Zone or jurisdiction rules.',
              'In contrast, mainland dedicated physical offices are typically subject to a spatial requirement, allocating one visa for every 9 square meters of leased space, thus allowing for a scalable workforce.'
            ]
          }
        ]
      }
    ]
  }
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categorySlug: category.slug || category.id,
    categoryId: category.id,
    categoryTitle: category.title,
    categoryShortTitle: category.shortTitle,
    categoryIcon: category.icon,
    heroImage: service.heroImage || categoryBanners[category.id] || heroVisa,
  }))
)

// Map by slug (service.id) and supported URL aliases
const serviceSlugAliases = {
  'freeze-trade-license': 'license-freezing',
  'trade-license-renewal-uae': 'license-renewal',
  'trade-license-modification-uae': 'license-modification',
  'trade-license-cancellation': 'license-cancellation',
  'uae-residence-visa': 'residence-visa',
  'dependent-visa-uae': 'dependent-visa',
  'remote-work-visa-uae': 'remote-work-visa',
  'freelancer-visa-uae': 'freelance-visa',
  'vat-registration-bookkeeping': 'bookkeeping-vat',
  'corporate-tax': 'corporate-tax-guide',
  'corporate-tax-registration': 'corporate-tax-guide',
  'corporate-bank-account': 'bank-account-opening',
  'bank-account': 'bank-account-opening',
  'bookkeeping': 'bookkeeping-vat',
  'vat-registration': 'bookkeeping-vat',
  'vip-medical': 'vip-medical-eid',
  'customs': 'customs-registration',
  'office': 'office-spaces',
  'office-space': 'office-spaces',
  'domestic-worker': 'domestic-worker-visa',
}

export const allServicesMap = Object.fromEntries([
  ...allServices.map((service) => [service.id, service]),
  ...Object.entries(serviceSlugAliases).map(([alias, targetId]) => [
    alias,
    allServices.find((s) => s.id === targetId),
  ]),
])

/**
 * Lookup service by slug and attach sibling services as relatedServices.
 */
export function getServiceBySlug(slug) {
  const service = allServicesMap[slug]
  if (!service) return null

  const category = serviceCategories.find((c) => c.id === service.categoryId)
  const relatedServices = category
    ? category.services
        .filter((s) => s.id !== slug)
        .map((s) => ({
          ...s,
          categorySlug: category.slug || category.id,
          categoryTitle: category.title,
        }))
    : []

  return {
    ...service,
    relatedServices,
  }
}

export function getAllServiceSlugs() {
  return allServices.map((s) => s.id)
}

export const servicesProcess = {
  super: 'OUR METHODOLOGY',
  title: 'How we deliver',
  accent: 'corporate excellence',
  intro:
    'Our structured four-stage engagement framework ensures complete accuracy, transparent timelines, and guaranteed regulatory approvals at every step.',
  steps: [
    {
      title: 'Consultation & Assessment',
      text: 'We review your business structure, specific requirements, and timeline to recommend the most cost-efficient and compliant pathway.',
    },
    {
      title: 'Document Preparation',
      text: 'Our legal and PRO specialists prepare, review, and legally translate all necessary documentation to prevent rejections or delays.',
    },
    {
      title: 'Government Liaison',
      text: 'Our dedicated corporate PROs submit and expedite filings across DET, MOHRE, GDRFA, Dubai Courts, and the Federal Tax Authority.',
    },
    {
      title: 'Issuance & Continuous Support',
      text: 'We deliver your approved licenses, residency cards, or certificates, tracking renewal dates proactively so your operations never stop.',
    },
  ],
}

export const servicesFaq = {
  super: 'PRACTICAL GUIDELINES',
  title: 'Frequently asked',
  accent: 'questions',
  items: [
    {
      question: 'What is the process for licence renewal for businesses?',
      answer: [
        'To renew a Dubai trade licence, you renew your tenancy contract (Ejari for mainland companies), clear any outstanding fines, submit the renewal application through the Department of Economy and Tourism (DET) or your free zone authority, pay the fees, and receive the renewed licence.',
        "It's best to start 30 days to two months before expiry, which leaves time to renew the lease, update Ejari, and secure any regulator approvals. Free zone companies apply through their zone portal, and some zones also require audited financial statements at renewal.",
      ],
    },
    {
      question: 'What documents are required for trade license renewal in Dubai?',
      answer: [
        'For a mainland renewal, you typically need: your current trade licence copy, a valid Ejari-registered tenancy contract (valid for at least a month beyond the new licence period), passport and Emirates ID copies of shareholders/partners, the renewal application form, and any third-party approvals for regulated activities (such as DHA, KHDA, or RTA).',
        'Your tenancy should remain valid for at least a month beyond the new licence period. Free zone companies submit their licence copy and workspace lease, and some zones request audited financial statements at renewal.',
      ],
    },
    {
      question: 'What happens if a business trade license is not renewed on time in Dubai?',
      answer: [
        'An unrenewed licence accrues monthly late fines and can be suspended or blacklisted, which freezes the visa and bank transactions linked to the company.',
        'You also cannot renew employee residence visas while the licence has lapsed, and any resulting overstay fines fall on you as the sponsor. In severe cases, continued non-renewal can lead to administrative closure.',
      ],
    },
    {
      question: 'Can I complete trade license renewal in Dubai online?',
      answer: [
        'Yes. Mainland licences renew online through the DET portal or the Invest in Dubai platform, and eligible straightforward renewals can even be processed by SMS to 6969.',
        'Free zone licences renew through the respective free zone portal. Most renewals require no office visit, provided your Ejari is valid and there are no blocking fines.',
      ],
    },
    {
      question: 'How long does a company license renewal usually take?',
      answer: [
        'Most renewals are completed within a few working days once your documents are in order.',
        'A mainland renewal with a valid Ejari and no outstanding fines can often be processed the same day. Delays typically come from an expired tenancy contract, unpaid government fines, or missing regulator approvals.',
      ],
    },
    {
      question: 'Is a tenancy contract required for trade license renewal in Dubai?',
      answer: [
        'Yes, for mainland companies. A valid, registered Ejari tenancy contract is mandatory, and DET will reject a renewal without it.',
        'The tenancy should stay valid for at least a month beyond the new licence period. Free zone companies renew their office or flexi-desk lease instead, usually bundled into the renewal package.',
      ],
    },
    {
      question: 'Are there penalties if you delay business license renewal?',
      answer: [
        'Yes. Late renewal fines of around AED 250 per month begin after expiry, plus roughly AED 5,000 for operating with an expired licence and up to AED 10,000 for trading after an administrative closure.',
        'All outstanding fines must be cleared before the renewal can be processed.',
      ],
    },
  ],
}
