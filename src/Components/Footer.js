import React from 'react'
import { FaEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";

function Footer() {
  return (
    <div className='Footer'>
      <div className="grid grid-cols-2 bg-black p-20 sm:block text-center md:text-left lg:text-left">
        <div className="col-span-1 sm:grid items-center">
          <h1 className='text-white uppercase text-4xl sm:ml-4'>company</h1>
          <h3 className='text-white my-4 ml-7'>Mentorship</h3>
          <h3 className='text-white my-4 ml-7'>Join Us</h3>
          <h4 className='text-white my-4 ml-7'>About Us</h4>
        </div>


        <div className="col-span-1 ml-36 sm:flex justify-center content-center mx-40">
          <div className="text-white my-5">
            <a href="https://www.instagram.com/quickdrop_tz/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={'2rem'} />
            </a>
          </div>
          <div className="text-white my-5">
            <a href='https://www.threads.net/@quickdrop_tz' target="_blank" rel="noopener noreferrer">
              <FaSquareThreads size={'2em'} />
            </a>
          </div>
          <div className="text-white my-5">
            <a href="mailto:info@phixtz.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={'2rem'} />
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer