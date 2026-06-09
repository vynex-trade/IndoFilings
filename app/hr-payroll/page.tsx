"use client";

import React, { useRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { 
  FaHandshake, 
  FaUserShield, 
  FaFileInvoiceDollar, 
  FaProjectDiagram, 
  FaCaretDown 
} from 'react-icons/fa';


export default function LandingPage() {
  // Reference for the scrollable container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling left and right
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* SECTION 1: Why Most Businesses Struggle */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1A3A] mb-8 leading-tight">
              Why Most Businesses Struggle<br />with HR & Compliance
            </h1>
            <div className="space-y-6">
              {[
                { title: "Payroll Errors:", desc: "Payroll mistakes lead to employee dissatisfaction, disputes, and costly corrections every month." },
                { title: "Compliance Confusion:", desc: "Confusion around PF, ESIC & labour law compliance puts businesses at risk of audits and penalties." },
                { title: "Wage Code Misalignment:", desc: "Salary structures out of sync with the new wage code expose companies to legal liability." },
                { title: "Notices & Penalties:", desc: "Risk of government notices, audits, and heavy financial penalties with no proactive monitoring." },
                { title: "Unresolved Disputes:", desc: "No structured process to handle employee grievances before they escalate into legal problems." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheck className="text-emerald-500 mt-1 shrink-0" size={24} strokeWidth={3} />
                  <p className="text-slate-700 text-sm md:text-base">
                    <span className="font-semibold text-slate-900">{item.title}</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mockup Collage */}
          <div className="relative h-[400px] md:h-[500px] w-full hidden md:block">
             {/* Decorative Dots */}
             <div className="absolute right-0 top-10 w-24 h-48 bg-[radial-gradient(#f97316_3px,transparent_3px)] [background-size:16px_16px]"></div>
             <div className="absolute left-10 bottom-0 w-16 h-16 bg-[radial-gradient(#f97316_3px,transparent_3px)] [background-size:16px_16px]"></div>
            
             {/* Image 1 Mock */}
             <div className="absolute top-0 left-0 w-3/4 h-2/3 bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team discussing" className="object-cover w-full h-full opacity-90" />
             </div>
             
             {/* Image 2 Mock */}
             <div className="absolute bottom-10 right-10 w-2/3 h-1/2 bg-slate-300 rounded-2xl border-4 border-white overflow-hidden shadow-xl z-10">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Accounting" className="object-cover w-full h-full" />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Services / Carousel */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A3A] mb-12 max-w-3xl">
          We don't just process payroll — we build a complete compliance and dispute prevention system for your business.
        </h2>

        {/* Cards Grid / Carousel Track */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          {[
            {
              icon: <FaHandshake className="text-orange-500" size={36} />,
              title: "Employer-Employee Dispute Management",
              points: ["Salary disputes after restructuring", "Exit conflicts & F&F disagreements", "PF deduction concerns"]
            },
            {
              icon: <FaUserShield className="text-orange-500" size={36} />,
              title: "POSH Compliance Support & Consultancy",
              points: ["ICC (Internal Complaints Committee) setup support", "POSH policy drafting & implementation", "Complaint handling workflow guidance"]
            },
            {
              icon: <FaFileInvoiceDollar className="text-orange-500" size={36} />,
              title: "Payroll & HR Operations",
              points: ["Monthly payroll processing", "Salary structuring and deductions", "Full & Final (F&F) settlements"]
            },
            {
              icon: <FaProjectDiagram className="text-orange-500" size={36} />,
              title: "Compliance & Salary Structuring",
              points: ["PF (Provident Fund) management", "ESIC compliance", "Professional Tax (P-Tax)"]
            }
          ].map((service, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[320px] w-full max-w-[320px] flex-shrink-0 snap-start bg-white border border-slate-200 rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-lg font-bold text-[#0A1A3A] mb-6 min-h-[56px] leading-snug">{service.title}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="text-orange-500 text-[15px] font-bold flex items-center justify-center gap-1.5 w-full hover:text-orange-600 transition-colors mt-auto pt-4 group">
                Read more <FaCaretDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Working Carousel Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors active:scale-95"
              aria-label="Scroll left"
            >
                <span className="text-sm font-semibold">&lt;</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#0A1A3A] text-white flex items-center justify-center hover:bg-[#0A1A3A]/90 transition-colors shadow-md active:scale-95"
              aria-label="Scroll right"
            >
                <span className="text-sm font-semibold">&gt;</span>
            </button>
        </div>
      </section>

      {/* SECTION 3: How It Works */}
      <section className="py-20 px-4 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] text-center mb-16">
            How It Works
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-orange-300 -z-10"></div>

            {[
              { num: "1", title: "Consultation", desc: "Understand your business and workforce" },
              { num: "2", title: "Setup", desc: "HRMS, payroll system, and compliance setup" },
              { num: "3", title: "Execution", desc: "Monthly payroll processing and all statutory compliance handled for you." },
              { num: "4", title: "Support", desc: "Ongoing audits, monitoring, and dispute assistance" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-full md:w-1/4 mb-10 md:mb-0 relative z-10">
                <div className="w-20 h-20 rounded-full bg-white border-[3px] border-orange-400 flex items-center justify-center text-2xl font-bold text-[#0A1A3A] mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#0A1A3A] text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Pricing */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] text-center mb-16">
          Flexible Plans for Every Business Size
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Starter Plan",
              emp: "0-30 Employees",
              price: "₹10K / month",
              features: ["HRMS setup", "Payroll setup (PF, ESIC, P-Tax)", "Statutory registrations", "HR documentation kit (offer letters, policies, exit letters)"],
              btnText: "Choose Plan",
              popular: false
            },
            {
              name: "Growth Plan",
              emp: "30-100 Employees",
              price: "₹30K / month",
              prefix: "All the benefits of Starter Plan, plus:",
              features: ["End-to-end payroll processing", "PF, ESIC, P-Tax filings", "HRMS management"],
              btnText: "Choose Plan",
              popular: true
            },
            {
              name: "Enterprise Plan",
              emp: "100+ Employees",
              price: "Talk to our experts",
              prefix: "All the benefits of Growth Plan, plus:",
              features: ["Talent acquisition - Recruitment", "Multi-location payroll & HRMS", "Advanced salary structuring"],
              btnText: "Contact Us",
              popular: false
            },
            {
              name: "Custom Plan",
              emp: "Flexible pricing",
              price: "Choose only the services you need",
              features: ["HRMS setup", "Payroll & Compliance", "POSH Compliance"],
              btnText: "Contact Us",
              popular: false
            }
          ].map((plan, idx) => (
            <div key={idx} className={`relative flex flex-col bg-white rounded-xl p-8 ${plan.popular ? 'border-2 border-orange-500 shadow-md transform lg:-translate-y-4' : 'border border-slate-200 shadow-sm'}`}>
              
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full w-max">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#0A1A3A] mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.emp}</p>
                <div className="font-bold text-[#0A1A3A] text-xl">{plan.price}</div>
              </div>

              <div className="flex-grow">
                {plan.prefix && <p className="text-sm font-semibold text-[#0A1A3A] mb-4">{plan.prefix}</p>}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <FiCheck className="text-emerald-500 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col items-center">
                <button className="text-orange-500 text-sm font-semibold mb-6 hover:text-orange-600">
                  Read more
                </button>
                <button className={`w-full py-3 rounded-md font-semibold transition-colors active:scale-95 duration-200 ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50'}`}>
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <section className="bg-[#111179] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Wait for a Compliance Notice
          </h2>
          <p className="text-slate-300 mb-8 font-medium">
            Fix your payroll and compliance before it becomes a problem
          </p>
          <button className="bg-white text-[#0A1A3A] font-bold py-3 px-8 rounded-md hover:bg-slate-100 transition-colors shadow-lg active:scale-95 duration-200">
            Contact Us
          </button>
        </div>
      </section>

      {/* Added global styles for hiding standard scrollbars but allowing swipe on mobile */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}