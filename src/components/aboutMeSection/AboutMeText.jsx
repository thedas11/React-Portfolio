import React from "react";
import { Link } from "react-scroll";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Soumalya, a frontend web developer with a passion for learning and
        coding with a proven track record of delivering high-quality software
        solutions. I have a strong foundation in programming languages like
        Html,Css, JavaScript, and Python. I have worked on various projects,
        including web development, mobile app development, and data analysis. My
        expertise lies in developing scalable, efficient, and maintainable
        software applications.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
      <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
        </button>
    </div>
  );
};

export default AboutMeText;
