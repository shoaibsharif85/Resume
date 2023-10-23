import React, { useEffect } from 'react'
import Typed from 'react-typed';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='bg-[#2699fb] w-full py-[90px]'>
            <div className='max-w-[1240px] my-[25px] mx-auto text-center'>
                <div data-aos="fade-right" className='text-xl md:text-3xl font-bold mt-7'>
                    My Name Is
                </div>
                <h2 data-aos="fade-left" className='text-white font-bold  text-3xl md:text-[80px] pt-4 mt-7'>Shoaib Sharif</h2>
                <div data-aos="fade-right" className='text-[30px]  md:text-[50px] text-white font-bold pl-3 mt-7'>
                    I'm  <Typed
                        strings={['React developer', 'Mern Stack developer', 'Front-end develper']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={50}
                    />
                </div>
                <button data-aos="fade-left" className='bg-[black] text-white p-[12px] md:p-[17px] w-[110px] md:w-[150px] mt-8  rounded '>Get Started</button>
            </div>
        </div>
    )
}

export default Banner