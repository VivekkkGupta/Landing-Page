import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Projects() {
    return (
        <div data-scroll data-scroll-speed="0.1" className='sticky top-0 bg-white text-black min-w-screen h-[80vh] flex items-center justify-center '>
            <div className='w-[80%] font-matter font-bold text-[8vw] leading-none'>
                <div className='px-[10%]'>
                    My
                </div>
                <div className='flex items-center justify-between pl-[20%]'>
                    <h2>
                        Projects
                    </h2>
                    <span className='rotate-[133deg]'>
                        <FaArrowRight />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Projects