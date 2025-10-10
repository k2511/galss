import React from "react";

const InsuranceSection = () => (
  <div className="w-full py-8 md:py-12 bg-blue-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
        Save an average of $100 with your vision insurance.
      </h2>
      <p className="text-gray-600 mb-6 text-sm md:text-base">
        Just by entering your info, find out your insurance benefits and save money on your purchase.
      </p>
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Insurance provider"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Member ID"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="date" 
              placeholder="Date of birth"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Check My Benefits
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default InsuranceSection;
