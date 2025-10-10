
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
      name: "ottoto", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Ottoto_f678f9f57593db98d773.png",
      logo: "ottoto"
    },
    { 
      name: "muse", 
      image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Muse_6984369230f6fc1340cc.png",
      logo: "muse"
    }
  ];

  const brandLogos = [
    { 
      name: "Ray-Ban", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtNuQKSvysejkRDJPqZFZnps_BTv3ztK_3g&s",
      fallback: "Ray-Ban"
    },
    { 
      name: "OAKLEY", 
      logo: "https://seeklogo.com/images/O/oakley-logo-52C87F7C90-seeklogo.com.png",
      fallback: "OAKLEY"
    },
    { 
      name: "DKNY", 
      logo: "https://logoeps.com/wp-content/uploads/2014/05/dkny-vector-logo.png",
      fallback: "DKNY"
    },
    { 
      name: "Persol", 
      logo: "https://seeklogo.com/images/P/persol-logo-4B5B5B5B5B-seeklogo.com.png",
      fallback: "Persol"
    },
    { 
      name: "muse", 
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSI1MCIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMiPm11c2U8L3RleHQ+Cjwvc3ZnPgo=",
      fallback: "muse"
    },
    { 
      name: "VERSACE", 
      logo: "https://seeklogo.com/images/V/versace-logo-D613DA8B65-seeklogo.com.png",
      fallback: "VERSACE"
    },
    { 
      name: "COACH", 
      logo: "https://seeklogo.com/images/C/coach-logo-CA6FF5E7F3-seeklogo.com.png",
      fallback: "COACH"
    },
    { 
      name: "EMPORIO ARMANI", 
      logo: "https://seeklogo.com/images/E/emporio-armani-logo-52423FC8C9-seeklogo.com.png",
      fallback: "EMPORIO ARMANI"
    },
    { 
      name: "GUCCI", 
      logo: "https://seeklogo.com/images/G/gucci-logo-0D72E3D9EC-seeklogo.com.png",
      fallback: "GUCCI"
    }
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
            
            {/* Shop All Button */}
            <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer h-16 md:h-20">
              <span className="text-sm md:text-base font-semibold text-blue-600">
                Shop All
              </span>
            </div>
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
