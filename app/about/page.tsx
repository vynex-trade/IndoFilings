"use client";

import React from "react";
import {
    FaRegLightbulb,
    FaBullseye,
    FaHandshake,
    FaUsers,
    FaAward,
    FaGlobe,
    FaQuoteLeft,
    FaCheckCircle
} from "react-icons/fa";

export default function AboutUs() {
    const stats = [
        { title: "Happy Customers", count: "5 Lakh+", icon: <FaUsers /> },
        { title: "Professional Experts", count: "500+", icon: <FaAward /> },
        { title: "Services Delivered", count: "1 Million+", icon: <FaGlobe /> },
        { title: "Google Rating", count: "4.5 / 5", icon: <FaRegLightbulb /> },
    ];

    const values = [
        { title: "Transparency", desc: "We maintain 100% transparency in our pricing and processes. No hidden fees, no surprises." },
        { title: "Speed & Efficiency", desc: "Time is money. We leverage technology to deliver registrations and compliances at lightning speed." },
        { title: "Data Security", desc: "Your business data is sacred. We use bank-grade security to ensure your documents are strictly confidential." },
        { title: "Expert Support", desc: "Our team of seasoned CAs, CSs, and Legal experts are always available to guide you at every step." },
    ];

    return (
        <div className="font-sans text-slate-800 bg-white min-h-screen">

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-r from-[#0B1F4D] to-[#1A3673] py-24 px-5 overflow-hidden">
                {/* Decorative background circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f26522]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-[#f26522] font-bold tracking-widest uppercase text-sm mb-4 block">
                        Welcome to  Indo Filings
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Empowering Entrepreneurs, <br className="hidden md:block" />
                        Simplifying Legalities.
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        India's most trusted online platform for Business Registration, Tax Compliance, and Legal Tech services. We turn your startup dreams into reality.
                    </p>
                </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="py-20 px-5 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#f26522] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Our Team"
                            className="relative z-10 rounded-3xl shadow-xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                                <FaCheckCircle />
                            </div>
                            <div>
                                <p className="font-bold text-[#0B1F4D]">ISO 9001:2015</p>
                                <p className="text-sm text-slate-500">Certified Company</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-20 h-1 bg-[#f26522] mb-6 rounded-full"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mb-6">Our Story</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            <strong className="text-[#0B1F4D]">Indo Filings</strong> is a prominent brand under FastInfo Legal Services Pvt. Ltd. What started as a vision to make business compliances hassle-free has now transformed into a multi-crore legal tech revolution.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            We recognized that traditional legal processes were time-consuming, expensive, and complex for everyday entrepreneurs. By bringing a panel of top-tier CAs, CSs, and Lawyers under one digital roof, we eliminated the bureaucracy. Today, we proudly serve over 5 Lakh businesses across every corner of India, providing everything from Company Incorporation to Trademark Registration and Online Dispute Resolution.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-[#f26522] pl-4">
                                <h4 className="font-bold text-[#0B1F4D] text-2xl">2019</h4>
                                <p className="text-sm text-slate-500">Year Established</p>
                            </div>
                            <div className="border-l-4 border-[#0B1F4D] pl-4">
                                <h4 className="font-bold text-[#0B1F4D] text-2xl">99%</h4>
                                <p className="text-sm text-slate-500">Client Retention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="bg-slate-50 py-16 px-5 border-y border-slate-200">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-6">
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl text-[#f26522] shadow-sm mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-black text-[#0B1F4D] mb-2">{stat.count}</h3>
                            <p className="text-slate-600 font-medium">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 px-5 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10">

                    {/* Mission */}
                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                            <FaBullseye />
                        </div>
                        <h3 className="text-3xl font-bold text-[#0B1F4D] mb-4">Our Mission</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To democratize legal, tax, and compliance services for individuals and businesses across India. We strive to provide premium, error-free corporate solutions at highly affordable prices, ensuring that no startup idea dies due to complex legal barriers.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gradient-to-br from-[#0B1F4D] to-[#1A3673] p-10 rounded-3xl shadow-lg text-white hover:shadow-xl transition-shadow group">
                        <div className="w-16 h-16 bg-white/10 text-[#f26522] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                            <FaRegLightbulb />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            To become the digital backbone of the Indian entrepreneurial ecosystem. We envision a future where business registration and regulatory compliance are just a click away, empowering millions to build a self-reliant "Aatmanirbhar Bharat."
                        </p>
                    </div>

                </div>
            </section>

          

            {/* CORE VALUES */}
            <section className="py-20 px-5 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mb-4">Why Businesses Trust Us</h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-16">
                    We don't just process paperwork; we partner in your growth. Here are the core values that drive our daily operations.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {values.map((val, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-[#f26522]/10 text-[#f26522] flex items-center justify-center text-xl mb-4">
                                <FaHandshake />
                            </div>
                            <h4 className="text-lg font-bold text-[#0B1F4D] mb-2">{val.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-[#f26522] py-16 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Start Your Business Journey?
                    </h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Join 5 Lakh+ happy customers who have successfully registered their businesses with India's leading legal tech platform.
                    </p>
                    <button className="bg-white text-[#f26522] font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-colors">
                        Get Free Consultation
                    </button>
                </div>
            </section>

        </div>
    );
}