import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMenuCustom = () => {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  return (
    <div className="w-[120px] md:w-[200px] h-[41px] ">
      {/* dropdown button */}
      <div onClick={changeActive} className="relative ">
        <div className="absolute flex justify-center cursor-pointer">
          <div className="w-[120px] md:w-[200px] h-[41px] pb-2 px-3 md:p-6 rounded md:rounded-xl shadow-sm flex items-center justify-center">
            <div className="w-full flex justify-between items-center">
              <span className="text-gray-950 font-bold">MENU</span>
              <IoIosArrowDown className="text-orange-400 font-semibold text-xl" />
            </div>
          </div>
        </div>
        {/* dropdown menu */}
        <div
          className={`absolute top-16 md:top-16  ${
            active ? "block" : "hidden"
          }`}
        >
          <div className="w-[125px] md:w-[200px] h-[290px] md:h-[360px] rounded-xl shadow-lg ">
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400 mt-4">
              <span className="">Home</span>
            </button>
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400">
              <span className="">Details</span>
            </button>
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400">
              <span className="">Category</span>
            </button>
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400">
              <span className="">My Favourites</span>
            </button>
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400">
              <span className="">Profile</span>
            </button>
            <button className="w-full p-2 md:p-4 bg-white hover:bg-gray-100 text-start font-semibold text-black hover:text-orange-400">
              <span className="">Log In/Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuCustom;
