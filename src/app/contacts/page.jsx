"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import contacts from "/data/contacts.json";

const ContactPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/data/Contacts/contacts.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched members:", data.members); // Log fetched data
        setMembers(data.members);
      });
  }, []);

 

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

        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">{member.name}</h3>
          {/* <p className="text-sm text-gray-600">{member.description}</p> */}
        </div>

        {/* Hidden details visible on hover */}
        <motion.div
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
          {/* <p>
            <span className="text-purple-400">Phone: </span>
            {member.phone}
          </p> */}
        </motion.div>
        <div className="absolute inset-0 group-hover:h-[400px] transition-all duration-300"></div>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[rgb(255,255,255)] to-[rgb(234,231,246)] p-6 flex flex-col items-center">
      <h1 className="lg:text-6xl sm:text-4xl text-3xl underline text-purple-800 font-bold text-center mb-10">
        AME TEAM
      </h1>

      {members.length ? (<>

        {/* Faculty Advisor */}
        <section className="mb-10">
        <h2 className="lg:text-4xl text-2xl sm:text-3xl text-purple-500 font-bold text-center mb-6">
          {members[0].title}
        </h2>
        <div className="flex justify-center">{renderMembers([members[0]])}</div>
      </section>

      {/* President */}
      <section className="mb-10">
        <h2 className="lg:text-4xl text-2xl sm:text-3xl text-purple-500 font-bold text-center mb-6">
          {members[1].title}
        </h2>
        <div className="flex justify-center">{renderMembers([members[1]])}</div>
      </section>

{/* Vice President */}
<section className="mb-10">
        <h2 className="lg:text-4xl text-2xl sm:text-3xl text-purple-500 font-bold text-center mb-6">
          {members[2].title}
        </h2>
        <div className="flex justify-center">{renderMembers([members[2]])}</div>
      </section>

      {/* Coordinators */}
      <section className="mb-10">
        <h2 className="lg:text-4xl text-2xl sm:text-3xl text-purple-500 font-bold text-center mb-6">
          {members[3].title}
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
          {renderMembers(members[3].members)}
        </div>
      </section>
      {/* Coordinators */}
      <section className="mb-10">
        <h2 className="lg:text-4xl text-2xl sm:text-3xl text-purple-500 font-bold text-center mb-6">
          {members[4].title}
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
          {renderMembers(members[4].members)}
        </div>
      </section>
      </>
       ) : (
        <Image
                src="/Gears.gif"
                alt="Logo"
                width={400}
                height={400}
                className=""
              />
      )
    }
    </div>
  );
};

export default ContactPage;
