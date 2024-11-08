import React from "react";
import { RiMouseLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-[80vh]  sm:min-h-[90vh] md:min-h-[90vh] lg:min-h-[90vh] relative"
        style={{ backgroundImage: "url('/images/contact-us/contact-img.jpg')" }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-4xl text-white font-bold py-5">dsgnr.</div>
          <div className="flex items-center justify-center flex-grow">
            <p
              className="text-center text-[#101010] font-bold text-[19px] leading-[110px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              md:text-[40px] md:leading-[50px]  lg:text-[60px] lg:leading-[80px] text-[33px] leading-[40px] "
            >
              We would love to <br /> hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[10vh] flex justify-center items-center animate-slide-top-to-bottom ">
        <RiMouseLine size={50} />
      </div>
    </>
  );
};

export default Header;
