import React from 'react';
import SectionTitle from './SectionTitle';

const Education: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>education</SectionTitle>
      <ul className="list-disc list-inside space-y-2 ml-2 text-gray-300">
        <li>
          <span className="text-gray-400">[2021 - 2025]</span> B.Tech in Computer Science - 
          <span className="text-purple-400"> SRM University, AP</span>
        </li>
        <li>
          <span className="text-gray-400">[2020 - 2021]</span> AISSCE - 
          <span className="text-purple-400"> Atmiya Vidya Mandir</span>
        </li>
        <li>
          <span className="text-gray-400">[2018 - 2019]</span> AISSE - 
          <span className="text-purple-400"> Atmiya Vidya Mandir</span>
        </li>
      </ul>
    </section>
  );
};

export default Education;