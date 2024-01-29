import React from 'react';
// import { Link } from 'react-router-dom';
import Avatar from "../Images/Logo.png";

function Navbar() {
    return (
        <nav className="bg-transparent fixed top-0 w-full z-10 flex items-center justify-between backdrop-blur-lg">
            <section className='flex items-center'>
                <img src={Avatar} alt="Avatar" className="w-18 h-20 ml-8"/> </section>
            {/* <ul className='flex items-center py-6 text-white mx-7'>
                <li><Link href="/Footer">About Us</Link></li>
            </ul> */}
        </nav>
    );
}


export default Navbar;
