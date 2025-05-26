import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 py-8 text-center animate-fade-in-up" style={{animationDelay: '1.6s'}}>
      <div className="container mx-auto px-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Defenza. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2 flex items-center justify-center">
          A product of&nbsp;
          <a
            href="https://www.encryptarx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 font-semibold hover:underline transition-colors duration-200"
          >
            <img src="/assets/images/ecx-logo.png" alt="EncryptArx Logo" className="h-4 w-auto mr-1.5" />
            EncryptArx
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;