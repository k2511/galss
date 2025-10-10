import React, { useState } from 'react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get exclusive offers & updates
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals and special deals.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
