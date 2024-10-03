import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
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

    useEffect(() => {
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
                        My
                    </div>
                    <div className='flex items-center justify-between pl-[20%]'>
                        <h2>
                            Projects
                        </h2>
                        <span className='rotate-[133deg]'>
                            <FaArrowRight />
                        </span>
                    </div>
                </div>
            </motion.div>
            {projectsinfo.map((item, index) => (
                <Projectpage key={index} item={item} />
            ))}
        </>
    );
}

export default Projects;
