"use client";

import React, { useState } from "react";
import {
    FaCheckCircle,
    FaIdCard,
    FaMapMarkerAlt,
    FaCameraRetro,
    FaHome,
    FaFileSignature,
    FaClipboardList,
    FaComments,
    FaFileAlt,
    FaSearch,
    FaTrophy,
    FaMoneyBillWave,
    FaHandHoldingUsd,
    FaUsers,
    FaFont,
    FaPiggyBank,
    FaArrowRight,
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

// --- DATA ARRAYS ---

const advantages = [
    {
        title: "No Minimum Capital Requirement",
        subtitle: "Capital",
        desc: "No minimum capital limit has been mentioned for a Section 8 Company in India. The capital structure may be altered at any stage as per growth requirements. It can be formed without any share capital.",
        icon: <FaMoneyBillWave />
    },
    {
        title: "Zero Stamp Duty",
        subtitle: "Exemption",
        desc: "A Section 8 Company is exempt from the requirement of paying stamp duty on the MoA and AoA, which is normally applicable for the registration of other kinds of company structures.",
        icon: <FaFileSignature />
    },
    {
        title: "Exemption to the Donors",
        subtitle: "Donors",
        desc: "Those donating to a Section 8 Company are eligible for tax exemptions u/s 12A and 80G of the Income Tax Act.",
        icon: <FaHandHoldingUsd />
    },
    {
        title: "Membership Flexibility",
        subtitle: "Membership",
        desc: "A registered partnership firm can become a member in its individual capacity and obtain Directorship.",
        icon: <FaUsers />
    },
    {
        title: "No Suffix Required",
        subtitle: "Name",
        desc: "Section 8 Company does not need to suffix Limited or Private Limited next to its legal name. It can be registered with words like Association, Society, Council, Club, Foundation, Academy, etc.",
        icon: <FaFont />
    },
    {
        title: "Donation & Funding",
        subtitle: "Save Money",
        desc: "Not allowed to raise capital by deposits but can accept donations from the general public. A proper system must be laid down to avoid money laundering cases.",
        icon: <FaPiggyBank />
    }
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
        name: "Basic Plan",
        price: "8,999",
        features: [
            "Register Section 8 company at MCA",
            "Drafting & Filing by Experts",
            "Expert advice & MCA processing and CIN",
            "RD license",
            "Company PAN & TAN, MOA & AOA",
            "Allotment of 2 DIN",
            "Estimated Income & Expenditure Account for 3 years (mandatory)"
        ],
    },
    {
        name: "Smart Plan",
        price: "19,999",
        recommended: true,
        features: [
            "Everything in Basic Plan +",
            "Financial statements preparation",
            "MCA annual return filing",
            "DIR-3 Director KYC",
            "Auditor Appointment"
        ],
    },
    {
        name: "Mega Plan",
        price: "29,999",
        features: [
            "Everything in Smart Plan +",
            "Trademark application",
            "Income tax return filing"
        ],
    }
];

const documents = [
    { title: "Pan Card", desc: "Copy of PAN Card", icon: <FaIdCard /> },
    { title: "Aadhaar", desc: "Copy of Aadhaar Card", icon: <FaIdCard /> },
    { title: "Address Proof", desc: "Bank Statement, Electricity Bill, Telephone Bill", icon: <FaMapMarkerAlt /> },
    { title: "Photograph", desc: "Two passport size Photographs", icon: <FaCameraRetro /> },
    { title: "Ownership Proof", desc: "Ownership Proof House Tax", icon: <FaHome /> },
    { title: "NOC", desc: "No Objection Certificate", icon: <FaFileSignature /> },
];

const processes = [
    { text: "Fill our Registration Form & Make the Payment", icon: <FaClipboardList /> },
    { text: "Share the required Documents after Communication with Experts", icon: <FaComments /> },
    { text: "Our Experts will start Drafting the Requirements", icon: <FaFileAlt /> },
    { text: "Once DIN & DSC is registered we proceed for Business Name Approval", icon: <FaSearch /> },
    { text: "Once Approved, your Section-8 Company is Registered.", icon: <FaTrophy /> }
];

const faqs = [
    {
        q: "What is a Section 8 Company?",
        a: "A company is referred to as Section 8 Company when it is registered as a Non-Profit Organization (NPO) or Non-Governmental organizations (NGOs) i.e. when it has a motive of promoting arts, commerce, education, charity, protection of environment, sports, science, research, social welfare, religion and intends to use its profits (if any) or other income for under section 8(1a, 1b, 1c) of the Companies Act, 2013."
    },
    { q: "What are the Required Documents for Section 8 Company Registration?", a: "The standard documents include PAN card, Aadhaar card, Address Proof (bank statement/utility bill), Passport size photographs, Ownership proof of registered office, and a No Objection Certificate (NOC) from the owner." },
    { q: "What is the Eligibility to be Incorporated as a Section 8 company?", a: "Any individual or association of persons intending to promote a charitable objective (art, science, sports, education, etc.) and intending to apply profits towards those objectives without paying dividends to members is eligible." },
    { q: "Can a Sec 8 Company be incorporated both as Public & Private Company?", a: "Yes, a Section 8 Company can be incorporated either as a Private Limited Company (minimum 2 directors/members) or a Public Limited Company (minimum 3 directors and 7 members)." },
    { q: "Can a One Person Company (OPC) become a member of a Section-8 Company?", a: "No, under the Companies Act, 2013, an OPC cannot invest in securities of any body corporate and thus cannot become a member of a Section 8 Company." },
    { q: "To which Ministry of Indian Govt. a Section 8 Company is Registered?", a: "A Section 8 Company is registered with the Ministry of Corporate Affairs (MCA), Government of India." },
    { q: "Can Section 8 Companies be a Holding Identity of Another Company?", a: "Yes, a Section 8 company can be a holding company of another company, provided its own profits are still utilized strictly for its charitable objectives." },
    { q: "Can Section 8 carry out MicroFinance Activities?", a: "Yes, subject to strict compliance with RBI guidelines. However, forming a Section 8 company specifically for microfinance often requires RBI approval or adherence to specific state-level money-lending acts." },
    { q: "Is it Mandatory for a Section 8 Company to Appoint an Independent Director?", a: "No, Section 8 companies are generally exempted from the mandatory requirement of appointing independent directors under the Companies Act, 2013." },
];

export default function Section8Company() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen pb-20">

            {/* HEADER / INTRO */}
            <section className="bg-gradient-to-r from-[#0B1F4D] to-[#1A3673] text-white py-20 px-5">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Section 8 Company Registration (NGO)
                    </h1>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Register your Non-Profit Organization (NPO) or NGO swiftly. Promote arts, commerce, education, charity, and social welfare with tax benefits and zero minimum capital requirements under the Companies Act, 2013.
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

            {/* ADVANTAGES */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">
                            Advantages of Registering a Section 8 Company
                        </h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((adv, idx) => (
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

            {/* DOCUMENTS REQUIRED */}
            <section className="py-20 px-5 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Documents Required</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((doc, idx) => (
                            <div key={idx} className="flex gap-5 p-6 border border-slate-200 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
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

            {/* FAQ SECTION */}
            <section className="py-20 px-5 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D]">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openFAQ === index ? 'border-[#0B1F4D] shadow-lg' : 'border-slate-200'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 pr-4 text-base">{faq.q}</span>
                                    {openFAQ === index ? (
                                        <FaChevronUp className="text-[#f26522] shrink-0 text-xl" />
                                    ) : (
                                        <FaChevronDown className="text-slate-400 shrink-0 text-xl" />
                                    )}
                                </button>

                                {openFAQ === index && (
                                    <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed bg-white border-t border-slate-100">
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