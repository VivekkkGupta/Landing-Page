import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Milkyway3 from "../assets/videos/Milkyway_2.mp4"


function Projectpage1() {
    return (
        <div  className=' sticky top-0 w-full h-screen bg-transparent flex items-center justify-center'>
            <div className='bg-black w-[90%] h-[90%] flex items-center justify-center rounded-[4vw] text-white font-matter'>
                <div className='w-1/2 h-full p-10 flex items-start justify-between flex-col'>
                    <h2 className='text-[6vw] font-bold'>
                        Ochi Design
                    </h2>

                    <div className="tags">
                        {
                            ["Creative", "Website"].map((item, index) => (
                                <span key={index} className='bg-black border-2 border-grey-200 px-3 py-1.5 mr-2 rounded-full hover:text-black hover:bg-white
                                transition-all duration-500 ease-in-out cursor-pointer
                                '>
                                    {item}
                                </span>
                            ))
                        }
                    </div>
                    <p>
                        Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.
                    </p>
                    <button className='bg-trasparent text-white rounded-full px-10 py-5 text-2xl border-2 
                        hover:bg-white hover:text-black group hover:gap-10
                        transition-all ease-in-out duration-500 flex items-center gap-6
                        '>
                        <span>Visit Site</span>
                        <span className='group-hover:rotate-[-45deg] text-white transition-all duration-500 ease-in-out group-hover:text-black' id="getintoucharrow"><FaArrowRight /></span>
                    </button>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className=' w-[85%] h-[85%] rounded-tr-[9vw] overflow-hidden'>
                        <video src={Milkyway3}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='h-full w-full object-cover'
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectpage1