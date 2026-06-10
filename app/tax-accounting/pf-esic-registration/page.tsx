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
    FiCheck,
    FiActivity
} from "react-icons/fi";
import { BsBuilding, BsShieldCheck } from "react-icons/bs";

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

export default function PFESICRegistrationPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    One-Stop Solutions for PF ESIC Registration Online!
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Comply with Government Norms Flawlessly | Complete Expert Assistance for Employees' Provident Fund & State Insurance Corporation Registration.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Intro & Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with PF & ESIC Registration?
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

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
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
                                Get Started
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information & Entities */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-[14.5px] mb-4 leading-relaxed text-justify">
                            EPF and ESIC are the two mandatory requirements for corporate employees. EPF stands for Employees Provident Fund, and ESIC stands for Employees' State Insurance Corporation. Companies running with more than 20 employees must register with the Employees' Provident Fund Organization of India. However, companies having less than 20 employees can also register voluntary Employees’ Provident Fund.
                        </p>
                        <p className="text-gray-700 text-[14.5px] mb-6 leading-relaxed text-justify">
                            On the other hand, according to the Employees' State Insurance Act, 1948, employees earning Rs. 21,000/- per month or less must be included under ESIC. If any company runs with at least 10 employees must register with ESIC (20 employees for some states in India). With the help of Expert, we will register your EPF and ESIC details flawlessly.
                        </p>

                        <SolidAccordion title="Entities Covered Under ESIC" defaultOpen={true}>
                            <p className="mb-3 font-medium">As per the government notification under section 1/5 of the ESI Act 1948, the following entities must register under ESIC (when they have 10 or more people at work):</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {[
                                    "Factory & Workshop",
                                    "Any type of manufacturing unit",
                                    "Security company",
                                    "Hospital & Medical institutions",
                                    "Shops, Hotels and restaurants",
                                    "Cinema hall and preview theatre",
                                    "Road Motor transport establishment",
                                    "Newspaper establishments",
                                    "Private educational institutions",
                                    "Casual employees of Municipal Corp",
                                    "Any kind business entity"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <FiCheck className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                                <p className="font-semibold text-[#0b1b3d] text-sm mb-2">The central government has extended the service to:</p>
                                <div className="flex flex-wrap gap-2 text-sm text-[#233a85]">
                                    <span className="bg-white px-2 py-1 rounded border border-blue-200">Port trust</span>
                                    <span className="bg-white px-2 py-1 rounded border border-blue-200">Airport authorities</span>
                                    <span className="bg-white px-2 py-1 rounded border border-blue-200">Warehousing</span>
                                    <span className="bg-white px-2 py-1 rounded border border-blue-200">Insurance business</span>
                                    <span className="bg-white px-2 py-1 rounded border border-blue-200">NBFCs</span>
                                </div>
                            </div>
                        </SolidAccordion>

                        <SolidAccordion title="Filling of PF ESIC Registration">
                            <p>
                                Logging in to the PF and ESIC portal and filling out the form by maintaining all formalities may be a bit critical. When you are with Online Legal India, the process will be simple and easy, you will also remain confident that your job is done perfectly.
                            </p>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. LEARN OUR PROCESS (Stepper) */}
            <section className="bg-[#f8f9fc] py-16 px-6 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Learn Our Process
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">We are here to make your job easy. Contact us to learn more.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 lg:gap-x-0 lg:justify-between text-center relative z-10">
                        {[
                            "Get in touch with us and submit documents",
                            "Pay your respective charges",
                            "Our expert will fill out the form for you",
                            "Document submission done successfully",
                            "Fees Paid Successfully",
                            "Congratulations! Registration Successful"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[130px] lg:w-[150px]">
                                    <div className="w-12 h-12 bg-white text-[#233a85] rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md border-2 border-[#233a85]">
                                        {`0${index + 1}`}
                                    </div>
                                    <p className="text-[13px] font-bold text-[#0b1b3d] leading-snug">{step}</p>
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

            {/* 4. BENEFITS (EPF vs ESIC Side-by-Side) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Benefits of Registration
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* EPF Benefits */}
                        <div className="bg-[#233a85] rounded-2xl p-8 text-white shadow-lg">
                            <div className="flex items-center mb-6">
                                <FiBriefcase className="w-8 h-8 text-[#ff6f00] mr-3" />
                                <h3 className="text-2xl font-bold">Employee PF Registration</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Higher interest facility: The Indian government has preselected a fixed interest rate on EPF in India.",
                                    "It helps get a healthy retirement plan for employees with around 8.5% employee contribution, and a similar amount of company contribution.",
                                    "The PF scheme provides a pre-fixed interest on the deposit secured within EPF India.",
                                    "Employees can enjoy a healthy retirement period. Out of the employer’s share, 8.33% goes towards the Employees' Pension Scheme (EPS), and 3.67% to EPF.",
                                    "Employees can get help from EPF during any emergency monetary requirement.",
                                    "EPF contribution helps provide privileges for tax exemption."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-[14.5px] leading-relaxed">
                                        <FiCheckCircle className="text-[#ff6f00] mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-blue-50">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ESIC Benefits */}
                        <div className="bg-[#ff6f00] rounded-2xl p-8 text-white shadow-lg">
                            <div className="flex items-center mb-6">
                                <FiActivity className="w-8 h-8 text-[#233a85] mr-3" />
                                <h3 className="text-2xl font-bold">Employee ESIC Registration</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "If the employee suffers from any certified disease for >91 days, they receive cash compensation of 70% of wages.",
                                    "Sickness benefit extends if the employee suffers from 34 listed malignant diseases for >2 years (receives 80% wage).",
                                    "The employee and his family will receive medical benefits through hospital services.",
                                    "The employee will get paid leave during pregnancy.",
                                    "For the death of an employee during work/injury, dependents get 90% of the wage as monthly payment.",
                                    "If any employee becomes disabled, support is provided to him or his family.",
                                    "The family will get funeral expenses of Rs. 15,000/- (One time)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-[14.5px] leading-relaxed">
                                        <FiCheckCircle className="text-[#233a85] mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-orange-50">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DOCUMENTS REQUIRED */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Documents Required (Digital Copies)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* EPF Docs */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold text-[#0b1b3d] mb-4 border-b pb-3">For EPF Registration</h3>
                            <ul className="space-y-3">
                                {[
                                    "PAN Card of the Proprietor/ Director /Partner",
                                    "Aadhaar card of Proprietor/ Director /Partner",
                                    "Proof of Address of the company (current utility bills)",
                                    "Shop/company establishment certificate or GST certificate",
                                    "Digital Signature of the Director/ Proprietor/Partner",
                                    "Bank Statement or Cancelled Cheque of Entity",
                                    "Leased Agreement/ Hired/Rented (if applicable)"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <div className="w-6 h-6 bg-blue-50 text-[#233a85] rounded-full flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ESIC Docs */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold text-[#0b1b3d] mb-4 border-b pb-3">For ESIC Registration</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                {[
                                    "Certificate of incorporation",
                                    "Company registration certificate",
                                    "Partnership deed (if applicable)",
                                    "GST registration certificate",
                                    "MoA, AoA of the company",
                                    "Proof of address of company",
                                    "Rental/lease agreement",
                                    "List of employees working",
                                    "PAN copy of establishment",
                                    "Employee compensation details",
                                    "Cancelled cheque",
                                    "List of shareholders",
                                    "Attendance register details",
                                    "List of directors"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <div className="w-6 h-6 bg-orange-50 text-[#ff6f00] rounded-full flex items-center justify-center font-bold text-xs mr-2 mt-0.5 flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. POPULAR SERVICES */}
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
                            { icon: <FiGlobe />, title: "Import Export Code" },
                            { icon: <BsBuilding />, title: "FSSAI License" },
                            { icon: <FiBriefcase />, title: "GST Registration" },
                            { icon: <FiUsers />, title: "Company Registration" }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] p-5 rounded-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#233a85] text-xl mb-3 shadow-sm">
                                    {service.icon}
                                </div>
                                <h4 className="font-bold text-[#0b1b3d] text-sm">{service.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. WHY US? */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
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
                                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-[#ff6f00] text-2xl mb-3">
                                    {feature.icon}
                                </div>
                                <p className="font-semibold text-blue-50 text-sm">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FAQs */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is PF or EPF?" defaultOpen={true}>
                            The Employee Provident Fund, abbreviated as EPF or PF, is a right given to employees based on their basic salary. It helps them after their retirement, or during an emergency financial requirement.
                        </Accordion>
                        <Accordion title="Why do companies need to register EPF for employees?">
                            It provides financial security to the employees post-retirement and helps in tax savings. It is also a statutory compliance requirement for businesses having 20 or more employees.
                        </Accordion>
                        <Accordion title="Which company/ entity is eligible for the EPF Registration?" />
                        <Accordion title="Which employees are excluded from this scheme?" />
                        <Accordion title="Who is liable to deposit to the EPF Scheme?" />
                        <Accordion title="What is the ESI Scheme?">
                            The Employees' State Insurance (ESI) scheme is a social security and health insurance fund for Indian workers, managed by the ESIC according to the ESI Act 1948.
                        </Accordion>
                        <Accordion title="Is it mandatory to register under the ESI?" />
                        <Accordion title="What is the Registration procedure of an employer?" />
                        <Accordion title="What is an ESIC Code?" />
                        <Accordion title="Is there a penalty charge for delayed payment?" />
                    </div>
                </div>
            </section>

        </div>
    );
}

// Missing icon fallback logic for custom component usage
const FiGlobe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);