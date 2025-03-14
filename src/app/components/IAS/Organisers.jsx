import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Organisers = () => {
    
  const [organisers, setOrganisers] = useState([]);
  useEffect(() => {
    const fetchOrganisers = async () => {
          try {
            const res = await fetch("/ame/data/IAS_2025/Organisers/organisers.json");
            const data = await res.json();
            setOrganisers(data);
          } catch (err) {
            console.error("Error fetching organisers data:", err);
          }
        }
    fetchOrganisers();
    }
    , []);
  return (
    <>
      <motion.h1
        className="lg:text-5xl sm:text-3xl text-xl text-center font-bold text-purple-700 m-10 underline"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Organising Committee
      </motion.h1>
      <motion.div
        className="lg:text-2xl sm:text-xl text-lg text-black w-[90vw] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <section className="mb-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
            {renderMembers(organisers)}
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Organisers

const renderMembers = (membersArray) => {
    return membersArray.map((member, index) => (
      <motion.div
        key={index}
        className="relative group flex flex-col items-center justify-center text-center p-6 shadow-lg rounded-lg bg-white xl:w-64 w-60 h-80 transition-transform duration-300 cursor-pointer overflow-hidden"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1, // Increase the height of the card
          backgroundColor: "rgb(245, 240, 255)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-rotate z-0">
          <div className="h-full w-full bg-white rounded-lg"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <h2 className="text-lg font-semibold">{member.designation}</h2>
          {/* <p className="text-sm text-gray-600">{member.description}</p> */}
        </div>

        {/* Hidden details visible on hover */}
        {/* <motion.div
          transition={{ delay: 1 }}
          className="relative inset-0 flex items-center justify-center group-hover:flex flex-col mt-4 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 z-10"
        >
          <p className="hover:underline">
            <span className="text-purple-400 ">Email: </span>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${member.email}`}
              target="_blank"
            >
              {member.email}
            </a>
          </p>
          
        </motion.div> */}
        <div className="absolute inset-0 group-hover:h-[400px] transition-all duration-300"></div>
      </motion.div>
    ));
  };

