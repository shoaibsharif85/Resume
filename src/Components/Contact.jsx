import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BiLink } from "react-icons/bi";
import { AiOutlineMail,AiFillPhone } from "react-icons/ai";
const Contact = () => {
  return (
    <div>
        <h1 data-aos="fade-right" className='text-center text-4xl font-bold text-green-400 mt-6 py-10'>Contact Us</h1>
    <div className='max-w-[1240px] m-auto md:grid md:grid-cols-2 gap-8'>
        
        <div data-aos="fade-up" className=' my-20  bg-[#2699fb]   h-[600px] '>
          <h1 className='text-3xl font-bold text-white my-4 ml-10'>Let get in touch</h1>
          <p className='text-[18px] mx-10 my-5'>We open for any suggestion or just<br/>to have a chat</p>
          
          <h1 className='ml-20 my-10 text-[20px]'>Address: 198 Est 12th street Islamabad, Pakistan</h1>
          <FaLocationDot className='mt-[-60px] ml-5 text-white'/>
          <h1 className='ml-20 my-10 text-[20px]'>Phone: +92316-1682644 | +92311-6453909</h1>
          <AiFillPhone className='mt-[-60px] ml-5 text-white'/>
          <h1 className='ml-20 my-10 text-[20px]'>Email: za5232208@gmail.com</h1>
          <AiOutlineMail className='mt-[-60px] ml-5 text-white'/>
          <h1 className='ml-20 my-10 text-[20px] '>Website: https://localhost/3000</h1>
          <GiEarthAfricaEurope className='mx-15 mt-[-60px] ml-5 text-white '/>
          <h1 className='ml-20 my-10 text-[20px]'>LinkedIn: www.linkedin.com/in/<br/>usama-</h1>
          <BiLink className='mt-[-60px] ml-5 text-white'/>
        </div>
        <div data-aos="fade-down" className='  '>
          <h1 className='text-3xl font-bold mx-10  '>Send Massage</h1>
          <h2 className='text-2xl ml-7 mt-10 h-5 w-[350px] border-none bg-white'>Full Name</h2>
          <input type="text"  className='my-10 mx-10 md:w-[400px] h-10'  placeholder='Enter Your Name'/>
          <h2 className='text-2xl ml-7 mt-10 h-5 w-[100px] border-none bg-white'>Email</h2>
          <input type="text"  className='my-10 mx-10 md:w-[400px] h-10' placeholder='Enter Your Email'/>
          <h2 className='text-2xl ml-7 mt-10 h-5 w-[350px] border-none bg-white'>Massage</h2>
          <input type="text"  className='my-10 mx-10 md:w-[400px] h-20' placeholder='Send Massage'/>
          <button className='bg-[black] text-white p-[12px] md:p-[17px] w-[110px] md:w-[150px] mt-8 ml-5 rounded '>Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Contact