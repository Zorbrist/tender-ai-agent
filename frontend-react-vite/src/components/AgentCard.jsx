import React, { useState, useEffect } from 'react';
import { Bot, Loader2 } from "lucide-react";

const AgentCard = ({ agentName, role, status }) => {
  const [progress, setProgress] = useState(status === 'completed' ? 100 : 0);

  // Derive boolean states from the 'status' prop
  const isWorking = status === 'progress';
  const isDone = status === 'completed';

  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + Math.floor(Math.random() * 5) + 1;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [status, isWorking]); // Added isWorking to dependencies

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all flex flex-col gap-4">
      
      {/* TOP ROW: icon + status */}
      <div className="flex items-center justify-between">
        <div className="p-2 bg-blue-600/10 rounded-lg text-blue-400">
          {/* If working, show a spinning loader. If done, show the robot bot */}
          {isWorking ? <Loader2 className="animate-spin" size={20} /> : <Bot size={20} />}
        </div>

        <span
          className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
            isDone
              ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              : "bg-blue-500/10 text-blue-500 animate-pulse border border-blue-500/20"
          }`}
        >
          {status}
        </span>
      </div>

      {/* MIDDLE: text */}
      <div>
        <h3 className="font-bold text-white text-lg">{agentName}</h3>
        <p className="text-slate-400 text-sm mt-1">{role}</p>
      </div>

      {/* BOTTOM: progress bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        {isWorking && (
          <div
            className="bg-blue-500 h-full rounded-full transition-all duration-700 ease-out"
            // Use the dynamic progress state here!
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)'
            }}
          />
        )}

        {isDone && (
          <div
            className="bg-emerald-500 h-full w-full rounded-full transition-all duration-700"
            style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)' }}
          />
        )}
      </div>
    </div>
  );
};

export default AgentCard;