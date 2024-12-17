import React from 'react'
import founders from '../img/founders.png'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Myheader = () => {
  return (
    <>
    <div class='sm:flex justify-between items-center p-4 px-5 md:px-8'>
        <div>
        <img class='sm:w-28 md:w-40' width={200} src={founders} alt={founders}/>
        </div>
        
        <nav>
        <ul class='sm:hidden md:flex justify-center items-center space-x-5 text-xl font-bold transform translate-x-4'>
            <li class='text-purple-900'><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </nav>
        <div class='sm:flex items-center justify-center space-x-2 text-xl border border-purple-900  rounded-lg p-2'>
            <button class='text-purple-700'>Register  </button>
            <p><FaArrowRight /></p>
        </div>

    </div>
    </>
  )
}

export default Myheader