'use client';

import React, { useState } from 'react';
import CyberpunkTerminal from './ChatBotTerminal';
import { X, Terminal } from 'lucide-react';

export default function CyberChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Main Button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-black via-gray-900 to-black border-2 border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 overflow-hidden">
            {/* Scan line effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_2s_linear_infinite]"></div>
            
            {/* Binary particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-cyan-400/30 text-xs animate-float"
                  style={{
                    left: `${20 + i * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
            
            {/* Icon */}
            {isOpen ? (
              <X className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 relative z-10" />
            ) : (
              <Terminal className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 relative z-10" />
            )}
            
            {/* Status indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-10 right-0 bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-1 text-xs text-cyan-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {isOpen ? 'Close Terminal' : 'AI Assistant'}
          </div>
        </div>
      </button>

      {/* Terminal Popup */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-12' : 'w-[90vw] max-w-3xl h-[70vh] max-h-[600px]'
        }`}>
          {/* Terminal Header */}
          <div className={`bg-gradient-to-r from-gray-900/95 to-gray-800/95 border border-cyan-500/30 rounded-t-xl backdrop-blur-xl flex items-center justify-between p-3 ${
            isMinimized ? 'rounded-b-xl' : ''
          }`}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500"></div>
                <div 
                  className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-500"
                  onClick={() => setIsMinimized(!isMinimized)}
                ></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer hover:bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-mono text-sm">reeti_assistant@cybersec</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-cyan-400/70 font-mono hidden sm:block">
                [AI: ONLINE]
              </span>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-cyan-400/70 hover:text-cyan-300 transition-colors"
              >
                {isMinimized ? '⬆' : '⬇'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-cyan-400/70 hover:text-cyan-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Terminal Content (only show when not minimized) */}
          {!isMinimized && (
            <div className="border border-cyan-500/20 border-t-0 rounded-b-xl overflow-hidden bg-black/95 backdrop-blur-xl shadow-2xl h-[calc(100%-3rem)]">
              <CyberpunkTerminal />
            </div>
          )}
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}