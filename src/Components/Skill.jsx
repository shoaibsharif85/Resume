import React from 'react'

const Skill = () => {
  return (
    <div className=' overflow-x-hidden mt-80 md:mt-40 bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] m-auto display-inline  md:flex   justify-between py-[40px]'>
            <div className='  m-2'> 
       <h1 data-aos="fade-right" className='text-[20px] md:text-[40px] font-bold text-white'>Want to Latest I.T Skill?</h1>
            <span data-aos="fade-left" className='text-white '>Sign up Our NewsLetter and Stay up to date.</span>
            </div>
            <div className='   justify-end   bg-[#2699fb]  '>
               <input data-aos="fade-right" type="text" className='rounded  md:h-[50px] mb-2 p-2 mr-2 text-slate-600 '  placeholder='Enter Your Email'/>
               <button data-aos="fade-left"   className=' bg-[black] md:h-[50px] p-[12px] w-[100px] text-white rounded p-3 rounded'>Notify</button>

                <p data-aos="fade-right" className='  text-white '>
                Lorem ipsum dolor sit amet, concup iditate.
                    <br />
                    <span data-aos="fade-left" className=' text-[black]'>priviy policy</span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Skill