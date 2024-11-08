import React from "react";
import {
  FaSpotify,
  FaDropbox,
  FaReddit,
  FaGoogle,
  FaStripe,
  FaDhl,
} from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { TbBrandAirbnb } from "react-icons/tb";

const Brands = () => {
  const brandData = [
    { Icon: FaSpotify, name: "Spotify" },
    { Icon: FaDropbox, name: "DropBox" },
    { Icon: SiTesla, name: "Tesla" },
    { Icon: FaReddit, name: "Reddit" },
    { Icon: FaGoogle, name: "Google" },
    { Icon: FaStripe, name: "" },
    { Icon: FaDhl, name: "" },
    { Icon: TbBrandAirbnb, name: "Airbnb" },
  ];

  return (
    <div className="container mx-auto py-10">
      <p className="text-center text-[18px] sm:text-[44px] md:text-[44px] font-bold leading-[40.62px]  sm:leading-[55.62px] md:leading-[55.62px] lg:leading-[55.62px] mb-0 sm:mb-10 md:mb-10 lg:mb-10 decoration-skip-ink ">
        We worked with the world's biggest <br className="" />
        brands and the most innovative startups
      </p>
      <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex sm:grid md:grid lg:grid gap-x-4 gap-y-4 sm:gap-0  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 min-w-[100%] sm:min-w-0">
          {brandData.map((brand, index) => (
            <div
              className="snap-center flex-shrink-0 min-w-[80vw] sm:min-w-0"
              key={index}
            >
              <BrandCard Icon={brand.Icon} name={brand.name} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandCard = ({ Icon, name, index }) => {
  let borderClasses = "";
  if (index === 0) {
    borderClasses = "md:border-b-2 md:border-r-2 lg:border-r-2 lg:border-b-2 ";
  } else if (index === 1) {
    borderClasses = "md:border-b-2 lg:border-r-2 lg:border-b-2";
  } else if (index === 2) {
    borderClasses = "md:border-b-2 md:border-r-2 lg:border-b-2 lg:border-r-2";
  } else if (index === 3) {
    borderClasses = "md:border-b-2 lg:border-b-2";
  } else if (index === 4) {
    borderClasses = "sm:border-b-2 md:border-r-2 lg:border-r-2 lg:border-b-0";
  } else if (index === 5) {
    borderClasses = "sm:border-b-2 lg:border-r-2 lg:border-b-0";
  } else if (index === 6) {
    borderClasses = "md:border-r-2 lg:border-r-2";
  } else if (index === 7) {
    borderClasses = "";
  }

  return (
    <div
      className={`py-20 ${borderClasses} flex items-center justify-center space-x-2`}
    >
      <Icon size={100} />
      <p className="text-4xl font-semibold">{name}</p>
    </div>
  );
};

export default Brands;
