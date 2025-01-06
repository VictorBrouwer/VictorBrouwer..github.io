import React from 'react';

const About = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 mb-10">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-black mb-6">
          Welcome to my portfolio! I'm a passionate data scientist and developer with expertise 
          in machine learning, statistical analysis, and software development.
        </p>
        
        <h2 className="text-2xl font-bold text-primary mb-4">Skills</h2>
        <ul className="list-square list-inside text-black">
          <li className="mb-2">Data Analysis & Machine Learning</li>
          <li className="mb-2">Statistical Modeling</li>
          <li className="mb-2">Python, R, SQL</li>
          <li className="mb-2">Web Development</li>
        </ul>
      </div>
    </section>
  );
};

export default About;