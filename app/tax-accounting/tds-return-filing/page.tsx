"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiFileText,
    FiCreditCard,
    FiHash,
    FiClipboard,
    FiCheck,
} from "react-icons/fi";
import { BsCurrencyRupee, BsShieldCheck } from "react-icons/bs";

// --- Outline Accordion (FAQs) ---
const Accordion = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-bold text-[#0b1b3d] hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 text-[#ff6f00] flex-shrink-0" />
                ) : (
                    <FiPlus className="w-4 h-4 text-[#233a85] flex-shrink-0" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Solid Blue Accordion ---
const SolidAccordion = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mb-3 border border-[#1d3275] shadow-sm rounded-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
            >
                <span className="text-[14px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 flex-shrink-0 text-white" />
                ) : (
                    <FiPlus className="w-4 h-4 flex-shrink-0 text-white" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-[14px] leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Pricing Card ---
const PricingCard = ({
    title,
    period,
    price,
    highlight = false,
}: {
    title: string;
    period: string;
    price: string;
    highlight?: boolean;
}) => (
    <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col ${highlight ? "border-[#ff6f00]" : "border-gray-200"
            }`}
    >
        <div
            className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"
                } text-white text-center py-2 font-bold text-sm tracking-widest uppercase`}
        >
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-gray-500 mb-1">{period}</p>
            <div className="flex items-center text-4xl font-extrabold text-[#0b1b3d] mb-6">
                <BsCurrencyRupee className="w-7 h-7" />
                {price}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
                {[
                    "Dedicated accountant",
                    "Phone, chat & email support",
                    "TDS Computation",
                    "TDS Return Filing",
                ].map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm font-medium">
                        <FiCheck className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full ${highlight
                        ? "bg-[#ff6f00] hover:bg-[#e66400]"
                        : "bg-[#233a85] hover:bg-[#1a2b63]"
                    } text-white font-bold py-3 rounded-md shadow-md transition-colors mt-auto`}
            >
                Register Now
            </button>
        </div>
    </div>
);

export default function TDSReturnFilingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER */}
            <section className="pt-16 pb-8 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Online TDS Return Filing through Online Legal India
                </h1>
                <p className="text-gray-600 font-medium">
                    TDS Return is a quarterly statement submitted by the deductor to the Income Tax Department. The statement shows a summary of all the entries for TDS collected by the deductor and the TDS paid by the deductor to the Income Tax Authority.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Accordions Left, Form + Stats Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN */}
                    <div className="md:col-span-7">
                        {/* Yellow Highlight Banner */}
                        <div className="bg-[#ffc107] text-[#0b1b3d] text-center font-bold text-lg py-4 px-6 rounded-md shadow-sm mb-6">
                            Starts at Rs 2499 quarterly | We value your investment.
                        </div>

                        <SolidAccordion title="When should TDS be deducted and by whom?" defaultOpen={true}>
                            Any person making specified payments mentioned under the Income Tax Act, 1961, are required to deduct TDS at the time of making such specified payment. TDS is a type of Advance Tax which the Government of India levies on a periodic basis. The overall deducted TDS is claimed as tax refund after a taxpayer files the Income Tax Return. TDS return is applicable for multiple types of payments including Salary, Commission earned, Rent, Interest Payment by Bank, Professional Fees, etc.
                        </SolidAccordion>

                        <SolidAccordion title="Who can Deduct TDS?">
                            Any person/entity making specified payments under the Income Tax Act, 1961 is required to deduct TDS — provided they hold a valid TAN (Tax Deduction Account Number).
                        </SolidAccordion>

                        <SolidAccordion title="What is the Due Date for Depositing the TDS to the Government?">
                            The due date for TDS payment through challan is generally the 7th of the next month. For March deductions, Govt. deductors must pay by 7th April and other deductors by 30th April.
                        </SolidAccordion>

                        <SolidAccordion title="How and When the TDS is required to be filed?">
                            TDS Returns are required to be filed quarterly — 31st July (Q1), 31st October (Q2), 31st January (Q3) and 31st May (Q4) for the financial year 2025-26.
                        </SolidAccordion>

                        <SolidAccordion title="Penalties for TDS Non-Compliance">
                            Late deduction attracts 1% interest per month, late payment attracts 1.5% per month, late filing attracts Rs. 200/day, and non-filing can attract penalties from Rs. 10,000 to Rs. 1,00,000.
                        </SolidAccordion>

                        <SolidAccordion title="What Types of Documents are required for TDS returns?">
                            Details of deduction, TAN, Invoices and Challans of TDS payment are required for filing TDS returns.
                        </SolidAccordion>

                        {/* TDS Return Forms */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-700 mb-3">
                                File a TDS with the 360° digital assistance of the TDS Filing Expert Panel from <strong>Online Legal India</strong>. To do so you can avail the filing of the following Return Forms:
                            </p>
                            <div className="bg-[#233a85] text-white font-bold text-sm py-2 px-4 rounded-sm inline-block mb-4">
                                Types TDS return forms:
                            </div>
                            <ul className="space-y-3">
                                {[
                                    { form: "Form 24Q", desc: 'The quarterly statement for tax deducted at source (TDS) from "Salaries."' },
                                    { form: "Form 26Q", desc: "The quarterly statement for tax deducted at source with respect to all payments except 'salaries.'" },
                                    { form: "Form 27Q", desc: "Quarterly statement of deduction of tax from interest, dividend, or other sum payable to non-residents or foreign companies." },
                                    { form: "Form 27EQ", desc: "Quarterly statement of collection of tax at source (TCS)." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        <FiCheckCircle className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            <strong className="text-[#0b1b3d]">{item.form} - </strong>
                                            <span className="text-gray-700">{item.desc}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Form + Stat Cards */}
                    <div className="md:col-span-5">
                        <div className="bg-white p-6 rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-200 mb-6">
                            <h3 className="text-lg font-bold text-[#0b1b3d] mb-5">
                                Apply for TDS Filing form
                            </h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                                <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 rounded transition-colors shadow-md">
                                    Get Started
                                </button>
                            </form>
                        </div>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { big: "1 Lac+", small: "Happy Clients" },
                                { big: "6,000+", small: "Google Reviews" },
                                { big: "Easy EMI", small: "Options" },
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#233a85] text-white rounded-lg p-4 text-center shadow-md"
                                >
                                    <p className="font-extrabold text-lg">{stat.big}</p>
                                    <p className="text-[11px] text-blue-200 font-medium">{stat.small}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TDS DUE DATES TABLE */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            TDS Payment and Return Filing in Every Quarter — Financial Year 2025-2026
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                        <table className="min-w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-[#233a85] text-white text-left">
                                    <th className="py-3 px-4 font-semibold">Month of Deduction</th>
                                    <th className="py-3 px-4 font-semibold">Quarter Period</th>
                                    <th className="py-3 px-4 font-semibold">Due Date for TDS Payment (Govt. & Other Deductors)</th>
                                    <th className="py-3 px-4 font-semibold">Due Date for Filing Return (All Deductors)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {[
                                    ["April-25", "1st April to 30th June (1st Quarter)", "7th May", "31st July 2025"],
                                    ["May-25", "", "7th June", ""],
                                    ["June-25", "", "7th July", ""],
                                    ["July-25", "1st July to 30th September (2nd Quarter)", "7th August", "31st October 2025"],
                                    ["August-25", "", "7th September", ""],
                                    ["September-25", "", "7th October", ""],
                                    ["October-25", "1st October to 31st December (3rd Quarter)", "7th November", "31st Jan 2026"],
                                    ["November-25", "", "7th December", ""],
                                    ["December-25", "", "7th Jan", ""],
                                    ["January-26", "1st January to 31st March (4th Quarter)", "7th Feb", "31st May 2026"],
                                    ["February-26", "", "7th March", ""],
                                    ["March-26", "", "7th April (Govt.) / 30th April (Others)", ""],
                                ].map((row, idx) => (
                                    <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                        <td className="py-2.5 px-4 font-semibold text-[#0b1b3d]">{row[0]}</td>
                                        <td className="py-2.5 px-4">{row[1]}</td>
                                        <td className="py-2.5 px-4">{row[2]}</td>
                                        <td className="py-2.5 px-4 font-semibold text-[#ff6f00]">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. TDS CERTIFICATE TABLE */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            What is TDS Certificate?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
                            Form 16, Form 16A, Form 16B and Form 16C are the types of TDS certificates as per the Govt. guidelines. TDS certificates have to be issued by a person deducting TDS to the assessee from whose income TDS was deducted while making payment. For instance, banks issue Form 16A to the depositor when TDS is deducted on interest from fixed deposits. Form 16 is issued by the employer to the employee.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                        <table className="min-w-full bg-white text-sm">
                            <thead>
                                <tr className="bg-[#233a85] text-white text-left">
                                    <th className="py-3 px-4 font-semibold">Form</th>
                                    <th className="py-3 px-4 font-semibold">Issued For</th>
                                    <th className="py-3 px-4 font-semibold">Frequency</th>
                                    <th className="py-3 px-4 font-semibold">Due Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {[
                                    ["Form 16", "Employer to the employees as proof of deduction of tax", "Yearly once", "June 15 every year"],
                                    ["Form 16A", "Payments other than salaries i.e., commission, professional fee, rent, works contract, payments made to Non-Residents, interest, winnings from lottery, Dividends etc.", "Quarterly", "15th Aug (Apr-Jun), 15th Nov (Jul-Sep), 15th Feb (Oct-Dec), 15th Jun (Jan-Mar)"],
                                    ["Form 16B", "Purchase of property by resident buyer to the resident seller of the property", "Every transaction", "15 days from due date of filing Form 26QB"],
                                    ["Form 16C", "Resident tenant to the resident Landlord on payments of rent", "Every transaction", "15 days from due date of filing Form 26QC"],
                                    ["Form 16D", "Contractual/professional services to resident contractors and professionals — Payments of Contract or Professional fee", "Every transaction", "15 days from due date of filing Form 26QD"],
                                    ["Form 16E", "Buyer of virtual digital asset (VDA) to resident seller of VDA", "Every transaction", "15 days from due date of filing Form 26QE"],
                                ].map((row, idx) => (
                                    <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                        <td className="py-2.5 px-4 font-bold text-[#0b1b3d] whitespace-nowrap">{row[0]}</td>
                                        <td className="py-2.5 px-4">{row[1]}</td>
                                        <td className="py-2.5 px-4 whitespace-nowrap">{row[2]}</td>
                                        <td className="py-2.5 px-4 text-[#ff6f00] font-semibold">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (6 Steps) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">How Do We Work?</h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 text-center">
                        {[
                            "Fill up the form",
                            "Make the payment",
                            "Get the Call from TDS Filing Expert",
                            "Upload the Details & Tax Payment Challan",
                            "TDS Filing Expert will file your return",
                            "Return Filed Successfully!",
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[130px] md:w-[145px]">
                                    <div className="w-12 h-12 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <div className="hidden lg:flex items-center mt-3 text-[#ff6f00]">
                                        <FiArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. PACKAGES */}
            <section className="bg-[#f8f9fc] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">Select Package</h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        <PricingCard title="Basic" period="Quarterly" price="2,499" />
                        <PricingCard title="Standard" period="Half Yearly" price="3,999" highlight={true} />
                        <PricingCard title="Premium" period="Yearly" price="9,999" />
                    </div>
                </div>
            </section>

            {/* 7. DOCUMENTS REQUIRED */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Documents Required for TDS Filing
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <FiClipboard className="w-6 h-6 text-[#233a85]" />, title: "Details of Deduction", desc: "Complete details of all deductions made." },
                            { icon: <FiHash className="w-6 h-6 text-[#233a85]" />, title: "Your TAN", desc: "Tax Deduction Account Number (mandatory)." },
                            { icon: <FiFileText className="w-6 h-6 text-[#233a85]" />, title: "Invoice", desc: "Relevant invoices for the transactions." },
                            { icon: <FiCreditCard className="w-6 h-6 text-[#233a85]" />, title: "Challans of TDS Payment", desc: "Challans confirming TDS payments made." },
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                                    {doc.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0b1b3d] mb-2">{doc.title}</h3>
                                <p className="text-[14px] text-gray-500 font-medium">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. ADVANTAGES */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">Advantages of TDS Filing</h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Prevention from Excluding Tax", desc: "No one can flee away without filing a TDS at the source of income." },
                            { title: "Convenience to the Deductee", desc: "As Tax is automatically deducted, it gives more convenience to the deductee." },
                            { title: "Wide Base", desc: "The base of Tax Collection is widened because it is levied at every source of income." },
                            { title: "Source of Revenue", desc: "Makes a certain and steady source of revenue for the Government." },
                            { title: "Lessens the Workload", desc: "TDS Filing diminishes the responsibility of the Tax Collection Agencies too." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                                <BsShieldCheck className="w-8 h-8 text-[#ff6f00] mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-[#0b1b3d] mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. IMPORTANT POINTS */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">Important Points</h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "TAN is mandatory", desc: "It is a mandatory requirement for any kind of TDS filing. It should also be mentioned on the Tax Deduction Certificate." },
                            { title: "Digital Signature Certificate is obligatory", desc: "Every Deductee needs to use the Digital Signature Certificate (DSC) in the TDS Filing process." },
                            { title: "Clarified details", desc: "The furnished details here provide a clarified picture of the tax levied on the particular deductee." },
                        ].map((point, idx) => (
                            <div key={idx} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                <div className="w-10 h-10 bg-[#233a85] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                                    {idx + 1}
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-bold text-[#0b1b3d] mb-1">{point.title}</h3>
                                    <p className="text-sm text-gray-600">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQs */}
            <section className="bg-[#f8f9fc] py-20 px-4 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What happens if I delay in TDS Return Filing?" defaultOpen={true}>
                            <ul className="space-y-2 list-disc pl-5">
                                <li><strong>For non-deduction of TDS:</strong> When a deductor/collector fails to gather the tax at source, the whole of such expenses can be disallowed and not computed by the income tax assessing officer.</li>
                                <li><strong>For late-deduction of TDS:</strong> When tax at source is deducted after a few days of making the payment, 1% tax is levied per month.</li>
                                <li><strong>For late-payment of TDS:</strong> A tax of 1.5% per month is levied if the deductors fail to deposit TDS on time.</li>
                                <li><strong>For late-filing of TDS Returns:</strong> If a deductor fails to furnish the TDS return before the time, a penalty of INR 200 is levied per day.</li>
                                <li><strong>For non-filing of TDS Returns:</strong> Penalty ranging from INR 10,000 to INR 1,00,000 can be charged when one fails to file a TDS return within the due date.</li>
                            </ul>
                        </Accordion>
                        <Accordion title="What to do if the TDS credit is not reflected in Form-26AS?">
                            If TDS credit is not reflected in Form 26AS, you should contact the deductor to verify whether the TDS return was filed correctly with your correct PAN details.
                        </Accordion>
                        <Accordion title="What are the required documents to file TDS?">
                            Details of deduction, your TAN, invoices, and challans of TDS payment are required for filing TDS returns.
                        </Accordion>
                        <Accordion title="What is Form No. 27A in TDS?">
                            Form 27A is a summary control sheet of the TDS/TCS return which must be filed along with the quarterly statements. It summarizes the totals of amount paid and tax deducted.
                        </Accordion>
                        <Accordion title="What are Form 24, 26, and 27 in TDS Filing?">
                            Form 24 is for salary TDS details, Form 26 is for TDS on payments other than salaries, and Form 27 is for TDS on payments made to non-residents.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}