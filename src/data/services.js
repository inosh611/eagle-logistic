export const servicesHero = {
  tag: 'What We Do',
  title: 'End-to-End Logistics\nSolutions for Every Need',
  subtitle: 'From ocean freight to AI-powered BPO — Eagle Logistic delivers precision, compliance and speed across every service we offer.',
}

export const servicesList = [
  {
    id: 1,
    slug: 'freight-forwarding',
    icon: 'ship',
    title: 'Freight Forwarding',
    subtitle: 'Ocean & Air Freight',
    shortDesc: 'LCL, FCL and air freight solutions connecting Sri Lanka to global markets with full documentation support.',
    color: '#2563eb',
    href: '/services/freight-forwarding',
  },
  {
    id: 2,
    slug: 'logistics-bpo',
    icon: 'cpu',
    title: 'Logistics BPO',
    subtitle: 'Save 45% in Costs',
    shortDesc: 'Outsource your logistics back-office operations and achieve 100% compliance while cutting costs by up to 45%.',
    color: '#0f6e56',
    href: '/services/logistics-bpo',
  },
  {
    id: 3,
    slug: 'customs-consultancy',
    icon: 'clipboard',
    title: 'Customs & Consultancy',
    subtitle: 'Sri Lanka Customs Experts',
    shortDesc: 'Expert guidance through Sri Lanka Customs regulations, tariff classifications and import/export compliance.',
    color: '#854f0b',
    href: '/services/customs-consultancy',
  },
  {
    id: 4,
    slug: 'specialized-logistics',
    icon: 'flask',
    title: 'Specialized Logistics',
    subtitle: 'Logipharma & E-Visible',
    shortDesc: 'Cold-chain pharmaceutical logistics and real-time digital visibility solutions for complex supply chains.',
    color: '#993556',
    href: '/services/specialized-logistics',
  },
]

export const freightData = {
  hero: {
    tag: 'Freight Forwarding',
    title: 'Global Freight Solutions\nBuilt for Sri Lanka',
    subtitle: 'Whether you ship a single pallet or a full container, we manage every mile with precision and care.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80',
  },
  intro: {
    title: 'Ocean & Air Freight — LCL and FCL',
    description: `Eagle Logistic offers a full range of freight forwarding services, connecting
    Sri Lankan businesses to global markets. Our expert team handles everything from booking
    and documentation to customs clearance and final delivery — ensuring your cargo arrives
    safely, on time, and in full compliance with all regulations.`,
  },
  services: [
    {
      id: 1,
      title: 'FCL — Full Container Load',
      description: 'Dedicated containers for large shipments. Maximum security, fixed transit times and competitive rates for high-volume cargo moving globally.',
      icon: 'container',
    },
    {
      id: 2,
      title: 'LCL — Less Than Container Load',
      description: 'Share container space with other shippers and pay only for what you use. Ideal for small to medium shipments without the full container cost.',
      icon: 'box',
    },
    {
      id: 3,
      title: 'Air Freight',
      description: 'Time-critical shipments delivered fast. We work with leading airlines to offer express and standard air freight services to over 240 cities worldwide.',
      icon: 'plane',
    },
    {
      id: 4,
      title: 'Documentation & Compliance',
      description: 'Bill of Lading, Certificate of Origin, Packing Lists and all export/import documentation handled accurately and on time.',
      icon: 'document',
    },
  ],
  stats: [
    { id: 1, value: '240+', label: 'Cities Worldwide' },
    { id: 2, value: '20+',  label: 'Years Experience' },
    { id: 3, value: '100%', label: 'On-time Documentation' },
  ],
}

export const bpoData = {
  hero: {
    tag: 'Logistics BPO',
    title: 'Cut Costs by 45%.\nNever Compromise Compliance.',
    subtitle: 'Outsource your logistics back-office to Eagle Logistic and let us run the operations while you focus on growth.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  },
  intro: {
    title: 'What is Logistics BPO?',
    description: `Logistics Business Process Outsourcing (BPO) means handing your
    back-office logistics operations — data entry, shipment tracking, invoice processing,
    compliance reporting — to a specialist team. Eagle Logistic's BPO division has helped
    clients reduce operational costs by up to 45% while maintaining 100% regulatory compliance.`,
  },
  benefits: [
    { id: 1, title: '45% Cost Reduction',    desc: 'Dramatically lower your operational overhead by outsourcing to our expert team.' },
    { id: 2, title: '100% Compliance',        desc: 'Never miss a regulation. Our specialists stay ahead of every customs and trade rule.' },
    { id: 3, title: 'Scalable Operations',    desc: 'Scale your logistics back-office up or down instantly without hiring or firing.' },
    { id: 4, title: 'Real-Time Reporting',    desc: 'Live dashboards and reports so you always know exactly what is happening.' },
    { id: 5, title: 'Dedicated Team',         desc: 'A named team assigned to your account — not a faceless call centre.' },
    { id: 6, title: 'Technology Integration', desc: 'We integrate with your existing ERP, TMS and WMS systems seamlessly.' },
  ],
  process: [
    { step: '01', title: 'Assessment',   desc: 'We audit your current back-office processes and identify cost and compliance gaps.' },
    { step: '02', title: 'Onboarding',   desc: 'We set up systems, integrate with your tools and brief your dedicated team.' },
    { step: '03', title: 'Operations',   desc: 'Our team takes over day-to-day processing, tracking and compliance reporting.' },
    { step: '04', title: 'Optimisation', desc: 'Monthly reviews ensure we continuously improve performance and reduce costs further.' },
  ],
}

export const customsData = {
  hero: {
    tag: 'Customs & Consultancy',
    title: 'Navigating Sri Lanka Customs\nwith Confidence',
    subtitle: 'Expert consultancy that keeps your imports and exports moving — fully compliant, zero delays.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=80',
  },
  intro: {
    title: 'Your Sri Lanka Customs Specialist',
    description: `Sri Lanka Customs regulations are complex and constantly evolving.
    Eagle Logistic's Customs & Consultancy team has over two decades of hands-on
    experience navigating import/export rules, tariff classifications, duty calculations
    and customs audits. We ensure your business stays compliant, avoids penalties
    and keeps cargo moving without costly delays.`,
  },
  services: [
    { id: 1, title: 'Import & Export Clearance', desc: 'Full customs clearance service for all types of goods entering or leaving Sri Lanka.' },
    { id: 2, title: 'Tariff Classification',     desc: 'Accurate HS code classification to ensure correct duty rates and avoid overpayment.' },
    { id: 3, title: 'Duty & Tax Calculation',    desc: 'Precise calculation of import duties, VAT, CESS and other levies before shipment.' },
    { id: 4, title: 'Customs Audit Support',     desc: 'Preparation and representation during Sri Lanka Customs audits and inspections.' },
    { id: 5, title: 'Trade Compliance Training', desc: 'Staff training programs to keep your team up-to-date with the latest customs rules.' },
    { id: 6, title: 'Permits & Licenses',        desc: 'Assistance obtaining import permits, BOI approvals and special commodity licenses.' },
  ],
}

export const specializedData = {
  hero: {
    tag: 'Specialized Logistics',
    title: 'When Standard Logistics\nIs Not Enough',
    subtitle: 'Pharmaceutical cold-chain, digital supply chain visibility and specialized cargo handling — built for complex needs.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
  },
  divisions: [
    {
      id: 1,
      name: 'Logipharma',
      tag: 'Medical & Pharmaceutical',
      title: 'Cold-Chain Logistics for Healthcare',
      description: `Logipharma is Eagle Logistic's dedicated pharmaceutical and medical
      logistics division. We handle temperature-sensitive cargo with strict cold-chain
      protocols, GDP compliance and specialized packaging — ensuring medicines and
      medical equipment arrive safe and effective.`,
      features: [
        'Temperature-controlled storage and transport',
        'GDP (Good Distribution Practice) compliance',
        'Specialized pharmaceutical packaging',
        'Real-time temperature monitoring',
        'Regulatory documentation for medical imports',
      ],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      color: '#0f6e56',
    },
    {
      id: 2,
      name: 'E-Visible',
      tag: 'Digital Visibility Platform',
      title: 'Real-Time Supply Chain Visibility',
      description: `E-Visible is our proprietary digital platform giving clients
      complete transparency across their supply chain. Track shipments in real-time,
      receive automated alerts, generate compliance reports and make data-driven
      decisions — all from a single dashboard.`,
      features: [
        'Real-time shipment tracking dashboard',
        'Automated delay and exception alerts',
        'Compliance and customs status updates',
        'Integration with ERP and TMS systems',
        'Historical data and performance analytics',
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      color: '#1d3faa',
    },
  ],
}