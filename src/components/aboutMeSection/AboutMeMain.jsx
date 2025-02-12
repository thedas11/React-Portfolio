import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from './AboutMePic'

const AboutMeMain = () => {
  return (
    <div className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center mx-4 '>
     <div><AboutMeText/></div> 
     <div>
     <AboutMePic/>
      </div> 
    </div>
  )
}

export default AboutMeMain
