import React from "react";

const PopularBrandsSection = () => {
  const mainBrands = [
    { 
      name: "Ray-Ban", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Rayban_a8eab65593ae18cfd6d9.png",
      logo: "Ray-Ban"
    },
    { 
      name: "Oakley", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Oakley_34143ceb1e4743f5bcbf.png",
      logo: "OAKLEY"
    },
    { 
      name: "idee", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Ottoto_f678f9f57593db98d773.png",
      logo: "idee"
    },
    { 
      name: "titan", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Muse_6984369230f6fc1340cc.png",
      logo: "titan"
    }
  ];

  const brandLogos = [
    { 
      name: "Ray-Ban", 
      logo: "data:image/png;base64,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",
      fallback: "Ray-Ban"
    },
    { 
      name: "OAKLEY", 
      logo: "data:image/png;base64,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",
      fallback: "OAKLEY"
    },
    { 
      name: "idee", 
      logo:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/c7f378f51fa19878f093?ik-sanitizeSvg=true",
      fallback: "idee"
    },
    { 
      name: "titan", 
      logo:"data:image/png;base64,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",
      fallback: "titan"
    },
    { 
      name: "fastrack", 
      logo:"data:image/png;base64,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",
      fallback: "fastrack"
    },
    
  ];

  return (
    <div className="w-full py-8 md:py-12 bg-[#EEF6FB]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          Our most popular eyewear brands
        </h2>
        
        {/* Main Brand Cards - Reduced Size */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 max-w-4xl mx-auto">
          {mainBrands.map((brand) => (
            <div key={brand.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 bg-white text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-900">
                  {brand.logo}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* All Brands You Love Section */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            All the brands you love.
          </h3>
          
          {/* Brand Logos Grid with Images */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-3xl mx-auto mb-8">
            {brandLogos.map((brand, index) => (
              <BrandLogoCard key={index} brand={brand} />
            ))}
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate component for better error handling
const BrandLogoCard = ({ brand }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex items-center justify-center hover:shadow-md transition-shadow h-16 md:h-20">
      {!imageError ? (
        <img 
          src={brand.logo} 
          alt={brand.name}
          className="max-w-full max-h-full object-contain"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-xs md:text-sm font-semibold text-gray-700 text-center">
          {brand.fallback}
        </span>
      )}
    </div>
  );
};

export default PopularBrandsSection;