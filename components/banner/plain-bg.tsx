import React from 'react';
interface BannerProps {
    title: string;
    subtitle: string;
}

const PlainBgBanner: React.FC<BannerProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700 p-8 text-center h-[540px] flex items-center justify-center flex-col text-black dark:text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{subtitle}</p>
        </div>
    );
};

export default PlainBgBanner;
