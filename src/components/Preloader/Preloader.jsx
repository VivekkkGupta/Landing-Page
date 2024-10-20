import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [location]);

    // Motion variants for sliding in, staying at center, and sliding out
    const slideVariants = {
        hidden: { x: '-80vw' }, // Start off-screen from the left
        visible: { x: 0 },       // Center of the screen
        exit: { x: '100vw' },    // Exit off-screen to the right
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    variants={slideVariants}
                >
                    <div className="text-center text-white flex items-center justify-center flex-col gap-5">
                        <h1 className="text-2xl md:text-6xl font-bold mb-4 animate-pulse">
                            Great Things Takes Time</h1>
                        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
