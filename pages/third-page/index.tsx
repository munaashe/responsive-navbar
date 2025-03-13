import React from 'react';
import Banner from '@/components/banner';
import Head from 'next/head';

const ThirdPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Third Page - Plain Background</title>
                <meta name="description" content="This hero section has a plain solid colour background." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="plain background, hero section, solid color" />
                <meta name="author" content="Your Name" />
            </Head>
            <div className="flex items-center justify-center h-[540px]">
                <Banner 
                    type='plain' 
                    title='Third Page' 
                    subtitle='This hero section has a plain solid colour background.' 
                />
            </div>
        </>
    );
};

export default ThirdPage;