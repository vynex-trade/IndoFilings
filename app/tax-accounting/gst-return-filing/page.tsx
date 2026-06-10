"use client";

import React, { useState } from "react";
import {
    FiCheckCircle,
    FiAlertCircle,
    FiArrowRight,
    FiTrendingUp,
    FiGlobe,
    FiFileText,
    FiPlus,
    FiMinus
} from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { FaRegLightbulb, FaAward } from "react-icons/fa";

// --- Reusable Accordion Component (Updated to match Image 2 style) ---
const Accordion = ({ title, children, defaultOpen = false }: { title: string; children?: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? <FiMinus className="w-4 h-4 text-gray-600" /> : <FiPlus className="w-4 h-4 text-gray-600" />}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function GSTLandingPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* 1. HERO SECTION (Matched to Image 1 Colors & Style) */}
            <section className="bg-[#233a85] text-white py-20 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        File your GST Return with ease! <br />
                        Company Registration In India
                    </h1>
                    <p className="text-lg md:text-xl mb-6 font-medium text-gray-200">
                        Register your startup company as private limited with Online Legal India at the lowest Fees.<br />
                        Online Legal India is an MCA & MSME registered company in India.
                    </p>

                    <button className="bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold py-3 px-8 rounded shadow-md transition-colors mb-8">
                        Register Now
                    </button>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center bg-[#1d3275] border border-blue-500/30 px-4 py-2 rounded text-sm font-semibold">
                            <FaAward className="text-yellow-400 w-5 h-5 mr-2" />
                            Startup India Recognized
                        </div>
                        <div className="flex items-center bg-[#1d3275] border border-blue-500/30 px-4 py-2 rounded text-sm font-semibold">
                            <FaAward className="text-yellow-400 w-5 h-5 mr-2" />
                            ISO 9001:2015 Certified
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

                {/* 2. INFO CARDS & PRICING */}
                <section className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Important Information</h2>
                        <Accordion title="Who is liable for GST filings?">
                            <p className="mb-2">Any individual operating a business entity is accountable for being registered with the GST system and GST filing. Key criteria include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Monthly GST returns</li>
                                <li>Yearly GST returns</li>
                                <li>GST filing for input/purchase</li>
                                <li>GST filing for output/supply</li>
                            </ul>
                        </Accordion>

                        <Accordion title="Late Fees/Penalty For Failing To File On Time">
                            <p>In case the taxpayer fails to file the GST returns within the specified date, they have to pay a late fee along with interest @18%.</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>NIL return: Rs. 20 per day.</li>
                                <li>Standard return: Rs. 50 per day (Rs. 25 CGST + Rs. 25 SGST).</li>
                                <li>Maximum late fee: Rs. 5000.</li>
                                <li>IGST does not charge any late fees.</li>
                            </ul>
                        </Accordion>
                    </div>

                    {/* PRICING CARD */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300">
                        <div className="bg-[#ff6f00] text-white text-center py-2 font-bold text-sm tracking-wider uppercase">
                            Recommended Plan
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">Yearly GST Return Filing</h3>
                            <div className="text-4xl font-extrabold text-[#233a85] mb-6">₹7,999</div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "FREE GST Consultation", "Dedicated GST expert", "GSTR-1, GSTR-3B & GSTR-9 Filing",
                                    "Input Tax Credit Reconciliation", "Data modeling in Excel & Tally",
                                    "Phone, Chat & Email Support", "Any Accounting Software", "Upto 500 Entries Per Month"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-[#233a85] hover:bg-blue-800 text-white font-bold py-4 rounded-lg shadow-lg transition-colors">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </section>

                {/* 3. DOCUMENTS REQUIRED */}
                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-6">
                        <FiFileText className="w-8 h-8 text-[#233a85] mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">Process & Documents Required</h2>
                    </div>
                    <p className="mb-6 text-gray-600">Based on annual turnover status, there are categories under which the GST return filing could be carried out. One business entity is obliged to submit the following documents:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "The purchase invoice", "Input/purchase credits", "GSTIN of the seller/business",
                            "Summary of documents issued", "Type of invoice", "Applicable SGST/CGST/IGST",
                            "Invoice number & date", "Taxable value / GST rate", "Consumer details"
                        ].map((doc, idx) => (
                            <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-md border border-gray-200">
                                <div className="w-2 h-2 bg-[#ff6f00] rounded-full mr-3"></div>
                                <span className="text-sm font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* 4. GST FORMS SECTION (Matched to Image 2 Colors & Grid Style) */}
            <section className="py-20 bg-gradient-to-br from-[#0B1F4D] via-[#102C66] to-[#163A7A]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            GST Returns
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                            GST Return Filing Forms
                        </h2>

                        <p className="text-slate-300 max-w-4xl mx-auto mt-5 leading-8">
                            Based on business type, turnover, and taxpayer category, different
                            GST return forms are applicable. Explore the major GST return forms
                            and their purposes below.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                    </div>

                    {/* Accordions */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Column 1 */}
                        <div className="space-y-4">

                            <Accordion title="GSTR-1" defaultOpen>
                                <p className="text-slate-600 leading-7">
                                    GSTR-1 is used to report details of outward supplies (sales)
                                    made by a registered taxpayer during a tax period.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-2">
                                <p className="text-slate-600 leading-7">
                                    GSTR-2 contains details of inward supplies (purchases)
                                    received from registered suppliers.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-2A">
                                <p className="text-slate-600 leading-7">
                                    GSTR-2A is an auto-generated, read-only return that reflects
                                    purchase details uploaded by suppliers in GSTR-1.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-3B">
                                <p className="text-slate-600 leading-7">
                                    GSTR-3B is a monthly self-declaration return summarizing sales,
                                    purchases, input tax credit, and tax liabilities.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-4">
                                <p className="text-slate-600 leading-7">
                                    GSTR-4 is filed annually by taxpayers registered under the
                                    Composition Scheme.
                                </p>
                            </Accordion>

                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">

                            <Accordion title="GSTR-5" defaultOpen>
                                <p className="text-slate-600 leading-7 mb-4">
                                    GSTR-5 is filed by Non-Resident Taxable Persons (NRTPs)
                                    providing details of purchases, sales, and tax liabilities.
                                </p>

                                <div className="bg-[#f26522]/10 border border-[#f26522]/20 rounded-xl p-4">
                                    <p className="text-sm text-slate-700">
                                        Due Date: 20th day of the following month.
                                    </p>
                                </div>
                            </Accordion>

                            <Accordion title="GSTR-5A">
                                <p className="text-slate-600 leading-7">
                                    GSTR-5A is filed by providers of Online Information and
                                    Database Access or Retrieval (OIDAR) services supplied
                                    from outside India.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-6A">
                                <p className="text-slate-600 leading-7">
                                    GSTR-6A is a read-only document generated automatically
                                    for Input Service Distributors (ISD).
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-6">
                                <p className="text-slate-600 leading-7">
                                    GSTR-6 is filed by Input Service Distributors to distribute
                                    eligible input tax credits among branches.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-7">
                                <p className="text-slate-600 leading-7">
                                    GSTR-7 is filed by entities required to deduct Tax Deducted
                                    at Source (TDS) under GST provisions.
                                </p>
                            </Accordion>

                        </div>

                        {/* Column 3 */}
                        <div className="space-y-4">

                            <Accordion title="GSTR-7A" defaultOpen>
                                <p className="text-slate-600 leading-7">
                                    GSTR-7A is the TDS Certificate automatically generated
                                    after successful filing of GSTR-7.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-8">
                                <p className="text-slate-600 leading-7">
                                    GSTR-8 is filed by e-commerce operators who are required
                                    to collect Tax Collected at Source (TCS) under GST.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-9">
                                <p className="text-slate-600 leading-7">
                                    GSTR-9 is the annual return that consolidates all monthly
                                    and quarterly GST returns filed during a financial year.
                                </p>
                            </Accordion>

                            <Accordion title="GSTR-9A">
                                <p className="text-slate-600 leading-7">
                                    GSTR-9A is the annual return applicable to taxpayers
                                    registered under the Composition Scheme.
                                </p>
                            </Accordion>

                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16">
                        <div className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-2xl">
                            <h3 className="text-3xl font-bold text-[#0B1F4D] mb-4">
                                Need Help with GST Return Filing?
                            </h3>

                            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                                Our GST experts can help you file returns accurately,
                                avoid penalties, and stay fully compliant with GST regulations.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Talk to GST Expert
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

                {/* 5. BENEFITS (GRID) */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Benefits of GST Return Filing</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <BsShieldCheck className="w-12 h-12 text-[#233a85] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Abolition of Cascading Effect</h3>
                            <p className="text-sm text-gray-600">Simplifies the entire tax process by eliminating all the tax-on-tax or the cascading method.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <FiTrendingUp className="w-12 h-12 text-[#233a85] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">An Organized Tax System</h3>
                            <p className="text-sm text-gray-600">Businesses pay the entire tax amount at a single time, replacing the chaotic older tax system.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <FiGlobe className="w-12 h-12 text-[#233a85] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Business Opportunities</h3>
                            <p className="text-sm text-gray-600">Enjoy a nationwide market without paying different taxes to various State Governments.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <FaRegLightbulb className="w-12 h-12 text-[#233a85] mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Helping Start-ups</h3>
                            <p className="text-sm text-gray-600">Replaced the compulsory VAT (previously troublesome for startups with &gt;5L turnover).</p>
                        </div>
                    </div>
                </section>

                {/* 6. POINTS TO REMEMBER (ALERT) */}
                <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                        <FiAlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-red-800 mb-2">Points to Remember</h3>
                            <p className="text-red-700 text-sm leading-relaxed mb-3">
                                The scheduled date for GST filing can be altered/extended by govt. notification. Not filing by the due date leads to a late fine and a liable amount with interest at 18% p.a.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-red-700 font-medium">
                                <li>For CGST – INR 100/day</li>
                                <li>For SGST – INR 100/day</li>
                                <li>Small business entities are required to file their GST return quarterly.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 7. FAQs */}
                <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                    <div className="max-w-5xl mx-auto px-4">

                        <div className="text-center mb-14">
                            <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                                Help Center
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F4D] mt-3">
                                Frequently Asked Questions
                            </h2>

                            <p className="text-slate-600 max-w-3xl mx-auto mt-4">
                                Find answers to the most commonly asked questions about GST
                                registration, return filing, compliance, and taxation.
                            </p>

                            <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                        </div>

                        <div className="space-y-4">

                            <Accordion
                                title="What is the AATO Scheme amendment in GST Return filing?"
                                defaultOpen
                            >
                                <p className="text-slate-600 leading-7">
                                    Under the QRMP (Quarterly Return Monthly Payment) Scheme,
                                    taxpayers with Aggregate Annual Turnover (AATO) up to ₹5 Crores
                                    can file GSTR-1 and GSTR-3B quarterly while making monthly tax
                                    payments through a challan.
                                </p>
                            </Accordion>

                            <Accordion title="Can I apply for GST Return Filing online?">
                                <p className="text-slate-600 leading-7">
                                    Yes. GST return filing can be completed entirely online. Our GST
                                    experts assist with documentation, filing, compliance, and return
                                    submission on your behalf.
                                </p>
                            </Accordion>

                            <Accordion title="Is the GST threshold limit the same for all Indian states?">
                                <p className="text-slate-600 leading-7">
                                    No. GST threshold limits may vary for special category states.
                                    Generally, registration becomes mandatory when turnover exceeds
                                    ₹40 Lakhs for goods businesses and ₹20 Lakhs for service providers,
                                    subject to applicable state-specific provisions.
                                </p>
                            </Accordion>

                            <Accordion title="How does the Composition Scheme work under GST?">
                                <p className="text-slate-600 leading-7">
                                    The Composition Scheme allows eligible small taxpayers to pay GST
                                    at a fixed rate on turnover with simplified compliance and reduced
                                    filing requirements. Certain restrictions apply regarding interstate
                                    sales and input tax credit claims.
                                </p>
                            </Accordion>

                            <Accordion title="Does GST apply to all businesses?">
                                <p className="text-slate-600 leading-7">
                                    GST applies to businesses that exceed prescribed turnover limits
                                    or fall under categories where registration is mandatory, such as
                                    e-commerce operators, interstate suppliers, and certain service
                                    providers.
                                </p>
                            </Accordion>

                            <Accordion title="Do we need different forms for IGST, SGST, and CGST?">
                                <p className="text-slate-600 leading-7">
                                    No separate return forms are required for IGST, SGST, and CGST.
                                    GST returns capture all applicable tax details within the same
                                    filing framework.
                                </p>
                            </Accordion>

                            <Accordion title="Can GST returns be revised?">
                                <p className="text-slate-600 leading-7">
                                    GST returns cannot generally be revised after submission. Any
                                    corrections or omissions must usually be adjusted in subsequent
                                    returns according to GST regulations.
                                </p>
                            </Accordion>

                            <Accordion title="What happens if GST returns are not filed on time?">
                                <p className="text-slate-600 leading-7">
                                    Late filing may attract late fees, interest on unpaid tax, and
                                    restrictions on future return filing. Continuous non-compliance may
                                    lead to notices, penalties, and cancellation of GST registration.
                                </p>
                            </Accordion>

                            <Accordion title="Can I pay taxes after filing GST returns?">
                                <p className="text-slate-600 leading-7">
                                    Yes. After filing the applicable GST return, tax liabilities can be
                                    paid through the GST portal using net banking, debit card, credit
                                    card, NEFT, RTGS, or other approved payment methods.
                                </p>
                            </Accordion>

                        </div>

                        {/* CTA */}
                        <div className="mt-14 bg-[#0B1F4D] rounded-3xl p-8 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Still Have Questions?
                            </h3>

                            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                                Speak with our GST experts for personalized guidance on GST
                                registration, return filing, and compliance requirements.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Talk to GST Expert
                            </button>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}