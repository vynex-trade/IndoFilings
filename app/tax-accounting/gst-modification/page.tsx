"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheck,
    FiUpload
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";

// --- Standard Outline Accordion (Used for FAQs) ---
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

// --- Solid Color Accordion (Used to replace the Green accordion from Image) ---
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
        <div className="mb-4 border border-gray-200 shadow-sm rounded-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 bg-[#233a85] text-white text-left font-semibold transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 flex-shrink-0 text-white" />
                ) : (
                    <FiPlus className="w-4 h-4 flex-shrink-0 text-white" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white text-gray-700 text-[14px] leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Pricing Card Component ---
const PricingCard = ({
    title,
    subtitle,
    price,
    description,
    features,
    highlight = false,
}: {
    title: string;
    subtitle: string;
    price: string;
    description: string;
    features: string[];
    highlight?: boolean;
}) => (
    <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden relative transform hover:-translate-y-1 transition-all duration-300 border ${highlight ? "border-[#ff6f00]" : "border-gray-200"
            } flex flex-col`}
    >
        <div
            className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"
                } text-white text-center py-2 font-bold text-sm tracking-widest uppercase`}
        >
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm font-semibold text-gray-500 mb-1">{subtitle}</p>
            <div className="flex items-center text-4xl font-extrabold text-[#0b1b3d] mb-4">
                <BsCurrencyRupee className="w-7 h-7" />
                {price}
            </div>
            <p className="text-[13px] text-gray-600 mb-6 min-h-[80px]">
                {description}
            </p>
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm font-medium">
                        <FiCheck className="w-4 h-4 text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0 font-bold" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={`w-full ${highlight
                        ? "bg-[#ff6f00] hover:bg-[#e66400]"
                        : "bg-[#233a85] hover:bg-[#1a2b63]"
                    } text-white font-bold py-3 rounded-md shadow-md transition-colors mt-auto`}
            >
                Buy Now
            </button>
        </div>
    </div>
);

export default function GSTModificationPage() {
    const [selectedPkg, setSelectedPkg] = useState("basic");

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-3">
                    Get Your GST Modification and Amendment of GST Registration Done by the Experts
                </h1>
                <div className="w-16 h-1 bg-[#ff6f00] mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">
                    Online Legal India will help you fulfill all the formalities regarding the GST modification and amendment of GST registration.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Info on Right matching the image layout) */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Form Box */}
                    <div className="md:col-span-5 bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with GST Modification and Amendment?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone Number (Without 0 or +91)"
                                className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                            />
                            <input
                                type="text"
                                placeholder="What Modification You Want"
                                className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                            />
                            <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600">
                                <option value="">State</option>
                                <option value="MH">Maharashtra</option>
                                <option value="DL">Delhi</option>
                                <option value="KA">Karnataka</option>
                            </select>

                            {/* File Upload Mockup */}
                            <div className="flex items-center border border-gray-300 rounded overflow-hidden text-sm">
                                <div className="bg-gray-100 border-r border-gray-300 px-3 py-2 text-gray-700 cursor-pointer flex items-center hover:bg-gray-200 transition">
                                    Choose Files
                                </div>
                                <span className="px-3 text-gray-400">No file chosen</span>
                            </div>
                            <p className="text-xs text-[#233a85] -mt-2">(Optional)</p>

                            {/* Package Selector */}
                            <div>
                                <p className="text-sm font-semibold mb-2">Package</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { id: "basic", name: "Basic Plan", price: "Rs.999" },
                                        { id: "std", name: "Standard Plan", price: "Rs.1499" },
                                        { id: "prem", name: "Premium Plan", price: "Rs.1699" },
                                    ].map((pkg) => (
                                        <button
                                            key={pkg.id}
                                            type="button"
                                            onClick={() => setSelectedPkg(pkg.id)}
                                            className={`py-2 px-1 text-[11px] font-bold rounded border flex flex-col items-center justify-center transition-colors ${selectedPkg === pkg.id
                                                    ? "bg-[#233a85] text-white border-[#233a85]"
                                                    : "bg-white text-gray-700 border-gray-300 hover:border-[#233a85]"
                                                }`}
                                        >
                                            <span>{pkg.name}</span>
                                            <span>({pkg.price})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            {/* Captcha Mockup */}
                            <div className="flex items-center gap-3">
                                <div className="bg-gray-200 text-xl tracking-widest font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner line-through text-gray-700">
                                    2 1 1 8
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information & Solid Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-sm mb-6 leading-relaxed text-justify">
                            Any changes made in the GST Registration or the details entered in the
                            GST certificate are referred to as GST modification or update. One may
                            go for change in GST Registration if he/she wishes from composite to
                            normal scheme, or if there are mistakes in GST registration. To get GST
                            modification, you need to file form GST REG 14.
                        </p>

                        <SolidAccordion title="What are details that can be changed or updated?" defaultOpen={true}>
                            <p className="mb-3 font-medium text-gray-800">
                                A business owner can apply for change(s) of the following items:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Name of business",
                                    "Address of the principal place of business",
                                    "An additional place of business",
                                    "Addition, deletion or retirement of partners or directors, Managing Committee, CEO i.e., people who are responsible for day to day affairs of the business",
                                    "Mobile number or e-mail address of the authorized signatory",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FiArrowRight className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>

                        <SolidAccordion title="Documents Required" defaultOpen={true}>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <FiArrowRight className="text-[#ff6f00] mr-2 flex-shrink-0" />
                                    <span>Documentary Proof of Changes</span>
                                </li>
                                <li className="flex items-center">
                                    <FiArrowRight className="text-[#ff6f00] mr-2 flex-shrink-0" />
                                    <span>GST Certificate</span>
                                </li>
                            </ul>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. GST MODIFICATION PACKAGES (Pricing) */}
            <section className="bg-white py-16 px-4 border-y border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            GST Modification Process Packages
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        <PricingCard
                            title="Basic Plan"
                            subtitle="Professional Fees (One Time Charges)"
                            price="999"
                            description="Change in Non-core fields (those related to GST application except for legal name of the business, Addition and deletion of stakeholder's detail and principal or additional place of business)."
                            features={["Dedicated GST Expert", "Call, Chat & Email Support"]}
                        />

                        <PricingCard
                            title="Standard Plan"
                            subtitle="Professional Fees (Limited Offer)"
                            price="1,499"
                            highlight={true}
                            description="Change in core fields - Legal Name of the Business, Addition / Deletion of Stakeholders, Principal / Additional Place of Business."
                            features={["Dedicated GST Expert", "Chat, Call & Email Support"]}
                        />

                        <PricingCard
                            title="Premium Plan"
                            subtitle="Professional Fees (One Time Charges)"
                            price="1,699"
                            description="Change from Composite to Regular scheme."
                            features={["Dedicated GST Expert", "Chat, Call & Email Support"]}
                        />
                    </div>

                    <div className="mt-8 text-center text-sm font-bold text-gray-500 bg-gray-50 py-3 px-6 rounded-md inline-block mx-auto border border-gray-200">
                        * Excluding Govt. Fees
                    </div>
                </div>
            </section>

            {/* 4. HOW WE WORK (6-Step Stepper) */}
            <section className="bg-[#f8f9fc] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    {/* Using flex-wrap so it wraps elegantly on smaller screens */}
                    <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-4 md:gap-x-2 text-center relative z-10">
                        {[
                            "Fill the form & Make the Payment",
                            "Get the call from GST expert",
                            "GST Expert will consult with you",
                            "GST Expert will Receive Necessary Documents",
                            "Successful Submission of all your Details",
                            "GST Modification/Update Process"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[140px] md:w-[150px]">
                                    <div className="w-12 h-12 bg-white text-[#233a85] rounded-full flex items-center justify-center font-black text-xl mb-4 shadow-[0_4px_15px_rgba(35,58,133,0.15)] border-2 border-[#233a85]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-bold text-[#0b1b3d] leading-snug">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <div className="hidden lg:flex items-center justify-center mt-3 mx-2 text-[#ff6f00]">
                                        <FiArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                                {index !== arr.length - 1 && (
                                    <div className="flex lg:hidden w-full justify-center text-[#ff6f00] my-2">
                                        <FiChevronDown className="w-6 h-6" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQs */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="Can we add another business address in existing GST registration?">
                            Yes, you can add an additional business address to your existing GST certificate. You need to file the modification application through the standard process.
                        </Accordion>
                        <Accordion title="Can I shift from composition to regular scheme under GST?" />
                        <Accordion title="Can I shift my business from regular to composition scheme under GST?" />
                        <Accordion title="Do I need to physically present for the process?">
                            No, the entire process is 100% online. You do not need to be physically present. Simply provide the documents and information digitally.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}