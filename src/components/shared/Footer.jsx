import React from "react";
import { FaEnvelope, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";

const footerLinks = [
  {
    title: "What We Do",
    links: [
      { name: "Intro", url: "/intro" },
      { name: "Home", url: "/home" },
      { name: "Work", url: "/work" },
      { name: "Pricing", url: "/pricing" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    title: "What We Are",
    links: [
      { name: "About", url: "/about" },
      { name: "News", url: "/news" },
      { name: "Testimonials", url: "/testimonials" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Flexbox container for the main content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-between">
          {/* First Column (Company Info) */}
          <div className="lg:w-1/3">
            <h3 className="text-5xl font-semibold mb-4">dsgnr.</h3>
            <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] font-medium leading-[35px] text-left my-10">
              Dsgnr. is an award-winning creative and design agency <br /> based
              in New York, USA.
            </p>

            <div className="flex items-center space-x-10 border border-1 border-[#FEC00A] min-w-[100px] px-8 py-4">
              <FaEnvelope size={40} />
              <a
                href="mailto:info@dsgnr.com"
                className="text-white-400 text-xl font-bold"
              >
                info@dsgnr.com
              </a>
            </div>
          </div>

          <div className="flex justify-between  flex-wrap gap-x-20">
            {footerLinks.map((column, index) => (
              <div key={index} className="mb-8 lg:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold mb-4">
                  {column.title}
                </h3>
                <ul>
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        className="block py-1 text-white hover:text-[#FEC00A] text-xl sm:text-2xl md:text-2xl lg:text-2xl"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-16 text-sm justify-between items-center">
          <div className="flex text-2xl space-x-10 mb-4 lg:mb-0">
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>

          <div className="flex space-x-10 items-center">
            <FaTwitter size={30} />
            <FaFacebookF size={30} />
            <FaGooglePlusG size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
