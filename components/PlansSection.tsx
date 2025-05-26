
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { LockClosedIcon } from './icons/FeatureIcons';

const PlansSection: React.FC = () => {
  return (
    <SectionWrapper 
      id="plans" 
      title="Exclusive Access Awaits" 
      subtitle="Tailored protection plans are being crafted. Be the first to know."
      className="bg-gradient-to-b from-black via-brand-red/10 to-black"
    >
      <div className="text-center max-w-2xl mx-auto bg-brand-dark p-10 rounded-xl border border-brand-gold/50 shadow-xl shadow-brand-gold/20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <LockClosedIcon className="w-20 h-20 text-brand-gold mx-auto mb-6 opacity-70"/>
        <h3 className="text-3xl font-display font-bold text-brand-gold mb-4">Unlock Premium Tiers</h3>
        <p className="text-lg text-gray-300 mb-6">
          Our full range of protection tiers will be unveiled soon. Beta participants will receive special early access and introductory offers.
        </p>
        <p className="text-md text-gray-400">
          Curious? <a href="#get-app" className="text-brand-gold hover:underline font-semibold">Join the beta</a> to stay informed and gain priority access.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PlansSection;