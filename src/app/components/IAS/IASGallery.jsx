import React, {useState, useEffect} from 'react'
import { Card, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { InteractiveHoverButtonLeft } from "@/components/ui/interactive-hover-button-left";
import { InteractiveHoverButtonRight } from "@/components/ui/interactive-hover-button-next";

const IASGallery = () => {
    const [IASgalleryItems, setIASGalleryItems] = useState([]);
      const [IAScategories, setIASCategories] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
          const [selectedCategory, setSelectedCategory] = useState("All");
          const itemsPerPage = 4;

          const filteredItems =
            selectedCategory === "All"
              ? IASgalleryItems
              : IASgalleryItems.filter(
                  (item) => item.category === selectedCategory
                );

          // Calculate the indices for pagination
          const indexOfLastItem = currentPage * itemsPerPage;
          const indexOfFirstItem = indexOfLastItem - itemsPerPage;
          const currentItems = filteredItems.slice(
            indexOfFirstItem,
            indexOfLastItem
          );

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
  

      useEffect(() => {
        const fetchIASGalleryItems = async () => {
          try {
            const res = await fetch("/ame/data/IAS_2025/Gallery/gallery.json");
            const data = await res.json();
            setIASGalleryItems(data.images);
          } catch (err) {
            console.error("Error fetching gallery data:", err);
          }
        }
        const fetchIASCategories = async () => {
          try {
            const res = await fetch("/ame/data/IAS_2025/Gallery/gallery-category.json");
            const data = await res.json();
            setIASCategories(data.category);
          } catch (err) {
            console.error("Error fetching categories data:", err);
          }
        };
        fetchIASGalleryItems();
        fetchIASCategories();
        }
        , []);
  return (
    <div>
      {IASgalleryItems.length ? (
        <>
          <motion.h1
            className="lg:text-6xl sm:text-4xl underline text-2xl m-10 text-center font-bold text-purple-700"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            IAS-2025 Gallery
          </motion.h1>
          <div className="flex flex-wrap gap-4 justify-center space-x-4 mb-4">
            {IAScategories.map((category) => (
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
        </>
      ) : (
        <></>
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

export default IASGallery
