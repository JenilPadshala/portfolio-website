import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-xl font-bold text-purple-400 mb-4">
      {children}
    </h2>
  );
};

export default SectionTitle;