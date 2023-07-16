"use client";
import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';

interface keyable{
  [key:string]:any
}

type Props = { workExperience:keyable }

const WorkExperience = (props: Props) => {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center space-y-8'>
        
        <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        
        {props.workExperience.map((experience: {img:string, titulatura:string, firma:string, tech:string[], points:string[], dataS:string, dataE:string}, i: number) =>(
                <div key = {i}>
                  <ExperienceCard img ={experience.img} titulatura={experience.titulatura} firma={experience.firma} tech={experience.tech} points={experience.points} dataS={experience.dataS} dataE={experience.dataE} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default WorkExperience