import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Papers from './components/Papers';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Header />
        <main>
          <Introduction />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Projects />
          <Papers />
          <Blogs />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;