// GST facts for the chat-column ticker.
// Every fact is taken from a file in backend/src/main/resources/docs/.
// "section" points to the heading in that file, so you can check it quickly.
// Facts about the 57th GST Council, special-category state lists, and the
// registration threshold effective dates are left out until they are confirmed.
export const gstFacts = [
    // Rates
    { text: 'Under the current rate structure, most general goods are taxed at 5% (merit rate) or 18% (standard rate), with a 40% special rate for luxury and de-merit goods such as aerated drinks and large cars.', source: 'gst-rates.md', section: 'Current GST rate slabs in India' },
    { text: 'Biscuits, cakes and pastries attract 5% GST, reduced from 18%.', source: 'gst-rates.md', section: 'Verified rates for packaged snacks' },
    { text: 'Toilet soap bars attract 5% GST, reduced from 18%. Liquid soap, handwash and washing detergents remain at 18%.', source: 'gst-rates.md', section: 'Verified rates for other daily grocery items' },
    { text: 'Edible oils, sugar and tea attract 5% GST.', source: 'gst-rates.md', section: 'Verified rates for other daily grocery items' },
    { text: 'Rice, wheat, atta, maida and pulses attract 5% GST only when sold pre-packaged and labelled in retail packs of 25 kg or less (or 25 litres or less for liquids).', source: 'gst-rates.md', section: 'Pre-packaged versus loose grocery staples' },
    { text: 'Loose staples weighed in front of the customer are exempt (0% GST).', source: 'gst-rates.md', section: 'Pre-packaged versus loose grocery staples' },
    { text: 'Ballpoint pens, fountain pens, markers and pen parts attract 18% GST.', source: 'gst-rates.md', section: 'Verified rates for stationery items' },
    { text: 'Geometry and mathematical boxes attract 5% GST.', source: 'gst-rates.md', section: 'Verified rates for stationery items' },
    { text: 'Registers, account books, diaries and folders remain at 18% GST.', source: 'gst-rates.md', section: 'Verified rates for stationery items' },
    { text: 'You can check any product\'s GST rate on the GST Portal under Services > User Services > Search HSN Code. Enter at least 3 digits of the HSN code or 3 characters of the product name.', source: 'gst-rates.md', section: 'How to find the GST rate for any shop item' },
    { text: 'Results from the GST Portal HSN search are for guidance only and are not legally binding. Confirm the final rate in the official CBIC rate notifications.', source: 'gst-rates.md', section: 'How to find the GST rate for any shop item' },

    // Registration
    { text: 'A supplier of services, or of both goods and services, must register if aggregate turnover in a financial year exceeds Rs. 20 lakh.', source: 'registration.md', section: 'Turnover threshold for goods and services suppliers' },
    { text: 'For suppliers of goods only, the registration limit is Rs. 40 lakh.', source: 'registration.md', section: 'Turnover threshold for goods and services suppliers' },
    { text: 'Earning exempt bank interest or discounts does not stop a shop from being treated as a goods-only supplier.', source: 'registration.md', section: 'Turnover threshold for goods and services suppliers' },
    { text: 'Some businesses must register even below the threshold, including anyone making inter-State taxable supplies (Section 24).', source: 'registration.md', section: 'Who must register regardless of turnover' },
    { text: 'Casual taxable persons, such as temporary exhibition sellers, must register regardless of turnover.', source: 'registration.md', section: 'Who must register regardless of turnover' },
    { text: 'You must apply for GST registration within 30 days from the date you become liable to register (Section 25(1)).', source: 'registration.md', section: 'Time limit for applying and approval speed' },
    { text: 'A PAN is mandatory for GST registration (Section 25(6)).', source: 'registration.md', section: 'Basic documents required for a small shop' },
    { text: 'For shop address proof, you can use an electricity bill, property tax receipt, municipal khata copy, rent or lease agreement, or consent letter.', source: 'registration.md', section: 'Basic documents required for a small shop' },
    { text: 'Bank account details are not needed to apply. They must be uploaded within 30 days of the registration grant, or before filing GSTR-1 or IFF, whichever is earlier (Rule 10A).', source: 'registration.md', section: 'Basic documents required for a small shop' },
    { text: 'Normal registration applications are usually approved within 7 working days (Rule 9(1)). They can take up to 30 days if Aadhaar authentication is not done or a physical verification is needed.', source: 'registration.md', section: 'Time limit for applying and approval speed' },

    // Composition scheme
    { text: 'Under the Composition Scheme, a trader pays 1% tax (0.5% CGST + 0.5% SGST) on taxable turnover in the State.', source: 'composition-scheme.md', section: 'Composition Scheme tax rates' },
    { text: 'Under the Composition Scheme, a restaurant not serving alcohol pays 5% tax (2.5% CGST + 2.5% SGST) on turnover in the State.', source: 'composition-scheme.md', section: 'Composition Scheme tax rates' },
    { text: 'Under the Composition Scheme, service providers and mixed suppliers pay 6% tax (3% CGST + 3% SGST) on turnover in the State.', source: 'composition-scheme.md', section: 'Composition Scheme tax rates' },
    { text: 'The general turnover limit for the Composition Scheme for goods suppliers and restaurants is Rs. 1.5 crore in the preceding financial year.', source: 'composition-scheme.md', section: 'Turnover limits for the Composition Scheme' },
    { text: 'A composition dealer cannot collect GST from customers and cannot claim Input Tax Credit (ITC).', source: 'composition-scheme.md', section: 'Main conditions and restrictions' },
    { text: 'A composition dealer cannot make inter-State sales of goods or services.', source: 'composition-scheme.md', section: 'Main conditions and restrictions' },
    { text: 'A composition dealer must write "composition taxable person, not eligible to collect tax on supplies" at the top of every Bill of Supply, and display "composition taxable person" on the shop signboard (Rule 5(1)(f)-(g)).', source: 'composition-scheme.md', section: 'Main conditions and restrictions' },
    { text: 'Since 1 October 2023, composition dealers can sell goods within the same State through e-commerce operators.', source: 'composition-scheme.md', section: 'Ineligible manufacturers and e-commerce rules' },
    { text: 'Ice cream, pan masala, tobacco and aerated water manufacturers cannot opt for the Composition Scheme.', source: 'composition-scheme.md', section: 'Ineligible manufacturers and e-commerce rules' },
    { text: 'If a composition dealer becomes ineligible, they must file FORM GST CMP-04 within 7 days.', source: 'composition-scheme.md', section: 'Main conditions and restrictions' },

    // Filing and late fees
    { text: 'Monthly GSTR-1 filers must file by the 11th of the next month. Monthly filing is mandatory if previous-year turnover exceeds Rs. 5 crore.', source: 'filing-deadlines.md', section: 'GSTR-1 frequency and due dates' },
    { text: 'Small taxpayers with previous-year turnover up to Rs. 5 crore can file GSTR-1 quarterly under QRMP, by the 13th of the month after the quarter.', source: 'filing-deadlines.md', section: 'GSTR-1 frequency and due dates' },
    { text: 'Monthly GSTR-3B is due by the 20th of the next month.', source: 'filing-deadlines.md', section: 'GSTR-3B frequency and due dates' },
    { text: 'Under QRMP, GSTR-3B is due by the 22nd for Group 1 States and UTs, and by the 24th for Group 2.', source: 'filing-deadlines.md', section: 'GSTR-3B frequency and due dates' },
    { text: 'Composition dealers pay tax quarterly using FORM GST CMP-08, due by the 18th of the month after each quarter.', source: 'filing-deadlines.md', section: 'Composition Scheme returns (CMP-08 and GSTR-4)' },
    { text: 'Composition dealers file one annual return in FORM GSTR-4. From FY 2024-25, the due date is 30 June following the financial year.', source: 'filing-deadlines.md', section: 'Composition Scheme returns (CMP-08 and GSTR-4)' },
    { text: 'The statutory late fee is Rs. 100 per day under CGST, plus an equal SGST late fee (Section 47(1)).', source: 'filing-deadlines.md', section: 'Late fee basics and current caps' },
    { text: 'Under current waiver notifications, the daily late fee for normal GSTR-1, GSTR-3B and GSTR-4 returns is Rs. 50 per day in total (Rs. 25 CGST + Rs. 25 SGST). For Nil returns it is Rs. 20 per day in total.', source: 'filing-deadlines.md', section: 'Late fee basics and current caps' },
    { text: 'Total late fees per return are capped. For Nil returns the cap is Rs. 500, and for turnover up to Rs. 1.5 crore it is Rs. 2,000.', source: 'filing-deadlines.md', section: 'Late fee basics and current caps' },
    { text: 'There is no late fee on FORM GST CMP-08 or PMT-06.', source: 'filing-deadlines.md', section: 'Late fee basics and current caps' },
    { text: 'GSTR-1 and GSTR-3B cannot be filed more than 3 years after their due date (Sections 37(5) and 39(11)).', source: 'filing-deadlines.md', section: 'Recent return filing updates (2024-2026)' },

    // Invoicing
    { text: 'A tax invoice must show your shop name, address and GSTIN, a consecutive serial number unique to the financial year, and the date of issue (Rule 46(a)-(c)).', source: 'invoicing-basics.md', section: 'Mandatory supplier and buyer details on a tax invoice (Rule 46)' },
    { text: 'The invoice serial number can be up to 16 characters, using letters, numbers, "-" or "/".', source: 'invoicing-basics.md', section: 'Mandatory supplier and buyer details on a tax invoice (Rule 46)' },
    { text: 'For an unregistered buyer with a taxable value of Rs. 50,000 or more, the invoice must include the buyer\'s name, address and State (Rule 46(e)-(f)).', source: 'invoicing-basics.md', section: 'Mandatory supplier and buyer details on a tax invoice (Rule 46)' },
    { text: 'For sales below Rs. 200 to unregistered buyers who do not ask for an invoice, you can issue one consolidated tax invoice at the end of the day instead of one per sale.', source: 'invoicing-basics.md', section: 'Small-value sales below Rs. 200' },
    { text: 'A Bill of Supply is used for exempt goods or services, or when you pay tax under the Composition Scheme (Section 31(3)(c), Rule 49).', source: 'invoicing-basics.md', section: 'When a Bill of Supply or Invoice-cum-Bill of Supply is used' },
    { text: 'A tax invoice must carry the supplier\'s signature or digital signature (Rule 46(q)).', source: 'invoicing-basics.md', section: 'Signature, QR code, and special declarations (Rule 46)' },
    { text: 'For taxable services, a tax invoice must be issued within 30 days of supply (Rule 47).', source: 'invoicing-basics.md', section: 'When a tax invoice is required' },
];