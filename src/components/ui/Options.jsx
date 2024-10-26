import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export default function Options() {
  return (
    <div className="">
      <div className="flex space-x-5">
        <CiSearch size={22} color="#333333" />
        <PiShoppingCartSimpleLight size={22} color="#333333" />
      </div>
    </div>
  );
}
