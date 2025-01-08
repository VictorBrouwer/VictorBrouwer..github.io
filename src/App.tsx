import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen py-10 font-courier bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <Header />
        </div>
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <About />
        </div>
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <Projects />
        </div>
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <Education />
        </div>
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <Experience />
        </div>
        <div className="border-2 border-orange-400 rounded-lg p-4 mb-6">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;