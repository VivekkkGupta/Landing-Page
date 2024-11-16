import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion'

function Projectpage({ item }) {
    const { projectname, projecttag, projectdescription, projectlink, projectpreview, projectyear } = item;

    const { scrollYProgress } = useScroll(); // Detect scroll progress

    return (
        <motion.div className='relative w-full h-screen flex items-center justify-center'
        >
            <motion.div className='bg-black w-[95%] md:w-[80%] h-[85%] md:h-[80%] 
            flex flex-col-reverse  items-center justify-center rounded-[4vw] text-white font-matter shadow-lg shadow-gray-500
            md:flex-row
            '
            >
                <div className='w-full md:w-1/2 h-full p-5 md:p-10 flex items-start justify-between flex-col'>
                    <h2 className='text-4xl text-center md:text-left md:text-[6vw] font-bold leading-tight'>
                        {projectname}
                    </h2>

                    <div className="tags w-full py-2 overflow-x-auto scrollbar-hide md:overflow-hidden">
                        {
                            projecttag.map((tag, index) => (
                                <span key={index} className='bg-black border-2 border-grey-200 px-3 py-1.5 mr-2 rounded-full 
                                hover:text-black hover:bg-white
                                transition-all duration-500 ease-in-out cursor-pointer
                                '>
                                    {tag}
                                </span>
                            ))
                        }
                    </div>
                    <p>
                        {projectdescription}
                    </p>

                    <div className='flex justify-between items-center w-full'>
                        <a
                            href={projectlink}
                            target='_blank'
                            className={`bg-transparent text-white rounded-full px-7 py-3 md:px-10 md:py-5 text-2xl border-2 
                        hover:bg-white hover:text-black group hover:gap-10
                        transition-all ease-in-out duration-500 flex items-center gap-6
                        ${!projectlink ? "pointer-events-none opacity-50" : ""}
                        `}
                        >
                            <span>{!projectlink ? "Coming Soon" : "Visit Site"}</span>
                            <span className='group-hover:rotate-[-45deg] text-white transition-all duration-500 ease-in-out group-hover:text-black' id="getintoucharrow">
                                <FaArrowRight />
                            </span>
                        </a>
                        <p className='text-gray-300'>
                            {projectyear}
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-full flex items-center justify-center'>
                    <div className=' w-[85%] h-[85%] rounded-tr-[9vw] overflow-hidden  shadow-lg shadow-gray-700  border-2 md:border-0'>
                        <video src={projectpreview}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='h-full w-full object-cover'
                        ></video>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Projectpage;
