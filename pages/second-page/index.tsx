import Banner from "@/components/banner";
import React from "react";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Second Page - Welcome to Our Site</title>
                <meta name="description" content="This page has a static image background." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="static image, background, hero section" />
                <meta name="author" content="Your Name" />
            </Head>
            <div className="flex items-center justify-center">
                <Banner
                    type='image'
                    title='Welcome to Our Site'
                    subtitle='This one has a static image background'
                />
            </div>
        </>
    );
}