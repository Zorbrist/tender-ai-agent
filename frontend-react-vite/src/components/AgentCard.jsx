import React from "react"; // used to bring the react library into react

// these are icon imports from the lucide react library
import { Bot, CheckCircle, Loader2, AlertCircle } from "lucide-react";

// this creates a variable that stores components,
// the name, role and status are props ( data passed into components)
const AgentCard = ({ agentname, role, status }) => {
    // Matches screenshot: "PROGRESS" vs "COMPLETED"
    const isWorking = status.toLowerCase() === 'progress' || status.toLowerCase() === 'processing';
    const isDone = status.toLowerCase() === 'completed';

    return (
        <div className='bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-all w-full max-w-sm'>
            {/* Top Row: Icon and Status Badge */}
            <div className='flex items-center justify-between mb-4'>
                <div className='p-2 bg-blue-600/10 rounded-lg text-blue-400'>
                    {isWorking ? <Loader2 size={20} className="animate-spin" /> : <Bot size={20}/>}
                </div>

                <span className={`text-[10px] uppercase tracking-widest font-extrabold px-2 py-1 rounded-md ${
                    isDone ? 'bg-emerald-500/20 text-emerald-500' : 'bg-slate-800 text-slate-400'
                }`}>
                    {status}
                </span>
            </div>

            {/* Middle Section: Text and Progress Bar */}
            <div className='flex items-start gap-4'>
                <div className='flex-1'>
                    <p className='text-slate-300 text-sm leading-relaxed'>
                        <span className='font-bold text-white block mb-1'>{agentname}</span>
                        {role}
                    </p>
                </div>

                {/* Progress Bar - Aligned to the right of text to match screenshot */}
                <div className="mt-2 w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden shrink-0">
                    {isWorking && (
                        <div className="bg-blue-600 h-full animate-pulse" style={{ width: '40%' }}></div>
                    )}
                    {isDone && <div className="bg-emerald-500 h-full w-full"></div>}
                </div>
            </div>
        </div>
    );
};

export default AgentCard;
