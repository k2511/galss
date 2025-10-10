import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EyewearGallery = () => {
  const brands = [
    'Ray-Ban', 'Oakley', 'Persol', 'COACH', 'VERSACE', 
    'BURBERRY', 'MICHAEL KORS', 'TUMI', 'All Brand'
  ];

  const recentlyViewed = [
    {
      name: 'Coach HC6065 Tortoise, Purple, M...',
      price: '$274 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6048 Brooklyn Tortoise,...',
      price: '$216 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6078 Teal Tortoise',
      price: '$234 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6089 Blue, Beige, Glitter',
      price: '$246 including lenses',
      image: '/api/placeholder/200/80'
    }
  ];

  const recommended = [
    {
      name: 'Coach HC6054 Elise Tortoise',
      price: '$240 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6237U Tortoise',
      price: '$246 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6230D Tortoise',
      price: '$246 including lenses',
      image: '/api/placeholder/200/80'
    },
    {
      name: 'Coach HC6259U Purple',
      price: '$246 including lenses',
      image: '/api/placeholder/200/80'
    }
  ];

  const [recentScrollPos, setRecentScrollPos] = useState(0);
  const [recommendScrollPos, setRecommendScrollPos] = useState(0);

  const scrollCarousel = (direction, type) => {
    const scrollAmount = 280;
    if (type === 'recent') {
      const newPos = direction === 'left' 
        ? Math.max(0, recentScrollPos - scrollAmount)
        : recentScrollPos + scrollAmount;
      setRecentScrollPos(newPos);
    } else {
      const newPos = direction === 'left'
        ? Math.max(0, recommendScrollPos - scrollAmount)
        : recommendScrollPos + scrollAmount;
      setRecommendScrollPos(newPos);
    }
  };

  const ProductCard = ({ product }) => (
    <div className="flex-shrink-0 w-64 px-2">
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-gray-50 rounded-lg p-6 mb-3 flex items-center justify-center h-32">
          <svg width="160" height="60" viewBox="0 0 160 60" className="text-gray-800">
            <ellipse cx="40" cy="30" rx="22" ry="25" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="120" cy="30" rx="22" ry="25" fill="none" stroke="currentColor" strokeWidth="3"/>
            <path d="M 62 30 Q 80 25 98 30" fill="none" stroke="currentColor" strokeWidth="3"/>
            <path d="M 18 30 L 5 28" stroke="currentColor" strokeWidth="3"/>
            <path d="M 142 30 L 155 28" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
        <p className="text-xs text-gray-600">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Brand Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 hover:shadow-sm transition-all whitespace-nowrap"
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We're all about finding you that perfect pair.
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Stylish, affordable eyewear designed for comfort and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all">
              Shop Eyeglasses
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-black bg-white text-black font-medium hover:bg-black hover:text-white transition-all">
              Shop Sunglasses
            </button>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Recently viewed and more
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollCarousel('left', 'recent')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              disabled={recentScrollPos === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${recentScrollPos}px)` }}
              >
                {recentlyViewed.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollCarousel('right', 'recent')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Recommended for you
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollCarousel('left', 'recommend')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              disabled={recommendScrollPos === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${recommendScrollPos}px)` }}
              >
                {recommended.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollCarousel('right', 'recommend')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyewearGallery;