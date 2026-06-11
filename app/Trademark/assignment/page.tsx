"use client";

import React from "react";
import {
    FiShield,
    FiTrendingUp,
    FiGlobe,
    FiStar,
    FiLock,
    FiAward,
    FiCheckSquare,
    FiInfo
} from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";

export default function TrademarkAssignmentPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#233a85] py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">

                    {/* Left: Hero Text */}
                    <div className="md:col-span-7 text-white text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Take a step forward to secure your brand!
                        </h1>
                        <p className="text-blue-100 font-medium text-lg md:text-xl leading-relaxed mb-8">
                            Transfer ownership smoothly and unlock new opportunities for growth with our expert Trademark Assignment services.
                        </p>

                        <div className="hidden md:flex flex-col gap-4">
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">100% Online & Hassle-Free</span>
                            </div>
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">Expert Legal Drafting</span>
                            </div>
                            <div className="flex items-center text-blue-50">
                                <FiCheckSquare className="text-[#ff6f00] w-6 h-6 mr-3" />
                                <span className="font-semibold text-lg">Complete Confidentiality</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 md:p-9 rounded-xl shadow-2xl">
                        <h3 className="text-2xl font-bold text-[#0b1b3d] mb-2 text-center">
                            We're here to help
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 text-center">
                            Fill out the form below to get started
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">Name <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors" />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">E-Mail <span className="text-red-500">*</span></label>
                                <input type="email" placeholder="Your Email Address" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors" />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">Mobile <span className="text-red-500">*</span></label>
                                <input type="tel" placeholder="Mobile Number" className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] transition-colors" />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-600 mb-1 block uppercase tracking-wide">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-[#233a85] text-gray-700 bg-white transition-colors">
                                    <option value="">Select state</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="WB">West Bengal</option>
                                </select>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3.5 rounded-md transition-colors shadow-md mt-6">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 2. WHAT IS TRADEMARK ASSIGNMENT */}
            <section className="py-16 md:py-24 px-4 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            What is Trademark Assignment?
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6 text-gray-700 text-[16px] md:text-[17px] leading-relaxed text-justify">
                        <p>
                            A trademark assignment occurs when one party, the assignor, transfers ownership of a registered trademark to another person, the assignee. It is a procedure that allows a trademark's rights and obligations to be transferred from its first owner to a new one.
                        </p>
                        <p>
                            A trademark is a unique sign, symbol, logo, word, phrase, or design used to recognise and differentiate the goods/services of one seller from those of others. It is an essential intellectual property asset that represents a brand's identity and reputation in the marketplace.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-[#233a85] p-6 rounded-r-xl shadow-sm mt-8">
                            <p className="text-[#0b1b3d] font-medium italic">
                                "When a company or individual decides to sell, transfer, or change ownership of their trademark, they do so through a trademark assignment. The assignment is usually a documented agreement that outlines the transfer details, including the specific rights being transferred, the effective date of the assignment, and any terms and conditions agreed upon by both parties."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US (Benefits Grid) */}
            <section className="bg-[#f8f9fc] py-16 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            Why Choose Us?
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600 text-lg">Secure, scale, and protect your intellectual property with our premier services.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FiShield />,
                                title: "Safeguard Your Brand's Identity",
                                desc: "We understand the significance of your brand's identity. Our experts ensure a smooth and efficient trademark assignment process, protecting your brand from potential infringements and unauthorised use. Confidently build a strong foundation for your future."
                            },
                            {
                                icon: <FiTrendingUp />,
                                title: "Unlocking New Opportunities",
                                desc: "Take your brand to new heights. Transferring your trademark rights opens doors to exciting partnerships, collaborations, and expansion opportunities. Embrace growth and watch your business soar beyond its boundaries."
                            },
                            {
                                icon: <FiGlobe />,
                                title: "Global Reach, Global Trust",
                                desc: "A trademark assignment not only secures your brand locally but also on an international scale. Our team helps you gain exclusive rights to your brand worldwide, enhancing your global presence and customer trust."
                            },
                            {
                                icon: <FiStar />,
                                title: "Inspire Innovation & Creativity",
                                desc: "With your brand protected, let your creativity flow! The reassurance of trademark assignment creates an environment that fosters innovation and empowers your team to think outside the box."
                            },
                            {
                                icon: <FiLock />,
                                title: "Confidentiality & Security",
                                desc: "Your brand's uniqueness and sensitive information are our utmost priorities. We value confidentiality and maintain the highest level of security throughout the entire trademark assignment process."
                            },
                            {
                                icon: <FiAward />,
                                title: "Stand Out from Competitors",
                                desc: "A trademark assignment sets you apart from your competitors. Show your customers that your brand symbolises trust, quality, and innovation. Differentiate yourself in the market and leave a lasting impression."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#233a85] to-[#ff6f00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="bg-orange-50 text-[#ff6f00] w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-2xl">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-[#0b1b3d] text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PRICING SECTION */}
            <section className="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4">
                            Our Pricing
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-300">
                        {/* Header */}
                        <div className="bg-[#233a85] text-white text-center py-6 px-4">
                            <h3 className="text-2xl font-bold uppercase tracking-wider">Trademark Assignment</h3>
                            <p className="text-blue-200 mt-1 font-medium">Complete Package</p>
                        </div>

                        {/* Pricing Breakdown */}
                        <div className="p-8">
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-gray-700 font-medium">
                                    <span>Our Fees (One Time Charge)</span>
                                    <span className="flex items-center"><BsCurrencyRupee /> 8,999</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-700 font-medium">
                                    <span>GST 18%</span>
                                    <span className="flex items-center"><BsCurrencyRupee /> 1,620</span>
                                </div>
                                <div className="border-t border-dashed border-gray-300 my-4 pt-4">
                                    <div className="flex justify-between items-center text-xl font-black text-[#0b1b3d]">
                                        <span>Total Payable</span>
                                        <span className="flex items-center text-[#ff6f00]"><BsCurrencyRupee /> 10,619/-</span>
                                    </div>
                                </div>
                            </div>

                            {/* Warning/Note Box */}
                            <div className="bg-orange-50 rounded-lg p-4 flex items-start border border-orange-100 mb-8">
                                <FiInfo className="text-[#ff6f00] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                <p className="text-xs font-semibold text-[#0b1b3d] leading-relaxed">
                                    Government Fee (Rs. 9,000/-) is <span className="text-[#ff6f00] uppercase">Not Included</span> in the above package.
                                </p>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}