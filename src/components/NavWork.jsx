import React from "react";

import logoImg from "../assets/BANU LOGO2 (2).png";

const NavWork = () => {
  return (
    <div className=" absolute flex-col top-0">
      <nav className="fixed top-0 left-0 w-full z-10 rounded-full shadow-2xl flex justify-center items-center h-16 px-4  md:bg-transparent ">
        <div className="shadow-2xl">
          <img src={logoImg} alt="" className="w-14" />
        </div>
        <ul className="flex space-x-4 text-green-500 text-sm md:hidden text-center">
          {" "}
          {/* Hide on medium and larger screens */}
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer hover:scale-105">
            <a href="#">Home</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer hover:scale-105">
            <a href="#">About Us</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer hover:scale-105">
            <a href="#">Services</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer hover:scale-105">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4 text-green-500 text-xl">
          {" "}
          {/* Show on medium and larger screens */}
          <li className="font-bold hover:text-green-600  text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer">
            <a href="#">Services</a>
          </li>
          <li className="font-bold hover:text-green-600 text-shadow:0px 0px 5px rgba(0, 0, 0, 0.2) px-4 cursor-pointer">
            <a href="#">Contact Us</a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavWork;
