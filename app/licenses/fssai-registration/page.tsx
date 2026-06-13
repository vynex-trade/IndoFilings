"use client";

import React from 'react';
import Image from "next/image";


export default function FssaiPage() {
    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

            {/* 1. HERO SECTION WITH FORM */}
            <section className="bg-[#243c7c] py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Hero Copy */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            Need FSSAI/ FoSCoS <br />
                            <span className="text-[#ff7600]">Food License Registration?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 font-medium max-w-xl">
                            Register under the Food Safety and Standards Authority of India to legally manufacture, distribute, and transport food products.
                        </p>
                        <div className="flex items-center space-x-4 mt-6">
                            <div className="flex items-center text-sm font-semibold bg-[#1c3065] px-4 py-2 rounded-full">
                                <span className="text-green-400 mr-2">✓</span> 100% Online Process
                            </div>
                            <div className="flex items-center text-sm font-semibold bg-[#1c3065] px-4 py-2 rounded-full">
                                <span className="text-green-400 mr-2">✓</span> Expert Assistance
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Form */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800 border-t-4 border-[#ff7600]">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply Now</h2>
                                <p className="text-sm text-gray-500">Fill the form below to get started</p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name *</label>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email *</label>
                                    <input type="email" placeholder="Your Email Address" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile *</label>
                                    <input type="tel" placeholder="Without 0 or +91" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select State *</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none text-sm text-gray-600 appearance-none transition-all" required defaultValue="">
                                        <option value="" disabled>Select State</option>
                                        <option value="andhra-pradesh">Andhra Pradesh</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="tamil-nadu">Tamil Nadu</option>
                                        <option value="telangana">Telangana</option>
                                        <option value="uttar-pradesh">Uttar Pradesh</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-2 shadow-lg text-base">
                                    Apply Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INFORMATION SECTION */}
            <section className="py-16 px-4 max-w-4xl mx-auto space-y-12 text-center md:text-left">

                {/* What is FSSAI? */}
                <div>
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-4">What is FoSCoS / FSSAI Food License?</h2>
                    <div className="w-16 h-1 bg-[#ff7600] mb-6 mx-auto md:mx-0"></div>
                    <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
                        <p>
                            FSSAI launched the Food Safety Compliance System (FoSCoS) w.e.f 1st June 2020, replacing the existing Food Licensing and Registration System. A Food License Registration certificate is required to run a food product business.
                        </p>
                        <p>
                            You have to register under the Food Safety and Standards Authority of India (FSSAI) to manufacture, distribute, and transport food products. FSSAI is established under the Ministry of Health & Family Welfare, Government of India. The FSSAI has been established under the Food Safety and Standards Act, 2006. FSSAI Certificate and FSSAI License are the same, ensuring the quality, purity, and other important factors customers can rely upon.
                        </p>
                    </div>
                </div>

                {/* Difference between terms */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#243c7c] mb-2">What is the difference between FSSAI / FoSCoS / Food License?</h3>
                    <p className="text-[#ff7600] font-semibold text-lg">
                        There is no difference between FSSAI, FoSCoS, and Food License. These are all the same.
                    </p>
                </div>
            </section>

            {/* 3. LICENSE TYPES & PRICING CARDS */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#243c7c]">What are the different types of License?</h2>
                        <div className="w-20 h-1 bg-[#ff7600] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1: Basic License */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow relative">
                            <div className="absolute top-0 w-full h-2 bg-[#243c7c]"></div>
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-extrabold text-[#243c7c] mb-2">Basic License</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-6 h-10">Annual turnover of the business is <span className="text-[#ff7600] block mt-1">Up to 1.5 Crore</span></p>

                                <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-lg text-sm border border-gray-100">
                                    <div className="flex justify-between font-bold text-gray-800 border-b border-gray-200 pb-2"><span>Validity</span><span>Fee</span></div>
                                    <div className="flex justify-between text-gray-600"><span>1 Year</span><span className="font-bold">Rs. 1999/-</span></div>
                                    <div className="flex justify-between text-gray-600"><span>2 Years</span><span className="font-bold">Rs. 2499/-</span></div>
                                    <div className="flex justify-between text-gray-600"><span>3 Years</span><span className="font-bold">Rs. 2999/-</span></div>
                                    <div className="flex justify-between text-gray-600"><span>4 Years</span><span className="font-bold">Rs. 3499/-</span></div>
                                    <div className="flex justify-between text-gray-600"><span>5 Years</span><span className="font-bold">Rs. 3999/-</span></div>
                                </div>

                                <ul className="text-xs text-gray-500 space-y-2 font-medium">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> No Hidden Charge</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Including Govt. Fee</li>
                                    <li className="flex items-center"><span className="text-red-400 mr-2">×</span> Excluding GST</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: State License */}
                        <div className="bg-white rounded-xl shadow-lg border border-[#ff7600] overflow-hidden flex flex-col hover:shadow-xl transition-shadow relative transform md:-translate-y-4">
                            <div className="absolute top-0 w-full h-2 bg-[#ff7600]"></div>
                            {/* Popular Badge */}
                            <div className="bg-[#ff7600] text-white text-xs font-bold uppercase tracking-wider text-center py-1">Most Recommended</div>
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-extrabold text-[#243c7c] mb-2">State License</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-6 h-10">Annual turnover of the business is <span className="text-[#ff7600] block mt-1">Between 1.5 Cr to 50 Cr</span></p>

                                <div className="mb-6 bg-orange-50 p-6 rounded-lg text-center border border-orange-100">
                                    <p className="text-sm text-gray-500 font-bold mb-1">One Time Fee</p>
                                    <p className="text-4xl font-extrabold text-[#ff7600]">Rs. 3499/-</p>
                                    <p className="text-xs text-gray-500 mt-2 font-medium">Validity: 1 to 5 Years</p>
                                </div>

                                <ul className="text-xs text-gray-500 space-y-2 font-medium">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> No Hidden Charge</li>
                                    <li className="flex items-center"><span className="text-red-400 mr-2">×</span> Excluding Govt. Fee</li>
                                    <li className="flex items-center"><span className="text-red-400 mr-2">×</span> Excluding GST</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3: Central License */}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow relative">
                            <div className="absolute top-0 w-full h-2 bg-[#243c7c]"></div>
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-extrabold text-[#243c7c] mb-2">Central License</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-6 h-10">Annual turnover of the business is <span className="text-[#ff7600] block mt-1">Above 50 Crores</span></p>

                                <div className="mb-6 bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
                                    <p className="text-sm text-gray-500 font-bold mb-1">One Time Fee</p>
                                    <p className="text-4xl font-extrabold text-[#ff7600]">Rs. 4499/-</p>
                                    <p className="text-xs text-gray-500 mt-2 font-medium">Validity: 1 to 5 Years</p>
                                </div>

                                <ul className="text-xs text-gray-500 space-y-2 font-medium">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> No Hidden Charge</li>
                                    <li className="flex items-center"><span className="text-red-400 mr-2">×</span> Excluding Govt. Fee</li>
                                    <li className="flex items-center"><span className="text-red-400 mr-2">×</span> Excluding GST</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. SAMPLE CERTIFICATE SECTION */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#243c7c] mb-8">
                        Food Business License Certificate Sample
                    </h2>

                    <div className="bg-white p-3 rounded-xl shadow-md border border-gray-200 inline-block">
                        <Image
                            src="/fssai.jpg"
                            alt="FSSAI Certificate Sample"
                            width={189}
                            height={267}
                            className="w-auto h-auto max-w-full rounded-lg"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}