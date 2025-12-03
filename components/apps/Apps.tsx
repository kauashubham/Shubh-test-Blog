import React from 'react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, SOCIAL_LINKS } from '../../constants';
import { ExternalLink, Github, Mail, MapPin, Calendar, Briefcase, ChevronRight, Folder } from 'lucide-react';

// --- ABOUT APP ---
export const AboutApp: React.FC = () => {
  return (
    <div className="text-slate-300 p-2 md:p-6 space-y-8 max-w-4xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-slate-800 rounded-xl overflow-hidden border-4 border-slate-700 shadow-xl">
           <img 
             src={`https://ui-avatars.com/api/?name=${PERSONAL_INFO.name.replace(' ', '+')}&background=0f172a&color=3b82f6&size=200`} 
             alt="Profile" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
          <p className="text-xl text-blue-400 font-light">{PERSONAL_INFO.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><MapPin size={14} /> {PERSONAL_INFO.location}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {PERSONAL_INFO.email}</span>
          </div>
          <p className="leading-relaxed text-slate-300 border-l-4 border-blue-500/30 pl-4">
            {PERSONAL_INFO.about}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-lg p-5 border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Briefcase size={18} className="text-blue-400" /> Experience
          </h3>
          <div className="space-y-6">
            {EXPERIENCE.map(exp => (
              <div key={exp.id} className="relative pl-6 border-l border-slate-700">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-slate-800"></div>
                <div className="font-medium text-white">{exp.role}</div>
                <div className="text-sm text-blue-400">{exp.company}</div>
                <div className="text-xs text-slate-500 mb-1">{exp.period}</div>
                <p className="text-sm text-slate-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-5 border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Folder size={18} className="text-yellow-400" /> Skills
          </h3>
          <div className="space-y-6">
            {SKILLS.map(cat => (
              <div key={cat.name}>
                <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">{cat.name}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-700/50 rounded text-xs text-slate-200 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PROJECTS APP ---
export const ProjectsApp: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(project => (
          <div key={project.id} className="group bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-blue-500/30 rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full">
            <div className="h-40 overflow-hidden relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.category}
                </span>
              </div>
              
              <p className="text-sm text-slate-400 mb-4 flex-1">{project.description}</p>
              
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                 <div className="flex gap-3">
                   {project.github && (
                     <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Source Code">
                       <Github size={18} />
                     </a>
                   )}
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                       <ExternalLink size={18} />
                     </a>
                   )}
                 </div>
                 <div className="flex -space-x-2">
                   {project.tech.slice(0, 3).map((t, i) => (
                     <div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-slate-800 flex items-center justify-center text-[8px] text-slate-300" title={t}>
                       {t.charAt(0)}
                     </div>
                   ))}
                   {project.tech.length > 3 && (
                     <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[8px] text-slate-400">
                       +{project.tech.length - 3}
                     </div>
                   )}
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- CONTACT APP ---
export const ContactApp: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-900 to-slate-800">
       <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
         <Mail size={40} className="text-blue-400" />
       </div>
       
       <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
       <p className="text-slate-400 max-w-md mb-8">
         I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
       </p>

       <a 
         href={`mailto:${PERSONAL_INFO.email}`}
         className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/20 mb-12 hover:scale-105 active:scale-95"
       >
         Say Hello
       </a>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
         {SOCIAL_LINKS.map(link => (
           <a 
             key={link.platform}
             href={link.url}
             target="_blank"
             rel="noreferrer"
             className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
           >
             <link.icon size={24} className="text-slate-400 group-hover:text-white transition-colors" />
             <span className="text-sm text-slate-400 group-hover:text-white">{link.platform}</span>
           </a>
         ))}
       </div>
    </div>
  );
};