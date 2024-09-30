import React from 'react';
import { FaArrowRight } from "react-icons/fa";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {

    const { scrollYProgress } = useScroll();
    const xMy = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xProjects = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xArrow = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
    const xRotate = useTransform(scrollYProgress, [0, 0.5], [0,155]);

    return (
            <motion.div 
            data-scroll 
            data-scroll-speed="0.1" 
            className='sticky top-0 bg-white text-black min-w-screen h-[70vh] flex items-center justify-center z-[-9999] overflow-hidden'
        >
            <div className='w-[80%] font-matter font-bold text-[8vw] leading-none'>
                <div 
                    className=''>
                    <motion.div className="" style={{ x: xMy }}>
=======
import Projectpage from './Projectpage';
import Milkyway3 from "../assets/videos/Milkyway_2.mp4";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {

    const projectsinfo = [
        {
            id: 1,
            projectname: "Ochi Design",
            projecttag: ["Creative", "Website"],
            projectdescription: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            projectyear: 2022,
            projectlink: "",
            projectpreview: Milkyway3,
        },
        {
            id: 2,
            projectname: "Ochi Design",
            projecttag: ["Creative", "Website"],
            projectdescription: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
            projectyear: 2022,
            projectlink: "",
            previewlink: "https://sumatran.cat/google-io-countdown.5f03776a.mp4",
        },
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.6,
        triggerOnce: false,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({ scale: 1 });
        } else {
            controls.start({ scale: 0.8 });
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='sticky top-0 bg-white text-black min-w-screen h-[80vh] flex items-center justify-center'
            >
                <div className='w-[80%] font-matter font-bold text-[8vw] leading-none'>
                    <div className='px-[10%]'>
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a
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
<<<<<<< HEAD
            </div>
        </motion.div>
    )
=======
            </motion.div>
            {projectsinfo.map((item, index) => (
                <Projectpage key={index} item={item} />
            ))}
        </>
    );
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a
}

export default Projects;
