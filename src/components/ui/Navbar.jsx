import React from "react";
import NavLink from "./NavLInk";

export default function Navbar() {
  return (
    <ul className="flex space-x-12">
      <NavLink>Categories</NavLink>
      <NavLink>Sale</NavLink>
      <NavLink>Clearance</NavLink>
      <NavLink>New stock</NavLink>
      <NavLink>Trending</NavLink>
    </ul>
  );
}
