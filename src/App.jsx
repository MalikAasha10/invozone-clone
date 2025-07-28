import { useState } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import BusinessTypes from "./components/BusinessTypes";
import EngagementModels from "./components/EngagementModels";
import CTA from "./components/CTA";
import Footer from "./components/Footer"; 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <Services />
      <BusinessTypes />
      <EngagementModels />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

