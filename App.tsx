import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UseCaseSection from './components/UseCaseSection';
import PlansSection from './components/PlansSection';
import GetAppSection from './components/GetAppSection';
import SupportFAQSection from './components/SupportFAQSection';
import PrivacySection from './components/PrivacySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <UseCaseSection />
        <PlansSection />
        <GetAppSection />
        <SupportFAQSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
