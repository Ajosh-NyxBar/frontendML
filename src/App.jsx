import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PredictPage from "./pages/PredictPage";

const Home = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <WhyChoose />
    <Footer />
  </>
);

// Komponen wrapper agar bisa akses location
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: "Lexend, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {!hideNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/predict" element={<PredictPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

