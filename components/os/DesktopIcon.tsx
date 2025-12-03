import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: LucideIcon;
  onDoubleClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ title, icon: Icon, onDoubleClick }) => {
  return (
    <button 
      className="group flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 focus:bg-white/20 focus:outline-none w-[84px] transition-colors"
      onDoubleClick={onDoubleClick}
      onClick={(e) => e.currentTarget.focus()} // Allow single click focus
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg group-hover:scale-105 transition-transform">
        <Icon size={24} className="text-white drop-shadow-md" />
      </div>
      <span className="text-xs text-white font-medium text-center leading-tight drop-shadow-md px-1 py-0.5 rounded bg-black/0 group-focus:bg-blue-600/80 line-clamp-2">
        {title}
      </span>
    </button>
  );
};

export default DesktopIcon;