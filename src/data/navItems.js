export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "/careers" },
      { label: "Prime Business Solutions", href: "/prime-business-solutions" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "International Trade", href: "/services/freight-forwarding" },
      { label: "Logistics Business Process Outsourcing", href: "/services/logistics-bpo" },
      { label: "Customs & Consultancy", href: "/services/customs-consultancy" },
      {
        label: "Specialized Logistics",
        href: "/services/specialized-logistics",
      },
      { label: 'Trade Consultation', href: '/services/trade-consultation' },
      { label: "BDP Partnership", href: "/bdp-partnership" },
    ],
  },
  {
    id: 4,
    label: "Blog",
    href: "/news",
    dropdown: [
      { label: "News & Insights", href: "/news" },
      { label: "Magazine Archive", href: "/news#magazine" },
      { label: "Press Releases", href: "/news#press" },
      // { label: "Supply Chain Community", href: "/news#community" },
      { label: 'Supply Chain Community', href: '/supply-chain-community' },
    ],
  },
  {
    id: 5,
    label: "Contact Us",
    href: "/contact",
  },
];
