// Long-form content for the /learn/:slug pages. Facts and figures below are
// taken from the backend source documents (CBIC / GST Portal / PIB).
// TODO: re-verify the exact wording against the latest official notifications.
export const learnContent = {
  'cgst-act': {
    title: 'CGST Act, 2017',
    type: 'law',
    summary:
      'The Central Goods and Services Tax Act, 2017 is the main law for GST on supplies within a single State or Union Territory.',
    paragraphs: [
      'The Act sets out who must register, how invoices and returns work, and how tax is paid, assessed and appealed. For supplies within one State or Union Territory, the GST is split equally between CGST and SGST.',
      'The Act is supported by the CGST Rules, 2017 and is amended from time to time by Finance Acts and notifications.',
      'Always refer to the current text and notifications on the official CBIC portal before taking a business decision.',
    ],
    sourceUrl: 'https://cbic-gst.gov.in/',
  },
  'igst-act': {
    title: 'IGST Act, 2017',
    type: 'law',
    summary:
      'The Integrated Goods and Services Tax Act, 2017 governs GST on inter-State supplies and on imports.',
    paragraphs: [
      'IGST applies when goods or services move across State or Union Territory borders, and on imports into India. The tax is levied by the Centre and shared with the destination State.',
      'The Act works together with the CGST Act to keep one continuous tax chain across the country.',
      'Check the official CBIC portal for the current text and any amendments.',
    ],
    sourceUrl: 'https://cbic-gst.gov.in/',
  },
  'gst-rules': {
    title: 'CGST Rules, 2017',
    type: 'law',
    summary:
      'The CGST Rules, 2017 set out the procedures that support the CGST Act.',
    paragraphs: [
      'The Rules cover registration, tax invoices, returns, refunds, e-way bills and assessment. Forms such as REG-01, GSTR-1 and GSTR-3B are prescribed under these Rules.',
      'The Rules are updated through Central Tax notifications, so the latest version should always be checked on the official portal.',
    ],
    sourceUrl: 'https://cbic-gst.gov.in/',
  },
  'registration-threshold': {
    title: 'Registration threshold',
    type: 'concept',
    summary:
      'Turnover limits generally decide when a small business must register for GST.',
    paragraphs: [
      'Under Section 22 of the CGST Act, 2017, a supplier of services must generally register once aggregate turnover in a financial year exceeds Rs. 20 lakh. For suppliers selling only goods, the threshold is generally Rs. 40 lakh.',
      'The threshold is Rs. 10 lakh in certain Special Category States. Some businesses, such as those making inter-State taxable supplies, must register regardless of turnover under Section 24.',
      'Registration is normally to be applied for within 30 days of becoming liable.',
    ],
    sourceUrl: 'https://www.gst.gov.in/',
  },
  'composition-scheme': {
    title: 'Composition scheme',
    type: 'concept',
    summary:
      'A simplified option for small manufacturers, traders and restaurants not serving alcohol.',
    paragraphs: [
      'The Composition Scheme under Section 10 of the CGST Act, 2017 lets eligible small taxpayers pay tax at fixed rates with fewer formalities. For goods suppliers and restaurants, the annual turnover limit is generally Rs. 1.5 crore (Rs. 75 lakh in listed Special Category States). Service providers and mixed suppliers have a Rs. 50 lakh limit.',
      'Composition taxpayers cannot collect GST from customers, cannot claim input tax credit, and cannot make inter-State outward supplies. They issue a Bill of Supply instead of a tax invoice.',
    ],
    sourceUrl: 'https://www.gst.gov.in/',
  },
  'gst-rates': {
    title: 'GST rates',
    type: 'concept',
    summary:
      'How the GST rate slabs apply to common goods sold in small shops.',
    paragraphs: [
      'From 22 September 2025, general goods largely follow a two-rate structure: a 5% merit rate and an 18% standard rate, plus a 40% rate for specified luxury and de-merit goods.',
      'Essential items such as fresh produce and unpacked loose grains are exempt. Pre-packaged and labelled staples in retail packs of 25 kg or less generally attract 5%.',
      'Use the HSN search on the GST Portal to look up a specific item, and confirm the rate against the official notifications.',
    ],
    sourceUrl: 'https://www.gst.gov.in/',
  },
};
