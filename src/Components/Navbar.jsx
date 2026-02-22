import React, { useState } from "react";
import { Link } from "react-router";
import PlateShare from "../assets/share.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-200 shadow-md px-4 md:px-8">
      <MyContainer className="flex items-center justify-between h-18">

        <Link to="/" className="flex items-center">
        <img
          src={PlateShare}
          alt="PlateShare Logo"
          className="w-12 h-12 object-contain"
        />
        <span className="text-xl font-bold">
          Plate<span className=" text-orange-600">Share</span>
        </span>
        </Link>


        {/* Center: Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <MyLink to="/" className="">
              Home
            </MyLink>
          </li>
          <li>
            <MyLink to="/available">
              Available Foods
            </MyLink>
          </li>
        </ul>

        {/* Right: Login + Mobile Button */}
        <div className="flex items-center gap-3">
          <Link
          to="/login"
          className="hidden md:inline-block btn btn-sm bg-orange-500 hover:bg-orange-600 text-white text-lg border-none"

          >
            Login
          </Link>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </MyContainer>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 shadow-lg rounded-lg mt-2 p-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/foods"
                onClick={() => setIsOpen(false)}
                className="hover:text-green-600"
              >
                Available Foods
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="btn btn-success btn-sm text-white w-full"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
