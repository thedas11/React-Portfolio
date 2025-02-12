import React from 'react'
import SingleExperience from './SingleExperience'



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
        return <SingleExperience key={index} experience={experience} />
      })}
    </div>
  )
}

export default AllExperience
