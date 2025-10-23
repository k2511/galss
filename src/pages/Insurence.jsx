// src/pages/Insurance.jsx
import React from "react";
import InsuranceFormSection from "../components/InsuranceFormSection";
import PopularBrandsAndFSA from "../components/PopularBrandsAndFSA";
import ProviderSelection from "../components/ProviderSelection";
import TrustpilotSection from "../components/TrustpilotSection";
import ExclusiveBenefits from "../components/ExclusiveBenefits";
import FAQSection from "../components/FAQSection";
import GuaranteeSection from "../components/GuaranteeSection ";
import Footer from "../components/Footer";


const Insurance = () => (
  <div>
   <InsuranceFormSection />
   <PopularBrandsAndFSA/>
   <ProviderSelection/>
   <TrustpilotSection/>
   <ExclusiveBenefits/>
   <FAQSection/>
   <GuaranteeSection/>
   <Footer/>
  </div>
);

export default Insurance;