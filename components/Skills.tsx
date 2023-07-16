"use client"
import React from 'react';
import {motion} from 'framer-motion';
import Skill from './Skill'

interface keyable{
  [key:string]:any
}

type Props = {skills:keyable}

function Skills(props: Props) {
  return (
    <div>
    <div 
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3> 
        <h3 className='absolute top-24 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current profieciency
        </h3>
        <div className='grid grid-cols-4 gap-5 max-[400px]:grid-cols-3 absolute'>
        {props.skills.map((skill: { procent: number; poza: string; }, i: React.Key | null | undefined) =>(
                <li className='list-none' key = {i}>
                  <Skill procent={skill.procent} poza={skill.poza} />
                </li>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Skills