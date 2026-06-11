"use client";
import React from 'react';


export default function SeriesTrademarkHero() {
    return (
        <section className="bg-[#243c7c] min-h-[600px] flex items-center py-16 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Copy & Pricing */}
                <div className="text-white space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        Grab the Opportunity of Using <br className="hidden lg:block" />
                        <span className="text-white">Multiple Logos</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 font-medium">
                        at a single Trademark application.
                    </p>

                    {/* Pricing Info Box (Styled similar to your MSME box) */}
                    <div className="bg-[#1c3065] border-l-4 border-[#ff7600] p-6 rounded-lg shadow-inner inline-block mt-8">
                        <p className="text-2xl md:text-3xl font-bold">
                            Starting from – <span className="text-[#ff7600]">Rs. 3999/-</span> <span className="text-lg font-normal">only</span>
                        </p>
                        <p className="text-sm text-gray-300 mt-2 italic">
                            * Excluding Govt. Fee.
                        </p>
                    </div>
                </div>

                {/* Right Side: Lead Generation Form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-gray-800">

                        {/* Form Header */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                Need Help With Series Trademark Application?
                            </h2>
                            <p className="text-sm text-gray-500">
                                Fill up the below mentioned form.
                            </p>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                            {/* Name */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                                    Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none transition-all text-sm"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                                    Your Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none transition-all text-sm"
                                    required
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                                    Your Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Without 0 or +91"
                                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none transition-all text-sm"
                                    required
                                />
                            </div>

                            {/* State Dropdown */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">
                                    State <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff7600] focus:border-transparent outline-none transition-all text-sm text-gray-600 appearance-none"
                                    required
                                >
                                    <option value="" disabled selected>Select State</option>
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#ff7600] hover:bg-[#e06800] text-white font-bold py-3.5 rounded-md transition duration-300 mt-2 shadow-lg hover:shadow-xl text-base"
                            >
                                Apply Now
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}