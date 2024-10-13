import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useUniversalContext } from '../contexts/UniversalContext';
import Projectpage from './Projectpage'; // Import Projectpage component

function Projects() {
    const { scrollYProgress } = useScroll();
    const xMy = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xProjects = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xArrow = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
    const xRotate = useTransform(scrollYProgress, [0, 0.5], [0, 155]);

    const { ProjectsDataArray } = useUniversalContext(); // Access project data from context

    return (
        <>
            <motion.div
                className='sticky top-0 bg-white text-black min-w-full h-[80vh] flex items-center justify-center z-[9] overflow-hidden'
            >
                <div className='w-[80%] font-matter font-bold text-[8vw] leading-none'>
                    <div>
                        <motion.div className="" style={{ x: xMy }}>
                            My
                        </motion.div>
                    </div>
                    <div className='flex items-center justify-between pl-[10%]'>
                        <motion.h2 style={{ x: xProjects }}>
                            Projects
                        </motion.h2>
                        <motion.span className='' style={{ x: xArrow, rotate: xRotate }} aria-hidden="true">
                            <FaArrowRight />
                        </motion.span>
                    </div>
                    {/* Render each project using Projectpage component */}

                </div>
            </motion.div>
            <div className="mt-10 relative z-[99]">
                {ProjectsDataArray.map((project) => (
                    <Projectpage key={project.id} item={project} />
                ))}
            </div>
        </>
    );
}

export default Projects;
