import AgentCard from "./components/AgentCard"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 p- text-white">
      {/* Header section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Tender Analysis</h1>
        <p className="text-slate-400 mt-2">Overseeing the Tender AI Agent System</p>
      </header>

      {/* This is the magic wrapper that puts them in a row */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AgentCard 
          agentName="Compliance Officer" 
          role="legolnad" 
          status="completed" 
        />
        <AgentCard 
          agentName="pp trainer" 
          role="extract" 
          status="progress" 
        />
        <AgentCard 
          agentName="tech miner" 
          role="hello" 
          status="completed" 
        />
      </div> */}
    </div>
  )
}

export default App