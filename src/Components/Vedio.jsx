import React from 'react'
import vedio from '../assets/code.mp4'


function Vedio() {
  return (
    <div className='max-w-[1240px] m-auto  w-[100%]'>
       
<video src={vedio} data-aos="fade-up"  autoPlay loop muted className='w-[100%] h-[300px]' ></video>
<div><p  className='text-center my-5'>Copy@right "Shoaib Sharif"</p></div>
    </div>
  )
}

export default Vedio