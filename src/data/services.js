/**
 * Data for Our Services hub (/services) and individual dedicated service pages (/services/:slug).
 *
 * Sourced directly from Decisive Zone (https://www.decisivezone.ae/)
 * tailored for Vision Business Setup:
 *   1. Licence Services (Renewal, Modification, Cancellation, Freezing)
 *   2. Visa Solutions (Residence, Golden, Dependent, Remote Work, Freelance, Domestic Worker)
 *   3. Finance & Banking (Bank Account Opening, Corporate Tax Guide, Bookkeeping & VAT)
 */

import heroLicence from '../assets/images/banner-night.jpg'
import heroVisa from '../assets/images/banner-burj-khalifa.jpg'
import heroFinance from '../assets/images/banner-palm-jumeirah.jpg'
import heroLicenseRenewal from '../assets/images/license-renewal-hero.png'
import heroLicenseModification from '../assets/images/license-modification-hero.jpg'

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
        heroImage: heroLicenseRenewal,
        title: 'License Renewal',
        authority: 'DET (Dubai Economy & Tourism) & UAE Free Zones',
        timeframe: '24 – 48 Hours',
        badge: 'Annual Mandatory',
        icon: 'sync',
        summary:
          'Effortless Trade License Renewal in Dubai for continued business growth.',
        description:
          'Both mainland and free zone companies must renew their licenses annually. Though the process seems straightforward, any delays are costly and can affect company operations, visas, and banking. Also, changes to the license like switching local sponsors can create complications that lead to missing renewal deadlines and incurring large fines. We at Vision Business Setup are happy to take care of your business license renewal process.',
        requirements: [
          'Current trade license copy & commercial register certificate',
          'Valid Ejari-registered tenancy contract (valid for at least 1 month beyond new license period)',
          'Passport and Emirates ID copies of shareholders or partners',
          'Completed renewal application form',
          'Third-party regulatory approvals for specialized activities (e.g. DHA, KHDA, RTA, Municipality)',
          'Audited financial statements (if required by specific Free Zone authorities)',
        ],
        process: [
          'Tenancy contract (Ejari) renewal and commercial lease validation',
          'Verification and clearance of any outstanding government fines with DET or Free Zone authority',
          'Third-party external approvals and regulatory clearances for specialized commercial activities',
          'Submission of renewal application through DET (Invest in Dubai) or Free Zone authority portal',
          'Payment voucher generation and official government renewal fee settlement',
          'Issuance and instant delivery of renewed trade license along with updated Chamber certificate',
        ],
        deliverables: [
          'Complete management of mainland (DET) and free zone trade license renewals',
          'Ejari tenancy registration and lease validation assistance',
          'Clearing of external department approvals (DHA, KHDA, Municipality, Civil Defence)',
          'Instant payment voucher settlement and Chamber of Commerce certificate renewal',
          'Full protection against late renewal penalties, visa suspensions, and bank account freezes',
          'Fast-track turnaround with same-day submission for compliant files',
        ],
        faqs: [
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
              "For a mainland renewal, you'll typically need:",
              '• Your current trade licence copy\n• A valid Ejari-registered tenancy contract\n• Passport and Emirates ID copies of the shareholders or partners\n• The renewal application form\n• Any third-party approvals for regulated activities (for example DHA, KHDA, or RTA)',
              'Your tenancy should remain valid for at least a month beyond the new licence period. Free zone companies submit their licence copy and workspace lease, and some zones request audited financial statements instead of Ejari.',
            ],
          },
          {
            question: 'What happens if a business trade license is not renewed on time in Dubai?',
            answer: [
              'An unrenewed licence accrues monthly late fines and can be suspended or blacklisted, which freezes the visa and bank transactions linked to the company. You also cannot renew employee residence visas while the licence has lapsed, and any resulting overstay fines fall on you as the sponsor.',
              'Operating with an expired licence carries additional penalties on top of the late fees. In severe cases, continued non-renewal can lead to administrative closure of the business.',
            ],
          },
          {
            question: 'Can I complete trade license renewal in Dubai online?',
            answer: [
              'Yes. Mainland licences renew online through the DET portal or the Invest in Dubai platform, and eligible straightforward renewals can even be processed by SMS to 6969. Free zone licences renew through the respective free zone portal.',
              'Most renewals require no office visit, provided your Ejari is valid and there are no blocking fines. Vision Business Setup can manage the online renewal on your behalf from start to finish.',
            ],
          },
          {
            question: 'How long does a company license renewal usually take?',
            answer: [
              'Most renewals are completed within a few working days once your documents are in order. A mainland renewal with a valid Ejari and no outstanding fines can often be processed the same day.',
              'Delays almost always come from an expired tenancy contract, unpaid government fines, or missing regulator approvals, which is exactly what to check before you apply.',
            ],
          },
          {
            question: 'Is a tenancy contract required for trade license renewal in Dubai?',
            answer: [
              'Yes, for mainland companies. A valid, registered Ejari tenancy contract is mandatory, and DET will reject a renewal without it. The tenancy should stay valid for at least a month beyond the new licence period.',
              'Free zone companies renew their office or flexi-desk lease instead, usually bundled into the renewal package, and generally do not need Ejari since the zone manages the premises.',
            ],
          },
          {
            question: 'Are there penalties if you delay business license renewal?',
            answer: [
              'Yes. Late renewal fines of around AED 250 per month begin after expiry, plus roughly AED 5,000 for operating with an expired licence and up to AED 10,000 for trading after an administrative closure. Some authorities apply a short grace window, but it isn\'t guaranteed, and fines can accrue from the day after expiry.',
              'All outstanding fines must be cleared before the renewal can be processed, so a small unpaid penalty can hold up the entire licence.',
            ],
          },
        ],
      },
      {
        id: 'license-modification',
        title: 'License Modification & Amendments',
        heroImage: heroLicenseModification,
        authority: 'DET, UAE Free Zones & Notary Public',
        timeframe: '3 – 5 Working Days',
        badge: 'Corporate Amendments',
        icon: 'puzzle',
        summary:
          'We help you process any type of license amendment whilst making sure your business activities aren\'t adversely impacted. Whether you need to make a small change or require several amendments, we manage the entire process for a quick and hassle-free experience.',
        description:
          'As your business grows, you may want to modify your license by adding or removing an activity, changing your sponsor or company name and/or updating your address. Managing the process requires submitting applications and supporting documents as well as dealing with governmental entities and online portals. This can be a time consuming process and we\'re happy to take care of it for you. Vision Business Setup manages your entire license amendment sequence — from drafting and notarizing Memorandum of Association (MoA) addendums to liaising with government bodies — to keep your corporate file accurate, compliant, and uninterrupted.',
        applicableAmendments: [
          'Change of trade name',
          'Addition, change, or withdrawal of a business activity',
          'Change of business location or address (Ejari update)',
          'Change of local sponsor or corporate service agent',
          'Change or addition of management details (Managers & Signatories)',
          'Addition, removal, or transfer of partners / shareholders',
          'Amendment in authorized share capital',
          'Change of legal corporate structure',
        ],
        requirements: [
          'Current trade license copy & commercial register certificate',
          'Passport and Emirates ID copies of all relevant partners, managers, and shareholders',
          'Drafted and notarized Memorandum of Association (MoA) addendum or shareholder resolution',
          'Official trade name reservation certificate (if changing business name)',
          'Valid Ejari tenancy contract or lease agreement (if changing business address)',
          'External regulator approvals for specialized or regulated activities (e.g. DHA, KHDA, RTA, Municipality)',
        ],
        process: [
          'Complete registration and license form — select the required amendment and get the initial approval from DET or Free Zone authority',
          'Drafting and official notarization of Memorandum of Association (MoA) addendum or board resolution',
          'Get business-specific approvals — securing third-party external clearances for regulated activities',
          'Submit supporting documents, Ejari lease registration, and identification records',
          'Generation of payment voucher and settlement of government modification fees',
          'Collect updated license — issuance of updated trade license and commercial register certificate',
          'Post-amendment coordination for corporate bank account mandates, establishment cards, and visa records',
        ],
        deliverables: [
          'Full legal and administrative handling of mainland (DET) and free zone license modifications',
          'Drafting of shareholder resolutions, board decisions, and MoA addendums',
          'Coordination with Notary Public, court liaisons, and certified legal translators',
          'Liaison with external government departments for activity-specific approvals',
          'Payment voucher settlement and instant issuance of the amended trade license',
          'Guidance on downstream updates for corporate bank accounts, establishment cards, and UBO records',
        ],
        faqs: [
          {
            question: 'What is license modification in the UAE?',
            answer: [
              'License modification is the formal process of updating an approved detail on your trade licence, such as the trade name, business activities, address, manager, shareholders, or capital, through the Department of Economy and Tourism (DET) for mainland companies or your free zone authority.',
              'Your trade licence is the legal identity of your company, so it must always reflect its current name, ownership, activities, and structure. A modification keeps your records accurate and your business compliant.',
            ],
          },
          {
            question: 'When is trade license modification required for a company in the UAE?',
            answer: [
              'Modification is required whenever a registered detail on your licence changes. Common triggers include adding or removing a business activity, changing the trade name, relocating your office, bringing in or removing a partner, changing the manager, updating the sponsor, or amending the share capital.',
              "Because the licence links to your visas, bank account, and tax records, updating it promptly avoids compliance gaps. It's not just paperwork, it keeps your whole corporate file consistent.",
            ],
          },
          {
            question: 'What types of changes can be made through trade license modification?',
            answer: [
              'The amendments you can make through modification include:',
              '• Change of trade name\n• Addition, change, or removal of a business activity\n• Change of business location or address\n• Change of local sponsor or service agent\n• Change or addition of management details\n• Addition or removal of partners or shareholders\n• Amendment of authorised capital\n• Change of legal structure',
              'Some changes, such as regulated activities or ownership transfers, need prior approval from the relevant authority. Vision Business Setup can advise which apply to your amendment.',
            ],
          },
          {
            question: 'Is license modification required when changing business ownership or management?',
            answer: [
              'Yes. Any change in ownership (adding, removing, or transferring shares between partners) or management (appointing a new manager or authorised signatory) must be recorded through a licence amendment. For mainland LLCs, this also means amending and notarising the Memorandum of Association.',
              'Ownership and management changes ripple beyond the licence: they can affect your establishment card, visa quota, and corporate bank account mandate. Updating your bank with the amended documents promptly helps avoid an account freeze.',
            ],
          },
          {
            question: 'Can shareholder or partner details be updated through trade license modification?',
            answer: [
              "Yes. Adding a shareholder, removing one, or transferring shares between partners is done through modification, which updates your Memorandum of Association and shareholders' register.",
              'This typically requires a shareholder resolution, a notarised MOA amendment, identification documents for any incoming partner, and a No Objection Certificate where applicable. Share transfers also feed into your Ultimate Beneficial Owner (UBO) records, which must stay current.',
            ],
          },
          {
            question: 'What is the cost of license modification in the UAE?',
            answer: [
              'A Dubai trade licence amendment typically costs AED 500 to AED 5,000, depending on the change and the authority, plus around AED 500 to AED 1,500 for notarisation and legal translation where an MOA amendment is involved.',
              'Adding an activity often runs AED 1,000 to AED 3,000 per activity, while shareholder changes sit higher because of the notarised MOA. Free zones publish their own fee schedules, so fees are indicative and best confirmed with your specific authority.',
            ],
          },
          {
            question: 'What documents are required for license modification?',
            answer: [
              'The documents depend on the amendment, but commonly include:',
              '• Your current trade licence\n• Passport and Emirates ID copies of the relevant parties\n• The Memorandum of Association or an addendum (for name, ownership, or capital changes)\n• A shareholder resolution or board resolution where required\n• A tenancy contract or Ejari (for a location change)\n• External approvals for regulated activities',
              'Vision Business Setup provides a precise checklist for your specific amendment so nothing is missing at submission.',
            ],
          },
          {
            question: 'Is it possible to change the company name through license modification?',
            answer: [
              'Yes. Changing your company or trade name is a standard modification. It involves reserving and approving the new name, updating the trade licence and Memorandum of Association, and paying any publication fee where required.',
              'Remember that a name change flows through to your bank account, visas, contracts, stamps, and invoices, so plan to update those records once the new licence is issued. Vision Business Setup can manage the change and flag what needs updating afterwards.',
            ],
          },
        ],
      },
      {
        id: 'license-cancellation',
        title: 'License Cancellation & Liquidation',
        authority: 'DET, Free Zone Authorities, MOHRE & FTA',
        timeframe: '1 – 4 Weeks (Free Zone) | 2 – 3 Months (LLC)',
        badge: 'Compliant Closure',
        icon: 'close',
        summary:
          'Get professional assistance for License Cancellation and Company Liquidation in Dubai, UAE, ensuring a smooth and compliant process to close your business operations efficiently.',
        description:
          'Cancelling your trade license or liquidating your company is a serious decision to take and one that requires expert support throughout the process. There are several steps — some straightforward, others complicated such as obtaining NOCs from various governmental entities. An error or omission could result in significant fines — something you don\'t need when shutting down your company. We guide you through every stage to terminate all liabilities, protect your goodwill, and safeguard your future commercial eligibility.',
        reasonsToCancel: [
          'Get clearance from government authorities to avoid incurring any fines or penalties on your license when it is not renewed upon its expiry',
          'Inform relevant authorities that you are no longer in the business to avoid incurring any fines or penalties on your license when it is not renewed upon its expiry',
          'Discharge your liabilities towards creditors and partners if you are in a shareholding company and protect your interests and shares',
          'Put your goodwill and business reputation in perspective if you decide to start a business again',
        ],
        requirements: [
          'Notarized Shareholder Resolution to dissolve the company and appoint an official liquidator',
          'Liquidator acceptance letter and official liquidation report',
          '45-day newspaper announcement notice in Arabic and English daily newspapers',
          'Clearances (NOCs) from MOHRE, GDRFA, Dubai Customs, utility providers (DEWA), and telecoms',
          'Federal Tax Authority (FTA) Corporate Tax and VAT de-registration certificates',
          'Cancellation of all employee and investor visas and establishment cards',
        ],
        process: [
          'Pass a notarised shareholder resolution to dissolve and appoint a licensed liquidator',
          'Apply to DET for initial cancellation approval',
          'Publish a 45-day liquidation notice in local newspapers (one Arabic, one English) for creditor claims',
          'Cancel all employee and investor visas and the establishment card',
          'Obtain clearances (NOCs) from immigration, utilities, telecom, and other authorities',
          'Settle outstanding dues and complete FTA corporate tax and VAT de-registration',
          'Submit the final liquidator\' report and receive the Trade License Cancellation Certificate',
        ],
        deliverables: [
          'Official liquidator appointment & liquidation report preparation',
          'Mandatory bilingual newspaper advertisement publication',
          'Complete government authority NOCs and tax de-registration',
          'Final Trade License Cancellation Certificate terminating all legal liabilities',
        ],
        faqs: [
          {
            question: 'What is trade license cancellation in the UAE?',
            answer: [
              'Trade licence cancellation is the formal process of officially closing a company and de-registering its trade licence with the issuing authority — the Department of Economy and Tourism (DET) for mainland companies or the relevant free zone authority. It ends the company\'s legal existence.',
              'Cancellation is more than letting the licence lapse. It involves settling liabilities, cancelling visas, obtaining clearances, and, for LLCs, a formal liquidation, so that the company is closed cleanly with no lingering obligations.',
            ],
          },
          {
            question: 'When should a company apply for trade license cancellation in Dubai?',
            answer: [
              'A company should cancel its licence when it intends to stop operating permanently — whether that\'s closing the business, exiting the UAE market, winding up an insolvent company, or closing one entity as part of a restructuring.',
              'It\'s also the right step to stop renewal fees and penalties accruing on a business you no longer use. If you only want to pause temporarily and may return, freezing the licence is usually the better option.',
            ],
          },
          {
            question: 'What is the trade license cancellation procedure in the UAE?',
            answer: [
              'For a mainland LLC, the procedure typically runs: pass a notarised shareholder resolution to dissolve and appoint a licensed liquidator; apply to DET for initial cancellation; publish a 45-day liquidation notice in local newspapers for creditors; cancel all employee and investor visas and the establishment card; obtain clearances (NOCs) from immigration, utilities, telecom, and other authorities; settle outstanding dues and complete FTA tax deregistration; submit the final liquidator\'s report and receive the cancellation certificate.',
              'Sole establishments and many free zone companies follow a simpler path without formal liquidation, though some free zones require a final audit report. Vision Business Setup manages the full sequence for you.',
            ],
          },
          {
            question: 'How long does the trade license cancellation procedure take?',
            answer: [
              'Timelines depend on the structure. A free zone cancellation usually takes 1 to 4 weeks, and a mainland sole establishment around 3 to 6 weeks.',
              'A mainland LLC takes longer, typically 2 to 3 months, mainly because of the mandatory 45-day liquidation notice period. Delays almost always come from incomplete documents or unsettled financial obligations, so clearing dues early keeps the process on track.',
            ],
          },
          {
            question: 'Can a company reopen after completing trade license cancellation in the UAE?',
            answer: [
              'No. Once cancellation is complete, the company is permanently de-registered and ceases to exist as a legal entity. It cannot be reactivated, so to trade again you would need to register a new company.',
              'If there\'s any chance you\'ll resume the same business later, freezing the licence is the reversible alternative to cancellation. Vision Business Setup can advise which route fits your plans.',
            ],
          },
        ],
      },
      {
        id: 'license-freezing',
        title: 'License Freezing',
        authority: 'DET (Department of Economy and Tourism) & UAE Free Zones',
        timeframe: '3 – 5 Working Days',
        badge: 'Cost Protection (Up to 3 Years)',
        icon: 'shield',
        summary:
          'Temporarily freeze your UAE trade license for up to 3 years to pause business operations, avoid overheads, and preserve your commercial entity without cancellation.',
        description:
          'Sometimes your business needs to take a break and in such instances, you can freeze a trade license for up to 3 years. If you are in the UAE and you plan to temporarily stop your business, the best option would be to freeze the business license. Business licenses can be frozen for up to a period of three years, by paying a freezing fee. In the case of sole establishments registered in DED, freezing is allowed for a period of one year. A company cannot carry on with any of its operations, once the license is frozen as it is illegal. But the owner of a frozen license or a shareholder can start a new business by applying for a new license under his name. Our team of dedicated, experienced PROs at Vision Business Setup help you throughout the license freezing process by assisting with the application, fee payment, and liaising with governmental entities.',
        keyRules: [
          'Business licenses can be frozen for up to a period of three years by paying a freezing fee',
          'In the case of sole establishments registered in DED, freezing is allowed for a period of one year',
          'A company cannot carry on with any of its operations once the license is frozen as it is illegal (conducting business activity, issuing invoices, signing contracts, or receiving payments is strictly prohibited)',
          'The owner of a frozen license or a shareholder can start a new business by applying for a new license under their name',
          'Freezing does not exempt the company from tax: VAT and corporate tax filings with the Federal Tax Authority (FTA) must continue where applicable',
          'Can be reactivated at any time before the freeze period ends, with no obligation to wait for the full term',
          'Commercial trade name and corporate registration remain fully protected during the freeze period',
        ],
        requirements: [
          'Current trade license copy',
          'Freeze request letter on corporate letterhead detailing the reasons and justifications behind the decision',
          'Proof that all employee visas and company establishment card have been cancelled',
          'Confirmation letter from the Ministry of Human Resources and Emiratisation (MOHRE) certifying that there are no sponsored people on the license and no labour restrictions are imposed',
          'Inspection report from the inspection division in DED / DET (where required by the authority)',
          'Clearance of all outstanding government fines prior to freeze approval',
          'Freezing fee payment: AED 2,000 per year along with AED 210 per each due month since license expiry date (for DED)',
        ],
        process: [
          'Issue a formal request letter on corporate letterhead requesting to freeze the license temporarily, containing details on the reasons and justifications behind the decision',
          'Cancel all employment visas and the company establishment card',
          'Obtain a confirmation letter from the Ministry of Human Resources and Emiratisation (MOHRE) confirming that no sponsored people remain on the license and no labour restrictions are imposed',
          'Submit the freeze application to the Department of Economy and Tourism (DET) along with the required inspection report from the DED inspection division where required',
          'Pay the official freezing fee of AED 2,000 per year along with AED 210 per each due month since license expiry date',
          'Receive official confirmation marking the license inactive on official records',
        ],
        deliverables: [
          'Official freeze confirmation from the Department of Economy and Tourism (DET) / Free Zone authority marking the license inactive on official records',
          'Complete handling of corporate freeze request letters, visa cancellations, and liaison with government authorities',
          'Relief from annual license renewal fees and commercial lease (Ejari) commitments during the freeze period',
          'Full legal preservation and protection of your registered trade name and corporate history',
          'Dedicated support from experienced PROs assisting with the application, fee payment, and regulatory clearances',
          'Proactive tracking of the freeze deadline and complete management of license reactivation when ready to resume trading',
        ],
        faqs: [
          {
            question: 'What is license freezing in Dubai and how does it work?',
            answer: [
              'License freezing lets a business temporarily suspend its operations while keeping its trade licence and trade name registered, without cancelling the company. You apply to the issuing authority, the Department of Economy and Tourism (DET) for mainland companies or your free zone, pay a freezing fee, and the licence is marked inactive.',
              "It's the middle ground between renewing and cancelling. You keep the entity and can reactivate it later, while pausing renewal and operating costs during the break. Vision Business Setup manages the full process for you.",
            ],
          },
          {
            question: 'When should a business consider freezing its trade license?',
            answer: [
              'Freezing suits a temporary pause rather than a permanent exit, such as a seasonal slowdown, restructuring, financial difficulty, relocating, or reassessing the business before deciding its future.',
              "It's often smarter than simply letting the licence lapse, which accrues monthly fines and can lead to blacklisting, or cancelling outright, which is permanent. Freezing protects your trade name and licence for when you're ready to return. Vision Business Setup can advise whether freezing or another option fits your situation.",
            ],
          },
          {
            question: 'What is the process for license freezing in Dubai?',
            answer: [
              'The typical steps are:',
              '• Ensure the business is inactive with no sponsored employees\n• Issue a formal request letter on company letterhead stating the reasons for freezing\n• Cancel all employee visas and the establishment card\n• Obtain a confirmation letter from MOHRE that no sponsored employees remain and no labour restrictions apply\n• Submit the freeze application to DET and pay the fee, along with an inspection report where required',
              'Once approved, the licence is marked inactive on official records. Vision Business Setup handles the letters, visa cancellations, and liaison with the authorities.',
            ],
          },
          {
            question: 'How long can a company keep freezing its trade license in Dubai?',
            answer: [
              'Mainland companies can freeze a trade licence for up to three years. For sole establishments registered with DED, the maximum period is one year. Free zone authorities set their own limits, often shorter.',
              "You must reactivate the licence before the freeze period ends, otherwise it can lapse or be cancelled. Vision Business Setup can track the deadline and manage reactivation when you're ready.",
            ],
          },
          {
            question: 'What documents are required for license freezing in Dubai?',
            answer: [
              'The core documents include:',
              '• A copy of your current trade licence\n• A freeze request letter on company letterhead with justification\n• Proof that all employee visas have been cancelled\n• A MOHRE confirmation letter that no sponsored employees remain\n• An inspection report where the authority requires one',
              "Any outstanding fines must be cleared before the freeze is approved. Vision Business Setup prepares the full file so the application isn't held up.",
            ],
          },
          {
            question: 'Can a company operate while the license freezing is active?',
            answer: [
              'No. While a licence is frozen, it is illegal to conduct any business activity, issue invoices, sign contracts, or receive payments. The company is officially inactive.',
              'Two things to note: the freeze does not exempt you from tax, so VAT and corporate tax filings with the Federal Tax Authority must continue where they apply. However, the owner or a shareholder can still start a new business under a separate licence during the freeze.',
            ],
          },
          {
            question: 'Can a frozen license be reactivated after license freezing in Dubai?',
            answer: [
              'Yes. You can unfreeze and reactivate the licence at any time before the freeze period ends, with no obligation to wait for the full term. You submit a reactivation request to DET, provide a valid Ejari tenancy contract and any required approvals, and clear any pending fees.',
              "Once reactivated, the licence regains active status and you can resume operations legally. Vision Business Setup can manage the reactivation so you're trading again without delay.",
            ],
          },
        ],
      },
    ],
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
        authority: 'GDRFA (Dubai) & ICP (Federal Authority)',
        timeframe: '10 – 15 Working Days (VIP 3–5 Days)',
        badge: 'Residency Core',
        icon: 'id-card',
        summary:
          'Get your residence visa and live in the UAE legally with full access to banking, driving license, and healthcare.',
        description:
          'A UAE residence visa grants legal residency status, allowing foreign nationals to live, work, open bank accounts, lease property, and sponsor their family in the UAE. Tied to a qualifying basis such as company formation (as an investor or partner), corporate employment, property ownership, or family sponsorship, the visa is issued for 2 to 3 years renewable. Vision Business Setup manages the entire visa lifecycle — from entry permit issuance and in-country status adjustments to VIP medical fitness screenings, Emirates ID biometrics, and electronic visa stamping.',
        typesOfVisas: [
          'Investor or Partner visa (through Mainland or Free Zone company ownership)',
          'Corporate employment residence visa (company-sponsored)',
          'Resident visa through family sponsorship (spouse, children, parents)',
          'Real estate property investor visa (for properties valued at AED 750,000+ or AED 2m+ for Golden Visa)',
          'Green Visa (5-year self-sponsored for skilled professionals & freelancers)',
          'Specialist, executive, and domestic staff resident visas',
        ],
        requirements: [
          'Original passport with at least 6 months validity & passport-size photographs (white background)',
          'Entry permit and completed official UAE visa application form',
          'Medical fitness test clearance certificate (blood test + chest X-ray)',
          'Valid UAE health insurance certificate',
          'Company trade license copy, firm establishment card, and employment contract / MOA',
          'Proof of sponsor legal residency and attested civil certificates (for family sponsorship)',
        ],
        process: [
          'Initial eligibility verification and document preparation',
          'Entry permit application filing and in-country change of status',
          'VIP expedited medical fitness screening appointment',
          'Emirates ID biometric registration (fingerprinting & facial photo capture)',
          'Electronic residency visa approval and digital residency card issuance',
          'Express doorstep delivery of physical Emirates ID card',
        ],
        deliverables: [
          'Official UAE Residence Visa approval and digital residency card',
          'VIP expedited medical fitness test clearance',
          'Emirates ID biometrics appointment booking and queue fast-tracking',
          'Full legal status allowing local personal & corporate banking, tenancy contracts, and UAE driving licenses',
          'End-to-end liaison with GDRFA (Dubai) and ICP (Federal Authority)',
        ],
        faqs: [
          {
            question: 'What is a Dubai residence visa and who can apply for it?',
            answer: [
              'A Dubai residence visa is a permit that lets an expatriate live legally in the UAE for a set period, tied to a qualifying basis such as employment, investment, family sponsorship, or study.',
              'It\'s open to employees sponsored by an employer, investors and business owners sponsored through their own company, property investors, family members sponsored by a resident, and students. Specialists and high earners can also qualify for long-term routes like the Golden and Green Visa. Vision Business Setup can advise the right route for you.',
            ],
          },
          {
            question: 'What documents are required to apply for a Dubai residence visa?',
            answer: [
              'The core documents include:',
              '• Your original passport and passport-size photographs\n• Your entry permit and the visa application form\n• A medical fitness test clearance certificate\n• Valid UAE health insurance\n• Proof of your sponsor\'s residency or a valid trade licence',
              'Work visas also require an employment contract, the company\'s trade licence, and establishment card, while family visas need attested birth or marriage certificates. Vision Business Setup provides a full checklist so nothing is missing.',
            ],
          },
          {
            question: 'How long does it take to obtain a UAE residence visa?',
            answer: [
              'The full process, covering the entry permit, medical test, Emirates ID, and stamping, usually takes around one to three weeks from a complete file.',
              'The business-owner or partner visa route is often the fastest, while property investor and Golden Visa applications can take a little longer due to extra authority involvement. Preparing documents correctly upfront is the main way to avoid delays. Vision Business Setup handles the paperwork to keep it moving.',
            ],
          },
          {
            question: 'What are the eligibility requirements for a Golden Visa Dubai?',
            answer: [
              'The Golden Visa is a 5 or 10-year residency for qualifying categories, with current criteria including:',
              '• Property investors owning UAE real estate worth AED 2 million or more\n• Business or public investors with an approved investment of AED 2 million or more\n• Entrepreneurs with an approved project, typically from AED 500,000\n• Skilled professionals earning at least AED 30,000 a month with a university degree\n• Specialised talents and outstanding students',
              'As of early 2026, the previous down-payment requirement for property investors was removed. Vision Business Setup can confirm which category fits your profile.',
            ],
          },
          {
            question: 'What benefits are offered under the Golden Visa Dubai program?',
            answer: [
              'The Golden Visa offers stability that standard residency doesn\'t. It is self-sponsored, valid for 5 or 10 years, and renewable, with no employer or local partner required.',
              'Holders can sponsor their family without the usual salary threshold, sponsor children regardless of age, and stay outside the UAE for long periods without the visa lapsing. Combined with 100% business ownership, it makes long-term planning far easier for investors and professionals.',
            ],
          },
          {
            question: 'Can business owners obtain a Dubai residence visa through company formation?',
            answer: [
              'Yes. Registering a mainland or free zone company entitles the owner to an investor or partner residence visa, usually valid for two to three years and tied to the trade licence.',
              'As a business owner, you can also sponsor employees and your own family under the company. This is the most common residency route for entrepreneurs. Vision Business Setup sets up the company and the visa together as one process.',
            ],
          },
          {
            question: 'What types of UAE residence visa services are available for entrepreneurs and investors?',
            answer: [
              'Entrepreneurs and investors have several routes: an investor or partner visa through a company, the 10-year Golden Visa for larger investors and talents, the 5-year Green Visa for self-employed professionals, plus employee visas for their team and dependent visas for family.',
              'Full support covers the entry permit, medical test, Emirates ID, status change, and renewals. Vision Business Setup manages each of these end to end so nothing stalls.',
            ],
          },
          {
            question: 'How long is a Dubai residence visa valid after approval?',
            answer: [
              'A standard residence visa is typically valid for two to three years, depending on whether it\'s an employment, family, property, or company-based visa. It is renewable as long as you continue to meet the conditions.',
              'Long-term routes run far longer: the Green Visa is valid for 5 years and the Golden Visa for 5 or 10 years. Vision Business Setup can align the right visa duration with your plans and manage the renewals.',
            ],
          },
        ],
      },
      {
        id: 'golden-visa',
        title: 'UAE Golden Visa (10 Years)',
        authority: 'ICP, GDRFA & DET (Dubai Economy & Tourism)',
        timeframe: '10 – 12 Working Days',
        badge: '10-Year Long-Term',
        icon: 'star',
        summary:
          'Self-sponsored 10-year renewable residency for real estate investors, entrepreneurs, executives, and specialized talents.',
        description:
          'The UAE Golden Visa is a long-term, renewable residence visa issued for 5 or 10 years to investors, entrepreneurs, skilled professionals, specialised talents, and outstanding students. It lets you live, work, and study in the UAE without a local sponsor or employer. It is self-sponsored, so you hold it in your own name and can sponsor your family members regardless of age. Holders can stay outside the UAE for extended periods without visa invalidation, while enjoying 100% foreign business ownership. Vision Business Setup handles complete pre-qualification screening, nomination filing, and government coordination.',
        eligibilityCriteria: [
          'Property Investors: Real estate ownership valued at AED 2 million or more (including mortgaged or off-plan from approved developers; the previous AED 1m down-payment barrier has been removed)',
          'Public / Company Investors: Investment of AED 2 million or more in an accredited UAE investment fund or commercial company',
          'Skilled Professionals: Senior executives, managers, engineers, and specialists holding a certified university degree with a monthly salary of at least AED 30,000',
          'Entrepreneurs: Founders of an accredited innovative project, incubator startup, or business worth at least AED 500,000',
          'Specialised Talents: Doctors, scientists, innovators, artists, and elite athletes endorsed by relevant UAE federal entities',
          'Outstanding Students & Graduates: High school toppers and university graduates with cumulative GPAs of 3.8+ from accredited institutions',
        ],
        keyBenefits: [
          '10-year renewable residency without an employer or local national sponsor',
          '100% foreign business ownership across the UAE',
          'Ability to stay outside the UAE for any duration without the residency lapsing',
          'Sponsor spouse, children (regardless of age), parents, and domestic staff',
          'In case of primary holder demise, sponsored family members can remain in the UAE until visa expiry',
          'Privileged Esaad privilege discount card issued to qualifying Golden Visa categories in Dubai',
        ],
        requirements: [
          'Valid passport copy (minimum 6 months validity) & high-resolution personal photographs',
          'Qualifying proof: Title deed / DLD property valuation certificate, employment contract (AED 30k+), or company share certificate',
          'Attested university degree certificate (MOFA legalized with Arabic translation for professional category)',
          'Comprehensive medical fitness test clearance certificate',
          'Valid UAE health insurance policy coverage',
          'Clean criminal record check / police clearance (where requested by ICP/GDRFA)',
        ],
        process: [
          'Initial profile assessment and pre-eligibility validation against ICP / GDRFA criteria',
          'Submission of Golden Visa nomination request to DET, GDRFA, or relevant ministry',
          'Issuance of official Golden Visa nomination approval',
          'Application for 6-month multiple-entry visa (for overseas applicants) or in-country status adjustment',
          'Expedited VIP medical fitness examination and Emirates ID biometrics appointment',
          'Issuance of 10-year Golden Visa electronic residency and physical Golden Emirates ID',
        ],
        deliverables: [
          'Pre-eligibility screening and nomination filing with DET / GDRFA / ICP',
          'Direct government liaison, document verification, and translation',
          '10-year Golden Visa residency stamping and Golden Emirates ID card',
          'Comprehensive family dependent sponsorship and domestic staff visa assistance',
        ],
        faqs: [
          {
            question: 'What is the UAE Golden Visa and how does it work?',
            answer:
              'The UAE Golden Visa is a long-term, renewable residence visa issued for 5 or 10 years to investors, entrepreneurs, skilled professionals, specialised talents, and outstanding students. It lets you live, work, and study in the UAE without a local sponsor or employer. It is self-sponsored, so you hold it in your own name and can sponsor your family. It stays valid as long as you continue to meet the eligibility criteria, and is administered by the ICP at the federal level and the GDRFA in Dubai.',
          },
          {
            question: 'What are the requirements to apply for the UAE long-term residency program?',
            answer:
              'To apply, you must qualify under one of the eligibility categories and then provide supporting proof, such as a property title deed, salary certificate, trade licence, or professional credentials for your category. Across all categories you will also need a valid passport, a medical fitness test, valid health insurance, and a clean criminal record. Requirements are set by the ICP and GDRFA, and Vision Business Setup assesses your eligibility thoroughly before applying.',
          },
          {
            question: 'Who meets the eligibility criteria for this long-term visa in the UAE?',
            answer:
              'The Golden Visa covers several categories: Property investors owning UAE real estate worth AED 2 million or more; Public or company investors with an approved investment of AED 2 million or more; Entrepreneurs with an approved project worth at least AED 500,000; Skilled professionals earning at least AED 30,000 a month with an attested bachelor degree; Specialised talents such as scientists, doctors, artists, and athletes; and Outstanding students and graduates with strong academic records. Humanitarian pioneers and frontline workers can also qualify.',
          },
          {
            question: 'What are the main benefits of holding a UAE long-term residency visa?',
            answer:
              'The Golden Visa offers stability that standard residency does not. Key benefits include a renewable 5 or 10-year residence visa, self-sponsorship without an employer or local partner, and the ability to sponsor your family. It also lets you stay outside the UAE for long periods without the visa lapsing, unlike ordinary residence visas, and supports 100% foreign business ownership. For investors, professionals, and families, it makes long-term planning far easier.',
          },
          {
            question: 'What is the 10 year golden visa in UAE and who qualifies for it?',
            answer:
              'The 10-year Golden Visa is the longest residency tier. It is aimed at real estate investors (AED 2 million or more), public or company investors (AED 2 million or more), skilled professionals earning at least AED 30,000 a month, and specialised talents such as scientists, inventors, and leading professionals. It offers the same self-sponsored, renewable benefits as the 5-year visa, with a longer term between renewals. We advise whether you qualify for the 5-year or 10-year route.',
          },
          {
            question: 'How can investors apply for the Dubai Golden Visa through property or business investment?',
            answer:
              'Through property, you must own UAE real estate worth at least AED 2 million, which can include mortgaged or off-plan property from approved developers. You obtain a property valuation certificate from the Dubai Land Department and apply through the DLD or GDRFA. Through business, you invest at least AED 2 million in an approved company or fund, or own a qualifying business, supported by your trade licence and financial documents. Either route then follows the standard steps: eligibility check, document submission, medical test, and Emirates ID.',
          },
          {
            question: 'Can family members be sponsored under this long-term residency program?',
            answer:
              'Yes. A Golden Visa holder can sponsor their spouse and children, and in many cases parents and domestic staff, for the same duration as the primary visa. Children can generally be sponsored regardless of age, which is a key advantage over standard residency. Each dependent goes through their own medical test and Emirates ID process. Vision Business Setup handles your family visas alongside your own.',
          },
          {
            question: 'How long does the application process usually take after submission?',
            answer:
              'Once your application and documents are submitted, the Golden Visa is usually issued within a few weeks, and faster where a fast-track VIP service applies. Investor and talent applications involve additional background and financial checks, which can add time. The most common cause of delay is incomplete or unverified documents, so getting the file right the first time matters.',
          },
          {
            question: 'Can the visa be renewed after the validity period ends?',
            answer:
              'Yes. The Golden Visa is renewable for successive 5 or 10-year terms, provided you continue to meet the eligibility criteria for your category, such as maintaining the qualifying investment or professional status. Renewing keeps your residency and family sponsorship uninterrupted.',
          },
          {
            question: 'Has the AED 1 million cash down payment requirement for property investors been removed?',
            answer:
              'Yes. Under the updated UAE Golden Visa rules, investors purchasing property valued at AED 2 million or more qualify for the 10-year Golden Visa regardless of whether the property is mortgaged or off-plan, with no minimum initial down payment required.',
          },
        ],
      },
      {
        id: 'dependent-visa',
        title: 'Dependent & Family Visa',
        authority: 'GDRFA (Dubai) & ICP (Federal Authority)',
        timeframe: '7 – 10 Working Days',
        badge: 'Family Sponsorship',
        icon: 'users',
        summary:
          'Sponsor your spouse, children, parents, and parents-in-law to live in the UAE with complete legal assistance.',
        description:
          'A UAE dependent visa is a residence visa that lets a resident sponsor their immediate family to live legally in the country. Eligible dependents include a spouse, children, parents, and parents-in-law. Both employees and business owners can sponsor, provided they hold a valid UAE residence visa and meet the minimum salary and housing requirements. All foreign civil documents must be attested by the UAE Embassy in the issuing country and the Ministry of Foreign Affairs (MOFA) in the UAE. Vision Business Setup manages every step — from attestation and entry permits to medical tests, biometrics, and card delivery.',
        typesOfDependents: [
          'Spouse (husband or wife)',
          'Children (sons up to age 25, unmarried daughters with no age limit)',
          'Parents and parents-in-law (both parents must be sponsored together)',
          'Stepchildren (with NOC from biological parent) & legally adopted children',
        ],
        salaryAndHousing: [
          'For male expatriates sponsoring spouse & children: Minimum salary of AED 4,000 or AED 3,000 + accommodation',
          'For female expatriates sponsoring family: Minimum salary of AED 10,000 or AED 8,000 + accommodation',
          'To sponsor parents / parents-in-law: Minimum monthly salary of AED 20,000 + refundable government deposit',
          'Housing Domicile: At least 1 bedroom for immediate family (spouse and children); at least 2 bedrooms for parents or parents-in-law, verified with registered Ejari and utility bills',
        ],
        requirements: [
          'Sponsor original passport, residence visa copy, and Emirates ID',
          'Official salary certificate / MOHRE employment contract or company trade license copy',
          'Dependents passport copies (valid for at least 6 months) and passport-size photographs',
          'Attested marriage certificate (home country, UAE Embassy, and MOFA UAE, with certified legal Arabic translation)',
          'Attested birth certificates for children (home country, UAE Embassy, and MOFA UAE)',
          'Registered Ejari tenancy contract and recent utility bill (DEWA / electricity bill)',
          'Medical fitness clearance certificate for all dependents aged 18 and above',
          'Valid UAE health insurance policy for each sponsored dependent',
        ],
        process: [
          'Document verification and attestation guidance (UAE Embassy and MOFA legal translation)',
          'Application for family entry permits through GDRFA (Dubai) or ICP portal',
          'In-country status adjustment upon entry or transition from visitor status',
          'Scheduling and escorting dependents for VIP medical fitness screening',
          'Emirates ID biometric registration (fingerprinting & photography)',
          'Issuance of digital residency visa and express delivery of physical Emirates IDs',
        ],
        deliverables: [
          'MOFA attestation and certified legal Arabic translation management',
          'Family entry permit applications and in-country status adjustments',
          'VIP medical appointments and Emirates ID biometrics scheduling',
          'Dependent residence visa issuance aligned with sponsor validity term',
          'Complete protection against overstay fines and residency lapses',
        ],
        faqs: [
          {
            question: 'What is a UAE dependent visa and who can apply for it?',
            answer: [
              'A UAE dependent visa is a residence visa that lets a resident sponsor their immediate family to live legally in the country. Eligible dependents include a spouse, children, parents, and parents-in-law.',
              'Both employees and business owners can sponsor, provided they hold a valid UAE residence visa and meet the minimum salary and housing requirements. The dependent\'s visa is tied to the sponsor\'s residency. Vision Business Setup can confirm your eligibility and handle the full application.',
            ],
          },
          {
            question: 'What are the requirements for a UAE dependent visa application?',
            answer: [
              'To sponsor dependents, you need a valid UAE residence visa, a qualifying salary, and suitable accommodation. The core requirements are:',
              '• A minimum salary of AED 4,000 per month, or AED 3,000 plus accommodation, to sponsor a spouse and children\n• Attested and translated proof of relationship, such as a marriage or birth certificate\n• A tenancy contract or title deed showing adequate housing, plus recent utility bills\n• Valid health insurance for each dependent',
              'Family members over 18 must also pass a medical fitness test. Vision Business Setup provides a full checklist so nothing delays the application.',
            ],
          },
          {
            question: 'Can residents sponsor their parents in the UAE under a dependent visa?',
            answer: [
              'Yes, but the requirements are stricter than for a spouse or children. Sponsoring parents generally requires a notably higher salary, commonly cited at around AED 20,000 per month, and you usually must sponsor both parents together.',
              'Additional conditions typically apply, such as a refundable deposit per parent, comprehensive health insurance, and proof that no one in the home country can support them. These rules have seen reform and can vary, so Vision Business Setup can confirm the current requirements during a consultation.',
            ],
          },
          {
            question: 'What documents are required for a dependent visa for a wife in the UAE?',
            answer: [
              'To sponsor your wife, you\'ll typically need:',
              '• Your passport, residence visa, and Emirates ID\n• Your wife\'s passport copy and a passport-size photograph\n• An attested and Arabic-translated marriage certificate (attested in your home country and by the UAE Ministry of Foreign Affairs)\n• Your salary certificate or employment contract\n• A tenancy contract (Ejari) and recent utility bills\n• Valid health insurance',
              'She\'ll also complete a medical fitness test as part of the process. Vision Business Setup handles the attestation and paperwork end to end.',
            ],
          },
          {
            question: 'What UAE dependent visa services does Dubai offer for family sponsorship?',
            answer: [
              'Dubai residents can sponsor a spouse, children, parents, and parents-in-law, each through the GDRFA family sponsorship process. The service covers the full journey: entry permit, status change, medical test, Emirates ID, and visa stamping.',
              'Support typically also includes document attestation and translation, health insurance arrangement, and renewals. Vision Business Setup manages each of these steps so your family\'s visas are handled without the back and forth.',
            ],
          },
          {
            question: 'How long is a UAE dependent visa valid after approval?',
            answer: [
              'A dependent visa is valid for 1, 2, or 3 years, matching the sponsor\'s own residence visa. Golden Visa holders can sponsor family for the longer term of their visa, up to 10 years.',
              'It grants dependents access to services like schooling, healthcare, and banking for that period. Vision Business Setup can align your family\'s visa duration with your own and manage the process.',
            ],
          },
          {
            question: 'Can a dependent visa for wife be renewed in the UAE?',
            answer: [
              'Yes. A spouse\'s dependent visa is renewable, and it renews alongside the sponsor\'s residence visa as long as you continue to meet the salary, housing, and insurance requirements.',
              'Renewing before expiry avoids fines and keeps your family\'s residency uninterrupted. Vision Business Setup can manage the renewal, including the updated documents and medical test where required.',
            ],
          },
          {
            question: 'What factors affect the UAE dependent visa cost in Dubai?',
            answer: [
              'Several factors move the total cost, including:',
              '• The number of dependents you sponsor\n• The visa duration chosen (1, 2, or 3 years)\n• Whether you apply from inside or outside the UAE, which affects status-change fees\n• Health insurance premiums, which vary by age and coverage\n• Document attestation and translation for certificates issued abroad\n• Standard or express processing',
              'Because these vary case by case, Vision Business Setup can give you a precise, itemised estimate for your family.',
            ],
          },
          {
            question: 'Can I set up my Dubai business remotely without visiting UAE?',
            answer: [
              'In many cases, yes. Much of company formation can now be completed remotely through digital portals — registering the company, reserving a name, and receiving your licence.',
              'Where a visit may still be needed:',
              '• Bank account opening — some banks require in-person or video verification\n• Visa medical test and Emirates ID biometrics — generally require you to be present, if you\'re taking a residence visa',
              'If you just need a licence or an offshore structure, you may never travel. If you want residency, a short visit is usually part of it. Either way, Vision Business Setup handles the paperwork so your presence is only needed where it truly has to be.',
            ],
          },
        ],
      },
      {
        id: 'remote-work-visa',
        title: 'Remote Work Visa (Digital Nomad)',
        authority: 'GDRFA Dubai & ICP',
        timeframe: '10 – 12 Working Days',
        badge: '1-Year Self-Sponsored',
        icon: 'globe',
        summary:
          'Live in the UAE for up to one year with a remote work visa and enjoy a world-class lifestyle with zero personal income tax.',
        description:
          'The UAE Remote Work Visa allows foreign remote workers, digital nomads, and entrepreneurs to live in Dubai under self-sponsorship while continuing to work for an employer or clients located outside the UAE. You access all standard resident services including local banking, housing leases, driving licenses, and schooling for children, combined with zero personal income tax. The visa is valid for one year and is renewable annually.',
        eligibilityCriteria: [
          'For Employees: Employment contract with an overseas employer valid for at least 1 year, minimum monthly salary of USD 3,500 (approx. AED 12,900), previous month payslip, and last 3 months bank statements',
          'For Company Owners: Proof of overseas company ownership for at least 1 year, minimum average monthly income of USD 5,000, and last 3 months corporate & personal bank statements',
          'Operational Requirement: All employment and client work must be performed remotely for entities located outside the UAE (cannot earn from UAE-based entities under this visa)',
          'Valid Passport & Insurance: Passport valid for at least 6 months and international or local health insurance with UAE medical coverage',
        ],
        requirements: [
          'Passport copy with at least 6 months validity & passport photo',
          'Valid health insurance policy with UAE coverage',
          'Employment contract (minimum 1-year validity) or proof of overseas business ownership',
          'Recent payslip and past 3 to 6 months bank statements proving qualifying income',
          'Medical fitness test clearance and Emirates ID biometrics upon arrival / status change',
        ],
        process: [
          'Initial eligibility assessment and review of foreign employment/banking records',
          'Online application filing via GDRFA Dubai or ICP platform',
          'Entry permit issuance for remote work residency',
          'VIP medical screening and Emirates ID biometrics capture in Dubai',
          'Electronic residency visa approval and issuance of 1-year renewable Emirates ID',
        ],
        deliverables: [
          '1-year self-sponsored UAE residence visa (renewable annually)',
          'Access to UAE personal, checking, and savings bank accounts',
          'Eligibility to sponsor spouse and children for the same 1-year duration',
          'Full legal residency granting tenancy leases, driving licenses, and telecom contracts',
          'Zero personal income tax on global earnings while residing in Dubai',
        ],
        faqs: [
          {
            question: 'Who can apply for a remote work visa in the UAE?',
            answer: [
              'The UAE remote work visa is open to foreign nationals who earn their income from outside the UAE. That includes remote employees of companies registered abroad, freelancers and consultants with overseas clients, and business owners running a company based outside the UAE.',
              'The one firm condition is that your work must be for non-UAE entities. You cannot use this visa to work for a UAE-based employer or client. Vision Business Setup can confirm whether your situation qualifies before you apply.',
            ],
          },
          {
            question:
              'What is the cost of a remote work visa in UAE for international applicants?',
            answer: [
              'Total costs typically run from around AED 2,800 to AED 11,000, depending on your health insurance, the processing route, and whether you apply from inside or outside the UAE.',
              'Government fees, including the Emirates ID, come to roughly AED 1,500 to AED 1,700 after the 2026 fee reduction, with the medical test and health insurance as separate costs. Vision Business Setup can give you a precise breakdown for your case.',
            ],
          },
          {
            question:
              'What documents are required to apply for a remote work visa in UAE?',
            answer: [
              'The core documents are:',
              '• A passport valid for at least six months\n• A recent colour photograph\n• Proof of remote work outside the UAE (a one-year employment contract, or proof of company ownership for at least a year)\n• Bank statements or payslips showing the required monthly income\n• Valid UAE health insurance',
              'During residency issuance, you\'ll also complete a medical fitness test and Emirates ID biometrics. Vision Business Setup provides a full checklist so nothing is missing at submission.',
            ],
          },
          {
            question:
              'What are the eligibility requirements for the digital nomad visa in Dubai?',
            answer: [
              'To qualify, you must be employed by or own a company based outside the UAE, be able to perform your work remotely, and meet the minimum monthly income threshold. You\'ll also need a passport valid for at least six months and valid UAE health insurance.',
              'Employees provide a one-year contract, while business owners show at least a year of company ownership. Both prove income through recent bank statements. Vision Business Setup can assess your eligibility before you file.',
            ],
          },
          {
            question: 'How long is UAE remote work visa valid after approval?',
            answer: [
              'The remote work visa is valid for one year from issuance. It is renewable annually, as long as you continue to meet the eligibility criteria, including the income threshold and proof of ongoing remote work.',
              'It is a full residence visa for that year, so banking, leases, and family sponsorship all work normally. Vision Business Setup can manage the renewal each year to keep your residency uninterrupted.',
            ],
          },
          {
            question:
              'Can remote employees working for overseas companies live in Dubai with this visa?',
            answer: [
              'Yes, that\'s exactly what it\'s for. The visa lets you live in Dubai or the wider UAE while continuing to work for your employer or clients based outside the country, without changing jobs or needing a local sponsor.',
              'You gain access to resident services such as banking, housing, schooling, and telecoms, plus zero personal income tax. The only restriction is that you cannot earn from UAE-based companies on this visa.',
            ],
          },
          {
            question:
              'Is there a minimum income requirement to apply for the digital nomad visa?',
            answer: [
              'Yes. The current minimum is USD 3,500 per month (around AED 12,900) for employees, reduced from the earlier USD 5,000 threshold. Business owners are generally expected to show a somewhat higher income, around USD 5,000.',
              'You demonstrate this through recent payslips or bank statements, typically covering the previous three to six months. Vision Business Setup can review your income documents before submission to avoid a rejection.',
            ],
          },
          {
            question:
              'Can family members be sponsored under the remote work visa program?',
            answer: [
              'Yes. As a remote work visa holder, you can sponsor your spouse and children for the same one-year period, subject to the standard conditions: meeting the income requirement, providing suitable accommodation, and holding valid health insurance for each dependent.',
              'Family members apply for dependent residence visas through the standard process, each with their own medical test and Emirates ID. Vision Business Setup can handle your family\'s visas alongside yours.',
            ],
          },
          {
            question: 'How long does the application process usually take?',
            answer: [
              'A complete application is usually decided within about 5 to 12 working days, after which the residency steps (medical test and Emirates ID) follow on arrival or via an in-country status change.',
              'The most common cause of delay is a missing or inconsistent document, since immigration will not chase you for it. Vision Business Setup prepares and checks the full file before submission to keep it on track.',
            ],
          },
        ],
      },
      {
        id: 'freelance-visa',
        title: 'Freelance Visa & Permit',
        authority: 'UAE Free Zones & MOHRE',
        timeframe: '10 – 12 Working Days',
        badge: 'Sole Practitioner',
        icon: 'briefcase',
        summary:
          'Operate as an independent contractor, invoice clients in your own name, and reside legally in Dubai with a freelance permit and visa.',
        description:
          'A UAE freelance visa is a residence visa that lets you live in the UAE and work independently as a self-employed professional, tied to a freelance permit rather than to an employer. It is built for professionals in eligible sectors such as media, technology, education, design, marketing, and consulting. The permit identifies you as a sole practitioner and enables you to conduct business and invoice clients directly in your own name without needing a commercial corporate entity. If you are already sponsored on a spouse or family visa, you can obtain the freelance permit alone without changing residency.',
        eligibilityAndSectors: [
          'Media & Creative: Journalists, photographers, videographers, editors, copywriters, and content creators',
          'Technology & Software: Software engineers, web developers, IT consultants, data analysts, and cybersecurity specialists',
          'Education & Training: Tutors, educational advisors, corporate trainers, and executive coaches',
          'Design & Fashion: Interior designers, graphic artists, web designers, stylists, and architects',
          'Marketing & Advisory: Digital marketers, PR specialists, SEO consultants, and strategic business advisors',
        ],
        requirements: [
          'Detailed CV / resume and recent photograph with white background',
          'Passport copy valid for at least 6 to 8 months and current visa copy (if resident)',
          'Bank reference letter or past 3 to 6 months bank statements',
          'Educational credentials, university degree, or professional portfolio in your field',
          'No Objection Certificate (NOC) from current sponsor (if currently employed in the UAE)',
          'Valid UAE health insurance policy coverage',
        ],
        process: [
          'Selection of optimal Free Zone authority or MOHRE framework matching your specific professional activity',
          'Freelance permit application submission and qualification verification',
          'Establishment card registration for sole practitioner visa sponsorship',
          'Entry permit issuance and in-country change of status',
          'VIP medical screening, Emirates ID biometrics, and electronic visa stamping',
        ],
        deliverables: [
          'Official freelance permit from premier UAE Free Zone or MOHRE',
          'Establishment card and 1, 2, or 3-year freelance residence visa',
          'Right to contract with corporate clients and individuals across the UAE and globally',
          'Ability to open personal and freelance business bank accounts and sponsor family members',
          'Full legal freedom to work with multiple clients simultaneously',
        ],
        faqs: [
          {
            question: 'What is a UAE freelance visa and who can apply for it?',
            answer:
              'A UAE freelance visa is a residence visa that lets you live in the UAE and work independently as a self-employed professional, tied to a freelance permit rather than to an employer. It is built for professionals in eligible sectors such as media, technology, education, design, marketing, and consulting. Anyone in a permitted activity can apply, including those already on a dependent visa, who may only need the freelance permit rather than a new residence visa. The permit lets you operate in your own name as a sole practitioner.',
          },
          {
            question: 'What are the requirements to apply for a freelance visa?',
            answer:
              'The typical requirements include: a CV or resume and a recent photograph; a passport copy valid for at least six to eight months; a bank reference letter; a No Objection Certificate from your current sponsor if you hold an existing UAE employment visa; and valid health insurance. Some free zones also ask for a portfolio or proof of qualifications in your field. Once approved, the residence visa steps follow: entry permit, medical test, Emirates ID, and stamping.',
          },
          {
            question: 'Do freelancers need a work permit before applying for a freelance visa in UAE?',
            answer:
              'The freelance permit itself is your work authorisation, so it comes first. You obtain a freelance permit from a free zone, or a self-employment permit from the Ministry of Human Resources and Emiratisation (MOHRE), and the residence visa is then issued against it. If you already hold a UAE residence visa through family sponsorship, a Golden Visa, or a Green Visa, a MOHRE freelance permit alone can authorise you to work legally without a new visa.',
          },
          {
            question: 'Is a freelance license required to work independently in UAE?',
            answer:
              'Yes. To work legally as a freelancer in the UAE, you need a freelance permit or licence from a free zone or MOHRE. Working independently without one is not permitted. The permit is what lets you invoice clients in your own name and operate as a recognised sole practitioner. It also underpins your residence visa and family sponsorship.',
          },
          {
            question: 'How long does it take to get a freelance visa approved in Dubai?',
            answer:
              'A freelance permit and visa are usually processed within about 10 to 12 working days, and up to two to three weeks end to end once the medical test and Emirates ID steps are included. The permit itself is approved quickly; the residence visa stages add most of the time. Matching your activity correctly to the free zone permitted list is the best way to avoid delays.',
          },
          {
            question: 'Can freelancers sponsor their family members after obtaining a freelance visa?',
            answer:
              'Yes. Once you hold a freelance residence visa, you can sponsor your spouse and children, subject to standard conditions: a minimum monthly income (typically from around AED 4,000), a registered Ejari tenancy contract, and valid health insurance for each dependent. Each dependent needs their own entry permit, medical test, and Emirates ID.',
          },
          {
            question: 'How long is the freelance visa in Dubai valid after approval?',
            answer:
              'A freelance residence visa is typically valid for 1, 2, or 3 years, depending on the free zone and package you choose, while the freelance permit is usually renewed annually. Established freelancers earning at least AED 360,000 a year can instead opt for the 5-year Green Visa, a self-sponsored route that removes the shorter renewal cycle.',
          },
          {
            question: 'Can freelancers work with multiple clients under this visa?',
            answer:
              'Yes, and it is the core advantage of the freelance visa. You can work with multiple clients at once, both in the UAE and internationally, invoicing each in your own name without needing separate sponsorship or approvals. The one condition is that the work falls within the activity your permit covers.',
          },
          {
            question: 'Can a freelance visa in UAE be renewed after it expires?',
            answer:
              'Yes. The freelance permit and residence visa are renewable, as long as the permit stays active and you remain compliant with UAE regulations. The permit renews annually and the residence visa per its term. Renewing before expiry avoids overstay fines, and a consistent renewal record strengthens your UAE immigration history.',
          },
        ],
      },
      {
        id: 'domestic-worker-visa',
        title: 'Domestic Worker Visa',
        authority: 'MOHRE & Tadbeer Licensing Authority',
        timeframe: '7 – 10 Working Days',
        badge: 'Household Support',
        icon: 'handshake-heart',
        summary:
          'Compliant legal sponsorship for housemaids, nannies, private chauffeurs, and household staff under MOHRE regulations.',
        description:
          'Sponsoring domestic staff in the UAE is governed strictly by the Ministry of Human Resources and Emiratisation (MOHRE) and authorized Tadbeer service centers under the UAE Domestic Labour Law. Whether you are sponsoring a housemaid, private nanny, cook, or private chauffeur, the law requires standard government-approved employment contracts, mandatory medical fitness testing, medical insurance coverage, and timely visa issuance. Vision Business Setup manages the entire procedure — from quota approvals and contract drafting to medical screening and Emirates ID delivery.',
        requirements: [
          'Sponsor original passport, residence visa copy, and Emirates ID',
          'Proof of sponsor income: Salary certificate (min. AED 25,000/month) or company trade license + 3 months bank statements',
          'Registered Ejari tenancy contract (min. 2-bedroom accommodation demonstrating adequate private room for the worker)',
          'Domestic worker original passport (minimum 6 months validity) and recent passport photographs',
          'Standard MOHRE-approved domestic labour contract signed through Tadbeer',
          'Medical fitness clearance certificate (blood test, pregnancy test, and chest X-ray)',
          'Mandatory comprehensive health insurance policy covering domestic staff',
        ],
        process: [
          'Application for MOHRE domestic worker quota approval and sponsor eligibility verification',
          'Drafting and signing of standardized Tadbeer domestic worker employment contract',
          'Entry permit processing for domestic worker arrival or in-country status change',
          'Expedited VIP medical fitness screening at approved government health centers',
          'Emirates ID biometric capture (fingerprints and photo registration)',
          'Issuance of official domestic worker residence visa and delivery of Emirates ID',
        ],
        deliverables: [
          'MOHRE quota approval and legal sponsorship file opening',
          'Bilingual Tadbeer domestic employment contract preparation',
          'Entry permit issuance and in-country change of status management',
          'VIP medical screening appointment and health clearance certificate',
          '1 or 2-year renewable domestic worker residence visa & Emirates ID',
          'Annual renewal tracking and end-of-service departure clearance assistance',
        ],
        faqs: [
          {
            question: 'What occupations fall under the UAE domestic worker visa category?',
            answer:
              'Recognized domestic staff categories under MOHRE include housemaids, private nannies, private chauffeurs/drivers, cooks, housekeepers, gardeners, private tutors, security guards, and home healthcare nurses.',
          },
          {
            question: 'What is the minimum sponsor income required to sponsor domestic workers in Dubai?',
            answer:
              'Under MOHRE regulations, expatriate sponsors generally require a minimum monthly income of AED 25,000, verified through an official salary certificate or bank statements, along with an Ejari tenancy contract showing suitable living accommodations (typically a 2-bedroom home or larger with a dedicated private room).',
          },
          {
            question: 'Are employers legally required to provide medical insurance for domestic staff?',
            answer:
              'Yes. Under UAE federal labour regulations, sponsors are legally mandated to provide comprehensive health insurance covering the full duration of the domestic worker residency.',
          },
          {
            question: 'How long is a UAE domestic worker visa valid for?',
            answer:
              'Domestic worker residence visas are typically issued for 1 or 2 years, renewable annually subject to continued employment, valid medical fitness clearance, and health insurance policy renewal.',
          },
          {
            question: 'Can I sponsor a domestic worker who is already inside the UAE?',
            answer:
              'Yes. If the domestic worker is already inside the country on a visit visa or following a cancelled previous contract, we can complete an in-country change of status without requiring them to exit the UAE.',
          },
          {
            question: 'What is the role of Tadbeer in sponsoring domestic staff?',
            answer:
              'Tadbeer centers are regulated by MOHRE to oversee the transparent, legal recruitment and visa processing of domestic workers. All contracts and visa applications must be processed through accredited Tadbeer channels to ensure full legal protection for both employers and workers.',
          },
        ],
      },
    ],
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
        authority: 'Central Bank of the UAE & Partner Commercial Banks',
        timeframe: '2 – 4 Weeks',
        badge: 'Tier-1 UAE Banks',
        icon: 'bank',
        summary:
          'Guaranteed corporate bank account opening support in Dubai, UAE for Mainland, Free Zone & Offshore companies with premier UAE commercial banks.',
        description:
          'When opening a corporate bank account in the UAE, you will discover that requirements vary significantly from bank to bank. Stringent anti-money laundering (AML), Know Your Customer (KYC), and Ultimate Beneficial Owner (UBO) background checks can lead to frustrating delays or outright rejections without the right preparation. However, it can be hassle-free with the right know-how and support. Vision Business Setup manages your business profiling, compliance dossier, transactional projections, and direct bank liaison to ensure an efficient, smooth approval process across top UAE banking institutions.',
        bankingPartners: [
          'Emirates NBD',
          'First Abu Dhabi Bank (FAB)',
          'Mashreq & Mashreq NEO',
          'Dubai Islamic Bank (DIB)',
          'Commercial Bank of Dubai (CBD)',
          'Wio Digital Business Banking',
          'Abu Dhabi Commercial Bank (ADCB)',
        ],
        requirements: [
          'Valid trade license copy, Certificate of Commercial Registration, and Memorandum of Association (MOA)',
          'Shareholder, Director, and Manager passports, Emirates IDs, and residency visa copies',
          'Comprehensive company business plan outlining activities, target markets, major suppliers, and clients',
          'Last 6 months personal and corporate bank statements of key shareholders',
          'Proof of registered commercial address (valid Ejari tenancy contract or business center agreement)',
          'Supporting commercial documents: Draft contracts, supplier agreements, purchase orders, or invoices',
          'Ultimate Beneficial Owner (UBO) declaration and corporate structure chart (for holding or multi-tier entities)',
        ],
        process: [
          'Pre-approval assessment to match your company business activities and turnover with optimal partner banks',
          'Preparation of a compliance-ready corporate dossier, business model description, and cash-flow projections',
          'Direct introduction and meeting coordination with dedicated bank relationship managers',
          'In-person or secure video KYC verification and specimen signature card signing',
          'Bank compliance and AML screening review management',
          'Account activation, online banking setup, and issuance of multi-currency corporate debit cards and cheque books',
        ],
        deliverables: [
          'Pre-screened corporate account application submitted to premier UAE banking institutions',
          'Multi-currency corporate accounts (AED, USD, EUR, GBP) with full online and mobile banking access',
          'Corporate debit cards, cheque books, and merchant payment gateway setup facilitation',
          'Guidance on maintaining minimum average monthly balance requirements and international wire compliance',
          'Dedicated support to address banking compliance inquiries and annual KYC refreshers',
        ],
        faqs: [
          {
            question: 'What documents are required to open a corporate bank account in the UAE?',
            answer:
              'Core requirements include: your valid company trade licence, Certificate of Commercial Registration, Memorandum of Association (MOA) and Articles of Association, shareholder and manager passports, Emirates IDs, and residence visa copies. Banks also require 6 months of personal bank statements from shareholders, a comprehensive business profile, and proof of address such as an Ejari tenancy contract or verified flexi-desk agreement.',
          },
          {
            question: 'Can a newly formed startup open a corporate bank account in Dubai?',
            answer:
              'Yes. Startups and newly registered companies can successfully open business accounts in Dubai. Leading digital business banks like Wio Business offer expedited digital onboarding for startups within 2 to 5 business days, while traditional commercial banks accept new entities provided they present a solid business plan, verified shareholder track records, and initial working capital.',
          },
          {
            question: 'How long does the corporate bank account opening process typically take?',
            answer:
              'Opening a corporate bank account typically takes 2 to 4 weeks depending on the bank and company profile. Digital business banking solutions can be activated in as little as 48 hours to 5 working days, while international commercial banks require 3 to 4 weeks to complete multi-tiered compliance, AML, and UBO verifications.',
          },
          {
            question: 'Can I open a corporate bank account with a virtual office or flexi-desk lease?',
            answer:
              'Yes. Many top UAE commercial banks accept verified flexi-desk and co-working agreements from accredited free zones and business centers, provided the business exhibits authentic commercial operations. Digital business banks like Wio specifically cater to virtual and co-working office setups.',
          },
          {
            question: 'What currencies can be held and transacted in a UAE corporate account?',
            answer:
              'Most UAE corporate accounts are multi-currency, permitting simultaneous holdings, payments, and collections in UAE Dirham (AED), US Dollar (USD), Euro (EUR), British Pound (GBP), and other major international currencies.',
          },
          {
            question: 'What are the common reasons for corporate bank account delays or rejections?',
            answer:
              'Common reasons include incomplete KYC documentation, lack of documented business substance or physical presence, unclear source of initial funds, transactions involving sanctioned or high-risk jurisdictions, and inability to present authentic commercial contracts or realistic financial projections. Vision Business Setup pre-screens your file to prevent these issues.',
          },
        ],
      },
      {
        id: 'corporate-tax-guide',
        title: 'Corporate Tax Guide & Registration',
        authority: 'Federal Tax Authority (FTA)',
        timeframe: '3 – 5 Working Days',
        badge: 'FTA 9% Regime',
        icon: 'compass',
        summary:
          'Essential steps to becoming tax-ready and ensuring full compliance with the UAE Federal Corporate Tax law under FTA regulations.',
        description:
          'Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax applies a headline rate of 9% on taxable net profits exceeding AED 375,000, with a 0% rate on profits up to AED 375,000. All UAE business entities — Mainland, Free Zone, and Offshore — are legally required to register with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN). Even entities with zero taxable profit or turnover below the threshold must register to avoid heavy fines. Small businesses with turnover below AED 3,000,000 can benefit from Small Business Relief. Our corporate tax specialists ensure you meet every deadline, calculate liabilities accurately, and maintain audit-ready financial records.',
        keyTaxPillars: [
          'Headline Tax Rate: 0% on taxable net profit up to AED 375,000; 9% on taxable income exceeding AED 375,000',
          'Mandatory Registration: All commercial entities, including free zones, must register with the FTA and secure a TRN',
          'Small Business Relief (SBR): Eligible taxable persons with gross revenue equal to or below AED 3,000,000 can elect for SBR, treating taxable income as nil',
          'Free Zone Qualifying Person (QFZP): 0% corporate tax rate on Qualifying Income if economic substance and transfer pricing rules are satisfied',
          'Filing Deadline: Corporate tax returns and payment must be submitted within 9 months following the close of the financial year',
          'Administrative Penalty: FTA fine of AED 10,000 for failure to submit Corporate Tax registration before the specified timeline',
        ],
        requirements: [
          'Company trade license copy and commercial registration certificate',
          'Memorandum of Association (MOA) / Articles of Association',
          'Emirates ID and passport copies of the authorized signatory / manager',
          'Contact email, mobile number, and company financial year start and end dates',
          'Corporate bank account IBAN and financial statements (audited or management accounts)',
          'Customs registration details and Free Zone lease agreement (if applicable)',
        ],
        process: [
          'Business tax profile evaluation and determination of financial year start and end dates',
          'Preparation and review of corporate documents on the FTA EmaraTax platform',
          'Submission of Corporate Tax registration application to the FTA',
          'Resolution of any FTA clarification queries and document verification',
          'Issuance of official Corporate Tax Registration Number (TRN) Certificate',
          'Ongoing corporate tax advisory, deductible expense structuring, and annual return filing',
        ],
        deliverables: [
          'Federal Tax Authority (FTA) Corporate Tax registration & TRN certificate issuance',
          'Free Zone 0% Qualifying Income evaluation and economic substance audit review',
          'Corporate tax impact assessment, deductible expenses advisory, and transfer pricing guidance',
          'Annual Corporate Tax return computation, filing, and FTA audit representation',
        ],
        faqs: [
          {
            question: 'Who is subject to UAE Corporate Tax and must register with the FTA?',
            answer:
              'All business entities operating in the UAE are subject to Corporate Tax and are legally required to register with the Federal Tax Authority (FTA). This includes mainland companies, free zone entities, foreign company branches, and individuals conducting commercial business activities in the UAE under a commercial licence.',
          },
          {
            question: 'What is the corporate tax rate in the UAE and what are the thresholds?',
            answer:
              'The UAE Corporate Tax regime applies a headline rate of 9% on taxable net profits exceeding AED 375,000. A 0% tax rate applies to taxable net profit up to AED 375,000 to support startups and small businesses.',
          },
          {
            question: 'What is Small Business Relief (SBR) and who qualifies for it?',
            answer:
              'Under UAE Corporate Tax law, eligible resident taxable persons with gross revenues equal to or below AED 3,000,000 for the tax period can elect for Small Business Relief (SBR). When elected, the business taxable income is treated as nil, exempting them from paying corporate tax for that financial period.',
          },
          {
            question: 'Do Free Zone companies pay 0% or 9% corporate tax?',
            answer:
              'All Free Zone companies must register for Corporate Tax. However, a Qualifying Free Zone Person (QFZP) can benefit from a 0% tax rate on Qualifying Income, provided they satisfy economic substance requirements, derive eligible qualifying income, and adhere to arm\'s-length transfer pricing rules. Income derived from non-qualifying activities is taxed at 9%.',
          },
          {
            question: 'When must a company file its annual UAE corporate tax return?',
            answer:
              'Taxable persons must file their corporate tax return and pay any corporate tax due within 9 months from the end of their relevant financial year. For example, for a financial year ending December 31, the filing and payment deadline is September 30 of the following year.',
          },
          {
            question: 'What is the penalty for failing to register for corporate tax on time?',
            answer:
              'The FTA imposes an administrative penalty of AED 10,000 on businesses that fail to submit their Corporate Tax registration application within the deadlines stipulated by the FTA.',
          },
          {
            question: 'What accounting records must businesses maintain for corporate tax?',
            answer:
              'All commercial entities are legally required to maintain proper accounting records, financial statements, ledgers, and supporting documentation for at least 7 years following the end of the tax period, demonstrating accurate income and deductible business expenses.',
          },
        ],
      },
      {
        id: 'bookkeeping-vat',
        title: 'Bookkeeping & VAT Registration',
        authority: 'Federal Tax Authority (FTA) & EmaraTax',
        timeframe: 'Monthly / Quarterly Service',
        badge: 'Certified Accountants',
        icon: 'badge-check',
        summary:
          'Comprehensive accounting, monthly ledger maintenance, and quarterly VAT return filing to keep your business audit-ready and FTA-compliant.',
        description:
          'Accounting and bookkeeping are the recording of financial transactions and an integral part of any business. Having a full-time in-house accountant can shoot up fixed overhead costs and can be avoided by hiring the expert services of Vision Business Setup. Our certified accountants handle monthly transaction updates, bank reconciliations, cloud software setup, chart of accounts customization, and quarterly Form 201 VAT return filings, ensuring your business remains audit-ready and fully compliant with Federal Tax Authority laws.',
        vatRegistrationRules: [
          'Mandatory VAT Registration: When annual taxable supplies and imports exceed AED 375,000 in the preceding 12 months (or expected in 30 days)',
          'Voluntary VAT Registration: When annual taxable supplies or commercial expenses exceed AED 187,500',
          'Standard VAT Rate: 5% applied to taxable commercial goods and services across the UAE',
          'Zero-Rated Supplies (0%): Direct exports of goods and services outside the GCC, international transport, and certain healthcare & education supplies',
          'Exempt Supplies: Specific residential real estate leases, local passenger transport, and bare land transactions',
        ],
        bookkeepingInclusions: [
          'Up to 50 to 500+ commercial transactions categorized and posted per month',
          'Cloud accounting software setup (Zoho Books, QuickBooks, Xero) tailored to UAE VAT standards',
          'Chart of accounts structuring aligned with FTA audit requirements',
          'Monthly bank reconciliation and supplier / customer ledger tracking',
          'Preparation of quarterly VAT reports calculating output and input VAT',
          'Quarterly VAT Return (Form 201) filing directly on the FTA EmaraTax portal',
          'Year-End Financial Statements (Profit & Loss and Balance Sheet) for bank compliance and trade license renewal',
        ],
        requirements: [
          'Company trade license copy & Memorandum of Association (MOA)',
          'Emirates ID and passport copies of company manager and authorized signatories',
          'Past 12 months sales invoices, purchase invoices, and commercial expense bills',
          'Monthly corporate bank statements and transaction reconciliation records',
          'Customs client code and Mirsal II import/export documents (if applicable)',
        ],
        process: [
          'Initial taxable turnover assessment to determine mandatory or voluntary VAT registration',
          'FTA EmaraTax profile setup and VAT registration application submission',
          'Cloud accounting software configuration and chart of accounts mapping',
          'Monthly transaction posting, expense tracking, and bank reconciliation',
          'Quarterly VAT return preparation, verification, and timely Form 201 filing on the FTA portal',
        ],
        deliverables: [
          'FTA Value Added Tax (VAT) registration and TRN certificate issuance',
          'Monthly bookkeeping, transaction categorization, and bank reconciliation',
          'Quarterly VAT return preparation, verification, and portal filing',
          'Audit-ready management reports and financial statements for banking and renewal',
          'Complete protection against FTA late filing fines and compliance audits',
        ],
        faqs: [
          {
            question: 'When is VAT registration mandatory for companies in the UAE?',
            answer:
              'VAT registration is mandatory if your business taxable supplies and imports exceed AED 375,000 over the preceding 12 months or are expected to exceed that threshold in the next 30 days. Businesses with turnover exceeding AED 187,500 can register voluntarily to recover input VAT.',
          },
          {
            question: 'What is the difference between bookkeeping and VAT return filing?',
            answer:
              'Bookkeeping is the continuous day-to-day recording and reconciliation of all financial transactions, sales invoices, bills, and expenses. VAT return filing is the periodic statutory declaration (usually quarterly) submitted to the FTA summarizing total sales, output VAT collected, input VAT paid, and net tax payable or refundable.',
          },
          {
            question: 'How frequently must VAT returns be submitted to the Federal Tax Authority (FTA)?',
            answer:
              'The standard tax period for VAT is quarterly (every 3 months), though the FTA may assign monthly periods for certain high-turnover businesses. Returns (Form 201) and payments must be submitted within 28 days following the end of the tax period.',
          },
          {
            question: 'What records and invoices must be retained for FTA audit compliance?',
            answer:
              'Under UAE tax and commercial laws, all commercial entities are legally required to retain accounting books, commercial records, tax invoices, and supporting bills for a minimum of 5 years (7 years for real estate transactions).',
          },
          {
            question: 'Why should a business outsource bookkeeping instead of hiring a full-time accountant?',
            answer:
              'Outsourcing bookkeeping to Vision Business Setup provides access to a team of senior chartered accountants, cloud software setup, and guaranteed FTA compliance at a fraction of the cost of a full-time employee salary, visa fees, gratuity, and office overheads.',
          },
          {
            question: 'What penalties does the FTA impose for late VAT registration or late return filing?',
            answer:
              'The FTA imposes an administrative fine of AED 10,000 for late VAT registration. For late return submissions, a fine of AED 1,000 applies for the first offense and AED 2,000 for repeated offenses, plus escalating percentage penalties on unpaid tax.',
          },
          {
            question: 'What cloud accounting software do you support for UAE businesses?',
            answer:
              'We implement and manage leading FTA-accredited cloud accounting platforms including Zoho Books, QuickBooks Online, and Xero, customized with VAT-compliant invoice templates, multi-currency features, and direct bank feeds.',
          },
        ],
      },
    ],
  },
]

// Flattened list of all services with category metadata
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

// Map by slug (service.id) and supported URL aliases (such as Decisive Zone permalinks)
const serviceSlugAliases = {
  'freeze-trade-license': 'license-freezing',
  'trade-license-renewal-uae': 'license-renewal',
  'trade-license-modification-uae': 'license-modification',
  'trade-license-cancellation': 'license-cancellation',
  'uae-residence-visa': 'residence-visa',
  'dependent-visa-uae': 'dependent-visa',
  'remote-work-visa-uae': 'remote-work-visa',
  'golden-visa-in-dubai-uae-decisive-zone': 'golden-visa',
  'freelancer-visa-uae': 'freelance-visa',
  'vat-registration-bookkeeping': 'bookkeeping-vat',
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
      num: '01',
      title: 'Consultation & Assessment',
      text: 'We review your business structure, specific requirements, and timeline to recommend the most cost-efficient and compliant pathway.',
    },
    {
      num: '02',
      title: 'Document Preparation',
      text: 'Our legal and PRO specialists prepare, review, and legally translate all necessary documentation to prevent rejections or delays.',
    },
    {
      num: '03',
      title: 'Government Liaison',
      text: 'Our dedicated corporate PROs submit and expedite filings across DET, MOHRE, GDRFA, Dubai Courts, and the Federal Tax Authority.',
    },
    {
      num: '04',
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
