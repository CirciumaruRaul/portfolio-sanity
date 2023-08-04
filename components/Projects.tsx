import React from 'react';
import { getProjects } from '../sanity/sanity-utils';

async function Projects() {
    // const projects = [1,2,3,4,5];
    const projects = await getProjects();
  return (
    <div
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {/* Projects */}
            {projects.map((project,i) =>(
                <li className='list-none' key = {project._id}>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                    <img
                    src={project.image} alt=""  className='max-[450px]:w-30 w-[600px]' />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center max-[450px]:text-base'>Project {i+1} of {projects.length}: {project.nume}</h4>
                        <p className='text-lg text-center md:text-left max-[450px]:text-sm'>
                            {project.descriere}
                        </p>
                    </div>
                </div>
                </li>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#9400d3]/10 left-0 h-[500px] -skew-y-12'>
        </div>
        <div className='w-full absolute top-[20%] bg-white/10 left-0 h-[81px] -skew-y-12'>
        </div>

    </div>
  )
}

export default Projects