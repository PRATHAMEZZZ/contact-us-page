import React from "react";
import { HiPlus } from "react-icons/hi";
const Cards = ({ title, number }) => {
  return (
    <div className="py-5 flex justify-center flex-col space-y-4 w-[300px] items-center sm:items-start md:items-start lg:items-start">

      <p className="text-yellow-400 text-[40px] sm:text-[60px] md:text-[50px] lg:text-[50px] font-lg sm:font-bold md:font-bold lg:font-bold leading-[0px] sm:leading-[75.84px] md:leading-[0] lg:leading-[75.84px] text-left flex gap-x-1 items-center">
        {number}{" "}
        <span>
          <HiPlus />
        </span>
      </p>

      <p className="text-white text-[20px] sm:text-[28px] md:text-[20px] lg:text-[24px] font-xs sm:font-medium md:font-medium lg:font-medium  leading-[0px] sm:leading-[35.39px] md:leading-[25.39px] lg:leading-[0.39px] text-left">
        {title}
      </p>
    </div>
  );
};

export default Cards;
