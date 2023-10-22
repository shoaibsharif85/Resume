import React from 'react'
import protfolio from '../assets/protfolio.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Project = () => {
  return (
    <div className='py-[100px] mt-5 '>
         <h1 data-aos="fade-right" className='text-center text-green-600 mb-8 font-bold text-2xl md:text-3xl text-bold'>Creative Protfolio</h1>
        <div className='max-w-[1240px] m-auto mx-7 my-7 p-50 md:grid md:grid-cols-3 gap-5'>
           
<div data-aos="fade-down" className='shadow-2xl border mt-6 bg-pink-300 cursor-pointer hover:scale-90 duration-300 focus:outline-none focus:ring focus:ring-violet-300   '>
    <img  src={protfolio} alt="" className='rounded' />
    <h1  className='ml-8 mt-5 text-3xl text-green-500 font-bold '> React Js</h1>
    <p  className='mx-8 my-3'>I am a Software Developer currently <br />
         working in Mern Stack <br />
          Web Development
          </p>
          <button   className='bg-[black]  text-white p-[7px] md:p-[10px] mx-7  rounded  :hoverbg-white '>Get Started</button>
    </div>
<div data-aos="fade-down" className='shadow-2xl border mt-8 cursor-pointer  hover:scale-90 bg-red-400 duration-300 focus:outline-none focus:ring focus:ring-violet-300  '>
    
    <img src={project2} alt="" className='rounded' />
    <h1  className='ml-8 mt-5 text-3xl text-green-500 font-bold '> React Js</h1>
    <p  className='mx-8 my-3'>I am a Software Developer currently <br />
         working in Mern Stack <br />
          Web Development
          </p>
          <button  className='bg-[black] mt-[-3]  text-white p-[7px]  md:p-[10px] mx-7  rounded  :hoverbg-white '>Get Started</button>
</div>
<div data-aos="fade-down" className='shadow-2xl border cursor-pointer mt-8  h-[400px] bg-yellow-300  hover:scale-90 duration-300 focus:outline-none focus:ring focus:ring-violet-300 '>
    <img  src={project3} alt="" className='rounded' />
    <h1  className='ml-8 mt-5 text-3xl text-green-500 font-bold '> React Js</h1>
    <p  className='mx-8 my-3'>I am a Software Developer currently <br />
         working in Mern Stack <br />
          Web Development
          </p>
          <button  className='bg-[black]  text-white p-[7px] md:p-[10px] mx-7  rounded  :hoverbg-white '>Get Started</button>
</div>
        </div>

    </div>
  )
}

export default Project