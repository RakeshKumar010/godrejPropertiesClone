import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ pageNo }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= pageNo) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex items-center gap-5 justify-center select-none mt-5">
      <FaAngleLeft 
        className={`bg-gray-200 text-3xl p-2 rounded-full ${currentPage > 1 ? "text-gray-900" : "text-gray-400"} cursor-pointer`} 
        onClick={() => handlePageChange(currentPage - 1)} 
      />
      {[...Array(pageNo)].map((_, index) => {
        const page = index + 1;
        return (
          <span
            key={index}
            onClick={() => handlePageChange(page)}
            className={`cursor-pointer ${page === currentPage ?
               "text-white px-3 py-1 rounded-full bg-black" :"text-gray-500"}`}
          >
            {page}
          </span>
        );
      })}
      <FaAngleRight 
        className={`bg-gray-200 text-3xl p-2 rounded-full ${currentPage < pageNo ? "text-gray-900" : "text-gray-400"} cursor-pointer`} 
        onClick={() => handlePageChange(currentPage + 1)} 
      />
    </div>
  );
};

export default Pagination;
