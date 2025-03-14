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
     speed: 3000,
     autoplaySpeed: 0,
     cssEase: "linear",
     rtl: true,
     responsive: [
       {
         breakpoint: 1024, // Tablets
         settings: {
           slidesToShow: 3,
         },
       },
       {
         breakpoint: 768, // Mobile landscape
         settings: {
           slidesToShow: 3,
         },
       },
       {
         breakpoint: 480, // Mobile portrait
         settings: {
           slidesToShow: 2,
         },
       },
     ],
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
         <div className="slider-container lg:m-7 sm:m-5 m-4 lg:h-[170px] sm:h-[120px] h-[90px] w-full">
           <h2 className="text-center text-purple-600 font-bold lg:text-5xl sm:text-4xl text-2xl underline">
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
                   className="max-h-full lg:w-[400px] sm:w-[350px] w-[250px] object-contain"
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
