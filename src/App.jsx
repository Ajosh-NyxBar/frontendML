import React from "react";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: "Lexend, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <WhyChoose />
        <Footer />
      </div>
    </div>
  );
};

export default App;
