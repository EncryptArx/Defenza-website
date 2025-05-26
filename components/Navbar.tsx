import React from 'react';
import { DefenzaLogo } from './icons/Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-brand-gold/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 text-brand-gold hover:opacity-90 transition-opacity">
          <DefenzaLogo className="h-8 w-8 md:h-10 md:w-10" />
          <span className="text-2xl font-display font-bold">
            Defenza
          </span>
        </a>
        <a
          href="#get-app"
          className="bg-brand-gold text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
        >
          Get Beta Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;