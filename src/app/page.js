
"use client"
import { useState, useEffect } from "react";
import About from "./_components/About";
import Banner from "./_components/Banner";
import Contact from "./_components/Contact";
import Services from "./_components/Services";
import WhatWeDo from "./_components/WhatWeDo";
import LoadingScreen from '@/components/LoadingScreen'
import Review from "./_components/Review";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="items-center" >
    {loading ? <LoadingScreen /> :
   ( <div>
      <Banner/>
      <WhatWeDo/>
      <About/>
      <Services/>
      {/* <Team/> */}
      <Review/>
      <Contact/>
    </div>)
  }
  </div>
  );
}
