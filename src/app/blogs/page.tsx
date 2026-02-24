'use client';
import { motion } from "framer-motion";   
import dynamic from "next/dynamic";

const BlogCard = dynamic(
  () => import("@/components/Cards/BlogCard"),
  {
    loading: () => (
      <div className="relative h-[500px] overflow-hidden bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 font-mono">

        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse pointer-events-none" />

        {/* Terminal Boot Log */}
        <div className="relative z-10 space-y-3 text-sm">
          <p className="text-cyan-400 animate-pulse">
            reeti@portfolio:~$ ./load_blogs
          </p>

          <p className="text-green-400/80 animate-[fadeIn_0.5s_ease-in-out]">
            ▸ Indexing articles...
          </p>

          <p className="text-green-400/70 animate-[fadeIn_1s_ease-in-out]">
            ▸ Parsing markdown files...
          </p>

          <p className="text-green-400/60 animate-[fadeIn_1.5s_ease-in-out]">
            ▸ Building category cache...
          </p>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-cyan-400">initializing</span>
            <span className="w-2 h-5 bg-cyan-400 animate-pulse"></span>
          </div>
        </div>

        {/* Blog Skeleton Cards */}
        <div className="absolute bottom-6 left-6 right-6 grid md:grid-cols-2 gap-6 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-32 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
            />
          ))}
        </div>
      </div>
    ),
    ssr: false,
  }
);

import { useState, useEffect } from 'react';
import { Terminal, FileText, BookOpen, PenTool } from 'lucide-react';

// Cast BlogCard to any so we can pass props that aren't yet typed on the component.
// This avoids the TSX error while leaving a clear place to add proper typing in the BlogCard component later. 

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Posts', color: 'cyan', icon: <FileText className="w-4 h-4" /> },
    { id: 'cyber', label: 'Cybersecurity', color: 'purple', icon: <Terminal className="w-4 h-4" /> },
    { id: 'tech', label: 'Technology', color: 'green', icon: <PenTool className="w-4 h-4" /> },
    { id: 'research', label: 'Research', color: 'blue', icon: <BookOpen className="w-4 h-4" /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-20">
      
      
      <div className="relative">
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
            <span className="text-white font-mono">./blogs</span>
            <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider mb-3">
            TECH BLOGS 
          </h1>
          {/* <p className="text-cyan-400/70 font-mono text-sm md:text-base mx-auto">
            Cybersecurity insights, technical deep-dives, and research publications
          </p> */}
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-cyan-500/20 pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const tabColors = {
              cyan: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',
              purple: 'bg-purple-500/20 border-purple-500/40 text-purple-300',
              green: 'bg-green-500/20 border-green-500/40 text-green-300',
              blue: 'bg-blue-500/20 border-blue-500/40 text-blue-300',
            };
            const badgeColors = {
              cyan: 'bg-cyan-500/20 border-cyan-500/30',
              purple: 'bg-purple-500/20 border-purple-500/30',
              green: 'bg-green-500/20 border-green-500/30',
              blue: 'bg-blue-500/20 border-blue-500/30',
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
                <span className={`${isActive ? '' : 'opacity-70'}`}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full border ${
                  badgeColors[tab.color as keyof typeof badgeColors]
                }`}>
                  {isActive ? 'ACTIVE' : 'VIEW'}
                </span>
              </button>
            );
          })}
          
          {/* Stats Badge */}
          <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-lg bg-black/50">
            <FileText className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400 font-mono">
              ARTICLES: <span className="text-white">10+</span>
            </span>
          </div>
        </div>

        {/* Active Content Section */}
        <motion.div
          layout
          // key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8 min-h-[500px]"
        >
     
          {/* Blog Cards */}
          {/* <div className="bg-black/30 backdrop-blur-sm">
            <BlogCard activeCategory={activeTab} />
          </div> */}
          <div className="bg-black/30 backdrop-blur-sm min-h-[400px] transition-all duration-300">
  <BlogCard activeCategory={activeTab} />
</div>
        </motion.div>

        
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
      `}</style>
    </main>
  );
}