import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Options from "./Options";

export default function Header() {
  return (
    <div className=" h-[100px] flex flex-col  ">
      <ul className="font-normal text-xs flex justify-end items-center space-x-5  0 pr-[8rem] h-[25%]">
        <li>Help</li>
        <li>Orders & Return</li>
        <li>Hi, John</li>
      </ul>
      <div className="flex justify-around items-center  h-[75%]">
        <Logo />
        <Navbar />
        <Options />
      </div>
    </div>
  );
}
