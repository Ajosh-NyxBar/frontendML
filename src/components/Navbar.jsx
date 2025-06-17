import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => (
  <header className="flex flex-wrap items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-4 sm:px-8 md:px-10 py-3">
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-[#111518]">
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt="SkinScan Logo"
          className="w-[150px] object-contain"
        />
      </div>
    </div>
    <div className="flex flex-1 flex-wrap justify-end gap-4 sm:gap-8 mt-2 sm:mt-0">
      <div className="flex flex-wrap items-center gap-4 sm:gap-9">
        <a
          className="text-[#111518] text-sm font-medium leading-normal"
          href="#"
        >
          How it works
        </a>
        <a
          className="text-[#111518] text-sm font-medium leading-normal"
          href="#"
        >
          Pricing
        </a>
        <a
          className="text-[#111518] text-sm font-medium leading-normal"
          href="#"
        >
          Reviews
        </a>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#309be8] text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <Link
            to="/predict" // <-- perbaiki di sini
            className="flex items-center justify-center w-full h-full"
          >
            <span className="truncate">Get started</span>
          </Link>
        </button>
        <Link
          to="/login"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f3f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Log in</span>
        </Link>
      </div>
    </div>
  </header>
);

export default Navbar;
