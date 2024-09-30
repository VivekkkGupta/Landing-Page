import React from 'react';
import Milkyway from '../assets/videos/Milkyway_1.mp4';
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";

function Landingpage() {
    const showupvariant = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 1 }
    }

    return (
        <div id="page1" className='z-[9] min-h-screen min-w-screen relative bg-black'>
            <video
                src={Milkyway}
                autoPlay
                loop
                muted
                playsInline
                className='absolute top-0 left-0 w-full h-full object-cover opacity-40'
            />

            <div className='cursor-default absolute flex items-center justify-center top-0 h-full w-full text-white'>
                <div className='flex items-center justify-center w-[80%] h-[80%]'>
                    <div className='text-[7vw] font-bold tracking-tighter leading-none'>
                        <div className="overflow-hidden">
                            <motion.div
                                variants={showupvariant}
                                initial="hidden"
                                animate="visible"
                                transition="transition"
                            >
                                Hi. I'm Vivek.
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div
                                variants={showupvariant}
                                initial="hidden"
                                animate="visible"
                                transition="transition"
                            >
                                A creative Frontend &nbsp;
                                <span className='inline-flex'>
                                    <IoCodeSlash />
                                </span>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div
                                variants={showupvariant}
                                initial="hidden"
                                animate="visible"
                                transition="transition"
                            >
                                Developer.
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;