import React from 'react'
import { FaArrowRight } from "react-icons/fa";



function Projectpage({ item }) {
    const { projectname, projecttag, projectdescription, projectlink, projectpreview } = item;
    return (
<<<<<<< HEAD:src/components/Projectpage1.jsx
        <div  className=' sticky top-0 w-full h-screen bg-transparent flex items-center justify-center'>
            <div className='bg-black w-[80%] h-[80%] flex items-center justify-center rounded-[4vw] text-white font-matter'>
                <div className='w-1/2 h-full p-10 flex items-start justify-between flex-col'>
                    <h2 className='text-[6vw] font-bold'>
                        Type Racer
=======
        <div className='sticky top-0 w-full h-screen bg-transparent flex items-center justify-center'>
            <div className='bg-black w-[90%] h-[90%] flex items-center justify-center rounded-[4vw] text-white font-matter'>
                <div className='w-1/2 h-full p-10 flex items-start justify-between flex-col'>
                    <h2 className='text-[6vw] font-bold'>
                        {projectname}
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a:src/components/Projectpage.jsx
                    </h2>

                    <div className="tags">
                        {
<<<<<<< HEAD:src/components/Projectpage1.jsx
                            ["Creative", "Typing Test","Interactive","Design"].map((item, index) => (
=======
                            projecttag.map((tag, index) => (
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a:src/components/Projectpage.jsx
                                <span key={index} className='bg-black border-2 border-grey-200 px-3 py-1.5 mr-2 rounded-full hover:text-black hover:bg-white
                                transition-all duration-500 ease-in-out cursor-pointer
                                '>
                                    {tag}
                                </span>
                            ))
                        }
                    </div>
                    <p>
<<<<<<< HEAD:src/components/Projectpage1.jsx
                    Elevate your typing skills with our engaging and dynamic typing games. Every keystroke brings you closer to mastering speed and accuracy, turning practice into performance.
=======
                        {projectdescription}
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a:src/components/Projectpage.jsx
                    </p>
                    <button href={projectlink} className={`bg-trasparent text-white rounded-full px-10 py-5 text-2xl border-2 
                        hover:bg-white hover:text-black group hover:gap-10
                        transition-all ease-in-out duration-500 flex items-center gap-6
<<<<<<< HEAD
<<<<<<< HEAD
                        `}>
=======
<<<<<<< HEAD:src/components/Projectpage1.jsx
                        '>
>>>>>>> debb39fc8d1711792e08bef599980f8737bb0e9e
=======
<<<<<<< HEAD:src/components/Projectpage1.jsx
                        '>
>>>>>>> debb39fc8d1711792e08bef599980f8737bb0e9e
                        <span>View Project</span>
=======
                        ${projectlink === "" ? "pointer-events-none opacity-50" : ""}
                        `}>
                        <span>{projectlink === "" ? "Coming Soon" : "Visit Site"}</span>
>>>>>>> a225e67d061a99574cf2b9294c54e0ce505b584a:src/components/Projectpage.jsx
                        <span className='group-hover:rotate-[-45deg] text-white transition-all duration-500 ease-in-out group-hover:text-black' id="getintoucharrow"><FaArrowRight /></span>
                    </button>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                    <div className=' w-[85%] h-[85%] rounded-tr-[9vw] overflow-hidden'>
                        <video src={projectpreview}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className='h-full w-full object-cover'
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Projectpage;
=======
export default Projectpage
>>>>>>> debb39fc8d1711792e08bef599980f8737bb0e9e
=======
export default Projectpage
>>>>>>> debb39fc8d1711792e08bef599980f8737bb0e9e
