import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className = '', style }) => {
  return (
    <div 
      className={`bg-brand-dark p-4 sm:p-6 rounded-xl border border-brand-red/40 hover:border-brand-gold/60 shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-2 ${className}`}
      style={style}
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="text-lg sm:text-xl font-display font-semibold text-brand-gold mb-3 text-center">{title}</h3>
      <p className="text-gray-400 text-sm text-center leading-relaxed">{description}</p>
    </div>
  );
};