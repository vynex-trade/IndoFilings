import React from 'react';
import Link from 'next/link';
import {
    FaShieldAlt,
    FaUserLock,
    FaCog,
    FaShareAlt,
    FaLock,
    FaCookieBite,
    FaEnvelope,
    FaInfoCircle,
    FaArrowLeft,
    FaUserCheck
} from 'react-icons/fa';

export default function PrivacyPolicy() {
    const lastUpdated = "October 24, 2023"; // Update this date as needed

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20">

            {/* HERO SECTION */}
            <div className="bg-[#082b72] py-16 lg:py-24 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff6b00] rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FaShieldAlt className="text-5xl text-[#ff6b00] mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Your privacy is critically important to us. Learn how we collect, use, and protect your personal and business information.
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

                    {/* Header Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-6 mb-8 gap-4">
                        <span className="text-sm font-medium text-gray-500 flex items-center">
                            <FaInfoCircle className="mr-2 text-[#ff6b00]" />
                            Last Updated: {lastUpdated}
                        </span>
                        <Link
                            href="/"
                            className="text-sm font-semibold text-[#082b72] hover:text-[#ff6b00] transition-colors flex items-center"
                        >
                            <FaArrowLeft className="mr-2" /> Back to Home
                        </Link>
                    </div>

                    <div className="space-y-10 text-gray-600 leading-relaxed">

                        {/* Introduction */}
                        <section>
                            <p>
                                At <strong>Indo Filings</strong>, we are committed to protecting the privacy and security of our clients. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our professional legal, tax, and compliance services. Please read this policy carefully.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaUserLock className="mr-3 text-[#ff6b00]" /> 1. Information We Collect
                            </h2>
                            <p className="mb-4">To provide you with our services, we may collect the following types of information:</p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Personal Identification Information:</strong> Name, email address, phone number, and residential address.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Business & Legal Documents:</strong> PAN card, Aadhaar card, company registration details, bank statements, and other documents strictly required for ROC filings, GST, Trademarks, etc.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Technical Data:</strong> IP address, browser type, operating system, and browsing behavior on our website to improve user experience.</span>
                                </li>
                            </ul>
                        </section>

                        {/* How We Use Information */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaCog className="mr-3 text-[#ff6b00]" /> 2. How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the information we collect for the following purposes:</p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#082b72] rounded-full shrink-0"></span>
                                    <span>To process and fulfill your requests for company registration, tax filings, and other legal services.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#082b72] rounded-full shrink-0"></span>
                                    <span>To communicate with you regarding your application status, OTPs, and compliance deadlines.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#082b72] rounded-full shrink-0"></span>
                                    <span>To send administrative information, such as updates to our terms, conditions, and policies.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#082b72] rounded-full shrink-0"></span>
                                    <span>To improve our website functionality, customer service, and overall user experience.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Sharing of Information */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaShareAlt className="mr-3 text-[#ff6b00]" /> 3. Sharing Your Information
                            </h2>
                            <p className="mb-3">
                                We respect your privacy and <strong>do not sell, trade, or rent</strong> your personal information to third parties. We may share your information only in the following situations:
                            </p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#ff6b00] rounded-full shrink-0"></span>
                                    <span><strong>Government Authorities:</strong> We submit necessary data to government portals (MCA, Income Tax Dept, GST Portal) strictly to execute the services you have paid for.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#ff6b00] rounded-full shrink-0"></span>
                                    <span><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website and conducting our business, bound by strict confidentiality agreements.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#ff6b00] rounded-full shrink-0"></span>
                                    <span><strong>Legal Obligations:</strong> If required by law, court order, or government regulation.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaLock className="mr-3 text-[#10a850]" /> 4. Data Security
                            </h2>
                            <p>
                                We implement robust administrative, technical, and physical security measures to protect your personal and corporate data. While we strive to use commercially acceptable means to protect your information, please remember that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </section>

                        {/* Cookies Policy */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaCookieBite className="mr-3 text-[#ff6b00]" /> 5. Cookies Policy
                            </h2>
                            <p>
                                Our website uses "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
                            </p>
                        </section>

                        {/* User Rights */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaUserCheck className="mr-3 text-[#082b72]" /> 6. Your Rights
                            </h2>
                            <p>
                                You have the right to request access to the personal information we hold about you, request corrections to any inaccurate data, or request the deletion of your data (subject to legal data retention requirements for financial and compliance records).
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaEnvelope className="mr-3 text-[#082b72]" /> 7. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please reach out to our grievance officer:
                            </p>
                            <div className="space-y-2 font-medium text-[#082b72]">
                                <p>Email: <a href="mailto:privacy@indofilings.com" className="text-[#ff6b00] hover:underline">privacy@indofilings.com</a></p>
                                <p>Phone: <a href="tel:+911234567890" className="text-[#ff6b00] hover:underline">+91 12345 67890</a></p>
                                <p className="text-sm font-normal text-gray-600 mt-2">
                                    Address: [Your Company Full Address Here, City, State, ZIP]
                                </p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center pb-12">
                    <p className="text-gray-600 mb-4">Need further clarification regarding our policies?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-[#ff6b00] text-white font-semibold rounded-lg hover:bg-[#e55d00] transition-colors shadow-md"
                    >
                        Contact Support Team
                    </Link>
                </div>

            </div>
        </div>
    );
}