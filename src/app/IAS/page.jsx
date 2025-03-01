"use client"

import React, { useEffect, useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import { Card, CardMedia, Typography } from "@mui/material";
import { InteractiveHoverButtonLeft } from "@/components/ui/interactive-hover-button-left";
import { InteractiveHoverButtonRight } from "@/components/ui/interactive-hover-button-next";

export default function IndustryAcademiaSymposium() {
  const [categories, setCategories] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  
  useEffect(() => {
      const fetchGalleryItems = async () => {
        try {
          const res = await fetch("/data/RSD/rsd.json");
          const data = await res.json();
          setGalleryItems(data.images);
        } catch (err) {
          console.error("Error fetching gallery data:", err);
        }
      };
  
        const fetchCategories = async () => {
          try {
            const res = await fetch("/data/RSD/rsd-category.json");
            const data = await res.json();
            setCategories(data.category);
          } catch (err) {
            console.error("Error fetching categories data:", err);
          }
        };
  
        fetchGalleryItems();
        fetchCategories();
    }, []);
    // Pagination and filtering state
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 4;
  
    // Filter items based on the selected category
    const filteredItems =
      selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory);
  
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
      {/* Animated Heading */}
      <motion.h1
        className="lg:text-6xl sm:text-4xl text-2xl text-center font-bold text-purple-700 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Industry Academia Symposium
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="lg:text-2xl sm:text-xl text-lg text-black max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      ><a
            href="https://docs.google.com/forms/d/19ED1SCF0-4UhSxI41kieKALknEQ1JeQg6rhgqy68XiU/edit"
            target="_blank"
          >
        <RainbowButton className="mt-10 lg:w-[200px] sm:w-[175px] w-[150px] mb-10 lg:h-[50px] sm:h-[45px] h-[40px] lg:text-xl sm:text-lg text-sm">
          
            Register Now
          
        </RainbowButton>
        </a>
      </motion.div>

      <motion.h1
        className="lg:text-5xl sm:text-3xl text-xl text-center font-bold text-purple-700 mb-10 underline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Previous RSDs
      </motion.h1>
      <div className="flex flex-wrap gap-4 justify-center space-x-4 mb-4">
        {categories.map((category) => (
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
      {galleryItems.length ? (
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
      {/* <div className="text-center relative my-6 min-h-[100vh]">
            
           
      
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] md:gap-[5rem] items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/DD-Xn5TzkkC/" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/C-vSuAoONik/" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mx-auto"
              >
                <InstagramEmbedCustom url="https://www.instagram.com/p/C-aZLMBogSZ/" />
              </motion.div>
            </div>
          </div> */}
    </div>
  );
}

const InstagramEmbedCustom = ({ url }) => {
  if (!url) {
    return (
      <div className="text-center text-red-500 font-medium">
        Please provide a valid Instagram post URL.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[60vw] sm:min-h-[90vh] min-h-[50vh] mx-auto border scroll-smooth rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`${url}embed`}
        width="100%"
        height="500"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="w-full sm:min-h-[90vh] min-h-[50vh] overflow-y-hidden"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

