import React, { useState, useCallback } from 'react';
import DesktopIcon from './components/os/DesktopIcon';
import Window from './components/os/Window';
import Taskbar from './components/os/Taskbar';
import StartMenu from './components/os/StartMenu';
import { DESKTOP_APPS } from './constants';
import { WindowState } from './types';

// Wallpaper URL (Abstract dark futuristic)
const WALLPAPER_URL = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070";

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isStartOpen, setIsStartOpen] = useState(false);

  // --- Window Management ---

  const openWindow = useCallback((appId: string) => {
    // Check if external link
    if (appId === 'source') {
      window.open('https://github.com/shubhamprajapati', '_blank');
      return;
    }

    const app = DESKTOP_APPS.find(a => a.id === appId);
    if (!app) return;

    // Check if already open
    const existingWindow = windows.find(w => w.appId === appId);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        // Restore
        setWindows(prev => prev.map(w => w.id === existingWindow.id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w));
        setNextZIndex(prev => prev + 1);
      }
      setActiveWindowId(existingWindow.id);
      return;
    }

    // Create new window
    const newWindow: WindowState = {
      id: `${appId}-${Date.now()}`,
      appId: app.id,
      title: app.title,
      icon: app.icon,
      isOpen: true,
      isMinimized: false,
      isMaximized: window.innerWidth < 768, // Auto maximize on mobile
      zIndex: nextZIndex,
      position: { x: 50 + (windows.length * 30), y: 50 + (windows.length * 30) },
      size: { width: app.width || 800, height: app.height || 600 }
    };

    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
    setActiveWindowId(newWindow.id);
    setIsStartOpen(false);
  }, [windows, nextZIndex]);

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const toggleMinimize = (id: string) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        const isNowMinimized = !w.isMinimized;
        if (!isNowMinimized) {
          setActiveWindowId(id);
          // Bring to front when restoring
          return { ...w, isMinimized: false, zIndex: nextZIndex + 1 };
        }
        if (activeWindowId === id) setActiveWindowId(null);
        return { ...w, isMinimized: true };
      }
      return w;
    }));
    if (windows.find(w => w.id === id)?.isMinimized) {
        setNextZIndex(prev => prev + 1);
    }
  };

  const toggleMaximize = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  const focusWindow = (id: string) => {
    setActiveWindowId(id);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w));
    setNextZIndex(prev => prev + 1);
  };

  return (
    <div 
      className="fixed inset-0 overflow-hidden bg-cover bg-center select-none font-sans"
      style={{ backgroundImage: `url(${WALLPAPER_URL})` }}
      onClick={() => setIsStartOpen(false)}
    >
      {/* Desktop Overlay for contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Desktop Icons Grid */}
      <div className="absolute inset-0 p-4 grid grid-cols-[repeat(auto-fill,84px)] grid-rows-[repeat(auto-fill,96px)] gap-4 content-start items-start pointer-events-none">
        {DESKTOP_APPS.map(app => (
          <div key={app.id} className="pointer-events-auto">
            <DesktopIcon 
              id={app.id}
              title={app.title} 
              icon={app.icon} 
              onDoubleClick={() => openWindow(app.id)} 
            />
          </div>
        ))}
      </div>

      {/* Windows Layer */}
      {windows.map(win => {
        const app = DESKTOP_APPS.find(a => a.id === win.appId);
        if (!app) return null;
        const Component = app.component;

        return (
          <Window
            key={win.id}
            window={win}
            onClose={closeWindow}
            onMinimize={toggleMinimize}
            onMaximize={toggleMaximize}
            onFocus={focusWindow}
          >
            <Component />
          </Window>
        );
      })}

      {/* UI Layer */}
      <StartMenu 
        isOpen={isStartOpen} 
        apps={DESKTOP_APPS} 
        onAppClick={openWindow} 
        onClose={() => setIsStartOpen(false)}
      />

      <Taskbar 
        windows={windows} 
        activeWindowId={activeWindowId} 
        onToggleMinimize={toggleMinimize}
        onStartClick={() => setIsStartOpen(!isStartOpen)}
        isStartOpen={isStartOpen}
      />
    </div>
  );
};

export default App;