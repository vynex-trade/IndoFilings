"use client";

import Link from "next/link";
import {
  FaFileSignature,
  FaSyncAlt,
  FaEdit,
  FaFileImport,
  FaExchangeAlt,
  FaClipboardList,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFileSignature />,
    title: "FSSAI Registration",
    description:
      "Get FSSAI Registered Easily for your food business. Click here to learn more.",
    color: "text-sky-400",
    link: "/licenses/fssai-registration",
  },
  {
    icon: <FaSyncAlt />,
    title: "FSSAI Renewal",
    description:
      "Review your FSSAI License / Registration seamlessly. Explore now to learn more.",
    color: "text-green-500",
    link: "/licenses/fssai-renewal",
  },
  {
    icon: <FaEdit />,
    title: "FSSAI Modification",
    description:
      "Modify your FSSAI license to avoid legal complications. Click to learn more.",
    color: "text-purple-500",
    link: "/licenses/fssai-modification",
  },
  {
    icon: <FaFileImport />,
    title: "Import Export Code",
    description:
      "Get importer-exporter code to ensure legal compliance. Learn more here.",
    color: "text-pink-500",
    link: "/licenses/import-export-code",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Import Export Code Modification",
    description:
      "Need Importer Exporter Code Modification? Get seamless service with us.",
    color: "text-orange-500",
    link: "/licenses/import-export-code-modification",
  },
  {
    icon: <FaClipboardList />,
    title: "FSSAI Annual Return Filing",
    description:
      "If your FSSAI Annual Return Filing is due, contact us today.",
    color: "text-lime-500",
    link: "/licenses/fssai-annual-return-filing",
  },
  {
    icon: <FaCertificate />,
    title: "ISO Registration",
    description:
      "Increase your brand value with ISO Registration. Click to learn more.",
    color: "text-indigo-500",
    link: "/licenses/iso-registration",
  },
];

export default function LicensesSection() {
  return (
    <section className="bg-white min-h-screen">
      {/* Banner */}
      <div
        className="w-full py-20 px-6 text-center text-white"
        style={{ backgroundColor: "#111179" }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Licenses
          </h1>

          <p className="max-w-4xl mx-auto text-base md:text-lg leading-8 text-gray-100">
            Explore Online Legal India to discover a range of licensing
            options tailored to your needs, ensuring compliance,
            flexibility, and seamless access to our products and services.
            Our experts will help you file every licensing service you
            require.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className={`text-3xl mb-5 ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#23304e] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7 flex-grow">
                {service.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold">
                Apply Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}