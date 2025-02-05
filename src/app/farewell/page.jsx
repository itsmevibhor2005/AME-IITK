"use client";

import React, { useState } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { InteractiveHoverButtonLeft } from "@/components/ui/interactive-hover-button-left";
import { InteractiveHoverButtonRight } from "@/components/ui/interactive-hover-button-next";

const Farewell = () => {
  // Sample images, titles, and categories for the gallery
  const galleryItems = [
    {
      id: 1,
      title: "Sunset",
      image: "https://picsum.photos/200/300",
      category: "Nature",
    },
    {
      id: 2,
      title: "Mountains",
      image: "https://picsum.photos/200/300?random=1",
      category: "Nature",
    },
    {
      id: 3,
      title: "Cityscape",
      image: "https://picsum.photos/200/300?random=2",
      category: "Urban",
    },
    {
      id: 4,
      title: "Bridge",
      image: "https://picsum.photos/200/300?random=3",
      category: "Urban",
    },
    {
      id: 5,
      title: "Flowers",
      image: "https://picsum.photos/200/300?random=4",
      category: "Nature",
    },
    {
      id: 6,
      title: "Portrait",
      image: "https://picsum.photos/200/300?random=5",
      category: "People",
    },
    {
      id: 7,
      title: "Concert",
      image: "https://picsum.photos/200/300?random=6",
      category: "People",
    },
    {
      id: 8,
      title: "Ocean",
      image: "https://picsum.photos/200/300?random=7",
      category: "Nature",
    },
  ];

  // Pagination and filtering state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 8;

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
    <div className="p-8">
      <h1 className="text-6xl font-bold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
        Farewell
      </h1>

      {/* Navbar for categories */}
      <div className="flex justify-center space-x-4 mb-4">
        {["All", "Nature", "Urban", "People"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-all ${
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
              className="rounded-t-lg"
            />
          </Card>
        ))}
      </div>

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
};

export default Farewell;
