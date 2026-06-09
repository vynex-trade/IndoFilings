"use client";

import React from "react";
import {
    FaCheckCircle,
    FaIdCard,
    FaMapMarkerAlt,
    FaHome,
    FaFileSignature,
    FaFileContract,
    FaUsers,
    FaChartLine,
    FaBalanceScale,
    FaMoneyBillWave,
    FaExchangeAlt,
    FaSearch,
    FaBullhorn,
    FaClipboardList,
    FaHeadset,
    FaFileAlt,
    FaCheckSquare,
    FaTrophy,
    FaArrowRight
} from "react-icons/fa";

// --- DATA ARRAYS ---

const documents = [
    {
        title: "Aadhar",
        desc: "Identity Proof (Aadhaar / Voter ID card, Driving License) of all designated Directors and Shareholders.",
        icon: <FaIdCard />
    },
    {
        title: "Address Proof",
        desc: "Address-proof of the Directors and Shareholders.",
        icon: <FaMapMarkerAlt />
    },
    {
        title: "Pan Card",
        desc: "Directors’ and Shareholders’ PAN Card details.",
        icon: <FaIdCard />
    },
    {
        title: "Residential Proof",
        desc: "Residential proof of the registered Business Address (Telephone / Gas / Water / Electricity bill not older than 2 months).",
        icon: <FaHome />
    },
    {
        title: "NOC",
        desc: "An NOC or No Objection Certificate from the business place’s owner.",
        icon: <FaFileSignature />
    },
    {
        title: "Association",
        desc: "Company’s Memorandum of Association & Article of Association.",
        icon: <FaFileContract />
    },
];

const packages = [
    {
        name: "Consultation Fee",
        price: "999",
        features: [
            "Guidance From Experts",
            "Complete guide for registration (Process, Required Documents, Benefits and Tax etc.)"
        ],
    },
    {
        name: "BASIC",
        price: "16,899",
        features: [
            "Registration of Public Limited company",
            "CIN & MCA processing",
            "Spice +Part A, Spice +Part B",
            "Allotment of 3 DIN",
            "Current account opening in the nearest branch",
            "MOA & AOA Drafting"
        ],
    },
    {
        name: "SMART",
        price: "39,899",
        recommended: true,
        features: [
            "Register at Ministry of Corporate Affairs",
            "Drafting & Filing by Experienced Professionals",
            "Expert advice, MCA processing and CIN",
            "Company MOA & AOA",
            "Allotment of 3 DINs",
            "The 1st Board Resolution documentation",
            "Consent Letter drafting",
            "ADT-1 appointment of the Auditor"
        ],
    },
    {
        name: "MEGA",
        price: "49,899",
        features: [
            "Registration, CIN & MCA processing",
            "Spice +Part A, Spice +Part B",
            "Allotment of 3 DIN & Current account opening",
            "MOA & AOA Drafting",
            "Trademark filing",
            "Appointment of Auditor",
            "Financial Statements preparation",
            "MCA Annual Return filing"
        ],
    }
];

const benefits = [
    {
        title: "Shareholders’ Limited Liability",
        subtitle: "Share Holder",
        desc: "In a Public Limited Company, the accountability of the Shareholders and Directors is limited according to the amount of the shares they own. Personal assets of the shareholders will not be affected by financial emergencies.",
        icon: <FaUsers />
    },
    {
        title: "Listing in the Stock Exchange",
        subtitle: "Stock Market",
        desc: "Unlike a Private Limited organization, Public Limited companies can list themselves to the IPO (Indian Public Offerings) and popular Stock Exchanges, leading to several opportunities.",
        icon: <FaChartLine />
    },
    {
        title: "Distinct Legal Entity",
        subtitle: "Legal",
        desc: "The existence of the entity does not depend on any individuals’ presence. Any Shareholder or Director may leave without affecting the actuality of the Public Limited Company.",
        icon: <FaBalanceScale />
    },
    {
        title: "Countless sources for Fund-Raising",
        subtitle: "Fund",
        desc: "A Public Limited Company can raise resources by crowd-funding or from common people’s involvement following legal aspects, helping the entity survive and grow.",
        icon: <FaMoneyBillWave />
    },
    {
        title: "Simple Transferability of Shares",
        subtitle: "Transfer",
        desc: "Following the Companies Act, 2013, shares can be transferred without hassle. Being listed in the Stock Exchange makes people willing to invest.",
        icon: <FaExchangeAlt />
    },
    {
        title: "Cautious on Business Transparency",
        subtitle: "Transparency",
        desc: "As it involves public interaction, the organization always looks for clarity in business operations by publishing Audit Credentials and Statutory Reports.",
        icon: <FaSearch />
    },
    {
        title: "Upholds the Brand Position",
        subtitle: "Marketing",
        desc: "Being listed in the Stock Exchange and publishing reports to the public enhances its Brand Image and reputation in the marketplace.",
        icon: <FaBullhorn />
    },
];

const comparisonData = [
    { topic: "Members / Shareholders", public: "Minimum: 7 | Maximum: No Limit", private: "Minimum: 2 | Maximum: 200" },
    { topic: "Directors", public: "Minimum: 3", private: "Minimum: 2" },
    { topic: "Public Invitations", public: "Yes", private: "No" },
    { topic: "Issuance Of Prospectus", public: "Required", private: "Not Required" },
    { topic: "Name Variances", public: "Must have ‘Limited’ at the end of its name", private: "Must have PVT. LTD. at the end of its name" },
    { topic: "Mandatory Statutory Meeting", public: "Yes", private: "No" },
    { topic: "Managerial Remunerations", public: "There are no as such restrictions", private: "Cannot exceed the limit of 11% of its net profit" },
    { topic: "Stock Exchange", public: "Can be enlisted in the stock exchange & conduct Stock Trade publicly", private: "Not listed on stock exchange neither carry out stock trade publicly" },
];

const processes = [
    { text: "Fill the form & make the Payment", icon: <FaClipboardList /> },
    { text: "Get a Call from our Experts & share the required Documents", icon: <FaHeadset /> },
    { text: "We will start Drafting the Requirements to the ROC & MCA", icon: <FaFileAlt /> },
    { text: "Following the DIN & DSC registration, will proceed for Business Name Approval", icon: <FaCheckSquare /> },
    { text: "Congratulations! Your Public Limited Company is registered", icon: <FaTrophy /> }
];

export default function PublicLimitedCompany() {
    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">

            {/* HEADER / INTRO */}
            <section className="bg-gradient-to-r from-[#0B1F4D] to-[#1A3673] text-white py-20 px-5">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Public Limited Company Registration
                    </h1>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Expand your business horizons by registering as a Public Limited Company. Gain the ability to raise capital from the public, enjoy limited liability, and list your company on the stock exchange.
                    </p>
                </div>
            </section>

            {/* PACKAGES */}
            <section className="py-20 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Select Packages</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-white rounded-3xl p-8 border shadow-lg flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${pkg.recommended ? 'border-[#f26522] ring-2 ring-[#f26522]/20' : 'border-slate-100'}`}>
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f26522] to-[#e85510] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-[#0B1F4D] text-center mb-2">{pkg.name}</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-black text-[#f26522]">₹{pkg.price}</span>
                                </div>
                                <ul className="flex-1 space-y-4 mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-sm text-slate-600 flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1 shrink-0 text-base" />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3.5 rounded-xl font-bold text-white bg-[#0B1F4D] hover:bg-[#163785] transition-colors shadow-md">
                                    Request Callback
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-red-500 font-medium mt-8">* Excluding DSC and Govt. Fees</p>
                </div>
            </section>

            {/* REQUIRED DOCUMENTS */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Documents Required</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc, idx) => (
                            <div key={idx} className="flex gap-5 p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0B1F4D]/5 flex items-center justify-center text-[#f26522] text-3xl">
                                    {doc.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0B1F4D] text-lg mb-2">{doc.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-20 px-5 bg-gradient-to-b from-[#0B1F4D] to-[#051029] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work?</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
                        {processes.map((proc, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center text-center max-w-[200px] group z-10">
                                    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:bg-[#f26522] group-hover:border-[#f26522] transition-all duration-300 shadow-lg">
                                        {proc.icon}
                                    </div>
                                    <p className="text-sm text-slate-200 leading-relaxed font-medium">{proc.text}</p>
                                </div>
                                {idx !== processes.length - 1 && (
                                    <div className="hidden lg:block w-full h-[2px] bg-white/20 -mx-10 mt-[-60px] relative z-0">
                                        <FaArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50" />
                                    </div>
                                )}
                                {idx !== processes.length - 1 && (
                                    <FaArrowRight className="lg:hidden text-[#f26522] text-2xl shrink-0 rotate-90" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Benefits of Registering a Public Limited Company</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((adv, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-2xl group-hover:bg-[#f26522] group-hover:text-white transition-colors">
                                        {adv.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{adv.subtitle}</span>
                                        <h3 className="text-lg font-bold text-[#0B1F4D] leading-tight mt-1">{adv.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-20 px-5 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Comparison</h2>
                        <p className="text-slate-500 mt-3">Public Limited Company vs Private Limited Company</p>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-200 bg-white">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-[#0B1F4D] text-white">
                                    <th className="p-5 font-bold text-base w-1/4">Topics</th>
                                    <th className="p-5 font-bold text-base w-3/8 border-l border-white/20">Public Limited Company</th>
                                    <th className="p-5 font-bold text-base w-3/8 border-l border-white/20">Private Limited Company</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-700">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="p-5 font-bold text-[#0B1F4D] bg-slate-50/50">{row.topic}</td>
                                        <td className="p-5 border-l border-slate-100 leading-relaxed">{row.public}</td>
                                        <td className="p-5 border-l border-slate-100 leading-relaxed">{row.private}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    );
}