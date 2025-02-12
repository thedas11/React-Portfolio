import React from 'react'
import NavbarBtn from './NavbarBtn'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
const Navbarmain = () => {

  const [menuopen, setMenuOpen ] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuopen)
  }
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
    <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
      <NavbarLogo />
      <div className={`${menuopen ? "sm: block" : "sm: hidden" }lg:block`}>
      <NavbarLinks/>
      </div>
      <NavbarBtn/>
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}>
        <RxHamburgerMenu />
        </button>
      
       </div>
  </nav>
  )
}

export default Navbarmain
