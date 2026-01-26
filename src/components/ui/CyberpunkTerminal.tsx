'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output';
  content: string;
}

export function CyberpunkTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: '▓▒░ CYBER SECURITY TERMINAL v3.0 ░▒▓',
    },
    {
      type: 'output',
      content: '> System initialized. Type "help" for available commands.',
    },
  ]);

  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isGlitching, setIsGlitching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resumeData = {
    whoami: `
    ╔══════════════════════════════════════════════════════════╗
    ║                ░▒▓ REETI AGARWAL ▓▒░                     ║
    ║           [ CYBERSECURITY ARCHITECT ]                    ║
    ║           eJPT | Pentester | AI Security                 ║
    ╚══════════════════════════════════════════════════════════╝
    
    📧 Email    : Reeti05agarwal@gmail.com
    🔗 LinkedIn : linkedin.com/in/reeti-agarwal-cyber/
    💻 GitHub   : github.com/Reeti05Agarwal
    🌐 Portfolio: reeti05agarwal.github.io/Reeti-Portfolio/`,

    experience: `
    ════════════════ [ INTERNSHIPS ] ════════════════
    
    ▸ CYBER BLOCKCHAIN CLUB (Aug 2025 - Present)
      └─ Co-Head of Cyber Security Wing
         • CTF competitions & security workshops
    
    ▸ DEEPCYTES (Mar 2025 - Aug 2025)
      └─ AI Threat Research Intern
         • Dark web intelligence & digital forensics
    
    ▸ ROSCHE SYSTEM (Feb 2025 - Jun 2025)
      └─ Web Security Research
         • Vulnerability analysis & compliance`,

    projects: `
    ════════════════ [ PROJECTS ] ════════════════
    
    ▸ MAYA (Developing)
      └─ AI-driven Decoy Networks
         • Autonomous adversarial behavior analysis
    
    ▸ NEXGUARD
      └─ AI Fraud Detection System
         • Real-time analytics with LIME explainability
    
    ▸ TRACEPROBE
      └─ Law Enforcement Analytics
         • Kafka & Flink for IPDR log analysis`,

    skills: `
    ════════════════ [ SKILLS ] ════════════════
    
    ▸ SECURITY
      • VAPT | OWASP | Network Security | Digital Forensics
      • Cryptography | OSINT | SIEM | CTF
    
    ▸ TECHNICAL
      • Python | Bash | Java | C++ | React
      • Wireshark | Metasploit | Burpsuite | Nmap`,

    achievements: `
    ════════════════ [ ACHIEVEMENTS ] ════════════════
    
    ▸ COMPETITIONS
      • 🥈 2nd - Women's CTF @ IITB Trust Lab (2025)
      • 🥉 3rd - Operation Cipher Shadows @ IIT Jammu
      • 🥈 2nd - Cyber Security & Blockchain Hackathon
    
    ▸ CERTIFICATIONS
      • eJPT (INE Security)
      • Google Cybersecurity Professional
      • Cisco Cyber Security`,

    contact: `
    ════════════════ [ CONNECT ] ════════════════
    
    📧 Reeti05agarwal@gmail.com
    🔗 linkedin.com/in/reeti-agarwal-cyber/
    💻 github.com/Reeti05Agarwal
    🌐 reeti05agarwal.github.io/Reeti-Portfolio/`,

    help: `
    ════════════════ [ COMMANDS ] ════════════════
    
    whoami       - Personal information
    experience   - Work history
    projects     - Portfolio projects
    skills       - Technical skills
    achievements - Awards & certifications
    contact      - Contact details
    clear        - Clear terminal
    help         - This menu`,
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    const newLines: TerminalLine[] = [
      ...lines,
      {
        type: 'command',
        content: `$ ${cmd}`,
      },
    ];

    if (trimmedCmd === 'clear') {
      setLines([]);
    } else if (trimmedCmd in resumeData) {
      // Add glitch effect
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);

      newLines.push({
        type: 'output',
        content: resumeData[trimmedCmd as keyof typeof resumeData],
      });
      setLines(newLines);
    } else if (trimmedCmd === '') {
      setLines(newLines);
    } else {
      newLines.push({
        type: 'output',
        content: `command not found: ${cmd}. Type "help" for commands.`,
      });
      setLines(newLines);
    }

    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input;
      if (cmd.trim()) {
        setHistory([...history, cmd]);
      }
      executeCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      if (newIndex < history.length) {
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  // Add random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-purple-900/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/3 via-transparent to-purple-500/3"></div>
      
      {/* Scan Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_50%,_rgba(0,255,255,0.02)_50%)] bg-[length:100%_4px] animate-scan"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_98%,_rgba(255,0,110,0.03)_1%)]"></div>
      
      {/* Matrix Code Rain (Subtle) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {Math.random().toString(36).substring(2, 4)}
          </div>
        ))}
      </div>

      {/* Terminal Container */}
      <div
        ref={containerRef}
        className={`relative z-10 w-full h-full overflow-y-auto p-6 transition-all duration-200 ${
          isGlitching ? 'glitch-effect' : ''
        }`}
        style={{
          background: 'rgba(0, 10, 15, 0.85)',
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* Terminal Header */}
        <div className="mb-6 border-b border-cyan-500/30 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-cyan-300 font-mono text-sm">
              reeti@cybersec:~$
            </span>
            <span className="ml-auto text-xs text-cyan-500/60 font-mono">
              [SYSTEM ACTIVE]
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* Terminal Content */}
        <div className="font-mono text-sm space-y-3">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`whitespace-pre-wrap break-words leading-relaxed ${
                line.type === 'command'
                  ? 'text-cyan-300'
                  : 'text-green-300/90'
              }`}
            >
              {line.content}
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center gap-2 mt-4 group">
            <div className="flex items-center gap-2">
              <span className="text-cyan-300">┌─[</span>
              <span className="text-green-400">reeti@sec</span>
              <span className="text-cyan-300">]-[</span>
              <span className="text-purple-300">~</span>
              <span className="text-cyan-300">]</span>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none px-2 text-green-300 relative z-10"
                placeholder="Type command..."
                autoFocus
                spellCheck="false"
              />
            </div>
            <div className="flex items-center">
              <span className="text-cyan-300">└─$</span>
              <span
                className={`ml-1 w-[6px] h-4 bg-cyan-400 ${
                  lines.length > 0 ? 'animate-pulse' : ''
                }`}
              ></span>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 pt-4 border-t border-cyan-500/20">
          <div className="flex flex-wrap gap-4 text-xs text-cyan-400/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>SSH: CONNECTED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>AES-256 ENCRYPTED</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>HTB: PRO HACKER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-500/50"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-500/50"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-500/50"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-500/50"></div>

      {/* Outer Glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-xl blur-xl -z-10"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 4px;
          }
        }
        
        @keyframes matrix {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        .animate-scan {
          animation: scan 0.5s linear infinite;
        }
        
        .animate-matrix {
          animation: matrix linear infinite;
        }
        
        .glitch-effect {
          animation: glitch 0.1s linear;
        }
        
        @keyframes glitch {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          50% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-1px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default CyberpunkTerminal;