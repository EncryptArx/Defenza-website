import React, { useState }  from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ChevronDownIcon, ChevronUpIcon } from './icons/FeatureIcons';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-gold/20">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left hover:bg-brand-dark/50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-brand-gold">{question}</h3>
        {isOpen ? <ChevronUpIcon className="w-6 h-6 text-brand-gold" /> : <ChevronDownIcon className="w-6 h-6 text-gray-400" />}
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 pt-2 pr-6 text-gray-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};


const faqs = [
  {
    question: 'What makes Defenza truly different?',
    answer: "Defenza is more than just an app; it's an AI-powered digital safety companion. It blends real-time protection with educational guidance, all within an intuitive, chat-based interface. Its core is proactive, predictive defense tailored for everyday users.",
  },
  {
    question: 'When can I expect the full version to be available?',
    answer: "We are working diligently towards a full public launch. Beta participants will be the first to know and receive upgrade paths. Stay tuned for exciting announcements!",
  },
  {
    question: 'How does the AI work without draining my battery?',
    answer: 'Our AI is engineered for peak efficiency, providing maximum protection with minimal impact on device performance and battery life. The specifics are part of our unique innovation.',
  },
  {
    question: 'What kind of data does Defenza access?',
    answer: 'We are committed to transparency and user privacy. Defenza is designed to protect your data, not exploit it. A detailed breakdown will be in our full Privacy Policy.',
  },
];

const SupportFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" title="Curiosities & Clarifications" subtitle="Anticipating your questions. More comprehensive support channels will be available soon.">
      <div className="max-w-3xl mx-auto">
         <div className="bg-brand-dark p-6 md:p-8 rounded-xl shadow-xl border border-brand-gold/20">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
        </div>
        <div className="mt-10 text-center">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-brand-gold mx-auto mb-4"/>
            <p className="text-gray-400 mb-6">Have more questions? Our dedicated support team will be ready at launch. <br/> Beta users will have priority support channels.</p>
            <p className="text-brand-gold/90 font-semibold italic text-md md:text-lg max-w-2xl mx-auto">
              "By combining education, prevention, and real-time response, Defenza aspires to become the trusted digital safety companion that every non-technical user can rely on—keeping the internet fearless and accessible for all."
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SupportFAQSection;