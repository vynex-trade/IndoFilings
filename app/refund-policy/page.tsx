import React from 'react';
import Link from 'next/link';
import {
    FaUndoAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaClock,
    FaEnvelope,
    FaInfoCircle,
    FaArrowLeft
} from 'react-icons/fa';

export default function RefundPolicy() {
    const lastUpdated = "October 24, 2023"; // Update this date as needed

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20">

            {/* HERO SECTION */}
            <div className="bg-[#082b72] py-16 lg:py-24 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff6b00] rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-blue-200 text-lg">
                        Transparent and fair policies for all our professional services.
                    </p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

                    <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
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
                                At <strong>Indo Filings</strong>, we take pride in the services delivered by us and guarantee your satisfaction with our professional services. However, due to the nature of our digital and legal services, we have specific guidelines regarding refunds and cancellations. Please read this policy carefully before purchasing any of our services.
                            </p>
                        </section>

                        {/* General Policy */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaUndoAlt className="mr-3 text-[#ff6b00]" /> 1. General Refund Policy
                            </h2>
                            <p className="mb-3">
                                When a payment of fee is made to Indo Filings, the fees paid in advance is retained by Indo Filings in a client account. Indo Filings will earn the fees upon working on a client's matter.
                            </p>
                            <p>
                                Refunds are strictly processed based on the stage of the service being provided. We reserve the right to approve or deny refund requests based on the conditions mentioned below.
                            </p>
                        </section>

                        {/* Eligible for Refund */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaCheckCircle className="mr-3 text-[#10a850]" /> 2. Conditions for Refund
                            </h2>
                            <p className="mb-4">You may be eligible for a refund under the following circumstances:</p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Service Not Started:</strong> If you cancel your request before we have commenced any work on your file, you are eligible for a 100% refund (minus payment gateway charges).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Delay in Service:</strong> If there is an unreasonable delay in providing the service entirely due to our fault and beyond the promised turnaround time.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-[#10a850] rounded-full shrink-0"></span>
                                    <span><strong>Duplicate Payment:</strong> In case a double payment is mistakenly processed for the same service.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Non-Refundable */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaTimesCircle className="mr-3 text-red-500" /> 3. Non-Refundable Situations
                            </h2>
                            <p className="mb-4">Refunds will <strong>not</strong> be provided in the following scenarios:</p>
                            <ul className="space-y-3 pl-2">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                                    <span><strong>Government Fees & Taxes:</strong> Any government fees, ROC fees, stamp duty, or taxes paid on your behalf are strictly non-refundable.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                                    <span><strong>Work Completed:</strong> Once the service (or a significant milestone of the service) has been completed and delivered.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                                    <span><strong>Change of Mind:</strong> If you change your mind after the work has already commenced.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-red-500 rounded-full shrink-0"></span>
                                    <span><strong>Lack of Documents:</strong> If the service cannot be completed due to your failure to provide necessary documents, OTPs, or required information on time.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Processing Time */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaClock className="mr-3 text-[#ff6b00]" /> 4. Refund Processing Time
                            </h2>
                            <p>
                                Once your refund request is approved, it will be processed within <strong>7 to 10 business days</strong>. The amount will be credited back to the original method of payment (Credit Card, Debit Card, Net Banking, or UPI) used during the initial transaction.
                            </p>
                        </section>

                        {/* How to Request */}
                        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-[#082b72] mb-4 flex items-center">
                                <FaEnvelope className="mr-3 text-[#082b72]" /> 5. How to Request a Refund
                            </h2>
                            <p className="mb-4">
                                To initiate a refund request, please contact our support team with your Order ID, registered email address, and a detailed reason for the refund.
                            </p>
                            <div className="space-y-2 font-medium text-[#082b72]">
                                <p>Email: <a href="mailto:support@indofilings.com" className="text-[#ff6b00] hover:underline">support@indofilings.com</a></p>
                                <p>Phone: <a href="tel:+911234567890" className="text-[#ff6b00] hover:underline">+91 12345 67890</a></p>
                            </div>
                        </section>

                        {/* Disclaimer */}
                        <section className="pt-6 border-t border-gray-100 text-sm text-gray-500">
                            <p>
                                <strong>Disclaimer:</strong> Indo Filings reserves the right to modify or amend this Refund Policy at any time without prior notice. Any changes will be updated on this page and will be effective immediately upon posting.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center pb-12">
                    <p className="text-gray-600 mb-4">Have questions about our policy?</p>
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