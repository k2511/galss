import React from "react";
import eyemen from '../assets/EyeGlassees/eyemen.jpeg'
import eyewomen from '../assets/EyeGlassees/eyewomen.jpeg'
import eyekids from '../assets/EyeGlassees/eyekids.jpeg'

import sunmen from '../assets/sunglasses/sunmen.jpeg'
import sunwomen from '../assets/sunglasses/sunwomen.jpeg'
import sunkids from '../assets/sunglasses/sunkids.jpeg'
import eyeglass from '../assets/EyeGlassees/eyeglass.jpeg'
import sunglass from '../assets/sunglasses/sunglass.jpeg'
import contactlense from '../assets/Contactlenses/contactlense.jpeg'
import colorlense from '../assets/Contactlenses/colorlense.jpeg'
import progress from '../assets/Lenses/progessive.jpeg'
import zero from '../assets/Lenses/zero.jpeg'
import reading from '../assets/Lenses/reading.jpeg'
import power from '../assets/Lenses/power.jpeg'
import clear from '../assets/Lenses/clear.jpeg'
import color from '../assets/Lenses/color.jpeg'
import solution from '../assets/Lenses/solution.jpeg'

const Glasses = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 items-center w-full py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-11/12 mx-auto">
          <img
            src={eyeglass}
            alt=""
            className="w-full object-contain"
          />
          <img
            src={sunglass}
            alt=""
            className="w-full object-contain"
          />
          <img
            src={contactlense}
            alt=""
            className="w-full object-contain"
          />
          <img
            src={colorlense}
            alt=""
            className="w-full object-contain"
          />
        </div>

     {/* <div className=" w-11/12 border-2 border-black">
        <div className="w-11/12 mx-auto flex items-center gap-2">
            <h1 className="font-bold">Eyeglasses</h1>
            <button className="px-2 text-xs py-1 border rounded">with power</button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3  gap-6 w-11/12 mx-auto text-center">
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-eye-menhome-171025-home-171025.png"
                alt="Men"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Men</h1>
            </div>
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-eye-womenhome-171025-home-171025.png"
                alt="Women"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Women</h1>
            </div>
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-eye-kidshome-171025-home-171025.png"
                alt="Kids"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Kids</h1>
            </div>
        </div>
        </div>

        <div className=" w-11/12 border-2 border-black">
        <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold">Sunglasses</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-6 w-11/12 mx-auto text-center">
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-sun-menhome-171025-home-171025.png"
                alt="Men"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Men</h1>
          
            </div>
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-sun-womenhome-171025-home-171025.png"
                alt="Women"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Women</h1>
            </div>
            <div>
            <img
                src="https://static5.lenskart.com/media/uploads/Home-_Diwali-maingrid-sun-kidshome-171025-home-171025.png"
                alt="Kids"
                className="w-full object-contain"
            />
            <h1 className="mt-2 text-lg font-semibold">Kids</h1>
            </div>
        </div>
        </div> */}

        <div className="flex flex-col space-y-8 w-full ">
        <div className="w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex flex-wrap items-center gap-2">
            <h1 className="font-bold text-lg">Eyeglasses</h1>
            <button className="px-3 text-xs py-1 border rounded">with power</button>
            </div>

            <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto text-center">
            <div>
                <img
                src={eyemen}
                alt="Men"
                className="w-full object-contain"
                />
            </div>
            <div>
                <img
                src={eyewomen}
                alt="Women"
                className="w-full object-contain"
                />
            </div>
            <div>
                <img
                src={eyekids}
                alt="Kids"
                className="w-full object-contain"
                />
            </div>
            </div>
        </div>

        <div className="w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold text-lg">Sunglasses</h1>
            </div>

            <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto text-center">
            <div>
                <img
                src={sunmen}
                alt="Men"
                className="w-full object-contain"
                />
               
            </div>
            <div>
                <img
                src={sunwomen}
                alt="Women"
                className="w-full object-contain"
                />
            </div>
            <div>
                <img
                src={sunkids}
                alt="Kids"
                className="w-full object-contain"
                />
            </div>
            </div>
        </div>

        <div className="w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold text-lg">Lenskart special</h1>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 w-11/12 mx-auto text-center">
            <div>
                <img
                src={progress}
                alt="Men"
                className="w-full object-contain"
                />
               
            </div>
            <div>
                <img
                src={zero}
                alt="Women"
                className="w-full object-contain"
                />
            </div>
            <div>
                <img
                src={     reading  }
                alt="Kids"
                className="w-full object-contain"
                />
            </div>
            
            <div>
                <img
                src={  power  }
                alt="Kids"
                className="w-full object-contain"
                />
            </div>
            </div>
        </div>

        <div className="w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold text-lg"> Contact Lenses &amp; Accessories </h1>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 w-11/12 mx-auto text-center">
            <div>
                <img
                src={clear}
                alt="Men"
                className="w-full object-contain"
                />
            </div>
            <div>
                <img
                src={color}
                alt="Women"
                className="w-full object-contain"
                />
            </div>
             <div>
                <img
                src={ solution  }
                alt="Kids"
                className="w-full object-contain"
                />
            </div>
            
         {/*   <div>
                <img
                src={  power  }
                alt="Kids"
                className="w-full object-contain"
                />
            </div> */}
            </div>
        </div>


        </div>





      </div>
    </div>
  );
};

export default Glasses;
