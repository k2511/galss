import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedCategory } from '../features/products/productsSlice'

const CategoryGrid = () => {
  const dispatch = useDispatch()

  const categories = [
    {
      id: 'eyeglasses',
      title: 'Eyeglasses',
      subtitle: 'Prescription & Blue Light',
      image: '/api/placeholder/300/250',
      color: 'bg-blue-50'
    },
    {
      id: 'sunglasses',
      title: 'Sunglasses',
      subtitle: 'UV Protection & Style',
      image: '/api/placeholder/300/250',
      color: 'bg-yellow-50'
    },
    {
      id: 'reading',
      title: 'Reading Glasses',
      subtitle: 'Magnification Solutions',
      image: '/api/placeholder/300/250',
      color: 'bg-green-50'
    },
    {
      id: 'contacts',
      title: 'Contact Lenses',
      subtitle: 'Daily & Monthly',
      image: '/api/placeholder/300/250',
      color: 'bg-purple-50'
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find your perfect pair
          </h2>
          <p className="text-xl text-gray-600">
            Explore our wide range of eyewear categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => dispatch(setSelectedCategory(category.id))}
              className={`${category.color} rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.subtitle}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                Shop Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
