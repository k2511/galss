import React from "react";
// Import your icons here or use SVG inline
// Example: import styleIcon from "../assets/style-icon.svg"; 

const data = [
  {
    icon: "👓", // Replace with your actual image/SVG
    title: "Style oriented",
    description:
      "Our talented designers, fashion experts and data-driven trends bring you the latest collections of over 10,000 styles.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "All about YOU",
    description:
      "Everything we do ensures our customers find their perfect pair of glasses by style, fit, optical needs, and budget.",
  },
  {
    icon: "👁️",
    title: "Eye-to-eye",
    description:
      "As glasses wearers, we know. We understand. We guarantee 100% satisfaction, and are at your service 24/7, 365 days a year.",
  },
  {
    icon: "🔍",
    title: "Experts",
    description:
      "Being an industry leader doesn’t come without responsibility. We continuously work to provide the highest quality with first class service.",
  },
  {
    icon: "💲",
    title: "Disruptive",
    description:
      "Our unique direct-to-consumer business model ensures you purchase with up to 70% off retail prices.",
  },
  {
    icon: "🤲",
    title: "Accessible",
    description:
      "As an essential part of our lives, corrective eyewear shouldn’t be a financial burden. We ensure prescription lenses start from only $29.",
  },
];

const PromiseValues = () => {
  return (
    <section className="w-full py-16 px-6 bg-white text-center">
      {/* Subtitle */}
      <p className="text-sm uppercase text-gray-500 tracking-widest mb-2">
        Our Promise And Values
      </p>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-12 max-w-3xl mx-auto">
        We are committed to matching our customers with their perfect pair.
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <div className="text-4xl mb-4">{item.icon}</div>
            {/* If using image: <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" /> */}
            <h3 className="font-semibold text-blue-700 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseValues;
