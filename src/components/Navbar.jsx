import React from 'react'
import { motion } from "framer-motion"
import { useUniversalContext } from '../contexts/UniversalContext'
import { useThemeContext } from '../contexts/ThemeContext'


function Navbar() {

    const { activeSection, setActiveSection, handleActiveSection } = useUniversalContext()
    const { theme, toggleTheme } = useThemeContext()

    const menuItems = ["Home", "About", "Projects", "Contact"]

    return (

        <nav className='w-full relative'>

            <div className='z-[99] fixed top-6 left-5 text-white dark:text-white border-4 p-2 bg-transparent'>
                <h2 className='font-[700] tracking-widest'>
                    VG
                </h2>
            </div>

            <div className='z-[99] fixed top-6 right-5 text-white dark:text-white border-4 
            px-2 py-1'
                onClick={toggleTheme}
            >
                <i class={`${theme === 'dark' ? "ri-moon-line" : "ri-sun-line"}`}></i>
            </div>

            <div className='z-[99] fixed top-5 left-[50%] -translate-x-[50%] bg-gray-300 dark:bg-black bg-opacity-80 backdrop-blur-sm text-black dark:text-white text-lg rounded-full flex justify-center items-center font-matter cursor-pointer py-2 px-2'>
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

export default Navbar