import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload, X, FileText } from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(320); // Default width in px
  const [isResizing, setIsResizing] = useState(false);

  // Handle Mouse Move for resizing
  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const resize = useCallback((e) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth > 200 && newWidth < 600) { // Set min/max limits
        setWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="relative flex h-screen">
      {/* SIDEBAR MAIN BODY */}
      <aside 
        style={{ width: isCollapsed ? '0px' : `${width}px` }}
        className={`bg-slate-900/40 border-r border-slate-800 transition-[width] duration-300 ease-in-out relative flex flex-col overflow-hidden`}
      >
        <div className={`flex flex-col h-full p-6 transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Header & Quick View */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Source Document</h2>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="text-red-500 flex-shrink-0" size={20} />
                <p className="text-sm font-semibold truncate">tender_v2.pdf</p>
              </div>
              {/* CANCEL BUTTON */}
              <button className="text-slate-500 hover:text-red-400 p-1 rounded-md hover:bg-red-400/10 transition-colors">
                <X size={16} />
              </button>
            </div>
          </section>

          <section className="flex-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Quick View</h2>
            <div className="w-full aspect-[3/4] bg-slate-950 border border-slate-800 rounded-xl border-dashed flex items-center justify-center">
               <span className="text-xs text-slate-600">PDF Preview Area</span>
            </div>
          </section>

          {/* BOTTOM ACTIONS: UPLOAD NEW */}
          <div className="mt-auto pt-6 border-t border-slate-800">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/10 active:scale-[0.98]">
              <Upload size={18} />
              Upload New Tender
            </button>
          </div>
        </div>
      </aside>

      {/* DRAG HANDLE (Only visible when not collapsed) */}
      {!isCollapsed && (
        <div 
          onMouseDown={startResizing}
          className="absolute right-0 top-0 w-1 h-full cursor-col-resize hover:bg-blue-500/50 transition-colors z-50"
        />
      )}

      {/* COLLAPSE TOGGLE BUTTON */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-10 w-8 h-8 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all z-[60]"
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </div>
  );
};

export default Sidebar;