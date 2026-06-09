"use client";

import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaBuilding,
} from "react-icons/fa";
import {
    MdPhoneCallback,
    MdHeadsetMic,
    MdStarOutline,
    MdChat,
} from "react-icons/md";

export default function ContactUs() {
    const actions = [
        { title: "Call Back Request", icon: <MdPhoneCallback /> },
        { title: "Complaint", icon: <MdHeadsetMic /> },
        { title: "Feedback", icon: <MdStarOutline /> },
        { title: "Suggestion", icon: <MdChat /> },
    ];

    return (
        <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
            {/* HEADER / HERO */}
            <section className="bg-gradient-to-r from-[#0B1F4D] to-[#1A3673] py-20 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-blue-100">
                        We are here to help. Reach out to us for any queries, support, or
                        feedback.
                    </p>
                    <div className="w-24 h-1 bg-[#f26522] mx-auto mt-6 rounded-full"></div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-7xl mx-auto py-16 px-5 grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* LEFT COLUMN */}
                <div className="space-y-8">
                    {/* Registered Office */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-xl">
                                <FaBuilding />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0B1F4D]">
                                Registered Office
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-slate-400 mt-1 shrink-0 text-lg" />
                                <p className="text-slate-600 leading-relaxed">
                                    123 Business Avenue, Corporate Tower, Sector 10, New Delhi,
                                    Delhi 110001, India
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-slate-400 shrink-0 text-lg" />
                                <a
                                    href="tel:+911234567890"
                                    className="text-[#0B1F4D] font-semibold hover:text-[#f26522] transition-colors"
                                >
                                    +91 12345 67890
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-slate-400 shrink-0 text-lg" />
                                <a
                                    href="mailto:info@example.com"
                                    className="text-[#0B1F4D] font-semibold hover:text-[#f26522] transition-colors"
                                >
                                    info@example.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Center */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-xl bg-[#0B1F4D]/5 text-[#f26522] flex items-center justify-center text-xl">
                                <MdHeadsetMic />
                            </div>
                            <h2 className="text-2xl font-bold text-[#0B1F4D]">
                                Contact Center
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-slate-400 mt-1 shrink-0 text-lg" />
                                <p className="text-slate-600 leading-relaxed">
                                    456 Tech Park, Innovation Hub, Sector 62, Noida, Uttar
                                    Pradesh 201301, India
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-slate-400 shrink-0 text-lg" />
                                <a
                                    href="tel:+911234567891"
                                    className="text-[#0B1F4D] font-semibold hover:text-[#f26522] transition-colors"
                                >
                                    +91 12345 67891
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-slate-400 shrink-0 text-lg" />
                                <a
                                    href="mailto:support@example.com"
                                    className="text-[#0B1F4D] font-semibold hover:text-[#f26522] transition-colors"
                                >
                                    support@example.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Corporate Tie-ups */}
                    <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                        <h3 className="text-lg font-bold text-[#0B1F4D] mb-4">
                            For Corporate Tie-ups, Media & Government
                        </h3>

                        <div className="flex items-center gap-4 mb-4">
                            <FaEnvelope className="text-[#f26522] shrink-0 text-lg" />
                            <a
                                href="mailto:partnerships@example.com"
                                className="text-[#0B1F4D] font-semibold hover:text-[#f26522] transition-colors"
                            >
                                partnerships@example.com
                            </a>
                        </div>

                        <p className="text-sm text-slate-500 italic leading-relaxed border-l-2 border-[#f26522] pl-3">
                            For partnership, media, and government-related inquiries only.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col justify-center">
                    <div className="mb-10">
                        <span className="text-[#f26522] font-bold uppercase tracking-wider text-sm">
                            How can we help you?
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F4D] mt-2 mb-4 leading-tight">
                            Thank you for your interest in
                            <br className="hidden lg:block" />
                            Our Company
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            We'll make sure your request is directed to the right team quickly
                            and efficiently. Please select an option below to proceed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {actions.map((action, idx) => (
                            <button
                                key={idx}
                                className="group flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#f26522] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-3xl text-slate-400 group-hover:bg-[#f26522]/10 group-hover:text-[#f26522] transition-colors mb-4">
                                    {action.icon}
                                </div>

                                <span className="font-bold text-[#0B1F4D] group-hover:text-[#f26522] transition-colors">
                                    {action.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}