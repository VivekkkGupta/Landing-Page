import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Projects() {
    return (
        <>
            <div className='bg-black min-w-screen h-screen flex items-center justify-center'>
                <div className='w-[80%] text-white font-matter font-bold text-[10vw] leading-none'>
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
        </>
    )
}

export default Projects