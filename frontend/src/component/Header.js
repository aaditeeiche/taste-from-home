import React from 'react'
import logo from '../imgs/logo.jpg'
import { FaUserAlt } from "react-icons/fa"
import { BsCartFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // px: padding from left and right (x-axis)
    // mobile version it is 2, desktop it is 4 decalred in header class

    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50'>
      {/* desktop version */}

      {/* centers the icon perfectly in the header bar vertically and justify-between spaces them to the extremes*/}
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          <div className='h-10'>
            <img src={logo} className='h-full' alt='taste-from-home'/>
          </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>

          </nav>

          <div className='text-2xl text-slate-600'>
            <BsCartFill />
          </div>
          <div className='text-2xl text-slate-600'>
            <FaUserAlt />
          </div>
        </div>
      </div>

      {/* mobile version */}
    </header>
  )
}

export default Header