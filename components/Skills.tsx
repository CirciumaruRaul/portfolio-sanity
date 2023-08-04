import React from 'react';
import Skill from './Skill'
import { typeSkills } from '../types/project';
import { getSkills } from '../sanity/sanity-utils';

async function Skills() {
  const props = await getSkills();
  return (
    <div>
    <div 
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3> 
        <h3 className='absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current profieciency
        </h3>
        <div className='grid grid-cols-4 gap-5 max-[400px]:grid-cols-3 absolute'>
        {props.map((skill) =>(
                <li className='list-none' key = {skill._id}>
                  <Skill procent={skill.procent} poza={skill.image} />
                </li>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Skills