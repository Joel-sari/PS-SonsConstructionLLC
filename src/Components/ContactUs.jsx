import React, { useState, useEffect } from "react";
import Title from "./Title";
import assets from "../assets2/assets";
import { motion } from "motion/react";
const ContactUs = () => {
  const [banner, setBanner] = useState({
    show: false,
    type: "success",
    text: "",
  });

  // Auto-hide banner after 3.5s
  useEffect(() => {
    if (!banner.show) return;
    const id = setTimeout(
      () => setBanner((b) => ({ ...b, show: false })),
      3500
    );
    return () => clearTimeout(id);
  }, [banner.show]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4f66cd3f-d58a-4f42-81c8-1bbf3dc8d32e");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setBanner({
          show: true,
          type: "success",
          text: "Thank you for your submission!",
        });
        event.target.reset();
      } else {
        setBanner({
          show: true,
          type: "error",
          text: data.message || "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      setBanner({
        show: true,
        type: "error",
        text: error.message || "Network error. Please try again.",
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {/* Top-center inline banner (no toast) */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed left-1/2 top-3 z-[2147483647] -translate-x-1/2 transition-all duration-300 ${
          banner.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {banner.show && (
          <div className="pointer-events-auto flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
            {/* Icon */}
            {banner.type === "success" ? (
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </span>
            )}

            <span className="text-lg font-bold text-slate-900">
              {banner.text}
            </span>

            {/* Dismiss */}
            <button
              type="button"
              onClick={() => setBanner((b) => ({ ...b, show: false }))}
              className="ml-1 rounded-md p-1 text-slate-500 hover:bg-slate-100"
              aria-label="Dismiss"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <Title
        title="Reach out to us"
        description="From strategy to execution we craft digital solutions that move your business forward"
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Submit <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
