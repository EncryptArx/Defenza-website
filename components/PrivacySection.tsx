import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { FingerPrintIcon } from './icons/FeatureIcons';

const PrivacySection: React.FC = () => {
  return (
    <SectionWrapper id="privacy" title="Your Privacy, Our Priority" subtitle="We are building a foundation of trust and transparency.">
      <div className="max-w-2xl mx-auto text-center bg-brand-dark p-10 rounded-xl border border-brand-gold/30 shadow-lg animate-fade-in-up" style={{animationDelay: '1.4s'}}>
        <FingerPrintIcon className="w-16 h-16 text-brand-gold mx-auto mb-6 opacity-70"/>
        <h3 className="text-2xl font-display font-semibold text-brand-gold mb-4">Commitment to Data Protection</h3>
        <p className="text-gray-300 leading-relaxed">
          Defenza is being developed with the utmost respect for your privacy. Our comprehensive Privacy Policy, detailing our data handling practices, will be made available prior to official launch. We are committed to ensuring your personal information is secure and processed transparently.
        </p>
        <p className="text-gray-400 mt-4 text-sm">
            Further details will be shared with beta participants and on our official launch.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PrivacySection;