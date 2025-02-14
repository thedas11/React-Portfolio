import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSM from './AllSkillsSM'
import {motion} from "framer-motion";
import { fadeIn } from "../../framer-motion/variants";


const SkillsMain = () => {
  return (
    <div id ="skills">
    <div className='className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
      <motion.div variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}>
      <SkillsText/>

      </motion.div>
      <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block'>
      <AllSkills/>
      </div>
      <div className='sm:block lg:hidden'> 
        
        <AllSkillsSM/>
      
      </div>
    </div>
    </div>
  )
}

export default SkillsMain
