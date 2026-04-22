import React from 'react';
import { FileDown, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

const ReportExportPanel = () => {
  return (
    // 1. Container: Uses a slide-up animation and a success-colored border
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 my-6 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* 2. Left Side: Content Summary */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <CheckCircle2 size={28} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-emerald-50 text-sans">Report Successfully Generated</h3>
          <p className="text-sm text-slate-400">Technical audit and requirements extraction completed.</p>
        </div>
      </div>

      {/* 3. Right Side: Download Buttons Group */}
      <div className="flex gap-3 w-full md:w-auto">
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm font-medium transition-all active:scale-95">
          <FileDown size={18} className="text-blue-400" />
          Download .DOCX
        </button>
        
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-sm font-medium transition-all active:scale-95">
          <FileSpreadsheet size={18} className="text-emerald-400" />
          Export .XLSX
        </button>
      </div>
      
    </div>
  );
};

export default ReportExportPanel;