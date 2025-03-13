import Banner from "@/components/banner";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Banner 
      type='transforming' 
      title='Dynamic Transforming Colors' 
      subtitle='Hero with a background that transforms colors dynamically using Framer Motion, looks cool right?' 
      />
    </div>
  );
}
