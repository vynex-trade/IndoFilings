"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiGlobe,
    FiCalendar,
    FiShield,
    FiMonitor,
    FiFileText,
    FiUsers,
    FiCreditCard,
    FiCheckCircle,
    FiBriefcase
} from "react-icons/fi";
import { BsCurrencyRupee, BsCardText } from "react-icons/bs";

// --- Outline Accordion (Used for FAQs) ---
const Accordion = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="bg-white mb-2 rounded-sm overflow-hidden shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-bold text-[#0b1b3d] hover:bg-gray-50 transition-colors"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 text-[#ff6f00] flex-shrink-0" />
                ) : (
                    <FiPlus className="w-4 h-4 text-[#233a85] flex-shrink-0" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

// --- Solid Blue Accordion (Replaces the Green one from the image) ---
const SolidAccordion = ({
    title,
    children,
    defaultOpen = false,
}: {
    title: string;
    children?: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mb-4 border border-[#1d3275] shadow-sm rounded-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-[#233a85] text-white text-left font-semibold transition-colors hover:bg-[#1d3275]"
            >
                <span className="text-[15px]">{title}</span>
                {isOpen ? (
                    <FiMinus className="w-4 h-4 flex-shrink-0 text-white" />
                ) : (
                    <FiPlus className="w-4 h-4 flex-shrink-0 text-white" />
                )}
            </button>
            {isOpen && children && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-[14px] leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function GSTLutFilingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    File Your GST Letter of Undertaking (LUT) Online with India’s Very Own Tax Solution Platform
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Launch your Export Business in the Foreign Market with GST LUT Filing from our Specialised Taxation Team at Online Legal India | Get Approval Quickly
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Solid Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-white p-7 rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with GST LUT Filing?
                        </h3>
                        <p className="text-xs text-gray-500 mb-6">
                            Fill Up the below Mentioned Form
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">State <span className="text-red-500">*</span></label>
                                <select className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] text-gray-600 bg-white">
                                    <option value="">State</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="DL">Delhi</option>
                                    <option value="KA">Karnataka</option>
                                </select>
                            </div>

                            {/* Highlighted Package Selection Box (Replaces the Green box from the image) */}
                            <div className="bg-blue-50 border-2 border-[#233a85] rounded-md p-3 flex items-center justify-between mt-2 cursor-default">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 rounded-full border-4 border-[#233a85] bg-white mr-3 flex-shrink-0 shadow-sm"></div>
                                    <span className="font-bold text-[#0b1b3d] text-[15px]">GST LUT filing</span>
                                </div>
                                <span className="font-bold text-[#0b1b3d] text-[15px]">Rs 1999/-</span>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-start mt-3">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            {/* Captcha */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="bg-gray-200 text-xl tracking-[0.3em] font-serif italic font-bold px-6 py-2 border border-gray-300 rounded shadow-inner text-gray-700 select-none">
                                    8 1 8 3
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter the captcha here.."
                                    className="flex-grow border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#233a85]"
                                />
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3 rounded transition-colors shadow-md mt-4">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information & Solid Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-[14px] mb-6 leading-relaxed text-justify">
                            As per the provisions of the GST Act, 2017, a business entity or seller is mandated to issue Letter of Undertaking (LUT) prior to beginning any Export Business to the Foreign Market or to SEZs. By filling up the same in GST RFD-11 Form, a registered business can operate overseas without paying the Integrated-GST or IGST.
                        </p>

                        <SolidAccordion title="Who Should File GST LUT?" defaultOpen={true}>
                            <p className="mb-3 font-medium">A Business Entity or Seller Registered under GST Taxation is mandated to apply for GST LUT in the following instances:</p>
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li>Incorporating an Export Business in any Foreign Marketplace</li>
                                <li>Exporting goods, services to the SEZ units</li>
                                <li>Operating Export business without payment of Integrated GST</li>
                                <li>Our GST LUT Filing Charges are just One time on Yearly basis</li>
                            </ul>
                        </SolidAccordion>

                        <SolidAccordion title="Benefits of Filing GST LUT from Online Legal India" defaultOpen={true}>
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li>Our Expert GST Panel will File Your Letter of Undertaking.</li>
                                <li>In-house Experts' Aid for Import Export Code (IEC) Registration</li>
                                <li>Step by step Online guidance to get GST Certificate and completing LUT Filing Process</li>
                                <li>Customer Support available in 6 different languages including English</li>
                                <li>Free Consultations - Readily available!</li>
                                <li>Quickest Service at an Unbeatable Price</li>
                                <li>Call, E-mail, Chat Support</li>
                            </ul>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. ADVANTAGES OF FILING LUT (Grid) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Advantages of Filing GST Letter of Undertaking (LUT) to Govt. of India
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <FiGlobe className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Export Without Additional Tax",
                                desc: "GST Letter of Undertaking or Bond legally enables a business personnel or seller to operate an Export business without paying the imposed Tax."
                            },
                            {
                                icon: <FiCalendar className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Year Long Validity",
                                desc: "As per the Act, a GST LUT can be filed for an entire Financial Year. It simplifies the taxation process and makes the business operation trouble-free."
                            },
                            {
                                icon: <FiShield className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Relaxation from Customs Duty",
                                desc: "GST LUT filing not only exempts auxiliary taxation, it gives an Export Business Entity further composure in terms of Customs Duty."
                            },
                            {
                                icon: <BsCurrencyRupee className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Capital Friendly for a Business",
                                desc: "Once an Entity files GST LUT to the taxation department, it saves a huge amount of capital by getting refunds from other categories of GST Filings."
                            },
                            {
                                icon: <FiMonitor className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Easy and Convenient Online Process",
                                desc: "Since April 2018, the GST LUT filing has been modified into an entirely digital system. It brought transparency and made it highly convenient."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="font-bold text-[#0b1b3d] mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. REQUIRED DOCUMENTS */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Required Documents for GST Letter of Undertaking (LUT) Filing
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                icon: <FiFileText className="w-6 h-6 text-[#233a85]" />,
                                title: "GST Registration Certificate",
                                desc: "Valid GST Registration Certificate of the Business Entity."
                            },
                            {
                                icon: <FiBriefcase className="w-6 h-6 text-[#233a85]" />,
                                title: "Import Export Code",
                                desc: "Import Export Code (IEC) certificate is mandatory."
                            },
                            {
                                icon: <FiUsers className="w-6 h-6 text-[#233a85]" />,
                                title: "Nominees",
                                desc: "2 Nominees/Witnesses (Mandatorily 1 Employed Accountant)."
                            },
                            {
                                icon: <BsCardText className="w-6 h-6 text-[#233a85]" />,
                                title: "PAN & Aadhaar",
                                desc: "PAN & Aadhaar Card of the Business Owners/Directors."
                            },
                            {
                                icon: <FiCreditCard className="w-6 h-6 text-[#233a85]" />,
                                title: "Bank Credential",
                                desc: "Bank Credential proof (like a Canceled Cheque)."
                            },
                            {
                                icon: <BsCardText className="w-6 h-6 text-[#233a85]" />,
                                title: "Entity PAN Details",
                                desc: "PAN details of the Registered Business Entity."
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-[#f8f9fc] p-6 rounded-2xl border border-gray-100 flex flex-col items-start hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                                    {doc.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0b1b3d] mb-2">{doc.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">{doc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. HOW WE WORK (Stepper) */}
            <section className="bg-[#233a85] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white mb-4">
                            How We Work?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-10"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center relative z-10">
                        {[
                            "Fill up the Form to Complete the Payment",
                            "Our GST LUT Filing Experts will Call You",
                            "Upload the Details & Documents",
                            "Expert Prepares & Asks for Approval",
                            "Filing of Your GST LUT will be Done!"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[160px] lg:w-[180px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[14px] font-semibold text-blue-100">{step}</p>
                                </div>
                                {index !== arr.length - 1 && (
                                    <>
                                        <FiArrowRight className="hidden lg:block w-8 h-8 text-[#ff6f00] flex-shrink-0" />
                                        <FiChevronDown className="lg:hidden w-8 h-8 text-[#ff6f00]" />
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQs */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Frequently Asked Questions (FAQ)
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-1">
                        <Accordion title="Who can File a GST Letter of Undertaking LUT?" defaultOpen={true}>
                            Any business entity registered under the taxation system of the Indian Taxation System, can file a GST LUT for commencing an Export Business.
                        </Accordion>
                        <Accordion title="When the GST LUT is mandated to be filed?">
                            It is mandated to be filed prior to the export of goods or services. You must have an active LUT in place before initiating any export without the payment of IGST.
                        </Accordion>
                        <Accordion title="What are the required documents for filing GST LUT?">
                            You need the GST Registration Certificate, IEC Code, details of 2 witnesses (one must be an employed accountant), PAN and Aadhaar of business owners, and a canceled cheque.
                        </Accordion>
                        <Accordion title="What is the Validity of a GST LUT?">
                            A filed GST LUT is valid for the entire Financial Year in which it is submitted. It needs to be renewed for every subsequent financial year.
                        </Accordion>
                        <Accordion title="Is any witness/nominee required in LUT filing?">
                            Yes, details of 2 independent witnesses/nominees are required, and as per regulations, one of them is mandatorily required to be an employed accountant.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}