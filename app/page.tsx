import React from 'react';
import Link from 'next/link';
import {
  FaFileAlt, FaTrademark, FaCertificate, FaPercent, FaUser,
  FaPhoneAlt, FaCalculator, FaIdCard, FaDesktop, FaGavel,
  FaStar, FaQuoteLeft, FaQuoteRight, FaAngleRight, FaPlay,
  FaSmile, FaCheckCircle, FaShieldAlt, FaUserSecret, FaClock,
  FaBolt, FaTachometerAlt, FaMoneyBillWave
} from 'react-icons/fa';
import WhyUsData from './components/whyUsData';


// --- DATA ARRAYS ---
const heroListLeft = [
  { icon: <FaFileAlt />, text: 'Company Registration', link: '/company-registration' },
  { icon: <FaTrademark />, text: 'Trademark', link: '/Trademark' },
  { icon: <FaCertificate />, text: 'ISO Certification', link: '/iso-certification' },
  { icon: <FaPercent />, text: 'GST Registration', link: '/gst-registration' },
  { icon: <FaUser />, text: 'Consumer Dispute', link: '/consumer-dispute' },
];

const heroListRight = [
  { icon: <FaPhoneAlt />, text: 'Business Compliance', link: '/business-compliance' },
  { icon: <FaCalculator />, text: 'Tax & Accounting Services', link: '/tax-accounting' },
  { icon: <FaIdCard />, text: 'Licenses', link: '/licenses' },
  { icon: <FaDesktop />, text: 'HR & Payroll', link: '/hr-payroll' },
  { icon: <FaGavel />, text: 'Other Legal Dispute (ODR)', link: '/odr' },
];

const servicesData = [
  { title: 'Trademark Registration Online', desc: 'Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration assistance services.', img: 'Trademark.jpg', link: '/Trademark' },
  { title: 'ISO Registration', desc: 'Get your ISO Certification support from anywhere in India and enhance your business credibility with globally recognized standards.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400', link: '/iso-certification' },
  { title: 'GST Registration Services', desc: 'Online Legal India supports you to meet GST compliance for your business.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', link: '/gst-registration' },
  { title: 'Company Registration', desc: 'We have professionals to support everything online on the ROC portal and relieve you of any burden. Click to learn.', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=400', link: '/company-registration' },
  { title: 'Import Export Code Registration', desc: 'Get an IEC code from the Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India, through our support.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400', link: '/iec-registration' },
  { title: 'Consumer Dispute', desc: 'Say goodbye to long legal battles—Online Legal India assists you to quick and smart consumer dispute resolution, online.', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400', link: '/consumer-dispute' },
  { title: 'FSSAI Registration', desc: 'Register FSSAI with our support for certificates and licenses to run your food business flawlessly with perfect compliance.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400', link: '/fssai-registration' },
  { title: 'Online Dispute Resolution', desc: 'Avoid courtroom stress by resolving disputes online with our professional ODR assistance, available anytime, anywhere.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400', link: '/odr' },
  { title: 'Virtual CXO Services', desc: 'Virtual CXO leadership support to help startups and MSMEs decide faster, scale with confidence, and avoid costly growth mistakes.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400', link: '/virtual-cxo' },
  { title: 'Corporates', desc: 'Strategic Advisory for Enterprises, Corporates & Institutional Businesses', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400', link: '/corporates' },
  { title: 'HR Compliance', desc: 'All-in-one HR software for payroll, compliance & team management. Automate tasks, save time & improve efficiency today.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', link: '/hr-payroll' },
  { title: 'GeM Registration', desc: 'GeM enables businesses to sell products and services directly to government departments through a secure online marketplace.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400', link: '/gem-registration' },
];

const whyUsData = [
  { icon: <FaCertificate size={24} />, text: 'Recognized by Govt. of India' },
  { icon: <FaSmile size={24} />, text: '5 Lakh+ Happy Customers Across India' },
  { icon: <FaCheckCircle size={24} />, text: 'ISO Certified' },
  { icon: <FaShieldAlt size={24} />, text: 'Data Security & Trust' },
  { icon: <FaUserSecret size={24} />, text: 'Trained & Professional Experts' },
  { icon: <FaClock size={24} />, text: 'On Time Service' },
  { icon: <FaBolt size={24} />, text: 'Super Fast Service' },
  { icon: <FaTachometerAlt size={24} />, text: 'Quick Response Team' },
  { icon: <FaMoneyBillWave size={24} />, text: 'Affordable' },
];

// --- COMPONENTS ---

// FIX: Added Type for props '{ title: string }'
const SectionHeading = ({ title }: { title: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-[#111b40] mb-2">{title}</h2>
    <div className="w-10 h-1 bg-[#10a850] mx-auto rounded-full"></div>
  </div>
);



export default function Home() {
  return (
    <div className="font-sans">

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-blue-50 to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Tag */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-700">
                Trusted by Businesses Across India
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#082b72] leading-tight">
              Complete Business
              <span className="text-[#ff6b00]"> Registration</span>,
              Compliance & Legal Solutions
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 bg-[#ff6b00] rounded-full mx-auto mt-8 mb-8"></div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              From Company Registration and GST to Trademark, ISO Certification,
              Compliance, Taxation, HR Services, and Digital Solutions — everything
              your business needs under one trusted platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="bg-[#ff6b00] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e55d00] transition-all duration-300 shadow-lg"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="border-2 border-[#082b72] text-[#082b72] px-8 py-4 rounded-xl font-semibold hover:bg-[#082b72] hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
              {[...heroListLeft, ...heroListRight].slice(0, 8).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#f16622] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-[#082b72]">
                    {item.text}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-3xl font-bold text-[#ff6b00]">5000+</h3>
                <p className="text-gray-600 mt-1">Businesses Served</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-3xl font-bold text-[#082b72]">100+</h3>
                <p className="text-gray-600 mt-1">Professional Services</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-3xl font-bold text-[#10a850]">50+</h3>
                <p className="text-gray-600 mt-1">Expert Consultants</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-3xl font-bold text-[#ff6b00]">PAN India</h3>
                <p className="text-gray-600 mt-1">Support Network</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side Image */}
            <div>
              <div className="bg-[#f8fafc] rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <img
                  src="/indo.jpeg"
                  alt="Indo Filings"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-[#ff6b00] font-semibold text-sm mb-4">
                About Us
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#082b72] mb-6">
                About Indo Filings
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                <span className="font-semibold text-[#ff6b00]">
                  Indo Filings
                </span>{" "}
                is your trusted partner for business registration, compliance,
                taxation, legal services, HR solutions, and digital growth.
                We provide end-to-end support for startups, entrepreneurs,
                MSMEs, and established businesses across India.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of experienced professionals helps businesses stay
                compliant, grow efficiently, and focus on what matters most —
                building successful organizations. From company incorporation
                and GST registration to trademark protection and digital
                solutions, we deliver reliable services under one roof.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {[
                  "Company Registration",
                  "GST Registration",
                  "Import Export Code",
                  "FSSAI Registration",
                  "Trademark Registration",
                  "ISO Registration",
                  "Virtual CXO Services",
                  "HR Compliance",
                  "Website Development",
                  "Android Development",
                  "SEO Optimization",
                  "Graphic Designing",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="
                relative
                overflow-hidden
                border border-gray-200
                rounded-xl
                p-4
                bg-white
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[#ff6b00]
                group
                before:absolute
                before:top-0
                before:left-0
                before:h-1
                before:w-0
                before:bg-[#ff6b00]
                before:transition-all
                before:duration-500
                hover:before:w-full
              "
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[#ff6b00]">
                      <span className="text-[#082b72] font-bold group-hover:text-white">
                        ✓
                      </span>
                    </div>

                    <h4 className="text-sm font-medium text-[#082b72] transition-colors duration-300 group-hover:text-[#ff6b00]">
                      {service}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="mt-8 bg-gradient-to-r from-[#082b72] to-[#0f4ca6] rounded-2xl p-6 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-2">
                  All-in-One Platform for Business Growth
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  Business Registration, Compliance, Taxation, HR Solutions,
                  Legal Services, IT Solutions, Digital Marketing and much more —
                  all under one roof.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Services" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, idx) => (
              <div key={idx} className="bg-white flex flex-col group">
                <Link href={service.link} className="overflow-hidden rounded-t-md block">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-44 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </Link>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <Link href={service.link}>
                      <h5 className="font-bold text-gray-900 text-lg mb-2 leading-snug hover:text-[#f16622] transition-colors cursor-pointer">
                        {service.title}
                      </h5>
                    </Link>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-4">{service.desc}</p>
                  </div>
                  <Link href={service.link} className="text-[#10a850] font-bold text-sm inline-flex items-center hover:underline">
                    Click Here <FaAngleRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US SECTION */}
      {/* WHY BUSINESSES TRUST INDO FILINGS */}
      <section className="py-20 bg-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-orange-100 text-[#ff6b00] rounded-full font-medium mb-4">
              Why Choose Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#082b72] mb-4">
              Why Businesses Trust Indo Filings
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We simplify legal, tax, compliance and business growth services
              with expert guidance, transparent pricing and dedicated support.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Expert Professionals",
                desc: "Work with experienced Chartered Accountants, Company Secretaries, legal experts and business consultants.",
                icon: "👨‍💼",
              },
              {
                title: "Fast Processing",
                desc: "Quick documentation, timely filings and efficient service delivery for all business requirements.",
                icon: "⚡",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden charges. Clear pricing and complete visibility throughout the process.",
                icon: "💰",
              },
              {
                title: "Dedicated Support",
                desc: "Get personalized assistance from consultation to completion with our expert team.",
                icon: "🤝",
              },
              {
                title: "One Platform, Many Services",
                desc: "Registration, GST, Trademark, ISO, Compliance, HR, IT and Digital Marketing solutions under one roof.",
                icon: "🏢",
              },
              {
                title: "PAN India Reach",
                desc: "Serving startups, MSMEs and enterprises across India through digital-first services.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
            group
            relative
            overflow-hidden
            bg-white
            p-8
            rounded-2xl
            shadow-sm
            border border-gray-100
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-2xl
            hover:border-[#ff6b00]
          "
              >
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#ff6b00] transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:bg-[#ff6b00] group-hover:scale-110">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#082b72] mb-4 transition-colors duration-300 group-hover:text-[#ff6b00]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Background Effect */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#ff6b00] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e55d00] transition-all duration-300 hover:shadow-lg"
            >
              Start Your Business Journey
            </Link>
          </div>

        </div>
      </section>

      <WhyUsData />
      {/* VIDEOS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Expertise Meets Credibility" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
            ].map((img, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md">
                <img src={img} alt="Video Thumbnail" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                  <FaPlay className="text-white text-5xl drop-shadow-lg opacity-90 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}