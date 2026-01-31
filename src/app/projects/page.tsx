'use client';
import { motion } from "framer-motion"; 
import ProjectCard from "@/components/Cards/ProjectCard";  
import HackCard from "@/components/Cards/HackCard";
import { useState } from 'react';
import { Terminal, Code, Trophy, Cpu } from 'lucide-react';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects', color: 'cyan', icon: <Code className="w-4 h-4" /> },
    { id: 'hackathons', label: 'Hackathons', color: 'purple', icon: <Trophy className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">
      {/* Background Effect */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
        
        <div className="relative border border-cyan-500/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono">reeti@portfolio:~$</span>
              <span className="text-white font-mono">./projects</span>
              <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider mb-3 cyber-glow">
              PROJECTS <span className="text-cyan-400">PORTFOLIO</span>
            </h1>
            <p className="text-cyan-400/70 font-mono text-sm md:text-base max-w-2xl mx-auto">
              Cybersecurity applications, AI research tools, and development projects
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-cyan-500/20 pb-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const tabColors = {
                cyan: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',
                purple: 'bg-purple-500/20 border-purple-500/40 text-purple-300',
              };
              const badgeColors = {
                cyan: 'bg-cyan-500/20 border-cyan-500/30',
                purple: 'bg-purple-500/20 border-purple-500/30',
              };

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-mono transition-all duration-300 border ${
                    isActive 
                      ? tabColors[tab.color as keyof typeof tabColors]
                      : 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80'
                  }`}
                >
                  <span className={`${isActive ? '' : 'opacity-70'}`}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span className={`text-xs px-3 py-1 rounded-full border ${
                    badgeColors[tab.color as keyof typeof badgeColors]
                  }`}>
                    {isActive ? 'ACTIVE' : 'VIEW'}
                  </span>
                </button>
              );
            })}
            
            {/* Stats Badge */}
            <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-lg bg-black/50">
              <Cpu className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-mono">
                TOTAL: <span className="text-white">8+</span>
              </span>
            </div>
          </div>

          {/* Active Content Section */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {/* Content Header */}
            <div className="flex items-center gap-3 mb-6 p-4 border border-cyan-500/20 rounded-xl bg-black/30 backdrop-blur-sm">
              <div className={`p-2 rounded-lg ${
                activeTab === 'projects' 
                  ? 'bg-cyan-500/20 border-cyan-500/30' 
                  : 'bg-purple-500/20 border-purple-500/30'
              } border`}>
                {activeTab === 'projects' ? (
                  <Terminal className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Trophy className="w-5 h-5 text-purple-400" />
                )}
              </div>
              <div>
                <h2 className={`text-lg font-bold font-mono ${
                  activeTab === 'projects' ? 'text-cyan-400' : 'text-purple-400'
                }`}>
                  {activeTab === 'projects' ? 'CYBERSECURITY PROJECTS' : 'HACKATHON PARTICIPATIONS'}
                </h2>
                <p className="text-white/70 font-mono text-sm">
                  {activeTab === 'projects' 
                    ? 'AI-driven security tools, forensic applications, and research projects' 
                    : 'CTF competitions, security challenges, and hackathon submissions'}
                </p>
              </div>
              <span className="ml-auto text-xs text-white/50 font-mono px-3 py-1 border border-white/20 rounded-full">
                {activeTab === 'projects' ? 'PROJECTS_DB' : 'HACKATHONS_DB'}
              </span>
            </div>

            {/* Content Cards */}
            <div className="border border-cyan-500/20 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
              {activeTab === 'projects' ? (
                <ProjectCard />
              ) : (
                <HackCard />
              )}
            </div>
          </motion.div>

          {/* Footer Stats */}
          <div className="mt-10 pt-8 border-t border-cyan-500/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm font-mono text-white/60">
                <span className="text-cyan-400">[PORTFOLIO_v2.1]</span> - Last updated: {new Date().toLocaleDateString()}
              </div>
              
              <div className="flex items-center gap-6 text-xs font-mono">
                <span className="text-cyan-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  PROJECTS: 6+
                </span>
                <span className="text-purple-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  HACKATHONS: 5+
                </span>
                <span className="text-green-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  STATUS: ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-cyan-400/40 rounded-tl"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-purple-400/40 rounded-tr"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-cyan-400/40 rounded-bl"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-purple-400/40 rounded-br"></div>
        </div>
      </div>

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
        
        .cyber-glow {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.5),
                      0 0 20px rgba(34, 211, 238, 0.3),
                      0 0 30px rgba(34, 211, 238, 0.1);
        }
      `}</style>
    </main>
  );
}