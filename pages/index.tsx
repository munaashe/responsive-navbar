import Banner from "@/components/banner";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Dynamic Transforming Colors</title>
        <meta name="description" content="Hero with a background that transforms colors dynamically using Framer Motion, looks cool right?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="dynamic, transforming colors, framer motion, hero section" />
        <meta name="author" content="Your Name" />
      </Head>
      <div className="flex items-center justify-center">
        <Banner
          type='transforming'
          title='Dynamic Transforming Colors'
          subtitle='Hero with a background that transforms colors dynamically using Framer Motion, looks cool right?'
        />
      </div>
    </>
  );
}