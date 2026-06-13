"use client";

import React, { useState } from 'react';

// --- Reusable Accordion Component ---
type AccordionItemProps = {
    title: React.ReactNode;
    children?: React.ReactNode;
    defaultOpen?: boolean;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-md bg-white mb-3 shadow-sm transition-all duration-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-[#243c7c] focus:outline-none hover:bg-gray-50"
            >
                <span className="text-[15px] md:text-base pr-4">{title}</span>
                <span className="text-[#ff7600] text-2xl font-light leading-none shrink-0">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function IecModification() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            Renew / Modify / Update your <br />
                            <span className="text-[#ff7600] block mt-2">Import Export Code (IEC)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-4">
                            Update your IEC Certificate securely with the help of experts from Online Legal India. Prevent customs issues with 24-hr DGFT updating.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <div className="flex items-center bg-[#1c3065] px-5 py-3 rounded-lg border border-blue-800 shadow-md">
                                <span className="text-[#ff7600] text-2xl mr-3">⭐</span>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">5 Lac+</p>
                                    <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Happy Clients</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#1c3065] px-5 py-3 rounded-lg border border-blue-800 shadow-md">
                                <span className="text-[#ff7600] text-2xl mr-3">💳</span>
                                <div>
                                    <p className="text-xl font-bold text-white leading-none">Easy EMI</p>
                                    <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">Options Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form with Captcha */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Need Help with IEC Modification?</h2>
                                <p className="text-sm text-gray-500">Fill up the form below</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Mobile No." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="City" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="other">Other State</option>
                                    </select>
                                </div>

                                {/* Custom Captcha UI */}
                                <div className="flex gap-3 items-center pt-2">
                                    <div className="bg-gray-200 text-gray-700 font-serif italic font-bold tracking-[0.4em] px-4 py-2 rounded-md border border-gray-300 select-none w-1/3 text-center text-lg">
                                        8 9 2 6
                                    </div>
                                    <input type="text" placeholder="Enter captcha here.." className="w-2/3 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-4 shadow-lg text-base">
                                    Apply Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW & WHAT CAN BE MODIFIED */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-4">Why update your IEC Certificate?</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-[15px] md:text-base text-justify mb-4">
                            An IEC expert from Online Legal India will help you update your details in the Import Export Code Certificate within 24 hrs. It is essential to update every data point of a company—that is, branch details, activity status like manufacture or merchant.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-[15px] md:text-base text-justify">
                            If not updated, there will be strict consequences during the import-export process due to mismatched details between the DGFT and Customs databases.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-[#243c7c] mb-6 border-b border-gray-100 pb-4">What details can be modified?</h3>
                        <ul className="space-y-4">
                            {[
                                "Company address or registered office address",
                                "Change in Company Name",
                                "Registered Branch details or adding a Branch",
                                "Addition / alteration / deletion of partner or director",
                                "Change in Business activities",
                                "Change in registered mobile number and email id",
                                "Bank details update / modification"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-[#ff7600] mr-3 mt-0.5">✓</span>
                                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. PRICING PACKAGE (Centered single package) */}
            <section className="bg-gray-100 py-16 px-4 border-y border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">Modification Package</h2>

                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-[#ff7600] max-w-md mx-auto transform transition hover:-translate-y-2">
                        <div className="p-8">
                            <h3 className="text-2xl font-extrabold text-[#243c7c] mb-2 uppercase">IEC Modification</h3>
                            <p className="text-sm text-gray-500 font-semibold mb-6">For Proprietor & Organization</p>

                            <div className="mb-6">
                                <p className="text-sm text-gray-500 font-semibold mb-1">Professional Fees</p>
                                <p className="text-5xl font-black text-[#ff7600]">₹ 1999</p>
                                <p className="text-xs text-gray-400 mt-2">* Excluding Govt. fees (Rs. 200)</p>
                            </div>

                            <div className="text-left bg-gray-50 p-6 rounded-lg mb-8 border border-gray-100">
                                <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Change in company name & activities</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Branch details update</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Partner/Director changes</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Contact & Bank details update</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Dedicated IEC expert</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2 text-lg">✓</span> Call, Chat & Email Support</li>
                                </ul>
                            </div>

                            <button className="w-full bg-[#243c7c] hover:bg-[#1c3065] text-white font-bold py-4 rounded-md transition duration-300 shadow-lg text-lg">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DOCUMENTS REQUIRED GRID */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Documents Required</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { title: "GST Certificate", icon: "📄" },
                            { title: "Cancelled Cheque", icon: "🏦" },
                            { title: "MOA/AOA / Incorporation", icon: "🏢" },
                            { title: "Partnership / LLP Deed", icon: "🤝" },
                            { title: "PAN Card", icon: "💳" },
                            { title: "Aadhar Card", icon: "🪪" },
                            { title: "Digital Signature (DSC)", icon: "🔐" }
                        ].map((doc, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-[#ff7600] hover:shadow-md transition-all">
                                <div className="text-4xl mb-3">{doc.icon}</div>
                                <h3 className="font-bold text-gray-800 text-sm">{doc.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (PROCESS) */}
            <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-12">How We Work?</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
                        {[
                            "Fill form & make the payment",
                            "Expert consults with you",
                            "Provide docs & DSC",
                            "Expert submits on DGFT portal",
                            "Modified certificate sent"
                        ].map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-full md:w-1/5 relative">
                                    <div className="w-14 h-14 rounded-full bg-[#243c7c] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-2 border-[#ff7600]">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700 px-2 leading-snug">{step}</p>
                                </div>
                                {index < 4 && (
                                    <div className="hidden md:block text-[#ff7600] text-3xl font-light">⟶</div>
                                )}
                                {index < 4 && (
                                    <div className="md:hidden text-[#ff7600] text-3xl font-light">↓</div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. ADVANTAGES GRID */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Advantages of IEC for Import Export Businesses</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">🌍 International Market Reach</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Import Export Code helps you in order to take your business to the international market. Not only that, it will increase your revenue as well as growth drastically.</p>
                        </div>
                        <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">🛡️ Reduces the Risk of Illegal Transportation</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">IEC registration is a centralized registration which helps officials supervise and manage cross-border transactions better, ridding you of fraudulent import/export risks.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">📈 Benefits of Schemes</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">An IEC registered business is qualified to avail subsidies declared by Customs. After filing LUT under GST, exporters aren't required to pay taxes to make exports, or can claim refunds.</p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">🏛️ Other Govt. Benefits</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Companies that register for IEC make the most of several other benefits offered by customs, the Export Promotion Council, and the Director General of Foreign Trade.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQS */}
            <section className="bg-gray-100 py-16 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQs)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-8"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What are the documents required for IEC modification?" defaultOpen={true}>
                            <p className="mb-2">In the process of IEC modification, the core required documents are:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>PAN Card of the individual/business entity</li>
                                <li>Digital Signature Certificate (DSC)</li>
                                <li>Valid E-mail ID and Phone number</li>
                                <li>Proof of the specific change (e.g., new electricity bill for address change)</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="How much time does it take to update modification on the DGFT portal?">
                            <p>Once we submit the completed application along with the required documents and DSC, the modification is typically reflected on the DGFT portal within 24 to 48 working hours.</p>
                        </AccordionItem>
                        <AccordionItem title="Do I need to physically present for the process?">
                            <p>No, the entire IEC modification process is 100% online and paperless. You only need to share soft copies of the documents and coordinate with our experts digitally.</p>
                        </AccordionItem>
                        <AccordionItem title="Is DSC mandatory for IEC modification?">
                            <p>Yes. A Class 3 Digital Signature Certificate (DSC) of the authorized signatory (Director/Partner/Proprietor) is mandatory for submitting any modification or update application on the DGFT portal.</p>
                        </AccordionItem>
                        <AccordionItem title="How do I check my IEC modification status?">
                            <p>Our dedicated expert will keep you updated via email and phone. Alternatively, you can track it live using your DGFT portal login credentials once the application is filed.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

        </div>
    );
}