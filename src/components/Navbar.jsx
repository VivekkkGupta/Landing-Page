import React from 'react'
import { motion } from "framer-motion"

function Navbar({ activeSection, setActiveSection }) {
    const menuItems = ["Home", "About", "Projects", "Contact"]
    return (
        <div className='z-[99] fixed top-5 left-[50%] -translate-x-[50%] bg-black bg-opacity-80 backdrop-blur-sm text-white text-lg px-6 py-2 rounded-full flex justify-center items-center font-matter cursor-pointer'>
            <div className='flex' >
                {
<<<<<<< HEAD
                    ["Home", "About", "Projects","Blogs", "Contact"].map((item, index) => (
                        <div className='hover:text-zinc-400 transition-all duration-500 ease-in-out'>{item}</div>
=======
                    menuItems.map((item, index) => (
                        <motion.div
                            className={`flex items-center px-8 py-2 hover:text-zinc-300 duration-500 ease-in-out transition-all 
                            ${activeSection === item.toLowerCase() ? "bg-slate-900 px-8 py-2 rounded-full backdrop-blur-lg" : ""}
                            `}
                            key={index}
                            onClick={(e) => setActiveSection((e.target.innerHTML).toLowerCase())}
                            layout
                        >
                            {activeSection === item.toLowerCase() && (
                                <motion.div
                                    layoutId="highlight"
                                    className="absolute inset-0 bg-slate-900 rounded-full z-[-1]"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                            {item}

                        </motion.div>
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a
                    ))
                }

            </div>
        </div >
    )
}

export default Navbar