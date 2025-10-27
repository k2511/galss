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

import GuaranteeSection from "./components/GuaranteeSection.jsx"; // Make sure this path is correct

import Rayban from "./pages/brands/Rayban"; // Corrected import path
import Oakley from "./pages/brands/Oakley"; // Corrected import path
import Persol from "./pages/brands/Persol"; // Corrected import path
import Coach from "./pages/brands/Coach"; // Corrected import path
import Versace from "./pages/brands/Versace"; // Corrected import path
import Burberry from "./pages/brands/Burberry"; // Corrected import path
import Mk from "./pages/brands/Mk";
import Oliver from "./pages/brands/Oliver";
import Armani from "./pages/brands/Armani.jsx";
import Kate from "./pages/brands/Kate.jsx";
import Ottoto from "./pages/brands/Ottoto.jsx";
import Muse from "./pages/brands/Muse.jsx";

import Adidas from "./pages/brands/Adidas.jsx";
import Arnette from "./pages/brands/Arnette.jsx";
import Calvin from "./pages/brands/Calvin.jsx";
import Carrera from "./pages/brands/Carrera.jsx";
import Costa from "./pages/brands/Costa.jsx";
import EmporioArmani from "./pages/brands/EmporioArmani.jsx";
import ONeill from "./pages/brands/ONeill.jsx";

// Text Brands Column 2
import Nike from "./pages/brands/Nike.jsx";
import RalphLauren from "./pages/brands/RalphLauren.jsx";
import SaintLaurent from "./pages/brands/SaintLaurent.jsx";
import Spy from "./pages/brands/Spy.jsx";
import ToryBurch from "./pages/brands/ToryBurch.jsx";
import WileyX from "./pages/brands/WileyX.jsx";

// Luxury Brands
import Prada from "./pages/brands/Prada.jsx";
import Gucci from "./pages/brands/Gucci.jsx";
import TomFord from "./pages/brands/TomFord.jsx";
import DolceGabbana from "./pages/brands/DolceGabbana.jsx";
import OliverPeoples from "./pages/brands/OliverPeoples.jsx";
import GiorgioArmani from "./pages/brands/GiorgioArmani.jsx";
import GarrettLeight from "./pages/brands/GarrettLeight.jsx";

import PrescriptionGlass from "./pages/PrescriptionGlass";
import Sunglasses from "./pages/Sunglasses";
import Insurance from "./pages/Insurence";

//women
import ShopAllGlassesWomen from "./innerPages/men/ShopAllGlassesMen.jsx";
import BestSellers from "./innerPages/women/BestSellers";
import DesignerGlasses from "./innerPages/women/designerglasses";
import OnSale from "./innerPages/women/OnSale";
import GirlsEyeglasses from "./innerPages/women/GirlsEyeglasses";
import DesignerOutlet from "./innerPages/women/DesignerOutlet";
import NextDayDelivery from "./innerPages/women/NextDayDelivery";
import ShopAllGlassesMen from "./innerPages/men/ShopAllGlassesMen.jsx";
import FindYourContacts from "./pages/FindYourContacts.jsx";

// Sunglasses (Women)
import SunGlasses from "./innerPages/sunglasses/women/SunGlasses";
import BestSeller from "./innerPages/sunglasses/women/BestSeller";
import DesignerSunGlasses from "./innerPages/sunglasses/women/DesignerSunGlasses";
// import OnSale from "./innerPages/sunglasses/women/OnSale";
import RayBan from "./innerPages/sunglasses/women/RayBan";
import ShopAllSunGlasses from "./innerPages/sunglasses/women/ShopAllSunGlasses";

// Sunglasses (men)
// import SunGlasses from "./innerPages/sunglasses/men/SunGlasses";
// import BestSeller from "./innerPages/sunglasses/men/BestSeller";
// import DesignerSunGlasses from "./innerPages/sunglasses/men/DesignerSunGlasses";
// import OnSale from "./innerPages/sunglasses/men/OnSale";
// import RayBan from "./innerPages/sunglasses/men/RayBan";
// import ShopAllSunGlasses from "./innerPages/sunglasses/men/ShopAllSunGlasses";

//Sunglasses (SpecialLenses)
import SportGlasses from "./innerPages/sunglasses/speciallenses/SportGlasses.jsx";
import SafetyGlasses from "./innerPages/sunglasses/speciallenses/SafetyGlasses.jsx";
import KidsGlasses from "./innerPages/sunglasses/speciallenses/KidsGlasses.jsx";
import TransitionLenses from "./innerPages/sunglasses/speciallenses/TransitionLenses.jsx";
import Polarized from "./innerPages/sunglasses/speciallenses/Polarized.jsx";
import PrescriptionSunGlasses from "./innerPages/sunglasses/speciallenses/PrescriptionSunGlasses.jsx";
import ClipOns from "./innerPages/sunglasses/speciallenses/ClipOns.jsx";
import Progressive from "./innerPages/sunglasses/speciallenses/Progressive.jsx";


import ContactLensShop from "./components/ContactLensShop.jsx";

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
        {/* Brand Pages */}
        <Route path="/brands/rayban" element={<Rayban />} />
        <Route path="/brands/oakley" element={<Oakley />} />
        <Route path="/brands/persol" element={<Persol />} />
        <Route path="/brands/coach" element={<Coach />} />
        <Route path="/brands/versace" element={<Versace />} />
        <Route path="/brands/burberry" element={<Burberry />} />
        <Route path="/brands/mk" element={<Mk />} />
        <Route path="/brands/oliver" element={<Oliver />} />
        <Route path="/brands/armani" element={<Armani />} />
        <Route path="/brands/kate" element={<Kate />} />
        <Route path="/brands/ottoto" element={<Ottoto />} />
        <Route path="/brands/muse" element={<Muse />} />
        {/* ✅ Brand routes - Auto generated based on data */}
        <Route path="/brands/adidas" element={<Adidas />} />
        <Route path="/brands/arnette" element={<Arnette />} />
        <Route path="/brands/calvin" element={<Calvin />} />
        <Route path="/brands/carrera" element={<Carrera />} />
        <Route path="/brands/costa" element={<Costa />} />
        <Route path="/brands/emporio" element={<EmporioArmani />} />
        <Route path="/brands/oneill" element={<ONeill />} />
        {/* Text Brand Column 2 Routes */}
        <Route path="/brands/nike" element={<Nike />} />
        <Route path="/brands/ralph-lauren" element={<RalphLauren />} />
        <Route path="/brands/saint-laurent" element={<SaintLaurent />} />
        <Route path="/brands/spy" element={<Spy />} />
        <Route path="/brands/tory-burch" element={<ToryBurch />} />
        <Route path="/brands/wiley-x" element={<WileyX />} />
        {/* Luxury Brand Routes */}
        <Route path="/brands/prada" element={<Prada />} />
        <Route path="/brands/gucci" element={<Gucci />} />
        <Route path="/brands/tom-ford" element={<TomFord />} />
        <Route path="/brands/dolce-gabbana" element={<DolceGabbana />} />
        <Route path="/brands/oliver-peoples" element={<OliverPeoples />} />
        <Route path="/brands/giorgio-armani" element={<GiorgioArmani />} />
        <Route path="/brands/garrett-leight" element={<GarrettLeight />} />
        <Route path="/prescriptionGlass" element={<PrescriptionGlass />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/find-contacts" element={<FindYourContacts />} />{" "}
        {/* 👈 New route */}
        {/* Women Section */}
        <Route path="/ShopAllGlassesWomen" element={<ShopAllGlassesWomen />} />
        <Route path="/BestSellers" element={<BestSellers />} />
        <Route path="/DesignerGlasses" element={<DesignerGlasses />} />
        <Route path="/OnSale" element={<OnSale />} />
        <Route path="/DesignerOutlet" element={<DesignerOutlet />} />
        <Route path="/GirlsEyeglasses" element={<GirlsEyeglasses />} />
        <Route path="/NextDayDelivery" element={<NextDayDelivery />} />
        {/*Men Section*/}
        <Route path="/ShopAllGlassesMen" element={<ShopAllGlassesMen />} />
        <Route path="/findyourcontact" element={<FindYourContacts />} />
        {/* Sunglasses (Women) */}
        <Route path="/sunglasses/women/bestseller" element={<BestSeller />} />
        <Route path="/sunglasses/women/sunglasses" element={<SunGlasses />} />
        <Route path="/sunglasses/women/onsale" element={<OnSale />} />
        <Route
          path="/sunglasses/women/designersunglasses"
          element={<DesignerSunGlasses />}
        />
        <Route path="/sunglasses/women/rayban" element={<RayBan />} />
        <Route
          path="/sunglasses/women/shopallsunglasses"
          element={<ShopAllSunGlasses />}
        />
        {/* Sunglasses (men) */}
        <Route path="/sunglasses/men/bestseller" element={<BestSeller />} />
        <Route path="/sunglasses/men/sunglasses" element={<SunGlasses />} />
        <Route path="/sunglasses/men/onsale" element={<OnSale />} />
        <Route
          path="/sunglasses/men/designersunglasses"
          element={<DesignerSunGlasses />}
        />
        <Route path="/sunglasses/men/rayban" element={<RayBan />} />
        <Route
          path="/sunglasses/men/shopallsunglasses"
          element={<ShopAllSunGlasses />}
        />
        {/* Sunglasses (SpecialLenses) */}
        <Route
          path="/sunglasses/speciallenses/sportglasses"
          element={<SportGlasses />}
        />
        <Route
          path="/sunglasses/speciallenses/safetyglasses"
          element={<SafetyGlasses />}
        />
        <Route
          path="/sunglasses/speciallenses/kidsglasses"
          element={<KidsGlasses />}
        />
        <Route
          path="/sunglasses/speciallenses/transitionlenses"
          element={<TransitionLenses />}
        />
        <Route
          path="/sunglasses/speciallenses/polarized"
          element={<Polarized />}
        />
        <Route
          path="/sunglasses/speciallenses/prescriptionsunglasses"
          element={<PrescriptionSunGlasses />}
        />
        <Route path="/sunglasses/speciallenses/clipons" element={<ClipOns />} />
        <Route
          path="/sunglasses/speciallenses/progressive"
          element={<Progressive />}
        />
        {/* Contact Lenses Pages */}
        <Route path="/contacts/shopall" element={<ContactLensShop />} />
        <Route path="/contacts/daily" element={<ContactLensShop />} />
        <Route path="/contacts/weekly" element={<ContactLensShop />} />
        <Route path="/contacts/monthly" element={<ContactLensShop />} />
        <Route path="/contacts/single-vision" element={<ContactLensShop />} />
        <Route path="/contacts/multifocal" element={<ContactLensShop />} />
        {/* Contact Lens Brands */}
        <Route path="/contacts/acuvue" element={<ContactLensShop />} />
        <Route path="/contacts/biofinity" element={<ContactLensShop />} />
        <Route path="/contacts/dailies" element={<ContactLensShop />} />
        <Route path="/contacts/airoptix" element={<ContactLensShop />} />
        <Route path="/contacts/ultra" element={<ContactLensShop />} />
        <Route path="/contacts/biotrue" element={<ContactLensShop />} />
        <Route path="/contacts/clariti" element={<ContactLensShop />} />
        <Route path="/contacts/proclear" element={<ContactLensShop />} />
        <Route path="/contacts/soflens" element={<ContactLensShop />} />
        <Route path="/contacts/myday" element={<ContactLensShop />} />
      </Routes>
    </div>
  );
}

export default App;
