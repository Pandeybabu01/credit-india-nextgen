// ─────────────────────────────────────────────────────────────
//  Edit everything customers read on the site from this one file.
//  Leave phone / whatsapp / address / registration empty ('') to hide them.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Credit India NextGen',
  short: 'Credit India',
  accent: 'NextGen',
  tagline: 'नयी सोध, नयी उड़ान',
  taglineEn: 'New thinking, new flight',
  description:
    'We help individuals and businesses compare, apply for and get approved for loans and credit cards from trusted banks and lenders.',
  email: 'info@creditindianextgen.com', // TODO: replace with your real address
  phone: '+91 96310 20213', // e.g. '+91 98765 43210'
  whatsapp: '+91 96310 20213', // TODO: digits only with country code, e.g. '919876543210'
  instagram: 'https://instagram.com/creditindianextgen.official?psln=ZHYwZ3dlZzVyaGln&utm_source=qr', // TODO: your Instagram username without @, e.g. 'creditindianextgen'
  address: '',
  hours: 'Monday to Saturday, 10:00 am – 7:00 pm IST',
  registration: '', // e.g. your DSA / company registration details
  disclaimer:
    'Credit India NextGen is a loan facilitation / Direct Selling Agent service and is not a bank or lender. Loan approval, interest rates, fees and terms are decided solely by the lending institution and depend on your credit profile. Rates and EMIs shown on this website are illustrations only.',
}

// Lender names you are authorised to display. Leave empty to hide the section.
export const lenders = [] // e.g. ['Bank A', 'Bank B']

export const nav = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    id: 'home-loan',
    title: 'Home loan',
    summary: 'Buy, build or renovate a home, or move an existing loan to a better rate.',
    detail:
      'A home loan is usually the longest commitment you will make, so the details matter. We compare lenders on rate, fees and flexibility, and help you apply with the right documents the first time.',
    includes: [
      'Purchase, construction and plot-plus-construction loans',
      'Balance transfer and top-up on existing loans',
      'Eligibility and EMI planning before you shortlist a property',
      'Support with legal and technical verification steps',
    ],
    bestFor: 'Salaried and self-employed buyers purchasing or building a home.',
  },
  {
    id: 'personal-loan',
    title: 'Personal loan',
    summary: 'Quick, unsecured funding for weddings, medical needs, travel or consolidating debt.',
    detail:
      'Personal loans are unsecured, so lenders look closely at income and credit history. We match you with lenders whose criteria fit your profile, which avoids needless rejections.',
    includes: [
      'Salaried and self-employed options',
      'Loan amount and tenure guidance',
      'Debt consolidation options',
      'Minimal-paperwork application support',
    ],
    bestFor: 'Anyone who needs funds without pledging property or gold.',
  },
  {
    id: 'business-loan',
    title: 'Business loan',
    summary: 'Working capital, term loans and equipment finance for growing businesses.',
    detail:
      'Business lenders assess turnover, banking and GST history. We help you present your numbers clearly and approach lenders who work with your kind of business.',
    includes: [
      'Working capital and overdraft facilities',
      'Term loans and equipment finance',
      'Documentation review for GST, ITR and bank statements',
      'Options for new and established businesses',
    ],
    bestFor: 'Shop owners, traders, manufacturers and service businesses.',
  },
  {
    id: 'loan-against-property',
    title: 'Loan against property',
    summary: 'Raise larger amounts at lower rates by pledging residential or commercial property.',
    detail:
      'A loan against property lets you unlock the value in property you already own. We help you understand valuation, eligibility and repayment before you commit.',
    includes: [
      'Residential and commercial property options',
      'Property document checklist',
      'Longer tenures for comfortable EMIs',
      'Balance transfer from existing LAP loans',
    ],
    bestFor: 'Property owners funding a business, education, or a large expense.',
  },
  {
    id: 'car-loan',
    title: 'Car loan',
    summary: 'Finance for new and used cars, with clear costs from showroom to registration.',
    detail:
      'We compare loan offers so you know the real cost of the car, including processing fees and insurance bundled in, before you sign at the dealership.',
    includes: [
      'New and pre-owned car finance',
      'Down payment and EMI planning',
      'Comparison of lender offers',
      'Help with documentation and RC endorsement',
    ],
    bestFor: 'First-time and repeat car buyers.',
  },
  {
    id: 'credit-cards',
    title: 'Credit cards',
    summary: 'Find a card that fits how you spend, with fees and rewards explained plainly.',
    detail:
      'The right card depends on your spending, your income and your credit score. We shortlist cards you are likely to be approved for and explain annual fees, interest and reward rules.',
    includes: [
      'Cards matched to your spending pattern',
      'Fee, reward and interest comparison',
      'Eligibility guidance before you apply',
      'Tips for building a stronger credit score',
    ],
    bestFor: 'First-time card applicants and people looking to switch.',
  },
]

export const steps = [
  {
    title: 'Tell us your need',
    short: 'Share the loan type, amount and a few details about your income.',
    long: 'Call, message or fill in the form. Tell us what you need the money for, how much you need and your employment type. This takes a few minutes.',
  },
  {
    title: 'Eligibility check',
    short: 'We review your profile and shortlist lenders likely to approve you.',
    long: 'We look at income, existing EMIs and credit profile to estimate what you can borrow and which lenders suit you. You see the options and the trade-offs before anything is submitted.',
  },
  {
    title: 'Documents',
    short: 'We give you a clear checklist and help you get it right.',
    long: 'You receive a checklist specific to your loan type and employment. We check your documents for gaps before they go to the lender, which avoids delays and queries later.',
  },
  {
    title: 'Application and follow-up',
    short: 'We submit to the lender and track every query until a decision.',
    long: 'We file the application, coordinate with the lender’s team and keep you updated. If the lender needs clarification or a verification visit, we tell you what to expect.',
  },
  {
    title: 'Approval and disbursal',
    short: 'You review the sanction terms, and funds are released by the lender.',
    long: 'Once approved, read the sanction letter carefully: rate, fees, tenure and EMI. We walk you through it. Funds are disbursed by the lender after the final formalities.',
  },
]

export const documents = [
  {
    group: 'Salaried applicants',
    items: [
      'PAN card and Aadhaar',
      'Address proof',
      'Latest 3 months’ salary slips',
      'Last 6 months’ bank statements',
      'Employment or Form 16 details',
    ],
  },
  {
    group: 'Self-employed and business owners',
    items: [
      'PAN card and Aadhaar',
      'Business registration and address proof',
      'Last 2 to 3 years’ ITR with computation',
      'Last 12 months’ bank statements',
      'GST returns, where applicable',
    ],
  },
]

export const principles = [
  {
    title: 'The right lender for your profile',
    text: 'Applying everywhere hurts your credit score. We match you to lenders whose criteria you actually meet.',
  },
  {
    title: 'Clear terms before you commit',
    text: 'Rate, fees, tenure and EMI are explained in plain language, so there are no surprises at sanction.',
  },
  {
    title: 'Support until disbursal',
    text: 'We handle the follow-ups and paperwork between you and the lender, from first call to funds released.',
  },
]

export const team = [
  // TODO: replace these placeholders with your real team.
  {
    slug: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'Founder and Director',
    summary: 'Leads the firm and its lender relationships.',
    bio: [
      'Rahul started Credit India NextGen to make borrowing simpler and fairer for first-time and repeat borrowers alike.',
      'He oversees lender partnerships and personally reviews complex cases, from large home loans to business funding.',
    ],
    focus: ['Lender relationships', 'Home loans and loan against property', 'Complex case structuring'],
  },
  {
    slug: 'priya-verma',
    name: 'Priya Verma',
    role: 'Head of Retail Loans',
    summary: 'Guides salaried and individual customers through personal, car and card applications.',
    bio: [
      'Priya leads the team that helps individuals with personal loans, car loans and credit cards.',
      'She is known for explaining credit scores and eligibility clearly, so customers apply with confidence.',
    ],
    focus: ['Personal loans', 'Car loans', 'Credit cards and credit score guidance'],
  },
  {
    slug: 'amit-singh',
    name: 'Amit Singh',
    role: 'Head of Business Lending',
    summary: 'Helps business owners secure working capital and growth funding.',
    bio: [
      'Amit works with shops, traders and growing businesses to structure the right funding and prepare strong applications.',
      'He focuses on documentation quality, so applications move through lender checks without avoidable delays.',
    ],
    focus: ['Working capital and term loans', 'GST and ITR-based assessment', 'Equipment finance'],
  },
]

export const faqs = [
  {
    q: 'Are you a bank or a lender?',
    a: 'No. We are a loan facilitation service. We help you compare options and apply, but the bank or lender decides on approval, interest rate and terms.',
  },
  {
    q: 'Do I have to pay you to get a loan approved?',
    a: 'We explain how we are compensated before you apply, so nothing is hidden. Be cautious of anyone who asks for money to “guarantee” approval. No one can guarantee it.',
  },
  {
    q: 'How long does approval take?',
    a: 'It depends on the lender, the loan type and how complete your documents are. Personal loans and cards are usually faster than home loans or loans against property. We give you a realistic timeline on the first call.',
  },
  {
    q: 'Will applying hurt my credit score?',
    a: 'Lenders check your credit report when you formally apply, and many applications in a short time can lower your score. This is why we shortlist carefully before submitting anywhere.',
  },
  {
    q: 'My credit score is low. Can you still help?',
    a: 'We will review your profile honestly and tell you which options exist, and what to improve if none fit right now. We cannot promise approval.',
  },
  {
    q: 'Which cities do you serve?',
    a: 'Tell us your city in the enquiry form and we will confirm. Many applications can be handled remotely.',
  },
]

export const safetyTips = [
  'Never share your OTP, card PIN or CVV with anyone, including us.',
  'Lenders approve loans on eligibility. No one can guarantee approval for a fee.',
  'Read the sanction letter fully before you sign, including processing fees and charges.',
]
