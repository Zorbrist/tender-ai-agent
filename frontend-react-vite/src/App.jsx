import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import AgentCard from "./components/AgentCard";
import Button from "./components/Button";
import ActivityFeed from "./components/ActivityFeed";
import ReportExportPanel from "./components/ReportExportPanel";

function App() {
  
const [isReportReady, setIsReportReady] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white font-sans">
      {/* 1. Call the Sidebar component here */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Tender Analysis
          </h1>
          <p className="text-slate-400 mt-2">
            Overseeing the Tender AI Agent System
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <AgentCard
            agentName="Data Architect"
            role="Cleans the PDF noise and structures it into JSON"
            status="completed"
          />
          <AgentCard
            agentName="Technical Auditor"
            role="Scans specifically for crane models and requirements"
            status="progress"
          />
          <AgentCard
            agentName="Synthesis Engine"
            role="Writes the final human-readable executive report"
            status="completed"
          />
        </div>
<div className="relative flex items-center justify-center my-10">
  <div className="absolute w-full h-[1px] bg-slate-800"></div>

  {/* Step 1: BEFORE ready → show generate button */}
  {!isReportReady && (
    <div className="relative px-4 bg-slate-950">
      <Button 
        label="Generate Summary Report" 
        onClick={() => setIsReportReady(true)} 
      />
    </div>
  )}
</div>
{isReportReady && <ReportExportPanel />}
        <div className="mt-8">
          <ActivityFeed />
        </div>
      </main>
    </div>
  );
}

export default App;
