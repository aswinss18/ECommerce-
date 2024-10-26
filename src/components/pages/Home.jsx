import React from "react";
import ListItem from "../ui/ListItem";
const data = ["shoe", "cap", "Pant", "shirt", "football", "cricket bat"];

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
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
            {data.map((item, i) => (
              <ListItem item={item} key={i} />
            ))}
          </div>
        </div>
        <div className="flex space-x-2 text-customBorderGray">
          <span>{"<<"}</span>
          <span>{"<"}</span>

          {pages.map((item, i) => (
            <span key={i}>{item}</span>
          ))}

          <span>{">"}</span>
          <span>{">>"}</span>
        </div>
      </div>
    </div>
  );
}
