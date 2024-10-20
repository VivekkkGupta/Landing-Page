import React from 'react'
import vivekimage from "../assets/images/vivek-kerala-beach.jpg"
import { FaArrowRight } from "react-icons/fa";
function Aboutpage() {

    const goToContactPage = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',  // Enables smooth scrolling
                block: 'start',      // Scrolls to the top of the element
            });
        }
    };
    return (
        <>
            <div className='h-[130vh] min-w-screen bg-transparent z-[-99]' id="about">
            </div>
            <div className='fixed top-0 w-screen h-screen bg-black text-gray-400 flex items-center justify-center font-matter font-thin'>

                <div className='w-full h-full flex justify-center absolute 
                mx-[15vw] flex-col py-[20vh] px-[5vw] gap-10 
                md:flex-row md:items-center md:gap-10 md:px-[8%] md:my-[10vh]'>
                    <div className='flex items-center justify-center
                    w-full md:w-1/3
                    '>
                        <div className='w-[80%] h-[80%] md:w-[20vw] md:h-[50vh] rounded-xl overflow-hidden'>
                            <img src={vivekimage} alt="image" />
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col items-center justify-center gap-10'>
                        <h2 className='text-2xl md:text-3xl'>
                            I'm a <span className='font-bold text-white'>web developer</span> based in <span className='font-bold text-white'>Mumbai, Maharashtra.</span>   I specialize in <span className='font-bold text-white'>Frontend Engineering</span>, focusing on building high quality web experiences through clean code and thoughtful design.
                        </h2>
                        <button onClick={goToContactPage} className='bg-trasparent text-white rounded-full px-10 py-5 text-2xl border-2 
                        hover:bg-white hover:text-black group hover:gap-10
                        transition-all ease-in-out duration-500 flex items-center gap-6
                        '>
                            <span>Get in touch</span>
                            <span className='group-hover:rotate-[-45deg] text-white transition-all duration-500 ease-in-out group-hover:text-black' id="getintoucharrow"><FaArrowRight /></span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Aboutpage