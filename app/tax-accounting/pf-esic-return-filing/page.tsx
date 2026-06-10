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
    FiCalendar,
    FiAward,
    FiBriefcase,
    FiActivity,
    FiCheckSquare
} from "react-icons/fi";
import { BsBuilding, BsShieldCheck, BsCurrencyRupee } from "react-icons/bs";

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

// --- Pricing Card ---
const PricingCard = ({
    title,
    employees,
    price,
    highlight = false,
}: {
    title: string;
    employees: string;
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
            <p className="text-sm font-semibold text-gray-500 mb-2">Upto {employees} Employees</p>
            <div className="flex justify-center items-center text-3xl font-extrabold text-[#0b1b3d] mb-2">
                <BsCurrencyRupee className="w-6 h-6" />
                {price}
            </div>
            <p className="text-xs text-gray-400 font-bold mb-6">+ 18% GST</p>

            <ul className="space-y-3 mb-8 flex-grow text-left">
                <li className="flex items-start text-gray-700 text-sm font-medium">
                    <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Call, Chat, Email Support</span>
                </li>
                <li className="flex items-start text-gray-700 text-sm font-medium">
                    <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                    <span>No hidden charges</span>
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

export default function PFESICReturnFilingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Proficient Expert for PF & ESIC Return Filing Online
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Avoid complications and errors. Let a dedicated Expert help you file your monthly PF and ESI returns seamlessly and on time.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Intro & Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with PF & ESI Returns?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Number of Employees <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select Employee Count</option>
                                    <option value="10">Upto 10 Employees</option>
                                    <option value="20">Upto 20 Employees</option>
                                    <option value="30">Upto 30 Employees</option>
                                    <option value="40">Upto 40 Employees</option>
                                    <option value="50">Upto 50 Employees</option>
                                    <option value="50+">More than 50 Employees</option>
                                </select>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Get Expert Assistance
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information */}
                    <div className="md:col-span-7 pt-2">
                        <SolidAccordion title="PF Return Filing & Deadlines" defaultOpen={true}>
                            <p className="mb-3 text-justify">
                                All employees with PF registration are responsible for PF returns at regular intervals. According to government regulations, the <strong>25th of each month</strong> is the last due date for employers to contribute to PF for employees. Today, employers can easily file their monthly PF through a unified portal (EPFO).
                            </p>
                            <p className="text-justify">
                                Employers are required to submit various data about the employers, employees, PF account number of the employees, amount contributed from both ends, and details of employers covered under the EPF scheme. Online Legal India will take on the entire burden related to EPF return filling.
                            </p>
                        </SolidAccordion>

                        <SolidAccordion title="ESI Return Filing & Deadlines" defaultOpen={true}>
                            <p className="mb-3 text-justify">
                                As ESI registration is mandatory for business entities or companies, ESI Return filling is mandatory for them. Employees’ State Insurance scheme helps employees with some social security as well as health benefits.
                            </p>
                            <p className="text-justify mb-3">
                                According to the ESI Act, employers must file ESI returns for six months or each month. The company must contribute it <strong>on or before the 15th of each month</strong>.
                            </p>
                            <p className="text-justify font-medium text-[#0b1b3d]">
                                If you want to pay half-yearly:
                                <br />• For 1st April to 30th Sept: Due date is <strong>12th November</strong>
                                <br />• For 1st October to 31st March: Due date is <strong>12th May</strong>
                            </p>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. PENALTIES SECTION (Two Tables Side by Side) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Penalties for Late Filing
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">The employers will face strict penalties for not filing PF and ESI on time.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* PF Penalty Table */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                            <div className="bg-[#233a85] text-white text-center py-3 font-bold uppercase tracking-widest text-sm">
                                PF Filing Penalties
                            </div>
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-bold text-[#0b1b3d]">Delays</th>
                                        <th className="py-3 px-4 text-left font-bold text-[#0b1b3d]">Penalty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">0-2 Months</td><td className="py-3 px-4 text-[#ff6f00] font-bold">5% per annum</td></tr>
                                    <tr className="border-b border-gray-100 bg-gray-50"><td className="py-3 px-4 font-semibold">2-4 Months</td><td className="py-3 px-4 text-[#ff6f00] font-bold">10% per annum</td></tr>
                                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">4-6 Months</td><td className="py-3 px-4 text-[#ff6f00] font-bold">15% per annum</td></tr>
                                    <tr className="bg-gray-50"><td className="py-3 px-4 font-semibold">6+ Months</td><td className="py-3 px-4 text-[#ff6f00] font-bold">25% p.a. (Max 100%)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* ESI Penalty Table */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                            <div className="bg-[#ff6f00] text-white text-center py-3 font-bold uppercase tracking-widest text-sm">
                                ESI Filing Penalties
                            </div>
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-bold text-[#0b1b3d]">Duration</th>
                                        <th className="py-3 px-4 text-left font-bold text-[#0b1b3d]">Penalty</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">Less than 2 Months</td><td className="py-3 px-4 text-[#233a85] font-bold">5%</td></tr>
                                    <tr className="border-b border-gray-100 bg-gray-50"><td className="py-3 px-4 font-semibold">2-4 Months</td><td className="py-3 px-4 text-[#233a85] font-bold">10%</td></tr>
                                    <tr className="border-b border-gray-100"><td className="py-3 px-4 font-semibold">4-6 Months</td><td className="py-3 px-4 text-[#233a85] font-bold">15%</td></tr>
                                    <tr className="bg-gray-50"><td className="py-3 px-4 font-semibold">6 Months and above</td><td className="py-3 px-4 text-[#233a85] font-bold">25%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BENEFITS (PF vs ESI Side-by-Side) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Benefits of Filing on Time
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                        {/* PF Benefits */}
                        <div className="bg-[#233a85] rounded-2xl p-8 text-white shadow-lg flex flex-col h-full">
                            <div className="flex items-center justify-center mb-8 border-b border-blue-800 pb-4">
                                <FiBriefcase className="w-8 h-8 text-[#ff6f00] mr-3" />
                                <h3 className="text-2xl font-bold">PF Return Filing</h3>
                            </div>
                            <div className="space-y-6 flex-grow">
                                <div>
                                    <h4 className="font-bold text-[#ff6f00] mb-1">Compliance with the law</h4>
                                    <p className="text-sm text-blue-50 leading-relaxed">Mandatory for companies meeting the terms of The Employees’ Provident Funds Act, 1952 to avoid strict penalties.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ff6f00] mb-1">Employee Security</h4>
                                    <p className="text-sm text-blue-50 leading-relaxed">Employer's contribution helps employee social security when they are in need or after retirement.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ff6f00] mb-1">Tax Benefits</h4>
                                    <p className="text-sm text-blue-50 leading-relaxed">Contributions help employers claim tax exemptions as the contributions are heavily tax-deductible.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#ff6f00] mb-1">Organized Record Maintenance</h4>
                                    <p className="text-sm text-blue-50 leading-relaxed">Regular contribution prevents hazardous payroll management and eliminates data maintenance complications.</p>
                                </div>
                            </div>
                        </div>

                        {/* ESIC Benefits */}
                        <div className="bg-white border-2 border-[#233a85] rounded-2xl p-8 shadow-lg flex flex-col h-full">
                            <div className="flex items-center justify-center mb-8 border-b border-gray-200 pb-4">
                                <FiActivity className="w-8 h-8 text-[#ff6f00] mr-3" />
                                <h3 className="text-2xl font-bold text-[#0b1b3d]">ESI Return Filing</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Compliance</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Avoids fines or charges for not following ESI Act rules.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Employee Welfare</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Ensures financial and medical support during sickness or pregnancy.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Medical Support</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Employees and family members receive free medical treatment.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Clear Data</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Maintains clear records for mandatory audit report submissions.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Jobless Support</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Financial support available via partial or full withdrawal if jobless.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#233a85] mb-1 text-sm">Trust & Loyalty</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">Builds confidence and loyalty in employees towards the company.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PRICING PACKAGES (5 Tiers) */}
            <section className="bg-[#f8f9fc] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Package Details for PF & ESI Returns
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">Contact us for any number of employees, special charges are available!</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-center">
                        <PricingCard title="Plan 1" employees="10" price="2,499" />
                        <PricingCard title="Plan 2" employees="20" price="3,980" />
                        <PricingCard title="Plan 3" employees="30" price="4,999" highlight={true} />
                        <PricingCard title="Plan 4" employees="40" price="5,699" />
                        <PricingCard title="Plan 5" employees="50" price="6,799" />
                    </div>
                </div>
            </section>

            {/* 6. DOCUMENTS REQUIRED FOR ESI */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Essential Documents for Filing ESI Returns
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Attendance register",
                            "Register of wages",
                            "Accident Records",
                            "Abstention verification Report",
                            "Inspection book",
                            "Cancelled cheque of the Company",
                            "PAN Card of the organization",
                            "Form 6 filling out and submission",
                            "Monthly challans and returns for ESI"
                        ].map((doc, idx) => (
                            <div key={idx} className="flex items-center bg-[#f8f9fc] p-4 rounded-lg border border-gray-100 hover:border-[#233a85] transition-colors">
                                <div className="w-8 h-8 bg-white text-[#ff6f00] rounded-full flex items-center justify-center font-bold text-sm shadow-sm mr-3 flex-shrink-0 border border-gray-200">
                                    {idx + 1}
                                </div>
                                <span className="text-sm font-semibold text-[#0b1b3d]">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. HOW WE WORK (Stepper) */}
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
                            "Fill the Form & Make the Payment",
                            "Expert Will Call You & Receive Documents",
                            "Filling Correct Information by Expert",
                            "Generating Challan/Currency",
                            "CA’s Certificate Uploading",
                            "Successfully ESI Return Submission Done!"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[160px] lg:w-[150px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <>
                                        <FiArrowRight className="hidden lg:block w-6 h-6 text-[#ff6f00] flex-shrink-0" />
                                        <FiChevronDown className="lg:hidden w-6 h-6 text-[#ff6f00]" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. POPULAR SERVICES */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Popular Services
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { icon: <FiFileText />, title: "Trademark Registration" },
                            { icon: <FiGlobeFallback />, title: "Import Export Code" },
                            { icon: <BsBuilding />, title: "FSSAI License" },
                            { icon: <FiBriefcase />, title: "GST Registration" },
                            { icon: <FiUsers />, title: "Company Registration" }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] p-5 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#233a85] text-xl mb-3 shadow-sm border border-gray-200">
                                    {service.icon}
                                </div>
                                <h4 className="font-bold text-[#0b1b3d] text-sm">{service.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. WHY US? */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Why Us?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                        {[
                            { icon: <BsBuilding />, title: "Recognized by Govt. of India" },
                            { icon: <FiUsers />, title: "5 Lakh+ Happy Customers" },
                            { icon: <FiAward />, title: "ISO 9001: 2015 Certified" },
                            { icon: <FiShield />, title: "Personal Data Security & Trust" },
                            { icon: <FiCalendar />, title: "Expert Support" },
                            { icon: <FiClock />, title: "Quick Services Assured" },
                            { icon: <BsShieldCheck />, title: "Challenging Prices Across India" },
                            { icon: <FiActivity />, title: "Quick Response Team" },
                            { icon: <FiStar />, title: "Excellent Reviews & Ratings" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#233a85] text-2xl mb-3 shadow-sm border border-gray-200">
                                    {feature.icon}
                                </div>
                                <p className="font-semibold text-[#0b1b3d] text-sm">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQs */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is PF or EPF?" defaultOpen={true}>
                            All employers who have PF registration are required to file returns on a monthly basis. The filing of returns has to be done by the 15th of each month through a unified portal. During the working tenure, the employer and employee both contribute 12% of the basic salary of employees into the EPF account.
                        </Accordion>
                        <Accordion title="How can I return my PF?" />
                        <Accordion title="What is PF return monthly?" />
                        <Accordion title="Is PF mandatory for a salary above 15000?" />
                        <Accordion title="What is ECR in PF?" />
                        <Accordion title="How is the Provident Fund calculated in Excel?" />
                        <Accordion title="How to compute ESI contribution?" />
                        <Accordion title="Are there any benefits to ESIC after retirement?" />
                        <Accordion title="If the salary increases during the year, what will be the effect?" />
                    </div>
                </div>
            </section>

        </div>
    );
}

// Fallback Icon
const FiGlobeFallback = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);