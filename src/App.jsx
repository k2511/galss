import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

import "./index.css";
import TopBar from "./components/TopBar";
import EyewearGallery from "./components/EyewearGallery";
import CategorySection from "./components/CategorySection";
import VirtualTryOnSection from "./components/VirtualTryOnSection";
import PopularBrandsSection from "./components/PopularBrandsSection";
import SummerPicksSection from "./components/SummerPicksSection";
import PerfectEyewearSection from "./components/PerfectEyewearSection";
import InsuranceSection from "./components/InsuranceSection";
import FramingYourWorldSection from "./components/FramingYourWorldSection";
import ClearedSection from "./components/ClearedSection";
import BrandShowcaseSection from "./components/BrandShowcaseSection";
import CustomerReviewsSection from "./components/CustomerReviewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <TopBar />
        <Header />
        <main>
          <HeroSection />
          <EyewearGallery />
          <CategorySection />
      
          <VirtualTryOnSection />
    <PopularBrandsSection />
    <SummerPicksSection />
    <PerfectEyewearSection />
    <InsuranceSection />
    <FramingYourWorldSection />
    <ClearedSection />
    <BrandShowcaseSection />
    <CustomerReviewsSection />


        </main>
      <Footer/>
      </div>
    </Provider>
  );
}

export default App;
