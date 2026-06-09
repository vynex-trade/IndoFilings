"use client";

import React, { useState } from 'react';
// Importing from react-icons
import { FiCheck, FiArrowRight, FiArrowDown, FiFileText, FiShield, FiBriefcase, FiRefreshCw, FiUsers } from 'react-icons/fi';
import { BsBank } from 'react-icons/bs';

export default function LLPRegistrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20">
            {/* Header spacing */}
            <div className="pt-12"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* --- Section 1: Documents Required --- */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Documents for LLP Partnership Registration</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Passport Size Photo", desc: "Two Colour Photographs of Promoters/Individuals/ Company/ Director" },
                            { title: "PAN Card", desc: "PAN Card of each Shareholders and directors" },
                            { title: "Identity Proof", desc: "Identity Proof (Voter ID / Driving License/ Passport)" },
                            { title: "Address Proof", desc: "Address Proof (Bank Statement / Electricity, Mobile, Telephone Bill)" },
                            { title: "Registered Office", desc: "Proof of Registered Office" },
                            { title: "Utility Bill", desc: "Utility Bill as proof must be Latest" },
                        ].map((doc, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
                                <FiFileText className="w-10 h-10 text-blue-500 mb-4" />
                                <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                                <p className="text-gray-600 text-sm">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Section 2: Pricing Packages --- */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Select Packages</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        {/* Consultation */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                            <div className="p-6 bg-gray-100 border-b border-gray-200 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation Fee</h3>
                                <div className="text-3xl font-extrabold text-blue-600">₹999</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <p className="font-medium text-gray-700 mb-4">Professional guidance from experts</p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start"><FiCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Complete guide for registration (Process, Required Documents, Benefits and Tax etc.)</li>
                                </ul>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition">Request Callback</button>
                            </div>
                        </div>

                        {/* Basic */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                            <div className="p-6 bg-blue-50 border-b border-blue-100 text-center">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">Basic</h3>
                                <div className="text-3xl font-extrabold text-blue-600">₹5,499</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {['Registering a LLP with Ministry of Corporate affairs', 'LLPIN', 'PAN', 'TAN', 'MCA processing', 'FILIP', 'Allotment of 2 DPIN', 'Allotment of 2 DPIN and GST registration'].map((item, i) => (
                                        <li key={i} className="flex items-start"><FiCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">Buy Now</button>
                            </div>
                        </div>

                        {/* Smart */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 flex flex-col relative transform scale-105 z-10">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <div className="p-6 bg-blue-600 text-center text-white">
                                <h3 className="text-xl font-bold mb-2">Smart</h3>
                                <div className="text-3xl font-extrabold">₹14,999</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {['Registering a LLP with Ministry of Corporate affairs', 'LLPIN', 'PAN', 'TAN', 'MCA processing', 'FILIP', 'Allotment of 2 DPIN', 'GST registration', 'Income tax return filing', 'Form 11 (Annual return of LLP)', 'Form 8 (Statement of Accounts) and DIR-3 eKYC of Directors'].map((item, i) => (
                                        <li key={i} className="flex items-start"><FiCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">Buy Now</button>
                            </div>
                        </div>

                        {/* Mega */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
                            <div className="p-6 bg-gray-900 border-b border-gray-800 text-center text-white">
                                <h3 className="text-xl font-bold mb-2">Mega</h3>
                                <div className="text-3xl font-extrabold">₹24,999</div>
                            </div>
                            <div className="p-6 flex-grow">
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {['Registering a LLP with Ministry of Corporate affairs', 'LLPIN', 'PAN', 'TAN', 'MCA processing', 'FILIP', 'Allotment of 2 DPIN', 'GST registration', 'Trademark application', 'Income tax return filing', 'Form 11 (Annual return of LLP)', 'Form 8 (Statement of Accounts)', 'DIR-3 eKYC of Directors', '12 months filing of GST return and DIR-3 eKYC of Directors'].map((item, i) => (
                                        <li key={i} className="flex items-start"><FiCheck className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <button className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-md hover:bg-black transition">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-right text-sm text-gray-500 mt-4">* Excluding DSC and Govt. Fees</p>
                </section>

                {/* --- Section 3: Comparison Table --- */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Comparison</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider border-r border-gray-200 w-1/6">Feature</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">Private Limited Company</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">One Person Company</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider bg-blue-50">Limited Liability Partnership</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">Partnership Firm</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-700 uppercase tracking-wider">Proprietorship Firm</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    { label: "Act", vals: ["Companies Act, 2013", "Companies Act, 2013", "Limited Liability Partnership Act, 2008", "Indian Partnership Act, 1932", "No specified Act"] },
                                    { label: "Registration Requirement", vals: ["Mandatory", "Mandatory", "Mandatory", "Optional", "No"] },
                                    { label: "Number of members", vals: ["2 – 200", "Only 1", "2 – Unlimited", "2 – 50", "Only 1"] },
                                    { label: "Separate Legal Entity", vals: ["Yes", "Yes", "Yes", "No", "No"] },
                                    { label: "Liability Protection", vals: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"] },
                                    { label: "Statutory Audit", vals: ["Mandatory", "Mandatory", "Dependent", "Not mandatory", "Not mandatory"] },
                                    { label: "Ownership Transfer ability", vals: ["Yes", "No", "Yes", "No", "No"] },
                                    { label: "Uninterrupted Existence", vals: ["Yes", "Yes", "Yes", "No", "No"] },
                                    { label: "Foreign Participation", vals: ["Allowed", "Not Allowed", "Allowed", "Not Allowed", "Not Allowed"] },
                                    { label: "Tax Rates", vals: ["Moderate", "Moderate", "High", "High", "Low"] },
                                    { label: "Statutory Compliance", vals: ["High", "Moderate", "Moderate", "Less", "Less"] },
                                ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">{row.label}</td>
                                        {row.vals.map((val, i) => (
                                            <td key={i} className={`px-6 py-4 text-gray-700 ${i === 2 ? 'bg-blue-50/50 font-medium' : ''}`}>{val}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* --- Section 4: How we work --- */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">How we work?</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center">
                        {[
                            "Fill our Registration Form & Make the Payment",
                            "Expert Will Call You & Receive All the Necessary Documents.",
                            "Will Create DSC & the DIN Number of Director",
                            "LLP Deed Drafting & Submit",
                            "Your Documents will be Filed & Submitted to the ROC",
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex-1 flex flex-col items-center max-w-[200px]">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{step}</p>
                                </div>
                                {index < 4 && (
                                    <div className="text-blue-300 flex-shrink-0 hidden md:block">
                                        <FiArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                                {index < 4 && (
                                    <div className="text-blue-300 md:hidden block">
                                        <FiArrowDown className="w-6 h-6" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <h4 className="text-green-800 font-bold text-lg mb-1">Congratulations! You've registered your company.</h4>
                        <p className="text-green-600">Certificates will be sent by post.</p>
                    </div>
                </section>

                {/* --- Section 5: Advantages of LLP --- */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Advantages of LLP</h2>
                        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FiShield className="w-8 h-8 text-blue-500" />, title: "Distinct Legal Recognition", desc: "LLPs are treated as separate legal entities so the partners and LLP are distinct from each other in the eyes of the law." },
                            { icon: <BsBank className="w-8 h-8 text-blue-500" />, title: "Raising Capital / Money", desc: "Financing a small business like a sole proprietorship or partnership can be difficult at times. An LLP being a regulated entity like a company can attract finance from PE Investors, financial institutions, etc." },
                            { icon: <FiFileText className="w-8 h-8 text-blue-500" />, title: "No Mandatory Audit Requirement", desc: "In LLP, only in the case of business, where the annual turnover/contribution exceeds Rs 40 Lacs/Rs 25 Lacs are required to get their account audited annually by a chartered accountant." },
                            { icon: <FiBriefcase className="w-8 h-8 text-blue-500" />, title: "Taxation Relief", desc: "LLP is not required to pay the surcharge on income tax. Moreover, it is also not required to pay tax on profits distributed to partners whereas Company is required to pay dividend tax distributed to its shareholders." },
                            { icon: <FiUsers className="w-8 h-8 text-blue-500" />, title: "Easy Transferable ownership", desc: "It is easier to transfer the ownership in accordance with the terms of the LLP Agreement. Ceasing of old partners and coming of new partners" },
                            { icon: <FiRefreshCw className="w-8 h-8 text-blue-500" />, title: "Perpetual Succession", desc: "An incorporated LLP has perpetual succession. Notwithstanding any changes in the partners of the LLP, the LLP will be the same entity with the same privileges, immunities, estates, and possessions." },
                        ].map((adv, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
                                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                                    {adv.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{adv.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Section 6: FAQ --- */}
                <section className="max-w-4xl mx-auto pt-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">FAQ</h2>
                        <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
                    </div>

                    <div className="space-y-[2px]">
                        <FAQItem
                            question="Which Act of the Indian Govt. oversees the LLP registration process in the country?"
                            answer="The Limited Liability Partnership (LLP) registration in India is overseen by the provisions of the Limited Liability Partnership Act, 2008 with the guidelines of the Ministry of Corporate Affairs (MCA)."
                            defaultOpen={true}
                        />
                        <FAQItem
                            question="Can a LLP get foreign investors?"
                            answer="Yes, 100% Foreign Direct Investment (FDI) is allowed in LLPs operating in sectors/activities where 100% FDI is allowed through the automatic route."
                        />
                        <FAQItem
                            question="How much time does it take to register a LLP in India?"
                            answer="Typically, it takes around 10 to 15 working days to completely register an LLP in India, provided all submitted documents are accurate and processed smoothly by the ROC."
                        />
                        <FAQItem
                            question="What is the minimum requirement of capital to register a LLP?"
                            answer="There is no minimum capital requirement to incorporate an LLP in India. An LLP can be formed with any amount of capital contribution by the partners."
                        />
                        <FAQItem
                            question="Can a LLP be a partner in another LLP?"
                            answer="Yes, since an LLP is considered a separate legal entity and a body corporate, it can become a partner in another LLP."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}

// Sub-component for individual FAQ items
function FAQItem({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left bg-[#1e2343] hover:bg-[#161a32] text-white font-medium px-6 py-4 transition-colors duration-200"
            >
                {question}
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="p-8 bg-white border border-gray-200 text-gray-500 text-sm leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}