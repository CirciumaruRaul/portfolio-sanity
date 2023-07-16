import React from 'react';
import { useEffect, useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

type Props = {}

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:raulmarian1106@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. (${formData.message})
        ${formData.email}`
      }
    return (
        <div className='h-screen relative flex flex-col items-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-7 max-[500px]:text-base max-[500px]:space-y-2'>
                <h4 className='text-4xl font-semibold text-center max-[500px]:text-lg'>
                    I have got just what you need. Let&aposs Talk
                </h4>
                <div className='space-y-1 max-[500px]:space-y-1'>
                    <div className='flex items-center space-x-5 justify-center '>
                        <PhoneIcon className='text-[#9400d3] h-7 w-7 animate-pulse' />
                        <p className='text-2xl max-[500px]:text-base'>+40764399813</p>
                    </div>
                    {/* <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#9400d3] h-7 w-7 animate-pulse' />
                        <p className='text-2xl max-[500px]:text-base'>123 Dev Lane</p>
                    </div> */}
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#9400d3] h-7 w-7 animate-pulse' />
                        <p className='text-2xl max-[500px]:text-base'>raulmarian1106@gmail.com</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto max-[500px]:w-[300px] max-[500px]:flex-col'>
                    <div className='flex space-x-2 max-[500px]:flex-col max-[500px]:space-x-0 max-[500px]:space-y-2'> 
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                    <button type='submit' className='bg-[#9400d3] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
                <p className='flex items-center justify-center text-[#414141]'>⬆ This submit will open your email app ⬆</p>
            </div>
        </div>
    )
}

export default ContactMe