import React, { useState } from "react";

export default function ListItem({ item }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
          className="hidden" // Hide the default checkbox
        />
        <div
          className={`w-6 h-6  rounded-[4px] flex items-center justify-center ${
            isChecked ? "bg-black" : "bg-customBorderGray"
          }`}
        >
          {isChecked && (
            <span className="text-white text-lg">✔</span> // Show tick mark
          )}
        </div>
      </label>
      <span className="text-base font-normal">{item}</span>
    </div>
  );
}
