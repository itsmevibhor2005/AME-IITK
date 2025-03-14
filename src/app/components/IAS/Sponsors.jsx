import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsors = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
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

    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchSponsors = async () => {
          try {
            const res = await fetch(
              "/ame/data/IAS_2025/Sponsors/sponsors.json"
            );
            const data = await res.json();
            setSponsors(data);
          } catch (err) {
            console.error("Error fetching sponsors data:", err);
          }
        };
      fetchSponsors();
    }, []);
  return (
    <>
      {sponsors.length ? (
        <div className="slider-container lg:m-7 sm:m-5 lg:h-[170px] sm:h-[120px] h-[90px] w-full m-5">
          <h2 className="text-center text-purple-600 font-bold lg:text-6xl sm:text-4xl text-2xl underline">
            Our Sponsors
          </h2>
          <Slider {...settings}>
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.sponsor}
                className="w-1/4 h-full flex items-center justify-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.sponsor}
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
}

export default Sponsors
