import React from "react";
import { FaSearch, FaRegHeart, FaUserAlt, FaHeart } from "react-icons/fa";
import {
  HiHome,
  HiMenu,
  HiOutlinePaperAirplane,
  HiOutlinePlusCircle,
} from "react-icons/hi";

import { GrGroup } from "react-icons/gr";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center bg-white max-w-6xl lg:mx-auto">
        {/* left  */}
        <div className="relative hidden lg:inline-grid w-24">
          <img
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden cursor-pointer ">
          <img
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 cursor-pointer text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full p-1 pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}

        <div className="flex items-center justify-end space-x-4">
          <HiHome className="navBtn" />
          <HiMenu className="h-6 w-6 md:hidden cursor-pointer" />
          <HiOutlinePlusCircle className="navBtn" />
          <div className="relative navBtn">
            <HiOutlinePaperAirplane className="navBtn rotate-45" />
            <div className="absolute -bottom-1 -right-1 text-xs w-5 h-5 rounded-full bg-red-600 flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <GrGroup className="navBtn" />
          <FaRegHeart className="navBtn" />
          {/* avatar */}
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src="/images/avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
