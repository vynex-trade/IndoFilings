import React from 'react';
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
  FaGlobe
} from 'react-icons/fa';

export default function TaxCompliancePage() {
  
  // Data for "GST & TDS" section
  const gstData = [
    {
      id: 1,
      title: "GST Registration",
      description: "Register your business for GST and stay tax-compliant. Click here to get started.",
      icon: <FaFileInvoice size={20} className="text-teal-600" />,
      iconBg: "bg-teal-50"
    },
    {
      id: 2,
      title: "GST Return Filing",
      description: "File your GST returns on time and avoid penalties. Explore now for seamless filing.",
      icon: <FaFileAlt size={20} className="text-purple-600" />,
      iconBg: "bg-purple-50"
    },
    {
      id: 3,
      title: "GST Nil Return Filing",
      description: "No transactions yet? File your GST Nil Return hassle-free through expert CA/CS. Click to learn more.",
      icon: <FaRegFileAlt size={20} className="text-pink-500" />,
      iconBg: "bg-pink-50"
    },
    {
      id: 4,
      title: "GST Modification",
      description: "Update or modify your GST registration details easily. Explore now to learn more.",
      icon: <FaEdit size={20} className="text-orange-500" />,
      iconBg: "bg-orange-50"
    },
    {
      id: 5,
      title: "GSTR-9 Annual Filing",
      description: "Ensure compliance by filing your GSTR-9 Annual Return. Click here to file today.",
      icon: <FaCalendarCheck size={20} className="text-green-700" />,
      iconBg: "bg-green-50"
    },
    {
      id: 6,
      title: "GST LUT Filing",
      description: "Export without paying IGST by filing your GST LUT. Explore now to get our support.",
      icon: <FaFileExport size={20} className="text-blue-600" />,
      iconBg: "bg-blue-50"
    },
    {
      id: 7,
      title: "GST E-Way Bill",
      description: "Generate your GST E-Way Bill effortlessly for smooth transportation. Click here to learn more.",
      icon: <FaTruckMoving size={20} className="text-red-500" />,
      iconBg: "bg-red-50"
    },
    {
      id: 8,
      title: "TDS Return Filing",
      description: "Accurate, timely filing to avoid penalties and ensure compliance. Click to learn more.",
      icon: <FaFileInvoiceDollar size={20} className="text-cyan-500" />,
      iconBg: "bg-cyan-50"
    }
  ];

  // Data for "Payroll Compliance" section
  const payrollData = [
    {
      id: 1,
      title: "PF-ESIC Registration",
      description: "Register for PF & ESIC to provide social security benefits to employees. Click here to learn.",
      icon: <FaFileContract size={20} className="text-orange-500" />,
      iconBg: "bg-orange-50"
    },
    {
      id: 2,
      title: "PF-ESIC Return Filing",
      description: "Ensure timely PF & ESIC return filing to stay compliant. Click here for seamless filing assistance.",
      icon: <FaUsers size={20} className="text-amber-700" />,
      iconBg: "bg-amber-50"
    }
  ];

  // Data for "Annual Compliances & Others" section
  const annualData = [
    {
      id: 1,
      title: "Annual Compliance & Filing",
      description: "Stay compliant with our hassle-free annual filing services. Click here to ensure timely compliance.",
      icon: <FaClipboardCheck size={20} className="text-fuchsia-600" />,
      iconBg: "bg-fuchsia-50"
    },
    {
      id: 2,
      title: "Tax Planning & Consultancy",
      description: "Optimize your tax savings with exclusive tax planning services. Explore now for personalized consultancy.",
      icon: <FaCalculator size={20} className="text-blue-500" />,
      iconBg: "bg-blue-50"
    },
    {
      id: 3,
      title: "Online Bookkeeping",
      description: "Manage your finances effortlessly with our Online Bookkeeping services. Click here to explore more.",
      icon: <FaBook size={20} className="text-indigo-800" />,
      iconBg: "bg-indigo-50"
    },
    {
      id: 4,
      title: "12A-80G-CSR",
      description: "Want 12A-80G-CSR Registration services for your NGO? Contact us to get assistance.",
      icon: <FaHandHoldingUsd size={20} className="text-emerald-500" />,
      iconBg: "bg-emerald-50"
    },
    {
      id: 5,
      title: "Project Report",
      description: "Need a detailed Project Report for funding or business planning? To learn more, click here.",
      icon: <FaProjectDiagram size={20} className="text-pink-600" />,
      iconBg: "bg-pink-50"
    },
    {
      id: 6,
      title: "DPT-3 Filing",
      description: "File your DPT-3 return on time to avoid penalties. Click here to get expert assistance.",
      icon: <FaFileArchive size={20} className="text-amber-800" />,
      iconBg: "bg-amber-50"
    },
    {
      id: 7,
      title: "NGO DARPAN Registration",
      description: "Register your NGO with NGO DARPAN for government recognition. Click here learn more.",
      icon: <FaGlobe size={20} className="text-cyan-600" />,
      iconBg: "bg-cyan-50"
    }
  ];

  // Reusable Card Component to keep the JSX clean
  const ServiceCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${item.iconBg}`}>
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
      <a 
        href="#" 
        className="mt-auto inline-flex items-center text-[#e8701a] font-semibold text-sm hover:text-orange-700 group w-fit"
      >
        Apply Now 
        <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section
              className="w-full py-20 px-4 md:px-8 text-center text-white"
              style={{
                  backgroundColor: '#111179',
              }}
          >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-[40px] font-bold mb-4 tracking-wide">
            Tax & Compliance
          </h1>
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto font-light">
            Stay tax-compliant with Online Legal India's expert solutions. From tax planning to annual filings, we handle all your compliance needs to keep your business legally secure. Ensure hassle-free tax management today!
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 space-y-16">
        
        {/* GST & TDS Section */}
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

        {/* Payroll Compliance Section */}
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

        {/* Annual Compliances & Others Section */}
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