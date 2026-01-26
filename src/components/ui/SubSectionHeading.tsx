'use client';

import { Terminal, Folder, Command } from 'lucide-react';

interface SubSectionHeadingProps {
  directory: string;
  command: string;
  description?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'blue' | 'green' | 'orange';
}

const SectionHeading: React.FC<SubSectionHeadingProps> = ({
  directory,
  command,
  description,
  glowColor = 'cyan'
}) => {
  // Glow color configurations
  const glowConfigs = {
    cyan: {
      border: 'border-cyan-500/30 hover:border-cyan-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]',
      text: 'text-cyan-400',
      accent: 'bg-cyan-500/20',
      icon: 'text-cyan-400',
      scan: 'via-cyan-400'
    },
    pink: {
      border: 'border-pink-500/30 hover:border-pink-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]',
      text: 'text-pink-400',
      accent: 'bg-pink-500/20',
      icon: 'text-pink-400',
      scan: 'via-pink-400'
    },
    purple: {
      border: 'border-purple-500/30 hover:border-purple-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
      text: 'text-purple-400',
      accent: 'bg-purple-500/20',
      icon: 'text-purple-400',
      scan: 'via-purple-400'
    },
    blue: {
      border: 'border-blue-500/30 hover:border-blue-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      text: 'text-blue-400',
      accent: 'bg-blue-500/20',
      icon: 'text-blue-400',
      scan: 'via-blue-400'
    },
    green: {
      border: 'border-green-500/30 hover:border-green-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
      text: 'text-green-400',
      accent: 'bg-green-500/20',
      icon: 'text-green-400',
      scan: 'via-green-400'
    },
    orange: {
      border: 'border-orange-500/30 hover:border-orange-400/50',
      glow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]',
      text: 'text-orange-400',
      accent: 'bg-orange-500/20',
      icon: 'text-orange-400',
      scan: 'via-orange-400'
    }
  };

  const config = glowConfigs[glowColor];

  return (
    <div className="mb-8 group">
      {/* Main Container */}
      <div className={`relative p-4 rounded-xl bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 backdrop-blur-sm border ${config.border} ${config.glow} transition-all duration-300`}>
        
        {/* Corner Decorations */}
        <div className={`absolute top-2 left-2 w-3 h-3 border-l border-t ${config.border.replace('border-', 'border-l- border-t-')} rounded-tl`}></div>
        <div className={`absolute top-2 right-2 w-3 h-3 border-r border-t ${config.border.replace('border-', 'border-r- border-t-')} rounded-tr`}></div>
        <div className={`absolute bottom-2 left-2 w-3 h-3 border-l border-b ${config.border.replace('border-', 'border-l- border-b-')} rounded-bl`}></div>
        <div className={`absolute bottom-2 right-2 w-3 h-3 border-r border-b ${config.border.replace('border-', 'border-r- border-b-')} rounded-br`}></div>
        
        {/* Scan Line Effect */}
        <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${config.scan} to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite]`}></div>
        
        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
          {/* Left Side - Directory */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.accent} backdrop-blur-sm`}>
              <Folder className={`w-5 h-5 ${config.icon}`} />
            </div>
            <div>
              <span className="text-xs text-white/60 font-mono block">DIRECTORY</span>
              <span className={`text-lg font-bold font-mono ${config.text}`}>
                {directory}
              </span>
            </div>
          </div>
          
          {/* Middle Separator */}
          <div className="hidden sm:block h-6 w-px bg-white/20 mx-2"></div>
          
          {/* Right Side - Command */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.accent} backdrop-blur-sm`}>
              <Command className={`w-5 h-5 ${config.icon}`} />
            </div>
            <div>
              <span className="text-xs text-white/60 font-mono block">COMMAND</span>
              <div className="flex items-center gap-2">
                <span className="text-white/90 font-mono text-lg">$</span>
                <span className="text-white font-mono text-lg">{command}</span>
                <div className={`w-[6px] h-4 ${config.text} animate-pulse ml-1 rounded-sm`}></div>
              </div>
            </div>
          </div>
          
           
        </div>

         
      </div>

      {/* Description */}
      {description && (
        <div className="mt-4 pl-4 border-l-2 border-cyan-500/30">
          <div className="flex items-start gap-3">
            <Terminal className="w-4 h-4 text-cyan-400/60 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs text-white/60 font-mono block">DESCRIPTION</span>
              <p className="text-white/70 text-sm font-mono mt-1 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;