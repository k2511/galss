import React from "react";
import about1 from "../assets/AboutUs/about1.avif"; // Replace with your actual image path

const OurStory = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-3">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            We are glasses wearers.
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For us, glasses are more than a vision correction device or a
            fashion accessory. Glasses are an extension of who we are, a part of
            our identity. They tell the first chapter of our story. “Finding
            that perfect pair is like finding the missing piece of your personal
            puzzle”. When you get it right, you are overcome with a feeling of
            unparalleled confidence and are ready to take on anything that comes
            your way. But we know finding that perfect pair is easier said than
            done.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That is why we built{" "}
            <a
              href="https://www.glassesusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GlassesUSA.com
            </a>
            . Providing quality eyewear at an affordable price is our business.
            Enhancing the life of our customers by matching you with your
            perfect pair of glasses is our passion. We promise to find you the
            perfect pair of glasses that fits your style, size, budget, and
            eyewear needs.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={about1}
            alt="Optimax Founders"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
        <div className="mt-10 md:mt-0 md:col-span-2 text-center bg-sky-500 h-44 w-full flex items-center justify-center rounded-lg shadow-lg">
            <p className="text-white">We have perfected the art of pairing you with glasses, delivering them to your doorstep, and everything in between.</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
