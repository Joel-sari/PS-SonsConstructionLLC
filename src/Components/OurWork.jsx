import React from "react";
import Title from "./Title.jsx";
import assets from "../assets2/assets.js";

const OurWork = () => {
  const workData = [
    {
      title: "Roof Replacement in New Milford, CT",
      description:
        "We turn bold ideasinto powerful digital solutions that connect, enagage...",
      image: assets.psimage1,
    },
    {
      title: "New Siding in Berlin, CT",
      description: "We help you execute your plan and deliver results",
      image: assets.psimage1,
    },
    {
      title: "Roof Replacement in White Plains, NY",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.psimage1,
    },
  ];
  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
        {workData.map((workData, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer "
          >
            <img
              src={workData.image}
              className="w-full rounded-xl shadow-lg shadow-[#a33cfe]/40 border border-[#3801ff]/50"
              alt=""
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              {workData.title}
            </h3>
            <p className="text-sm opacity-60 w-5/6">{workData.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
