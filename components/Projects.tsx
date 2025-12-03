import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Selected Works</h2>
          <p className="text-secondary text-lg">A collection of projects I've built and contributed to.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-default">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-slate-100 mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   {project.link && (
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors"
                       title="View Live"
                     >
                       <ExternalLink size={20} />
                     </a>
                   )}
                   {project.github && (
                     <a 
                       href={project.github}
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors"
                       title="View Code"
                     >
                       <Github size={20} />
                     </a>
                   )}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <p className="text-secondary mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-medium">
                {project.tech.map((t, i) => (
                  <span key={i}>#{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-lg hover:underline underline-offset-4 decoration-2 decoration-accent">
            View More on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;