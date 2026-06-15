import React from 'react';
import Link from 'next/link';
import {
    FaHome,
    FaPhoneAlt,
    FaSearch,
    FaArrowRight,
    FaFileAlt,
    FaTrademark,
    FaPercent
} from 'react-icons/fa';

export default function Custom404() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center relative overflow-hidden py-12 px-4 sm:px-6">

            {/* Background Decorative Elements (Consistent with your brand) */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-3xl w-full relative z-10 text-center">

                {/* Main 404 Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-gray-100 mb-8">

                    {/* Floating Icon */}
                    <div className="w-20 h-20 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-8 rotate-12 shadow-sm border border-orange-100">
                        <FaSearch className="text-4xl text-[#ff6b00] -rotate-12" />
                    </div>

                    {/* 404 Text */}
                    <h1 className="text-7xl md:text-9xl font-extrabold text-[#082b72] tracking-tight mb-4 drop-shadow-sm">
                        4<span className="text-[#ff6b00]">0</span>4
                    </h1>

                    {/* Messages */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#ff6b00] text-white font-semibold rounded-xl hover:bg-[#e55d00] transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                        >
                            <FaHome className="mr-2 text-lg" /> Back to Home
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-blue-50 text-[#082b72] font-semibold rounded-xl hover:bg-blue-100 transition-all duration-300 border border-blue-100"
                        >
                            <FaPhoneAlt className="mr-2" /> Contact Support
                        </Link>
                    </div>
                </div>

                {/* Helpful Links Section */}
                <div className="text-center">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                        While you're here, check out our popular services
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">

                        <Link href="/company-registration" className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#082b72] hover:shadow-md transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#082b72] flex items-center justify-center mb-3 group-hover:bg-[#082b72] group-hover:text-white transition-colors">
                                <FaFileAlt />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">Company Registration</span>
                        </Link>

                        <Link href="/gst-registration" className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#10a850] hover:shadow-md transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-green-50 text-[#10a850] flex items-center justify-center mb-3 group-hover:bg-[#10a850] group-hover:text-white transition-colors">
                                <FaPercent />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">GST Registration</span>
                        </Link>

                        <Link href="/Trademark" className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#ff6b00] hover:shadow-md transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-orange-50 text-[#ff6b00] flex items-center justify-center mb-3 group-hover:bg-[#ff6b00] group-hover:text-white transition-colors">
                                <FaTrademark />
                            </div>
                            <span className="text-sm font-semibold text-gray-800">Trademark Filing</span>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}