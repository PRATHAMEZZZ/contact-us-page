import React from "react";
import { GoArrowRight } from "react-icons/go";

const Office = () => {
  return (
    <div className="container mx-auto py-5  sm:py-10 md:py-10 lg:py-10">
      <p className="text-2xl md:text-5xl font-bold text-center my-10">
        Come stop by our office sometime
      </p>
      <div
        className="bg-cover bg-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
        style={{ backgroundImage: "url('/images/contact-us/office.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center sm:justify-start sm:items-end sm:left-10 sm:bottom-10 lg:bottom-14">
          <div className="pt-5 pb-5 sm:pt-20 sm:pb-10 md:pt-20 md:pb-10 lg:pt-20 lg:pb-10 bg-white bg-opacity-90 backdrop-blur-xs px-12 h-auto shadow-lg">
            <p className="text-[24px]  sm:text-[34px] md:text-[34px] lg:text-[34px] font-bold mb-4 text-left leading-[42.98px]">
              New York, USA
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] font-medium text-gray-500 mb-4 text-left leading-[30.34px] ">
              7652 W. 8th St. <br /> Massapequa, NY 11758
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] font-medium text-blue-500 leading-[30.34px] text-left">
              info@dsgnr.com
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] font-medium text-black-500 leading-[30.34px] text-left">
              (543) 890 98
            </p>
            <p className="flex items-center text-lg  sm:text-xl md:text-xl lg:text-xl font-bold text-black hover:text-blue-500  cursor-pointer mt-10">
              GET DIRECTIONS{" "}
              <span className="ml-2">
                <GoArrowRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
