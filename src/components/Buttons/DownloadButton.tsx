"use client";

import React, { useEffect, useState } from "react";

export default function DownloadButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // only set to true on the client
  }, []);

  const handleDownload = () => {
    if (typeof window !== "undefined") {
      window.open("/resume.pdf", "_blank");
    }
  };

  if (!isClient) return null; // don't render until mounted on client

  return (
    <div className="flex justify-center">
      <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-cyan-300/30 rounded-xl p-4 shadow-lg hover:border-cyan-300/50 hover:shadow-cyan-400/20 transition-all duration-300 w-full max-w-xs">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <div className="text-cyan-300 font-mono text-sm mb-1">Resume</div>
            
          </div>
          
          {/* PDF Icon */}
          <div className="relative">
            <div className="w-16 h-20 bg-gradient-to-b from-red-500/20 to-red-600/30 border border-red-400/30 rounded-lg flex items-center justify-center">
              <div className="text-red-400 font-bold text-2xl">PDF</div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          
          {/* Download Button */}
          
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-300/40 text-cyan-300 font-mono text-sm rounded-lg hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-300/60 hover:text-cyan-200 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-cyan-400/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Open My Resume
            </button>
        
        </div>
      </div>
    </div>
  );
}