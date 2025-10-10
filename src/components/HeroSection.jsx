import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/60/30" alt="Ray-Ban" className="h-8" />
              <span className="ml-3 text-sm font-medium text-gray-600">Official Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Icons live on in glasses
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the latest Ray-Ban collection with exclusive designs and premium quality frames.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Shop Now
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/500/400" 
              alt="Ray-Ban Glasses" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
