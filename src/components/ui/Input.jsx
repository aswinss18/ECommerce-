import React from "react";

export default function Input({ name, show }) {
  return (
    <label htmlFor="" className="flex flex-col text-base font-normal relative ">
      {name}
      <input
        type="text"
        className="border-[1px] border-customBorderGray h-[48px] w-[456px] rounded-md mt-2 pl-4"
        placeholder="Enter"
      />
      {show ? (
        <p className="underline absolute right-[16px] bottom-[16px]">show</p>
      ) : (
        ""
      )}
    </label>
  );
}
