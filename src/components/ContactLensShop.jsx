import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactLensShop() {
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    contactLensType: true,
    manufacturer: true,
    prescriptionType: true,
    price: true
  });

  const [brandView, setBrandView] = useState('popular'); // 'az', 'popular', 'all'

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const allBrands = [
    { name: 'Acuvue', count: 22 },
    { name: 'Air Optix', count: 8 },
    { name: 'Avaira Vitality', count: 3 },
    { name: 'Biofinity', count: 10 },
    { name: 'Biomedics', count: 2 },
    { name: 'Biotrue', count: 6 },
    { name: 'Clariti', count: 6 },
    { name: 'Dailies', count: 24 },
    { name: 'INFUSE', count: 3 },
    { name: 'Miru', count: 3 },
    { name: 'MyDay', count: 4 },
    { name: 'Proclear', count: 10 },
    { name: 'PureVision', count: 5 },
    { name: 'SofLens', count: 4 },
    { name: 'TOTAL30', count: 2 },
    { name: 'Ultra', count: 4 }
  ];

  const popularBrands = [
    { name: 'Dailies', count: 26 },
    { name: 'Acuvue', count: 22 },
    { name: 'Biofinity', count: 10 },
    { name: 'Proclear', count: 10 },
    { name: 'Air Optix', count: 8 },
    { name: 'SofLens', count: 4 },
    { name: 'Biomedics', count: 2 }
  ];

  // Get unique first letters from all brands
  const alphabetLetters = [...new Set(allBrands.map(b => b.name[0].toUpperCase()))].sort();

  const brands = [
    { name: 'ACUVUE', logo: 'ACUVUE' },
    { name: 'DAILIES', logo: 'DAILIES' },
    { name: 'Biofinity', logo: 'Biofinity' },
    { name: 'Alcon', logo: 'Alcon' },
    { name: 'ULTRA', logo: 'ULTRA' },
    { name: 'Air Optix', logo: 'Air Optix' },
    { name: 'clariti', logo: 'clariti' },
    { name: 'Proclear', logo: 'Proclear' }
  ];

  const products = [
    {
      name: 'Acuvue Oasys for Astigmatism',
      frequency: 'Weekly | 6pk',
      image: 'acuvue-astigmatism'
    },
    {
      name: 'Biofinity Toric',
      frequency: 'Monthly | 6pk',
      image: 'biofinity-toric'
    },
    {
      name: '1-Day Acuvue Moist',
      frequency: 'Daily | 90pk',
      image: 'acuvue-moist'
    },
    {
      name: 'Acuvue Oasys',
      frequency: 'Weekly | 12pk',
      image: 'acuvue-oasys'
    },
    {
      name: 'Biofinity',
      frequency: 'Monthly | 6pk',
      image: 'biofinity'
    },
    {
      name: 'Air Optix Colors',
      frequency: 'Monthly | 2pk',
      image: 'air-optix-colors'
    },
    {
      name: 'Precision 1 Dailies',
      frequency: 'Daily | 90pk',
      image: 'precision-1'
    },
    {
      name: 'Air Optix Plus HydraGlyde',
      frequency: 'Monthly | 6pk',
      image: 'air-optix-hydra'
    },
    {
      name: 'Biofinity XR Toric',
      frequency: 'Monthly | 6pk',
      image: 'biofinity-xr'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Selection Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Choose your brand:</span>
            {brands.map((brand, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                {brand.logo}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 border-2 border-black" >
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <h2 className="text-lg font-semibold mb-6">Filter By</h2>

            {/* Brand Filter */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('brand')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium text-gray-900">Brand</span>
                {expandedSections.brand ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSections.brand && (
                <div className="space-y-2">
                  <div className="flex gap-2 mb-3 text-xs">
                    <button 
                      onClick={() => setBrandView('az')}
                      className={`px-2 py-1 rounded ${brandView === 'az' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    >
                      A-Z
                    </button>
                    <button 
                      onClick={() => setBrandView('popular')}
                      className={`px-2 py-1 rounded ${brandView === 'popular' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    >
                      Popular
                    </button>
                    <button 
                      onClick={() => setBrandView('all')}
                      className={`px-2 py-1 rounded ${brandView === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    >
                      All
                    </button>
                  </div>

                  {brandView === 'az' && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {alphabetLetters.map((letter, index) => (
                        <button
                          key={index}
                          className="w-6 h-6 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded"
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  )}

                  {brandView === 'popular' && popularBrands.map((brand, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{brand.name}</span>
                      <span className="text-gray-500">({brand.count})</span>
                    </label>
                  ))}

                  {brandView === 'all' && allBrands.map((brand, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{brand.name}</span>
                      <span className="text-gray-500">({brand.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Lens Type Filter */}
            <div className="mb-6 border-t pt-4">
              <button
                onClick={() => toggleSection('contactLensType')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium text-gray-900">Contact Lens Type</span>
                {expandedSections.contactLensType ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSections.contactLensType && (
                <div className="space-y-2">
                  {[
                    { name: 'Daily', count: 58 },
                    { name: 'Monthly', count: 41 },
                    { name: 'Weekly', count: 17 },
                    { name: 'Colored', count: 5 }
                  ].map((type, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{type.name}</span>
                      <span className="text-gray-500">({type.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Manufacturer Filter */}
            <div className="mb-6 border-t pt-4">
              <button
                onClick={() => toggleSection('manufacturer')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium text-gray-900">Manufacturer</span>
                {expandedSections.manufacturer ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSections.manufacturer && (
                <div className="space-y-2">
                  {[
                    { name: 'CooperVision', count: 35 },
                    { name: 'Alcon', count: 34 },
                    { name: 'Johnson & Johnson', count: 22 },
                    { name: 'Bausch & Lomb', count: 22 },
                    { name: 'Menicon', count: 3 }
                  ].map((mfg, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{mfg.name}</span>
                      <span className="text-gray-500">({mfg.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Prescription Type Filter */}
            <div className="mb-6 border-t pt-4">
              <button
                onClick={() => toggleSection('prescriptionType')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium text-gray-900">Prescription Type</span>
                {expandedSections.prescriptionType ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSections.prescriptionType && (
                <div className="space-y-2">
                  {[
                    { name: 'Single vision', count: 52 },
                    { name: 'Toric & Astigmatism', count: 36 },
                    { name: 'Multifocal', count: 31 }
                  ].map((type, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{type.name}</span>
                      <span className="text-gray-500">({type.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="mb-6 border-t pt-4">
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full mb-3"
              >
                <span className="font-medium text-gray-900">Price</span>
                {expandedSections.price ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {expandedSections.price && (
                <div>
                  <div className="text-sm text-gray-600 mb-2">$31 - $207</div>
                  <input
                    type="range"
                    min="31"
                    max="207"
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <span className="text-blue-400 text-xs text-center px-4">{product.name}</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1 text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    {product.frequency}
                  </p>
                </div>
              ))}
            </div>

            {/* Payment Options Banner */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-base text-gray-900 mb-2">
                <span className="font-semibold">Shop now, pay later with </span>
                <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded font-bold text-sm mx-1">Klarna</span>
                <span className="text-blue-600 font-semibold">
                  <svg className="inline-block w-16 h-4 mx-1" viewBox="0 0 100 32" fill="currentColor">
                    <text x="0" y="24" fontSize="24" fontWeight="bold">PayPal</text>
                  </svg>
                </span>
                <span className="font-semibold"> and more.</span>
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Buy what you love and split the cost. It's easy and interest-free.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                Learn more
              </a>
            </div>

            {/* Additional Products Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Precision 1 Dailies</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Precision 1 Dailies
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Daily | 90pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Air Optix Plus HydraGlyde</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Air Optix Plus HydraGlyde
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Monthly | 6pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-white rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-purple-600 text-xs">Biofinity XR Toric</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Biofinity XR Toric
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Monthly | 6pk
                </p>
              </div>
            </div>

            {/* Additional Products Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Precision 1 For Astigmatism</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Precision 1 For Astigmatism
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Daily | 90pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-300 to-green-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Air Optix HydraGlyde Astigmatism</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Air Optix HydraGlyde Astigmatism
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Monthly | 6pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Dailies Total 1</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Dailies Total 1
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Daily | 90pk
                </p>
              </div>
            </div>

            {/* Additional Products Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-xs">1-Day Acuvue Moist for Astigmatism</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  1-Day Acuvue Moist for Astigmatism
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Daily | 90pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-green-700 text-xs">Biotrue OneDay</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Biotrue OneDay
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Daily | 90pk
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs">Acuvue Vita</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-center">
                  Acuvue Vita
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  Monthly | 6pk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}