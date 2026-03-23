export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
   {
    id: 2,
    label: "About Us",
    href: "/about" ,
  },
 
  {
    id: 3,
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "International Trade", href: "/services/freight-forwarding" },
      { label: "Logistics Business Process Outsourcing", href: "/services/logistics-bpo" },
      { label: "Customs & Consultancy", href: "/services/customs-consultancy" },
      // {
      //   label: "Specialized Logistics",
      //   href: "/services/specialized-logistics",
      // },
      { label: 'Trade Consultation', href: '/services/trade-consultation' },
      { label: "BDP Partnership", href: "/bdp-partnership" },
    ],
  },
  {
    id: 4,
    label: "Blog",
    href: "",
    dropdown: [
      // { label: "News & Insights", href: "/news" },
      // { label: "Magazine Archive", href: "/news#magazine" },
      // { label: "Press Releases", href: "/news#press" },
       { label: 'Press & Media',         href: '/press' },
      // { label: "Supply Chain Community", href: "/news#community" },
      { label: 'Supply Chain Community', href: '/supply-chain-community' },
      { label: 'E-Visible Magazine', href: '/magazine' },
    ],
  },
   {
    id: 5,
    label: "Careers",
    href: "/careers",
  },
  {
    id: 6,
    label: "Contact Us",
    href: "/contact",
  },
];
