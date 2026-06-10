"use client";

import React, { useState } from "react";
import {
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiAward,
    FiUsers,
    FiBriefcase,
    FiTrendingUp,
    FiHeart,
    FiCheckSquare,
    FiArrowRight
} from "react-icons/fi";
import { BsBuilding, BsCurrencyRupee } from "react-icons/bs";

// --- Tab Button Component ---
const TabButton = ({
    active,
    onClick,
    label,
}: {
    active: boolean;
    onClick: () => void;
    label: string;
}) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 text-sm md:text-base font-bold rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border ${active
                ? "bg-[#233a85] text-white border-[#233a85]"
                : "bg-white text-gray-600 hover:bg-gray-100 border-gray-200"
            }`}
    >
        {label}
    </button>
);

export default function NGOCompliancePage() {
    const [activeTab, setActiveTab] = useState("12A");

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Avail of Business Compliance for Section 8 Companies and Other NGOs
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Online Legal India provides premium support to meet all business compliances for your Section 8 Company. Let our experts handle the complicated form-filling activities for you.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Intro on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-10 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with NGO Compliances?
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
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="WB">West Bengal</option>
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
                                Talk to Our Expert
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Introduction */}
                    <div className="md:col-span-7 pt-2 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Why Business Compliance is Crucial?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mb-6"></div>

                        <p className="text-gray-700 text-[15px] mb-4 leading-relaxed text-justify">
                            Online Legal India has a team of experts to provide support for availing business compliances for all types of Section 8 Companies. If you have a Section 8 Company, you must meet some fundamental business compliances.
                        </p>
                        <p className="text-gray-700 text-[15px] mb-6 leading-relaxed text-justify">
                            Don’t worry! You may have a lot of important work in hand or you may not be accustomed to performing all complicated online form filling activities. We are your premium support to meet any compliance criteria of your company.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-[#233a85] p-5 rounded-r-lg shadow-sm">
                            <p className="text-[#233a85] font-semibold text-sm leading-relaxed">
                                The following standards are to be maintained to demonstrate your sincerity, and authenticity with annual compliances. We can help you with <strong className="text-[#ff6f00]">12A Registration, 80G Registration, and CSR Compliances.</strong>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. TABS SECTION FOR COMPLIANCES */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Explore Our NGO Compliance Services
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <TabButton active={activeTab === "12A"} onClick={() => setActiveTab("12A")} label="Section 12A Registration" />
                        <TabButton active={activeTab === "80G"} onClick={() => setActiveTab("80G")} label="Section 80G Registration" />
                        <TabButton active={activeTab === "CSR"} onClick={() => setActiveTab("CSR")} label="CSR Registration & Report" />
                    </div>

                    {/* TAB CONTENT: SECTION 12A */}
                    {activeTab === "12A" && (
                        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-10 animate-fade-in">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-6">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-[#0b1b3d] mb-2 flex items-center">
                                        <FiShield className="text-[#ff6f00] mr-3" /> Section 12A Registration
                                    </h3>
                                    <p className="text-gray-600 text-sm max-w-2xl">
                                        According to the Income Tax Act, 1961, the IT department grants 12A certification to non-profit organizations to exempt payable taxes. Applied usually 3 months after NGO registration.
                                    </p>
                                </div>
                                <div className="bg-[#ff6f00] text-white px-6 py-4 rounded-xl text-center shadow-lg w-full md:w-auto flex-shrink-0">
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1">Starting At</p>
                                    <p className="text-2xl font-black flex items-center justify-center">
                                        <BsCurrencyRupee /> 9,000 <span className="text-sm font-medium ml-1">+18% GST</span>
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Documents */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiFileText className="mr-2" /> Documents Required
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Aadhaar and PAN card of all directors",
                                            "Incorporation certificate of the company",
                                            "Business address proof",
                                            "Income details (last 3 years)",
                                            "Details of assets and liabilities",
                                            "MOA and AOA of the Section 8 Company",
                                            "PAN Card of the company",
                                            "Copy of the Form 10A",
                                            "List of the donors",
                                            "Book of accounts"
                                        ].map((doc, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                                <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" /> {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Benefits */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiAward className="mr-2" /> Benefits of 12A
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <p className="font-bold text-[#0b1b3d] mb-1">Tax Exemption</p>
                                            <p className="text-xs text-gray-600">Holding a 12A certificate helps exempt them from paying income tax on generated income, enabling more funds for charitable activities.</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <p className="font-bold text-[#0b1b3d] mb-1">Access to Grants and Funds</p>
                                            <p className="text-xs text-gray-600">Increases credibility. Your company will be eligible for government grants and inspires local/international donors.</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <p className="font-bold text-[#0b1b3d] mb-1">Proof of Existence</p>
                                            <p className="text-xs text-gray-600">Legitimate proof of your company’s existence on the government's list, establishing reliability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB CONTENT: SECTION 80G */}
                    {activeTab === "80G" && (
                        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-10 animate-fade-in">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-6">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-[#0b1b3d] mb-2 flex items-center">
                                        <FiHeart className="text-[#ff6f00] mr-3" /> Section 80G Registration
                                    </h3>
                                    <p className="text-gray-600 text-sm max-w-2xl">
                                        Allows donors to claim non-deduction of tax on donations offered to your NGO. Attract more funds as donors get tax benefits under this act.
                                    </p>
                                </div>
                                <div className="bg-[#ff6f00] text-white px-6 py-4 rounded-xl text-center shadow-lg w-full md:w-auto flex-shrink-0">
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1">Starting At</p>
                                    <p className="text-2xl font-black flex items-center justify-center">
                                        <BsCurrencyRupee /> 9,000 <span className="text-sm font-medium ml-1">+18% GST</span>
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Documents */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiFileText className="mr-2" /> Documents Required
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Copy of the organization’s incorporation certificate",
                                            "Copy of the registration certificate issued by the authority",
                                            "Copies of annual accounts for the last three years"
                                        ].map((doc, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                                <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" /> {doc}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 bg-[#fcfcfc] border border-gray-200 p-4 rounded-lg text-center">
                                        <p className="text-sm text-gray-600 font-medium mb-3">Want to learn more about 80G documentation?</p>
                                        <button className="bg-[#233a85] text-white text-xs font-bold py-2 px-4 rounded hover:bg-[#1a2b63] transition-colors">
                                            Contact Online Legal India
                                        </button>
                                    </div>
                                </div>
                                {/* Benefits */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiTrendingUp className="mr-2" /> Benefits of 80G
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                                            <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold text-[#0b1b3d] text-sm">Tax Benefits for Donors</p>
                                                <p className="text-xs text-gray-600 mt-1">Donors under high taxation can easily donate to get tax benefits, increasing fund collection for your NGO.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                                            <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold text-[#0b1b3d] text-sm">Credibility Enhancement</p>
                                                <p className="text-xs text-gray-600 mt-1">Enhances reliability. Donors proactively seek out organizations holding 80G certification.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                                            <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold text-[#0b1b3d] text-sm">Transparency and Accountability</p>
                                                <p className="text-xs text-gray-600 mt-1">Ensures a higher level of accountability towards donors and regulatory authorities.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-orange-50 p-4 rounded-lg">
                                            <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-bold text-[#0b1b3d] text-sm">Access to Government Funding</p>
                                                <p className="text-xs text-gray-600 mt-1">Unlocks more opportunities to participate in government-funded charitable activities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB CONTENT: CSR REGISTRATION & REPORT */}
                    {activeTab === "CSR" && (
                        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-10 animate-fade-in">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-6">
                                <div>
                                    <h3 className="text-2xl font-extrabold text-[#0b1b3d] mb-2 flex items-center">
                                        <BsBuilding className="text-[#ff6f00] mr-3" /> CSR Registration & Report
                                    </h3>
                                    <p className="text-gray-600 text-sm max-w-2xl">
                                        Mandatory for private companies meeting specific criteria to participate in charitable areas. NGOs need CSR registration to receive these corporate funds.
                                    </p>
                                </div>
                                <div className="bg-[#ff6f00] text-white px-6 py-4 rounded-xl text-center shadow-lg w-full md:w-auto flex-shrink-0">
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1">Registration At</p>
                                    <p className="text-2xl font-black flex items-center justify-center">
                                        <BsCurrencyRupee /> 10,000 <span className="text-sm font-medium ml-1">+18% GST</span>
                                    </p>
                                    <p className="text-[10px] mt-1 opacity-90">*Excluding DSC</p>
                                </div>
                            </div>

                            {/* CSR Mandatory Criteria Banner */}
                            <div className="bg-[#233a85] text-white p-5 rounded-lg mb-8 flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-4 md:mb-0">
                                    <p className="font-bold text-lg mb-1 flex items-center"><FiShield className="mr-2" /> CSR is Mandatory for Companies with:</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                                    <span className="bg-white/20 px-3 py-1.5 rounded">Net Worth ₹500 Cr+</span>
                                    <span className="bg-white/20 px-3 py-1.5 rounded">Turnover ₹1000 Cr+</span>
                                    <span className="bg-white/20 px-3 py-1.5 rounded">Net Profit ₹5 Cr+</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Documents */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiFileText className="mr-2" /> Required Documents
                                    </h4>
                                    <ul className="space-y-3 mb-8">
                                        {[
                                            "Details of members of the Organization",
                                            "PAN card of the Section 8 Company",
                                            "12AB & 80G Registration Order Copy",
                                            "DIN/PAN of the Secretary, Trustee, or Director",
                                            "Company Deed",
                                            "DSC of the Entity Applying",
                                            "Email ID and Mobile Number of Applicant"
                                        ].map((doc, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                                <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" /> {doc}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CSR Activity Report Callout */}
                                    <div className="border-l-4 border-[#ff6f00] pl-4 py-2 bg-orange-50 rounded-r-lg">
                                        <h4 className="font-bold text-[#0b1b3d] text-sm mb-1">Need a CSR Activity Report?</h4>
                                        <p className="text-xs text-gray-600 mb-2">
                                            Corporate entities require proof of social service. Let us create your internal/external CSR Activity Report at the lowest cost.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#233a85] mb-4 flex items-center">
                                        <FiUsers className="mr-2" /> Benefits of CSR for NGOs
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="font-bold text-[#0b1b3d] text-sm mb-1">Obtain More Corporate Funds</p>
                                            <p className="text-xs text-gray-600">Draw attention from corporations willing to donate funds to comply with their social responsibilities.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="font-bold text-[#0b1b3d] text-sm mb-1">Builds Authenticity</p>
                                            <p className="text-xs text-gray-600">Become credible to the government and donor companies, allowing you to run campaigns effectively.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="font-bold text-[#0b1b3d] text-sm mb-1">Enhances Reputation</p>
                                            <p className="text-xs text-gray-600">Employees and the public will feel confident in the reliability and stable funding of your Section 8 Company.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="font-bold text-[#0b1b3d] text-sm mb-1">Creates Social Transformations</p>
                                            <p className="text-xs text-gray-600">With stable funds, you can easily support people regarding health, education, water, and environmental issues.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Ready to Complete Your NGO Compliances?</h2>
                    <p className="mb-8 text-blue-100 font-medium">
                        Join thousands of authentic NGOs and Section 8 companies who trust Online Legal India for their 12A, 80G, and CSR Registrations.
                    </p>
                    <button className="bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-4 px-10 rounded-full transition-colors shadow-lg flex items-center justify-center mx-auto">
                        Contact Us Now <FiArrowRight className="ml-2" />
                    </button>
                </div>
            </section>

        </div>
    );
}