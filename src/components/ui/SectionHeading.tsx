'use client';

import { Terminal, FolderOpen, ChevronRight, Zap } from 'lucide-react';

interface SectionHeadingProps {
  directory: string;
  command: string;
  description?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'blue' | 'green' | 'orange';
  withIcons?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  directory,
  command,
  description,
  glowColor = 'cyan',
  withIcons = true
}) => {
  // Enhanced glow color configurations
  const glowConfigs = {
    cyan: {
      primary: 'border-cyan-500/40 hover:border-cyan-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]',
      text: 'text-cyan-400',
      accent: 'bg-cyan-500/20',
      icon: 'text-cyan-400',
      scan: 'via-cyan-400',
      pulse: 'bg-cyan-400'
    },
    pink: {
      primary: 'border-pink-500/40 hover:border-pink-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]',
      text: 'text-pink-400',
      accent: 'bg-pink-500/20',
      icon: 'text-pink-400',
      scan: 'via-pink-400',
      pulse: 'bg-pink-400'
    },
    purple: {
      primary: 'border-purple-500/40 hover:border-purple-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]',
      text: 'text-purple-400',
      accent: 'bg-purple-500/20',
      icon: 'text-purple-400',
      scan: 'via-purple-400',
      pulse: 'bg-purple-400'
    },
    blue: {
      primary: 'border-blue-500/40 hover:border-blue-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]',
      text: 'text-blue-400',
      accent: 'bg-blue-500/20',
      icon: 'text-blue-400',
      scan: 'via-blue-400',
      pulse: 'bg-blue-400'
    },
    green: {
      primary: 'border-green-500/40 hover:border-green-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]',
      text: 'text-green-400',
      accent: 'bg-green-500/20',
      icon: 'text-green-400',
      scan: 'via-green-400',
      pulse: 'bg-green-400'
    },
    orange: {
      primary: 'border-orange-500/40 hover:border-orange-400/60',
      glow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]',
      text: 'text-orange-400',
      accent: 'bg-orange-500/20',
      icon: 'text-orange-400',
      scan: 'via-orange-400',
      pulse: 'bg-orange-400'
    }
  };

  const config = glowConfigs[glowColor];

  return (
    <div className="mb-8 group flex ">
      {/* Main Heading Container */}
      <div className={`relative inline-flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/40 to-black/70 backdrop-blur-lg border ${config.primary} ${config.glow} transition-all duration-500`}>
        
        {/* Corner Decorations */}
        <div className={`absolute top-3 left-3 w-3 h-3 border-l border-t ${config.primary.replace('border-', 'border-l- border-t-')} rounded-tl`}></div>
        <div className={`absolute top-3 right-3 w-3 h-3 border-r border-t ${config.primary.replace('border-', 'border-r- border-t-')} rounded-tr`}></div>
        <div className={`absolute bottom-3 left-3 w-3 h-3 border-l border-b ${config.primary.replace('border-', 'border-l- border-b-')} rounded-bl`}></div>
        <div className={`absolute bottom-3 right-3 w-3 h-3 border-r border-b ${config.primary.replace('border-', 'border-r- border-b-')} rounded-br`}></div>
        
        {/* Scan Line Effect */}
        <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${config.scan} to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2.5s_linear_infinite]`}></div>
        
        {/* Directory with Icon */}
        {withIcons && (
          <div className={`p-2.5 rounded-lg ${config.accent} backdrop-blur-sm`}>
            <FolderOpen className={`w-5 h-5 ${config.icon}`} />
          </div>
        )}
        
        <div className="flex items-center gap-3">
          {/* Directory Text */}
          <div className="flex flex-col">
            <span className="text-xs text-white/50 font-mono tracking-wider">PATH</span>
            <span className={`text-xl font-bold font-mono ${config.text} tracking-tight`}>
              {directory}
            </span>
          </div>
          
          {/* Separator Arrow */}
          <ChevronRight className="w-5 h-5 text-white/30" />
          
          {/* Command */}
          <div className="flex flex-col">
            <span className="text-xs text-white/50 font-mono tracking-wider">COMMAND</span>
            <div className="flex items-center gap-2">
              <span className="text-white/90 font-mono text-xl">$</span>
              <span className="text-white font-bold font-mono text-xl tracking-tight">
                {command}
              </span>
            </div>
          </div>
        </div>
        
        {/* Pulsing Cursor */}
        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
          <div className={`w-3 h-6 ${config.pulse} animate-pulse rounded-sm`}></div>
          <Zap className={`w-4 h-4 ${config.icon} animate-pulse`} />
        </div>
        
      </div>

      {/* Description */}
      {description && (
        <div className="mt-4 pl-2">
          <div className="inline-flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs text-white/60 font-mono tracking-wider block">DESCRIPTION</span>
              <p className="text-white/70 text-sm font-mono mt-1 max-w-2xl">
                {'//'} {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;