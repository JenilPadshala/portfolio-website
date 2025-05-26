import React from 'react';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>projects</SectionTitle>
      <div className="ml-2 space-y-4">
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="https://github.com/jenil-padshala" 
              className="text-purple-400 hover:underline transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              serious projects
            </a>
            <span className="text-gray-400 ml-2">: all my important projects</span>
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
            <li>ECG Time-Series Analysis with LSTM Networks</li>
            <li>NLP-based Sentiment Analysis for Social Media</li>
            <li>Anomaly Detection in Network Traffic</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="https://github.com/jenil-padshala" 
              className="text-purple-400 hover:underline transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              fun projects
            </a>
            <span className="text-gray-400 ml-2">: all my fun projects</span>
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400 ml-2">
            <li>Terminal-style Portfolio Website</li>
            <li>Discord Bot for Learning Resources</li>
            <li>Automated GATE Preparation Quiz</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;