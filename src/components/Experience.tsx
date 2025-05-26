import React from 'react';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>experience</SectionTitle>
      <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
        <li>
          <span className="text-gray-400">[jun 24' - jul 24']</span> Research Intern @ 
          <span className="text-purple-400"> Carnegie Mellon University</span>
          <ul className="list-disc list-inside ml-6 text-gray-400 text-sm mt-1">
            <li>Used LSTM RNNs for ECG time-series analysis</li>
            <li>Completed graduate-level Multi-Modal ML coursework</li>
            <li>Presented technical findings weekly</li>
          </ul>
        </li>
        <li>
          <span className="text-gray-400">[sep 22' - nov 22']</span> Student Leader @ 
          <span className="text-purple-400"> IR Council, SRM AP</span>
          <ul className="list-disc list-inside ml-6 text-gray-400 text-sm mt-1">
            <li>Coordinated student outreach for IR & HS office</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Experience;