import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const FeaturedCollection = () => {
  const { featuredProducts } = useSelector(state => state.products)

  const collections = [
    {
      id: 1,
      title: "Men's Collection",
      subtitle: "Classic & Modern Styles",
      image: "/api/placeholder/250/300"
    },
    {
      id: 2,
      title: "Women's Collection",
      subtitle: "Elegant & Trendy",
      image: "/api/placeholder/250/300"
    },
    {
      id: 3,
      title: "Kids Collection",
      subtitle: "Fun & Durable",
      image: "/api/placeholder/250/300"
    },
    {
      id: 4,
      title: "Sports Collection",
      subtitle: "Active & Performance",
      image: "/api/placeholder/250/300"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collection Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Featured Collections
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover our curated collections for every style
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {collection.subtitle}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Explore Collection →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Bestselling Products
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
