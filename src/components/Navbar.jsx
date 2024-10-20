import React from 'react'
import { motion } from "framer-motion"
import { useCodeVivekUniversalContext } from '../contexts/CodeVivekUniversalContext'
import { useThemeContext } from '../contexts/ThemeContext'

function Navbar() {

    const { activeSection, handleActiveSection } = useCodeVivekUniversalContext()
    const { theme, toggleTheme } = useThemeContext()

    const menuItems = ["Home", "About", "Projects", "Contact"]

    return (

        <nav className='w-full lg:w-full relative'>

            <div className='z-[99] fixed top-5 left-[50%] -translate-x-[50%] bg-gray-300 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm text-black dark:text-white text-lg rounded-full flex justify-center items-center font-matter cursor-pointer py-2 px-2 shadow-md shadow-gray-800'>

                <div className='flex'>

                    {
                        menuItems.map((item, index) => (
                            <motion.div
                                className={`flex items-center px-8 py-2 hover:text-gray-200 dark:hover:text-zinc-300 duration-500 transition-all z-[99]
                            ${activeSection === item.toLowerCase() ? "bg-gray-300 dark:bg-slate-900 rounded-full backdrop-blur-lg" : ""}
                            `}
                                key={index}
                                onClick={() => handleActiveSection(item)}
                            >
                                {activeSection === item.toLowerCase() && (
                                    <motion.div
                                        layoutId="highlight"
                                        className="absolute inset-0 bg-gray-300 dark:bg-slate-900 rounded-full z-[-9]"
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                                {item}

                            </motion.div>
                        ))
                    }

                </div>
            </div >
        </nav>
    )
}

export default Navbar;
