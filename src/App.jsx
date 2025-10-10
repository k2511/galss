import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import FeaturedCollection from './components/FeaturedCollection'
import BrandShowcase from './components/BrandShowcase'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <CategoryGrid />
          <FeaturedCollection />
          <BrandShowcase />
          <NewsletterSignup />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
