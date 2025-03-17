import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ParticipatingIndustries = () => {
  const [industries, setIndustries] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000, // Reduce animation speed
    autoplaySpeed: 0,
    cssEase: "linear",
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
        const res = await fetch("/ame/data/IAS_2025/Companies/companies.json");
        const data = await res.json();
        // console.log(data);
        // console.log(data.logo);
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
            Participating Industries
          </h2>
          <Slider {...settings}>
            {industries.map((industry) => (
              <div
                key={industry.industry}
                className="w-1/4 h-full flex items-center justify-center"
              >
                <img
                  src={industry.logo}
                  alt={industry.industry}
                  className="max-h-full lg:w-[280px] lg:h-[230px] sm:w-[200px] sm:h-[180px] w-[150px] h-[140px] object-contain"
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

export default ParticipatingIndustries;
