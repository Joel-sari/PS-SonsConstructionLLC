import React from "react";
import { Home, Layers, FileText, Ruler } from "lucide-react";
import assets from "../assets2/assets";
import Title from "./Title.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Roofing",
      description:
        "All types of roofing — asphalt, metal, wood, and rubber. Built to last and protect your home year-round.",
      icon: Home,
    },
    {
      title: "Siding",
      description:
        "Vinyl, wood, and Hardie board siding expertly installed to boost durability and curb appeal.",
      icon: Layers,
    },
    {
      title: "Estimates",
      description:
        "Free, no-obligation estimates with transparent pricing and timelines to fit your project.",
      icon: FileText,
    },
    {
      title: "Interior & Exterior Work",
      description:
        "Comprehensive construction services inside and out, tailored to residential and commercial needs.",
      icon: Ruler,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInview="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-4 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-0 left-70 transform -translate-x-1/2 -z-10 dark:hidden"
      />
      <Title
        title="How can we help?"
        description="From strategy to execution we craft digital solutions to move your business forward."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
