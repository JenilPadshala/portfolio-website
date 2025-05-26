import React from 'react';
import SectionTitle from './SectionTitle';

const Blogs: React.FC = () => {
  return (
    <section className="mb-8">
      <SectionTitle>blogs</SectionTitle>
      <div className="ml-2 space-y-4">
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="#" 
              className="text-purple-400 hover:underline transition-colors duration-200"
            >
              technical blogs
            </a>
            <span className="text-gray-400 ml-2">: all my blogs about machine learning</span>
          </h3>
        </div>
        
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="#" 
              className="text-purple-400 hover:underline transition-colors duration-200"
            >
              guides
            </a>
            <span className="text-gray-400 ml-2">: all my blogs on experiences</span>
          </h3>
        </div>
        
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="#" 
              className="text-purple-400 hover:underline transition-colors duration-200"
            >
              my youtube channel
            </a>
            <span className="text-gray-400 ml-2">: i teach everything related to GATE DA</span>
          </h3>
        </div>
        
        <div>
          <h3 className="text-gray-300 mb-2">
            <a 
              href="https://twitter.com/jenil_padshala" 
              className="text-purple-400 hover:underline transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              twitter threads
            </a>
            <span className="text-gray-400 ml-2">: some knowledgeable threads i wrote</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Blogs;