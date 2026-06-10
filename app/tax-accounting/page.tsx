"use client";

import React from "react";
import {
  FaArrowRight,
  FaFileInvoice,
  FaFileAlt,
  FaRegFileAlt,
  FaEdit,
  FaCalendarCheck,
  FaFileExport,
  FaTruckMoving,
  FaFileInvoiceDollar,
  FaFileContract,
  FaUsers,
  FaClipboardCheck,
  FaCalculator,
  FaBook,
  FaHandHoldingUsd,
  FaProjectDiagram,
  FaFileArchive,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

export default function TaxCompliancePage() {
  // GST & TDS
  const gstData = [
    {
      id: 1,
      title: "GST Registration",
      description:
        "Register your business for GST and stay tax-compliant. Click here to get started.",
      icon: <FaFileInvoice size={20} className="text-teal-600" />,
      iconBg: "bg-teal-50",
      link: "/gst-registration",
    },
    {
      id: 2,
      title: "GST Return Filing",
      description:
        "File your GST returns on time and avoid penalties. Explore now for seamless filing.",
      icon: <FaFileAlt size={20} className="text-purple-600" />,
      iconBg: "bg-purple-50",
      link: "/tax-accounting/gst-return-filing",
    },
    {
      id: 3,
      title: "GST Nil Return Filing",
      description:
        "No transactions yet? File your GST Nil Return hassle-free through expert CA/CS.",
      icon: <FaRegFileAlt size={20} className="text-pink-500" />,
      iconBg: "bg-pink-50",
      link: "/tax-accounting/gst-nil-return-filing",
    },
    {
      id: 4,
      title: "GST Modification",
      description:
        "Update or modify your GST registration details easily. Explore now to learn more.",
      icon: <FaEdit size={20} className="text-orange-500" />,
      iconBg: "bg-orange-50",
      link: "/tax-accounting/gst-modification",
    },
    {
      id: 5,
      title: "GSTR-9 Annual Filing",
      description:
        "Ensure compliance by filing your GSTR-9 Annual Return. Click here to file today.",
      icon: <FaCalendarCheck size={20} className="text-green-700" />,
      iconBg: "bg-green-50",
      link: "/tax-accounting/gstr-9-annual-filing",
    },
    {
      id: 6,
      title: "GST LUT Filing",
      description:
        "Export without paying IGST by filing your GST LUT. Explore now to get our support.",
      icon: <FaFileExport size={20} className="text-blue-600" />,
      iconBg: "bg-blue-50",
      link: "/tax-accounting/gst-lut-filing",
    },
    {
      id: 7,
      title: "GST E-Way Bill",
      description:
        "Generate your GST E-Way Bill effortlessly for smooth transportation.",
      icon: <FaTruckMoving size={20} className="text-red-500" />,
      iconBg: "bg-red-50",
      link: "/tax-accounting/gst-e-way-bill",
    },
    {
      id: 8,
      title: "TDS Return Filing",
      description:
        "Accurate, timely filing to avoid penalties and ensure compliance.",
      icon: <FaFileInvoiceDollar size={20} className="text-cyan-500" />,
      iconBg: "bg-cyan-50",
      link: "/tax-accounting/tds-return-filing",
    },
  ];

  // Payroll Compliance
  const payrollData = [
    {
      id: 1,
      title: "PF-ESIC Registration",
      description:
        "Register for PF & ESIC to provide social security benefits to employees.",
      icon: <FaFileContract size={20} className="text-orange-500" />,
      iconBg: "bg-orange-50",
      link: "/pf-esic-registration",
    },
    {
      id: 2,
      title: "PF-ESIC Return Filing",
      description:
        "Ensure timely PF & ESIC return filing to stay compliant.",
      icon: <FaUsers size={20} className="text-amber-700" />,
      iconBg: "bg-amber-50",
      link: "/pf-esic-return-filing",
    },
  ];

  // Annual Compliances & Others
  const annualData = [
    {
      id: 1,
      title: "Annual Compliance & Filing",
      description:
        "Stay compliant with our hassle-free annual filing services.",
      icon: <FaClipboardCheck size={20} className="text-fuchsia-600" />,
      iconBg: "bg-fuchsia-50",
      link: "/annual-compliance-filing",
    },
    {
      id: 2,
      title: "Tax Planning & Consultancy",
      description:
        "Optimize your tax savings with exclusive tax planning services.",
      icon: <FaCalculator size={20} className="text-blue-500" />,
      iconBg: "bg-blue-50",
      link: "/tax-planning-consultancy",
    },
    {
      id: 3,
      title: "Online Bookkeeping",
      description:
        "Manage your finances effortlessly with our Online Bookkeeping services.",
      icon: <FaBook size={20} className="text-indigo-800" />,
      iconBg: "bg-indigo-50",
      link: "/online-bookkeeping",
    },
    {
      id: 4,
      title: "12A-80G-CSR",
      description:
        "Want 12A-80G-CSR Registration services for your NGO? Contact us.",
      icon: <FaHandHoldingUsd size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      link: "/12a-80g-csr",
    },
    {
      id: 5,
      title: "Project Report",
      description:
        "Need a detailed Project Report for funding or business planning?",
      icon: <FaProjectDiagram size={20} className="text-pink-600" />,
      iconBg: "bg-pink-50",
      link: "/project-report",
    },
    {
      id: 6,
      title: "DPT-3 Filing",
      description:
        "File your DPT-3 return on time to avoid penalties.",
      icon: <FaFileArchive size={20} className="text-amber-800" />,
      iconBg: "bg-amber-50",
      link: "/dpt-3-filing",
    },
    {
      id: 7,
      title: "NGO DARPAN Registration",
      description:
        "Register your NGO with NGO DARPAN for government recognition.",
      icon: <FaGlobe size={20} className="text-cyan-600" />,
      iconBg: "bg-cyan-50",
      link: "/ngo-darpan-registration",
    },
  ];

  const ServiceCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${item.iconBg}`}
      >
        {item.icon}
      </div>

      <div className="flex-grow">
        <h3 className="text-[17px] font-bold text-[#1e293b] mb-2 leading-snug">
          {item.title}
        </h3>

        <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      <Link
        href={item.link}
        className="mt-auto inline-flex items-center text-[#e8701a] font-semibold text-sm hover:text-orange-700 group w-fit"
      >
        Apply Now
        <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="w-full py-20 px-4 md:px-8 text-center text-white"
        style={{ backgroundColor: "#111179" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-[40px] font-bold mb-4 tracking-wide">
            Tax & Compliance
          </h1>

          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto">
            Stay tax-compliant with expert solutions. From tax planning to
            annual filings, we handle all your compliance needs to keep your
            business legally secure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 space-y-16">
        {/* GST & TDS */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
            GST & TDS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gstData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Payroll Compliance */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
            Payroll Compliance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {payrollData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Annual Compliances */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-8">
            Annual Compliances & Others
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}