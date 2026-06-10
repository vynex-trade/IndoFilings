"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiClock,
    FiUsers,
    FiStar,
    FiBriefcase,
    FiMonitor,
    FiCheck,
    FiCheckSquare
} from "react-icons/fi";
import { BsBuilding, BsShieldCheck, BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";

// --- Outline Accordion (Used for FAQs) ---
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
        <div className="mb-4 border border-[#1d3275] shadow-sm rounded-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
            >
                <span className="text-[15px]">{title}</span>
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

// --- Pricing Card Component ---
const PricingCard = ({
    title,
    turnover,
    price,
    highlight = false,
}: {
    title: string;
    turnover: string;
    price: string;
    highlight?: boolean;
}) => (
    <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col ${highlight ? "border-[#ff6f00] shadow-[#ff6f00]/20" : "border-gray-200"
            }`}
    >
        <div
            className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"
                } text-white text-center py-2 font-bold text-sm tracking-widest uppercase`}
        >
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <p className="text-sm font-semibold text-gray-500 mb-2">Turnover: {turnover}</p>
            <div className="flex justify-center items-center text-3xl font-extrabold text-[#0b1b3d] mb-2">
                <BsCurrencyRupee className="w-6 h-6" />
                {price}
            </div>
            <p className="text-xs text-gray-400 font-bold mb-6">+ 18% GST</p>

            <ul className="space-y-3 mb-8 flex-grow text-left">
                <li className="flex items-start text-gray-700 text-sm font-medium">
                    <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete Annual Filing</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm font-medium">
                    <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Call, Chat & Email Support</span>
                </li>
            </ul>
            <button
                className={`w-full ${highlight
                        ? "bg-[#ff6f00] hover:bg-[#e66400]"
                        : "bg-[#233a85] hover:bg-[#1a2b63]"
                    } text-white font-bold py-3 rounded-md shadow-md transition-colors mt-auto`}
            >
                Select Plan
            </button>
        </div>
    </div>
);

export default function AnnualCompliancePage() {
    const [activeTab, setActiveTab] = useState("pvt");

    const companyTypes = [
        { id: "pvt", label: "Pvt. Ltd. / OPC" },
        { id: "sole", label: "Sole Proprietorship" },
        { id: "llp", label: "LLP" },
        { id: "sec8", label: "Section 8 Company" },
        { id: "pub", label: "Public Limited Company" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Complete Annual Filing & Compliance for All Types of Pvt. Limited / One Person / LLP Company at an Unbeatable Price!
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Let our Experts Start Filing Your Annual Compliance Today! India’s Best Experts Panel Ready to Provide 360° Online Assistance for Your Annual Compliances.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Intro & Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with Annual Compliance & Filing?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Type of Company <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white">
                                    <option value="">Select Type of Company</option>
                                    <option value="pvt">Pvt. Ltd. Company</option>
                                    <option value="opc">One Person Company</option>
                                    <option value="llp">Limited Liability Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Company Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Company Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white">
                                        <option value="">State</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="DL">Delhi</option>
                                        <option value="KA">Karnataka</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">Annual Turnover <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white">
                                        <option value="">Select Range</option>
                                        <option value="upto20">Upto 20 Lakhs</option>
                                        <option value="20to50">20 - 50 Lakhs</option>
                                        <option value="50plus">51 - 100 Lakhs</option>
                                    </select>
                                </div>
                            </div>

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    7 3 2 4
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-[14.5px] mb-6 leading-relaxed text-justify">
                            The Companies Act, 2013 of Indian Govt. legally mandates every entity in the country to follow the declarations of the Annual Compliance. For the Private Limited Companies (Pvt. Ltd.), One Person Companies (OPC), or Limited Liability Partnerships (LLP), Annual Compliance acts as a regular update to the Govt. that the entity is conducting its business under the particular Act.
                        </p>

                        <SolidAccordion title="Benefits of Filing from Online Legal India" defaultOpen={true}>
                            <ul className="space-y-3">
                                {[
                                    "Our customer service is available in English and Hindi",
                                    "Free Annual Compliance Drafting",
                                    "Avail of Free Consultations- contact us to learn more",
                                    "Statutory Audit with Audit Fees",
                                    "Point-to-point update for upcoming compliances & requirements",
                                    "Call, Chat, E-mail, support",
                                    "Avail of your service at the most competitive price",
                                    "Reliable Expert Support"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-[14px]">
                                        <FiCheckCircle className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>

                        <SolidAccordion title="Why Choose Us for Your Annual Compliance?" defaultOpen={true}>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
                                {[
                                    "Our Expert team is ready to serve you",
                                    "Our experienced team will handle your accounts",
                                    "Flawless accounting services",
                                    "Experience 360° Corporate Business Compliance",
                                    "Digital document submission- no paperwork"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-[14px]">
                                        <FiCheck className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. COMPANY TYPES TABS & COMPLIANCE LISTS */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Annual Compliances & Documents
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex overflow-x-auto hide-scrollbar space-x-2 border-b border-gray-200 pb-2 mb-8 justify-start lg:justify-center">
                        {companyTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveTab(type.id)}
                                className={`px-5 py-2.5 text-sm font-bold rounded-full whitespace-nowrap transition-colors ${activeTab === type.id
                                        ? "bg-[#233a85] text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content (Specific to Pvt Ltd/OPC based on prompt) */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
                        <div className="text-center mb-8">
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b1b3d]">
                                Requirements for {companyTypes.find(t => t.id === activeTab)?.label}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Left: Compliances */}
                            <div>
                                <div className="flex items-center mb-5 border-b border-gray-100 pb-3">
                                    <FiBriefcase className="w-6 h-6 text-[#ff6f00] mr-3" />
                                    <h4 className="text-lg font-bold text-[#233a85]">Mandatory Filings</h4>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "ADT – 1: Auditor Appointment",
                                        "AOC – 4: Annual Return Filing (within 30 days of AGM)",
                                        "MGT – 7: Annual Return Filing (within 60 days of AGM)",
                                        "DIR – 3: KYC of the Company Director(s)",
                                        "INC – 20A: Declaration for the commencement of business",
                                        "Financial statement preparation",
                                        "Income Tax Return Filings"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-[14.5px] text-gray-700 font-medium">
                                            <FiCheckCircle className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Documents */}
                            <div>
                                <div className="flex items-center mb-5 border-b border-gray-100 pb-3">
                                    <BsCardChecklist className="w-6 h-6 text-[#ff6f00] mr-3" />
                                    <h4 className="text-lg font-bold text-[#233a85]">Required Documents</h4>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Directors’ Board Meeting minutes",
                                        "Profit & Loss Balance Sheet of Pvt. Ltd./OPC",
                                        "Conclusions from the Annual General Meeting (AGM)",
                                        "Audit report",
                                        "Financial statement preparation (Drafts)",
                                        "Income Tax Return Filings (Previous records)"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-[14.5px] text-gray-700 font-medium">
                                            <FiFileText className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRICING PACKAGES (3 Tiers) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Select Your Annual Filing Plan
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <PricingCard title="Basic" turnover="Upto 20 lakhs" price="14,999" />
                        <PricingCard title="Standard" turnover="20 - 50 lakhs" price="24,999" highlight={true} />
                        <PricingCard title="Premium" turnover="51 - 100 lakhs" price="34,999" />
                    </div>

                    <div className="mt-8 text-center">
                        <span className="bg-gray-100 text-gray-600 font-semibold text-sm py-2 px-4 rounded-md inline-block border border-gray-200">
                            * (Exclusive of govt fees & Audit fees)
                        </span>
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (Stepper) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center relative z-10">
                        {[
                            "Fill the form & Make the payment",
                            "Share required docs post consultation",
                            "Our experts draft the requirements",
                            "Finalizing & Filing post your approval"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[180px]">
                                    <div className="w-16 h-16 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-2xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[14px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <>
                                        <FiArrowRight className="hidden lg:block w-8 h-8 text-[#ff6f00] flex-shrink-0" />
                                        <FiChevronDown className="lg:hidden w-8 h-8 text-[#ff6f00]" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQs */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is Annual Compliance Filing?" defaultOpen={true}>
                            <p className="mb-2">Annual Compliance Filing is a regular update to the Govt. proving that the entity is conducting its business in accordance with the Companies Act. 2013. It has a few essentials like:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>A Board Meeting of the Director(s)</li>
                                <li>Annual General Meeting</li>
                                <li>Appointing an Auditor</li>
                                <li>Annual Registrar of Companies (ROC) filing</li>
                                <li>Income Tax Compliance</li>
                            </ul>
                        </Accordion>
                        <Accordion title="What are the penalties /consequences for late or non-filing of annual return?">
                            Non-filing or late filing attracts hefty penalties per day under the Companies Act, and continuous failure can lead to directors being disqualified or the company being struck off the ROC.
                        </Accordion>
                        <Accordion title="How much will be my Audit Fees?">
                            Audit fees vary based on the scale, turnover, and complexity of your financial statements. Our packages are exclusive of Audit and Govt. fees, which will be communicated transparently.
                        </Accordion>
                        <Accordion title="What are the required documents in the Annual Compliance process?">
                            The general documents include Board Meeting minutes, Profit & Loss Balance Sheet, AGM conclusions, Audit reports, and previous Income Tax Return filings.
                        </Accordion>
                        <Accordion title="When and where the AGM can be conducted?">
                            The Annual General Meeting (AGM) must be held within 6 months from the closure of the financial year. It must be held at the registered office of the company or at some other place within the city, town, or village where the registered office is situated.
                        </Accordion>
                        <Accordion title="Can the board meeting be held through video conferencing?">
                            Yes, under the Companies Act, 2013, board meetings can be held via video conferencing or other audio-visual means, provided they are recorded and comply with the prescribed rules.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}