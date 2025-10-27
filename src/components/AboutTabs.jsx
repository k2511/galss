import React, { useState } from "react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("Our Story");

  const tabs = [
    "Our Story",
    "Brands & Collaborations",
    "Impact",
    "News & Media",
    "About Optimax Eyewear",
  ];

  const tabContent = {
    "Our Story": (
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        At Optimax Eyewear, our journey began with a simple mission: to help
        everyone see better while looking their best. From handcrafted frames to
        precision lenses, every detail is designed with care.
      </p>
    ),
    "Brands & Collaborations": (
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        We’re proud to partner with world-renowned eyewear brands and
        collaborate with visionary designers who share our commitment to quality
        and innovation.
      </p>
    ),
    Impact: (
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Our impact goes beyond vision — we champion sustainability, ethical
        sourcing, and community outreach to make the world a clearer, kinder
        place.
      </p>
    ),
    "News & Media": (
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Stay up to date with the latest Optimax stories, product launches,
        campaigns, and events happening around the world.
      </p>
    ),
    "About Optimax Eyewear": (
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Optimax Eyewear is dedicated to excellence in vision care and design,
        offering premium lenses, stylish frames, and cutting-edge optical
        technology.
      </p>
    ),
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-sky-500 text-center py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
        We’re all about finding you your perfect pair.
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeTab === tab
                ? "bg-white text-blue-600 font-medium shadow-md"
                : "bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="transition-opacity duration-500 ease-in-out">
        {tabContent[activeTab]}
      </div>
    </section>
  );
};

export default AboutTabs;
