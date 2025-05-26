import React from 'react';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>skills</SectionTitle>
      <div className="ml-2">
        <h3 className="text-gray-400 mb-2 font-semibold">top areas:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
          <li>Natural Language Processing (NLP)</li>
          <li>Clustering</li>
          <li>Anomaly Detection</li>
          <li>Machine Learning</li>
          <li>Time Series Analysis</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;