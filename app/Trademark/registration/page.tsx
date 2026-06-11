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
    FiUsers,
    FiStar,
    FiBriefcase,
    FiGlobe,
    FiAward,
    FiCheckSquare,
    FiTrendingUp,
    FiSearch,
    FiEdit3,
    FiVolume2,
    FiAlertTriangle
} from "react-icons/fi";
import { BsBuilding, BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";

// --- Outline Accordion (FAQs) ---
const Accordion = ({ title, children, defaultOpen = false }: { title: string; children?: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-bold text-[#0b1b3d] hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? <FiMinus className="w-4 h-4 text-[#ff6f00] flex-shrink-0" /> : <FiPlus className="w-4 h-4 text-[#233a85] flex-shrink-0" />}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Solid Blue Accordion (For lengthy text sections) ---
const SolidAccordion = ({ title, children, defaultOpen = false }: { title: string; children?: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mb-4 border border-[#1d3275] shadow-sm rounded-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? <FiMinus className="w-4 h-4 flex-shrink-0 text-white" /> : <FiPlus className="w-4 h-4 flex-shrink-0 text-white" />}
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
    price,
    features,
    highlight = false,
    badge = ""
}: {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
    badge?: string;
}) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full relative ${highlight ? "border-[#ff6f00] shadow-[#ff6f00]/20" : "border-gray-200"}`}>
        {badge && (
            <div className="absolute top-0 right-0 bg-[#ff6f00] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider">
                {badge}
            </div>
        )}
        <div className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"} text-white text-center py-3 font-bold text-sm tracking-widest uppercase min-h-[44px] flex items-center justify-center`}>
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex justify-center items-center text-4xl font-extrabold text-[#0b1b3d] mb-6">
                <BsCurrencyRupee className="w-6 h-6" />
                {price}
            </div>
            <ul className="space-y-3 mb-8 flex-grow text-left">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-[13px] font-medium leading-snug">
                        <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full mt-auto ${highlight ? "bg-[#ff6f00] hover:bg-[#e66400]" : "bg-[#233a85] hover:bg-[#1a2b63]"} text-white font-bold py-3 rounded-md shadow-md transition-colors`}>
                Contact Now
            </button>
        </div>
    </div>
);

export default function TrademarkApplicationPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Expert Assistance for Trademark Application through a Simplified Online Process.
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            Protect your distinctive brand elements, including names, logos, symbols, and taglines, in accordance with applicable rules and Trademark Registry provisions.
                        </p>
                        <div className="bg-[#1d3275] border-l-4 border-[#ff6f00] p-4 rounded-r-lg mb-8 inline-block text-left">
                            <p className="text-sm text-blue-100 leading-relaxed">
                                Eligible MSMEs and startups may qualify for <strong className="text-white">concessional government fees</strong> for trademark applications upon submission of valid supporting documents.
                            </p>
                        </div>

                        {/* Trademark Symbols Row */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {[
                                { symbol: "TM", text: "Trademark" },
                                { symbol: "SM", text: "Service Mark" },
                                { symbol: "®", text: "Registered Mark" },
                                { symbol: "©", text: "Copyright" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                    <span className="font-black text-xl text-[#ff6f00] mr-2">{item.symbol}</span>
                                    <span className="text-sm font-semibold">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help With Trademark Application?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill up the form to get assistance.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Enter Name" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Email Address <span className="text-red-500">*</span></label>
                                <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Without 0 or +91" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    7 1 9 4
                                </div>
                                <input type="text" placeholder="Enter captcha here.." className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Find Your Trademark Class
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. OVERVIEW & CRITERIA */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Get Assistance with your Trademark Application & Protect your Brand name
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-6">
                            A trademark is any mark, logo, name, symbol, letter, figure, or word used by any individual or firm to uniquely identify its goods or services from those made or sold by others. The requirements of the Trade Marks Act 1999 regulate trademark registration. It is vital because the government legally authorises it to grant the owner exclusive rights to the brand, sale, manufacture, and use of products and services.
                        </p>
                    </div>

                    <div className="bg-[#f8f9fc] p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-[#233a85] text-xl mb-3 border-b border-gray-200 pb-2">What are The Eligibility Criteria?</h3>
                        <p className="text-sm text-gray-700 leading-relaxed text-justify">
                            In India, anybody who claims to be the trademark owner (individual, proprietor, corporation) can apply. The "TM" sign can be used within a few days post-filing. The Trade Mark Registry takes a minimum of 6-8 months to register if there's no objection. In case of an objection, it might take up to 18 months. Once registered, the ® symbol can be used. It is valid for ten years from the registration date and can be renewed.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. WHO CAN OPT FOR REGISTRATION (Grid) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Who Can Opt for Trademark Registration?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: "01", title: "Any Individual Person", desc: "Even if not currently in business, individuals can file for a brand name intended for future use." },
                            { num: "02", title: "Shared Ownership", desc: "Joint proprietors of a firm can apply together; both names are listed." },
                            { num: "03", title: "Partnership Firm", desc: "Must include all partners' names (max 10). Guardian name needed if a minor is a partner." },
                            { num: "04", title: "LLP", desc: "Application is in the name of the LLP entity itself, containing all partners' names." },
                            { num: "05", title: "Indian Corporation", desc: "Pvt Ltd, Public Ltd apply in the corporate name. Directors cannot be applicants." },
                            { num: "06", title: "Foreign Corporation", desc: "Must file under the registered foreign corporate name, indicating jurisdiction and an Indian address." },
                            { num: "07", title: "Society or Trust", desc: "Managing trustee, chairman, or secretary must be mentioned when filing on behalf of a trust/society." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative pt-10 hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#233a85] text-white font-black text-xl w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
                                    {item.num}
                                </div>
                                <h3 className="font-bold text-[#0b1b3d] mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. IMPORTANCE OF TRADEMARK (Grid) */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Importance of Trademark Registration in India
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FiShield />, title: "Exceptional Rights", desc: "Owner has complete control, can use the mark for designated classes, and prohibit/sue others for unauthorized violation." },
                            { icon: <FiStar />, title: "Increases Trust and Loyalty", desc: "Signifies reputation and quality. Increases client confidence and establishes loyal, long-term customers." },
                            { icon: <FiBriefcase />, title: "Product Differentiation", desc: "Separates your goods/services from the competition, acting as an efficient advertising tool." },
                            { icon: <FiAward />, title: "Creating Assets", desc: "Functions as an intangible asset on a company's balance sheet that may be sold, franchised, or contracted." },
                            { icon: <FiCheckCircle />, title: "Use of the ® Symbol", desc: "Allows use of the ® sign, serving as a public notice of your exclusive usage rights." },
                            { icon: <FiAlertTriangle />, title: "Protect Against Infringement", desc: "Get injunctions to prevent unauthorized use. Your trademarked logo cannot be used by rivals." },
                            { icon: <FiTrendingUp />, title: "10 Years of Low-Cost Protection", desc: "Inexpensive to maintain online. Protection lasts 10 years and is easily renewable." },
                            { icon: <FiGlobe />, title: "Global Trademark Registration", desc: "A mark registered in India serves as a strong basis for gaining worldwide recognition and registration." },
                            { icon: <FiUsers />, title: "Recruit Human Resources", desc: "Popular brands attract young talent. Registered marks project a favourable corporate image." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0b1b3d] mb-1 text-[15px]">{item.title}</h3>
                                    <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. REGISTRY BACKGROUND & CLASSES (Blue Box) */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-white">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center"><BsBuilding className="text-[#ff6f00] mr-3" /> Background of Trademark Registry</h3>
                        <p className="text-sm text-blue-100 leading-relaxed mb-4">
                            Founded in 1940, followed by the Trademark Act in 1999. The registry administers all laws of the Indian Trademark Act. Headquarters are in Mumbai, with branches in Delhi, Ahmedabad, Chennai, and Kolkata.
                        </p>
                        <h3 className="text-xl font-bold mb-4 mt-8 flex items-center"><FiSearch className="text-[#ff6f00] mr-3" /> Kinds of Registration</h3>
                        <ul className="space-y-3 text-sm text-blue-100">
                            <li><strong className="text-white">Service Mark:</strong> Represents a service (Classes 35-45).</li>
                            <li><strong className="text-white">Marks in Series:</strong> Chain of items sharing suffix/prefix.</li>
                            <li><strong className="text-white">Mark of Sound:</strong> Audio mnemonics connected to a product.</li>
                        </ul>
                    </div>
                    <div className="bg-[#1d3275] p-8 rounded-2xl border border-[#30489e]">
                        <h3 className="text-2xl font-bold mb-4 text-[#ff6f00]">What are Trademark Classes?</h3>
                        <p className="text-sm text-blue-100 leading-relaxed mb-6">
                            There are 45 trademark classes (1-34 for products, 35-45 for services). Selecting the correct class is crucial for validity.
                        </p>
                        <p className="font-bold mb-3">Common Classes in India:</p>
                        <ul className="space-y-2 text-sm text-blue-50">
                            <li className="flex items-center"><FiArrowRight className="text-[#ff6f00] mr-2" /> <strong>Class 9:</strong> Mobile software (App) & electronics.</li>
                            <li className="flex items-center"><FiArrowRight className="text-[#ff6f00] mr-2" /> <strong>Class 25:</strong> Readymade Clothing.</li>
                            <li className="flex items-center"><FiArrowRight className="text-[#ff6f00] mr-2" /> <strong>Class 35:</strong> Business management, advertising, E-commerce.</li>
                            <li className="flex items-center"><FiArrowRight className="text-[#ff6f00] mr-2" /> <strong>Class 41:</strong> Education and entertainment.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. ONLINE PROCEDURE (Accordions) & DOCUMENTS */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">

                    {/* Procedure Accordions */}
                    <div className="md:col-span-7">
                        <h2 className="text-2xl font-extrabold text-[#0b1b3d] mb-6">Online Procedure of Trademark Registration</h2>
                        <SolidAccordion title="1. Search & Selection of Trademark" defaultOpen={true}>
                            Select a unique and distinct mark. Conduct a public search on the Controller General's website to ensure it's not identical/similar to an existing registered mark. Choose your correct classes (1-45).
                        </SolidAccordion>
                        <SolidAccordion title="2. Application Submission (Form TM-A)">
                            You can file a single application for several classes. Electronic filing fees are Rs. 4,500 for Individuals/Startups/MSMEs, and Rs. 9,000 for others. Ensure no mistakes, provide a 9x5 cm image of the mark.
                        </SolidAccordion>
                        <SolidAccordion title="3. Vienna Codification">
                            If the mark contains figurative elements (logos/designs), the Registrar applies the Vienna Classification. Status changes to "Sent to Vienna Codification".
                        </SolidAccordion>
                        <SolidAccordion title="4. Examination & Publication">
                            The Registrar reviews the application. If it passes legal requirements and has no conflicts, it is published in the Indian Trade Mark Journal. Any third party has 4 months to oppose it.
                        </SolidAccordion>
                        <SolidAccordion title="5. Opposition & Hearing (If applicable)">
                            If opposed, you must file a counter-statement within 2 months. Evidence is submitted, and a hearing takes place. The Registrar then decides to accept or reject the application.
                        </SolidAccordion>
                        <SolidAccordion title="6. Issuance of Certificate">
                            If unopposed, or if you win the hearing, the Registrar issues the Registration Certificate. You may now legally use the ® symbol next to your brand.
                        </SolidAccordion>
                    </div>

                    {/* Documents */}
                    <div className="md:col-span-5">
                        <div className="bg-[#f8f9fc] p-8 rounded-xl border border-gray-200 sticky top-6">
                            <h3 className="text-xl font-bold text-[#0b1b3d] mb-6 flex items-center border-b pb-3">
                                <BsCardChecklist className="text-[#ff6f00] mr-3" /> Documents Needed
                            </h3>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Applicant’s / Company Name",
                                    "Business Type & Specific goods/services",
                                    "Brand/logo/slogan image (9x5 cm)",
                                    "Registrant's mailing address with PIN",
                                    "Signed Form-48 (Vakalatnama/Power of Attorney)",
                                    "Signatory ID & Address Evidence",
                                    "Business validation proof",
                                    "MSME / Udyog Aadhar (optional for fee discount)"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-start text-[14px] text-gray-700 font-medium">
                                        <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-[#233a85] hover:bg-[#1a2b63] text-white font-bold py-3 rounded transition-colors text-sm">
                                Apply For Series Trademark
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* 7. VISUAL FLOWCHART UI (Replaces Image) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-2">
                            Trademark Registration Process
                        </h2>
                        <p className="text-sm font-medium text-gray-500">How TM Expert Will Process Your Trademark Registration</p>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Flowchart Container */}
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">

                        {/* Top Linear Path */}
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10 text-center relative">
                            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
                            {[
                                "IP India Search", "Trademark Filing", "Sent to Vienna Code", "Formality Check Pass", "Marked for Exam"
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center bg-white z-10 w-[90px] md:w-[110px]">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#233a85] text-[#233a85] font-bold flex items-center justify-center bg-white mb-2 shadow-sm">
                                        {i + 1}
                                    </div>
                                    <p className="text-[11px] font-bold text-gray-600">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* Branching Path */}
                        <div className="grid md:grid-cols-2 gap-10 md:gap-0 relative">
                            {/* Divider line for desktop */}
                            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 border-dashed border-l"></div>

                            {/* Left Branch: Accepted */}
                            <div className="flex flex-col items-center text-center px-4 md:pr-12 relative">
                                <div className="bg-blue-50 text-[#233a85] px-6 py-2 rounded-full font-bold text-sm border border-[#233a85] mb-6 w-48 shadow-sm">
                                    If ACCEPTED
                                </div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="bg-white border border-gray-200 p-3 rounded text-xs font-semibold text-gray-700 w-48 shadow-sm my-2">Accepted & Advertised</div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="bg-white border border-gray-200 p-3 rounded text-xs font-semibold text-gray-700 w-48 shadow-sm my-2">Journal Copy Issued<br /><span className="text-[10px] text-gray-400 font-normal">(Wait 4 months)</span></div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="bg-[#233a85] text-white p-3 rounded-lg text-sm font-bold w-48 shadow-md mt-2 flex flex-col items-center">
                                    <FiCheckCircle className="mb-1 w-5 h-5 text-[#ff6f00]" />
                                    Registered!
                                </div>
                            </div>

                            {/* Right Branch: Objected */}
                            <div className="flex flex-col items-center text-center px-4 md:pl-12">
                                <div className="bg-orange-50 text-[#ff6f00] px-6 py-2 rounded-full font-bold text-sm border border-[#ff6f00] mb-6 w-48 shadow-sm">
                                    If OBJECTED
                                </div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="bg-white border border-gray-200 p-3 rounded text-xs font-semibold text-gray-700 w-48 shadow-sm my-2">Objection Reply Filing</div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="bg-white border border-gray-200 p-3 rounded text-xs font-semibold text-gray-700 w-48 shadow-sm my-2">Hearing <br /><span className="text-[10px] text-gray-400 font-normal">(If reply not satisfactory)</span></div>
                                <div className="w-px h-8 bg-gray-300"></div>

                                {/* Micro Branch for Hearing result */}
                                <div className="flex gap-4 w-full justify-center my-2">
                                    <div className="bg-gray-100 text-gray-500 p-2 rounded text-xs font-semibold w-24 border border-gray-200">Refused</div>
                                    <div className="bg-white border border-[#233a85] p-2 rounded text-xs font-semibold text-[#233a85] w-24 shadow-sm">Accepted</div>
                                </div>

                                <div className="w-px h-6 bg-gray-300 ml-28"></div> {/* Aligned with Accepted */}
                                <div className="bg-[#233a85] text-white p-3 rounded-lg text-sm font-bold w-48 shadow-md mt-2 flex flex-col items-center">
                                    <FiCheckCircle className="mb-1 w-5 h-5 text-[#ff6f00]" />
                                    Registered!
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 8. PRICING PACKAGES (6 Tiers Grid) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Professional Fees & Packages
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-sm font-bold text-gray-500">* Excluding Govt. fees</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        <PricingCard title="Basic" price="1,999" features={["TM Application Filing", "Free Class Search", "Free Consultation", "Drafting & Filing by Expert", "Use TM next to brand", "EMI Facility"]} />
                        <PricingCard title="Standard" price="4,999" features={["Everything in Basic", "Creative Logo Design (3 choices)", "Expertise TM Search Report", "Consultation till TM mark"]} />
                        <PricingCard title="Premium" price="11,999" highlight={true} badge="Recommended" features={["Everything in Basic", "Expertise TM Search Report", "Consultation till TM mark", "Trademark Objection Reply", "Trademark Hearing Support"]} />
                        <PricingCard title="All In One" price="14,999" features={["Everything in Premium", "Creative Logo Design (3 choices)"]} />
                        <PricingCard title="TM Registration & Objection" price="3,999" features={["TM Application Filing", "Expertise Search Report", "Drafting & Filing", "Trademark Objection Reply"]} />
                        <PricingCard title="TMR & ISO Certificate" price="5,999" features={["TM Application Filing", "ISO Application", "Free Class Search", "Drafting & Filing by Expert", "EMI Facility"]} />
                    </div>
                </div>
            </section>

            {/* 9. HOW WE WORK (Stepper - 6 Steps) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 md:gap-x-4 text-center relative z-10">
                        {[
                            "Fill Form & Make Payment",
                            "Class Search by TM Expert",
                            "Draft Authorization Letter (Form-48)",
                            "Upload Required Documents",
                            "Our Expert Files Application",
                            "Congrats! Use TM next to Brand"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[140px] md:w-[150px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[12px] md:text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <div className="hidden lg:flex items-center mt-4 text-[#ff6f00]">
                                        <FiArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQs */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is a Trademark?" defaultOpen={true}>
                            Trademark is an intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others.
                        </Accordion>
                        <Accordion title="What can be registered as a Trademark?">
                            Any name, word, logo, symbol, sound, colour combination, or 3D shape that is distinctive and capable of distinguishing your goods/services from others can be registered.
                        </Accordion>
                        <Accordion title="What Trademarks are not Registrable?">
                            Marks that are generic, descriptive, deceptive, offensive, identical/similar to existing registered marks, or contain protected emblems/flags cannot be registered.
                        </Accordion>
                        <Accordion title="What is Trademark class?">
                            Goods and services are categorized into 45 different classes by the Registry. You must file your trademark under the specific class(es) that your business operates in.
                        </Accordion>
                        <Accordion title="How long Does it take to file a Trademark application?">
                            Filing the application usually takes 1-3 days once documents are ready. The entire registration process by the government takes 6-18 months depending on objections.
                        </Accordion>
                        <Accordion title="When Can I Use ™ Symbol?">
                            You can start using the ™ symbol immediately after your trademark application is filed and you receive the acknowledgment receipt with the application number.
                        </Accordion>
                        <Accordion title="What if someone has a similar word trademarked?">
                            If it's in the same class, your application will likely face an objection. If it's in a completely different, unrelated class, you might still be able to register it, depending on the uniqueness of the word.
                        </Accordion>
                        <Accordion title="How long is a registered trademark valid for?">
                            A registered trademark is valid for 10 years from the date of filing the application. It can be renewed indefinitely for subsequent 10-year periods.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}