import React from "react";
import { Truck, RotateCcw } from "lucide-react"; // for icons

const InsuranceFormSection = () => {
  return (
    <div className="bg-[#d2e6f6] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3b73] mb-4 leading-snug">
            Save an average of $100 with your vision insurance.
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Start by entering your info. We'll apply your benefits automatically
            at checkout.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap items-center gap-8 mt-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#1f3b73]" />
              <span>
                <strong>Free Shipping</strong>
                <br />
                and Returns
              </span>
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-[#1f3b73]" />
              <span>
                <strong>100% Money</strong>
                <br />
                Back Guarantee
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Trustpilot_logo.svg"
                alt="Trustpilot"
                className="h-5"
              />
              <span>
                111,146+ • Rated <strong>‘Excellent’</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className=" rounded-lg p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="* First Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="text"
              placeholder="* Last Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                placeholder="* Date of Birth"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                type="text"
                placeholder="* Zip Code"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-md hover:opacity-90 transition-all"
            >
              Check My Benefits
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>
            . <br />
            Visit our{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceFormSection;
