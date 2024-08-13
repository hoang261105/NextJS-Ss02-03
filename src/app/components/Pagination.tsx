"use client"
import React, { useState } from "react";

export default function B8() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < 10 ? prevPage + 1 : 10));
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        <i className="fa-solid fa-arrow-left"></i>
        <span>Prev</span>
      </button>
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(item)}
          className={currentPage === item ? "active" : ""}
        >
          {item}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === 10}>
        <i className="fa-solid fa-arrow-right"></i>
        <span>Next</span>
      </button>
    </div>
  );
}
