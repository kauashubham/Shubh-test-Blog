import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
          Have an idea?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="pt-8">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="inline-block text-3xl md:text-5xl font-bold hover:text-accent transition-colors border-b-2 border-slate-700 hover:border-accent pb-2"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-16">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a 
                key={link.platform} 
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={link.platform}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
        
        <footer className="pt-24 text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;