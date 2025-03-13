import { motion } from "framer-motion";
import React from "react";

interface ImageBgProps {
    title: string;
    subtitle: string;
}

const ImageBg: React.FC<ImageBgProps> = ({ title, subtitle }) => {
    return (
        <motion.div
            className="w-full h-[540px] flex flex-col items-center justify-center text-white text-center p-4"
            style={{ backgroundImage: `url('/assets/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-lg md:text-2xl mt-2">{subtitle}</p>
        </motion.div>
    );
};

export default ImageBg;