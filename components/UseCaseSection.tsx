import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { UserCircleIcon, UserGroupIcon, BuildingStorefrontIcon } from './icons/FeatureIcons';

const useCases = [
  {
    icon: <UserCircleIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mb-4" />,
    title: 'Non-Technical Internet Users',
    description: "Seniors, students, employees—anyone without deep IT knowledge. Defenza provides intuitive protection and clear guidance.",
  },
  {
    icon: <UserGroupIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mb-4" />,
    title: 'Families & Parents',
    description: "Ensuring loved ones stay protected online with easy-to-use security features and educational insights.",
  },
  {
    icon: <BuildingStorefrontIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-gold mb-4" />,
    title: 'Small Businesses & Educators',
    description: "Affordable, easy-to-use cybersecurity tool without enterprise complexity, helping safeguard sensitive data.",
  },
];

const UseCaseSection: React.FC = () => {
  return (
    <SectionWrapper id="use-cases" title="Who Benefits?" subtitle="Defenza is designed for everyday internet users, providing tailored security for diverse needs.">
      <div className="grid md:grid-cols-3 gap-10">
        {useCases.map((useCase, index) => (
          <div 
            key={index} 
            className="bg-brand-dark p-8 rounded-xl border border-brand-gold/30 shadow-2xl shadow-brand-gold/10 hover:shadow-brand-gold/20 transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${0.5 + index * 0.2}s` }}
          >
            <div className="flex justify-center mb-4">{useCase.icon}</div>
            <h3 className="text-2xl font-display font-semibold text-brand-gold mb-3 text-center">{useCase.title}</h3>
            <p className="text-gray-400 text-center leading-relaxed">{useCase.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default UseCaseSection;