import React from 'react'

function Navbar() {
    return (
        <div className='fixed top-5 left-[50%] -translate-x-[50%] bg-black bg-opacity-80 backdrop-blur-sm text-white text-lg  px-10 py-3 rounded-full flex justify-center items-center font-matter z-[9999] cursor-pointer border-white'>
            <div className='flex gap-9'>
                {
                    ["Home", "About", "Projects", "Contact"].map((item, index) => (
                        <div className='hover:text-zinc-400 transition-all duration-500 ease-in-out'>{item}</div>
                    ))
                }

            </div>
        </div>
    )
}

export default Navbar