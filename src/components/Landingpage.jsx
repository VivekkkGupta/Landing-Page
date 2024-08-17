import React from 'react'
import Milkyway from '../assets/videos/Milkyway_1.mp4'
import { IoCodeSlash } from "react-icons/io5";


function Landingpage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.5" id="page1" className=' z-[9] min-h-screen min-w-screen relative bg-black'>
            <video
                src={Milkyway}
                autoPlay
                loop
                muted
                playsInline
                className='absolute top-0 left-0 w-full h-full object-cover opacity-40'
            />

            <div className='absolute flex items-center justify-center top-0 h-full w-full text-white'>

                <div className='flex items-center justify-center w-[80%] h-[80%] '>

                    <h1 className='text-[7vw] font-bold tracking-tighter leading-none'>
                        Hi. I'm Vivek.
                        <br />
                        A creative Frontend &nbsp;
                        <span className='inline-flex '>
                            <IoCodeSlash />
                        </span>
                        <br />
                        Developer.
                    </h1>
                </div>
            </div>
        </div >
    )
}

export default Landingpage