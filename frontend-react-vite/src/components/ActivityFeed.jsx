import React, { useState, useEffect, useRef } from "react";

const ActivityFeed = () => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      time: "10:00:00",
      message: "reading the document",
      agent: "Data Architect",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior:"smooth" });
 }, [logs]);

return (
    <div className="bg-black/40 border-t border-slate-800 h-64 flex flex-col font-mono text-xs">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-b border-slate-800">
        <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
          Live Activity Feed
        </span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
        </div>
      </div>

      {/* Log Entries Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3">
            <span className="text-slate-600">[{log.time}]</span>
            <span className="text-blue-400 font-bold">[{log.agent}]</span>
            <span className="text-slate-300">{log.message}</span>
          </div>
        ))}
        {/* This empty div is what the auto-scroll targets */}
        <div ref={scrollRef} />
      </div>
    </div>
  );
};

export default ActivityFeed;
