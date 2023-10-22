import React from 'react'
import coding from '../assets/coding.jpg'

const Expert = () => {
  return (
    <div className=' max-w-[1240px] my-20 m-auto mx-10 h-[250px] md:h-[200px] mb-10    md:grid grid-cols-2'>
<div className='  items-center ml-30 md:ml-20 h-20  mb-50 md:mt-6 col-span-1'>
    <img  src={coding} alt=""  className='rounded md:ml-5 ml-[20px]'/>
</div>
<div className='   col-span-1  justfy-center px-5'>
    <h1  className='font-bold text-[#00df9a]  text-3xl  mt-40 md:mt-2'>About My Experties</h1>
    <p  className='mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil 
        ab quam dolores sed quae et repellat blanditiis ducimus ex labore 
        perspiciatis culpa, incidunt quisquam accusantium quaerat amet.</p>
        <button  className='bg-[black]  text-white p-[17px] mt-5  rounded  :hoverbg-white '>Get Started</button>
</div>
    </div>
  )
}

export default Expert