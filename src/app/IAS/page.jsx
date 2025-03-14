"use client"

import React, { useEffect, useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import { Card, CardMedia, Typography } from "@mui/material";
import { InteractiveHoverButtonLeft } from "@/components/ui/interactive-hover-button-left";
import { InteractiveHoverButtonRight } from "@/components/ui/interactive-hover-button-next";

import IASGallery from "../components/IAS/IASGallery";
import Talks from "../components/IAS/Talks";
import ParticipatingIndustries from "../components/IAS/ParticipatingIndustries";
import ParticipatingInstitutes from "../components/IAS/ParticipatingInstitutes";
import Schedule from "../components/IAS/Schedule";
import Organisers from "../components/IAS/Organisers";
import Sponsors from "../components/IAS/Sponsors";

export default function IndustryAcademiaSymposium() {
  const [prevcategories, setprevCategories] = useState([]);
  const [prevgalleryItems, setprevGalleryItems] = useState([]);
  
  useEffect(() => {
      const fetchprevGalleryItems = async () => {
        try {
          const res = await fetch("/ame/data/RSD/rsd.json");
          const data = await res.json();
          setprevGalleryItems(data.images);
        } catch (err) {
          console.error("Error fetching gallery data:", err);
        }
      };
                  
        const fetchprevCategories = async () => {
          try {
            const res = await fetch("/ame/data/RSD/rsd-category.json");
            const data = await res.json();
            setprevCategories(data.category);
          } catch (err) {
            console.error("Error fetching categories data:", err);
          }
        };
        
        fetchprevGalleryItems();
        fetchprevCategories();
    }, []);
    // Pagination and filtering state
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 4;
  
    // Filter items based on the selected category
    const filteredItems =
      selectedCategory === "All"
        ? prevgalleryItems
        : prevgalleryItems.filter((item) => item.category === selectedCategory);
  
    // Calculate the indices for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
    // Handle pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    // Handle category change
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      setCurrentPage(1); // Reset to first page when category changes
    };
  
  return (
    <div className="flex flex-col items-center justify-center  p-6">
      {/* Heading */}
      <motion.div
        className="flex justify-center h-[150px] items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/ame/images/iitk_logo.png"
          alt="#logo"
          className="w-[150px]"
        />
        <span className="lg:text-6xl sm:text-4xl text-2xl text-center font-bold text-purple-700">
          Industry Academia Symposium - 2025
        </span>
        <img
          src="/ame/images/IAS-2025/IAS_logo.png"
          alt="#logo"
          className="w-[150px]"
        />
      </motion.div>
      <motion.p
        className="lg:text-4xl sm:text-2xl text-xl text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="my-3">
          <span className="font-bold text-4xl">Date : </span>
          <span className="text-4xl"> 22nd - 23rd March 2025</span>
        </div>

        <div className="text-gray-800 my-3">
          Department of Mechanical Engineering
        </div>
        <div className="my-3">IIT Kanpur</div>
      </motion.p>

      {/* Participating Industries  */}
      <ParticipatingIndustries/>

      {/* Participating Institutes  */}
      <ParticipatingInstitutes/>

      {/* About IAS  */}
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl m-10 text-center font-bold text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About IAS
      </motion.h1>
      <motion.p
        className="lg:text-2xl sm:text-xl text-lg text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="font-bold">Industry Academia Symposium (IAS)</span>,
        the flagship event by AME under the Department of Mechanical
        Engineering, showcases the innovative spirit of both academia and
        industry. Featuring oral presentation sessions by{" "}
        <span className="font-bold">senior PhD students</span> of Mechanical
        Engineering department (<span className="font-bold">either 4years</span>{" "}
        or <span className="font-bold">above</span> or{" "}
        <span className="font-bold">
          PG students having at least one publication
        </span>
        ), esteemed faculties, and industry representatives, it fosters research
        awareness and ignites collaboration between academia and industry
        towards advances in Mechanical Engineering.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a
          href="https://docs.google.com/forms/d/19ED1SCF0-4UhSxI41kieKALknEQ1JeQg6rhgqy68XiU/edit"
          target="_blank"
        >
          <RainbowButton className="mt-10 lg:w-[200px] sm:w-[175px] w-[150px] mb-10 lg:h-[50px] sm:h-[45px] h-[40px] lg:text-xl sm:text-lg text-sm">
            Register Now
          </RainbowButton>
        </a>
      </motion.div>

      {/* ME Dept */}
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl m-10 text-center font-bold text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About ME Department, IIT Kanpur
      </motion.h1>
      <motion.p
        className="lg:text-2xl sm:text-xl text-lg text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <span className="font-bold">Industry Academia Symposium (IAS)</span>,
        the flagship event by AME under the Department of Mechanical
        Engineering, showcases the innovative spirit of both academia and
        industry. Featuring oral presentation sessions by{" "}
        <span className="font-bold">senior PhD students</span> of Mechanical
        Engineering department (<span className="font-bold">either 4years</span>{" "}
        or <span className="font-bold">above</span> or{" "}
        <span className="font-bold">
          PG students having at least one publication
        </span>
        ), esteemed faculties, and industry representatives, it fosters research
        awareness and ignites collaboration between academia and industry
        towards advances in Mechanical Engineering.
      </motion.p>

      {/* Submissions  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a href="#" target="_blank">
          <RainbowButton className="mt-10 lg:w-[500px] sm:w-[175px] w-[150px] mb-5 lg:h-[60px] sm:h-[55px] h-[50px] lg:text-xl sm:text-lg text-sm">
            Submissions
          </RainbowButton>
        </a>
      </motion.div>

      {/* Key Events  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a href="#" target="_blank">
          <RainbowButton className="mt-5 lg:w-[500px] sm:w-[175px] w-[150px] mb-5 lg:h-[60px] sm:h-[55px] h-[50px] lg:text-xl sm:text-lg text-sm">
            Key Events
          </RainbowButton>
        </a>
      </motion.div>

      {/* Talks  */}
      <Talks/>

      {/* Schedule */}
      <Schedule/>

      {/* IAS Gallery  */}
      <IASGallery/>

      {/* Sponsors */}
      <Sponsors/>

      {/* Organisers  */}
      <Organisers/>

      {/* Previous RSD  */}
      <motion.h1
        className="lg:text-5xl sm:text-3xl text-xl text-center font-bold text-purple-700 mb-10 underline"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Previous RSDs
      </motion.h1>
      <div className="flex flex-wrap gap-4 justify-center space-x-4 mb-4">
        {prevcategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white lg:text-base sm:text-sm te font-semibold transition-all ${
              selectedCategory === category
                ? "bg-purple-700"
                : "bg-gray-500 hover:bg-purple-500"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="absolute w-full h-1 bg-purple-700 mb-5 opacity-50 top-1/2 transform -translate-y-1/2 animate-expand-line"></div>
      </div>
      {/* Gallery grid */}
      {prevgalleryItems.length ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <Card
                key={item.id}
                className="shadow-xl opacity-75 hover:opacity-100 h-[400px] hover:shadow-2xl hover:scale-105 transition-transform  duration-300 ease-in-out hover:cursor-pointer"
              >
                <CardMedia
                  component="img"
                  height="500"
                  image={item.image}
                  alt={item.title}
                  className="rounded-t-lg object-cover w-full h-full"
                />
              </Card>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center"> Loading .... </p>
      )}

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-8">
        <InteractiveHoverButtonLeft
          onClick={handlePrevious}
          disabled={currentPage === 1} // Disable Prev button if on first page
          className={`${currentPage === 1 ? "bg-gray-400" : "bg-white"}`}
        >
          Prev
        </InteractiveHoverButtonLeft>
        <Typography className="mx-4 text-gray-700">
          Page {currentPage} of {totalPages}
        </Typography>
        <InteractiveHoverButtonRight
          onClick={handleNext}
          disabled={currentPage === totalPages} // Disable Next button if on last page
          className={`${
            currentPage === totalPages ? "bg-gray-400" : "bg-white"
          }`}
        >
          Next
        </InteractiveHoverButtonRight>
      </div>
    </div>
  );
}