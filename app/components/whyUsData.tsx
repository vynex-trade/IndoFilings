import {
  FaAward,
  FaSmile,
  FaCertificate,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaBolt,
  FaStopwatch,
  FaMoneyBillWave,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Recognized by Govt. of India",
    description:
      "Officially recognized by the Government of India for providing reliable and authentic legal services.",
  },
  {
    icon: <FaSmile />,
    title: "5 Lakh+ Happy Customers Across India",
    description:
      "Trusted by over 500,000 satisfied businesses and individuals nationwide.",
  },
  {
    icon: <FaCertificate />,
    title: "ISO Certified",
    description:
      "ISO 9001:2015 certified company ensuring top-notch quality management and service delivery.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Security & Trust",
    description:
      "We employ bank-grade security protocols to keep your sensitive business data completely safe.",
  },
  {
    icon: <FaHeadset />,
    title: "Trained & Professional Experts",
    description:
      "Our team consists of certified CAs, CSs, and legal experts with years of industry experience.",
  },
  {
    icon: <FaClock />,
    title: "On Time Service",
    description:
      "We value your time and guarantee delivery of all documents and services strictly within deadlines.",
  },
  {
    icon: <FaBolt />,
    title: "Super Fast Service",
    description:
      "Experience lightning-fast processing for all your registration, taxation, and compliance needs.",
  },
  {
    icon: <FaStopwatch />,
    title: "Quick Response Team",
    description:
      "Our dedicated customer support team is always on standby to resolve your queries instantly.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description:
      "Premium legal and taxation services offered at highly competitive and transparent prices with no hidden fees.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-5 bg-gradient-to-br from-[#f8fafc] to-[#eef4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#f26522] font-semibold uppercase tracking-[3px]">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F4D] mt-3">
            Why Choose Indo Filings?
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Trusted GST experts delivering quick registration, compliance
            support, and end-to-end business taxation services across India.
          </p>

          <div className="w-24 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-white
                rounded-3xl
                p-8
                border border-slate-200
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-[#f26522]
              "
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#f26522] transition-all duration-500 group-hover:w-full"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-[#f26522] group-hover:scale-110">
                <span className="text-[#f26522] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0B1F4D] mb-3 transition-colors duration-300 group-hover:text-[#f26522]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-7 relative z-10">
                {feature.description}
              </p>

              {/* Hover Decoration */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}