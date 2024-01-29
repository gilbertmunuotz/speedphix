import React from 'react';
import Quick from '../Images/qd.png';
import { motion } from "framer-motion";
import Abantu from "../Images/Bantu.png";
import About from "../Images/AboutUs.jpg";
import Btrend from '../Images/Bussines.jpg';
import Playstore from '../Images/Playstore.png';
import MobApp from "../Images/Mobile App Dev.jpg";
import WebDevelopment from '../Images/Web Dev.jpg';
import SoftwareTesting from "../Images/Abstract.jpg";
// import Appstores from "../Images/App Store.png";

function Body() {

    const Abantuu = 'http://www.abantuway.com'

    // const Appstore = ''

    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.joshcoe.quickdropApp&hl=en_GB';

    return (
        <div className='Body'>
            <h1 className='font-bold text-black text-5xl text-center mt-40 sm:text-3xl'>Transform your Business</h1>

            <div className='grid grid-cols-3 gap-2 sm:block mx-6'>
                <motion.p className="font-serif my-6 text-3xl col-span-2 tracking-wide md:ml-7 lg:ml-14" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.5, delay: 2.5 }} >Are you looking for top-notch software development services in Dar es Salaam, Tanzania? Look no further than Phixtz Trust us to take your business to the next level with our innovative software solutions.</motion.p>
                <motion.img src={Btrend} alt="Busines Trend" className='mr-32 w-80 h-48  sm:ml-16 md:w-96'
                    initial={{ x: +100 }} animate={{ x: 0 }} transition={{ duration: 1.5, delay: 2.5 }} />
            </div>

            <motion.div className="text-center" initial={{ y: +100 }} animate={{ y: 0 }} transition={{ duration: 1.5, delay: 2.5 }}>
                <h2 className='font-bold text-5xl mt-40'>🌟We Invest In Digital World🌍</h2>
                <p className='font-serif text-3xl sm:text-center mt-4 mx-10 tracking-tight'>
                    Are you ready to be part of the digital revolution? At phix company , we're on a mission to invest .
                </p>
            </motion.div>


            <div className='lg:ml-8'>
                <h3 className='font-bold mt-48 ml-10 text-3xl sm:text-4xl md:ml-8'>What Do We Do.</h3>
                <h4 className='ml-12 font-serif text-xl'>Most Companies and Business Have Trusted Us On the Following Aspects.</h4>
                <div className='grid mt-6 gap-2 mx-7 sm:block md:grid-cols-2 lg:grid-cols-3'>
                    <motion.img src={WebDevelopment} alt="Mac Book Air 2022" className='rounded-xl cursor-pointer hover sm:bg-contain px-5 lg:h-56 w-96' whileHover={{ scale: 1.1 }} />
                    <div className="lg:row-start-2 sm:mx-6 my-4">
                        <h4 className='sm:text-left font-serif font-bold text-3xl mt-3'>Web Development</h4>
                        <p className='font-serif sm:font-serif text-2xl mb-3'>Create responsive websites and web applications to improve online presence and engage customers.</p>
                    </div>


                    <motion.img src={MobApp} alt="Mobile Phone Displaying Applications" className='rounded-xl cursor-pointer sm:bg-contain px-5 lg:h-56 w-96' whileHover={{ scale: 1.1 }} />
                    <div className="lg:row-start-2 sm:mx-6 my-4">
                        <h5 className='sm:text-left font-serif font-bold text-3xl mt-3'>Mobile App Development</h5>
                        <p className='font-serif sm:font-serif text-2xl mb-3'>Design and develop customized mobile apps for Android and iOS platforms to reach a wider audience</p>
                    </div>
                    

                    <motion.img src={SoftwareTesting} alt="Ipone 15 in Action" className='rounded-xl cursor-pointer sm:bg-contain px-5 lg:h-56 w-96' whileHover={{ scale: 1.1 }} />
                    <div className="lg:row-start-2 sm:mx-6 my-4">
                        <h6 className='sm:text-left font-serif font-bold text-3xl mt-3'>Software Testing</h6>
                        <p className='font-serif sm:font-serif text-2xl mb-3'>Thoroughly test software applications to ensure high-quality performance and functionality.</p>
                    </div>
                </div>
            </div>


            <h6 className='font-bold text-5xl mt-24 ml-10 mb-6 lg:ml-36 xl:ml-14'>Our Products</h6>
            <section className='grid grid-cols-2 bg-gray-200 py-12 mx-36 rounded-lg shadow-2xl shadow-gray-400 p-8 mb-12 sm:mx-4 md:mx-7 '>
                <img src={Abantu} alt="" className='h-20 w-28' />
                <div className='Item'>
                    <h className='font-bold uppercase'>Abantuway</h><br />
                    <a href={Abantuu} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>abantuway.com</a>
                    <p className='block'> Here at Abantuway,will help you store and track your sales and stock informations with little efforts</p>
                </div>
            </section>

            <section className='grid grid-cols-2 bg-gray-200 py-12 mx-36 rounded-lg shadow-2xl shadow-gray-400 p-8 mb-12 sm:mx-4 md:mx-7 '>
                <img src={Quick} alt="" className='h-20 w-36' />
                <div className="sm:block">
                    <h className='font-bold uppercase'>QuickDrop</h>
                    <p className='block'>
                        Our service is designed to streamline the shopping experience and ensure your items are delivered promptly to your doorstep
                    </p>

                    <div className="playstore&Appstore my-0 flex sm:block">
                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                            <img src={Playstore} alt="Playstore" className='object-cover md:w-32 lg:h-40' /></a>

                        {/* <a href={Appstore} target="_blank" rel="noopener noreferrer">
                            <img src={Appstores} alt="Appstore" className='lg:h-40' />
                        </a> */}
                    </div>

                </div>
            </section>

            <div className="aboutUs mt-6">
                <div className="text-center">
                    <h className='text-black font-bold text-5xl'>About Us</h>
                </div>
                <div className="flex justify-between m-16 gap-7 sm:block">
                    <motion.p className='mt-6 font-serif text-xl md:text-lg' initial={{ x: -100 }} animate={{ x: 0 }}> Welcome to Phixtz, a leading software development company located in Kinondoni, Dar es Salaam. We are dedicated to delivering innovative and high-quality software solutions to meet the unique needs of our clients.With a team of experienced and skilled professionals, we strive to exceed expectations and provide exceptional service to our clients. Our commitment to excellence and customer satisfaction sets us apart in the industry.
                    </motion.p>
                    <motion.img src={About} alt="Phixtz company" className='rounded-xl sm:h-60 md:w-80 h-80 mt-6 bg-cover' initial={{ x: +100 }} animate={{ x: 0 }} transition={{ delay: 2.0 }} />
                </div>
            </div>
        </div>
    )
}

export default Body