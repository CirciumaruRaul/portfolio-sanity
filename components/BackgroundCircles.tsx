"use client"
import React from 'react';

import {motion} from "framer-motion";


type Props = {}

function BackgroundCircles({}: Props) {
  

  return (
    <motion.div
    initial = {{
        opacity: 0
    }}
    animate = {{
        opacity: 1,
        scale: [1,2,2,3,1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2
    }}
    className='relative flex justify-center items-center overflow-hidden z-0'>
        <div className=' absolute border border-[#9400d3] rounded-full h-[200px] w-[200px] mt-10 animate-ping' />
        <div className=' absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-10 animate-ping' />
        <div className=' absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-10 animate-ping' />
        <div className='border border-[#9400d3] rounded-full opacity-20 h-[650px] w-[650px] mt-10 animate-pulse'/>
        <div className=' absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-10 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCircles