// Cards for the left "Learn GST" column.
// Law and concept cards use internal /learn/:slug routes. News cards link to
// official sources only (gst.gov.in, cbic-gst.gov.in, cbic.gov.in, pib.gov.in).
// TODO: re-check the news summaries against the linked PIB releases before launch.
export const learnCards = [
  // Laws -------------------------------------------------------------------
  {
    id: 'cgst-act',
    type: 'law',
    title: 'CGST Act, 2017',
    summary:
      'The central law for GST on supplies of goods and services within a State or Union Territory.',
    href: '/learn/cgst-act',
    date: null,
    source: 'CBIC',
  },
  {
    id: 'igst-act',
    type: 'law',
    title: 'IGST Act, 2017',
    summary:
      'The law for GST on inter-State supplies of goods and services, and on imports.',
    href: '/learn/igst-act',
    date: null,
    source: 'CBIC',
  },
  {
    id: 'gst-rules',
    type: 'law',
    title: 'CGST Rules, 2017',
    summary:
      'The procedural rules for registration, tax invoices, returns, refunds and e-way bills.',
    href: '/learn/gst-rules',
    date: null,
    source: 'CBIC',
  },

  // Concepts ---------------------------------------------------------------
  {
    id: 'registration-threshold',
    type: 'concept',
    title: 'Registration threshold',
    summary:
      'The turnover limits that decide whether a small shop must register for GST.',
    href: '/learn/registration-threshold',
    date: null,
    source: 'GST Portal',
  },
  {
    id: 'composition-scheme',
    type: 'concept',
    title: 'Composition scheme',
    summary:
      'A simpler scheme for small taxpayers, with fixed rates and fewer formalities.',
    href: '/learn/composition-scheme',
    date: null,
    source: 'GST Portal',
  },
  {
    id: 'gst-rates',
    type: 'concept',
    title: 'GST rates',
    summary:
      'How the GST rate slabs apply to common goods sold in small shops.',
    href: '/learn/gst-rates',
    date: null,
    source: 'GST Portal',
  },

  // News -------------------------------------------------------------------
  {
    id: 'news-56th-council',
    type: 'news',
    title: '56th GST Council rate rationalisation',
    summary:
      'The Council recommended a revised GST rate structure, effective 22 September 2025.',
    href: 'https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2163555',
    date: '3 Sep 2025',
    source: 'PIB',
  },
  {
    id: 'news-57th-council',
    type: 'news',
    title: '57th GST Council meeting',
    summary:
      'The Council met on 8 October 2026 to review GST rates, returns and compliance.',
    href: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2320934',
    date: '8 Oct 2026',
    source: 'PIB',
  },
];
