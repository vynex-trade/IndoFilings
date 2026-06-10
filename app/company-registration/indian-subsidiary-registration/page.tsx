"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaBuilding,
    FaShieldAlt,
    FaHandshake,
    FaBalanceScale,
    FaGlobe,
    FaInfinity,
    FaLock,
    FaFileInvoiceDollar,
    FaUserTie,
    FaUsers,
    FaMoneyBillWave,
    FaClock,
    FaClipboardList,
    FaPhoneAlt,
    FaIdBadge,
    FaFileSignature,
    FaUpload,
    FaTrophy,
    FaAward,
    FaCertificate,
    FaHeadset,
    FaTags,
    FaBolt,
    FaStar,
    FaChevronDown,
    FaChevronUp,
    FaRegStar,
    FaFileAlt,
    FaPassport,
    FaIdCard,
    FaFileContract,
    FaStamp,
    FaUtensils,
    FaTrademark,
    FaPercent
} from "react-icons/fa";

// --- DATA ARRAYS ---

const advantages = [
    { step: "01", title: "Brand Recognition", desc: "The subsidiary companies can grow in size under the umbrella of a Parent Company, establish brand recognition, and increase the value of shares in the market.", icon: <FaRegStar /> },
    { step: "02", title: "Reduction of Risk", desc: "Legally separated entities mitigate the risk of loss. When a subsidiary faces any loss, it does not directly transfer back to the parent company.", icon: <FaShieldAlt /> },
    { step: "03", title: "Tax Benefits", desc: "Subsidiaries can receive tax advantages, especially if a subsidiary originated in a different state or country.", icon: <FaFileInvoiceDollar /> },
    { step: "04", title: "Easy Merging and Acquisitions", desc: "Company merging and acquisitions are easy. The company can save taxes because the profit of the subsidiary gets divided from the parent company.", icon: <FaHandshake /> },
    { step: "05", title: "Separate Legal Identity", desc: "Under the Companies Act 2013, it gets a separate and distinct legal entity. It can initiate legal actions in its own name.", icon: <FaBalanceScale /> },
    { step: "06", title: "Foreign Entry to the Indian Market", desc: "Foreign companies can establish wholly owned subsidiaries by Foreign Direct Investment (FDI) in India.", icon: <FaGlobe /> },
    { step: "07", title: "Perpetual Succession", desc: "The company’s existence remains intact regardless of management changes, membership transfers, or insolvency.", icon: <FaInfinity /> },
    { step: "08", title: "Limited Liability", desc: "Protects the personal assets of directors and shareholders. Severe losses do not affect their personal property.", icon: <FaLock /> },
];

const requirements = [
    { title: "Shareholders", desc: "At least 2 shareholders are essential. They can be individuals or foreign entities.", icon: <FaUsers /> },
    { title: "Directors", desc: "At least 2 directors are mandatory; one must be an Indian resident residing permanently in India.", icon: <FaUserTie /> },
    { title: "Capital", desc: "For establishing a subsidiary, there is no minimum capital threshold.", icon: <FaMoneyBillWave /> },
    { title: "Time Required", desc: "The registration process takes from 12 to 15 days from the date of document submission.", icon: <FaClock /> },
];

const documentCategories = [
    {
        title: "Documents from the Parent Company",
        items: ["Certificate of incorporation", "Registered Name and address of the company", "Board Resolution"],
        icon: <FaBuilding />
    },
    {
        title: "From Proposed Directors (Foreign)",
        items: ["Passport copy", "Address proof", "Scanned photograph or digital photocopy", "Mobile Number & Email ID"],
        icon: <FaPassport />
    },
    {
        title: "From Indian Directors & Shareholders",
        items: ["PAN and Aadhaar", "Mobile Bill, Credit Card Bill, or Bank Statement", "Digital Photocopy", "Mobile Number & Email ID"],
        icon: <FaIdCard />
    },
    {
        title: "Documents Obtained After Registration",
        items: ["Certificate of Incorporation", "MOA and AOA", "Digital Signature", "Fees paid Challans"],
        icon: <FaFileContract />
    }
];

const packages = [
    {
        name: "Start Up",
        price: "18,999",
        features: [
            "Incorporation Only",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Basic Plan",
        price: "24,999",
        features: [
            "Incorporation",
            "Only GST Registration",
            "Auditor Appointment",
            "Commencement of Business",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Smart Plan",
        price: "39,999",
        recommended: true,
        features: [
            "Incorporation",
            "Only GST Registration",
            "1 Year AFC",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    },
    {
        name: "Mega Plan",
        price: "49,999",
        features: [
            "Incorporation",
            "Only GST Registration",
            "1 Year AFC",
            "1 TM Application",
            "12 Months GST Return Filing",
            "Call, Chat, Email Support",
            "No hidden charges"
        ],
    }
];

const processes = [
    { step: "1", text: "Fill the Form & Make the Payment", icon: <FaClipboardList /> },
    { step: "2", text: "Expert Will Call You & Receive Necessary Documents", icon: <FaPhoneAlt /> },
    { step: "3", text: "Obtain DIN and DSC", icon: <FaIdBadge /> },
    { step: "4", text: "Filing MoA and AoA on the MCA portal", icon: <FaFileSignature /> },
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
    { q: "Do I need to be present during the registration process?", a: "Indian Subsidiary Company Registration is a 100% online procedure. No one is required to be present at our office for subsidiary incorporation. If we want your signature, we will meet you or arrange it digitally." },
    { q: "What are the minimum requirements for Indian Subsidiary Company Registration?", a: "You need a minimum of 2 directors (one Indian resident), 2 shareholders, and no minimum capital requirement." },
    { q: "Is it mandatory to appoint a foreign director for a subsidiary company?", a: "No, but at least one director must be an Indian resident. The other director(s) can be foreign nationals." },
    { q: "Which entity can form a subsidiary?", a: "Any domestic or foreign corporation, LLP, or business entity can form a subsidiary company by holding more than 50% of its share capital." },
    { q: "Does a subsidiary have a board of directors?", a: "Yes, a subsidiary is a separate legal entity and must have its own Board of Directors to manage its day-to-step operations." },
    { q: "What is the percentage of control over a subsidiary entity?", a: "The parent company controls a subsidiary by owning anywhere from 51% to 100% of its voting stock. 100% ownership makes it a wholly-owned subsidiary." }
];

export default function SubsidiaryCompany() {
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
                        Understanding Subsidiary Companies in India
                    </h1>
                    <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10">
                        A subsidiary company is a corporation or business entity that is partially or fully owned by another company, known as the parent company (holding 51% to 100% shares). If any company has more than one subsidiary company, each of them is called a sister company.
                    </p>
                    <button className="bg-[#f26522] hover:bg-[#d9551a] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1">
                        Incorporate a Subsidiary Today
                    </button>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-16 px-5 max-w-7xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F4D] mb-6">Incorporate a Subsidiary from Online Legal India</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Parting a company or creating a new subsidiary under the brand to achieve operational support and focus on the business, a company can build a subsidiary.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        If you have a parent company and want to create a different entity as a subsidiary company, contact Online Legal India. We have highly experienced professionals to assist you in all formalities to meet your requirements.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-[#f26522] p-5 rounded-r-xl mt-6">
                        <p className="text-[#0B1F4D] font-bold">
                            What are you waiting for? Contact us now.
                        </p>
                    </div>
                </div>
            </section>

            {/* ADVANTAGES SECTION */}
            <section className="py-16 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Advantages of Indian Subsidiary Company</h2>
                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">There are several compelling advantages associated with registering a subsidiary company in India:</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 text-7xl font-black text-slate-200/50 group-hover:text-[#f26522]/10 transition-colors z-0">
                                    {adv.step}
                                </div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                                        {adv.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0B1F4D] mb-3">{adv.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{adv.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS & DOCUMENTS */}
            <section className="py-20 px-5 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Requirements */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Requirements for Establishing</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {requirements.map((req, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="text-3xl text-[#0B1F4D] mb-4">{req.icon}</div>
                                    <h4 className="font-bold text-[#f26522] mb-2">{req.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{req.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents Required */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-[#0B1F4D]">Documents Required</h2>
                            <div className="w-16 h-1 bg-[#f26522] mt-3 rounded-full"></div>
                        </div>
                        <div className="space-y-6">
                            {documentCategories.map((cat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#f26522]/10 text-[#f26522] flex items-center justify-center shrink-0 text-xl">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1F4D] mb-3">{cat.title}</h4>
                                        <ul className="space-y-2">
                                            {cat.items.map((item, iIdx) => (
                                                <li key={iIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <FaCheckCircle className="text-[#10a850] mt-1 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex gap-3 text-sm text-amber-800">
                                <FaStamp className="mt-1 shrink-0" />
                                <p>If you want to open a bank account for the subsidiary company, a draft of the first board resolution is required.</p>
                            </div>
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