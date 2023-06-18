import React, { useState } from "react";
import logo from "../imgs/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  // create a new state to create drop down menu and set default as false
  const [showMenu, setShowMenu] = useState(false);

  // useState will always be inverted from T to F and vice versa using this fn
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  return (
    // px: padding from left and right (x-axis)
    // mobile version it is 2, desktop it is 4 declared in header class

    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white-100">
      {/* desktop version */}

      {/* centers the icon perfectly in the header bar vertically and justify-between spaces them to the extremes*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" alt="taste-from-home" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-base text-center text-xs">
              0
            </div>
          </div>
          <div className="text-l text-slate-600" onClick={handleShowMenu}>
            <div className="cursor-pointer border-2 border-solid border-slate-600 p-1.5 rounded-full">
              <FaUserAlt />
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile version */}
    </header>
  );
};

export default Header;
