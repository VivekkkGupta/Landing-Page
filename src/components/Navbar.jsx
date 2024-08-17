import React from 'react'
import { motion } from "framer-motion"

function Navbar({ activeSection, setActiveSection }) {
    const menuItems = ["Home", "About", "Projects", "Contact"]
    return (
        <div className='z-[9999] fixed top-5 left-[50%] -translate-x-[50%] bg-black bg-opacity-80 backdrop-blur-sm text-white text-lg px-6 py-2 rounded-full flex justify-center items-center font-matter cursor-pointer'>
            <motion.div className='flex' layout>
                {
                    menuItems.map((item, index) => (
                        <div
                            className={`flex items-center px-8 py-2 hover:text-zinc-400 transition-all duration-500 ease-in-out
                            ${activeSection === item.toLowerCase() ? "bg-slate-900 px-8 py-2 rounded-full backdrop-blur-lg" : ""}
                        `}
                            key={index}
                            onClick={(e) => setActiveSection((e.target.innerHTML).toLowerCase())}
                        >{
                                console.log(activeSection)
                            }
                            {item}

                        </div>
                    ))
                }

            </motion.div>
        </div >
    )
}

export default Navbar