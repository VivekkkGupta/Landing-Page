import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCodeVivekUniversalContext } from '../contexts/CodeVivekUniversalContext';
import Projectpage from './Projectpage';

function Projects() {
    const { scrollYProgress } = useScroll();
    const xMy = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xProjects = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xArrow = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
    const xRotate = useTransform(scrollYProgress, [0, 1], [90, 180]);

    const { ProjectsDataArray } = useCodeVivekUniversalContext()
    return (
        <>
            <motion.div
                className='relative bg-white text-black w-full h-full 
                flex flex-col overflow-hidden'
                id="projects"
            >
                <div className='w-full md:w-[80%] h-[30vh] md:h-[100vh] mx-auto font-matter font-bold text-[12vw] md:text-[8vw] leading-none'>

                    <div className='w-full h-full flex flex-col justify-center'>
                        <div>
                            <motion.div className="" style={{ x: xMy }}>
                                My
                            </motion.div>
                        </div>
                        <div className='flex items-center justify-between pl-[10%]'>
                            <motion.h2 style={{ x: xProjects }}>
                                Projects
                            </motion.h2>
                            <motion.span
                                className=''
                                style={{
                                    x: xArrow,
                                    rotate: xRotate
                                }}
                                aria-hidden="true">
                                <FaArrowRight />
                            </motion.span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    {ProjectsDataArray.map((project) => (
                        <Projectpage key={project.id} item={project} />
                    ))}
                </div>
            </motion.div>

        </>
    );
}

export default Projects;
