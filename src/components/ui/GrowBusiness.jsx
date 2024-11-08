import React from "react";

const GrowBusiness = () => {
  return (
    <div
      className="bg-cover bg-center py-20 sm:py-36 md:py-36 lg:py-36 flex flex-col justify-center items-center space-y-8 sm:space-y-8 md:space-y-8 lg:flex-row lg:space-x-12 relative mt-0 sm:mt-10 md:mt-20 lg:mt-20"
      style={{
        backgroundImage: "url('/images/contact-us/banner.jpg')",
      }}
    >
      <div className="leading-tight text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-neutral-900 tracking-normal text-center md:text-left">
        <p>Grow Your Business.</p>
        <p>Build Great Products.</p>
      </div>

      <button className="py-4 px-6 bg-neutral-900 text-white font-small hover:bg-neutral-800 disabled:bg-neutral-400 transition-all text-xl sm:text-2xl">
        Book a free call
      </button>
    </div>
  );
};

export default GrowBusiness;
