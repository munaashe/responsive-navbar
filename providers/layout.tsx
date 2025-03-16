import React from "react";
import Navbar from "@/components/navbar";

interface LayoutProviderProps {
    children: React.ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {

    return (
        <div className='!h-screen'>
            <Navbar />
            {children}
        </div>
    );
};

export default LayoutProvider;