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
        <Header />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;