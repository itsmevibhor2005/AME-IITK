import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const Schedule = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const fetchSchedule = async() =>{
          try{
            const res = await fetch("/ame/data/IAS_2025/Schedule/schedule.json");
            const data = await res.json();
            setSchedule(data);
          } catch (err) {
            console.error("Error fetching schedule data:", err);
          }
        }
        fetchSchedule();
    }
    , [])
  return (
    <>
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl m-10 text-center font-bold text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Schedule
      </motion.h1>
      <div className="flex justify-center items-center w-[100vw]">
        <motion.div
          className="grid grid-cols-2 text-left text-lg w-[70vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {schedule.map((item, index) => (
            <React.Fragment key={index}>
              <div className="font-semibold bg-purple-500 text-xl p-5 w-[35vw] border-b-2 text-gray-800">
                {item.event}
              </div>
              <div className="text-gray-600 w-[35vw] border-b-2 p-5 bg-purple-300">
                {item.date}
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Schedule
