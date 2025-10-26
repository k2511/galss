import React from "react";
import { FiArrowRight } from "react-icons/fi";

import about5 from "../assets/AboutUs/about5.jpg";
import about6 from "../assets/AboutUs/about6.jpg";
import about7 from "../assets/AboutUs/about7.jpg";
import about8 from "../assets/AboutUs/about8.jpg";
import about9 from "../assets/AboutUs/about9.jpg";
import about11 from "../assets/AboutUs/about11.jpg";

const exploreData = [
  { image: about5, title: "Brands & Collaborations" },
  { image: about6, title: "Impact" },
  { image: about7, title: "News & Media" },
  { image: about8, title: "Optimax Eyewear" },
  { image: about9, title: "Affiliate Program" },
  { image: about11, title: "Creators’ Community" },
];

const ExploreMore = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <h2 className="text-2xl font-semibold leading-snug">
            Explore more <br /> about us.
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreData.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex justify-between items-center w-full">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <FiArrowRight className="text-gray-500 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
