import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Online Pong Game',
    description: 'This project involves the creation of a fully functional single page application website where users can play Pong with each other, in real-time. The application includes user authentication, a chat room, and a live multiplayer Pong game.',
    image: 'src/assets/images/pong-thumbnail.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Next.js', 'Tailwind'],
    githubUrl: 'https://github.com/dickklouwer/transcendence',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Webserver',
    description: 'This projects is a custom web server application implemented in C++ that\'s designed to understand and process HTTP requests and responses.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    technologies: ['C++'],
    githubUrl: 'https://github.com/VictorBrouwer/webserv',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Project 3',
    description: 'Overview of your third project. Discuss the challenges you faced and how you overcame them.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <p className="mt-4 text-xl text-orange-600 text-center mx-auto">Here are some of my recent works</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-blue-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-blue-600 hover:text-orange-500 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;