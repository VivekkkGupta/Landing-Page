import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {

    const { scrollYProgress } = useScroll();
    const xMy = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xProjects = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xArrow = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
    const xRotate = useTransform(scrollYProgress, [0, 0.5], [0,155]);

    return (
            <motion.div 
            className='sticky top-0 bg-white text-black min-w-screen h-[70vh] flex items-center justify-center z-[9999] overflow-hidden'
                >
            <div className='w-[80%] font-matter font-bold text-[8vw] leading-none'>
                <div 
                    className=''>
                    <motion.div className="" style={{ x: xMy }}>
                        My
                    </motion.div>
                </div>
                <div 
                    className='flex items-center justify-between pl-[10%]'>
                    <motion.h2  style={{ x: xProjects }}>
                        Projects
                    </motion.h2>
                    <motion.span className='' style={{x:xArrow, rotate:xRotate}}>
                        <FaArrowRight />
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;
