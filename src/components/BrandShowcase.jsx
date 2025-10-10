import React from 'react'

const BrandShowcase = () => {
  const brands = [
    { name: 'Ray-Ban', logo: '/api/placeholder/120/60' },
    { name: 'Oakley', logo: '/api/placeholder/120/60' },
    { name: 'Gucci', logo: '/api/placeholder/120/60' },
    { name: 'Prada', logo: '/api/placeholder/120/60' },
    { name: 'Tom Ford', logo: '/api/placeholder/120/60' },
    { name: 'Versace', logo: '/api/placeholder/120/60' },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Shop Premium Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandShowcase
