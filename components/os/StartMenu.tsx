import React from 'react';
import { Power, Search, User } from 'lucide-react';
import { DesktopApp } from '../../types';
import { PERSONAL_INFO } from '../../constants';

interface StartMenuProps {
  isOpen: boolean;
  apps: DesktopApp[];
  onAppClick: (appId: string) => void;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, apps, onAppClick, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-14 left-2 w-80 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-[9999] animate-in slide-in-from-bottom-5 duration-200">
      {/* Search Bar */}
      <div className="p-4 border-b border-white/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input 
            type="text" 
            placeholder="Type here to search" 
            className="w-full bg-slate-800/50 border border-white/5 rounded-md py-2 pl-9 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      {/* App Grid */}
      <div className="p-4">
        <h3 className="text-xs font-semibold text-slate-500 mb-3 px-2">Pinned</h3>
        <div className="grid grid-cols-4 gap-4">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                onAppClick(app.id);
                onClose();
              }}
              className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-md transition-colors group"
            >
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <app.icon size={20} />
              </div>
              <span className="text-[10px] text-slate-300 font-medium text-center truncate w-full">
                {app.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-950/50 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            {PERSONAL_INFO.name.charAt(0)}
          </div>
          <div className="text-xs">
            <div className="text-white font-medium">{PERSONAL_INFO.name}</div>
            <div className="text-slate-500">Administrator</div>
          </div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors">
          <Power size={18} />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;