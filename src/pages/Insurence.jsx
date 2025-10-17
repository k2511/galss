// src/pages/Insurance.jsx
import React from "react";
import InsuranceFormSection from "../components/InsuranceFormSection";
import PopularBrandsAndFSA from "../components/PopularBrandsAndFSA";
import Provider from "../components/Provider";

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
