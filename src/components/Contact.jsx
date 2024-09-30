import React from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";``
import { BiLogoGmail } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const formSubmit = (e) =>{
    e.preventDefault()
    const firstname = e.target[0].value
    const lastname = e.target[1].value
    const email = e.target[2].value
    const description = e.target[3].value

    if (firstname !== "" || lastname !== "" || email !== "" || description !== ""){
        console.log("good")
    }
}

function Contact() {
    return (
        <div className='relative bg-black min-h-screen min-w-screen text-white font-matter'>
            
            <div className='w-full h-[90vh] flex'>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className=' relative m-[5vw] text-[6vw] text-bold leading-none tracking-tight'>
                        <p>
                            Good things
                            happen when
                            you say <span className='underline'>hey</span>
                        </p>
                        <span className='absolute right-5 rotate-[-30deg] hover:rotate-[-45deg] hover:right-0 transition-all duration-500 ease-in-out'>
                            <FaArrowRight />
                        </span>
                    </div>
                </div>
                <div className='contactmodal w-1/2 flex items-center justify-center'>
                    <div className='bg-white text-black w-[80%] h-[80%] rounded-tr-[5vw] flex items-center justify-between px-[4vw]'>

                        <form onSubmit={(event)=>formSubmit(event)}>                        
                            <div className="w-full flex flex-col gap-6">
                                <div className="w-full flex justify-between gap-10">
                                    <input
                                        placeholder="First Name *"
                                        className="h-full w-full border-b border-blue-gray-500 
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0 " />
                                    <input
                                        placeholder="Last Name *"
                                        className="h-full w-full border-b border-blue-gray-500 
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0 " />

                                </div>
                                <div className="w-full flex justify-between gap-10">
                                    <input
                                        placeholder="Your email address *"
                                        className="h-full w-full border-b border-blue-gray-500 
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0 " />
                                </div>
                                <div className="w-full flex justify-between gap-10">
                                    <input
                                        placeholder="Message *"
                                        className="h-full w-full border-b border-blue-gray-500 
                                        bg-transparent pt-4 pb-1.5 font-matter 
                                        text-lg text-black 
                                        outline outline-0 transition-all 
                                        placeholder:text-gray-500 
                                        placeholder-shown:border-blue-gray-200 
                                        focus:border-gray-900 focus:outline-0 " />
                                </div>
                                <div className='mt-5 flex items-center justify-center '>
                                    <button className='group hover:gap-3 transition-all duration-500 ease-in-out flex items-center justify-between gap-2 border-2 rounded-full px-5  py-2 bg-black text-white '>
                                        Submit
                                        <span className='group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out'>
                                            <FaArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className='absolute footer w-full h-[10vh] bottom-0 left-0 flex justify-between items-center px-12 py-5'>

                <div className='socials flex items-center justify-center gap-2 cursor-pointer'>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>
                        <FaInstagram />
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>

                        <FaGithub />
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>

                        <FaLinkedinIn />
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>

                        <BiLogoGmail />
                    </span>
                    <span className='hover:bg-white hover:rounded-full hover:text-black p-2 transition-all duration-200 ease-in'>

                        <FaXTwitter />
                    </span>
                </div>
                <div className=''>&copy;CodeVivek</div>

                <div className='flex flex-col hover:text-gray-400'>
                    <span>
                        Made with <span className='text-red-600'>❤</span> by Vivek
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Contact