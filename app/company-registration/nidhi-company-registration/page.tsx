"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaBuilding,
    FaBalanceScale,
    FaShieldAlt,
    FaPiggyBank,
    FaClipboardList,
    FaPhoneAlt,
    FaIdBadge,
    FaFileSignature,
    FaUpload,
    FaTrophy,
    FaFileInvoiceDollar,
    FaTrademark,
    FaPercent,
    FaGlobe,
    FaUtensils,
    FaAward,
    FaUsers,
    FaCertificate,
    FaHeadset,
    FaClock,
    FaTags,
    FaBolt,
    FaStar,
    FaChevronDown,
    FaChevronUp,
    FaIdCard,
    FaMapMarkerAlt,
    FaCameraRetro
} from "react-icons/fa";

// --- DATA ARRAYS ---

const benefits = [
    {
        title: "Legal Existence",
        desc: "Nidhi Company enjoys a separate legal existence as a registered Mutual Benefit Society. The company can dispose of or acquire funds/assets in its name.",
        icon: <FaBalanceScale />
    },
    {
        title: "Liability is Limited",
        desc: "The invested or contributed amount comes from its members. Hence, the liability is limited. Members do not have personal liabilities towards the company’s liabilities.",
        icon: <FaShieldAlt />
    },
    {
        title: "Low-Interest Borrowing",
        desc: "The members can borrow funds from the company’s account deposited by themselves only. Hence, they can borrow it at the lowest interest rate they decide.",
        icon: <FaPiggyBank />
    }
];

const requirements = [
    "200 members minimum",
    "7 Directors & 7 Shareholders minimum",
    "5 lakhs of equity capital",
    "Net owned capital 10 lakh or more",
    "Nidhi must be a public limited company",
    "Should have “Nidhi Limited” as its name suffix",
    "Can borrow and lend funds only from/to members",
    "Net Owned Funds to deposits ratio of 1:20 or less",
    "All directors must have DINs"
];

const documents = [
    { text: "Office Address details with Proof", icon: <FaMapMarkerAlt /> },
    { text: "In the case of a rented office, NOC duly signed by the landlord", icon: <FaFileSignature /> },
    { text: "Address-proof of the members", icon: <FaMapMarkerAlt /> },
    { text: "Photographs of the members", icon: <FaCameraRetro /> },
    { text: "Members’ Copies of PAN cards", icon: <FaIdCard /> },
    { text: "DSC (digital signature certificate) of the company", icon: <FaIdBadge /> },
    { text: "Identity Proofs & DIN of all directors", icon: <FaIdCard /> },
    { text: "A certified copy of MoA and AoA of the company", icon: <FaFileInvoiceDollar /> }
];

const packages = [
    {
        name: "Start Up",
        price: "17,999",
        features: [
            "Incorporation Only",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Basic Plan",
        price: "21,999",
        recommended: true,
        features: [
            "Incorporation",
            "Auditor Appointment",
            "Commencement of Business",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Smart Plan",
        price: "34,999",
        features: [
            "Incorporation",
            "1 Year AFC",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Mega Plan",
        price: "48,999",
        features: [
            "Incorporation",
            "1 Year AFC",
            "1 TM Application",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    }
];

const processes = [
    { step: "1", text: "Fill the Form & Make the Payment", icon: <FaClipboardList /> },
    { step: "2", text: "Expert Will Call You & Receive All Necessary Documents", icon: <FaPhoneAlt /> },
    { step: "3", text: "Will Create DSC & the DIN Number of Director", icon: <FaIdBadge /> },
    { step: "4", text: "MoA and AoA Drafting & Submit", icon: <FaFileSignature /> },
    { step: "5", text: "Your Documents will be Filed & Submitted to the ROC", icon: <FaUpload /> },
    { step: "6", text: "Congratulations! Certificates Will Be Provided", icon: <FaTrophy /> }
];

const whyUs = [
    { text: "Recognized by Govt. of India", icon: <FaAward /> },
    { text: "5 Lakh+ Happy Customers", icon: <FaUsers /> },
    { text: "ISO 9001: 2015 Certified", icon: <FaCertificate /> },
    { text: "Personal Data Security & Trust", icon: <FaShieldAlt /> },
    { text: "Reliable Customer Support", icon: <FaHeadset /> },
    { text: "Quick Services Assured", icon: <FaClock /> },
    { text: "Challenging Prices across India", icon: <FaTags /> },
    { text: "Quick Response Team", icon: <FaBolt /> },
    { text: "Excellent Reviews & Ratings", icon: <FaStar /> },
];

const popularServices = [
    { name: "Online Tax Services", icon: <FaFileInvoiceDollar /> },
    { name: "Trademark Registration", icon: <FaTrademark /> },
    { name: "GST Registration Services", icon: <FaPercent /> },
    { name: "Import Export Code", icon: <FaGlobe /> },
    { name: "FSSAI License", icon: <FaUtensils /> },
    { name: "Company Registration", icon: <FaBuilding /> },
];

const faqs = [
    {
        q: "Which Act of the Indian Govt. administrates the Nidhi Company registration process?",
        a: "In India, section 406 of the Companies Act, 2013 recognizes the Nidhi Company Registration process under the Ministry of Corporate Affairs (MCA) of the Indian Govt."
    },
    {
        q: "What is the Minimum Capital requirement to incorporate a Nidhi Company?",
        a: "A minimum equity share capital of Rs. 5 Lakhs is required to incorporate a Nidhi Company in India."
    },
    {
        q: "On what condition a Nidhi Company can provide loans to its members?",
        a: "A Nidhi Company can only provide loans to its registered members against tangible collateral such as gold, silver, property mortgage, fixed deposits, or life insurance policies."
    },
    {
        q: "What is the requirement for a minimum number of Members in a Nidhi Company?",
        a: "To start, a minimum of 7 members are required to incorporate the company. However, within one year of incorporation, the company must ensure it has at least 200 members."
    },
    {
        q: "Who can become a member/shareholder in a Nidhi Company?",
        a: "Any individual who is a citizen of India and above 18 years of age can become a member. Body corporates, trusts, and minors cannot become members of a Nidhi Company."
    }
];

export default function NidhiCompany() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-[#0B1F4D] to-[#1A3673] py-20 px-5">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Nidhi Company Registration in India Online
                    </h1>
                    <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10">
                        A Nidhi Company is a type of Non-Banking Financial Company (NBFC) dedicated to lending or borrowing money to all its members as required. According to the Nidhi Rules, 2014, members can borrow money against tangible collateral such as property mortgage, gold, etc.
                    </p>
                    <button className="bg-[#f26522] hover:bg-[#d9551a] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        Register Your Nidhi Company
                    </button>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-16 px-5 max-w-7xl mx-auto">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        The conception of Nidhi Company was initiated to practice thrift amongst its members, receiving deposits and lending money for mutual benefit. A Nidhi company is regulated by the <strong className="text-[#0B1F4D]">Ministry of Corporate Affairs</strong> but it does not need to receive any license from the Reserve Bank of India (RBI).
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        These companies will be registered as public limited companies, and you can mention them as “Nidhi Limited” following the names of the companies.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-[#0B1F4D] p-5 rounded-r-xl mt-6">
                        <p className="text-[#0B1F4D] font-medium">
                            If you like to Register a Nidhi company, we can assist you. We have a dedicated team to provide services for your customized needs. Contact us today.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Benefits of Nidhi Company Registration</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                        <p className="text-slate-500 mt-4">Among the heaps of advantages, some vital points are mentioned here. Let’s learn them.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-3xl mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1F4D] mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS & DOCUMENTS */}
            <section className="py-20 px-5 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Minimum Requirements */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Minimum Requirements</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                            <p className="text-slate-500 mt-3 text-sm">For Establishing a Nidhi Company:</p>
                        </div>
                        <ul className="space-y-4">
                            {requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <FaCheckCircle className="text-[#10a850] mt-1 shrink-0 text-lg" />
                                    <span className="text-slate-700 font-medium">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Documents Required */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Documents Required</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {documents.map((doc, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-2xl text-[#f26522]">
                                        {doc.icon}
                                    </div>
                                    <span className="text-sm text-slate-600 leading-snug">{doc.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* PRICING PACKAGES */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Package Details</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-slate-50 rounded-3xl p-8 border shadow-sm flex flex-col relative transition-transform hover:-translate-y-2 hover:shadow-lg ${pkg.recommended ? 'border-[#f26522] ring-2 ring-[#f26522]/20 bg-white' : 'border-slate-200'}`}>
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f26522] to-[#e85510] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-[#0B1F4D] text-center mb-4">{pkg.name}</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-black text-[#f26522]">₹{pkg.price}</span>
                                    <p className="text-xs text-slate-500 font-bold mt-1">+18% GST</p>
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
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="py-20 px-5 bg-gradient-to-b from-[#0B1F4D] to-[#051029] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work?</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                        <p className="text-blue-200 mt-4">Our experts manually validate the documents and process filing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
                        {processes.map((proc, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="absolute -top-6 w-14 h-14 bg-[#f26522] text-white font-black text-2xl rounded-full flex items-center justify-center border-4 border-[#0B1F4D] shadow-lg group-hover:scale-110 transition-transform">
                                    {proc.step}
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl mt-6 mb-5">
                                    {proc.icon}
                                </div>
                                <p className="text-sm text-slate-200 leading-relaxed font-medium">{proc.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US & POPULAR SERVICES GRID */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Why Us */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Why Us?</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {whyUs.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 text-[#f26522] flex items-center justify-center shrink-0 text-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-semibold text-[#0B1F4D] leading-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Services */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Popular Services</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {popularServices.map((service, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-gradient-to-r from-[#0B1F4D] to-[#163785] p-5 rounded-xl text-white hover:-translate-y-1 transition-transform shadow-md cursor-pointer">
                                    <div className="text-2xl text-blue-200 shrink-0">
                                        {service.icon}
                                    </div>
                                    <span className="font-semibold text-sm">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 px-5 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B1F4D]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFAQ === index ? 'border-[#0B1F4D] shadow-md' : 'border-slate-200 shadow-sm'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-[#f26522] shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-slate-400 shrink-0" />
                                    )}
                                </button>

                                {openFAQ === index && (
                                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
                                        {faq.a}
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