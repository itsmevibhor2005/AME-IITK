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
      speed: 2000,
      autoplaySpeed: 1500,
      cssEase: "linear",
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
        <div className="slider-container h-[170px] w-full m-5">
          <h2 className="text-center text-purple-600 font-bold text-6xl underline">
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
}

export default Sponsors
