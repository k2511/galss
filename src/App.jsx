import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter import
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
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

import GuaranteeSection from "./components/GuaranteeSection "; // Make sure this path is correct



import Rayban from "./pages/brands/Rayban"; // Corrected import path
import Oakley from "./pages/brands/Oakley"; // Corrected import path
import Persol from "./pages/brands/Persol"; // Corrected import path
import Coach from "./pages/brands/Coach";// Corrected import path
import Versace from "./pages/brands/Versace";// Corrected import path
import Burberry from "./pages/brands/Burberry"; // Corrected import path
import Mk from "./pages/brands/Mk";
import Oliver from "./pages/brands/Oliver";

//women
import ShopAllGlassesWomen from "./innerPages/women/ShopAllGlassesWomen";
import BestSellers from "./innerPages/women/BestSellers";
import DesignerGlasses from "./innerPages/women/designerglasses";
import OnSale from "./innerPages/women/OnSale"




function App() {
  return (
    // Removed Provider and BrowserRouter from here since they're in main.jsx
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route>
          <Route path="/brands/rayban" element={<Rayban />} />
        </Route>
        <Route>
          <Route path="/brands/oakley" element={<Oakley />} />
        </Route>
        <Route>
          <Route path="/brands/persol" element={<Persol />} />
        </Route>
        <Route>
          <Route path="/brands/coach" element={<Coach />} />
        </Route>
        <Route>
          <Route path="/brands/versace" element={<Versace />} />
        </Route>
        <Route>
          <Route path="/brands/burberry" element={<Burberry />} />
        </Route>
         <Route>
          <Route path="/brands/mk" element={<Mk />} />
        </Route>
         <Route>
          <Route path="/brands/oliver" element={<Oliver />} />
        </Route>

        <Route path="/prescriptionGlass" element={<PrescriptionGlass />} />
        <Route path="/sunglasses" element={<Sunglasses />} />

        <Route path="/insurance" element={<Insurance />} />

                 
        {/* Women Section */}
        <Route path="/ShopAllGlassesWomen" element={<ShopAllGlassesWomen />} />
        <Route path="/BestSellers" element={<BestSellers/>}/>
        <Route path="/DesignerGlasses" element={<DesignerGlasses/>}/>
        <Route path="/OnSale" element={<OnSale/>}/>
      </Routes>
    </div>
  );
}

export default App;


