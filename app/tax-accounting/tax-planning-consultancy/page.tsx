"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiCheckCircle,
    FiShield,
    FiTrendingUp,
    FiBarChart2,
    FiPieChart,
    FiCheckSquare
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

// --- Solid Blue Accordion (Intro Section) ---
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
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
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

// --- Dynamic Pricing Card ---
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
    <div
        className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border flex flex-col h-full ${highlight ? "border-[#ff6f00] shadow-[#ff6f00]/20" : "border-gray-200"
            }`}
    >
        <div
            className={`${highlight ? "bg-[#ff6f00]" : "bg-[#233a85]"
                } text-white text-center py-4 px-2 font-bold text-sm tracking-wide min-h-[70px] flex items-center justify-center`}
        >
            {title}
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
            <div className="flex justify-center items-center text-3xl font-extrabold text-[#0b1b3d] mb-6">
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
            <button
                className={`w-full mt-auto ${highlight
                        ? "bg-[#ff6f00] hover:bg-[#e66400]"
                        : "bg-[#233a85] hover:bg-[#1a2b63]"
                    } text-white font-bold py-3 rounded-md shadow-md transition-colors`}
            >
                Request Callback
            </button>
        </div>
    </div>
);

export default function TaxPlanningPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Get Complete Tax Planning & Consultation at your Fingertips from our Tax & Financial Advisors!
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Let the Country’s Most Recommended Tax Consultant panel Analyze, Manage & Help Reduce your Tax Liability following the relevant Income Tax Act’s provisions.
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form Left, Info Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Talk to Our Expert
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <SolidAccordion title="What is the Tax Planning process?" defaultOpen={true}>
                            Tax planning is the legal procedure of reducing the payable tax liabilities in a particular financial year. It includes the course of actions such as managing tax implications, deductible taxes, and a proper planning to identify the amount of tax due. It plays a critical role for the budget efficiency as well.
                        </SolidAccordion>

                        <SolidAccordion title="Who is a Tax Advisor? / Tax Planner / Financial Planner?">
                            A Tax Advisor or Financial Planner is a certified professional who utilizes their expertise in tax legislation to help individuals and businesses minimize their tax liabilities legally, ensuring compliance with the Income Tax Act.
                        </SolidAccordion>

                        <SolidAccordion title="Who will manage my Tax Planning procedure?">
                            Our dedicated panel of highly experienced Chartered Accountants (CAs) and Taxation Experts will be assigned to systematically analyze your income and legally manage your tax planning.
                        </SolidAccordion>

                        <SolidAccordion title="What are the Responsibilities of our Tax Planners & Advisors?">
                            Our tax planners will audit your financial records, calculate liable taxes, prepare strategic investment plans for deductions under Chapter VI, and provide a comprehensive road map to maximize your take-home income.
                        </SolidAccordion>

                        <SolidAccordion title="Benefits of availing Tax Consultancy from Online Legal India">
                            <ul className="space-y-2">
                                {[
                                    "100% Legal & Ethical Tax Reduction Strategies",
                                    "Expert Guidance on Section 80C to 80U Deductions",
                                    "Personalized Financial & Retirement Planning",
                                    "Dedicated Support via Call, Chat, and Email",
                                    "Timely compliance and prevention of IRS notices"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        <FiCheckCircle className="text-[#ff6f00] mr-2 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>
                    </div>
                </div>
            </section>

            {/* 3. OBJECTIVES OF TAX PLANNING (Grid) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Objectives of Tax Planning
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FiTrendingUp className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Healthy Economical Growth",
                                desc: "Proper tax planning helps an individual or organization to save an excessive payable amount of taxes, which is helpful for an economical stability."
                            },
                            {
                                icon: <FiPieChart className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Reduction of Tax Liability",
                                desc: "The tax planners can professionally structure the ways to minimize the taxable amounts while remaining ethical and within legal boundaries."
                            },
                            {
                                icon: <FiShield className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Avoiding Legal Issues",
                                desc: "Through the expert tax planner’s inputs, an organization or individual can keep away the legal provisions and notices in terms of tax deductions."
                            },
                            {
                                icon: <FiBarChart2 className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Economic Stability",
                                desc: "A well designed yearly tax plan ensures all the liable taxes are paid on time, bringing a productive economical status for the particular taxpayers."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="font-bold text-[#0b1b3d] mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SELECT PACKAGES (8 Tiers) */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Select Packages
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">Choose the perfect Tax Planning solution tailored to your income profile.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        <PricingCard
                            title="Tax Planning for Salaried Individuals"
                            price="999"
                            features={[
                                "Efficient support from Expert",
                                "Annual tax planning from the Tax Experts",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="NRI Tax Planning from Salary"
                            price="1,499"
                            highlight={true}
                            features={[
                                "Efficient support from Expert",
                                "Annual tax planning from the Tax Experts",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="Advance Tax Payment & Planning"
                            price="1,499"
                            features={[
                                "On call support from Expert",
                                "Annual Direct-Indirect tax planning",
                                "Computation of Advance Tax",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="Tax Planning from House Property"
                            price="1,499"
                            features={[
                                "Efficient support from Expert",
                                "Annual tax planning from Tax Experts",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="Capital Gain Tax Planning (Long Term + Short Term)"
                            price="2,499"
                            highlight={true}
                            features={[
                                "Efficient support from Expert",
                                "Annual Direct-Indirect tax planning",
                                "Call-Email-Chat support"
                            ]}
                        />
                        <PricingCard
                            title="Tax Planning from Other Sources of Income"
                            price="2,499"
                            features={[
                                "Efficient support from Expert",
                                "Yearly tax planning from Tax Experts",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="ITR Tax Planning / Individual Project Report"
                            price="1,999"
                            features={[
                                "Efficient support from Expert",
                                "Yearly tax planning from Tax Experts",
                                "Profit & Loss / Balance Sheet Prep",
                                "Computation",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                        <PricingCard
                            title="Tax Saving Plan after Retirement under Chapter - VI"
                            price="1,999"
                            features={[
                                "Efficient support from Expert",
                                "Yearly tax planning from Tax Experts",
                                "Section 80C - 80U structuring",
                                "Call-Email-Chat support",
                                "1-time service"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (Stepper - 6 Steps wrap layout) */}
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
                            "Fill the Form to Complete the Payment",
                            "Receive Call from Specialised Tax Experts",
                            "Explain queries & submit the details",
                            "Tax Planners conduct error-free Tax Computation",
                            "Suggest compliances to minimize Tax Liability",
                            "Finalizing the Tax Planning from your end"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[140px] md:w-[155px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-semibold text-blue-50 leading-snug">{step}</p>
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

            {/* 6. FAQs */}
            <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="Which Act of the Indian Govt. oversees the tax planning procedure in the country?" defaultOpen={true}>
                            In India, the Income Tax Act, 1961 oversees the entire aspects of the tax planning procedure. It governs the rules for taxable income, exemptions, deductions, and tax liabilities.
                        </Accordion>
                        <Accordion title="Is tax planning only applicable for the individuals in India?">
                            No, tax planning is crucial and applicable for both individuals (salaried, freelancers, retirees) and all business entities (sole proprietorships, partnerships, companies, and HUFs) operating in India.
                        </Accordion>
                        <Accordion title="What are the Heads of Income legislated under the Income Tax Act, 1961?">
                            The five main heads of income are: 1. Income from Salary, 2. Income from House Property, 3. Profits and Gains of Business or Profession, 4. Capital Gains, and 5. Income from Other Sources.
                        </Accordion>
                        <Accordion title="Is it mandatory to appoint a Tax Planner?">
                            While not legally mandatory for everyone, appointing a tax planner is highly recommended. It prevents errors, avoids legal penalties, and maximizes your savings through strategic utilization of deductions under Chapter VI.
                        </Accordion>
                        <Accordion title="How many days the Tax Planner will take to complete the tax planning process?">
                            Typically, once all required documents and details are submitted, our experts analyze and complete the fundamental tax planning and computation process within 2 to 4 working days, depending on the complexity of your financial portfolio.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}