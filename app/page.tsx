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
  { title: 'Trademark Registration Online', desc: 'Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration assistance services.', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c848?auto=format&fit=crop&q=80&w=400', link: '/Trademark' },
  { title: 'ISO Registration', desc: 'Get your ISO Certification support from anywhere in India and enhance your business credibility with globally recognized standards.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400', link: '/iso-certification' },
  { title: 'GST Registration Services', desc: 'Online Legal India supports you to meet GST compliance for your business.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', link: '/gst-registration' },
  { title: 'Company Registration', desc: 'We have professionals to support everything online on the ROC portal and relieve you of any burden. Click to learn.', img: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=400', link: '/company-registration' },
  { title: 'Import Export Code Registration', desc: 'Get an IEC code from the Directorate General of Foreign Trade, Ministry of Commerce and Industry, Govt. of India, through our support.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400', link: '/iec-registration' },
  { title: 'Consumer Dispute', desc: 'Say goodbye to long legal battles—Online Legal India assists you to quick and smart consumer dispute resolution, online.', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400', link: '/consumer-dispute' },
  { title: 'FSSAI Registration', desc: 'Register FSSAI with our support for certificates and licenses to run your food business flawlessly with perfect compliance.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400', link: '/fssai-registration' },
  { title: 'Online Dispute Resolution', desc: 'Avoid courtroom stress by resolving disputes online with our professional ODR assistance, available anytime, anywhere.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400', link: '/odr' },
  { title: 'Virtual CXO Services', desc: 'Virtual CXO leadership support to help startups and MSMEs decide faster, scale with confidence, and avoid costly growth mistakes.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400', link: '/virtual-cxo' },
  { title: 'Corporates', desc: 'Strategic Advisory for Enterprises, Corporates & Institutional Businesses', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400', link: '/corporates' },
  { title: 'HR Compliance', desc: 'All-in-one HR software for payroll, compliance & team management. Automate tasks, save time & improve efficiency today.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', link: '/hr-compliance' },
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
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Background Shape */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[40%] bg-[#e6f0f7] rounded-l-full z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Hero Left Content */}
            <div>
              <div className="border-l-4 border-[#f16622] pl-4 mb-6">
                <span className="text-xl text-gray-800">India's 1st</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#111b40] leading-tight mb-6">
                All-in-One Platform for Business Registration, Compliance, HR & Legal Tech
              </h1>
              <div className="w-20 h-1 bg-[#10a850] mb-10 rounded-full"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <div>
                  {heroListLeft.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="flex items-center mb-4 group cursor-pointer hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-8 h-8 rounded bg-[#f16622] text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#d9551a] transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-800 text-sm group-hover:text-[#f16622] transition-colors">
                        {item.text}
                      </span>
                    </Link>
                  ))}
                </div>
                <div>
                  {heroListRight.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="flex items-center mb-4 group cursor-pointer hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-8 h-8 rounded bg-[#f16622] text-white flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#d9551a] transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-800 text-sm group-hover:text-[#f16622] transition-colors">
                        {item.text}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Right Image & Cards */}
            <div className="relative text-center mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Brand Ambassador"
                className="inline-block max-h-[550px] object-cover rounded-lg"
              />

              {/* Rating Floating Card */}
              <div className="absolute top-[10%] left-0 lg:-left-10 bg-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20">
                <div className="flex items-center mb-1">
                  <span className="text-2xl font-bold text-[#f16622] mr-2">4.5</span>
                  <FaStar className="text-[#f16622] text-xl" />
                </div>
                <p className="text-xs text-gray-600 m-0 leading-tight">
                  Our Ratings from 6000+<br />customers on <span className="font-bold text-[#4285F4]">Google</span>
                </p>
              </div>

              {/* Quote Floating Card */}
              <div className="absolute bottom-[10%] right-0 lg:-right-10 bg-white p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-20 max-w-[220px] text-left">
                <FaQuoteLeft className="text-[#10a850] text-xl mb-2" />
                <p className="text-xs font-medium text-gray-800 leading-relaxed">
                  We welcome Former Indian Captain & BCCI President Sourav Ganguly as our Brand Ambassador. <FaQuoteRight className="inline text-[#10a850]" />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">

            <div className="w-full lg:w-5/12 relative">
              <div className="bg-[#e4edf4] p-0 rounded-[20px] overflow-hidden text-center">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500&h=550"
                  alt="Mr. Saurabh Shukla"
                  className="w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="absolute bottom-6 right-2 bg-white p-4 rounded-xl shadow-lg w-48 border border-gray-100">
                <FaQuoteLeft className="text-[#10a850] mb-1 text-sm" />
                <h6 className="text-[#111b40] font-bold text-sm mb-1">Mr. Saurabh Shukla</h6>
                <p className="text-gray-500 text-[10px] leading-tight">is the celebrity face of our brand. <FaQuoteRight className="inline text-[#10a850] text-[10px]" /></p>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <h2 className="text-3xl font-bold text-[#111b40] mb-6">About Online Legal India</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                <span className="text-[#f16622] font-bold">Online Legal India</span> is a brand of FastInfo Legal Services Pvt. Ltd., registered under the Companies Act, 2013.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Our core panel consists of diligent professionals, all under one roof. They provide solution to all the individual, business person, corporate body and others for the issues faced by them in their everyday life.
              </p>
            </div>
          </div>

          <div className="bg-[#fdf5ea] border-l-4 border-[#f16622] rounded-lg p-6 md:p-8 text-center shadow-sm">
            <p className="text-gray-800 font-medium md:text-lg">
              Online Legal India is India's 1st & only all-in-one platform, that provides business registration, licences, GST & tax, regulatory compliance, ODR-enabled legal support, audit, HR & payroll, all under one roof.
            </p>
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

      {/* MEDIA SECTION */}
      <section className="py-20 bg-[#f2f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* Founder Card */}
            <div className="col-span-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=400"
                  alt="Rajesh Kewat"
                  className="w-full h-[350px] object-cover object-top"
                />
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h4 className="font-bold text-2xl text-[#111b40] mb-3">Rajesh Kewat</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The Founder & CEO of Online Legal India, Mr. Rajesh Kewat actually had the courage to sacrifice his well paid job at Oxford and turn his startup dream into a multi crore turnover company.
                  </p>
                </div>
              </div>
            </div>

            {/* Media Grid */}
            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h3 className="font-bold text-2xl text-[#d32f2f] mb-3">ZEE<span className="text-gray-800">NEWS</span></h3>
                <p className="text-xs text-gray-500">Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online Legal India's Success</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h3 className="font-bold text-3xl text-red-600 mb-3">TED<sup className="text-sm">x</sup></h3>
                <p className="text-xs text-gray-500">From Rs. 2000 Salary to Multi-Crore Turnover Company | Rajesh Kewat | TEDxPradhikaran.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h3 className="font-bold text-2xl text-[#004274] font-serif mb-3">Forbes <sub className="text-[10px] text-gray-500 font-sans">INDIA</sub></h3>
                <p className="text-xs text-gray-500">Mr. Rajesh Kewat getting featured in the special edition of Forbes India Magazine - Showstoppers 2022-23</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h4 className="font-bold text-xl text-[#d32f2f] mb-3">asia one</h4>
                <p className="text-xs text-gray-500">Rajesh Kewat, the MD of FastInfo Legal Services Pvt Ltd, owns a movie-like story; a man who lost everything for his love & attained great success within just 500 days with his innovative business.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h3 className="font-bold text-2xl text-[#005aaa] mb-3">mid-day</h3>
                <p className="text-xs text-gray-500">Rajesh Kewat Conferred with Businessman of the Year Award at Brands Impact NFA 2022.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 transition duration-300">
                <h5 className="font-bold text-lg text-gray-800 mb-4">Past Experiences</h5>
                <div className="flex justify-around w-full items-center">
                  <span className="text-[11px] font-bold text-[#002147]">OXFORD</span>
                  <span className="text-[11px] font-bold text-[#005a9c]">Pearson</span>
                  <span className="text-[11px] font-bold text-[#00a650]">Educomp</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <WhyUsData />
    </div>
  );
}