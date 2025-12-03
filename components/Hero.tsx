import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-4xl space-y-8 animate-fade-in-up">
        <p className="text-secondary text-lg md:text-xl font-medium tracking-wide">
          Hello, I'm {PERSONAL_INFO.name}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-[1.1]">
          {PERSONAL_INFO.title.split(' & ').map((part, i) => (
            <span key={i} className="block">
              {part} {i === 0 && <span className="text-secondary text-4xl md:text-6xl align-middle">&</span>}
            </span>
          ))}
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>
        
        <div className="pt-8">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-primary font-medium hover:text-accent hover:border-accent transition-colors duration-300"
          >
            View My Work <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 hidden md:block">
        <div className="flex flex-col items-center gap-4 text-secondary text-sm font-medium tracking-widest writing-vertical-rl">
          <span>SCROLL</span>
          <div className="h-16 w-[1px] bg-secondary/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;