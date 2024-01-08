import React from "react";
import SearchBar from "./SearchBar";
import DropdownMenuCustom from "./DropdownMenuCustom";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto px-3 flex items-center justify-between bg-white h-[80px] border-b border-slate-200 md:border-2 md:border-green-600">
        <Link to={"/"}>
          <span className="text-xl font-bold">pti.</span>
        </Link>
        <div className="flex items-center gap-2 ">
          <SearchBar />
          <DropdownMenuCustom />
        </div>

        <div className="size-10 rounded-full bg-orange-400 md:flex md:items-center md:justify-center hidden ">
          <AiOutlineUser className="text-white font-semibold text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
