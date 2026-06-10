"use client";

import React, { useState } from "react";
import {
    FiArrowRight,
    FiChevronDown,
    FiPlus,
    FiMinus,
    FiFileText,
    FiMonitor,
    FiMapPin,
    FiTruck,
    FiCheckSquare,
    FiBox,
    FiCalendar,
    FiCheckCircle
} from "react-icons/fi";

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

export default function GSTEWayBillPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. HEADER SECTION */}
            <section className="pt-16 pb-10 px-4 text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1b3d] mb-4 leading-tight">
                    Register Your GST E-WayBills Online from India’s Very Own Business Solution Portal
                </h1>
                <p className="text-gray-600 font-medium text-lg">
                    Trusted by over 1,20,000+ Corporate Entities | 360° GST Online E-Way Bill Generation Assistance from anywhere in our Nation
                </p>
            </section>

            {/* 2. MAIN CONTENT (Form on Left, Info & Solid Accordions on Right) */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Lead Form */}
                    <div className="md:col-span-5 bg-[#fcfcfc] p-7 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-gray-200">
                        <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">
                            Need Help with GST E-Way Bill?
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
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number (Without 0 or +91)"
                                    className="w-full border border-gray-300 rounded p-2.5 text-sm focus:outline-none focus:border-[#233a85] bg-white"
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

                            {/* Checkbox */}
                            <div className="flex items-start mt-4 pt-2">
                                <input type="checkbox" className="mt-1 mr-2 cursor-pointer accent-[#233a85]" defaultChecked />
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer and refund policy, and also ready to accept calls, SMS, emails, etc.
                                </p>
                            </div>

                            <button className="w-full bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-lg py-3.5 rounded transition-colors shadow-md mt-4">
                                Request for Callback
                            </button>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: Information & Solid Accordions */}
                    <div className="md:col-span-7 pt-2">
                        <p className="text-gray-700 text-[14px] mb-6 leading-relaxed text-justify">
                            As per the Central GST Act, 2017, the E-Way bill is an electronically generated invoice that tracks the transportation of goods worth more than Rs. 50,000 and it is mandatory for every GST registered business entity of the country. GST experts in Online Legal India provide every possible assistance to all the business personnel, transporter operating shipping possessions by road or railways/air/sea throughout India.
                        </p>

                        <SolidAccordion title="Who should Register GST E-Way Bill?" defaultOpen={true}>
                            <p className="mb-3 font-medium text-gray-800">Following are the regulations stated in the CGST Act, 2017, registering for GST E-WayBill is obligatory for:</p>
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li>Every GST registered business personnel or entity willing to transport goods valued more than Rs. 50,000.</li>
                                <li>Business personnel fetching goods valued more than Rs. 50,000.</li>
                                <li>A transporter who is assigned by the dispatcher or receiver of the particular goods worth more than Rs. 50,000.</li>
                                <li>It is the responsibility of the transporter to get the GST E-Way Billing process done for himself as the dispatcher or receiver may have not generated it before the movement of goods.</li>
                            </ul>
                        </SolidAccordion>

                        <SolidAccordion title="Penalty for Transporting Goods without a Valid GST E-Way Bill">
                            <p className="mb-3 font-medium text-gray-800">
                                Following the legal procedure of the Act, a business may face a number of legal actions for not having a registered E-Way Bill while carrying goods on logistical vehicles within the country.
                            </p>
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                <li>Transporting goods without proper documentation/GST Invoice/GST E-Billing could lead to a penalty of Rs. 10,000.</li>
                                <li>As per the CGST Act, authority can detain or seize the goods for failing any of the above-mentioned documents or requirements.</li>
                            </ul>
                        </SolidAccordion>

                        <SolidAccordion title="Benefits of Generating Online GST E-Way Bill from Online Legal India">
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    "Country’s most Efficient Panel of GST Experts will be Registering and Managing your GST E-Way Billing Process",
                                    "In-house Taxation Expert Panel always at your disposal for in-depth Tax Filings",
                                    "Step-by-step Online guidance to get GST Certificate and Carrying Out Filing Process",
                                    "Customer Support available in 6 different languages including English",
                                    "Free Consultations Available at Just a Click!",
                                    "Quickest Service at an Unbeatable Price",
                                    "Call, E-mail, Chat Support"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FiCheckCircle className="text-[#ff6f00] mr-2 mt-1 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </SolidAccordion>
                    </div>

                </div>
            </section>

            {/* 3. ADVANTAGES OF E-WAY BILL (Grid) */}
            <section className="bg-[#f8f9fc] py-16 px-4 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-[#0b1b3d] mb-4">
                            Why must you Register GST E-Way Online Bill before Transporting Goods?
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">Having registered for GST E-Billing, leads to various advantages and benefits such as:</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            {
                                icon: <FiCheckSquare className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Tax Process",
                                desc: "It eliminates the complication of the tax process."
                            },
                            {
                                icon: <FiMonitor className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Digital Procedure",
                                desc: "Being a digital procedure, it is faster and easier."
                            },
                            {
                                icon: <FiFileText className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Document",
                                desc: "By registering here the business personnel acquire an identical document for nation-wide usage."
                            },
                            {
                                icon: <FiMapPin className="w-10 h-10 text-[#ff6f00]" />,
                                title: "GST E-Billing Tracking",
                                desc: "GST E-Billing tracks the movement of every shipment enhancing the security of the goods."
                            },
                            {
                                icon: <FiTruck className="w-10 h-10 text-[#ff6f00]" />,
                                title: "Transportation",
                                desc: "It ensures a preset timing for shipment ensuring a faster transportation."
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
                            Required Documents for GST E-Way Bill Generation
                        </h2>
                        <div className="w-12 h-1 bg-[#ff6f00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                        {[
                            {
                                icon: <FiFileText className="w-6 h-6 text-[#233a85]" />,
                                title: "GST Invoice",
                                desc: "GST invoice/receipt/challan for the transported goods."
                            },
                            {
                                icon: <FiBox className="w-6 h-6 text-[#233a85]" />,
                                title: "Transported Goods",
                                desc: "Description and proper details of the transported goods."
                            },
                            {
                                icon: <FiCalendar className="w-6 h-6 text-[#233a85]" />,
                                title: "Date of Invoice",
                                desc: "Accurate date of the generated invoice."
                            },
                            {
                                icon: <FiTruck className="w-6 h-6 text-[#233a85]" />,
                                title: "Transport Documents",
                                desc: "Roadways: Vehicle info & Transporter ID. Railways/Air/Sea: Transporter ID & Travel documents."
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
                            "Receive the Call from our GST Experts",
                            "Upload the Details & Documents",
                            "Expert Prepares & Asks for Approval",
                            "GST E-Way Bill Successfully Generated"
                        ].map((step, index, arr) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center w-[160px] lg:w-[180px]">
                                    <div className="w-14 h-14 bg-white text-[#233a85] rounded-full flex items-center justify-center font-extrabold text-xl mb-4 shadow-lg border-4 border-[#ff6f00]">
                                        {index + 1}
                                    </div>
                                    <p className="text-[14px] font-semibold text-blue-50">{step}</p>
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
                        <Accordion title="What is a GST E-Way bill?" defaultOpen={true}>
                            As mandated by the Govt. of India in the GST Act, 2017, E-Way Bill is a document required to be carried by a person in charge of the conveyance carrying any consignment of goods of value exceeding Rs.50,000. It is generated from the GST Common Portal by the registered persons or transporters who cause movement of goods of consignment before the commencement of such movement.
                        </Accordion>
                        <Accordion title="Who all can generate the e-way bill?">
                            Every registered person who causes movement of goods of consignment value exceeding fifty thousand rupees. Also, unregistered persons or transporters can choose to generate an e-way bill voluntarily.
                        </Accordion>
                        <Accordion title="Who can update the vehicle number for the E-Way Bill?">
                            The taxpayer who generated the e-way bill or the transporter assigned to that specific e-way bill can update the vehicle number on the GST portal.
                        </Accordion>
                        <Accordion title="Is there any validity period for E-Way Bill?">
                            Yes, validity depends on the distance the goods have to be transported. For regular vehicles, it is 1 day for every 200 km. For Over Dimensional Cargo, it is 1 day for every 20 km.
                        </Accordion>
                        <Accordion title="What are the documents that need to be carried along with the goods being transported?">
                            The person in charge must carry the invoice or bill of supply or delivery challan, and a copy of the e-way bill or the e-way bill number mapped to a Radio Frequency Identification Device (RFID) embedded onto the vehicle.
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>
    );
}