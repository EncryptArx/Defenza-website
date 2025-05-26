
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-gold mb-3">{title}</h2>
          {subtitle && <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};