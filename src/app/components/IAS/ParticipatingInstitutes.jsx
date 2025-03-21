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
     speed: 3000, // Reduce transition time for a smoother effect
     autoplaySpeed: 0, // Increase this to avoid instant jumping
     cssEase: "linear", // Use a smoother easing function
     rtl: true,
     pauseOnHover: false,
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
         <div className="slider-container lg:m-10 sm:m-7 m-6 lg:h-[170px] sm:h-[120px] h-[90px] w-full">
           <h2 className="text-center text-purple-600 font-bold lg:text-5xl sm:text-4xl text-2xl underline">
             Participating Institutes
           </h2>
           <Slider {...settings}>
             {industries.map((industry) => (
               <div
                 key={industry.institute}
                 className="w-1/4 h-full mt-5 flex items-center justify-center"
               >
                 <img
                   src={industry.logo}
                   alt={industry.institute}
                   className="max-h-full lg:w-[160px] lg:h-[160px] sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] object-contain"
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
