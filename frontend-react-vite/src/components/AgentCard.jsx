import React from 'react'; // used to bring the react library into react 

// these are icon imports from the lucide react library 
import {Bot, CheckCircle, Loader2, AlertCircle} from 'lucide-react';

// this creates a variable that stores components,
// the name, role and status are props ( data passed into components)
const AgentCard = ({ agentname, role, status}) => {
    const isWorking = status == 'processing';
    const isDone = status === 'completed';

    return (
        <div className='bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500/50 transition-all'>
            <div className='flex items-start justify-between mb-4'>
                <div className='p-2 bg-blue-600/10 rounded-lg text-blue-40'>
                    {/* If agent is working, show a spinning loader. Otherwise, a Bot Bot icon */}
                    {isWorking ? <Loader2 className="animate-spin" /> : <Bot size={20}/>}
                </div>

                {/* simple status badge */}
                <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md ${
                    isDone ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'
                }`}>
                    {status}
                </span>
                <div/>

                <div>
                    <h3 className='font-bold text-white text-lg'>{agentname}</h3>
                    <p className='text-slate-400 text-sm'>{role}</p>
                </div>

                {/* a visula progress bar that pulses when active */}
                <div className="mt-6 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    {isWorking && (
                        <div className="bg-blue-600 h-full w-1/2 animate-infinite-scroll" 
                            style={{ width: '60%' }}></div>
                    )}
                    {isDone && <div className="bg-emerald-500 h-full w-full"></div>}
                </div>
            </div>
        </div>
    );
};

export default AgentCard;