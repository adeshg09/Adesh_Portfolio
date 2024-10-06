"use client";

import { useEffect, useState } from "react";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import { navItems } from "@/data";
import LogoAnimation from "@/components/ui/LogoAnimation"; // Import the LogoAnimation component
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000); // Show logo for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {showLogo ? (
        <AnimatePresence>
          <LogoAnimation />
        </AnimatePresence>
      ) : (
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Projects />
          <Clients /> 
          <Experience />
          <Footer />
        </div>
      )}
    </main>
  );
}
