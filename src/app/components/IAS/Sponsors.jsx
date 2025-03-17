import React, { useEffect, useState } from "react";


const Sponsors = () => {
    
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
        <div className="slider-container lg:m-8 sm:m-5 lg:h-[170px] sm:h-[120px] h-[90px] w-full m-5">
          <h2 className="text-center text-purple-600 font-bold lg:text-6xl sm:text-4xl text-2xl underline">
            Our Sponsors
          </h2>
          <div className="flex  flex-row justify-center items-center">
            {sponsors.map((sponsor, index) => (
              <div className="flex justify-center items-center">  

              <img
                key={index}
                src={sponsor.logo}
                alt={sponsor.sponsor}
                className="lg:h-[200px] lg:w-[250px] sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] object-contain m-5"
                />
                </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center"> Loading .... </p>
      )}
    </>
  );
}

export default Sponsors
