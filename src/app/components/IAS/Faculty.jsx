import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

    
    

const Faculty = () => {
    const [talks, setTalks] = useState([]);
    useEffect(() => {
      const fetchTalks = async () => {
        try {
          const res = await fetch(
            "/ame/data/IAS_2025/Faculty_Talks/faculty.json"
          );
          const data = await res.json();
          setTalks(data);
        } catch (err) {
          console.error("Error fetching talks data:", err);
        }
      };
      fetchTalks();
    }, []);
  return (
    <>
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl m-10 text-center font-bold text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Faculty Delegates
      </motion.h1>
      <motion.div
        className="lg:text-2xl sm:text-xl text-lg text-black w-[90vw] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {talks.map((talk, index) => (
          <div key={index}>
            <motion.div
              className={`flex flex-col sm:flex-row items-center my-10 p-5 rounded-xl shadow-lg bg-white ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="sm:w-1/3 flex flex-col items-center">
                <img
                  src={talk.image}
                  alt={talk.speaker}
                  className="lg:w-[250px] lg:h-[250px] sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] object-cover border-4 border-purple-500"
                />
                <p className="lg:text-2xl sm:text-xl text-lg">{talk.speaker}</p>
                <p className="lg:text-xl sm:text-lg text-base font-bold mt-3">
                  {talk.college}
                </p>
              </div>
              <div className="sm:w-2/3 text-left p-5">
                <p
                  className="text-gray-700 mt-2 sm:text-lg lg:text-xl text-base"
                  dangerouslySetInnerHTML={{
                    __html: talk.description.replace(
                      /\*\*(.*?)\*\*/g,
                      "<b>$1</b>"
                    ),
                  }}
                ></p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Faculty
