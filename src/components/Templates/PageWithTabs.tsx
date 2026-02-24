// components/Templates/PageWithTabs.tsx
'use client';

import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from 'react';
import { TabColor, Colors } from '@/constants/ColorScheme';
import { useRouter } from 'next/navigation';

interface TabConfig {
  id: string;
  label: string;
  color: TabColor;
  icon: ReactNode;
  description?: string;
  badge?: string;
}

interface PageWithTabsProps {
  // Required props
  pageTitle: string;
  pageCommand: string;
  pageDescription: string;
  tabs: TabConfig[];
  defaultTab: string;
  
  // Content
  children: ReactNode;
  
  // Optional props
  stats?: {
    icon: ReactNode;
    label: string;
    value: string;
    color?: 'green' | 'cyan' | 'purple' | 'blue';
  };
  footerNote?: {
    title: string;
    description: string;
  };
  
  // Styling
  backgroundGradient?: string;
  headerIcon?: ReactNode;
  
  // Callbacks
  onTabChange?: (tabId: string) => void;
}

export default function PageWithTabs({
  pageTitle,
  pageCommand,
  pageDescription,
  tabs,
  defaultTab,
  children,
  stats,
  footerNote,
  backgroundGradient = 'from-cyan-500/10 via-transparent to-purple-500/10',
  headerIcon,
  onTabChange
}: PageWithTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    
    // Optional: Update URL without page refresh
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tabId);
      router.push(url.toString(), { scroll: false });
    }
  };

  const activeTabConfig = tabs.find(tab => tab.id === activeTab);
  const activeTabColor = activeTabConfig?.color || 'cyan';

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 mx-auto pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className={`absolute -inset-4 bg-gradient-to-br ${backgroundGradient} rounded-2xl blur-2xl`}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-cyan-400 font-mono">reeti@portfolio:~$</span>
            <span className="text-white font-mono">{pageCommand}</span>
            <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm" aria-hidden="true"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono tracking-wider mb-3">
            {pageTitle}
          </h1>
          <p className="text-cyan-400/70 font-mono text-sm sm:text-base max-w-2xl mx-auto">
            {pageDescription}
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 border-b border-cyan-500/20 pb-4 sm:pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-mono transition-all duration-300 border text-sm sm:text-base
                  ${Colors.tab(tab.color, isActive)}
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900
                `}
                aria-selected={isActive}
                role="tab"
              >
                <span className={isActive ? '' : 'opacity-70'} aria-hidden="true">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span className={`text-xs px-2 sm:px-3 py-1 rounded-full border ${
                  Colors.badge(tab.color)
                }`}>
                  {isActive ? 'ACTIVE' : tab.badge || 'VIEW'}
                </span>
              </button>
            );
          })}
          
          {/* Stats Badge - Conditionally rendered */}
          {stats && (
            <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-lg bg-black/50 backdrop-blur-sm">
              {stats.icon}
              <span className={`text-xs font-mono ${stats.color ? `text-${stats.color}-400` : 'text-green-400'}`}>
                {stats.label}: <span className="text-white">{stats.value}</span>
              </span>
            </div>
          )}
        </div>

        {/* Active Content Section */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
          role="tabpanel"
        >
          {/* Content Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 p-4 border border-cyan-500/20 rounded-xl bg-black/30 backdrop-blur-sm">
            <div className={`p-2 rounded-lg border ${Colors.button(activeTabColor)} flex-shrink-0`}>
              {headerIcon || activeTabConfig?.icon}
            </div>
            <div className="flex-1">
              <h2 className={`text-lg font-bold font-mono ${
                activeTabConfig?.color ? `text-${activeTabConfig.color}-400` : 'text-cyan-400'
              }`}>
                {activeTabConfig?.label?.toUpperCase() || pageTitle}
              </h2>
              <p className="text-white/70 font-mono text-sm">
                {activeTabConfig?.description || pageDescription}
              </p>
            </div>
            <span className="ml-auto text-xs text-white/50 font-mono px-3 py-1 border border-white/20 rounded-full self-start sm:self-center">
              {activeTab.toUpperCase()}_DB
            </span>
          </div>

          {/* Content Cards */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            {children}
          </div>
        </motion.div>

        {/* Footer Note - Conditionally rendered */}
        {footerNote && (
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-cyan-400/60 font-mono text-sm">
                {footerNote.title}
              </p>
              <p className="text-white/50 text-xs font-mono mt-2">
                {footerNote.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}