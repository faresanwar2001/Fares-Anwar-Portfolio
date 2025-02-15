"use client"
import { useTranslations } from "next-intl";
import AboutSection from "./_components/about";
import { useEffect, useState } from "react";

export default function About() {
    // Translation
    const t = useTranslations()

    // State
    const [loading, setLoading] = useState(false)

    //Effect
    useEffect(() => {
      setLoading(false)
      

    },[])

  return (
    <>
    {loading ? "Loading...." : 
    <>
      <div className="text-black dark:text-white">
        <h1 className="text-center text-5xl relative tracking-[3px] font-semibold my-11">
          {t('about-section')}
          <div className="w-[50px] h-[5px] flex justify-center items-center absolute left-[48%] rounded bg-[#F82BA9] "></div>
        </h1>
      

        {/* About section */}
        <AboutSection />
    </div>
    </>}

    </>
  );
}
