import React from 'react';
import { ShieldCheckIcon } from './icons/FeatureIcons';
import { DefenzaLogo } from './icons/Logo';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-black via-brand-red/20 to-black text-white text-center">
      <div className="container mx-auto px-6 relative">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-gold opacity-10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand-red opacity-10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        <div className="relative z-10 animate-fade-in-up">
          <DefenzaLogo className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Defenza <br className="hidden md:block" />
            <span className="text-brand-gold">Your AI-Powered Digital Safety Companion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Defenza is a lightweight app designed for everyday internet users. It blends real-time protection with educational guidance, all within an intuitive, chat-based interface.
          </p>
          <a
            href="#get-app"
            className="bg-brand-gold text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105 inline-flex items-center shadow-xl shadow-brand-gold/30"
          >
            <ShieldCheckIcon className="w-6 h-6 mr-2" />
            Request Beta Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;