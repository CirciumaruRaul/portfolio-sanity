"use client"
import React from 'react';

const procent = 10;
type Props = { 
  procent:number,
  poza:string
}

function Skill(props: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <img
        src={props.poza}  //aici trb niste poza
        alt={'eu'} 
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out max-[500px]:h-14 max-[500px]:w-14'/>
        <div className='absolute opacity-0 group-hover:opacity-80 tranzition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0 max-[500px]:h-14 max-[500px]:w-14'>
            <div className='flex items-center justify-center h-full max-[500px]:h-14 max-[500px]:w-14'>
                <p className='text-3xl font-bold text-black opacity-100 max-[500px]:text-base'>{props.procent}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill