import React from "react";

const InsuranceSection = () => (
  <div className="w-full min-h-screen bg-blue-50 py-8 md:py-0 flex items-center">
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center px-4">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center md:items-start items-center mb-8 md:mb-0 md:pr-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-left">
          Save an average of $100 with your vision insurance.
        </h2>
        <p className="text-gray-700 text-lg mb-9 text-left w-full md:max-w-lg">
          Start by entering your info. We'll apply your benefits automatically at checkout.
        </p>
        <div className="flex space-x-10 mt-2">
          <div className="flex items-center gap-2">
            {/* FSA/HSA Icon */}
            <span className="inline-block w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              {/* Replace next line with actual icon if needed */}
              <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#e5e7eb"/></svg>
            </span>
            <span className="text-gray-700 text-base font-medium">FSA/HSA Eligible</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Coupon icon */}
            <span className="inline-block w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <svg width="24" height="24" fill="none"><rect width="24" height="24" rx="6" fill="#e5e7eb"/></svg>
            </span>
            <span className="text-gray-700 text-base font-medium">Can be used with all coupons</span>
          </div>
        </div>
      </div>
      {/* Right side: Form card */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <form className="space-y-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Start by entering your info:
            </p>
            <input
              type="text"
              placeholder="* First name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="* Last name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                placeholder="* Date of birth"
                className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="* Zip code"
                className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:from-blue-700 transition"
            >
              Check My Benefits
            </button>
          </form>
          <p className="text-xs mt-4 text-gray-500">
            By continuing, you agree to our{' '}
            <a href="#" className="underline">
              Terms & Conditions
            </a>
            .<br />
            Visit our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default InsuranceSection;
