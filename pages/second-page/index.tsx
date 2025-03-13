import Banner from "@/components/banner";
import React from "react";

export default function Home() {
    return (
        <div className="flex items-center justify-center">
            <Banner
                type='image'
                title='Welcome to Our Site'
                subtitle='This one has a static image background'
            />
        </div>
    );
}