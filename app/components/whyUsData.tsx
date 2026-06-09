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
  { icon: <FaAward />, title: "Recognized by Govt. of India" },
  { icon: <FaSmile />, title: "5 Lakh+ Happy Customers Across India" },
  { icon: <FaCertificate />, title: "ISO Certified" },
  { icon: <FaShieldAlt />, title: "Data Security & Trust" },
  { icon: <FaHeadset />, title: "Trained & Professional Experts" },
  { icon: <FaClock />, title: "On Time Service" },
  { icon: <FaBolt />, title: "Super Fast Service" },
  { icon: <FaStopwatch />, title: "Quick Response Team" },
  { icon: <FaMoneyBillWave />, title: "Affordable Pricing" },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Why Us?
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center h-24 hover:scale-105 transition-all duration-300"
            >
              {/* Icon Box */}
              <div
                className="bg-[#2563EB] w-24 h-full flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%, 15% 50%)",
                }}
              >
                <span className="text-white text-3xl">
                  {feature.icon}
                </span>
              </div>

              {/* Content Box */}
              <div
                className="flex-1 h-full bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] flex items-center justify-center px-8 -ml-4 shadow-lg"
                style={{
                  clipPath:
                    "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
                }}
              >
                <p className="text-white text-sm md:text-base font-semibold text-center leading-snug">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}