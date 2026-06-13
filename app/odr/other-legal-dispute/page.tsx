"use client";

import React, { ReactNode, useState } from 'react';

// --- Reusable Accordion Component ---
type AccordionItemProps = {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
};
const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
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

export default function OdrLanding() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8 relative overflow-hidden">
                {/* Background Pattern Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full border-2 border-white"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Do you have a <br />
                            <span className="relative inline-block">
                                Legal Problem?
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed max-w-lg">
                            Resolve the Issue Digitally with Online Dispute Resolution.
                        </p>

                        <div className="flex items-center space-x-4 mt-8">
                            <div className="flex items-center bg-[#1c3065] text-green-400 text-sm font-semibold px-4 py-2.5 rounded-full border border-blue-800">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                Fast & Secure
                            </div>
                            <div className="flex items-center bg-[#1c3065] text-blue-50 text-sm font-semibold px-4 py-2.5 rounded-full border border-blue-800">
                                100% Online Process
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600] relative">

                            {/* Small badge/header inside form */}
                            <div className="absolute -top-4 left-6 bg-[#ff7600] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Get a Callback
                            </div>

                            <form className="space-y-5 mt-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Name *</label>
                                    <input type="text" placeholder="Enter full name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Mobile Number *</label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">Your Email Address *</label>
                                    <input type="email" placeholder="Enter email address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">State *</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select your state</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="gujarat">Gujarat</option>
                                        <option value="uttar-pradesh">Uttar Pradesh</option>
                                        <option value="west-bengal">West Bengal</option>
                                        <option value="other">Other States</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-2 shadow-lg text-base tracking-wide">
                                    Submit Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST INDICATORS / VALUE PROPS (Optional Sub-Hero) */}
            <section className="py-12 px-4 bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4">
                        <div className="text-3xl mb-2 text-[#ff7600]">⚖️</div>
                        <h3 className="font-bold text-[#243c7c] text-sm mb-1">Legal Experts</h3>
                        <p className="text-xs text-gray-500">Former judges & legal professionals</p>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl mb-2 text-[#ff7600]">🔒</div>
                        <h3 className="font-bold text-[#243c7c] text-sm mb-1">100% Secure</h3>
                        <p className="text-xs text-gray-500">Confidential & encrypted data handling</p>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl mb-2 text-[#ff7600]">⏱️</div>
                        <h3 className="font-bold text-[#243c7c] text-sm mb-1">Quick Resolution</h3>
                        <p className="text-xs text-gray-500">Faster than traditional courts</p>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl mb-2 text-[#ff7600]">🌐</div>
                        <h3 className="font-bold text-[#243c7c] text-sm mb-1">Access Anywhere</h3>
                        <p className="text-xs text-gray-500">File from anywhere in India</p>
                    </div>
                </div>
            </section>

            {/* 3. EXTENSIVE FAQ SECTION */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c] mb-2">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-[#ff7600] mx-auto mt-4 mb-4"></div>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto">Everything you need to know about resolving disputes digitally through our platform.</p>
                    </div>

                    <div className="space-y-2">

                        <AccordionItem title="What is Online Dispute Resolution (ODR)?" defaultOpen={true}>
                            <p>ODR is a digital way to resolve disputes through mediation, conciliation, or arbitration conducted online. In simpler words, it is the conduct of the ADR (Alternative Dispute Resolution) process in an online environment. Consequently, ODR is not only legally permissible but has also gained broad recognition in India from the judiciary, the government, and business enterprises.</p>
                        </AccordionItem>

                        <AccordionItem title="What is Online Legal India (OLI)?">
                            <p>Online Legal India (OLI) is a dedicated digital platform that connects individuals and businesses facing legal disputes with professional mediators, arbitrators, and conciliators. We act as a neutral facilitator to ensure fair, quick, and cost-effective resolution of conflicts outside traditional courtrooms.</p>
                        </AccordionItem>

                        <AccordionItem title="What kind of disputes can be resolved via ODR?">
                            <p>A wide range of civil and commercial disputes can be resolved via ODR, including:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Labour & Employment:</strong> Wage issues, harassment, wrongful termination, unfair labour practices.</li>
                                <li><strong>Insurance Claims:</strong> Delayed payments, claim rejections, policy misinterpretations.</li>
                                <li><strong>Commercial/Business:</strong> Contract breaches, partnership disagreements, service defaults.</li>
                                <li><strong>Consumer Rights:</strong> Product defects, service failures, e-commerce disputes.</li>
                                <li><strong>Property:</strong> Rent agreements, maintenance charges, property damage claims.</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title="Can criminal cases be resolved via ODR?">
                            <p>No, ODR is generally applicable only for <strong>civil</strong> and commercial disputes where parties have the freedom to settle or compromise. Criminal cases involving serious offenses (like theft, assault, fraud under IPC) must be handled by the criminal court system, though minor compoundable offenses may sometimes use ADR mechanisms subject to judicial approval.</p>
                        </AccordionItem>

                        <AccordionItem title="Is ODR legally valid?">
                            <p>Yes, absolutely. ODR is fully supported under the Arbitration and Conciliation Act, 1996, the Information Technology Act, 2000, and various procedural codes of India. Settlements reached through binding arbitration are enforceable by law. Mediated settlements are treated like contracts between parties.</p>
                        </AccordionItem>

                        <AccordionItem title="What are the benefits of using ODR over traditional litigation?">
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Cost-Effective:</strong> Significantly lower legal fees compared to hiring advocates and paying heavy court fees.</li>
                                <li><strong>Time-Saving:</strong> Resolutions happen in days or weeks rather than years.</li>
                                <li><strong>Convenience:</strong> Attend hearings/meetings via video call from your home or office. No need to travel to courts.</li>
                                <li><strong>Privacy:</strong> Dispute details are not part of public records like court judgments.</li>
                                <li><strong>Flexibility:</strong> Choose your own timings for sessions without strict court schedules.</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem title="How secure is the process?">
                            <p>We use bank-level encryption (SSL/TLS) to secure all data transmitted during ODR proceedings. All documents uploaded are stored securely in cloud environments compliant with ISO standards. Video calls are conducted over end-to-end encrypted channels. Your personal data is never shared with third parties without explicit consent.</p>
                        </AccordionItem>

                        <AccordionItem title="Can I file a case from anywhere in India?">
                            <p>Yes! That is the beauty of ODR. As long as you have a stable internet connection and a device (smartphone/laptop), you can file a dispute from any city or state—be it Delhi, Mumbai, Kolkata, or a remote village location. Geography does not limit access to justice anymore.</p>
                        </AccordionItem>

                        <AccordionItem title="Are ODR decisions binding?">
                            <p>It depends on the mode chosen:
                                <br /><br />
                                • <strong>Mediation/Conciliation:</strong> Not automatically binding. Parties must agree to the settlement terms; if they agree, it becomes a contractually binding agreement.<br />
                                • <strong>Arbitration:</strong> Binding on both parties once the award is passed. It has the same effect as a court decree and can be enforced directly under the Code of Civil Procedure (Section 36).<br />
                                • <strong>Lok Adalat decisions:</strong> Are deemed decrees of civil courts and are executable.</p>
                        </AccordionItem>

                        <AccordionItem title="What documents do I need to start the process?">
                            <p>Generally, you will need:
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Valid ID Proof (Aadhaar/PAN/Passport)</li>
                                    <li>Address Proof (current)</li>
                                    <li>Relevant documents supporting your dispute (Contracts, Emails, Invoices, Photos, Police FIR if any)</li>
                                    <li>Past correspondence with the opposite party proving attempts to settle amicably</li>
                                </ul></p>
                        </AccordionItem>

                        <AccordionItem title="What happens after settlement?">
                            <p>Once parties mutually agree to the settlement terms during mediation/conciliation, a Settlement Agreement (MoU) is drafted and signed by both sides. If it was an arbitration proceeding, an Award is passed. These documents can then be executed (enforced) if the other party fails to comply voluntarily. Our platform guides you completely through this post-settlement execution phase.</p>
                        </AccordionItem>

                        <AccordionItem title="What if the other party doesn’t respond or cooperate?">
                            <p>In cases of non-cooperation from the opposing party, we attempt multiple modes of communication (Email, SMS, Postal Notice).
                                <br /><br />
                                • <strong>If it’s Mediation:</strong> It cannot proceed forcibly unless the other party consents. However, you can switch to Arbitration if there exists an arbitration clause in your contract/agreement.<br />
                                • <strong>If it’s Arbitration:</strong> If the other party refuses to appear despite proper notice, the Tribunal can proceed ex-parte (in their absence) and pass an award based on merits of documents submitted by the active party.</p>
                        </AccordionItem>

                    </div>
                </div>
            </section>

            {/* 4. DISCLAIMER SECTION (Crucial for legal sites) */}
            <section className="py-12 px-4 bg-gray-100 border-t border-gray-200 mt-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-l-4 border-red-500">
                        <h3 className="text-red-600 font-extrabold uppercase tracking-widest text-sm mb-4">Important Disclaimer</h3>
                        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                            <p>
                                <strong>Online Legal India is not a law firm and does not offer legal advice.</strong> The materials and services provided on this platform are not a substitute for professional legal counsel or representation in a court of law.
                            </p>
                            <p>
                                The use of these materials or services does not create an Attorney-Client relationship between the user and Online Legal India.
                            </p>
                            <p>
                                Online Legal India serves strictly as a neutral technology-enabled platform that connects individuals seeking Online Dispute Resolution (ODR) services with independent arbitrators, mediators, and conciliators. Results cannot be guaranteed and depend entirely upon the facts of each individual case, the willingness of parties to negotiate, and applicable laws.
                            </p>
                            <p className="italic text-xs text-gray-400 pt-2 border-t border-gray-100">
                                By using this website, you acknowledge that you have read, understood, and accepted this disclaimer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}