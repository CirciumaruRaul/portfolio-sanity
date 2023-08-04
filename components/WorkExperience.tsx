import React from 'react';
import ExperienceCard from './ExperienceCard';
import { getExperience } from '../sanity/sanity-utils';


async function WorkExperience() {
  const experience = await getExperience();
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center space-y-8'>
        
        <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        
        {experience.map((experience) =>(
                <div key = {experience._id}>
                  <ExperienceCard image={experience.image} titulatura={experience.titulatura} firma={experience.firma} tech={experience.tech} points={experience.points} dataS={experience.dataS} dataE={experience.dataE} _id={experience._id} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default WorkExperience