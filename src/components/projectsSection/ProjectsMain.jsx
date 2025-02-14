import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";
const projects = [
    {
      name: "Movie Streaming App",
      year: "Jan 2025",
      align: "right",
      image: "../../images/website-img-1.jpg",
      link: "https://watch-movie-gpt.vercel.app/",
      git: "https://github.com/thedas11/WatchMovie-gpt.git"
    },
    {
      name: "Food Ordering App",
      year: "Nov 2024",
      align: "left",
      image: "../../images/website-img-2.webp",
      link: "https://prodv2swiggy.vercel.app/",
      git: "https://github.com/thedas11/Swiggy.git"
    },
    {
      name: "Todo Application",
      year: "Jan 2025",
      align: "right",
      image: "../../images/website-img-2.webp",
      link: "https://todo-list-zeta-seven-57.vercel.app/",
      git: "https://github.com/thedas11/TodoList.git"
    },
    
]  

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 text-white'>
      <motion.div variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }} >      <ProjectsText/>
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} git={item.git} />  
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
