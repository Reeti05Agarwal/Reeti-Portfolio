'use client'; // Add this if not already present

import { useState } from 'react';

import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid"; 

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('cyber');
  
  const tabs = [
    { id: 'cyber', label: 'Cyber Skills', color: 'cyan', icon: '🛡️' },
    { id: 'lang', label: 'Languages', color: 'purple', icon: '💻' },
    { id: 'tools', label: 'Security Tools', color: 'green', icon: '⚙️' },
  ];

  const getActiveTabData = () => {
    return tabs.find(tab => tab.id === activeTab);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'cyber':
        return <SkillStackGrid />;
      case 'lang':
        return <TechStackGrid />;
      case 'tools':
        return <ToolStackGrid />;
      default:
        return <SkillStackGrid />;
    }
  };

  const activeTabData = getActiveTabData();

  return (
    <section className="relative mb-20">
      {/* Background Effects */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl blur-2xl -z-10"></div>
      
      {/* Main Container */}
      <div className="relative border border-cyan-500/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border border-cyan-500/30 rounded-full bg-black/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">reeti@cybersec:~$ tech_arsenal</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-mono tracking-wider mb-2 cyber-glow">
            TECH STACK TERMINAL
          </h2>
          <p className="text-cyan-400/70 font-mono text-sm">
            Select a category to view technical capabilities
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-cyan-500/20 pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const colorClass = isActive 
              ? `bg-${tab.color}-500/20 border-${tab.color}-500/40 text-${tab.color}-300`
              : 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80';
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-mono transition-all duration-300 border ${colorClass}`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full bg-${tab.color}-500/20 border border-${tab.color}-500/30`}>
                  {isActive ? 'ACTIVE' : 'VIEW'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Panel */}
        <div className="border border-cyan-500/20 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
          {/* Active tab header */}
          {activeTabData && (
            <div className="mb-4 flex items-center gap-3">
              <div className={`w-3 h-3 bg-${activeTabData.color}-500 rounded-full animate-pulse`}></div>
              <span className={`text-${activeTabData.color}-400 font-mono`}>
                {activeTabData.id === 'cyber' && 'CYBER SECURITY DOMAINS'}
                {activeTabData.id === 'lang' && 'PROGRAMMING LANGUAGES'}
                {activeTabData.id === 'tools' && 'SECURITY TOOLS & FRAMEWORKS'}
              </span>
              <span className="ml-auto text-xs text-cyan-400/50 font-mono">[SELECTED]</span>
            </div>
          )}
          
          {/* Active content */}
          {getTabContent()}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-cyan-500/20">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-white/50">[TECH_STACK_v2.5]</span>
            <span className="text-cyan-400/70">Last updated: {new Date().toLocaleDateString()}</span>
            <span className="text-green-400/70 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              DATABASE_SYNCED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
 