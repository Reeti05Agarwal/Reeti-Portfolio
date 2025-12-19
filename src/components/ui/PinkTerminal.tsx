'use client';

import React from 'react';

interface PinkTerminalProps {
  userName?: string;
  prompt?: string;
  commands?: Array<{
    command: string;
    output: React.ReactNode;
    delay?: number;
  }>;
  tags?: Array<{
    text: string;
    color: 'cyan' | 'pink' | 'yellow' | 'green' | 'purple' | 'blue';
  }>;
  gridColor?: string;
  borderColor?: string;
  accentColor?: string;
  showCornerAccents?: boolean;
  animatedGrid?: boolean;
}

const PinkTerminal: React.FC<PinkTerminalProps> = ({
  userName = "Reeti Agarwal",
  prompt = "reeti@portfolio:~$",
  commands = [
    {
      command: "whoami",
      output: (
        <div className="ml-4">
          <div className="text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-300 transition-all duration-300">
            {userName}
          </div>
        </div>
      )
    },
    {
      command: "cat About_Reeti.txt",
      output: (
        <div className="ml-4 p-4 rounded-lg border border-pink-400/20 bg-pink-400/5 backdrop-blur-sm hover:border-pink-400/30 hover:bg-pink-400/10 transition-all duration-300">
          <p className="text-gray-200 leading-7">
            Aspiring cybersecurity professional with a strong foundation in computer science. 
            I have hands-on experience through internships and projects in cybersecurity, digital forensics, data science, and Python programming.
          </p>
        </div>
      )
    }
  ],
  tags = [
    { text: "Aspiring Cybersecurity Professional", color: "cyan" },
    { text: "CTF Player", color: "pink" },
    { text: "TryHackMe", color: "yellow" },
    { text: "eJPT", color: "green" }
  ],
  gridColor = "rgba(255, 20, 147, 0.3)",
  borderColor = "pink-300",
  accentColor = "pink-400",
  showCornerAccents = true,
  animatedGrid = true
}) => {
  
  const tagColors = {
    cyan: "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/50",
    pink: "border-pink-400/30 bg-pink-400/10 hover:bg-pink-400/20 hover:border-pink-400/50",
    yellow: "border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 hover:border-yellow-400/50",
    green: "border-green-400/30 bg-green-400/10 hover:bg-green-400/20 hover:border-green-400/50",
    purple: "border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/20 hover:border-purple-400/50",
    blue: "border-blue-400/30 bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/50"
  };

  return (
    <div className={`relative bg-black/50 p-6 sm:p-8 rounded-2xl border border-${borderColor}/40 shadow-lg shadow-pink-500/10 backdrop-blur-md group hover:shadow-pink-500/20 transition-shadow duration-300`}>
      
      {/* Cyberpunk Corner Accents */}
      {showCornerAccents && (
        <>
          <div className={`absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-${accentColor} opacity-60`}></div>
          <div className={`absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-${accentColor} opacity-60`}></div>
          <div className={`absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-${accentColor} opacity-60`}></div>
          <div className={`absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-${accentColor} opacity-60`}></div>
        </>
      )}
      
      {/* Animated Grid Background */}
      {animatedGrid && (
        <div className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
             style={{
               backgroundImage: `
                 linear-gradient(${gridColor} 1px, transparent 1px),
                 linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
               `,
               backgroundSize: '20px 20px'
             }} />
      )}
  
      {/* Terminal Content */}
      <div className="text-pink-300 font-mono space-y-6 text-base leading-relaxed relative z-10">
        
        {commands.map((cmd, index) => (
          <div key={index} className="space-y-4">
            {/* Command */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 group/command">
              <span className="text-cyan-300 font-bold text-lg whitespace-nowrap terminal-prompt-glow">
                {prompt}
              </span>
              <span className="text-white font-bold text-lg command-glow">
                {cmd.command}
              </span> 
            </div>

            {/* Output */}
            {cmd.output}
            
            {/* Tags after first command */}
            {index === 0 && tags.length > 0 && (
              <div className="ml-4 flex flex-wrap gap-3 text-sm">
                {tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-200 ${tagColors[tag.color]}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default PinkTerminal;