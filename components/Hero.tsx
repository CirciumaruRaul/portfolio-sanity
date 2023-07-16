"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link  from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import phero from "../assets/hero.jpg";
import Image from 'next/image';

interface keyable{
  [key:string]:any
}

type Props = {};

export default function Header({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, My Name's Raul",
      "Guy who useEffect of next-coffee",
      "<AndLikesToBuildThings/>"
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='relative h-screen flex flex-col space-y-8  justify-center items-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='absolute  text-[#CD7F32]'>
      <Image
        className='rounded-full h-32 w-32 mx-auto object-cover mt-8 z-20'
        src={phero} alt="eu+tu=LOVE" />
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>FULLSTACK DEVELOPER</h2>
        <h1 className='text-xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button></Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
      </div>
      </div>
    </div>
  )
}
