"use client";

import React, { useState } from 'react';

type AccordionItemProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};

// --- Reusable Accordion Component ---
const AccordionItem = ({ title, children, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-lg bg-white mb-3 shadow-sm transition-all duration-200">
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

export default function BisCertification() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex flex-col">

            {/* 1. HERO SECTION */}
            <section className="bg-[#243c7c] relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#243c7c] via-[#1c3065] to-[#12224f]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-6 border border-white/20 uppercase text-blue-100">
                            <span className="w-2 h-2 bg-[#ff7600] rounded-full animate-pulse"></span>
                            Expert Registration & Compliance
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            Simple. Fast. Affordable <br />
                            <span className="text-[#ff7600]">BIS Certification</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed max-w-xl border-l-4 border-[#ff7600] pl-5">
                            At Online Legal India, we help your business get BIS certified the right way. We simplify paperwork, lab testing, and formalities so you can focus on growing your business with confidence and credibility.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Full compliance under the BIS Act, 2016
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                Guarantees Safety, Quality & National Standards
                            </li>
                            <li className="flex items-center text-sm md:text-base font-medium">
                                <span className="w-6 h-6 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">✓</span>
                                End-to-End processing & Lab Testing Support
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:flex lg:justify-end">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-[#243c7c]">Talk to an Expert</h2>
                                <p className="text-sm text-gray-500 mt-1">Unsure about BIS? Gain clarity in minutes.</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Your Mobile Number *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email Address *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px]" />
                                </div>
                                <div>
                                    <select required defaultValue="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none bg-gray-50 focus:bg-white transition text-[15px] text-gray-600 appearance-none">
                                        <option value="" disabled>Select State *</option>
                                        <option>Maharashtra</option>
                                        <option>Delhi</option>
                                        <option>Gujarat</option>
                                        <option>Karnataka</option>
                                        <option>Tamil Nadu</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Captcha */}
                                <div className="flex gap-3 items-center pt-2">
                                    <div className="bg-gray-200 text-gray-700 font-serif italic font-bold tracking-[0.3em] px-4 py-2 rounded-md border border-gray-300 select-none w-1/3 text-center text-lg">
                                        R 7 B 9
                                    </div>
                                    <input type="text" placeholder="Enter captcha here.." required className="w-2/3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" />
                                </div>

                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 mt-2 text-base">
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS / IMPACT BANNER */}
            <section className="bg-[#1c3065] border-y border-[#12224f] py-8">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800">
                    <div className="px-4">
                        <div className="text-4xl font-black text-[#ff7600] mb-2">70%</div>
                        <p className="text-sm text-blue-100 leading-snug">Certified Businesses reported increased customer trust and product credibility.</p>
                    </div>
                    <div className="px-4 pt-6 md:pt-0">
                        <div className="text-4xl font-black text-[#ff7600] mb-2">60%</div>
                        <p className="text-sm text-blue-100 leading-snug">Experienced Faster Market access and significantly reduced regulatory hurdles.</p>
                    </div>
                    <div className="px-4 pt-6 md:pt-0">
                        <div className="text-4xl font-black text-[#ff7600] mb-2">55%</div>
                        <p className="text-sm text-blue-100 leading-snug">Saw Improved Sales due to compliance with government-mandated quality standards.</p>
                    </div>
                </div>
            </section>

            {/* 3. VALUE ADDITION (Why BIS?) */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">How BIS Certification Adds Value to Your Business</h2>
                    <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Guarantees Product Quality", desc: "ISI - marked products ensure your goods meet national safety and performance standards.", icon: "🎖️" },
                        { title: "Reduces Losses & Rejections", desc: "Certified products face fewer returns, less wastage, and lower manufacturing defects.", icon: "📉" },
                        { title: "Builds Consumer Trust", desc: "Customers prefer BIS-certified products, strengthening brand reputation and loyalty.", icon: "🤝" },
                        { title: "Improves Market Access", desc: "BIS certification is legally mandatory for 380+ products—without it, you can’t sell in India.", icon: "🌍" },
                        { title: "Boosts Business Growth", desc: "Better product reliability leads to better market performance, exports, and long-term profits.", icon: "🚀" },
                        { title: "Compliance That Protects You", desc: "Avoid penalties, bans, or product recalls through verified BIS legal compliance.", icon: "🛡️" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 hover:border-[#ff7600] hover:shadow-xl rounded-xl p-8 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. ELIGIBILITY / WHO NEEDS IT */}
            <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Eligibility for BIS</h2>
                        <div className="w-20 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                        <p className="text-gray-500 mt-4">Who is required to obtain or ensure BIS certification?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { title: "Manufacturers", desc: "Indian and foreign manufacturers producing goods under BIS-mandated categories must obtain certification before market entry.", icon: "🏭" },
                            { title: "Assemblers", desc: "Businesses assembling components into finished products (especially electronics/IT) must secure certification.", icon: "🔧" },
                            { title: "Importers", desc: "Importers of regulated products must ensure goods are BIS-certified and labelled correctly before entering India.", icon: "🚢" },
                            { title: "Brand Owners / Private Labellers", desc: "Companies selling products under their brand name, even if manufactured third party, are responsible for compliance.", icon: "🏷️" },
                            { title: "OEMs", desc: "Original Equipment Manufacturers making products/components for other brands must get certification under BIS jurisdiction.", icon: "⚙️" },
                            { title: "Distributors / Dealers", desc: "Must only distribute BIS-compliant products to avoid severe regulatory action and inventory seizures.", icon: "🚚" },
                            { title: "Retailers (B2B & B2C)", desc: "Retailers, offline and online, must verify BIS marking on regulated products they stock and sell.", icon: "🏪" },
                            { title: "Foreign Manufacturers", desc: "Overseas manufacturers exporting to India must apply under FMCS and appoint an Authorised Indian Representative (AIR).", icon: "🌐" },
                            { title: "E-Commerce Sellers", desc: "Marketplaces and sellers listing electronics, IT products, and appliances must ensure items are BIS-certified.", icon: "🛒" }
                        ].map((eligibility, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
                                <div className="text-3xl mb-3">{eligibility.icon}</div>
                                <h3 className="font-bold text-[#243c7c] mb-2">{eligibility.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{eligibility.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TYPES OF BIS CERTIFICATION */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Types Of BIS Certification We Offer</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#ff7600] transition-colors">
                            <div className="text-4xl mr-6 shrink-0 mt-1">🏷️</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#243c7c] mb-2">Compulsory Certification (ISI Mark: Scheme-I)</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Mandatory for certain products. Requires lab testing and BIS approval before using the highly recognized ISI mark on your product packaging.</p>
                            </div>
                        </div>

                        <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#ff7600] transition-colors">
                            <div className="text-4xl mr-6 shrink-0 mt-1">✅</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#243c7c] mb-2">Voluntary Certification Scheme</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Optional for products not under the mandatory list. Helps build immense consumer trust and acts as a verifiable proof of premium product quality.</p>
                            </div>
                        </div>

                        <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#ff7600] transition-colors">
                            <div className="text-4xl mr-6 shrink-0 mt-1">💻</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#243c7c] mb-2">Compulsory Registration Scheme (CRS)</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Applicable to electronics and IT products notified by MeitY. Requires BIS lab testing and registration before sale. Products must carry a self-declaration label, not the ISI mark.</p>
                            </div>
                        </div>

                        <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#ff7600] transition-colors">
                            <div className="text-4xl mr-6 shrink-0 mt-1">🌍</div>
                            <div>
                                <h3 className="text-xl font-bold text-[#243c7c] mb-2">Foreign Manufacturers Certification Scheme (FMCS)</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Mandatory for foreign manufacturers of regulated products. Involves Indian lab testing, BIS factory inspection, and appointment of an Authorised Indian Representative (AIR).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INDUSTRIES WE CATER & THRIVING INDUSTRIES (Combined Logic) */}
            <section className="py-20 px-4 bg-[#243c7c] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries Thriving with BIS Certification</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                        <p className="text-blue-100 mt-4 max-w-2xl mx-auto">From construction materials to advanced electronics, we cater to a massive range of IS Code product categories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Chemical", codes: ["Paints: IS 2074", "Caustic Soda: IS 252", "Sulphuric Acid: IS 266", "Synthetic Food Colours: IS 5346", "Fertilisers & Pesticides: IS 14552, IS 6438"] },
                            { title: "Civil Engineering", codes: ["Cement: IS 2645, IS 14182", "Concrete Blocks: IS 2185", "Manhole Covers: IS 12592", "Chequered Tiles: IS 13801", "Steel Bars for Concrete: IS 432"] },
                            { title: "Electro-Technical", codes: ["Wires & Cables: IS 694, IS 7098", "Circuit Breakers: IS/IEC 60898", "Electrical Accessories: IS 3854", "Distribution Transformers: IS 1180"] },
                            { title: "Food & Agriculture", codes: ["Milk Powder: IS 1165", "Skimmed Milk Powder: IS 13334", "Iodised Salt: IS 7224", "Biscuits: IS 1011", "Packaged Drinking Water"] },
                            { title: "Mechanical Engineering", codes: ["Hand Pumps: IS 15500", "Steel Valves: IS 13095", "Centrifugal Pumps: IS 9079"] },
                            { title: "Medical & Hospital", codes: ["Sphygmomanometers: IS 3390", "Medical Gloves: IS 15354", "Sterilisers: IS 3829", "Glucose Monitors: IS/ISO 15197"] },
                            { title: "Metallurgical Engineering", codes: ["Steel Reinforcement Bars: IS 432", "Stainless Steel Wires: IS 6528", "Structural Steel: IS 2062", "Cast Iron Pipes: IS 1538"] },
                            { title: "Petroleum & Coal", codes: ["Bitumen: IS 73", "Lubricants & Engine Oil", "Fuel Containers"] },
                            { title: "Production & Engineering", codes: ["Door Closers: IS 3564", "Hex Nuts & Bolts: IS 1363", "Fasteners: IS 1367", "Industrial Locks: IS 15833"] }
                        ].map((industry, i) => (
                            <div key={i} className="bg-[#1c3065] border border-blue-800 rounded-xl p-6 hover:bg-[#152554] transition">
                                <h3 className="font-bold text-[#ff7600] text-lg mb-4 pb-2 border-b border-blue-800">{industry.title}</h3>
                                <ul className="space-y-2">
                                    {industry.codes.map((code, idx) => (
                                        <li key={idx} className="text-xs text-blue-100 flex items-start">
                                            <span className="mr-2 text-green-400">▹</span> {code}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. DOCUMENTS REQUIRED */}
            <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c] mb-4">Documents Required for BIS Certification</h2>
                        <div className="w-24 h-1 bg-[#ff7600] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#243c7c] text-white flex items-center justify-center font-black text-2xl rounded-bl-3xl">01</div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-4 pr-12">Business Identity & Establishment</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Company Incorporation / Registration Certificate</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Memorandum (MOA) or Articles (AOA)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> MSME or SSI Certificate (if applicable)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Name/address proof of office & factory premises</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Valid lease deed or ownership proof for factory</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#243c7c] text-white flex items-center justify-center font-black text-2xl rounded-bl-3xl">02</div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-4 pr-12">Authorisation & Representation</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Authorization letter (if signed by someone other than CEO/MD)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Nomination form and Indian representative details (for foreign manufacturers)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#243c7c] text-white flex items-center justify-center font-black text-2xl rounded-bl-3xl">03</div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-4 pr-12">Manufacturing Facility</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Manufacturing flowchart (raw material to finished goods)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> List of manufacturing machinery with specifications</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Details of outsourced manufacturing operations (if any)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Layout plan indicating office, lab, production & storage</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#243c7c] text-white flex items-center justify-center font-black text-2xl rounded-bl-3xl">04</div>
                            <h3 className="text-xl font-bold text-[#243c7c] mb-4 pr-12">Testing & Quality Control</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> List of in-house testing equipment</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Valid calibration certificates (preferably NABL approved)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> Third-party lab test reports (as per Indian Standards)</li>
                                <li className="flex"><span className="text-[#ff7600] mr-2">✔</span> In-house test reports & raw material test certificates</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#243c7c]">Frequently Asked Questions (FAQ)</h2>
                        <div className="w-16 h-1 bg-[#ff7600] mx-auto mt-4 mb-4"></div>
                    </div>

                    <div className="space-y-2">
                        <AccordionItem title="What is BIS Certification?" defaultOpen={true}>
                            <p>BIS Certification is a government approval under the Bureau of Indian Standards Act, 2016 that confirms a product meets Indian Standards for quality and safety. It provides a third-party guarantee of quality, safety, and reliability of products to the customer.</p>
                        </AccordionItem>

                        <AccordionItem title="How much time does the certification process take?">
                            <p>The timeline varies depending on the product type, lab testing duration, and documentation. Generally, it takes between <strong>30 to 45 working days</strong> for domestic manufacturers. For the Foreign Manufacturers Certification Scheme (FMCS), it can take up to 90-120 days due to factory inspections.</p>
                        </AccordionItem>

                        <AccordionItem title="Is BIS mandatory for all products?">
                            <p>No, BIS certification is not mandatory for all products. However, the Government of India has mandated it for over <strong>380+ specific product categories</strong> (such as electronics, steel, cement, toys, and packaged drinking water) under the Compulsory Registration Scheme (CRS) and ISI scheme to ensure public health and safety.</p>
                        </AccordionItem>

                        <AccordionItem title="What if I manufacture in another country?">
                            <p>Foreign manufacturers exporting products to India must obtain BIS certification under the <strong>Foreign Manufacturers Certification Scheme (FMCS)</strong>. They are also legally required to appoint an Authorised Indian Representative (AIR) to act as a local point of contact for compliance and queries in India.</p>
                        </AccordionItem>
                    </div>
                </div>
            </section>

            {/* 9. PRICING & CTA BANNER */}
            <section className="py-16 px-4 bg-gray-50 mt-auto">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#243c7c] to-[#1c3065] rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ff7600] rounded-full opacity-20 blur-2xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl"></div>

                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Expand into Regulated Sectors Today</h2>
                    <p className="text-blue-100 mb-8 relative z-10 text-lg">Get Ongoing Support. Maintain Compliance. Renew Certificates.</p>

                    <div className="bg-white text-gray-800 inline-block rounded-2xl p-6 md:p-8 shadow-xl relative z-10 w-full max-w-sm mx-auto">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Consultancy Fees</p>
                        <div className="text-5xl font-black text-[#ff7600] mb-2">₹1,999</div>
                        <p className="text-xs text-gray-400 mb-6">( excluding 18% GST )</p>
                        <button className="w-full bg-[#243c7c] hover:bg-[#1c3065] text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 text-lg">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}