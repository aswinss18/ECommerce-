import React, { useEffect, useState } from "react";
import ListItem from "../ui/ListItem";
import { itemsArray } from "../../../Database";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pageArray = [
    currentPage - 4,
    currentPage - 3,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    currentPage + 3,
    currentPage + 4,
  ];

  useEffect(() => {
    setItems(itemsArray);
  }, []);

  const handlePagePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage(Math.ceil(items.length / itemsPerPage));
    }
  };
  const handlePageDoublePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 2);
    } else {
      setCurrentPage(Math.ceil(items.length / itemsPerPage));
    }
  };
  const handlePageNext = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(1);
    }
  };
  const handlePageDoubleNext = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 2);
    } else {
      setCurrentPage(1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex justify-center  mt-10">
      <div className="h-[658px] w-[576px] border-[1px] border-customBorderGray rounded-[20px] flex flex-col items-center justify-around">
        <div className="w-[496px] border-b-[1px] border-customBorderGray flex  flex-col justify-center items-center space-y-4">
          <h1 className="text-[32px] font-semibold">
            Please mark your interests!
          </h1>
          <p className="text-base font-normal">We will keep you notified.</p>
        </div>
        <div className="h-[50%] w-[90%]  px-8 flex flex-col justify-center space-y-4">
          <h2 className="text-xl font-medium">My saved interests!</h2>
          <div className="flex flex-col space-y-6 py-6">
            {currentItems.map((item, i) => (
              <ListItem item={item.item} key={i} />
            ))}
          </div>
        </div>
        <div className="flex space-x-2 text-customBorderGray cursor-pointer">
          <span onClick={handlePageDoublePrev}>{"<<"}</span>
          <span onClick={handlePagePrev}>{"<"}</span>

          {pageArray.map((item, i) => {
            const middleIndex = Math.floor(pageArray.length / 2);
            return (
              <span
                key={i}
                className={
                  i === middleIndex ? "font-bold text-gray-500" : "font-normal"
                }
              >
                {item}
              </span>
            );
          })}

          <span onClick={handlePageNext}>{">"}</span>
          <span onClick={handlePageDoubleNext}>{">>"}</span>
        </div>
      </div>
    </div>
  );
}
