import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { WindowState } from '../../types';

interface WindowProps {
  window: WindowState;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ 
  window, 
  onClose, 
  onMinimize, 
  onMaximize, 
  onFocus,
  children 
}) => {
  const [position, setPosition] = useState(window.position);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  // Sync position if window prop changes (e.g. externally reset)
  useEffect(() => {
    if (!isDragging && !window.isMaximized) {
      setPosition(window.position);
    }
  }, [window.position, window.isMaximized, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.isMaximized) return;
    
    // Only drag from title bar
    if ((e.target as HTMLElement).closest('.window-controls')) return;

    setIsDragging(true);
    onFocus(window.id);
    
    // Calculate offset
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!window.isOpen || window.isMinimized) return null;

  const style = window.isMaximized
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 48px)', transform: 'none' }
    : { top: position.y, left: position.x, width: window.size.width, height: window.size.height };

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col bg-slate-900/95 backdrop-blur-md border border-slate-700/50 shadow-2xl rounded-lg overflow-hidden transition-shadow duration-200 ${window.isMaximized ? 'rounded-none border-0' : ''}`}
      style={{
        ...style,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => onFocus(window.id)}
    >
      {/* Title Bar */}
      <div 
        className="h-9 bg-slate-800/90 border-b border-white/5 flex items-center justify-between px-3 select-none cursor-default"
        onDoubleClick={() => onMaximize(window.id)}
      >
        <div 
          className="flex items-center gap-2 flex-1 h-full cursor-move" // Make only this area draggable
          onMouseDown={handleMouseDown}
        >
          <window.icon size={14} className="text-blue-400" />
          <span className="text-xs font-medium text-slate-200">{window.title}</span>
        </div>
        
        <div className="flex items-center gap-1 window-controls">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(window.id); }}
            className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors"
          >
            <Minus size={12} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onMaximize(window.id); }}
            className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors"
          >
            {window.isMaximized ? <Maximize2 size={12} /> : <Square size={12} />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(window.id); }}
            className="p-1.5 hover:bg-red-500 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto custom-scrollbar relative">
        {children}
      </div>
    </div>
  );
};

export default Window;