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
    FiGlobe,
    FiPieChart,
    FiTrendingUp,
    FiSettings,
    FiTarget,
    FiMapPin,
    FiCheckSquare,
    FiAward,
    FiCalendar,
    FiActivity
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

export default function ProjectReportPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Prepare a Professional Project Report to Get Loans at a Glance!
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            A Project Report is the formal documentation disclosing the details of a Prospective Project’s detailed analytical aspects where technical, financial, and managerial data will be presented.
                        </p>
                        <p className="text-sm text-blue-200 leading-relaxed mb-6 border-l-4 border-[#ff6f00] pl-4">
                            If you want to establish a startup or develop your current project with financial support, you must submit a project report. We are the top company with our Expert to prepare an authentic project report at the lowest cost in India. What are you waiting for?
                        </p>
                        <button className="hidden md:inline-block bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 px-8 rounded shadow-lg transition-colors">
                            Contact us now
                        </button>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            We’re here to help
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Mobile Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
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

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. WHAT IS MANDATORY */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            What are the Mandatory Parts of a Project Report?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed text-justify mb-6">
                        A project report includes the details of the project's goals, timeline, activities, resources to be used, the challenges faced, challenges coping up planning, results achieved, the way to pay EMI, and the justification of the entire planning.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed text-justify mb-6">
                        These are not the end of the list of facts that you have to submit. The Report serves as a formal record for the lifecycle of the project, where you have to submit the documents of the work done, the way to communicate the project status, and the possibility of sponsors, stakeholders, or any other interested parties.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-[#ff6f00] p-4 rounded-r-lg">
                        <p className="text-[#0b1b3d] font-bold text-sm">
                            Project reports are used for various fields, but we produce them for new business or startups to secure a loan from investors/Banks. Don’t worry, our Expert will submit everything logically so that you can achieve a loan.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. COMPONENTS OF PROJECT REPORT (GRID) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Components of Project Report
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">Here are the most essential components of a project report expertly curated by us.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Standard Cards */}
                        {[
                            { title: "Introductory page", desc: "Discloses the introduction of a new business you are about to start or have started. The aim of the business will be included in the introductory part." },
                            { title: "Summary of the Project", desc: "Includes the overall status of the business, time consumed to reach the goal, overall status, budget, and expected profit." },
                            { title: "Scope of the Project", desc: "Contains the scope of the business, the percentage of work you have completed, and the remaining to be completed. A quick overview of next steps." },
                            { title: "Details of Promoters", desc: "Planning of the project promotion, qualification of the promotors, work experience, process related experience and more." },
                            { title: "Details of Employees", desc: "Entire details of the employees, educational qualifications, professional training, professional & managerial experience, and more." },
                            { title: "Customer Details", desc: "Consumers for services needs to be mentioned clearly. Targeted customers/clients must be mentioned (B2B or B2C sales)." },
                            { title: "Regional Operations", desc: "Planning for branches or already successful in opening branches in different regions (national or international) must be mentioned." },
                            { title: "Means of Financing", desc: "What would be the financial support of the company or business - partners, banks, or other investors?" },
                            { title: "Balance Sheets", desc: "Includes where the capital is invested or spent. The entire expenditure and earnings will be mentioned." },
                            { title: "Profit and Loss Statements", desc: "Mention the profit gained from your project. You have to mention to the bank about the profit, and profit-gaining plans." },
                            { title: "Break-Even Points Evaluations", desc: "Give the evaluation of the entire project you are about to start or have started. Mention everything about your whole business." }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-[#233a85] mb-3 flex items-start">
                                    <FiCheckCircle className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" />
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed pl-6">{card.desc}</p>
                            </div>
                        ))}

                        {/* WIDE CARD: Infrastructure Facilities */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
                            <h3 className="font-bold text-[#233a85] mb-4 flex items-center border-b pb-2">
                                <FiSettings className="text-[#ff6f00] mr-2" />
                                Infrastructure Facilities
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {[
                                    "The Place of the Project", "Required Raw Materials", "Target of Production/Goal",
                                    "Area required for the purpose", "Electricity Requirements", "Water requirements",
                                    "Requirement of Fuel (except electricity)", "Employment requirements: skilled & unskilled",
                                    "Area of Technology", "Production process", "Volume of expected production",
                                    "Unit market selling price", "Whether Pollution treatment plants required"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <FiCheckSquare className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WIDE CARD: Marketing Plan */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow md:col-span-2">
                            <h3 className="font-bold text-[#233a85] mb-4 flex items-center border-b pb-2">
                                <FiTarget className="text-[#ff6f00] mr-2" />
                                Marketing Plan
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Type of customers", "Target markets", "Nature of market",
                                    "Cost of marketing", "Market segmentation", "Objective of the sales",
                                    "Future prospects of the market", "Demand of product in different markets",
                                    "Market share of the proposed venture"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                        <FiCheckSquare className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CARD: Project Feasibility Ratio */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                            <h3 className="font-bold text-[#233a85] mb-4 flex items-center border-b pb-2">
                                <FiPieChart className="text-[#ff6f00] mr-2" />
                                Project Feasibility Ratio
                            </h3>
                            <p className="text-xs text-gray-500 mb-4">
                                Presented in the form of graphs or pie charts displaying cost, discount, and possible revenue:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Current ratio", "Quick ratio", "Debt equity ratio",
                                    "Interest coverage ratio", "Net Profit Sales Percentage",
                                    "Gross Profit Sales Percentage", "Return on Capital Employed"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600 font-semibold">
                                        <FiTrendingUp className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SCOPE OF THE PROJECT (Highlight Box) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-4xl mx-auto bg-[#233a85] rounded-2xl p-8 md:p-12 shadow-xl text-white">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold mb-4">
                            Scope of the Project
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                        <p className="mt-4 text-blue-100">The following topics must be included in the Scope of the Project:</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                        {[
                            "Promoter(s) details",
                            "Plant & machinery/equipment",
                            "Product/services & process",
                            "Manpower requirements",
                            "Market Potential & Strategy",
                            "Risks & Mitigation Strategy"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center bg-[#1d3275] p-3 rounded-lg border border-[#30489e]">
                                <FiCheckCircle className="text-[#ff6f00] mr-3 flex-shrink-0 w-5 h-5" />
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-center text-blue-200 border-t border-[#30489e] pt-6">
                        If you want to avoid the hazards of preparing a Project Report, contact us. You may make mistakes or do not have the technical expertise to form a Project Report. Prepare it flawlessly with an experienced Expert.
                    </p>
                </div>
            </section>

            {/* 5. PRICING PACKAGE */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Packages for Project Report Preparation
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-sm mx-auto">
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-[#ff6f00]">
                            <div className="bg-[#ff6f00] text-white text-center py-3 font-bold text-sm tracking-widest uppercase">
                                LLP to Pvt Ltd Company Conversion
                            </div>
                            <div className="p-8 text-center">
                                <p className="text-sm font-bold text-[#233a85] mb-2 uppercase tracking-wide">Onetime Charge</p>
                                <div className="flex justify-center items-center text-4xl font-extrabold text-[#0b1b3d] mb-2">
                                    <BsCurrencyRupee className="w-8 h-8" />
                                    6,999
                                </div>
                                <p className="text-xs text-gray-500 font-bold mb-8">+ 18% GST</p>

                                <ul className="space-y-4 mb-8 text-left">
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiFileText className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Project Report
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiActivity className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Call, Chat, Email Support
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiShield className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        No hidden charges
                                    </li>
                                </ul>
                                <button className="w-full bg-[#233a85] hover:bg-[#1a2b63] text-white font-bold py-4 rounded-md shadow-lg transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (Stepper) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 lg:justify-between text-center relative z-10">
                        {[
                            "Our executive calls and collects documents",
                            "Pay the recommended fees",
                            "Scope of the Project Presentation",
                            "Preparing Perfect Project Report by Expert",
                            "Congratulations! Your Report Is Ready!"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[140px] lg:w-[150px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
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

            {/* 7. WHY US? */}
            <section className="bg-white py-16 px-4 border-y border-gray-100">
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
                                <div className="w-14 h-14 bg-[#f8f9fc] rounded-full flex items-center justify-center text-[#233a85] text-2xl mb-3 border border-gray-200 shadow-sm">
                                    {feature.icon}
                                </div>
                                <p className="font-bold text-[#0b1b3d] text-xs uppercase tracking-wide">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. POPULAR SERVICES */}
            <section className="bg-[#f8f9fc] py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Popular Services
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: <FiFileText />, title: "Online Tax Services" },
                            { icon: <FiAward />, title: "Trademark Registration" },
                            { icon: <FiGlobe />, title: "Import Export Code" },
                            { icon: <BsBuilding />, title: "FSSAI License" },
                            { icon: <FiBriefcase />, title: "GST Registration" },
                            { icon: <FiUsers />, title: "Company Registration" }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
                                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#ff6f00] text-xl mb-3">
                                    {service.icon}
                                </div>
                                <h4 className="font-bold text-[#0b1b3d] text-[13px]">{service.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQs */}
            <section className="py-20 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="Who should require project report submission?" defaultOpen={true}>
                            Anyone aiming to secure financial support or a business loan from banks, angel investors, or venture capitalists needs a comprehensive project report. It proves the feasibility and profitability of your venture.
                        </Accordion>
                        <Accordion title="Can I create a project report myself?">
                            While possible, it requires extensive financial, technical, and market knowledge. Errors or unrealistic projections can lead to immediate loan rejection. Hiring experts ensures accuracy and adherence to banking standards.
                        </Accordion>
                        <Accordion title="Is CMA essential for getting a loan?">
                            Yes, Credit Monitoring Arrangement (CMA) data is often essential alongside the project report. It provides a detailed financial analysis of past performance and future projections, heavily relied upon by bankers.
                        </Accordion>
                        <Accordion title="Is it necessary to display the Scope of the Project through a chart/graph?">
                            Using charts and graphs (like pie charts for feasibility ratio) is highly recommended. It visually simplifies complex financial data, making it easier for investors and loan officers to evaluate your project quickly.
                        </Accordion>
                        <Accordion title="Do I need a Project Report submission to get financial support under the Startup India scheme?">
                            Yes, you require a Project Report submission to get financial support under the Startup India scheme. It acts as the blueprint of your business model.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}