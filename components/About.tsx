import React from 'react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Bio Side */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span> About Me
            </h2>
            <div className="prose prose-lg text-secondary leading-relaxed">
              <p>{PERSONAL_INFO.about}</p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-6">Experience</h3>
              <div className="space-y-8 border-l-2 border-slate-200 pl-8 relative">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="relative">
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300"></span>
                    <h4 className="text-lg font-bold text-primary">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-400 mb-2">{exp.period}</p>
                    <p className="text-secondary text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Side */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-primary"></span> Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS.map((category) => (
                <div key={category.name} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-slate-100 text-secondary text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary text-white p-8 rounded-lg">
               <h3 className="text-xl font-bold mb-4">Let's work together</h3>
               <p className="text-slate-300 mb-6">
                 Interested in my work or want to discuss a potential project?
               </p>
               <a href="#contact" className="inline-block bg-white text-primary px-6 py-3 font-semibold rounded hover:bg-slate-100 transition-colors">
                 Get in touch
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;