"use client"

import Link from "next/link"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const footerColumns = [
    {
      title: "Business Registration",
      links: [
        { name: "Private Limited Company", href: "/company-registration/private-company-registration" },
        { name: "Limited Liability Partnership", href: "/company-registration/llp-registration" },
        { name: "One Person Company", href: "/company-registration/one-person-company-registration" },
        { name: "Public limited Company", href: "/company-registration/private-company-registration" },
        { name: "Section 8 Company", href: "/company-registration/section-8-company-registration" },
      ],
    },
    {
      title: "Licenses",
      links: [
        { name: "FSSAI [Food License]", href: "/licenses/fssai-registration" },
        { name: "FSSAI Renewal", href: "/licenses/fssai-renewal" },
        { name: "IEC [Import/Export Code]", href: "/licenses/import-export-code" },
        { name: "IEC Certificate Modification", href: "/licenses/import-export-code-modification" },
        { name: "BIS Certificate", href: "/bis" },
      ],
    },
    {
      title: "Registration",
      links: [
        { name: "TM Registration", href: "/Trademark/registration" },
        { name: "TM Objection", href: "/Trademark/objection" },
        { name: "TM Renewal", href: "/Trademark/renewal" },
        { name: "Copyright Registration", href: "Trademark/copyright" },
        { name: "ISO Registration", href: "/iso-certification" },
      ],
    },
    {
      title: "GST",
      links: [
        { name: "GST Registration", href: "/gst-registration" },
        { name: "GST Filing", href: "/tax-accounting/gst-return-filing" },
        { name: "GST Modification", href: "/tax-accounting/gst-modification" },
        { name: "GST Cancellation", href: "/tax-accounting/gst-cancellation" },
      ],
    },
    {
      title: "Accounting & Tax",
      links: [
        { name: "PF-ESIC Registration", href: "/tax-accounting/pf-esic-registration" },
        { name: "PF-ESIC Return Filing", href: "/tax-accounting/pf-esic-return-filing" },
        { name: "Online Bookkeeping", href: "/tax-accounting/online-bookkeeping" },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:info@onlinelegalindia.com", label: "Email" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <footer className="w-full bg-[#0B1F4D] border-t border-slate-700 text-slate-200">
      {/* Top Section */}
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-16">
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3 className="mb-5 text-[15px] font-bold text-slate-100">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-slate-300 transition hover:text-white hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-12">
          <p className="text-[14px] font-bold text-slate-100">
            IndoFilings is a company registered under the Companies Act, 2016.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <h4 className="mb-3 text-[14px] font-bold text-slate-100">
            Website Disclaimer :
          </h4>
          <p className="text-[13px] leading-relaxed text-slate-300">
            This website is privately operated and not affiliated with any government entity. We do not represent or are affiliated with, endorsed by, or in any way connected to any government body or department. The form provided is not for official registration purposes; rather, it's designed to gather information from our clients to help us better understand their business or needs. By continuing to use this website, you acknowledge that we are a private company. We offer assistance based on customer requests, and the fees collected on this website are charged as a platform fee. We reserve the right to outsource matters as deemed necessary. We are in the process of giving our brand a new name. Stay tuned for updates. This platform does not offer legal services, nor does it provide legal advice or representation. Do you require legal assistance? We strongly recommend consulting with a qualified lawyer or law firm.
          </p>
        </div>

        {/* Social + Quick Links Row */}
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Left: Social + App Stores */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[14px] font-bold text-slate-100">Follow Us</h4>
            
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B1F4D] transition hover:scale-110 hover:bg-slate-200"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>

            {/* App Store Buttons */}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800"
              >
                <FaGooglePlay size={22} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] uppercase">Get it on</span>
                  <span className="text-[13px] font-semibold">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800"
              >
                <FaApple size={24} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] uppercase">Download on the</span>
                  <span className="text-[13px] font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#0B1F4D] border-t border-slate-700">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-2 px-6 py-5 text-center lg:px-16">
          <p className="text-[13px] font-medium text-slate-300">
            Copyrights 2016 - 2026 IndoFilings.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] text-slate-300">
            <Link href="/refund-policy" className="transition hover:text-white hover:underline">
              Refund Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/privacy-policy" className="transition hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/terms" className="transition hover:text-white hover:underline">
              Terms and Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}