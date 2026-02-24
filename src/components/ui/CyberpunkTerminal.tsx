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
      content: 'CYBER SECURITY TERMINAL',
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
  <div className="w-full h-full relative bg-[#0b1116] text-green-300 font-mono">
    
    {/* Subtle Glow Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

    {/* Terminal Body */}
    <div
      ref={containerRef}
      className={`relative z-10 h-full overflow-y-auto px-6 py-6 space-y-3 transition-all duration-200 ${
        isGlitching ? 'translate-x-[1px]' : ''
      }`}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className={`whitespace-pre-wrap leading-relaxed text-sm ${
            line.type === 'command'
              ? 'text-cyan-400'
              : 'text-green-300/90'
          }`}
        >
          {line.content}
        </div>
      ))}

      {/* Input */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-cyan-400">reeti@cybersec:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-green-300 caret-cyan-400"
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>

    {/* Bottom Status Bar */}
    <div className="absolute bottom-0 left-0 right-0 border-t border-cyan-500/10 bg-[#0e151b] px-6 py-2 flex justify-between text-xs text-cyan-400/60">
      <span>SSH CONNECTED</span>
      <span>AES-256 ENCRYPTED</span>
      <span>HTB PROFILE ACTIVE</span>
    </div>
  </div>
);
}

export default CyberpunkTerminal;