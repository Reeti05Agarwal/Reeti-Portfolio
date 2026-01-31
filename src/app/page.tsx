'use client'; 
import TryhackmeBadge from "@/components/Buttons/TryHackMeBadge";  
import StatsSection from '@/components/StatsSection';  
import ContactCard from "@/components/Cards/ContactCard";    
import CyberpunkTerminal from "@/components/ui/CyberpunkTerminal";  
import HeroLeftContent from '@/components/ui/HeroLeftContent';
import HeroProfilePicture from '@/components/ui/ProfilePicture';
import TechStackSection from "@/components/TechStackSection";
import ResearchCard from "@/components/Cards/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import HackTheBoxBadge from "@/components/Buttons/HackTheBoxBadge";
import AchCertCard from "@/components/Cards/AchCertCard";
import CtfCard from "@/components/Cards/CtfCard";
import HackCard from "@/components/Cards/HackCard";
import { useState } from 'react';

export default function Home() {
  const [activeAchievementTab, setActiveAchievementTab] = useState('ctf');

  return (
    <>
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20 relative">  
        
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="relative border border-cyan-500/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:shadow-[0_0_60px_rgba(34,211,238,0.15)] transition-all duration-500 overflow-hidden">
            {/* Scan Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_4s_linear_infinite]"></div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <HeroLeftContent />
                <HeroProfilePicture />
              </div>
            </div>
            
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-cyan-400/40 rounded-tl"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-magenta-400/40 rounded-tr"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-cyan-400/40 rounded-bl"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-magenta-400/40 rounded-br"></div>
          </div>
        </section>

        {/* Interactive Terminal Section */}
        <section className="my-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-b border-cyan-500/20 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">reeti@cybersec:~$ portfolio_terminal</span>
                </div>
                <span className="text-xs text-cyan-400/60 font-mono">[INTERACTIVE]</span>
              </div>
              <div className="h-[400px]">
                <CyberpunkTerminal />
              </div>
            </div>
          </div>
        </section>

        {/* Platform Badges & Stats */}
        <section className="my-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 rounded-full bg-black/50 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono">CTF_PLATFORMS</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-mono tracking-wider cyber-glow">
              COMPETITIVE PLATFORMS
            </h2>
            <p className="text-cyan-400/70 font-mono text-sm mt-2">
              Active profiles across security platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* TryHackMe Badge */}
            <div className="lg:col-span-2">
              <TryhackmeBadge />
            </div>
            
            {/* HackTheBox Badge */}
            <div>
              <HackTheBoxBadge />
            </div>
            
            {/* Stats Section */}
            <div className="md:col-span-2 lg:col-span-3">
              <StatsSection />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="my-16">
          <TechStackSection />
        </section>

        {/* Achievements Section */}
        <section className="my-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              {/* Section Header */}
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 rounded-full bg-black/50 mb-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 font-mono">ACHIEVEMENTS_DB</span>
                </div>
                <h2 className="text-2xl font-bold text-white font-mono tracking-wider">
                  <span className="text-purple-400">ACHIEVEMENTS</span> & <span className="text-pink-400">CERTIFICATIONS</span>
                </h2>
                <p className="text-purple-400/70 font-mono text-sm mt-2">
                  CTF Wins, Hackathons, Research & Certifications
                </p>
              </div>

              {/* Achievement Tabs */}
              <div className="flex flex-wrap gap-3 mb-8 border-b border-purple-500/20 pb-6">
                {[
                  { id: 'ctf', label: 'CTF Wins', color: 'cyan', icon: '🏆' },
                  { id: 'hackathons', label: 'Hackathons', color: 'purple', icon: '⚔️' },
                  { id: 'certifications', label: 'Certifications', color: 'green', icon: '📜' },
                  { id: 'research', label: 'Research', color: 'pink', icon: '🔬' },
                ].map((tab) => {
                  const isActive = activeAchievementTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveAchievementTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-lg font-mono transition-all duration-300 border ${
                        isActive
                          ? `bg-${tab.color}-500/20 border-${tab.color}-500/40 text-${tab.color}-300`
                          : 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80'
                      }`}
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

              {/* Active Achievement Content */}
              <div className="border border-purple-500/20 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                {activeAchievementTab === 'ctf' && <CtfCard />}
                {activeAchievementTab === 'hackathons' && <HackCard />}
                {activeAchievementTab === 'certifications' && <AchCertCard />}
                {activeAchievementTab === 'research' && <ResearchCard />}
              </div>

              {/* Achievement Footer */}
              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <div className="flex flex-wrap gap-4 justify-center text-xs font-mono">
                  <span className="text-cyan-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    CTF_WINS: 3+
                  </span>
                  <span className="text-purple-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    HACKATHONS: 5+
                  </span>
                  <span className="text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    CERTIFICATIONS: 8+
                  </span>
                  <span className="text-pink-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    RESEARCH: 1+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="my-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="border border-cyan-500/20 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              {/* Contact Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-mono">reeti@cybersec:~$</span>
                  <span className="text-white font-mono">./connect</span>
                  <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
                </div>
                <h2 className="text-2xl font-bold text-white font-mono tracking-wider cyber-glow">
                  CONNECT WITH ME
                </h2>
                <p className="text-cyan-400/70 font-mono text-sm mt-2">
                  Let's discuss cybersecurity, AI research, or potential collaborations
                </p>
              </div>

              {/* Contact Content */}
              <div className="max-w-4xl mx-auto">
                <ContactCard />
              </div>

              {/* Contact Footer */}
              <div className="mt-10 pt-8 border-t border-cyan-500/20">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
                  <div className="text-white/60">
                    [SYSTEM: CONNECTIONS_OPEN]
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      RESPONSE_TIME: 
                    </span>
                    <span className="text-cyan-400">|</span>
                    <span className="text-cyan-400/70">
                      Last online: Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Styles */}
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
    </>
  );
}