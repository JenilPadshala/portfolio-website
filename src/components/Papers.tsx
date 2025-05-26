import React from 'react';
import SectionTitle from './SectionTitle';

const Papers: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>papers</SectionTitle>
      <div className="ml-2 space-y-4 text-gray-300">
        <div>
          <p className="text-gray-400">[P1][Survey][BTech Project]</p>
          <a 
            href="#" 
            className="text-purple-400 hover:underline transition-colors duration-200"
          >
            A Comprehensive Survey of Data Poisoning Attacks and their Detection Techniques
          </a>
        </div>
        
        <div>
          <p className="text-gray-400">[P2][Workshop][Hopefully Conference]</p>
          <a 
            href="#" 
            className="text-purple-400 hover:underline transition-colors duration-200"
          >
            to be updated soon
          </a>
        </div>
      </div>
    </section>
  );
};

export default Papers;