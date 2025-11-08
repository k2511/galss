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
import { useNavigate } from "react-router-dom";

const Glasses = () => {

    const navigate = useNavigate();
 
    
  return (
    <div>
      <div className="flex flex-col space-y-6 items-center w-full py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:w-9/12 w-11/12 mx-auto">
          <img  onClick={() => {
                navigate('/eyeglasses' )
            }}
            src={eyeglass}
            alt=""
            className="w-full object-contain"
          />
          <img  onClick={() => {
                navigate('/sunglasses' )
            }}
            src={sunglass}
            alt=""
            className="w-full object-contain"
          />
          <img   onClick={() => {
                   navigate('/contact-lenses/clear-contact-lenses');
                }}
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

        <div className="flex flex-col space-y-8 w-full ">
        <div className="md:w-8/12 w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex flex-wrap flex-row items-center gap-2 ">
            <h1 className="font-bold sm:text-lg text-sm">Eyeglasses</h1>
            <button className="sm:px-3 px-1 sm:text-xs text-[0.4rem]  sm:py-1 border rounded-xl bg-[#f2f2fd]">with power</button>
            </div>

            <div className="grid grid-cols-3 lg:gap-6  gap-2 w-11/12 mx-auto text-center">
            <div >
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

        <div className="md:w-8/12 w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold sm:text-lg text-sm">Sunglasses</h1>
            </div>

            <div className="grid grid-cols-3 lg:gap-6  gap-2 w-11/12 mx-auto text-center">
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

        <div className="md:w-8/12 w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold sm:text-lg text-sm">Lenskart special</h1>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:gap-6  gap-2 w-11/12 mx-auto text-center">
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

        <div className="md:w-8/12 w-11/12 mx-auto  rounded-2xl ">
            <div className="w-11/12 mx-auto flex items-center">
            <h1 className="font-bold sm:text-lg text-sm"> Contact Lenses &amp; Accessories </h1>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:gap-6  gap-2 w-11/12 mx-auto text-center">
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
