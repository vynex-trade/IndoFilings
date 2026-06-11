"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckSquare,
    FiPenTool,
    FiShield,
    FiDroplet,
    FiCheckCircle,
    FiEdit3,
    FiImage
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";

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

// --- Pricing Card Component ---
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
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full relative ${highlight ? "border-[#ff6f00] shadow-xl shadow-[#ff6f00]/10 scale-105 z-10" : "border-gray-200"}`}>
        {badge && (
            <div className="absolute top-0 right-0 bg-[#ff6f00] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wider">
                {badge}
            </div>
        )}
        <div className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"} text-white text-center py-4 px-2 font-bold text-sm tracking-widest uppercase min-h-[50px] flex items-center justify-center`}>
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex justify-center items-center text-4xl font-extrabold text-[#0b1b3d] mb-6">
                <BsCurrencyRupee className="w-6 h-6" />
                {price}
            </div>
            <ul className="space-y-3 mb-8 flex-grow text-left">
                {features.map((feature, idx) => {
                    // Highlight Trademark specific features with a shield icon
                    const isTMFeature = feature.toLowerCase().includes("trademark") || feature.toLowerCase().includes("™");
                    return (
                        <li key={idx} className="flex items-start text-gray-700 text-[13px] font-medium leading-snug">
                            {isTMFeature ? (
                                <FiShield className="w-4 h-4 text-[#ff6f00] mr-2 flex-shrink-0 mt-0.5" />
                            ) : (
                                <FiCheckSquare className="w-4 h-4 text-[#233a85] mr-2 flex-shrink-0 mt-0.5" />
                            )}
                            <span>{feature}</span>
                        </li>
                    );
                })}
            </ul>
            <button className={`w-full mt-auto ${highlight ? "bg-[#ff6f00] hover:bg-[#e66400]" : "bg-[#233a85] hover:bg-[#1a2b63]"} text-white font-bold py-3 rounded-md shadow-md transition-colors`}>
                Select Plan
            </button>
        </div>
    </div>
);

export default function LogoDesignPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <div className="inline-block bg-[#1d3275] border border-blue-500/30 text-blue-100 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                            Latest Logo Designing Projects
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Design Your Logo with Trademark Experts
                        </h1>
                        <p className="text-blue-100 font-medium text-lg leading-relaxed mb-6">
                            From the very beginning, we not only create a recognizable Logo for you, but our trademark experts ensure all the lawful processes of Trademark registration as well.
                        </p>

                        <div className="bg-[#1d3275] border-l-4 border-[#ff6f00] p-5 rounded-r-lg mb-8 inline-block text-left shadow-md">
                            <p className="text-sm text-blue-50 leading-relaxed">
                                Our team keeps in mind the creative requirements while ensuring your design meets all legal criteria to be successfully trademarked. A beautiful logo is useless if you can't legally own it!
                            </p>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-2xl">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with Logo Designing?
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
                                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Phone" className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]" />
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

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Get Started
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. DESIGN CONSIDERATIONS (Info Cards) */}
            <section className="py-16 px-4 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Crucial Considerations for Your Brand Identity
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#f8f9fc] p-8 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-orange-50 text-[#ff6f00] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border border-orange-100">
                                <FiShield />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-3">Why a Trademark Expert?</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Designing a logo without legal foresight can lead to rejection at the registry. Our experts ensure your design is distinct, not infringing, and highly likely to be successfully trademarked.
                            </p>
                        </div>

                        <div className="bg-[#f8f9fc] p-8 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-orange-50 text-[#ff6f00] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border border-orange-100">
                                <FiPenTool />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-3">Things to Consider</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Before designing, we analyze your target audience, industry trends, and brand values to create a concept that resonates deeply and remains memorable across all mediums.
                            </p>
                        </div>

                        <div className="bg-[#f8f9fc] p-8 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-orange-50 text-[#ff6f00] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border border-orange-100">
                                <FiDroplet />
                            </div>
                            <h3 className="font-bold text-[#0b1b3d] text-lg mb-3">Usage of Color</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Colors evoke emotions. We strategically use color psychology to ensure your logo communicates the right message, while ensuring high contrast for black-and-white print scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW WE WORK (Stepper - 5 Steps) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How Online Legal India Will Help You?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6 text-center relative z-10">
                        {/* Background Line for Desktop */}
                        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-[#1d3275] -z-10"></div>

                        {[
                            { title: "Step 1", desc: "Fill the form and make payment." },
                            { title: "Step 2", desc: "We reach out to know your Logo requirements." },
                            { title: "Step 3", desc: "Branding & TM experts collaborate to create designs." },
                            { title: "Step 4", desc: "Choose your favorite concept & share feedback." },
                            { title: "Step 5", desc: "Finalize Logo & initiate TM process immediately." }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg border-4 border-[#ff6f00]">
                                    {index + 1}
                                </div>
                                <h4 className="text-[#ff6f00] font-bold text-sm uppercase tracking-wider mb-2">{step.title}</h4>
                                <p className="text-[13px] font-medium text-blue-50 leading-relaxed px-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PRICING PACKAGES (3 Tiers Grid) */}
            <section className="bg-[#f8f9fc] py-20 px-4 border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Select Package
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 font-medium">Choose the perfect plan for your branding and legal protection needs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        <PricingCard
                            title="Basic"
                            price="2,999"
                            features={[
                                "Professional Design Concepts",
                                "Creative Logo Design (2 choices)",
                                "Dedicated Experienced Designers",
                                "100% customized logo for you",
                                "Editable Source file",
                                "Final Output- High Res (JPG/PNG)",
                                "Print Ready Files",
                                "An in-depth Brand Analysis"
                            ]}
                        />

                        <PricingCard
                            title="Premium"
                            price="7,999"
                            highlight={true}
                            badge="Recommended"
                            features={[
                                "Use ™ mark next to your brand",
                                "6 Professional Design Concepts",
                                "4 Times revisions",
                                "Dedicated TM experts & Designers",
                                "100% customized logo",
                                "Editable Source & Print files",
                                "Final Output (JPG and PNG formats)",
                                "An in-depth Brand Analysis",
                                "Trademark Application & Free Class Search",
                                "Expertise Trademark Search Report",
                                "Drafting & Filing by TM Experts",
                                "EMI Facility & 24hr Support"
                            ]}
                        />

                        <PricingCard
                            title="Logo with Trademark®"
                            price="4,999"
                            features={[
                                "Use ™ mark next to your brand",
                                "3 Professional Design Concepts",
                                "3 Times revisions",
                                "Dedicated TM experts & Designers",
                                "Editable Source & Print files",
                                "In-depth Brand & Trademark Analysis",
                                "Trademark Application & Class Search",
                                "Drafting & Filing by TM Experts",
                                "EMI Facility",
                                "Call, Chat, Email Support"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* 5. DELIVERABLES PREVIEW */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-5xl mx-auto bg-[#233a85] rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-white">
                        <h2 className="text-3xl font-extrabold mb-4">What you will receive</h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mb-6"></div>
                        <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                            Once you finalize your design, we provide all industry-standard files so you can use your logo anywhere, seamlessly.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm font-semibold"><FiCheckCircle className="text-[#ff6f00] mr-3" /> High Resolution JPG & PNG (Transparent)</li>
                            <li className="flex items-center text-sm font-semibold"><FiCheckCircle className="text-[#ff6f00] mr-3" /> Vector Source Files (AI, EPS, SVG)</li>
                            <li className="flex items-center text-sm font-semibold"><FiCheckCircle className="text-[#ff6f00] mr-3" /> Print-ready PDF files</li>
                            <li className="flex items-center text-sm font-semibold"><FiCheckCircle className="text-[#ff6f00] mr-3" /> Full Copyright Ownership</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-[#1d3275] p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center">
                            <FiImage className="text-4xl text-[#ff6f00] mb-3" />
                            <p className="text-white font-bold text-sm">Digital Formats</p>
                        </div>
                        <div className="bg-[#1d3275] p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center">
                            <FiEdit3 className="text-4xl text-[#ff6f00] mb-3" />
                            <p className="text-white font-bold text-sm">Editable Vectors</p>
                        </div>
                        <div className="bg-[#1d3275] p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center">
                            <FiShield className="text-4xl text-[#ff6f00] mb-3" />
                            <p className="text-white font-bold text-sm">Trademark Filing</p>
                        </div>
                        <div className="bg-[#1d3275] p-6 rounded-xl border border-blue-500/30 flex flex-col items-center text-center">
                            <FiPenTool className="text-4xl text-[#ff6f00] mb-3" />
                            <p className="text-white font-bold text-sm">Full Rights</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQs */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="How can I design my Logo here?" defaultOpen={true}>
                            First, you need to choose a Logo design plan by completing the payment. Following your plan selection, we will reach out to you, and our creative team will begin the Logo designing process instantly as per your specific requirements.
                        </Accordion>
                        <Accordion title="How many times I can change or edit the Logo design?">
                            It depends on the package you choose. The 'Logo with Trademark' plan offers 3 revisions, while the 'Premium' plan offers up to 4 revisions to ensure you are 100% satisfied with the final output.
                        </Accordion>
                        <Accordion title="What is the payment method for designing a Logo?">
                            We accept all major secure online payment methods including Credit/Debit Cards, Net Banking, UPI, and Digital Wallets. We also offer easy EMI facilities for selected packages.
                        </Accordion>
                        <Accordion title="How I will get my Logo?">
                            Once you approve the final design, we will email you a secure download link containing all high-resolution files (JPG, PNG) and editable source files (AI, EPS) as per your chosen package.
                        </Accordion>
                        <Accordion title="Do I have the rights to my Logo?">
                            Absolutely! Once the logo is finalized and handed over, you hold 100% copyright ownership of the design. If you selected a Trademark package, our experts will simultaneously initiate the legal protection process for you.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}