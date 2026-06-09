import React from 'react';
// Importing a variety of icons to match the intent of each card
import { 
  FaArrowRight,
  FaGavel,
  FaShieldAlt,
  FaFileExport,
  FaPenNib,
  FaLayerGroup,
  FaRegCopyright
} from 'react-icons/fa';
import { MdVerified, MdAutorenew } from 'react-icons/md';

export default function TrademarkServicesPage() {
  // Data for Trademark section (7 cards)
  const trademarkServices = [
    {
      id: 1,
      title: "Trademark Registration",
      description: "Protect your brand with Trademark Registration. Click here to secure your brand mark.",
      icon: <MdVerified size={28} className="text-red-500" />,
      iconBg: "bg-red-50",
      actionText: "Apply Now"
    },
    {
      id: 2,
      title: "Trademark Renewal",
      description: "Renew your trademark on time and maintain exclusive rights. Explore now to learn more.",
      icon: <MdAutorenew size={28} className="text-pink-500" />,
      iconBg: "bg-pink-50",
      actionText: "Apply Now"
    },
    {
      id: 3,
      title: "Trademark Objection",
      description: "Facing a Trademark Objection? Get expert assistance to respond legally. Click to resolve it now.",
      icon: <FaGavel size={26} className="text-green-600" />,
      iconBg: "bg-green-50",
      actionText: "Apply Now"
    },
    {
      id: 4,
      title: "Trademark Opposition",
      description: "Defend your trademark against opposition and secure your rights. Safeguard your brand now.",
      icon: <FaShieldAlt size={26} className="text-purple-600" />,
      iconBg: "bg-purple-50",
      actionText: "Apply Now"
    },
    {
      id: 5,
      title: "Trademark Assignment",
      description: "Transfer your trademark rights seamlessly with us. Click here to initiate the process.",
      icon: <FaFileExport size={26} className="text-red-500" />,
      iconBg: "bg-red-50",
      actionText: "Apply Now"
    },
    {
      id: 6,
      title: "Logo Design",
      description: "Get a professional logo design that defines your brand identity. Contact us to learn more.",
      icon: <FaPenNib size={26} className="text-blue-500" />,
      iconBg: "bg-blue-50",
      actionText: "Apply Now"
    },
    {
      id: 7,
      title: "Series Trademark",
      description: "Protect multiple trademarks under one application with Series Trademark. Click here to learn more.",
      icon: <FaLayerGroup size={26} className="text-orange-500" />,
      iconBg: "bg-orange-50",
      actionText: "Apply Now"
    }
  ];

  // Data for Copyright section (1 card)
  const copyrightServices = [
    {
      id: 1,
      title: "Copyright Registration",
      description: "Get exclusive rights over your creative work with Copyright Registration. Click here to protect the right now.",
      icon: <FaRegCopyright size={28} className="text-emerald-500" />,
      iconBg: "bg-emerald-50",
      // Note: The screenshot shows "Explore" for this specific card
      actionText: "Explore" 
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
          {/* Hero Section */}
          <section
              className="w-full py-20 px-4 md:px-8 text-center text-white"
              style={{
                  backgroundColor: '#111179',
              }}
          >
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">
            Trademark
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-light">
            Online Legal India can help protect your brand with our comprehensive Trademark and IPR services. From trademark registration to assignment, our experts ensure legal security, brand exclusivity, and seamless filing. Safeguard your intellectual property today!
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        
        {/* Trademark Services Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Trademark services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trademarkServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${service.iconBg}`}>
                  {service.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="text-[17px] font-bold text-gray-800 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center text-[#e8701a] font-semibold text-sm hover:text-orange-700 group mt-auto"
                >
                  {service.actionText}
                  <FaArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Copyright
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copyrightServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${service.iconBg}`}>
                  {service.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="text-[17px] font-bold text-gray-800 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center text-[#e8701a] font-semibold text-sm hover:text-orange-700 group mt-auto"
                >
                  {service.actionText}
                  <FaArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
      
    </main>
  );
}