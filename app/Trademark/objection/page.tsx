"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckSquare,
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiClock,
    FiUsers,
    FiStar,
    FiBriefcase,
    FiGlobe,
    FiEdit3,
    FiAlertTriangle,
    FiSearch,
    FiMail,
    FiPhone
} from "react-icons/fi";
import { BsBuilding, BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";

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
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1a2b63]"
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

// --- Pricing Card ---
const PricingCard = ({
    title,
    price,
    features,
    highlight = false,
    badge = ""
}: {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
    badge?: string;
}) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full relative ${highlight ? "border-[#ff6f00] shadow-[#ff6f00]/20" : "border-gray-200"}`}>
        {badge && (
            <div className="absolute top-0 right-0 bg-[#ff6f00] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider">
                {badge}
            </div>
        )}
        <div className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"} text-white text-center py-3 font-bold text-sm tracking-widest uppercase min-h-[44px] flex items-center justify-center`}>
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex justify-center items-center text-4xl font-extrabold text-[#0b1b3d] mb-6">
                <BsCurrencyRupee className="w-7 h-7" />
                {price}
            </div>
            <ul className="space-y-3 mb-8 flex-grow text-left">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-[13px] font-medium leading-snug">
                        <FiCheckSquare className="w-4 h-4 text-[#ff6f00] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full mt-auto ${highlight ? "bg-[#ff6f00] hover:bg-[#e66400]" : "bg-[#233a85] hover:bg-[#1a2b63]"} text-white font-bold py-3 rounded-md shadow-md transition-colors`}>
                Buy Now
            </button>
        </div>
    </div>
);

export default function TrademarkObjectionReplyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Reply To Your Objected Trademark
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            OnlineLegalIndia.com can help you file a professional reply to a trademark objection in 5 to 10 working days, subject to government and client processing time.
                        </p>

                        <div className="bg-[#1d3275] border-l-4 border-[#ff6f00] p-5 rounded-r-lg mb-8 inline-block text-left shadow-md">
                            <p className="text-sm text-blue-50 leading-relaxed">
                                The validity of the Trademark exists for 10 years. Renew your Trademark certificate before expiration to avoid any objection & interruption. The application has to be filed on or before 6 months from the date of expiration of the registration.
                            </p>
                        </div>

                        {/* Stat Cards */}
                        <div className="hidden md:flex gap-4 mt-2">
                            <div className="bg-white/10 px-5 py-3 rounded-lg border border-white/20 flex flex-col items-center">
                                <span className="text-2xl font-black text-[#ff6f00]">5 Lac+</span>
                                <span className="text-xs font-semibold text-blue-50 tracking-wider uppercase">Happy Clients</span>
                            </div>
                            <div className="bg-white/10 px-5 py-3 rounded-lg border border-white/20 flex flex-col items-center">
                                <span className="text-2xl font-black text-[#ff6f00]">Easy EMI</span>
                                <span className="text-xs font-semibold text-blue-50 tracking-wider uppercase">Options Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with Trademark Objection Reply?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Enter Name" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Email Address <span className="text-red-500">*</span></label>
                                <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Without 0 or +91" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                        <option value="">Select State</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="DL">Delhi</option>
                                        <option value="KA">Karnataka</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-600 mb-1 block">City <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Your City" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Where did you hear about us? <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">Select Source</option>
                                    <option value="google">Google</option>
                                    <option value="social">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. REASONS FOR TRADEMARK OBJECTION */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Reasons for Trademark Objection
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Incorrect Name of the Trademark Applicant",
                            "Incorrect Address on the Trademark Application",
                            "Failure in filing Trademark Form TM-48",
                            "Filing of Incorrect Trademark Form",
                            "Trademark filing under the Wrong Trademark Class",
                            "The proposed Trademark already exists",
                            "Trademark lacks distinctive character",
                            "Vague specifications of Goods and Services",
                            "Deceptive Trademark",
                            "User affidavit not attached"
                        ].map((reason, idx) => (
                            <div key={idx} className="flex items-start bg-[#f8f9fc] p-4 rounded-lg border border-gray-100 hover:border-[#233a85] transition-colors">
                                <div className="w-6 h-6 bg-[#ff6f00] text-white rounded-full flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                                    {idx + 1}
                                </div>
                                <span className="text-sm font-semibold text-[#0b1b3d]">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. HOW WE WORK (Stepper) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-2 md:gap-x-4 text-center relative z-10">
                        {[
                            "Fill the form & Make the Payment",
                            "Get a call from TM expert",
                            "Expert will analyze Examination report",
                            "Drafting of Objection Reply",
                            "Expert sends draft for approval",
                            "Congratulations! Reply Submitted Online"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[130px] md:w-[150px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[12px] md:text-[13px] font-semibold text-[#0b1b3d] leading-snug">{step}</p>
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

            {/* 4. DOCUMENTs REQUIRED */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Required Documents for Trademark Objection Reply
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiFileText className="w-8 h-8" />,
                                title: "Brand Logo",
                                desc: "Clear copy of the trademark/logo that is objected."
                            },
                            {
                                icon: <FiSearch className="w-8 h-8" />,
                                title: "Examination Report",
                                desc: "The official examination report issued by the Trademark Registry."
                            },
                            {
                                icon: <BsCardChecklist className="w-8 h-8" />,
                                title: "Supporting Proof",
                                desc: "Evidence supporting your ownership and usage of the trademark (User Affidavit, invoices, etc.)."
                            },
                            {
                                icon: <FiEdit3 className="w-8 h-8" />,
                                title: "Form TM-48",
                                desc: "Power of Attorney authorizing your agent/advocate to act on your behalf."
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-full mb-4">
                                    {doc.icon}
                                </div>
                                <h3 className="font-bold text-[#0b1b3d] mb-2">{doc.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PACKAGES */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Select Your Package
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingCard
                            title="Standard Plan"
                            price="4,599"
                            badge="Limited Offer"
                            features={[
                                "Free Consultation with TM expert",
                                "Drafting and filing of TM objection",
                                "For trademark applications filed by third-parties",
                                "Fresh Form-48",
                                "Chat, Call & Email Support"
                            ]}
                        />
                        <PricingCard
                            title="Premium Plan"
                            price="10,999"
                            badge="Limited Offer"
                            highlight={true}
                            features={[
                                "Free Consultation with TM expert",
                                "Drafting and filing of TM objection",
                                "Trademark Hearing Support",
                                "Chat, Call & Email Support",
                                "Complete end-to-end assistance"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* 6. FAQs */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="What is a Trademark?" defaultOpen={true}>
                            A trademark is a kind of intellectual property which consists of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.
                        </Accordion>
                        <Accordion title="What is meant by trademark 'objected'?">
                            It means the Trademark Registry has raised concerns regarding your application. An objection report is issued, and you must file a reply (counter-statement) within the stipulated time to proceed with registration.
                        </Accordion>
                        <Accordion title="Where to get the examination report of trademark objection?">
                            The examination report is available on the official IP India website. You can download it using your trademark application number and password. Our experts can also retrieve it for you.
                        </Accordion>
                        <Accordion title="How much time does it take for trademark objection reply?">
                            Once you provide all necessary documents, our experts typically draft and file the objection reply within 5-10 working days, depending on the complexity of the case.
                        </Accordion>
                        <Accordion title="What if I missed my Trademark examination reply deadline?">
                            Missing the deadline can lead to your trademark application being abandoned. However, you can still file a request for restoration along with a harried fee and a strong justification for the delay.
                        </Accordion>
                        <Accordion title="What is the difference between trademark objected and trademark opposed?">
                            'Objected' means the Registry itself found issues with your application. 'Opposed' means a third party has filed an opposition against your mark. Both require different types of replies and legal strategies.
                        </Accordion>
                        <Accordion title="When a trademark gets objected?">
                            A trademark gets objected when the Registrar finds it non-compliant with the Trade Marks Act — for example, if it is similar to an existing mark, lacks distinctiveness, or contains prohibited elements.
                        </Accordion>
                        <Accordion title="What are the grounds available for objection?">
                            Common grounds include: Section 9(1)(a) - the mark is devoid of distinctive character; Section 9(1)(b) - it describes the goods/services; Section 11 - it is similar to an existing mark.
                        </Accordion>
                        <Accordion title="What will happen if the response fails to satisfy the trademark office?">
                            If the reply is not satisfactory, the application may be refused. You can then appeal to the Intellectual Property Appellate Board (IPAB) within the prescribed time limit.
                        </Accordion>
                        <Accordion title="Is there any Government fee to file the examination reply?">
                            Yes, there is a government fee of Rs. 2,700 for filing the counter-statement/objection reply under Rule 45 of the Trade Marks Rules, 2017.
                        </Accordion>
                        <Accordion title="Can I use the TM sign for my Trademark or Logo even if the Trademark Objection Examination Report is issued?">
                            Yes, you can continue using the ™ symbol even after an objection is issued, as long as your application is still pending. The ® symbol can only be used after final registration.
                        </Accordion>
                        <Accordion title="What is the Trademark examination reply deadline?">
                            Typically, you must file the reply within 30 days from the date of receiving the examination report. Extensions can be requested, but it's best to reply promptly to avoid complications.
                        </Accordion>
                        <Accordion title="What will happen if I fail to submit reply to the Trademark Objection Online?">
                            Failure to file a reply within the given time will result in your application being marked as "Abandoned" or "Refused". You would then need to file a fresh application with additional costs.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}