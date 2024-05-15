import React from 'react';
import myimage from "../assets/myimage.png"


const Coverpage = () => {
  

  return (
    <div className='flex flex-1  justify-between h-1/2 md:h-screen bg-slate-300'>
      <div className='flex flex-col justify-center text-6xl '>
        <p className=' ml-4'><span className=' font-bold'>S</span>till <span className=' font-bold'>C</span>onfused</p>
        <p className=' ml-4 mt-2 text-5xl'>Get Your Tech Started with </p>

        <p className=' text-2xl ml-4 mt-4'>Structured live coding courses<br></br> by industry expert </p>

      </div>
      <div className='flex items-center'>
        <img src={myimage} className=' w-full'  alt="" />
      </div>
    </div>
  )
}

export default Coverpage;

