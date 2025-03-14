import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ParticipatingInstitutes = () => {
   const [industries, setIndustries] = useState([]);
   const settings = {
     dots: false,
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     speed: 2000,
     autoplaySpeed: 1500,
     cssEase: "linear",
     rtl: true,
   };
   useEffect(() => {
     const fetchIndustries = async () => {
       try {
         const res = await fetch(
           "/ame/data/IAS_2025/Institutes/institutes.json"
         );
         const data = await res.json();
         
         setIndustries(data);
       } catch (err) {
         console.error("Error fetching sponsors data:", err);
       }
     };
     fetchIndustries();
   }, []);
   return (
     <>
       {industries.length ? (
         <div className="slider-container m-7 h-[170px] w-full">
           <h2 className="text-center text-purple-600 font-bold text-5xl underline">
             Participating Institutes
           </h2>
           <Slider {...settings}>
             {industries.map((industry) => (
               <div
                 key={industry.institute}
                 className="w-1/4 h-full flex items-center justify-center"
               >
                 <img
                   src={industry.logo}
                   alt={industry.institute}
                   className="max-h-full w-[400px] object-contain"
                 />
               </div>
             ))}
           </Slider>
         </div>
       ) : (
         <p className="text-center"> Loading .... </p>
       )}
     </>
   );

};

export default ParticipatingInstitutes;
