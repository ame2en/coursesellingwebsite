import React from 'react';
import myimage from "../assets/myimage.png"


const Coverpage = () => {
  

  return (
    <div className='flex flex-1 justify-between h-screen bg-slate-300'>
      <div className='flex flex-col justify-center text-6xl'>
        <p>Still Confused</p>
        <p>Get Your Tech Started with </p>
      </div>
      <div className='flex justify-center '>
        <img src={myimage}  alt="" />
      </div>
    </div>
  )
}

export default Coverpage;

