import React from 'react';
import { 
  FaRegBuilding, 
  FaHandsHelping, 
  FaRegAddressCard, 
  FaUsers, 
  FaUser, 
  FaArrowRight, // This is already imported above
  FaGlobe,
  FaMoneyBill,
  FaRegIdCard
} from 'react-icons/fa';
import { FiUsers, FiUser } from 'react-icons/fi';
import { VscOrganization } from 'react-icons/vsc';
import { BsBank } from 'react-icons/bs';

export default function CompanyRegistrationPage() {
  const services = [
    {
      id: 1,
      title: "Private Limited Company",
      description: "Register your Private Limited Company hassle-free with us. Click here to learn more.",
      icon: <FaRegBuilding size={32} className="text-orange-600" />,
      iconBg: "bg-orange-50"
    },
    {
      id: 2,
      title: "LLP Registration",
      description: "Register your LLP with us easily and enjoy countless benefits. Explore to learn more.",
      icon: <FiUsers size={32} className="text-red-500" />,
      iconBg: "bg-red-50"
    },
    {
      id: 3,
      title: "One Person Company",
      description: "Set up your One Person Company and enjoy full control with limited liability. Click to learn.",
      icon: <FiUser size={32} className="text-purple-500" />,
      iconBg: "bg-purple-50"
    },
    {
      id: 4,
      title: "Public Limited Company",
      description: "Register your Public Limited Company and unlock investment opportunities. Explore to learn.",
      icon: <VscOrganization size={32} className="text-green-600" />,
      iconBg: "bg-green-50"
    },
    {
      id: 5,
      title: "Section 8 Company",
      description: "Start your non-profit organization with Section 8 Company registration. To learn more, click here.",
      icon: <FaHandsHelping size={32} className="text-red-500" />,
      iconBg: "bg-red-50"
    },
    {
      id: 6,
      title: "Business Registration License",
      description: "Get your business registered from us and operate legally without hassle. Click to get started.",
      icon: <FaRegAddressCard size={32} className="text-orange-500" />,
      iconBg: "bg-orange-50"
    },
    {
      id: 7,
      title: "Nidhi Company Registration",
      description: "Start your Nidhi Company and build a secure financial institution. Explore now to learn more.",
      icon: <BsBank size={32} className="text-green-500" />,
      iconBg: "bg-green-50"
    },
    {
      id: 8,
      title: "Indian Subsidiary Registration",
      description: "Expand your business with Subsidiary Company Registration. Click here for seamless registration.",
      icon: <FaGlobe size={32} className="text-teal-500" />,
      iconBg: "bg-teal-50"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      
          <section
              className="w-full py-20 px-4 md:px-8 text-center text-white"
              style={{
                  backgroundColor: '#111179',
              }}
          >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Company Registration
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-light">
            Explore Online Legal India to seamlessly register your business with expert guidance. From startups to established enterprises, we ensure hassle-free company registration with full legal compliance. Get your business registered today!
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.iconBg}`}>
                {service.icon}
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CHANGED: Using FaArrowRight instead of FiArrowRight */}
              <a 
                href="#" 
                className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-600 group mt-auto"
              >
                Apply Now 
                {/* <FiArrowRight ... /> was causing the error, now using FaArrowRight */}
                <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}

        </div>
      </section>
      
    </main>
  );
}