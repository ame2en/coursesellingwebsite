import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex bg-pink-100 p-6 justify-between'>
      <div>Logo</div>
      <div className='flex'>
          <a href="" className='text-black font-bold underline hover:no-underline ease-in-out outline-none mr-4'>Home</a>
          <a href="" className='text-black outline-none  mr-4'>About Us</a>
          <a href="" className='text-black outline-none mr-4'>Courses</a>
          <a href="" className='text-black outline-none mr-4'>Login</a>
      </div>
      <div className='flex justify-end'>
        <FaYoutube className=' text-2xl mr-2 opacity-60 hover:opacity-100 text-red-600' />
        <FaLinkedin className=' text-2xl mr-2 opacity-60 hover:opacity-100 text-blue-600' />
        <FaInstagram className=' text-2xl mr-2 opacity-60 hover:opacity-100  text-pink-500' />
        <FaFacebook className=' text-2xl mr-2 opacity-60 hover:opacity-100  text-blue-700' />
      </div>
    </div>
  )
}

export default Header