import React from "react";
import Navbar from "@/components/navbar";

interface LayoutProviderProps {
    children: React.ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {

    return (
        <div className='min-h-screen'>
            <Navbar />
            {children}
        </div>
    );
};

export default LayoutProvider;