import React from "react";
import assets from "../assets2/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium"> Trusted by over 100+ people</p>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl"leading-[95px] max-w-5xl'>
        Building strong homes, building
        <span className="bg-gradient-to-r from-[#5044E5] to-[#3B82F6] bg-clip-text text-transparent">
          &nbsp;stronger&nbsp;
        </span>
        <span>families</span>
      </h1>
      <p className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-300 sm:max-w-lg pb-3 italic">
        From shingles to skylights, metal to siding, PS & Sons Construction
        delivers quality craftsmanship for every home, every style, every
        family.
      </p>
      <div className="relative">
        <img
          src={assets.pswinterroof}
          alt=""
          className="w-full max-w-6xl rounded-xl shadow-lg shadow-[#3B82F6]/40 border border-[#3B82F6]/50"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
