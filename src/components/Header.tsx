import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import profilePic from '/src/assets/images/profile-pic.jpeg';

const Header = () => {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <nav className="mb-8">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#about" className="text-primary hover:text-secondary transition-colors text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-primary hover:text-secondary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="text-primary hover:text-secondary transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="text-primary hover:text-secondary transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:text-secondary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-12">
          <img 
            src={profilePic}
            alt="Victor Brouwer"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary"
          />
          <div className="text-left">
            <h1 className="text-5xl font-bold text-primary mb-3">Victor Brouwer</h1>
            <p className="text-2xl text-secondary">Data Scientist & Developer</p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4">
          <a 
            href="https://github.com/VictorBrouwer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/victor-brouwer-32923621a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;