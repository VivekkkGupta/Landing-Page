import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

function Cursorball() {
    const [MouseX, setMouseX] = useState(0);
    const [MouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY + Math.round(window.scrollY));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleMouseMove);


    }, []);

    return (
        <motion.div className={`absolute w-4 h-4 bg-white text-black z-[9999] rounded-full pointer-events-none mix-blend-exclusion transition `}
            style={{
                transform: `translate3d(calc(${MouseX}px - 50%),calc(${MouseY}px - 50%), 0px)`
            }}
        >
            {

                console.log(`MouseX : ${MouseX}, MouseY : ${MouseY}`)
            }
        </motion.div >
    )
}

export default Cursorball