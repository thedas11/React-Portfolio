import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";


const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
        className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
      >
        Hire me
      </Link>
      <div className="sm:hidden md:block">
        <MdDoubleArrow />
      </div>
    </button>
  );
};

export default NavbarBtn;
