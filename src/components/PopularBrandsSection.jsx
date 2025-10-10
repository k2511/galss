// import React from "react";

// const PopularBrandsSection = () => {
//   const mainBrands = [
//     { 
//       name: "Ray-Ban", 
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Rayban_a8eab65593ae18cfd6d9.png",
//       logo: "Ray-Ban"
//     },
//     { 
//       name: "Oakley", 
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Oakley_34143ceb1e4743f5bcbf.png",
//       logo: "OAKLEY"
//     },
//     { 
//       name: "ottoto", 
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Ottoto_f678f9f57593db98d773.png",
//       logo: "ottoto"
//     },
//     { 
//       name: "muse", 
//       image: "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/mf-homepage/client/mobileImg/Muse_6984369230f6fc1340cc.png",
//       logo: "muse"
//     }
//   ];

//   const brandLogos = [
//     "Ray-Ban", "OAKLEY", "DKNY", "Persol", "muse",
//     "VERSACE", "COACH", "EMPORIO ARMANI", "GUCCI"
//   ];

//   return (
//     <div className="w-full py-8 md:py-12 bg-[#EEF6FB]">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
//           Our most popular eyewear brands
//         </h2>
        
//         {/* Main Brand Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
//           {mainBrands.map((brand) => (
//             <div key={brand.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="aspect-square relative">
//                 <img 
//                   src={brand.image} 
//                   alt={brand.name} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4 bg-white text-center">
//                 <h3 className="text-lg md:text-xl font-bold text-gray-900">
//                   {brand.logo}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* All Brands You Love Section */}
//         <div className="text-center">
//           <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
//             All the brands you love.
//           </h3>
          
//           {/* Brand Logos Grid */}
//           <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
//             {brandLogos.map((logo, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center justify-center hover:shadow-md transition-shadow">
//                 <span className="text-sm md:text-base font-semibold text-gray-700 text-center">
//                   {logo}
//                 </span>
//               </div>
//             ))}
            
//             {/* Shop All Button */}
//             <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
//               <span className="text-sm md:text-base font-semibold text-blue-600">
//                 Shop All
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularBrandsSection;





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
    { name: "Ray-Ban", logo: "data:image/png;base64,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" },
    { name: "OAKLEY", logo: "https://1000logos.net/wp-content/uploads/2017/05/Oakley-Logo.png" },
    { name: "DKNY", logo: "data:image/png;base64,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" },
    { name: "Persol", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAkFBMVEX///8jHyAAAAAfGxwZFBUIAAAdGBkYExQQCQscFxgWEBITDA74+PgVDxD8/PwKAADv7++pqKjq6urc3NwoJCUMAAWjoqK4t7eUk5Pk5OSQj4+wr6/X19dAPT6bmppqaGnCwcFIRkaDgoLOzc1fXV5OS0x/fn4vKyw1MjNycHBiYGBSUFDHx8fY2NiJiIhJR0fpCRGcAAAV8klEQVR4nO1d2WKiShANjSCKGtS4byQa45JJ/v/vLtBrVVejiSR6x6mnGePSHGqv083Dwz/5J0CS2WrHmHccJtdeya1JsmVB3fc8v/HIptdezG1Jl8WekmDXu/Z6bkhWLMekzQZ+AU6DTa69opuR10GOCHtJu2/1Ahw/+ud0uByjApr37J+d50YBTu352ou6DdkWBjVYFv9JGPc5rHvlVd2EpBwNJv77wp2y37zqom5DWkGBRXMv/j+XipNec1W3IXuuJ8FM/L8jsKkdrrqsW5C+pSbiBY+1rrism5BNDWPz5otX3q+4rFuQvtKSVL60EmhF4yuu6xZk35bYrOVLH/E/h5NLS6qNx+byteGAv+Lvrrmy68tMY9NXrwXipbhzzaVdXY4NG5uRxOa+A1Wi1MbERrnnu643RwY2E+tFdtddnH2Twib4pzeZtD0Cm+4/f5NJjxnYKAOSMdwb3DM2KYnNOBL5zds113ZtkShAbLbC0sLXa67t2nKoUdiseMvYa79cc23Xlief8sUyHwzuuSvaMtyNgY3qUczLPvyXS5/GRqV+91xOpSQ2ErHa5qqLu7J0H01sZD0ly/DHe3Y3qokFsXlp48B1jyKDNYfij3h1wV1xeN+DTd288XRPVAYvNZO5T1n4JjZiqrCWM5l7LqZg6qfmDKKOiO86KX7oGB2KDJsRf/Uz/OeJUVos/Yvokrb3Jz78l0sCsBnwdEZkN3euNg8TgE3E6Tc8dkUfV17btQWUU15cwCHwiq+9tmvLHGDT3uavcWLSP87WGmBTz70vd0GNxbWXdnV5B9g0jg+SOfCPQGsO7jzODOCvsPuuFgpRnAARqLofHJo7yoh7kwmdrHQHABtvUBhUfC8trfnHghXyPO1bfxwibAqp3YkfTncs5tWRF0bsc43+vIxsaELvLsrv5MhCEIjYAV43hc19hKh5UMcX3m4Dwxrb2DCsW3+lpMy3rtzzwbVPLWzY8Grr/UUB4xXz6g3NAa30XOp3EaLWDmg8v6Z9joVNcA9cpKKabgQMX3wm8Uq9C2MT3IVFvWUBKn4dpR+E+qhZi4XNXWwK2mdOtlGQZ+Y2OHqU+wL6xV781+zuTTJx/Kmor0WiQjgelcIgbP6O+D0fHxt5IdDc7Wd2qdTxfNFxyGVqFQaR1A+MzV+Q9nXfWCQGkn4zYJ+4o1CgoQf9Hs5zFI3vBfqbn2TMdlpJr5e0fpi0MqqjpC5kEYgvvHVHsMwtBUG++EcGmZ3+aLx6fgp4xcu859V09OdnIGodqXSXPRm7wLa846t//wl/QnLVUF7MHqqW+fIYMRbVQ7UCP6xFGU7HbvU6Oo+sGon/pG5+JwxfqNWKkLtWUT1Vq3at79tI2T6WLPU6jir+OUppODhP8j0fEcYmwUYl2SMQm0p3S00+BqzYDhA2cz1hQYxRyoLJR4XKY8TjTFWZeWUqLEmynmkgR7wu8UfYo6iQb/N+LDLyMFvlYrscpe/pbLqJGNb5iL1UhY4m2Pts2WtNxiapXOYmIwIbQF0r/si9LsRGw3uhjHYsvxkxWyznptdd7y104qoK/wXeBqaTXp3rSh0xsZlgoxKBCjqiinZnprvC8DOdsJuwvZUdMyu5I0v1vQMJ9lCxXeU6lG6BoINTHPF22EuvrR4ul/5rgUybjemEIIWtyFx1FpdHdHOHnLLSDc9sm+qy9PYeM182dknxP/JyE85g6pezSjovhTX5bO/0Iz3fAufyXRNGMqIH+S2eOWgglNsFxREaREm9Gdkz34vk3SvW2KyV7bnvxTjWPl78w0YO29CvFqEr3sr/arYRIAf3kZkLbNJqsdnzDIMdy/NruzXALkx1zNl1YFho7oW0jeko39yan8bYTKzvzLC5zN/0n0RidZK5YxcxwWUux6x9wB6MLG/QfRedzYVgBLeAeixiOOxfXBanuiItPYedskLuzxtcdrjDq+HCAIWztTBsYaP3Q4FAtYWrEX+D2t0oaaRnZXS5oexlWnWOeViJuhddpDiQtuhaqJEAmwMFlMlInYJ5T/hJf2dvtt/lab+3cdIrWs+Dc6BJ5Re84D72RR6nAy4j3tLvMm8IoJVDzyIzGXj/6HpqdOQnIuYTChbSG6omvsh3Sw1qvlDcFSsZbV4SB5AaOo57Mo2kbeJHsh4Rh9YLrO9rjRlPWBo1Dg+zc938y4W9l7rhD9bQfZMFSnLK6tz1qXZki440SMwIAH8OfFwi2wrKv3NYlLNZxfh0PCwKAKjh3kQcl+g1S9L/ye7RdJPWtNndO+qwJ+ffqIvLrjymKDWgeAQtzjfAzpefhfU5Ogpovct/s80W40JZJsW9tq+h1xQ6YE4FsXRzZA3s37FRuXuOE3Yy9OGSKIwI9d6azXFgdxsDBt3reYNfao41e4f8cmK2VT9T2KVld4mqAUrGFC/FKNFQq56FjTNQvTO/diKKmbuV+RUSawFvik3rN4O4dnzI7GuqskleWPZVddBf6QyIbYqtNwl65IgPD/KsUjNT72CbipwfHkYn0x+CY2VTFkGK55vZn2ltOmDipld7kat9Z73PW1MhWwG7zR29dTrZs8TcD503d0XsAkA97JK+Wl4nn5iA/KGmtxhPH/yiuRjTS+tf2uNeU8gWxwUruplsgfTyteFFuKw4KMjdGYqABibqO4hNyRaBXLebJ8oZa8yULwjpMcRvYPTUjPLAsHsrB8vvv4jWS3yJkRfh7FCP2xuOxFGeVYonyggbMjfgUty+E0dU2kQiGxyIjXmnjATHOC2AIG5xiTy02Pdd5DPsbPRZXW5HrDpy0BwhNiW7reXYpHQbv+Xa+WeAWdGtiFyM/MgIlxThz8uVBuljumPhoIGtpk/qIhQdrKHPgP6mZNqsdkiWVhUrcjQFbhjCxohUGhuzFdEN8NcVX/kGlSDvADfZFPvajnF9rhMkdTrve+Cz4KZY9muIasuxfUm1ixtU4jfNrBGj90hgY4JppWBenuzBlY4yZGooZBWy0s7KeVDOp0oq4HkxoASKyph001gvbCzVK1mPF1C195D2IK/f8HE73DNXiqiwAaWE3Sxosi3Q/dEbC2vsQLhKM/INHJMU3f5HvTaz8ItK+8VG1yUfym22L/tNjbGoCaM+rqkkAPqW4gRRe2P1WejxV4idxPamfrSGYa4zGyqItMBxDXT+YVa4EQhTI23MloeHglL3WrPdLJIy7H9mJDhGfW/3RSQSEhuYZWSKo386ZMGHiczkhT3myPx5oMRUYpcnPhq3CqqW6mL6J1qoDn0gumFH2h3bB6xJURakDilGTnMu6JJ+xJ5nprNbb7K/NNjGETtBy9BxqAdo1cNTCsQ+ay9qnjgGmEp5c7F3rycDiiugtyvbLfxAxHiRyTStnnCyLXgxuyUIo7NdVk812NGZVYBKzBGCYe1v2oDQhviMvjsZSclkkaYNa3MnyH1p/rpMjkjH0JtMgIImU5aZWoO9ugtroBI+3WCBHgD4uTw++gPk9kmxqhouZN9/SIGjbdmq1vPkIemsRcFxTlt2vs87WmEZMkhtmnQFDr0owOaFRWx31hN53mhSDZ0m74lUVsdle/TD6Sj8Fwanu7Lpa15ohuy5lDO6dquE/qaSLm7/MHYXUKY4XHHo2OO1s1VDW1/LYZ6FnNw11ho+5e3hrBg/4SFhik5H8FfY//jeJMGx9cD1ZUkTD9t1c1yxtkiwG+VKPNkWD8o5jQyeT5BJMc7iT56H15r07dzbYg7xX2wQn+fXEFg22NANO1c+kGUSpf369w1rF+9apCcuwuIYkM0VvB8gKiMhJbP9Lo+WwQolUwUBJMTKELkJ9JPA0hzdbl06wKHHJ0I6RczO37RLSy5BCvT4EVkp1tENLLme9YEx8fY64nHlRdDg9ZnF55btDxPLrAy/vSCpmY3Y/X3JNC6ctc/eznMKiM5OfchyFM7zN/uvzIQaVLq5K87nbP0Xj6mIApu9lvR8BICxvh7FJY12Tl8zX3FSpc+eznSXyJWQ8dTamuVihW2Z+1IKhHW7qS8ykROPjUie0GjJQHtSt/Il5gzeowXnJ2bInH2YwOzEyC8Xi+9Nn2k7eSNGBPr7hgNQq4l+xak9KQmkhoF5S/IMb2wcOBSitfT4uNZn3heOWcB0dkIl7SYlOdW12X+Z1HTrOcsVzLsukuSTewvgr6PUdGlwj9tsS3+XiNk5Mv6XDqBYwQyLWiqRg4b2u7r8XbUIMWBS+YbMiAwl6XB9tUuUJEUvAG+HeQjJB2NRu1ZrM7alnfD7kXGX6gftLx528wlvNjWS3GL2EQWhgIatulsApcp68/tvfLvoMtg8oU9rGDU18iIiCqyX28NhOyN1pjN7Ei7QD+pfZj8jX0JhgxuQHmF6QreKTsEYuB3p3bN3mO5GTN+s8i2LDVaCYqyRzjEc0vsIZPoYtL/BC0epN2FTVBnEUFon9F4oCdAzefUvbTMmSTu1wlTmlRp4LmrEiy9UKzJmZzIYLL/DJcOTHtsXk0NYGF1kx1E4ly08apC/ZwHcjaz9sR4UnVc8/za4XGdvJ5QxO/8N9i1kbGzsMohqB6Dbt4B7C2DVzo0qAdmNwhtjw4nleBUqYDi6S1hay7YKmhEbf5d/iIncdu5HzUtRw1h8iTQfGHZ5AzXDy+AgqmwS+VaRiYYoRxjKJcTnnMbXlzGbI/P9DYhoMk/YM94jUPyk6Sb0w9Lkh2v2e6G7Ud4VNW9kwx7xGPTM73SnKIvZasERm16yNROxdog4YG3YwrdbTSCUMwD0GA7JznQ3c4cD0Y1QSO+SM7+TB5t3um+6bInYx2WbVlHjleD6EyEctDL0PHVAfmmBDcxujALNbBZ3Te5MaixBqtkJT9z7YLrlE1+KjFVHEr0tojUJbqDSvFClLyBQFdhkVmGkeWbjWI8nutCFa82RfygbtRfdEX0tcRW7AK1dNfgrO0SYMrM4rTY6nwf7+IsmYZa2aP8NScDsUPxkZ4tD5krcdxkoS89Vy2K2vontc6YepwVnLxaJguyAG4W4dkcaG3isfW4IzPSjqDlaZ/vZaOxb4bDNxtkV9uQOgqZ731oyrhuFbpNtqzl3t4P6ClaUJKlCOhwbOqAJ4mAvS45Ynjfrg1Ws4VI9YBE1n4nYYiejTrRwuY/+3vx0E9IALhK0UMvhWJT8AhuV1hswaFgNm+LdpizQGJWTsw1ut5MV6ZG5Nvakn8ykzVaIjHMbnxKSKaRtqmbUgSp/Ub5YHgOQOV8deEi0xVd8PjPK9zcdW4jzQZOBZmadlR5RgocZ+OAcEhvli01ClM6N5HC3Gc8VGrpgoIoQcW2rgteAPU+bYlM9FE2rR8MU62xV9eEt2KjQaQ00NjJkABq4shqRj7CNwCNvh+og4yAmerKO6k3bLJL62IhcXSsxaJJSY4fqj7XBUwQ09SUtQGVsZsmh8kZ+So+v7eA5NGkpRK+MS6Sy7fly4z3m04jwOCUbyp3ZGzA+mo52uaCyAZU4JDYSBqBU8kVuZ9GbWmyRFGur2DjO/EAUpVaSuPYH9qYRGMA4SVcXCyZRwuYMOVyV5gMyFaFMXA/ZXl9oZlImj58qQoqPnNm3MppWhbhJVxXIAdYNkJZO5sXSYUOeQTHZLhL8ELSnMsU0mxo+jU183tZko2klkHGTriqQzhNqqKfmH6mzf2VIgt3m5qq3/syhGexMtziBJvVAjGpyOJ/OaEG1lk185GwptagCQYwF2F2zJnee6m3heqLO8pVjJvw4gltjqM0cZ3U7zabVLyGT/yq8GwOzcFgQlyKiDhnf61EKvzzDApBS8P5ODs0pLsxDemQwwIX2Ic4/IpMQ9r8NE6Z6W8LqyFbyEZXAcA7+QNP+Tvlh0LQSyJykFlUlrY0ZFc3NZdTWCxHKbLaRvR0p76lCVo+9s84/sW0INK1+G5lcZpFhzG2dxlosCk85B2urk/9m5Rm5T4JZgWWJtaCckHjAx8yeRbqqVDrLhrZoPXml5gyiA2ZluMQIJ6tlcW2PHA5blJXOoGklkDmLdFW1pPsmY0GQn8qgEhSKptfkJodHENROzQwITA8EyWbdmn8bAptWApkzSVc/IL31aDYbrbVDJQ7dlhwTjA3Ric9HCtapL1Pl29rs4FYa2LQSyJxLuvoVIaivskWBbYrgc2VBiWAHjmIW12sRGziIIbnAptXVdYYUIokx5v9w7Tabhjkoy+nH6jB1h5rW0MP8uC/R0X5JiGJTlgz2SRRYDbJ3fOMZjcWOJguZr9DRfkmIQYNMR6xtTBZlxKU2ZVLsaMLIfJl09Ttip/hSPawton4dfjQDr4SLTAluWglkGjeJDLV9RU5v7b4XPN0/b2oNvsLw6E0HBGv4G3S035JPrDiaJkqYm+lxFo0vPWwPN624PEbD230s/ArruB7S2XWob2xCOUTODUCEjJ6t01szGXyXdPU7giO10RcnRgZhICJz6xidRZjhb17GFD35xpGhIrW6YHJ3KtuM+pP5OD/VOzjvqaf9LWVM3iBY3vrzs+wTk/XfqKagVzxSIb/Y8x6b9o6bVlyi4AI62m8J7mCZ3Rh6l7sQ//F0amM3rQQylxD1fk9wFhOgGYITmtPOxm5aSWSs00RuU6yDb01tcA/+qTPEoNhNK4XMjelM6/hKtwsQAwc1aVxWFZafAEQ1rW4VmSyNeWzTp7ugguoRJan0xsnYK52pEE0riUyVDzOoSIZWX1cJ2pqH1z6003yfrcr8BdG0EoheTu78ASkov45TUsGQljgh4T2G2Ykf1NKSnyKaVhKZyh7xUKW0GvwIcPJuP4OzPIiGVCvL3dR7MmMp4bqKLf2EVETurF42/E7SIzSzoHKcOJUsxeN0WbxP3T+DmFYQmQqJelWKDDb0kdAmldr9yO1O/32UrssuEDGtDKmM9lq96ChNTuyNggoz3s4XsmklkamS3FmxbFRzgNyEYwxpv3veN2ZaQWRu+PlzZlFAtel0sfmFdowpdNOqkKppr1WLWRNRR5ToR82cynVJScmmlUCmctprtQKGc/DIRy7K35Qca+ySztCnE2Dvh2iv1Qqss4kGryTMhK4TI53iqrMFMj9Ce61U8LH/VtYuSWjnNjillLiZH6S9VivwsSXW0XjqOMGvzRXTV6eb+WlyZ4WCFQdZlWBLnD6/z5BO11Ua/K+QebA6e7BkEv1y99EytiRTt5vJkflfPWt4VAIOH2t+AZo/e7ebOXXW4C1KCrNWw6yOfKf/2dH7/dXRgeDIlJ81eJsyh+5BPuQu9fIL9c9+OqRjaiCR+VVyZ3UyWcADithmPF3xIqgenXezk3GJm/n/IpPLEG0viSJeN7PNWT2nfpmbyZFJf3j9PyqtcWBbxMB1wBcUx3BSAFO/Du21UumMXhlrq/onjFl01nhxtrPZeX6tHfEnjdeeV+lPr/xXJBm9LCLe3owWH+d4iGSpTjL0/LAeF4g8+ovDdjxL55PbbAJ/WzpJfz7vJ+eNXeeMNdvRoFCR5u519bEcvf858bTBe5H+8bjajoej93mv9f8YYv+TS+U/cvE7Elcp5noAAAAASUVORK5CYII=" },
    { name: "muse", logo: "https://via.placeholder.com/150x60/000000/FFFFFF?text=muse" },
    { name: "VERSACE", logo: "https://1000logos.net/wp-content/uploads/2016/10/Versace-Logo.png" },
    { name: "COACH", logo: "https://1000logos.net/wp-content/uploads/2017/04/Coach-Logo.png" },
    { name: "EMPORIO ARMANI", logo: "https://logos-world.net/wp-content/uploads/2020/04/Emporio-Armani-Logo.png" },
    { name: "GUCCI", logo: "https://1000logos.net/wp-content/uploads/2016/10/Gucci-Logo.png" }
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
              <div key={index} className="bg-white rounded-lg shadow-sm p-3 md:p-4 flex items-center justify-center hover:shadow-md transition-shadow h-16 md:h-20">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter brightness-75"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-xs md:text-sm font-semibold text-gray-700 text-center hidden">
                  {brand.name}
                </span>
              </div>
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

export default PopularBrandsSection;
