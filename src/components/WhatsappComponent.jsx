import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsappComponent = () => {

    const handleWhatsAppClick = () => {
        const phoneNumber = "918888447667"; // ✅ No + sign
        const message = "Hello! I want to know more about your products."; // optional
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      };

      
  return (
    <div>
     <a
      href="https://wa.me/8888447667"
      target="_blank"
      rel="noopener noreferrer"
     >
        <IoLogoWhatsapp onClick={handleWhatsAppClick}  className="fixed bottom-4 right-7 text-green-500 md:text-5xl  text-4xl" />
     </a>
          
    </div>
  )
}

export default WhatsappComponent