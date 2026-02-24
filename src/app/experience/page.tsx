'use client';

import { useState, useEffect, lazy, Suspense } from "react";
import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import { Terminal, Briefcase, Code, Award } from "lucide-react";
// ✅ Lazy load heavy components
const ExperienceCard = dynamic(
  () => import("@/components/Cards/ExperienceCard"),
  { 
    loading: () => <div className="text-center py-10 text-white/50">Loading experience...</div>,
    ssr: false 
  }
) as unknown as ComponentType<{ activeCategory: string }>;

const SectionHeading = dynamic(
  () => import("@/components/ui/SectionHeading"),
  { ssr: false }
);

// ✅ Lazy load framer motion (important optimization)
const MotionDiv = dynamic(
  () => import("framer-motion").then(mod => mod.motion.div),
  { ssr: false }
);

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', color: 'cyan', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'work', label: 'Work', color: 'purple', icon: <Terminal className="w-4 h-4" /> },
    { id: 'organisations', label: 'Organisations', color: 'green', icon: <Code className="w-4 h-4" /> },
    // { id: 'voluntering', label: 'Voluntering', color: 'blue', icon: <Award className="w-4 h-4" /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-20">

      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 font-mono">reeti@portfolio:~$</span>
          <span className="text-white font-mono">./experience</span>
          <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider">
          EXPERIENCE
        </h1>
      </MotionDiv>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 border-b border-cyan-500/20 pb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          const tabColors = {
            cyan: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',
            purple: 'bg-purple-500/20 border-purple-500/40 text-purple-300',
            green: 'bg-green-500/20 border-green-500/40 text-green-300',
            blue: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
          };

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-lg font-mono transition-all duration-300 border ${
                isActive
                  ? tabColors[tab.color as keyof typeof tabColors]
                  : 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Experience Content */}
      <MotionDiv
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-black/30 backdrop-blur-sm min-h-[400px] rounded-xl p-6"
      >
        <Suspense fallback={<div className="text-white/50">Loading...</div>}>
          <ExperienceCard activeCategory={activeTab} />
        </Suspense>
      </MotionDiv>

      {/* Scan Animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

    </main>
  );
}