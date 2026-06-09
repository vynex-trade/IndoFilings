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

// FIX: Added 'description' property to each object in the array
const features = [
  {
    icon: <FaAward />,
    title: "Recognized by Govt. of India",
    description: "Officially recognized by the Government of India for providing reliable and authentic legal services."
  },
  {
    icon: <FaSmile />,
    title: "5 Lakh+ Happy Customers Across India",
    description: "Trusted by over 500,000 satisfied businesses and individuals nationwide."
  },
  {
    icon: <FaCertificate />,
    title: "ISO Certified",
    description: "ISO 9001:2015 certified company ensuring top-notch quality management and service delivery."
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Security & Trust",
    description: "We employ bank-grade security protocols to keep your sensitive business data completely safe."
  },
  {
    icon: <FaHeadset />,
    title: "Trained & Professional Experts",
    description: "Our team consists of certified CAs, CSs, and legal experts with years of industry experience."
  },
  {
    icon: <FaClock />,
    title: "On Time Service",
    description: "We value your time and guarantee delivery of all documents and services strictly within deadlines."
  },
  {
    icon: <FaBolt />,
    title: "Super Fast Service",
    description: "Experience lightning-fast processing for all your registration, taxation, and compliance needs."
  },
  {
    icon: <FaStopwatch />,
    title: "Quick Response Team",
    description: "Our dedicated customer support team is always on standby to resolve your queries instantly."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description: "Premium legal and taxation services offered at highly competitive and transparent prices with no hidden fees."
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
            Why Choose Online Legal India?
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4">
            Trusted GST experts delivering quick registration, compliance support,
            and end-to-end business taxation services across India.
          </p>

          <div className="w-24 h-1 bg-[#f26522] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                <span className="text-[#f26522]">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B1F4D] mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}