import React, { useState } from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { EnvelopeIcon, PhoneIcon, CheckCircleIcon } from './icons/FeatureIcons';

const GetAppSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }
    // Basic email validation (optional, browser usually handles it)
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }
    setError('');
    setSubmitted(true);
    // Here you would typically send the data to a backend
    console.log('Beta sign-up:', { email, phone });
    setEmail('');
    setPhone('');
  };

  return (
    <SectionWrapper id="get-app" title="Be a Pioneer. Secure Your Spot." subtitle="Join the exclusive beta program for Defenza and shape the future of mobile security.">
      <div className="max-w-lg mx-auto bg-brand-dark p-8 md:p-12 rounded-xl shadow-2xl border border-brand-gold/30 animate-fade-in-up" style={{animationDelay: '1s'}}>
        {submitted ? (
          <div className="text-center">
            <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-brand-gold mb-2">Thank You!</h3>
            <p className="text-gray-300">You're on the list! We'll notify you when beta access is available.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-brand-gold hover:underline"
            >
              Register another?
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block w-full pl-10 p-3"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number (Optional)
              </label>
              <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-brand-gold focus:border-brand-gold block w-full pl-10 p-3"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-md font-bold text-black bg-brand-gold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-gold transition duration-300 transform hover:scale-105"
              >
                Request Early Access
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              By signing up, you agree to receive updates about Defenza.
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
};

export default GetAppSection;