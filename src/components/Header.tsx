import React from 'react';
import { Terminal } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center mb-8">
      <Terminal className="mr-2 text-purple-400" size={24} />
      <h1 className="text-2xl font-bold">
        <span className="text-gray-300">hi, i am </span>
        <a 
          href="https://linkedin.com/in/jenil-padshala" 
          className="text-purple-400 hover:underline transition-colors duration-200"
          target="_blank" 
          rel="noopener noreferrer"
        >
          jenil
        </a>
        <span className="text-gray-300">!</span>
        <span className="inline-block w-2 h-5 ml-1 bg-purple-400 animate-pulse"></span>
      </h1>
    </header>
  );
};

export default Header;