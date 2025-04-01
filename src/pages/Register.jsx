import React, { useState } from "react";
import heroImg from "../assets/TKT-9.jpg";
import { motion } from "framer-motion";

const Register = () => {
  const [activeTab, setActiveTab] = useState("dreamBig");

  const formLinks = {
    dreamBig:
      "https://docs.google.com/forms/d/e/1FAIpQLSdTQEVEHzOKdAOLhOghZBMkthOTbs3qlDWT-HJWBFOoW-q6nA/viewform?embedded=true",
    privateSession: "https://your-private-session-form-link.com", // replace when ready
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Hero Section */}
      <section className="w-full h-96 md:h-[500px] relative overflow-hidden mb-8">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="TKT Basketball Camp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center font-poppins"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            Register for TKT Programs
          </h1>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-white drop-shadow-lg font-medium max-w-xl">
            Select a program below to begin your registration.
          </p>
        </motion.div>
      </section>

      {/* Tab Selector */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("dreamBig")}
          className={`px-6 py-2 rounded-full border ${
            activeTab === "dreamBig"
              ? "bg-black text-white"
              : "bg-gray-100 text-black hover:bg-gray-200"
          } transition`}
        >
          Dream Big Camp
        </button>
        <button
          onClick={() => setActiveTab("privateSession")}
          className={`px-6 py-2 rounded-full border ${
            activeTab === "privateSession"
              ? "bg-black text-white"
              : "bg-gray-100 text-black hover:bg-gray-200"
          } transition`}
        >
          Private Session
        </button>
      </div>
      {/* Embedded Form */}
      <div className="w-full max-w-4xl h-[1600px] mx-auto">
        <iframe
          src={formLinks[activeTab]}
          title="Program Registration"
          className="w-full h-full border-none"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
      {/* Contact Info */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        Questions? Contact us at{" "}
        <a href="mailto:your-email@domain.com" className="underline">
          your-email@domain.com
        </a>
      </footer>
    </div>
  );
};

export default Register;
