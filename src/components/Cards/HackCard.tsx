'use client';

import { motion } from "framer-motion";  
import { hackData, HackData } from "@/constants/HackData";   
import CalenderIcon from "@/components/Icons/calender"
import ReadMoreButton from "@/components/Buttons/ReadMoreButton"
import { Trophy, Users, Target, Code, Cpu, Shield, Lock, Zap, GitBranch, Terminal } from "lucide-react";

export default function HackCard() {

  // Icon mapping for different project types
  const getProjectIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('cyber') || titleLower.includes('security') || titleLower.includes('hack')) {
      return <Shield className="w-4 h-4" />;
    } else if (titleLower.includes('ai') || titleLower.includes('machine') || titleLower.includes('learning')) {
      return <Cpu className="w-4 h-4" />;
    } else if (titleLower.includes('web') || titleLower.includes('app') || titleLower.includes('frontend')) {
      return <Code className="w-4 h-4" />;
    } else if (titleLower.includes('network') || titleLower.includes('system') || titleLower.includes('infra')) {
      return <GitBranch className="w-4 h-4" />;
    } else if (titleLower.includes('crypto') || titleLower.includes('encrypt') || titleLower.includes('blockchain')) {
      return <Lock className="w-4 h-4" />;
    } else if (titleLower.includes('ctf') || titleLower.includes('capture') || titleLower.includes('flag')) {
      return <Terminal className="w-4 h-4" />;
    } else {
      return <Zap className="w-4 h-4" />; // Default icon
    }
  };

  const getColorScheme = (index: number) => {
    const schemes = [
      { // Blue scheme
        primary: 'border-blue-500/30 hover:border-blue-400/50',
        glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
        accent: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
        icon: 'text-blue-400',
        badge: 'from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-300'
      },
      { // Purple scheme
        primary: 'border-purple-500/30 hover:border-purple-400/50',
        glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
        accent: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
        icon: 'text-purple-400',
        badge: 'from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-300'
      },
      { // Pink scheme
        primary: 'border-pink-500/30 hover:border-pink-400/50',
        glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
        accent: 'bg-pink-500/20 border-pink-500/30 text-pink-300',
        icon: 'text-pink-400',
        badge: 'from-pink-500/20 to-pink-500/10 border-pink-500/30 text-pink-300'
      },
      { // Green scheme
        primary: 'border-green-500/30 hover:border-green-400/50',
        glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
        accent: 'bg-green-500/20 border-green-500/30 text-green-300',
        icon: 'text-green-400',
        badge: 'from-green-500/20 to-green-500/10 border-green-500/30 text-green-300'
      },
      { // Cyan scheme
        primary: 'border-cyan-500/30 hover:border-cyan-400/50',
        glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
        accent: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
        icon: 'text-cyan-400',
        badge: 'from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-300'
      }
    ];
    return schemes[index % schemes.length];
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hackData.map((card, idx) => {
        const colors = getColorScheme(idx);
        const hasDescription = card.description && card.description.trim() !== '';
        
        return (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-gray-900/80 border border-cyan-500/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-magenta-400/50 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-magenta-400/50 rounded-br"></div>
            
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colors.accent} backdrop-blur-sm`}>
                  <Trophy className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div>
                  <span className="text-xs text-white/60 font-mono">HACK_{String(idx + 1).padStart(3, '0')}</span>
                  <h2 className="text-lg font-bold text-white transition-colors duration-300 font-mono">
                    {card.title}
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Position badge */}
            <div className="mb-4">
              <div className={`inline-flex items-center gap-2 text-[14px] px-4 py-2 bg-gradient-to-r ${colors.badge} rounded-full backdrop-blur-sm border font-mono`}>
                <Target className="w-4 h-4" />
                <span className="font-bold">{card.position}</span>
              </div>
            </div>

            {/* Organizer & Date */}
            <div className={`${hasDescription ? 'mb-1' : 'mb-4'}`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                {/* Organizer - Left side */}
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0 mt-0.5`}>
                    <Users className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-white/60 font-mono block">ORGANIZER</span>
                    <p className="text-sm text-white/90 break-words">{card.organised}</p>
                  </div>
                </div>
                
                {/* Date - Right side */}
                <div className="flex items-center gap-2 sm:justify-end flex-shrink-0">
                  <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0`}>
                    <CalenderIcon className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/60 font-mono block">DATE</span>
                    <p className="text-sm text-white/90">{card.date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Icon Section - Only show if description exists */}
            {hasDescription && (
              <div className="mt-2 mb-2 p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${colors.accent}`}>
                    {getProjectIcon(card.title)}
                  </div>
                  <div>
                    <span className="text-xs text-white/60 font-mono block">PROJECT</span>
                    <p className="text-sm text-white/90 font-medium">{card.description}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Links */}
            <div className="mt-auto pt-3 border-t border-cyan-500/20">
              <a 
                href={card.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <ReadMoreButton className={`w-full h-11 ${colors.primary} ${colors.glow}`}>
                  View Details
                </ReadMoreButton>
              </a> 
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}