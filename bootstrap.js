// // // bootstrap.js

// const db = require('./config/dataBase');


// const experiences = [
//     {
//         role: "Manager Accounts",
//         company: "Al-Kabir Developers · Full-time",
//         duration: "Aug 2021 - Present · 3 yrs 1 mo",
//         location: "Lahore",
//         responsibilities: [
//             "General Ledger Management",
//             "Budgeting and Forecasting",
//             "Internal Controls",
//             "Audit Coordination",
//             "Accounts Payable and Receivable",
//             "Financial Analysis",
//             "Monthly budgeting & Forecasting, and BOQs",
//             "Supervision and finalizing of all Vouchers (BPV, CPV, JV, CR & BR).",
//             "Tax Compliance, Manage tax provision and tax compliance process.",
//             "Financial Reporting",
//             "Prepare and deposit withholding tax payments sales tax and income tax.",
//             "Providing & receiving sales tax & income tax withholding challan.",
//             "Providing tax reviews after proper verifications.",
//             "Resolve daily tax queries related to ST and IT.",
//             "Strong follow-ups related to tax matters with the concerned departments.",
//             "Update with current laws, rules & regulations of sales & income taxes.",
//             "Daily reporting of all the current and pending issues related to taxation.",
//             "Coordinates and interacts with vendors doing business for verification and quotation.",
//             "Participates in the development, implementation, and maintenance of policies.",
//             "Preparation of trial balance and journals for complete financial information.",
//             "Managing sales revenue by incorporating discount policies as per normal business practices.",
//             "Manage all accounting transactions",
//             "Preparing invoices, credit, and debit notes, and updating customers for their statement of account",
//             "Review businesses' accounting procedures.",
//             "Prepare Bank reconciliation statement. on monthly & daily basis",
//             "Prepare financial statements and reports for clients or company management.",
//             "Handle monthly, quarterly, and annual closings",
//             "Monitoring the Capital Expenditures allocated to each location.",
//             "Preparation of TMA Fee, Stamp Duty, and E Stamp paper.",
//             "Preparation of cash movement like inflow and outflow of cash & different sector-wise break-ups.",
//             "Assistance in the preparation of the Final Accounts.",
//             "Checking and posting of daily cash payment vouchers.",
//         ],
//     },
//     {
//         role: "Regional Accounts Manager",
//         company: "Orient Traders International · Full-time",
//         duration: "Feb 2014 - Aug 2021 · 7 yrs 7 mos",
//         location: "Faisalabad · On-site",
//         responsibilities: [
//             "Preparing Reconciliation of Banks, Cash, Receivables, Payables, Loans, Security deposits from customers and Accrued Expenses.",
//             "Manage all accounting transactions",
//             "Preparing invoices, credit and debit notes, and updating customers for their statement of account Review businesses' accounting procedures.",
//             "Prepare Bank reconciliation statement. on monthly & daily basis",
//             "Prepare financial statements and reports for clients or company management.",
//             "Handle monthly, quarterly, and annual closings",
//             "Monitoring the Capital Expenditures allocated to each location.",
//             "Assistance in the preparation of the Final Accounts.",
//             "Reconciliation of parties ledgers on Monthly Basis",
//             "Checking and posting of daily cash payment voucher",
//             "Checking of Store inventory control systems & physically stocktaking",
//             "Preparation of Goods Receipt Note (GRN) & Good Issue Note (GIN)",
//             "Organizes staff traveling, boarding and lodging, etc. and handles their travel claims.",
//             "Checks travel expense statements of staff for approval by the superior.",
//         ],
//     },
//     {
//         role: "Assistant Manager Accounts",
//         company: "Supreme Gas Industries (Pvt) Ltd · Full-time",
//         duration: "Aug 2009 - Feb 2014 · 4 yrs 7 mos",
//         location: "Gujranwala, Punjab, Pakistan",
//         responsibilities: [
//             "Preparing invoices, credit and debit notes, and updating customers for their statement of account.",
//             "Review businesses' accounting procedures.",
//             "Prepare Bank reconciliation statement on monthly & daily basis.",
//             "Handling cheques and their allocation.",
//             "Prepare financial statements and reports for clients or company management.",
//             "Record the amount of money spent and received daily by clients or company management, using computer cash-flow software.",
//             "Monitoring the Capital Expenditures allocated to each location.",
//             "Assistance in preparation of the Final Accounts.",
//             "Reconciliation of parties ledgers on Monthly Basis.",
//             "Checking and posting of daily cash payment voucher.",
//             "Checking of Store inventory control systems & physically stocktaking.",
//             "Preparation of Goods Receipt Note (GRN) & Good Issue Note (GIN).",
//         ],
//     },
//     {
//         role: "Accountant",
//         company: "Al Baraka Textiles Industries (Pvt) Ltd · Full-time",
//         duration: "Jun 2005 - Jul 2006 · 1 yr 2 mos",
//         location: "Lahore, Punjab, Pakistan",
//         responsibilities: [
//             "Preparing invoices, credit and debit notes and update customers for their statement of account.",
//             "Prepare Bank reconciliation statement on monthly & daily basis.",
//             "Handling cheques and their allocation.",
//             "Prepare financial statements and reports for clients or company management.",
//             "Record the amount of money spent and received daily by clients or company management.",
//         ]
//     },
// ];


// const educationData = [
//     {
//         degree: "MBA-Finance, Accounting and Finance",
//         institution: "National University of Modern Languages (NUML)",
//         duration: "Jun 2006 - Jun 2008",
//         location: "Islamabad, Pakistan",
//     },
//     {
//         degree: "Bachelor of Commerce (B.Com)",
//         institution: "Govt College of Commerce Jhang",
//         duration: "Aug 2003 - Jun 2005",
//         location: "Jhang, Pakistan",
//     },
// ];


// const skills = [
//     "Financial Analysis",
//     "Budgeting and Forecasting",
//     "Taxation",
//     "Auditing",
//     "Financial Reporting",
//     "Risk Management",
//     "Investment Strategies",
//     "Cost Accounting",
//     "Financial Modeling",
//     "Regulatory Compliance",
//     "Data Analysis",
//     "Strategic Planning",
// ];


// const services = [
//     { name: "Accounting" },
//     { name: "Real Estate" },
//     { name: "Bookkeeping" },
//     { name: "Financial Accounting" },
//     { name: "Administrative Assistance" },
//     { name: "Data Entry" },
//     { name: "Invoice Processing" },
//     { name: "Payroll Services" },
//     { name: "Personal Assistance" },
//     { name: "Virtual Assistance" },
//     { name: "Taxation" },
//     { name: "Auditing" },
// ];




// const bootstrapData = async () => {
//     try {
//         const batch = db.batch();

//         experiences.forEach((exp, index) => {
//             const docRef = db.collection('experiences').doc(`experience_${index + 1}`);
//             batch.set(docRef, exp);
//         });

//         educationData.forEach((edu, index) => {
//             const docRef = db.collection('education').doc(`education_${index + 1}`);
//             batch.set(docRef, edu);
//         });

//         skills.forEach((skill, index) => {
//             const docRef = db.collection('skills').doc(`skill_${index + 1}`);
//             batch.set(docRef, { name: skill });
//         });

//         services.forEach((service, index) => {
//             const docRef = db.collection('services').doc(`service_${index + 1}`);
//             batch.set(docRef, service);
//         });

//         await batch.commit();
//         console.log('Data bootstrapped successfully!');
//     } catch (error) {
//         console.error('Error bootstrapping data:', error);
//     }
// };

// bootstrapData();