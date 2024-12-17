import React from 'react'
import sectionImage from '../img/edition.png'
import foundersImage from '../img/foundersImage.png'
import { FaArrowRight } from "react-icons/fa6";
import { LiaCommentDollarSolid } from "react-icons/lia";
import line from '../img/Line 1.png'
import { FaPlus } from "react-icons/fa";
import myfounder from "../img/founders.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import user from '../img/user.png'






const Myhero = () => {
  return (
    <>
    <div>
        {/* <div class='flex items-center justify-center'>
            <div class='text'>
                <p>Join our premier monthly meetup for startup founders and tech cisionaries </p>
                <h3>Connect, Collaborate, innovate!</h3>
                <p>Every last Friday of the month, we bring together the biggest minds in our local tech ecosystem. Whether you're a seasoned entreprenuer or just starting your journey, Founder's friday is your launchpad for new ideas, valuable connections, and game-changing opportunites </p>
                <button class='text-center flex items-center justify-center w-[300px] mx-auto mt-4 mb-4 border border-purple-900 rounded-lg space-x-4 '><p>Register For Our Next Event</p> <p><MdKeyboardDoubleArrowRight /></p></button>
                <p>Join us for our next meetup on the 26th of july 2024</p>
                <div class='flex items-center justify-center'>
                    
                    
                </div>

            </div>
            <div class='image'></div>
        </div> */}
        <div class="sm:p-3 flex flex-col md:flex-row w-full items-center justify-center space-x-1 mt-10 mb-10">
            <div class='md:w-1/2 pl-10'>
        <img class='md:w-[500px]' src={foundersImage} alt ={foundersImage}/>
        </div>
        
        <div class='hero_text sm:flex items-center justify-center px-1 py-2 md:w-1/2 pr-5'>
            <div>
        <img class='sm:w-36 transform translate-x-0 md:w-16' src={line} alt={line}/>
        </div>
        <div>
        <h3 class='sm:font-bold pl-3 transform translate-y-1 md:-translate-y-12 transform '>Who Are We?</h3>
        <p class='md:text-xl pb-3'>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking where founders, innovators and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
        <p class='md:text-xl pb-3'>Join us at the next Founder's Friday and be part of Abuja's most dynamic startup community. Together, we're not just sharing ideas--we're sharing the future of tech in our city</p>
        <div class='flex items-center justify-between sm:pt-2 px-4 mb-2 md:justify-start space-x-8 transform translate-y-10'>
            <button class='flex items-center justify-center border border-purple-900 rounded-md space-x-2 bg-purple-900 text-white px-3 md:px-6  py-4'><span>Register</span> <span><FaArrowRight /></span></button>
            <button class='flex items-center justify-center space-x-2 border border-purple-900 rounded-md px-3 md:px-6 py-4' > <span>Donate</span> <span><LiaCommentDollarSolid /></span></button>
        </div>
        </div>
        </div>
        </div>
        <div>
            <p class='text-center mt-10 font-bold'>What We Offer</p>
        </div>
        <div class='grid grid-rows-6 gap-y-3 place-items-center mt-4 mb-10 '>
        <div class='grid grid-cols-4 gap-x-6 place-items-center mt-4 '>
        <p class='  w-8 h-8 bg-purple-900 rounded-full ml-12 '></p>
        <h3>Monthly Meetup</h3>
        <p class='text-xs md:text-sm '>Our Cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities</p>
        <p><FaPlus /></p>
        </div>
        <div class='grid grid-cols-4 gap-x-6 place-items-center'>
        <p class=' w-8 h-8 bg-purple-900 rounded-full ml-12 '></p>
        <h3>Diverse Network</h3>
        <p class='text-xs md:text-sm '>Connect with a wide range of prefessionals, from early-stageb founders to seasoned entrepreneurs, investors and industry experts</p>
        <p><FaPlus /></p>
        </div>
        <div class='grid grid-cols-4 gap-x-6 place-items-center'>
        <p class=' w-8 h-8 bg-purple-900 rounded-full ml-12 '></p>
        <h3>Knowledge Sharing</h3>
        <p class='text-xs md:text-sm '>Connect with a wide range of prefessionals, from early-stageb founders to seasoned entrepreneurs, investors and industry experts</p>
        <p><FaPlus /></p>
        </div>
        
        <div class='grid grid-cols-4 gap-x-6 place-items-center'>
        <p class=' w-8 h-8 bg-purple-900 rounded-full ml-12 '></p>
        <h3>Collaboration Opportunities </h3>
        <p class='text-xs md:text-sm '>Find Potential co-founders, mentors or partners for your next big venture</p>
        <p><FaPlus /></p>
        </div>
        <div class='grid grid-cols-4 gap-x-6 place-items-center'>
        <p class=' w-8 h-8 bg-purple-900 rounded-full ml-12 '></p>
        <h3>Community Support</h3>
        <p class='text-xs md:text-sm '>Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges</p>
        <p><FaPlus /></p>
        </div>
        
        </div>
        <div class='sm:p-3 flex flex-col md:flex-row w-full items-center justify-center mt-10 mb-10'>
            <div class='sm:pl-2 md:w-1/2 pl-10'>
        <img class='md:w-[500px]' style={{borderRadius:'10px'}} src={sectionImage} alt={sectionImage}/>
        </div>
        <div className="text">
    <h3 class='sm:ml-2 mt-6'>At Founder's Friday, ia learning Experience!</h3>
    <p style={{paddingRight:'10px'}} class='sm:ml-2 mr-4 mt-4'>Join us in our mission to transform ideas into impact and shape the future of Abuja's startup landscape</p>

    <button style={{textAlign:"center", placeItems:"center"}} class='flex items-center justify-center  mt-4 space-x-3 bg-purple-900 rounded px-5 py-3 text-white mb-10'><p>Register</p> <p><FaArrowRight /></p></button>
        </div>
        </div>
    <div>
       <div class='text-center flex justify-center items-center space-x-4'> <h3>What Do Our Attendees have To Say?</h3><  FaArrowRight class='bg-gray border rounded-full w-[36px] h-[36px] p-1 ' /> <FaArrowRight class='bg-gray border rounded-full w-[36px] h-[36px] p-1 ' /></div>
        <p class='text-center'>Well See For Yourself</p>
        <div class='grid grid-cols-3 sm:gap-y-1 px-5 md:px-10 gap-y-2  mt-10 mb-10'>
            
                <div class=''>
                    <img class='w-[100px]' src={user} alt={user}/>
                    <p>Mr Belba Ngoy</p>
                
                <p class='sm:pt-2 pr-1 md:pr-20'>Always remarkable experioence for my team and myself</p>
                </div>
                <div class=''>
                    <img class='w-[100px]' src={user} alt={user}/>
                    <p>Mr Belba Ngoy</p>
                
                <p class='sm:pt-2 pr-1 md:pr-20'>lways remarkable experioence for my team and myself</p>
                </div>
                <div class=''>
                    <img class='w-[100px]' src={user} alt={user}/>
                    <p>Mr Belba Ngoy</p>
                
                <p class='sm:pt-2 pr-1 md:pr-20'>ALways a remarkable experience for my team and my self</p>
                </div>
            </div>
        
    </div>
    </div>
    <footer class='bottom-0 w-full '>
        <hr/>
        <img class='pl-10 pt-5' width={200} src={myfounder} alt={myfounder}/>
        <h3 class='text-center font-bold'>Want To Be A Part Of Abuja's Biggest Tech Community</h3>
        <button class='text-center flex items-center justify-center w-[300px] mx-auto mt-4 mb-4 border border-purple-900 rounded-lg space-x-4 '><p>Register For Our Next Event</p> <p><MdKeyboardDoubleArrowRight /></p></button>

        <hr/>
       <div class='flex items-center justify-between pl-10 pr-20 py-5'>
        <div class='footerleft flex items-center justify-center space-x-3 text-purple-900'>
        <FaFacebook />
        <FaInstagramSquare />
        <FaSquareXTwitter />

        </div>
        <nav class='footerright'>
        <ul class='sm:hidden md:flex justify-center items-center space-x-5 text-xl font-bold transform translate-x-4'>
            <li class='text-purple-900'><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </nav>
        </div> 
        <hr/>
    </footer>
    </>
  )
}

export default Myhero