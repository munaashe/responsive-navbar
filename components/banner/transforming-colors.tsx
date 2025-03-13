import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TransformingColorsProps {
    title: string;
    subtitle: string;
}

const TransformingColors: React.FC<TransformingColorsProps> = ({ title, subtitle }) => {
    const [gradient, setGradient] = useState({
        from: "#3B82F6",
        via: "#A16207",
        to: "#7C2D12"
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setGradient({
                from: `hsl(${Math.random() * 60 + 210}, 100%, 60%)`,
                via: `hsl(${Math.random() * 60 + 30}, 80%, 40%)`,
                to: `hsl(${Math.random() * 40 + 0}, 90%, 50%)`
            });
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            animate={{
                background: `linear-gradient(to right, ${gradient.from}, ${gradient.via}, ${gradient.to})`
            }}
            transition={{ duration: 3, ease: "linear" }}
            className="w-full h-[540px] flex flex-col items-center justify-center text-white text-center p-4"
            style={{ background: `linear-gradient(to right, ${gradient.from}, ${gradient.via}, ${gradient.to})` }}
        >
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-lg md:text-2xl mt-4 max-w-[720px]">{subtitle}</p>
        </motion.div>
    );
};

export default TransformingColors;