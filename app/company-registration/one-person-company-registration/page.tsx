"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaCameraRetro,
    FaIdCard,
    FaLightbulb,
    FaFileContract,
    FaMapMarkedAlt,
    FaFileSignature,
    FaShieldAlt,
    FaInfinity,
    FaStar,
    FaHandshake,
    FaUserTie,
    FaMoneyBillWave,
    FaArrowRight,
    FaClipboardList,
    FaPhoneAlt,
    FaIdBadge,
    FaFileAlt,
    FaUpload,
    FaTrophy,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

// --- DATA ARRAYS ---

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
        name: "Start Up",
        price: "3,999",
        features: [
            "Register your One Person Company at Ministry of Corporate Affairs",
            "Drafting & Filing Support, Advisory and Assistance by Experts",
            "MCA processing and CIN",
            "Spice+ Part A, Spice + Part B",
            "Company PAN & TAN",
            "MOA & AOA"
        ],
    },
    {
        name: "Basic Plan",
        price: "6,999",
        recommended: true,
        features: [
            "Register your One Person Company at Ministry of Corporate Affairs",
            "Drafting & Filing by Experts",
            "Expert advice",
            "MCA processing and CIN",
            "Company PAN & TAN",
            "MOA & AOA",
            "Allotment of 1 DIN"
        ],
    },
    {
        name: "Smart Plan",
        price: "16,999",
        features: [
            "Register your Private Limited Company at Ministry of Corporate Affairs",
            "Drafting & Filing by Experts",
            "Expert advice",
            "MCA processing and CIN",
            "Spice + Part A, Spice + Part B",
            "Company PAN & TAN",
            "MOA & AOA"
        ],
    },
    {
        name: "Mega Plan",
        price: "27,999",
        features: [
            "Register your Private Limited Company with the Ministry of Corporate Affairs",
            "Drafting & Filing by Experts",
            "Expert advise",
            "MCA processing and CIN",
            "1 Trademark Application",
            "Company PAN & TAN",
            "MOA & AOA",
            "Allotment of 1 DIN"
        ],
    }
];

const documents = [
    { title: "Passport Photo", desc: "Passport Size Photograph", icon: <FaCameraRetro /> },
    { title: "Pan Card", desc: "Copy of PAN Card", icon: <FaIdCard /> },
    { title: "Electricity Bill", desc: "Copy of Electricity Bill", icon: <FaLightbulb /> },
    { title: "Sale Deed", desc: "Sale Deed (if owned)", icon: <FaFileContract /> },
    { title: "Aadhar", desc: "Copy of Aadhar Card", icon: <FaIdCard /> },
    { title: "Address Proof", desc: "Bank Statement / Mobile / Telephone Bill", icon: <FaMapMarkedAlt /> },
    { title: "Rent Agreement", desc: "Copy of Rent Agreement (if rented)", icon: <FaFileContract /> },
    { title: "NOC", desc: "No Objection Certificate", icon: <FaFileSignature /> },
];

const comparisonData = [
    { feature: "Act", pvt: "Companies Act, 2013", opc: "Companies Act, 2013", llp: "Limited Liability Partnership Act, 2008", partnership: "Indian Partnership Act, 1932", prop: "No specified Act" },
    { feature: "Registration Requirement", pvt: "Mandatory", opc: "Mandatory", llp: "Mandatory", partnership: "Optional", prop: "No" },
    { feature: "Number of members", pvt: "2 – 200", opc: "Only 1", llp: "2 – Unlimited", partnership: "2 – 50", prop: "Only 1" },
    { feature: "Separate Legal Entity", pvt: "Yes", opc: "Yes", llp: "Yes", partnership: "No", prop: "No" },
    { feature: "Liability Protection", pvt: "Limited", opc: "Limited", llp: "Limited", partnership: "Unlimited", prop: "Unlimited" },
    { feature: "Statutory Audit", pvt: "Mandatory", opc: "Mandatory", llp: "Dependent", partnership: "Not mandatory", prop: "Not mandatory" },
    { feature: "Ownership Transferability", pvt: "Yes", opc: "No", llp: "Yes", partnership: "No", prop: "No" },
    { feature: "Uninterrupted Existence", pvt: "Yes", opc: "Yes", llp: "Yes", partnership: "No", prop: "No" },
    { feature: "Foreign Participation", pvt: "Allowed", opc: "Not Allowed", llp: "Allowed", partnership: "Not Allowed", prop: "Not Allowed" },
    { feature: "Tax Rates", pvt: "Moderate", opc: "Moderate", llp: "High", partnership: "High", prop: "Low" },
    { feature: "Statutory Compliance", pvt: "High", opc: "Moderate", llp: "Moderate", partnership: "Less", prop: "Less" },
];

const processes = [
    { text: "Fill our Registration Form & Make the Payment", icon: <FaClipboardList /> },
    { text: "Expert Will Call You & Receive All the Necessary Documents", icon: <FaPhoneAlt /> },
    { text: "Will Create DSC & the DIN Number of Director", icon: <FaIdBadge /> },
    { text: "MOA and AOA Drafting & Submit", icon: <FaFileAlt /> },
    { text: "Your Documents will be Filed & Submitted to the ROC", icon: <FaUpload /> },
    { text: "Congratulations! You've registered your company. Certificates will be sent by post.", icon: <FaTrophy /> }
];

const advantages = [
    { title: "Limited Liability", desc: "The directors personal property is forever safe no matter the debts of the business. In OPC only investment in the company is lost, personal assets are saved.", icon: <FaShieldAlt /> },
    { title: "Continuous Existence", desc: "An OPC has a separate legal identity, it would pass on the nominee director, therefore, it has continued existence.", icon: <FaInfinity /> },
    { title: "Greater Credibility", desc: "An OPC requires to have its books audited yearly, it has credibility between vendors and lending institutions.", icon: <FaStar /> },
    { title: "Easy to Sell OPC", desc: "OPC Company is simple to sell because of limited documentation work.", icon: <FaHandshake /> },
    { title: "Full Control Over the company", desc: "The fact helps in fast decision making and execution. Yet OPC can select as many as 15 directors for official functions, without providing any share to them.", icon: <FaUserTie /> },
    { title: "Easy to Raise Funds And Loans", desc: "OPC is one of the easiest forms of corporate entities to operate. Very few ROC filings are required to be registered.", icon: <FaMoneyBillWave /> },
];

const faqs = [
    "How long will it take to incorporate a One Person Company?",
    "What is the minimum number of a director to form OPC?",
    "Who is a nominee in a One Person Company?",
    "Can OPC become a member of another private Limited company?",
    "How long is the incorporation of the Company valid for?",
    "What is authorized capital fee?",
    "Can a nominee of a One Person Company be changed after incorporating the company?",
    "What is the Director Identification Number (DIN)?",
    "Is Foreign Direct Investment allowed for One Person Company?",
    "Whether an OPC can be converted to a Public Limited Company and vice versa?",
    "What are the requirements to be a Director or Nominee in a OPC?",
    "Is an office required for starting a One Person Company?",
    "Do I have to be present in person to incorporate a One Person Company?",
    "What do I need to quickly incorporate my One Person Company?"
];

export default function OPCPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">

            {/* HEADER / INTRO */}
            <section className="bg-[#0B1F4D] text-white py-16 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">One Person Company Registration</h1>
                    <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        <span className="font-bold text-white">What is a One Person Company?</span> <br />
                        One Person Company is a category of company where the shareholder is a single person. These companies are created when the founder or owner is a single individual. The owner is not liable to the losses incurred by the company.
                    </p>
                </div>
            </section>

            {/* PACKAGES */}
            <section className="py-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Select Packages</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-white rounded-2xl p-6 border shadow-sm flex flex-col relative ${pkg.recommended ? 'border-[#f26522] ring-2 ring-[#f26522]/20' : 'border-slate-200'}`}>
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f26522] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-[#0B1F4D] text-center">{pkg.name}</h3>
                                <div className="text-center my-4">
                                    <span className="text-3xl font-extrabold text-[#f26522]">₹{pkg.price}</span>
                                </div>
                                <ul className="flex-1 space-y-3 mb-6">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-sm text-slate-600 flex items-start gap-2">
                                            <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-2 mt-auto">
                                    <button className="text-sm font-semibold text-[#0B1F4D] hover:text-[#f26522] transition-colors">Read more</button>
                                    <button className="w-full py-2.5 rounded-lg font-bold text-white bg-gradient-to-r from-[#0B1F4D] to-[#163785] hover:opacity-90 transition-opacity">
                                        {pkg.price === "999" ? "Request Callback" : "Buy Now"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-red-500 font-medium mt-6">* Excluded Govt. Fees & DSC charges</p>
                </div>
            </section>

            {/* REQUIRED DOCUMENTS */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Documents for One Person Company Registration</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {documents.map((doc, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl mb-4">
                                    {doc.icon}
                                </div>
                                <h4 className="font-bold text-[#0B1F4D] mb-1">{doc.title}</h4>
                                <p className="text-xs text-slate-500">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-16 px-5 bg-[#0B1F4D] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">How we work?</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
                        {processes.map((proc, idx) => (
                            <React.Fragment key={idx}>
                                <div className="flex flex-col items-center text-center max-w-[180px] group">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-[#f26522] transition-all duration-300">
                                        {proc.icon}
                                    </div>
                                    <p className="text-sm text-slate-300 leading-snug">{proc.text}</p>
                                </div>
                                {idx !== processes.length - 1 && (
                                    <FaArrowRight className="hidden lg:block text-slate-500 text-xl shrink-0" />
                                )}
                                {idx !== processes.length - 1 && (
                                    <FaArrowRight className="lg:hidden text-slate-500 text-xl shrink-0 rotate-90" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Business Entity Comparison</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-[#f8fafc] border-b border-slate-200 text-[#0B1F4D] text-sm">
                                    <th className="p-4 font-bold border-r">Feature</th>
                                    <th className="p-4 font-bold border-r">Private Limited Company</th>
                                    <th className="p-4 font-bold border-r bg-blue-50/50">One Person Company</th>
                                    <th className="p-4 font-bold border-r">Limited Liability Partnership</th>
                                    <th className="p-4 font-bold border-r">Partnership Firm</th>
                                    <th className="p-4 font-bold">Proprietorship Firm</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-600">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 font-semibold text-slate-700 border-r">{row.feature}</td>
                                        <td className="p-4 border-r">{row.pvt}</td>
                                        <td className="p-4 border-r bg-blue-50/30 font-medium text-[#0B1F4D]">{row.opc}</td>
                                        <td className="p-4 border-r">{row.llp}</td>
                                        <td className="p-4 border-r">{row.partnership}</td>
                                        <td className="p-4">{row.prop}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ADVANTAGES */}
            <section className="py-16 px-5 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Advantages of Becoming One Person Company</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 text-[#0B1F4D] flex items-center justify-center text-xl mb-6">
                                    {adv.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1F4D] mb-3">{adv.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-xl overflow-hidden transition-colors ${openFAQ === index ? 'border-[#0B1F4D] shadow-md' : 'border-slate-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 pr-4">{faq}</span>
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-[#f26522] shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-slate-400 shrink-0" />
                                    )}
                                </button>

                                {/* Dummy answer content for illustration */}
                                {openFAQ === index && (
                                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                                        Our team of experts will assist you with the complete details and process regarding this query. Please feel free to request a callback or contact our support team.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}