import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'github', url: 'https://github.com/jenil-padshala' },
    { name: 'linkedin', url: 'https://linkedin.com/in/jenil-padshala' },
    { name: 'twitter', url: 'https://twitter.com/jenil_padshala' },
    { name: 'email', url: 'mailto:jenil_padshala@srmap.edu.in' }
  ];

  return (
    <footer className="mt-12 pt-4 border-t border-gray-700">
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-4">© {new Date().getFullYear()} jenil padshala</p>
    </footer>
  );
};

export default Footer;