import React from 'react'
import news1 from '../assets/news1.webp'
import news3 from '../assets/news3.webp'
import new2 from '../assets/new2.webp'
import { CgCalendarDates } from "react-icons/cg";
const News = () => {
  return (
    <div>
        <h1 data-aos="fade-right" className='text-center  text-4xl font-bold text-green-400 py-10'>Latest News</h1>
    <div className='max-w-[1240px] m-auto md:grid content-center mx-10 md:mx-15 md:my-10  md:grid-cols-3 gap-5'>
        
        <div data-aos="fade-down" className=' h-[250px] hover:scale-90 mb-40 duration-300'>
          <img src={news1} alt="" className='h-[250px]'/>
         <h1 className='py-3 text-[26px] font-sans font-bold'> New Technology Stack 2022</h1>
         <p className='flex'>Usmaa Ahmad <CgCalendarDates className='mx-5 text-[20px]'/> 20 DEC 2022</p>
        </div>
        <div data-aos="fade-down" className='  hover:scale-90  duration-300'>
          <img src={news3} alt="" className='h-[250px]'/>
          <h1 className='py-3 text-[26px] font-sans font-bold'>Japan New IT Infastructure</h1>
          <p className='flex'>Usmaa Ahmad <CgCalendarDates className='mx-5 text-[20px]'/>20 DEC 2022</p>
        </div>
        <div data-aos="fade-down" className='  h-[250px] hover:scale-90 duration-300'>
            <img src={new2} alt="" className='h-[250px] :hover-scale-50'/>
            <h1 className='py-3 text-[26px] font-sans font-bold'>USA New AI Tools</h1>
            <p className='flex  '>Usmaa Ahmad <CgCalendarDates className='mx-5 text-[20px]'/> 20 DEC 2022</p>
        </div>
    </div>
    </div>
  )
}

export default News