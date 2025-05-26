import React from 'react';
import SectionTitle from './SectionTitle';

const Certifications: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>certifications</SectionTitle>
      <ul className="list-disc list-inside space-y-1 ml-2 text-gray-300">
        <li>Supervised Machine Learning: Regression and Classification</li>
        <li>Learn SQL Course</li>
        <li>NLP in Python</li>
        <li>Unsupervised Learning, Recommenders, Reinforcement Learning</li>
        <li>Advanced Learning Algorithms</li>
      </ul>
    </section>
  );
};

export default Certifications;