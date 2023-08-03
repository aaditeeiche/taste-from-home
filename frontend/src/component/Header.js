import React, { useState } from "react";
import logo from "../imgs/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  // create a new state to create drop down menu and set default as false
  const [showMenu, setShowMenu] = useState(false);
  // this will fetch the data from the user and store it in a const variable, pass a callback functon in const userData:
  const userData = useSelector((state) => state.user);
  // console.log(userData);
  // useState will always be inverted from T to F and vice versa using this fn

  const dispatch = useDispatch(); // from react-redux

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogOut = () => {
    // remove the data from the redux after logging out
    dispatch(logoutRedux());
    toast("Logged Out Successfully");
  };

  // console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    // px: padding from left and right (x-axis)
    // mobile version it is 2, desktop it is 4 declared in header class

    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop version */}

      {/* centers the icon perfectly in the header bar vertically and justify-between spaces them to the extremes*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" alt="taste-from-home" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg hidden md:flex ">
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
            <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden border-2 border-solid border-slate-600 drop-shadow-md">
              {userData.image ? (
                <img
                  src={userData.image}
                  className="h-full w-full"
                  alt="current user profile"
                />
              ) : (
                <FaUserAlt className="h-full w-full p-2" />
              )}
            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {(userData.email === process.env.REACT_APP_ADMIN1_EMAIL ||
                  userData.email === process.env.REACT_APP_ADMIN2_EMAIL) && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New Product
                  </Link>
                )}
                {userData.image ? (
                  <p
                    className="cursor-pointer text-white bg-red-500 px-2"
                    onClick={handleLogOut}
                  >
                    Log Out ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}

                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">Home</Link>
                  <Link to={"menu"} className="px-2 py-1">Menu</Link>
                  <Link to={"about"} className="px-2 py-1">About</Link>
                  <Link to={"contact"} className="px-2 py-1">Contact</Link>
                </nav>
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
