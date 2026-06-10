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
    FiAward,
    FiDatabase,
    FiCheckSquare,
    FiPieChart,
    FiHeart,
    FiActivity
} from "react-icons/fi";
import { BsBuilding, BsShieldCheck, BsCurrencyRupee, BsBank } from "react-icons/bs";

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
        className={`px-6 py-3 text-sm md:text-[15px] font-bold rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border ${active
                ? "bg-[#233a85] text-white border-[#233a85]"
                : "bg-white text-gray-600 hover:bg-gray-100 border-gray-200"
            }`}
    >
        {label}
    </button>
);

export default function NGODarpanPage() {
    const [activeDocTab, setActiveDocTab] = useState("trust");

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            NGO DARPAN Registration Online
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            Get official recognition, unlock government grants, and open a bank account for your NGO. Let Online Legal India simplify your registration quickly and flawlessly.
                        </p>
                        <p className="text-sm text-blue-200 leading-relaxed mb-6 border-l-4 border-[#ff6f00] pl-4">
                            NGO DARPAN registration is a process through which all non-governmental organizations (NGOs), voluntary organizations (VOs), registered societies, charity organizations, trusts, etc. need to sign up to create a database maintained by NITI Aayog.
                        </p>
                        <button className="hidden md:inline-block bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 px-8 rounded shadow-lg transition-colors">
                            Contact us today to get started
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

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    8 4 1 2
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. OVERVIEW */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                        Why NGO DARPAN is Crucial for Your Organization
                    </h2>
                    <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-8"></div>

                    <p className="text-gray-700 text-base leading-relaxed text-justify mb-6">
                        NGO DARPAN registration is crucial for all NGOs and charity organizations not only for having government grants official recognition, but also to open a bank account in the name of those charitable organizations. Your NGO will have numerous opportunities to avail of government schemes and funding, enhancing their capacity to serve communities.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed text-justify">
                        It ensures greater visibility and credibility, facilitating partnerships with other organizations. After registering with DARPAN, your organization will get a Unique ID. This ID is highly essential to proceed on with the organization.
                    </p>
                </div>
            </section>

            {/* 3. FUNDAMENTAL REASONS (Grid) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Fundamental Reasons for NGO DARPAN Registration
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">DARPAN registration is crucial for enhancing credibility, government support, and transparency.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <BsCurrencyRupee className="w-8 h-8" />,
                                title: "Facilitating Government Grants and Funds",
                                desc: "The government grants and funds are only issuable if NGOs can submit their DARPAN ID to the government body."
                            },
                            {
                                icon: <BsBank className="w-8 h-8" />,
                                title: "NGOs Cannot Open a Bank Account Without It",
                                desc: "Unless your NGO receives a Unique ID from DARPAN, banks will not allow opening an account for the NGO. It is a recent central government declaration."
                            },
                            {
                                icon: <FiShield className="w-8 h-8" />,
                                title: "Enhancing Transparency and Accountability",
                                desc: "Once any NGO gets a unique ID, they can display it publicly. It shows greater transparency and accountability in the activities of NGOs."
                            },
                            {
                                icon: <FiDatabase className="w-8 h-8" />,
                                title: "Creating Centralized Database",
                                desc: "Creating a comprehensive, centralized database helps in tracking the data of any NGO and their contributions to social causes."
                            },
                            {
                                icon: <FiCheckSquare className="w-8 h-8" />,
                                title: "Facilitation of Compliance",
                                desc: "The unique ID is necessary for fulfilling other regulatory requirements such as Form-10A submission, FCRA registration, and more."
                            },
                            {
                                icon: <FiAward className="w-8 h-8" />,
                                title: "Recognition Across Ministries",
                                desc: "Various government departments require DARPAN registration so that NGOs become an integral part of government organizations seamlessly."
                            },
                            {
                                icon: <FiPieChart className="w-8 h-8" />,
                                title: "Improved Project Management",
                                desc: "Registration comes with guidelines from NITI Aayog that can help NGOs manage projects more formally and grow effectively."
                            },
                            {
                                icon: <FiFileText className="w-8 h-8" />,
                                title: "Helps FCRA and Income Tax Registration",
                                desc: "DARPAN Unique ID is mandatory for entities seeking registration under FCRA, Money Laundering Rules, and Income Tax exemptions."
                            },
                            {
                                icon: <FiUsers className="w-8 h-8" />,
                                title: "Strengthens Government-NGO Collaboration",
                                desc: "NITI Aayog streamlines the data-collecting process, establishing a stronger partnership between the government and charitable sectors."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start">
                                <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mb-4 border border-orange-100">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-[#0b1b3d] mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHO CAN APPLY & TIMELINE */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Who Can Apply */}
                    <div className="bg-[#233a85] rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <FiCheckCircle className="text-[#ff6f00] mr-3" />
                            Who Can Apply for NGO DARPAN?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Registered Trusts",
                                "Registered Societies",
                                "Registered Section 8 Companies",
                                "Charitable Associations",
                                "Any other recognized NGOs/VOs"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-blue-50 font-medium">
                                    <FiArrowRight className="text-[#ff6f00] mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Timeline & Price Preview */}
                    <div className="bg-white rounded-2xl p-8 border-2 border-[#ff6f00] shadow-xl flex flex-col justify-center text-center">
                        <FiClock className="w-12 h-12 text-[#233a85] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-4">
                            How Long Will It Take to Register NGO DARPAN Unique ID?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our experts manually validate the document and process the registration. We ensure <strong className="text-[#ff6f00]">5-7 working days</strong> to get the desired NGO DARPAN unique ID after successful document submission.
                        </p>
                        <div className="bg-[#f8f9fc] py-3 rounded-lg border border-gray-200">
                            <p className="text-sm font-bold text-[#233a85]">Quick, Hassle-Free, and 100% Online.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. DOCUMENTS REQUIRED (Tabs) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Documents for NGO DARPAN Registration
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-8"></div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <TabButton active={activeDocTab === "trust"} onClick={() => setActiveDocTab("trust")} label="Trust Registration" />
                        <TabButton active={activeDocTab === "society"} onClick={() => setActiveDocTab("society")} label="Society Registration" />
                        <TabButton active={activeDocTab === "section8"} onClick={() => setActiveDocTab("section8")} label="Section-8 Registration" />
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 min-h-[350px]">

                        {activeDocTab === "trust" && (
                            <div className="animate-fade-in">
                                <h3 className="text-xl font-bold text-[#233a85] mb-6 flex items-center border-b pb-3">
                                    <BsBuilding className="mr-3 text-[#ff6f00]" /> Documents for Trust
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Trust Deed",
                                        "PAN of the Trust",
                                        "KYC of All Members (AADHAAR, PAN, Voter Card)",
                                        "Email IDs of all members",
                                        "Mobile numbers of all members",
                                        "Declaration of Nature of Work/Scope of Work",
                                        "Mentioning the act under which trust is registered"
                                    ].map((doc, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                            <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeDocTab === "society" && (
                            <div className="animate-fade-in">
                                <h3 className="text-xl font-bold text-[#233a85] mb-6 flex items-center border-b pb-3">
                                    <FiUsers className="mr-3 text-[#ff6f00]" /> Documents for Society
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Society Deed",
                                        "PAN of the Society",
                                        "KYC of All Members (AADHAAR, PAN, Voter Card)",
                                        "Email IDs of all members",
                                        "Mobile numbers of all members",
                                        "Declaration of Nature of Work/Scope of Work",
                                        "Mentioning the act under which society is registered",
                                        "Society certificate",
                                        "Society Bylaws/Memorandum"
                                    ].map((doc, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                            <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeDocTab === "section8" && (
                            <div className="animate-fade-in">
                                <h3 className="text-xl font-bold text-[#233a85] mb-6 flex items-center border-b pb-3">
                                    <FiBriefcase className="mr-3 text-[#ff6f00]" /> Documents for Section-8 Company
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Section-8 Registration Certificate",
                                        "Section-8 Deed",
                                        "PAN of the Section-8",
                                        "KYC of All Members (AADHAAR, PAN, Voter Card)",
                                        "Email IDs & Mobile numbers of all members",
                                        "Declaration of Nature of Work/Scope of Work",
                                        "Mentioning the act under which Section 8 is registered",
                                        "Incorporation certificate",
                                        "MOA (Memorandum of Association) + AOA (Articles of Association)",
                                        "PAN of Section-8 Company",
                                        "TAN (Tax Deduction Account Number)",
                                        "KYC of the directors",
                                        "DIN (Directors’ Identification Number)"
                                    ].map((doc, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                            <FiCheckSquare className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 6. PACKAGE PRICING */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Package Details
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-sm mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-[#233a85]">
                            <div className="bg-[#233a85] text-white text-center py-4 font-bold text-sm tracking-widest uppercase">
                                NGO DARPAN Registration Package
                            </div>
                            <div className="p-8 text-center">
                                <div className="flex justify-center items-center text-5xl font-extrabold text-[#0b1b3d] mb-2">
                                    <BsCurrencyRupee className="w-8 h-8" />
                                    5,000
                                </div>
                                <p className="text-xs text-[#ff6f00] font-bold mb-4">+ 18% GST</p>
                                <div className="bg-gray-100 text-gray-600 text-xs font-semibold py-1.5 px-4 rounded-full inline-block mb-8 border border-gray-200">
                                    (One Time Charge)
                                </div>

                                <ul className="space-y-4 mb-8 text-left">
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Complete DARPAN Registration
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Document Validation & Processing
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <FiCheckCircle className="text-[#ff6f00] w-5 h-5 mr-3" />
                                        Dedicated Expert Support
                                    </li>
                                </ul>
                                <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-4 rounded-xl shadow-lg transition-colors">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. HOW WE WORK (Stepper - 6 Steps) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 md:gap-x-4 text-center relative z-10">
                        {[
                            "Fill out Online Form",
                            "Make the Payment",
                            "Expert Will Call You & Collect Documents",
                            "Application submission on the portal with document",
                            "NGO DARPAN processing",
                            "Congratulations! You will get NGO DARPAN unique ID."
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[140px] md:w-[150px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[12px] md:text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
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

            {/* 8. WHY US? */}
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
                            { icon: <FiHeart />, title: "Highly Experienced Professional" },
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

            {/* 9. POPULAR SERVICES */}
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

            {/* 10. FAQs */}
            <section className="py-20 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is NGO DARPAN?" defaultOpen={true}>
                            NGO DARPAN is an online platform provided by the NITI Aayog for the registration and management of Non-Governmental Organizations (NGOs), Trusts, and Societies in India. It creates a centralized database for the government.
                        </Accordion>
                        <Accordion title="Why do I need to register my NGO on DARPAN?">
                            Registration provides a unique DARPAN ID which is mandatory for receiving government grants, opening an NGO bank account, registering under FCRA, and achieving official recognition and credibility across ministries.
                        </Accordion>
                        <Accordion title="What documents are required for DARPAN registration?">
                            Depending on your entity type (Trust, Society, or Section-8 Company), you need the Registration Deed/Certificate, PAN of the NGO, KYC (Aadhaar, PAN) of all members/directors, and details of the scope of work.
                        </Accordion>
                        <Accordion title="How long does the registration process take?">
                            Once all documents are successfully submitted and validated by our experts, it typically takes 5-7 working days to receive your NGO DARPAN unique ID.
                        </Accordion>
                        <Accordion title="Can foreign NGOs register on DARPAN?">
                            NGO DARPAN is primarily for Indian NGOs, Voluntary Organizations, and Non-Profit Organizations. Foreign NGOs operating in India have different compliance regulations, particularly under FCRA.
                        </Accordion>
                        <Accordion title="How do I apply for DARPAN registration?">
                            You can simply fill out the contact form on our website, make the minimal required payment, and our assigned experts will collect your documents and process the application on the portal on your behalf.
                        </Accordion>
                        <Accordion title="What happens if my application is rejected?">
                            Applications are rarely rejected if documents are accurate. If rejected due to documentation errors, our experts will rectify the issue, update the required information, and re-submit the application promptly.
                        </Accordion>
                        <Accordion title="How can I check the status of my DARPAN registration?">
                            Our Quick Response Team continuously tracks the status of your application. You will be updated regularly via email and phone until your DARPAN ID is successfully generated.
                        </Accordion>
                        <Accordion title="Is there any renewal process for DARPAN registration?">
                            Currently, there is no expiration or renewal process for the NGO DARPAN ID. It remains a one-time registration, though organizations are expected to keep their details updated on the portal.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}