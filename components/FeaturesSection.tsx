import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { FeatureCard } from './common/FeatureCard';
import { BrainCircuitIcon, DocumentArrowUpIcon, ShieldCheckIcon, EyeIcon } from './icons/FeatureIcons';

const features = [
  {
    icon: <BrainCircuitIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-brand-gold" />,
    title: 'Chat-Based Scam Guidance',
    description: 'Instant AI chat coach that explains red flags, walks users through suspicious messages, and offers actionable advice in natural language.',
  },
  {
    icon: <DocumentArrowUpIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-brand-gold" />,
    title: 'File Threat Scanner',
    description: 'Upload any file (documents, executables, media) for instant malware analysis—preventing harmful downloads or shares.',
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-brand-gold" />,
    title: 'Real-Time Web Threat Detection',
    description: 'Monitors browsing activity, automatically blocks malicious links or injected content, and alerts users before they interact with risky sites.',
  },
  {
    icon: <EyeIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-brand-gold" />,
    title: '(Coming Soon) Privacy Policy Analyzer',
    description: 'Automatically reviews newly installed app permissions and privacy terms, summarizes risks, and advises on data-sharing safety.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <SectionWrapper id="features" title="Core Features" subtitle="Blending real-time protection with educational guidance through an intuitive, chat-based interface.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;