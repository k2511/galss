import React from "react";
import ContactLensBanner from "../components/ContactLensBanner";
import ContactLensShop from "../components/ContactLensShop";
import GuaranteeSection from "../components/GuaranteeSection ";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

const FindYourContacts = () => {
  return (
    <div>
        <ContactLensBanner/>
        <ContactLensShop/>
        <FAQSection/>
        <GuaranteeSection/>
        <Footer/>
    </div>
  );
};

export default FindYourContacts;
