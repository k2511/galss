import React from "react";
import about2 from "../assets/AboutUs/about2.avif"; // Replace with your actual image
import about3 from "../assets/AboutUs/about3.avif";
import about4 from "../assets/AboutUs/about4.avif"; // Replace with your actual image
import { MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Shopping Experience */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={about2}
              alt="AI shopping experience"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Shopping experience.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The crucial combination of our AI matchmaking tools, consisting of
              our Quiz, Virtual Try-On, and Prescription Scanner app. Our
              customer-centric teams behind our eyewear-matching technologies
              ensure everyone finds their perfect fit and enjoys a seamless
              shopping experience.
            </p>
            <a
              href="#"
              className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Take Our Quiz <span>↗</span>
            </a>
          </div>
        </div>

        {/* Optical Labs */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Optical labs.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our state-of-the-art optical lab is where our team of optical
              experts ensure each pair of glasses are fit with the correct
              lenses. All are created with the finest raw materials, paying
              close attention to even the smallest details. We are proud to
              manufacture and fulfill your orders right here in Atlanta,
              Georgia, USA.
            </p>
            <p className="text-gray-600 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Atlanta, Georgia, USA
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={about3}
              alt="Optical lab glasses"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Our Brands Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start order-1 md:order-none">
            <img
              src={about4}
              alt="Our eyewear brands"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Brands.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Industry data and trend forecasting allow us to guarantee our
              customers stay ahead of the curve with the most fashion-forward,
              innovative brands and eyewear collections.
            </p>
            <a
              href="#"
              className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Read More <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
