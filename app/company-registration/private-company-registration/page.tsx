"use client";

import React, { useState } from "react";
// Using react-icons
import {
    FaCheckCircle,
    FaShieldAlt,
    FaDollarSign,
    FaBalanceScale,
    FaBuilding,
    FaFileAlt,
    FaBriefcase,
    FaAward,
    FaChartLine
} from "react-icons/fa";
import { FiTrendingUp, FiRefreshCw } from "react-icons/fi";

// --- DATA ARRAYS ---
const documents = [
    { id: "01", title: "Passport Size Photograph" },
    { id: "02", title: "PAN Card" },
    { id: "03", title: "Registered Office Proof", desc: "Copy of Electricity Bill / Water Bill / Gas Bill" },
    { id: "04", title: "Aadhaar Card" },
    { id: "05", title: "Address Proof" },
    { id: "06", title: "No Objection Certificate (NOC)" },
];

const pricingPlans = [
    { name: "Consultation Fee", price: "999", type: "flat" },
    { name: "Start Up Plan", price: "2999", type: "plus" },
    { name: "Basic Plan", price: "7999", type: "plus", recommended: true },
    { name: "Smart Plan", price: "16999", type: "plus" },
    { name: "Mega Plan", price: "29999", type: "plus" },
];

const featuresList = [
    "Drafting & Filing by Experienced Professionals",
    "Expert advice and assistance",
    "MCA processing and CIN",
    "Company PAN & TAN",
    "MOA & AOA",
    "Allotment of 2 DINs",
    "ESI and PF registration"
];

// Updated icons
const advantages = [
    { title: "Limited Liability", desc: "Shareholders do not risk losing personal assets if the company closes.", icon: <FaShieldAlt /> },
    { title: "StartUp India", desc: "Avail benefits like fund raising and trademark subsidy.", icon: <FiTrendingUp /> },
    { title: "Easy Transferable Ownership", desc: "Easier to subscribe, leave membership, or transfer ownership.", icon: <FiRefreshCw /> },
    { title: "Selling the Business", desc: "Corporation value is based on business, making it easier to sell.", icon: <FaDollarSign /> },
    { title: "Perpetual Succession", desc: "Continues to exist till wind up according to relevant law.", icon: <FaBuilding /> },
    { title: "Raising Money", desc: "Can sell shares or accept public deposits to raise money easily.", icon: <FaChartLine /> },
    { title: "Separate Property", desc: "Capable of owning funds/properties separate from shareholders.", icon: <FaBuilding /> },
    { title: "Better Governed", desc: "Governed by Companies Act, 2013 with strict regulatory procedures.", icon: <FaBalanceScale /> },
    { title: "Taxation", desc: "Taxed at lower rates with better taxable benefits.", icon: <FaFileAlt /> },
    { title: "Capacity To Sue", desc: "As a juristic person, it can sue in its name and be sued.", icon: <FaBriefcase /> },
];

const processes = [
    "Fill the form and make the required payment for the application.",
    "Post-Payment the experts will call back and proceed accordingly.",
    "A draft regarding how to register a pvt ltd company will be made.",
    "The DIN Number and the DSC will be applied for.",
    "AOA and MOA are the next documents submitted for approval.",
    "Documents are sent to the Registrar Of Companies (ROC).",
    "Once the process is done, the company is successfully registered.",
    "After registration, the final document is sent to you."
];

const faqs = [
    "How can I register my Pvt ltd company for free?",
    "What are the documents required for private company registration?",
    "How to convert an OPC into a Private Limited Company?",
    "How can one avoid rejection of registration of the company name in India?",
    "What is Digital Signature and a Digital Signature Certificate (DSC)?",
    "What is a Director Identification Number (DIN)?",
    "What are the types of Companies that I can register in India?",
    "What are Authorized Capital and Paid-up Capital?",
    "What are the documents required for company registration?",
    "What are the Different Classes of Digital Signature Certificates?",
    "What are MOA and AOA?"
];

export default function CompanyRegistration() {
    // FIX: Added explicit generic type <number | null> to useState
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* HERO SECTION */}
            <section className="bg-[#1e3a8a] text-white py-16 px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Fastest Private Limited (Pvt. Ltd.) <br className="hidden md:block" />
                        Company Registration In India
                    </h1>
                    <p className="text-lg mb-6 text-blue-100 max-w-3xl">
                        Register your startup company as private limited with Online Legal India at the lowest Fees. Online Legal India is an MCA & MSME registered company in India.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-all">
                        Register Now
                    </button>
                    <div className="flex flex-wrap gap-6 mt-8">
                        <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700">
                            <FaAward className="text-yellow-400 text-xl" />
                            <span className="font-semibold text-sm">Startup India Recognized</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-lg border border-blue-700">
                            <FaAward className="text-yellow-400 text-xl" />
                            <span className="font-semibold text-sm">ISO 9001:2015 Certified</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW & ELIGIBILITY */}
            <section className="py-16 px-6 lg:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">Overview</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Private Limited Company in India is one of the popular forms of business entities. Approximately 90% of companies in India are registered under Private Limited Company. There are more than 150,000 companies that are being registered on a yearly basis.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                    <h2 className="text-2xl font-bold mb-4 text-blue-900">Eligibility</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3"><FaCheckCircle className="text-green-500 shrink-0 mt-1" /> <span><strong>Directors:</strong> Minimum 2 and Maximum 15.</span></li>
                        <li className="flex gap-3"><FaCheckCircle className="text-green-500 shrink-0 mt-1" /> <span><strong>Shareholders:</strong> Minimum 2 and maximum 200.</span></li>
                        <li className="flex gap-3"><FaCheckCircle className="text-green-500 shrink-0 mt-1" /> <span><strong>Citizenship:</strong> At least one director should hold Indian Citizenship.</span></li>
                    </ul>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section className="py-16 bg-white px-6 lg:px-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Required Documents</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {documents.map((doc) => (
                            <div key={doc.id} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg border">
                                <div className="text-3xl font-black text-blue-100">{doc.id}</div>
                                <div>
                                    <h4 className="font-semibold">{doc.title}</h4>
                                    {doc.desc && <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-16 px-6 lg:px-20 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Fees</h2>
                    <div className="grid md:grid-cols-5 gap-4">
                        {pricingPlans.map((plan) => (
                            <div key={plan.name} className={`relative bg-white p-6 rounded-xl border text-center shadow-sm ${plan.recommended ? 'border-orange-500 ring-2 ring-orange-500' : 'border-slate-200'}`}>
                                {plan.recommended && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</div>}
                                <h3 className="font-semibold text-slate-600 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-blue-900">₹{plan.price}</div>
                                {plan.type === "plus" && <div className="text-xs text-slate-500">+ Govt. Fee</div>}
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 bg-white p-8 rounded-xl border max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-3">
                            {featuresList.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-orange-500" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ADVANTAGES */}
            <section className="py-16 px-6 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Advantages of Private Limited</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map((adv) => (
                            <div key={adv.title} className="p-6 rounded-xl border bg-slate-50/50 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl">
                                    {adv.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                                <p className="text-sm text-slate-600">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ - EXACT IMAGE MATCH */}
            <section className="py-16 px-6 lg:px-20 bg-white border-t">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg cursor-pointer transition-all ${openFAQ === index ? 'border-black' : 'border-gray-200'}`}
                                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                            >
                                <div className="flex items-center p-3.5 gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#75B26A] text-white flex items-center justify-center shrink-0 font-bold text-sm">?</div>
                                    <span className="flex-1 text-[15px] text-gray-700">{faq}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <button className="bg-[#FF7342] hover:bg-[#ff6029] text-white font-bold py-3 px-10 rounded-full shadow-md transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}