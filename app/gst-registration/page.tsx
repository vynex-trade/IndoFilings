import React from "react";
import Form from "../components/form";

export default function GstRegistration() {
    return (
        <div className="w-full">
            {/* ======================= HERO SECTION (Original) ======================= */}
            <section className="bg-gradient-to-br from-[#f8fafc] via-[#eef4ff] to-[#e6f0ff] py-16 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4">

                    {/* Hero Header */}
                    <div className="text-center mb-14">

                        <span className="inline-block bg-[#f26522]/10 text-[#f26522] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-5">
                            GST Registration Services
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-[#0B1F4D] leading-tight max-w-6xl mx-auto">
                            GST Registration with Expert Assistance
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-8">
                            Get complete support for GST Registration, GSTIN issuance,
                            compliance assistance, and annual GST return filing from
                            experienced taxation professionals.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <div className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                ✓ One Day Processing
                            </div>

                            <div className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                ✓ GST Expert Support
                            </div>

                            <div className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                ✓ PAN India Service
                            </div>

                            <div className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                ✓ Quick GSTIN Approval
                            </div>
                        </div>

                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-[500px_1fr] gap-10 items-start">

                        {/* Form */}
                        <Form />

                        {/* Right Side */}
                        <div className="space-y-6">

                            {/* Main Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl">
                                        📋
                                    </div>

                                    <div>
                                        <h2 className="text-3xl font-bold text-[#0B1F4D]">
                                            GST Registration Services
                                        </h2>

                                        <p className="text-slate-500 text-sm mt-1">
                                            Professional registration assistance for businesses across India
                                        </p>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-8 mb-8">
                                    Register your business under GST with complete professional
                                    assistance. Our experts handle documentation, application filing,
                                    ARN generation, GSTIN tracking, and approval follow-ups to ensure
                                    a smooth and hassle-free registration process.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">

                                    <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                                        <span className="text-[#f26522] text-xl">✓</span>
                                        <span className="text-slate-700">
                                            GST Application Filing
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                                        <span className="text-[#f26522] text-xl">✓</span>
                                        <span className="text-slate-700">
                                            ARN & TRN Generation
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                                        <span className="text-[#f26522] text-xl">✓</span>
                                        <span className="text-slate-700">
                                            GSTIN Approval Tracking
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                                        <span className="text-[#f26522] text-xl">✓</span>
                                        <span className="text-slate-700">
                                            Dedicated GST Expert
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid md:grid-cols-3 gap-4">

                                <div className="bg-[#0B1F4D] rounded-2xl p-6 text-center text-white">
                                    <h3 className="text-3xl font-bold text-[#f26522]">
                                        1 Day
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-300">
                                        Registration Process
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-md">
                                    <h3 className="text-3xl font-bold text-[#0B1F4D]">
                                        100%
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Online Assistance
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-md">
                                    <h3 className="text-3xl font-bold text-[#0B1F4D]">
                                        PAN India
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Service Coverage
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ======================= OVERVIEW SECTION ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0B1F4D] to-[#163A7A] px-8 py-10 text-center">
                            <span className="inline-block bg-white/10 text-[#f26522] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                                GST Registration
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                                GST Registration Overview
                            </h2>

                            <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">

                            <div className="grid md:grid-cols-3 gap-6 mb-10">

                                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl">
                                        ₹
                                    </div>

                                    <h3 className="font-bold text-[#0B1F4D] mb-2">
                                        Goods Business
                                    </h3>

                                    <p className="text-slate-600 text-sm">
                                        GST registration generally becomes mandatory when annual turnover exceeds ₹40 Lakhs.
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl">
                                        📋
                                    </div>

                                    <h3 className="font-bold text-[#0B1F4D] mb-2">
                                        Service Providers
                                    </h3>

                                    <p className="text-slate-600 text-sm">
                                        GST registration is generally required when annual turnover exceeds ₹20 Lakhs.
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl">
                                        ⚡
                                    </div>

                                    <h3 className="font-bold text-[#0B1F4D] mb-2">
                                        Fast Processing
                                    </h3>

                                    <p className="text-slate-600 text-sm">
                                        GST registration can typically be completed within 4–6 working days.
                                    </p>
                                </div>

                            </div>

                            {/* Description */}
                            <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-8 text-center">

                                <p>
                                    Businesses are required to register under the Goods and Services Tax (GST)
                                    regime when their turnover exceeds the prescribed threshold limits.
                                    GST registration enables businesses to legally collect GST, claim
                                    input tax credits, and remain compliant with tax regulations.
                                </p>

                                <p>
                                    Once registered, a unique GST Identification Number (GSTIN) is
                                    issued to the business. Operating without mandatory GST registration
                                    can lead to penalties, legal consequences, and compliance issues.
                                </p>

                                <p>
                                    Our GST experts assist businesses through the complete registration
                                    process, including document verification, application filing, and
                                    obtaining GSTIN quickly and efficiently.
                                </p>

                            </div>

                            {/* Process Steps */}
                            <div className="mt-12">

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6">

                                    <div className="flex items-center gap-4 bg-[#0B1F4D] text-white px-6 py-4 rounded-2xl">
                                        <span className="w-8 h-8 rounded-full bg-[#f26522] flex items-center justify-center font-bold">
                                            1
                                        </span>
                                        Submit Documents
                                    </div>

                                    <div className="hidden md:block text-[#f26522] text-2xl">
                                        →
                                    </div>

                                    <div className="flex items-center gap-4 bg-[#0B1F4D] text-white px-6 py-4 rounded-2xl">
                                        <span className="w-8 h-8 rounded-full bg-[#f26522] flex items-center justify-center font-bold">
                                            2
                                        </span>
                                        Expert Processing
                                    </div>

                                    <div className="hidden md:block text-[#f26522] text-2xl">
                                        →
                                    </div>

                                    <div className="flex items-center gap-4 bg-[#0B1F4D] text-white px-6 py-4 rounded-2xl">
                                        <span className="w-8 h-8 rounded-full bg-[#f26522] flex items-center justify-center font-bold">
                                            3
                                        </span>
                                        Receive GSTIN
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ======================= BENEFITS & DOCUMENTS (Split Section) ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT VISUAL */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#0B1F4D] to-[#163A7A] rounded-[32px] min-h-[520px] flex items-center justify-center overflow-hidden shadow-2xl">

                                {/* Background Effects */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f26522]/10 rounded-full blur-3xl"></div>

                                {/* GST Visual */}
                                <div className="relative z-10 text-center">
                                    <div className="w-40 h-40 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
                                        <span className="text-8xl font-bold text-[#f26522]">₹</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-3">
                                        GST Registration
                                    </h3>

                                    <p className="text-slate-300 max-w-sm mx-auto">
                                        Grow your business with GST compliance, tax benefits,
                                        and nationwide market access.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6">

                            {/* Benefits Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300">

                                <div className="bg-[#0B1F4D] px-6 py-5">
                                    <h3 className="text-xl font-bold text-white">
                                        Benefits of Having GST Number
                                    </h3>
                                </div>

                                <div className="p-6 space-y-5">

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold">
                                            ✓
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#0B1F4D] mb-1">
                                                Better Market Competitiveness
                                            </h4>

                                            <p className="text-slate-600 text-sm leading-6">
                                                GST registration enables interstate trade and helps businesses
                                                expand their reach across India.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold">
                                            ✓
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#0B1F4D] mb-1">
                                                Sell on E-Commerce Platforms
                                            </h4>

                                            <p className="text-slate-600 text-sm leading-6">
                                                Required for businesses looking to sell through Amazon,
                                                Flipkart, Shopify, Paytm, and other online marketplaces.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold">
                                            ✓
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#0B1F4D] mb-1">
                                                Input Tax Credit Benefits
                                            </h4>

                                            <p className="text-slate-600 text-sm leading-6">
                                                Claim eligible input tax credits and reduce your overall
                                                tax liability through GST compliance.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Documents Card */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300">

                                <div className="bg-[#f26522] px-6 py-5">
                                    <h3 className="text-xl font-bold text-white">
                                        Documents Required
                                    </h3>
                                </div>

                                <div className="p-6">

                                    <p className="text-slate-600 mb-6">
                                        Keep the following documents ready for a smooth GST registration process.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">

                                        {[
                                            "PAN Card",
                                            "Aadhaar Card",
                                            "Mobile Number",
                                            "Email Address",
                                            "Business Address Proof",
                                            "Bank Account Details",
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3"
                                            >
                                                <span className="text-[#f26522] font-bold">✓</span>

                                                <span className="text-slate-700 text-sm font-medium">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ======================= TYPES OF GST & REQUIRED DOCUMENTS ICONS ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* TYPES OF GST */}
                    <div className="text-center mb-20">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            GST Categories
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            Types of GST Registration
                        </h2>

                        <p className="text-slate-600 max-w-4xl mx-auto mt-4 leading-7">
                            GST registration applies to different categories of taxpayers based on
                            their business model, location, and activities. Certain categories are
                            required to obtain GST registration irrespective of turnover limits.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                    </div>

                    {/* GST TYPES */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-24">

                        {[
                            {
                                number: "01",
                                title: "Casual Taxable Persons",
                                icon: "🏪",
                                desc: "Businesses participating in exhibitions, trade fairs, seasonal events, or temporary commercial activities without a fixed place of business are categorized as Casual Taxable Persons under GST."
                            },
                            {
                                number: "02",
                                title: "Non-Resident Taxable Persons",
                                icon: "🌍",
                                desc: "Foreign individuals, companies, or organizations supplying goods or services in India without a permanent place of business are required to obtain GST registration as Non-Resident Taxable Persons."
                            },
                            {
                                number: "03",
                                title: "E-Commerce Operators",
                                icon: "🛒",
                                desc: "Entities owning, operating, or managing online marketplaces and e-commerce platforms are required to register under GST regardless of turnover thresholds."
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-6 right-6 text-5xl font-bold text-[#0B1F4D]/10">
                                    {item.number}
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#0B1F4D] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-7">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* DOCUMENTS SECTION */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            Documentation
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            Required Documents for GST Registration
                        </h2>

                        <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
                            Keep these documents ready to ensure a smooth and hassle-free GST
                            registration process.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
                    </div>

                    {/* DOCUMENT GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                        {[
                            { icon: "🪪", title: "PAN Card", desc: "PAN of Proprietor / Business" },
                            { icon: "📄", title: "Aadhaar Card", desc: "Identity Verification" },
                            { icon: "🏢", title: "Business Proof", desc: "Registration or Incorporation Certificate" },
                            { icon: "👤", title: "Director Proof", desc: "Identity & Address Proof with Photos" },
                            { icon: "📍", title: "Business Address", desc: "Address Proof of Business Location" },
                            { icon: "🏦", title: "Bank Details", desc: "Cancelled Cheque or Bank Statement" },
                            { icon: "✍️", title: "Authorization Letter", desc: "Board Resolution / Signatory Authorization" },
                            { icon: "🤝", title: "Rent Agreement", desc: "Required if Business Premises are Rented" },
                        ].map((doc, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-4">
                                    {doc.icon}
                                </div>

                                <h3 className="font-bold text-[#0B1F4D] text-sm mb-2">
                                    {doc.title}
                                </h3>

                                <p className="text-xs text-slate-600 leading-5">
                                    {doc.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <div className="bg-[#0B1F4D] rounded-3xl p-10 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Ready to Get Your GST Registration?
                            </h3>

                            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                                Our GST experts will assist you with documentation, application
                                filing, and approval to ensure a quick and seamless registration process.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Start GST Registration
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* ======================= WHAT IS GST (Yellow Split Section) ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            GST Knowledge Hub
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            Understanding GST Essentials
                        </h2>

                        <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
                            Learn the fundamentals of GST Returns, GSTIN, and GSTN to better
                            understand India's GST ecosystem.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left Visual */}
                        <div className="relative">

                            <div className="bg-gradient-to-br from-[#0B1F4D] to-[#163A7A] rounded-[32px] p-10 min-h-[500px] flex items-center justify-center overflow-hidden shadow-2xl">

                                {/* Decorative Circles */}
                                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#f26522]/10 rounded-full blur-2xl"></div>

                                <div className="relative z-10 space-y-6 w-full max-w-sm">

                                    <div className="bg-white rounded-2xl p-5 shadow-lg flex items-center justify-between">
                                        <span className="font-bold text-[#0B1F4D]">
                                            GST Return
                                        </span>

                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                            ✓
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-5 shadow-lg flex items-center justify-between">
                                        <span className="font-bold text-[#0B1F4D]">
                                            GSTIN
                                        </span>

                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                            ✓
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-5 shadow-lg flex items-center justify-between">
                                        <span className="font-bold text-[#0B1F4D]">
                                            GSTN
                                        </span>

                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                            ✓
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">

                            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold text-xl">
                                        ?
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0B1F4D]">
                                        What is a GST Return?
                                    </h3>
                                </div>

                                <p className="text-slate-600 leading-7">
                                    A GST Return is a document containing details of income, purchases,
                                    sales, output tax, and input tax credits. Registered taxpayers are
                                    required to file GST returns periodically as prescribed under GST law.
                                    These returns are submitted electronically through the GST portal.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold text-xl">
                                        #
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0B1F4D]">
                                        What is GSTIN?
                                    </h3>
                                </div>

                                <p className="text-slate-600 leading-7">
                                    GSTIN (Goods and Services Tax Identification Number) is a unique
                                    identification number assigned to every registered taxpayer under
                                    GST. It enables businesses to file returns, pay taxes, and access
                                    GST-related services online.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold text-xl">
                                        🌐
                                    </div>

                                    <h3 className="text-xl font-bold text-[#0B1F4D]">
                                        What is GSTN?
                                    </h3>
                                </div>

                                <p className="text-slate-600 leading-7">
                                    GSTN (Goods and Services Tax Network) is the technology backbone of
                                    the GST system. It provides the digital infrastructure for GST
                                    registration, return filing, tax payments, and compliance management
                                    across India.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ======================= BENEFITS OF GST REGISTRATION (Grid) ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            GST Advantages
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            Benefits of GST Registration
                        </h2>

                        <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
                            GST registration offers multiple advantages for businesses, including
                            simplified compliance, improved transparency, and access to input tax credits.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                title: "Simplified Taxation",
                                desc: "GST consolidates multiple indirect taxes into a single tax structure, making compliance easier for businesses.",
                                icon: "📊",
                            },
                            {
                                title: "Reduced Cost of Goods & Services",
                                desc: "Elimination of the cascading tax effect helps lower the overall cost of products and services.",
                                icon: "💰",
                            },
                            {
                                title: "Streamlined Compliance",
                                desc: "Businesses can manage tax filings efficiently through a unified online GST system.",
                                icon: "⚡",
                            },
                            {
                                title: "Greater Transparency",
                                desc: "GST promotes accountability and reduces tax evasion through a transparent taxation framework.",
                                icon: "🔍",
                            },
                            {
                                title: "Uniform Tax Structure",
                                desc: "A standardized tax regime across India simplifies business operations and return filing.",
                                icon: "🏛️",
                            },
                            {
                                title: "Composition Scheme Benefits",
                                desc: "Eligible small businesses can reduce tax burdens and compliance requirements under the Composition Scheme.",
                                icon: "📈",
                            },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-6">
                                    {benefit.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#0B1F4D] mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-slate-600 leading-7">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-14 text-center">
                        <div className="inline-flex flex-col items-center bg-white border border-slate-200 rounded-3xl px-8 py-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#0B1F4D] mb-3">
                                Ready to Register for GST?
                            </h3>

                            <p className="text-slate-600 max-w-xl mb-6">
                                Get professional assistance from our GST experts and complete your
                                GST registration quickly and hassle-free.
                            </p>

                            <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                                Apply for GST Registration
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* ======================= FEES & PENALTIES ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            Important Information
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            GST Registration & Compliance
                        </h2>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* GST Registration Fees */}
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:-translate-y-2 transition-all duration-300">

                            <div className="bg-[#0B1F4D] px-6 py-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                                    📋
                                </div>

                                <h3 className="text-white text-xl font-bold">
                                    GST Registration Fees
                                </h3>
                            </div>

                            <div className="p-6">
                                <p className="text-slate-600 leading-8">
                                    GST registration involves a detailed multi-step process requiring
                                    business information, identity proof, address proof, and supporting
                                    documentation. While the GST portal itself does not charge any
                                    government fee for registration, professional assistance can help
                                    avoid delays, errors, and rejections.
                                </p>

                                <p className="text-slate-600 leading-8 mt-4">
                                    Our GST experts manage the entire process—from document verification
                                    and application preparation to GSTIN approval—ensuring a smooth and
                                    hassle-free experience.
                                </p>
                            </div>

                        </div>

                        {/* Penalty */}
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:-translate-y-2 transition-all duration-300">

                            <div className="bg-[#f26522] px-6 py-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                                    ⚠️
                                </div>

                                <h3 className="text-white text-xl font-bold">
                                    Penalty for Non-Registration
                                </h3>
                            </div>

                            <div className="p-6">
                                <p className="text-slate-600 leading-8">
                                    Businesses that are required to register under GST but fail to do so
                                    may face penalties and legal consequences.
                                </p>

                                <div className="mt-5 bg-red-50 border border-red-100 rounded-2xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-red-600 text-xl">●</span>
                                        <h4 className="font-semibold text-red-700">
                                            Standard Penalty
                                        </h4>
                                    </div>

                                    <p className="text-slate-600">
                                        10% of the tax amount due, subject to a minimum penalty of
                                        ₹10,000.
                                    </p>
                                </div>

                                <div className="mt-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-orange-600 text-xl">●</span>
                                        <h4 className="font-semibold text-orange-700">
                                            Intentional Tax Evasion
                                        </h4>
                                    </div>

                                    <p className="text-slate-600">
                                        The penalty can extend up to 100% of the tax amount due where
                                        deliberate tax evasion is established.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ======================= WHO SHOULD REGISTER (Table) ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            GST Eligibility
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            Who Should Register for GST?
                        </h2>

                        <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
                            GST registration is mandatory for certain businesses and individuals
                            based on turnover, business activities, and interstate operations.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Mandatory Registration */}
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="bg-[#0B1F4D] px-6 py-4">
                                <h3 className="text-white font-bold text-xl">
                                    Mandatory Registration
                                </h3>
                            </div>

                            <div className="p-6 space-y-5">

                                <div className="border-l-4 border-[#f26522] pl-4">
                                    <h4 className="font-semibold text-[#0B1F4D]">
                                        Turnover Criteria
                                    </h4>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Businesses with turnover above ₹40 Lakhs (₹10 Lakhs for specified
                                        states) and service providers exceeding ₹20 Lakhs.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f26522] pl-4">
                                    <h4 className="font-semibold text-[#0B1F4D]">
                                        E-Commerce Sellers
                                    </h4>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Individuals or businesses selling through platforms such as
                                        Amazon, Flipkart, and other marketplaces.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f26522] pl-4">
                                    <h4 className="font-semibold text-[#0B1F4D]">
                                        Casual Taxable Persons
                                    </h4>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Businesses operating at exhibitions, trade fairs, and temporary
                                        events without a fixed place of business.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f26522] pl-4">
                                    <h4 className="font-semibold text-[#0B1F4D]">
                                        Interstate Suppliers
                                    </h4>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Any supplier providing goods or services across state borders.
                                    </p>
                                </div>

                                <div className="border-l-4 border-[#f26522] pl-4">
                                    <h4 className="font-semibold text-[#0B1F4D]">
                                        NRI, Exporters & Importers
                                    </h4>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Non-resident persons and businesses engaged in exports or imports
                                        may require GST registration irrespective of turnover.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Who Can Register */}
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="bg-[#f26522] px-6 py-4">
                                <h3 className="text-white font-bold text-xl">
                                    Who Can Register?
                                </h3>
                            </div>

                            <div className="p-6">

                                <div className="grid gap-4">

                                    {[
                                        "Individual / Proprietorship Firm",
                                        "Partnership Firm",
                                        "Private Limited Company",
                                        "Limited Liability Partnership (LLP)",
                                        "One Person Company (OPC)",
                                        "NGO / Trust / Society",
                                        "Startup Businesses",
                                        "Importers & Exporters",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-[#f26522]/10 flex items-center justify-center text-[#f26522] font-bold">
                                                ✓
                                            </div>

                                            <span className="text-slate-700 font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                                <div className="mt-8 bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 rounded-2xl p-5 text-center">
                                    <h4 className="font-semibold text-[#0B1F4D] mb-2">
                                        Registration Timeline
                                    </h4>

                                    <p className="text-slate-600 text-sm mb-4">
                                        Get your GST Registration Certificate and GSTIN within
                                        1–5 working days.
                                    </p>

                                    <button className="bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold px-6 py-3 rounded-xl transition">
                                        Register Now
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ======================= PRICING PACKAGES ======================= */}
            <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <span className="text-[#f26522] font-semibold uppercase tracking-wider">
                            Pricing Plans
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4D] mt-2">
                            GST Registration Packages
                        </h2>

                        <p className="text-slate-600 mt-3 text-lg">
                            Transparent pricing with expert assistance and dedicated support.
                        </p>

                        <div className="w-20 h-1 bg-[#f26522] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* STARTUP PLAN */}
                        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:-translate-y-2 transition-all duration-300">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#0B1F4D] mb-3">
                                    Start Up
                                </h3>

                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-[#f26522]">
                                        ₹1,499
                                    </span>
                                </div>

                                <ul className="space-y-4 text-slate-700">
                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        GST Registration Application Filing
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        ARN & TRN Generation
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Call, Chat & Email Support
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Dedicated GST Expert
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Consultation in 3 Languages
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border-t border-slate-100">
                                <button className="w-full bg-[#0B1F4D] hover:bg-[#163A7A] text-white font-semibold py-4 rounded-xl transition">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* RECOMMENDED PLAN */}
                        <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-[#f26522] overflow-hidden hover:-translate-y-2 transition-all duration-300">

                            {/* Badge */}
                            <div className="absolute top-5 right-5 bg-[#f26522] text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                                Most Popular
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#0B1F4D] mb-3">
                                    Recommended Plan
                                </h3>

                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-[#f26522]">
                                        ₹7,999
                                    </span>
                                </div>

                                <ul className="space-y-4 text-slate-700">
                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        GST Registration Included
                                    </li>

                                    <li className="flex gap-3 font-semibold text-[#0B1F4D]">
                                        <span className="text-[#f26522]">✓</span>
                                        GST Return Filing for 12 Months
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Call, Chat & Email Support
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Dedicated GST Expert
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#f26522]">✓</span>
                                        Consultation in 3 Languages
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border-t border-slate-100">
                                <button className="w-full bg-[#f26522] hover:bg-[#e55a1c] text-white font-semibold py-4 rounded-xl transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}