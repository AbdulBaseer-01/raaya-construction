/*
 * Approved facts (brief, section 16). Every number, phone and email on the
 * site should come from here so the pages cannot contradict each other.
 *
 * TODO(Texo): still to confirm before launch
 *   - response time to promise on forms ("1 working day"?)
 *   - typical installation time range
 *   - email domain: texoprefab.com vs texoprefabworld.com (brief uses texoprefab.com)
 *   - WhatsApp number, GSTIN, social profile URLs
 *   - whether the Jeedimetla address is both office and factory
 */

export const FACTS = {
  founded: 2018,
  teamSince: 2016,
  projects: '1,359+',
  cities: '56+',
  startingPrice: '₹2,500',
  quoteTurnaround: '48 hours',
  factoryTime: 'about 10 days',
  googleRating: '4.5★',
  googleReviews: 80,
} as const

export const CONTACT = {
  sales: { label: '+91 90008 00665', href: 'tel:+919000800665' },
  general: { label: '+91 81858 92514', href: 'tel:+918185892514' },
  infoEmail: { label: 'info@texoprefab.com', href: 'mailto:info@texoprefab.com' },
  salesEmail: { label: 'sales@texoprefab.com', href: 'mailto:sales@texoprefab.com' },
  hours: 'Mon–Sat, 9:00 AM – 6:30 PM',
  address: 'Plot no 1, Venkateshwara Colony, IDA Jeedimetla, Apurupa Colony, Jeedimetla, Hyderabad, Telangana 500055',
  /** Google Maps listing (also used for the reviews link). */
  mapUrl: 'https://maps.app.goo.gl/qNSyNS4xH7eMCv2z9',
} as const

/** Product types offered in the enquiry form (brief, section 11). */
export const BUILD_TYPES = [
  'Site office',
  'Portable cabin / porta cabin',
  'Prefab house or cottage',
  'Wooden series (A-frame, pod)',
  'Security cabin / toll booth',
  'Specialised structure (clinic, restaurant, electrical room)',
  'PUF insulated cabin',
  'Other',
] as const

/** Where "Get a quote" goes: the footer form when the page has one, otherwise the contact page form. */
export const QUOTE_ANCHOR = '#contact'
export const CONTACT_PAGE_QUOTE = '/contact-us#enquiry'
