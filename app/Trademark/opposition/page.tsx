"use client";

import React from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiCheckCircle,
    FiFileText,
    FiShield,
    FiUser,
    FiEdit3,
    FiAward,
    FiInfo,
    FiAlertCircle,
    FiCheckSquare,
    FiActivity
} from "react-icons/fi";
import { BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";

// --- Pricing Card Component ---
const PricingCard = ({
    title,
    price,
    features,
    highlight = false,
}: {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full ${highlight ? "border-[#ff6f00] shadow-[#ff6f00]/20" : "border-gray-200"}`}>
        <div className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"} text-white text-center py-4 px-2 font-bold text-[13px] tracking-widest uppercase min-h-[56px] flex items-center justify-center`}>
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex justify-center items-center text-4xl font-extrabold text-[#0b1b3d] mb-6">
                <BsCurrencyRupee className="w-6 h-6" />
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
                Apply Now
            </button>
        </div>
    </div>
);

export default function TrademarkOppositionPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Expert Assistance for Trademark Opposition
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            Protect your brand’s unique identity. Legally oppose similar trademarks or defend your own brand against third-party objections with our highly experienced TM experts.
                        </p>

                        <div className="bg-[#1d3275] border-l-4 border-[#ff6f00] p-5 rounded-r-lg mb-8 inline-block text-left shadow-md">
                            <p className="text-sm text-blue-50 leading-relaxed mb-3 font-semibold">
                                Who can file a trademark opposition?
                            </p>
                            <p className="text-sm text-blue-100 mb-3">
                                Section 21 of the Trademarks Act, 1999 states that "any person" who wants to oppose a trademark application can do so. You must have a registered trademark to file an opposition.
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
                            Need Help with Trademark Opposition?
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
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Mobile Number <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Without 0 or +91" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Email Address <span className="text-red-500">*</span></label>
                                <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
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
                                    2 0 4 9
                                </div>
                                <input type="text" placeholder="Enter captcha here.." className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. WHO CAN FILE & GROUNDS */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Grounds & Eligibility for Filing Opposition
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#f8f9fc] p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-[#233a85] text-lg mb-4 border-b border-gray-200 pb-2">Who Can File?</h3>
                            <ul className="space-y-3">
                                {[
                                    "An applicant must have a registered trademark to file an opposition.",
                                    "Any entity, consumer, buyer, or purchaser likely to use the goods.",
                                    "Any person whose business interests are directly affected by the new mark."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                        <FiCheckCircle className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#f8f9fc] p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-[#233a85] text-lg mb-4 border-b border-gray-200 pb-2">Grounds for Opposition</h3>
                            <ul className="space-y-3">
                                {[
                                    "If the mark is contrary to the law or prohibited under the Emblem and Names Act, 1950.",
                                    "If the mark contains matters related to hurting religious sentiments of any class or section of people.",
                                    "If the mark is too identical or deceptive causing confusion with an existing brand."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                                        <FiAlertCircle className="text-[#ff6f00] mr-3 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW WE WORK (Stepper) */}
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
                            "Upload your details and make payment",
                            "Get a call from TM expert",
                            "Expert analyzes & makes a report",
                            "Drafting of Opposition is done",
                            "Expert sends you the draft for approval",
                            "Opposition successfully applied!"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[130px] md:w-[150px]">
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

            {/* 4. PACKAGES (Pricing) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Packages for Trademark Opposition
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-sm font-bold text-gray-500">* Excluding Govt. fees</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
                        <PricingCard
                            title="Reply to Opposition Notice"
                            price="2,499"
                            features={[
                                "Filing a reply on behalf of client who received opposition notice",
                                "On call support",
                                "Email support",
                                "Drafting Opposition Notice reply & Filing",
                                "Free advice"
                            ]}
                        />
                        <PricingCard
                            title="Opposition Notice"
                            price="2,499"
                            features={[
                                "Serving a notice of opposition to object to another Trade Mark",
                                "On call support",
                                "Email support",
                                "Drafting Opposition Notice & Filing",
                                "Free advice"
                            ]}
                        />
                        <PricingCard
                            title="Opposition Notice & Reply"
                            price="4,499"
                            highlight={true}
                            features={[
                                "All in One services regarding Opposition",
                                "On Call & Email Support",
                                "Drafting TM Opposition Notice, Reply & Filing",
                                "Power of Attorney Change",
                                "Extension of time form",
                                "Free Advice"
                            ]}
                        />
                        <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-2/3 mx-auto mt-2">
                            <PricingCard
                                title="Opposition Reply & Hearing"
                                price="19,549"
                                features={[
                                    "Filing a reply for client who received opposition notice",
                                    "On Call & Email Support",
                                    "Drafting TM Opposition Reply & Filing",
                                    "Free Advice"
                                ]}
                            />
                            <PricingCard
                                title="Trademark Opposition Hearing"
                                price="14,350"
                                features={[
                                    "We arrange trademark hearing process following rules.",
                                    "On Call Support",
                                    "Email Support",
                                    "Free Advice"
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DOCUMENTS REQUIRED */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Documents Required
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start bg-[#f8f9fc] p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiUser className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[16px]">Applicant Details</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Name, Address, Nationality of the applicant. Corporate bodies/other entities need to provide a registration certificate.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiEdit3 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[16px]">Power of Attorney</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">A candidate must sign the power of attorney rightfully if they are registering for Trademark Opposition through an advocate/legal firm.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <FiFileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[16px]">Affidavit</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Affidavit with the basic information about the trademark, its user data, and solid proof of use.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-[#f8f9fc] p-6 rounded-xl border border-gray-100">
                            <div className="bg-orange-50 text-[#ff6f00] p-3 rounded-lg mr-4 border border-orange-100 flex-shrink-0">
                                <BsCardChecklist className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0b1b3d] mb-1 text-[16px]">Opposition Details</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Name of the opposing mark/entity and the basic grounds for filing the opposition clearly stated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BENEFITS OF THE SERVICE */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Benefits of Filing Trademark Opposition
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <FiShield className="w-10 h-10 text-[#ff6f00]" />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] mb-3">Limits Brand Duplication</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">It is crucial to limit the creation of a duplicate brand. Acquiring opposition approval protects your brand's hard-earned value and popularity.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <FiAlertCircle className="w-10 h-10 text-[#ff6f00]" />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] mb-3">Bans Identical Trademarks</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">It remains highly beneficial for the Trademark Owner to stop or ban any similar trademark user which can dilute the reputation of a brand in the future.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">
                                <FiActivity className="w-10 h-10 text-[#ff6f00]" />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] mb-3">Clears Consumer Confusion</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">It is equally beneficial towards the consumers because stopping similar marks effectively clears any market confusion surrounding your brand.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. KEY FACTORS / IMPORTANT POINTS */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Key Factors / Important Points
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start bg-blue-50 p-6 rounded-lg border-l-4 border-[#233a85]">
                            <FiInfo className="text-[#233a85] w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-[#0b1b3d] mb-1">Rule 44 Constraints</h4>
                                <p className="text-sm text-gray-700">Rule 44 of the Trademark Rules, 2017 states that an applicant can further file a counter statement in <strong>Form TM-O</strong> within <strong>2 months</strong>.</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-orange-50 p-6 rounded-lg border-l-4 border-[#ff6f00]">
                            <FiAlertCircle className="text-[#ff6f00] w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-[#0b1b3d] mb-1">Consequences of Failure</h4>
                                <p className="text-sm text-gray-700">On failure of filing the counter-statement by the applicant within the stipulated time, the Registrar will take down the form and consider the application abandoned.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}