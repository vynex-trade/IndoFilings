import React from 'react';
import Link from 'next/link';
import {
    FaFileContract,
    FaHandshake,
    FaClipboardList,
    FaClock,
    FaCreditCard,
    FaExclamationTriangle,
    FaGavel,
    FaEnvelope,
    FaInfoCircle,
    FaArrowLeft,
    FaSuitcase
} from 'react-icons/fa';

export default function TermsAndConditions() {
    const lastUpdated = "October 24, 2023"; // Update this date as needed

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20">

            {/* HERO SECTION */}
            <div className="bg-[#082b72] py-16 lg:py-24 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff6b00] rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FaFileContract className="text-5xl text-[#ff6b00] mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before accessing or using our services.
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
                                Welcome to <strong>Indo Filings</strong>. These Terms and Conditions govern your use of our website and the professional legal, compliance, tax, and IT services provided by us. By accessing our platform or purchasing our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please refrain from using our services.
                            </p>
                        </section>

                        {/* Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaHandshake className="mr-3 text-[#ff6b00]" /> 1. Acceptance of Terms
                            </h2>
                            <p>
                                By engaging Indo Filings for any service (including but not nil to Company Registration, GST, Trademark, ISO, or IT services), you acknowledge that you have read, understood, and agree to these terms, as well as our Privacy Policy and Refund Policy.
                            </p>
                        </section>

                        {/* Description of Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaSuitcase className="mr-3 text-[#ff6b00]" /> 2. Description of Services
                            </h2>
                            <p>
                                Indo Filings provides business consultancy and facilitation services. We act as a professional intermediary to help you file applications with government portals (like MCA, Income Tax Department, Trademark Registry, etc.). <strong>We are not a government entity.</strong> The approval, rejection, or delay of any application is solely at the discretion of the respective government departments.
                            </p>
                        </section>

                        {/* User Obligations */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaClipboardList className="mr-3 text-[#10a850]" /> 3. User Obligations & Responsibilities
                            </h2>
                            <p className="mb-4">To ensure smooth processing of your applications, you agree to:</p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Provide Accurate Information:</strong> Submit completely true, accurate, and valid documents (PAN, Aadhaar, Bank Statements, etc.).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Timely Responses:</strong> Share required OTPs (One Time Passwords), email verifications, and physical signatures promptly when requested by our team.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Liability for False Data:</strong> Indo Filings holds no responsibility for application rejections or legal penalties resulting from fraudulent or incorrect documents provided by you.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Timelines and Government Delays */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaClock className="mr-3 text-[#ff6b00]" /> 4. Timelines and Government Delays
                            </h2>
                            <p>
                                Any delivery timelines mentioned on our website or communicated by our representatives are <strong>estimates</strong> based on typical processing times. Actual timelines may vary depending on government portal functioning, public holidays, inter-departmental delays, or pending clarifications requested by authorities. Indo Filings cannot be held liable for losses incurred due to such delays.
                            </p>
                        </section>

                        {/* Payment & Fees */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaCreditCard className="mr-3 text-[#082b72]" /> 5. Payments, Fees & Refunds
                            </h2>
                            <p className="mb-3">
                                All fees displayed are subject to change without prior notice. Our service fees include professional charges and applicable government fees unless stated otherwise.
                            </p>
                            <p>
                                Cancellations and refunds are strictly governed by our <Link href="/refund-policy" className="text-[#ff6b00] hover:underline font-medium">Refund Policy</Link>. Generally, once work has commenced or government fees have been paid on your behalf, no refunds will be issued.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaExclamationTriangle className="mr-3 text-red-500" /> 6. Limitation of Liability
                            </h2>
                            <p>
                                In no event shall Indo Filings, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages (including business loss, loss of profit, or loss of data) arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages. Our maximum liability to you under any circumstance will not exceed the professional fee paid by you for the specific service in dispute.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaGavel className="mr-3 text-[#082b72]" /> 7. Governing Law & Jurisdiction
                            </h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms or our services shall be subject to the exclusive jurisdiction of the courts located in [Your City/State, e.g., New Delhi, India].
                            </p>
                        </section>

                        {/* Modifications */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaInfoCircle className="mr-3 text-[#ff6b00]" /> 8. Modifications to Terms
                            </h2>
                            <p>
                                We reserve the right to update or modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on our website. Your continued use of our services after any changes signifies your acceptance of the updated terms.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaEnvelope className="mr-3 text-[#082b72]" /> 9. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or legal notices regarding these Terms and Conditions, please contact us:
                            </p>
                            <div className="space-y-2 font-medium text-[#082b72]">
                                <p>Email: <a href="mailto:legal@indofilings.com" className="text-[#ff6b00] hover:underline">legal@indofilings.com</a></p>
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
                    <p className="text-gray-600 mb-4">Need help understanding our terms?</p>
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