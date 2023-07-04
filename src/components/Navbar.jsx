import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { BiMoon, BiSun } from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {
  function handleClick() {
    document.title = "YouTube - Cloned";
  }

  return (
    <nav className="flex items-center px-4 py-2 dark:bg-[#010101]">
      <Link to="/" className="h-10 w-10" onClick={handleClick}>
        <img src="/youtube.svg" alt="logo" />
      </Link>
      <Searchbar />
    </nav>
  );
}
