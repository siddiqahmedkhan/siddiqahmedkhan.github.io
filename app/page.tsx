"use client";
import React, { useState } from "react";
import { Raleway, Fira_Code, Turret_Road } from "next/font/google";
import "@/app/scss/index.scss";
import Head from "next/head";
import Navbar from "./sections/Navbar";
import SocialIcons from "./components/SocialIcons";
import Email from "./components/Email";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>SIDDIQ AHMED KHAN</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Page;
