import React from 'react'
import SingleExperience from './SingleExperience'
import {motion} from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";



const AllExperience = () => {
    const experiences = [
        {
          job: "Front-End Developer",
          company: "Capgemini",
          date: "2023 - 2024",
          responsibilities: [
            "Implementing reusable components.",
            "Participating in large scale application.",
            "Working on the performance of web applications.",
            "Generating new ideas for better user experience.",
          ],
        }
        ]

    
  return (
    <div className='flex justify-center'>
      {experiences.map((experience,index)=>{
        return <motion.div variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}><SingleExperience key={index} experience={experience} /> </motion.div>
      })}
    </div>
  )
}

export default AllExperience
