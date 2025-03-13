import React from 'react';
import Banner from '@/components/banner';

const ThirdPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-[540px]">
            <Banner 
            type='plain' 
            title='Third Page' 
            subtitle='This hero section has a plain solid colour background.' 
            />
        </div>
    );
};

export default ThirdPage;