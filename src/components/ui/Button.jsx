import React from "react";

export default function Button({ children }) {
  return (
    <button className="text-base font-medium text-white bg-black rounded-md w-[456px] h-[56px] ">
      {children}
    </button>
  );
}
