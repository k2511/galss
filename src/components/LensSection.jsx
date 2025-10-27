import React, { useState } from "react";
import lens8 from "../assets/lenses/lens8.jpeg";
import lens9 from "../assets/lenses/lens9.jpg";
import lens10 from "../assets/lenses/lens10.jpeg";
import lens11 from "../assets/lenses/lens11.jpeg";
import lens12 from "../assets/lenses/lens12.jpeg";
import lens13 from "../assets/lenses/lens13.jpeg";

const lensOptions = [
  {
    id: "blue-light",
    name: "Blue Light",
    image: lens8,
    description:
      "These lenses offer the best solution to deal with the harmful effects of blue light emissions from digital screens (phones, tablets, computers, etc.).",
    features: [
      "Blocks harmful blue light rays",
      "Improves visual performance",
      "Eye fatigue relief",
      "Improves sleep quality",
    ],
    shopLink: "#blue-light",
  },
  {
    id: "transitions",
    name: "Transitions",
    image: lens9,
    description:
      "Light Adaptive Lenses are a type of lens that automatically adjusts to the changing light conditions. They can darken or lighten in response to changes in the level of ultraviolet (UV) and visible light.",
    features: [
      "Automatically adjusts to lighting",
      "Reduces glare",
      "Comfortable vision indoors & outdoors",
      "UV protection",
    ],
    shopLink: "#transitions",
  },
  {
    id: "hydrophobic",
    name: "Hydrophobic",
    image: lens10,
    description:
      "The Super Hydrophobic coating is the most effective way of keeping your lenses clean. It repels water, dust and debris from the lens surface, keeping it silk-smooth and your vision crystal clear.",
    features: [
      "Water repellent",
      "Prevents fogging",
      "Easy to clean",
      "Scratch resistant",
    ],
    shopLink: "#hydrophobic",
  },
  {
    id: "polarized",
    name: "Polarized",
    image: lens11,
    description:
      "Polarized sunglasses are made to block out and reduce glare reflecting off surfaces like water or glass. Glare distorts color and obstructs your vision. Polarized lenses enhance color definition and increase clarity outdoors.",
    features: [
      "Reduces glare",
      "Enhances contrast",
      "Improves outdoor visibility",
      "UV protection",
    ],
    shopLink: "#polarized",
  },
  {
    id: "tinted",
    name: "Tinted Lenses",
    image: lens12,
    description:
      "Comes in many different colors, solid or gradient. You can choose your own style and see the world as you want to see it. Available in different level of lens darkness, they also provide your eyes with the comfort they deserve.",
    features: [
      "Sun protection",
      "Stylish appearance",
      "Comfortable outdoor usage",
      "Available in multiple colors",
    ],
    shopLink: "#tinted",
  },
  {
    id: "mirrored",
    name: "Mirrored",
    image: lens13,
    description:
      "Available in a variety of colors, mirrored lenses offer a whole lot of style along with enhanced glare protection and super crisp vision.",
    features: [
      "Glare reduction",
      "Reflective style",
      "UV protection",
      "Durable coating",
    ],
    shopLink: "#mirrored",
  },
];

const LensSection = () => {
  const [activeLens, setActiveLens] = useState(lensOptions[0]);

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Customize your perfect pair with special lenses and coatings
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {lensOptions.map((lens) => (
          <button
            key={lens.id}
            className={`px-6 py-2 rounded-full border transition ${
              activeLens.id === lens.id
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveLens(lens)}
          >
            {lens.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={activeLens.image}
            alt={activeLens.name}
            className="rounded-xl shadow-md w-full"
          />
        </div>

        <div>
          <p className="text-gray-700 mb-6">{activeLens.description}</p>
          <ul className="space-y-4 text-gray-700">
            {activeLens.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>✅</span> {feature}
              </li>
            ))}
          </ul>
          <a
            href={activeLens.shopLink}
            className="text-blue-600 font-medium inline-block mt-6 hover:underline"
          >
            Shop {activeLens.name} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LensSection;
