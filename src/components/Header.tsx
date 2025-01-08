import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full max-w-3xl mx-auto px-4 py-10">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center gap-8">
          {/* Profile Picture */}
          <img 
            src="/src/assets/images/profile-pic.jpeg"
            alt="Victor Brouwer"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />
          
          <div className="text-left">
            <h1 className="text-4xl font-bold text-primary mb-2">Victor Brouwer</h1>
            <p className="text-xl text-secondary">Data Scientist & Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#about" className="text-primary hover:text-secondary transition-colors">
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