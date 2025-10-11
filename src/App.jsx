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

import Footer from "./components/Footer";
import GlassSection from "./components/GlassSection";
import CollectionCards from "./components/CollectionCards";
import TrustpilotSection from "./components/TrustpilotSection";
import FeaturedAndFilters from "./components/FeaturedAndFilters";
import GuaranteeSection from "./components/GuaranteeSection ";

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
          <GlassSection />
          <CollectionCards />
          <TrustpilotSection />
          <FeaturedAndFilters />
          <GuaranteeSection />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
