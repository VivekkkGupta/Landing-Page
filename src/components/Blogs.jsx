import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

function Blogs(){

    const { scrollYProgress } = useScroll();
    const xBlogs = useTransform(scrollYProgress, [0, 1], ['0vw', '20vw']);
    const xArrow = useTransform(scrollYProgress, [0, 1], ['0vw', '-20vw']);
    const xRotate = useTransform(scrollYProgress, [0, 1], [0, 155]);
    
    return (
        <>
            <div className="relative bg-slate-900 h-screen min-w-screen text-white font-matter flex flex-col items-center gap-10 py-[10%]">
                <div className='w-[80%] h-[20%] font-matter font-bold text-[8vw] leading-none'>
                    <div className='flex items-center justify-between'>
                        <motion.h2  style={{ x: xBlogs }}>
                            Blogs
                        </motion.h2>
                        <motion.span className='' style={{x:xArrow, rotate:xRotate}}>
                            <FaArrowRight />
                        </motion.span>
                    </div>
                </div>

                <div className="h-[60%] w-full bg-pink-400">
                    <div className=" bg-pink-400">
                        hellow
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Blogs;