"use client";
import React from 'react';
import { motion } from 'framer-motion';
import eu from '../assets/eu.jpg';
import Image from 'next/image';

interface keyable{
    [key:string]:any
  }

type Props = { about: any};

function About(props: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.div
        initial = {{
            x:-200,
            scale: 0.5,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView = {{
            x:0,
            scale: 1,
            opacity:1 
        }}>
        <Image className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px] max-[500px]:w-28 max-[500px]:h-28' src={props.about.poza} alt = {"imagine"}/>
        </motion.div>

        <div className='space-y-10 px-0 md:px-10 flex flex-col w-[600px] max-[500px]:w-[350px]'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='text-lg text-[#CD7F32]'>little</span> background</h4>
            <p className='text-base'>{props.about.descrierea}</p>
        </div>

    </motion.div>
  )
}

export default About