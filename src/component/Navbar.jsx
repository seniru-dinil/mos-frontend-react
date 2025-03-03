import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <div className=" border border-amber-100/20  text-lime-50 rounded-full    mx-auto mt-10 flex justify-between items-center px-[0.63rem] py-2">
        <button
          className="rounded-full border h-10 w-10 grid place-items-center border-amber-100/20"
          onClick={() => console.log("hello world")}
        >
          <PiHamburgerFill className="text-[1.5rem]" />
        </button>
        <nav className="flex justify-center gap-1.5 sm:gap-2.5 ">
          <button
            onClick={() => console.log("hello world")}
            className="rounded-full border h-10 w-10 grid place-items-center hover:bg-[#f2f2f2] hover:text-[black] transition-all cursor-pointer border-amber-100/20"
          >
            <AiFillHome className="text-[1.3rem]" />
          </button>
          <button
            onClick={() => console.log("hello world")}
            className="rounded-full  border h-10  w-10 grid place-items-center hover:bg-[#f2f2f2] hover:text-[black] transition-all cursor-pointer border-amber-100/20"
          >
            <FaUserAlt className="text-[1rem] " />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
