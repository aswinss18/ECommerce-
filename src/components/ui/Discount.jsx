import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Discount() {
  return (
    <div className="bg-customGray flex justify-center items-center space-x-6 h-[36px] text-sm font-normal">
      <MdKeyboardArrowLeft size={16} />
      <p> Get 10% off on business sign up</p>

      <MdKeyboardArrowRight size={16} />
    </div>
  );
}
