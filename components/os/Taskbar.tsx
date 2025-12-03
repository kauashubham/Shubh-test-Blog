import React, { useState, useEffect } from 'react';
import { Menu, Wifi, Volume2, Battery, Calendar } from 'lucide-react';
import { WindowState, DesktopApp } from '../../types';

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onToggleMinimize: (id: string) => void;
  onStartClick: () => void;
  isStartOpen: boolean;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  windows, 
  activeWindowId, 
  onToggleMinimize, 
  onStartClick,
  isStartOpen
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-2 z-[9999]">
      <div className="flex items-center gap-1 h-full">
        {/* Start Button */}
        <button 
          onClick={onStartClick}
          className={`h-9 w-9 flex items-center justify-center rounded transition-all duration-200 ${isStartOpen ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5 text-slate-300 hover:text-blue-400'}`}
        >
          <div className="grid grid-cols-2 gap-0.5 p-1">
            <div className="w-1.5 h-1.5 bg-current rounded-[1px]"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-[1px]"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-[1px]"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-[1px]"></div>
          </div>
        </button>

        <div className="h-6 w-[1px] bg-white/10 mx-1"></div>

        {/* Running Tasks */}
        <div className="flex items-center gap-1 h-full overflow-x-auto no-scrollbar">
          {windows.filter(w => w.isOpen).map((win) => (
            <button
              key={win.id}
              onClick={() => onToggleMinimize(win.id)}
              className={`
                group flex items-center gap-2 px-3 py-1.5 rounded-md min-w-[120px] max-w-[200px] h-9 border
                transition-all duration-200 text-sm font-normal
                ${activeWindowId === win.id && !win.isMinimized
                  ? 'bg-white/10 border-white/10 text-white shadow-sm' 
                  : 'bg-transparent border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'}
              `}
            >
              <win.icon size={16} className={activeWindowId === win.id ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-300'} />
              <span className="truncate flex-1 text-left">{win.title}</span>
              {activeWindowId === win.id && !win.isMinimized && (
                <div className="w-1 h-1 rounded-full bg-blue-400"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-4 px-2 text-slate-400 text-xs font-medium">
        <div className="hidden md:flex items-center gap-3">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Battery size={14} />
        </div>
        <div className="text-right">
          <div className="text-slate-200">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="text-[10px] text-slate-500">{time.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;