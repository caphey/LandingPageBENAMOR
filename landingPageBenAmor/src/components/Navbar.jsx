import React from "react";
import { logo, search, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toogle, settoogle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="" className="w-[244px] h-[92px]" />
      <ul className="list-none md:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[21px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#$nav.id`}>{nav.title}</a>
          </li>
        ))}
        <button>
          <img src={search} alt="" />
        </button>
      </ul>

      {/* RESPONSIVE */}

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toogle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoogle((prev) => !prev)}
        />

        <div
          className={`${
            toogle ? "flex" : "hidden"
          } absolute top-16 right-0 mt-16  w-full `}
        >
          <ul className="list-none flex flex-col justify-end items-start  p-8 flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#$nav,id`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
