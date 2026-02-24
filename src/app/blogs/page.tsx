'use client';
import { motion } from "framer-motion";   
import BlogCard from "@/components/Cards/BlogCard";
import { useState, useEffect } from 'react';
import { Terminal, FileText, BookOpen, PenTool } from 'lucide-react';

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
          <p className="text-cyan-400/70 font-mono text-sm md:text-base mx-auto">
            Cybersecurity insights, technical deep-dives, and research publications
          </p>
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
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {/* Content Header */}
          <div className="flex items-center gap-3 mb-6 p-4 border border-cyan-500/20 rounded-xl bg-black/30 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
              <BookOpen className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-cyan-400 font-mono">
                TECHNICAL PUBLICATIONS
              </h2>
              <p className="text-white/70 font-mono text-sm">
                Research papers, cybersecurity analysis, and technology insights
              </p>
            </div>
            <span className="ml-auto text-xs text-white/50 font-mono px-3 py-1 border border-white/20 rounded-full">
              BLOGS_DB
            </span>
          </div>

          {/* Blog Cards */}
          <div className="bg-black/30 backdrop-blur-sm">
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