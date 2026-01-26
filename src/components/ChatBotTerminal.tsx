'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'ai';
  content: string;
}

export default function CyberpunkTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'ai',
      content: '▓▒░ AI ASSISTANT v1.0 ░▒▓',
    },
    {
      type: 'ai',
      content: 'Hello! I\'m Reeti\'s AI assistant. How can I help you today?',
    },
    {
      type: 'ai',
      content: 'Type "help" for available commands, or ask me anything about cybersecurity!',
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aiResponses = {
    help: `
════════════════ [ COMMANDS ] ════════════════

• whoami      - About Reeti
• skills      - Technical skills
• projects    - Portfolio projects
• experience  - Work history
• contact     - Contact information
• clear       - Clear terminal

• ask         - Ask me anything about cybersecurity
• tip         - Get a cybersecurity tip
• joke        - Cybersecurity joke
• time        - Current system time`,
    
    whoami: `Reeti Agarwal | eJPT Certified Cybersecurity Specialist
CTF Player | Digital Forensics | AI Security Researcher
    
Currently pursuing cybersecurity with focus on:
• Penetration Testing
• Digital Forensics
• AI-driven Threat Analysis
• Network Security`,
    
    skills: `Primary Skills:
• VAPT & Web Pentesting
• Network Security
• Digital Forensics
• Cryptography
• OSINT & Threat Intelligence
    
Tools: Wireshark | Metasploit | Burpsuite | Nmap`,
    
    projects: `Featured Projects:
1. Maya - AI-driven Decoy Networks
2. NexGuard - AI Fraud Detection
3. TraceProbe - Law Enforcement Analytics
    
Type "projects details" for more information.`,
    
    contact: `📧 Email: Reeti05agarwal@gmail.com
🔗 LinkedIn: linkedin.com/in/reeti-agarwal-cyber/
💻 GitHub: github.com/Reeti05Agarwal
🌐 Portfolio: reeti05agarwal.github.io/Reeti-Portfolio/`,
    
    tip: `🔒 Cybersecurity Tip: Always use 2FA (Two-Factor Authentication) for important accounts. It adds an extra layer of security beyond just passwords.`,
    
    joke: `Why do programmers prefer dark mode?
Because light attracts bugs! 🐛`,
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add user command
    const newLines: TerminalLine[] = [
      ...lines,
      {
        type: 'command',
        content: `$ ${cmd}`,
      },
    ];

    if (trimmedCmd === 'clear') {
      setLines([
        {
          type: 'ai',
          content: '▓▒░ TERMINAL CLEARED ░▒▓',
        },
        {
          type: 'ai',
          content: 'Ready for new commands.',
        },
      ]);
      setInput('');
      return;
    }

    setLines(newLines);
    setIsTyping(true);
    setInput('');

    // Simulate AI typing
    setTimeout(() => {
      let response = '';
      
      if (trimmedCmd === 'help' || trimmedCmd in aiResponses) {
        response = aiResponses[trimmedCmd as keyof typeof aiResponses];
      } else if (trimmedCmd.startsWith('ask')) {
        response = `That's an interesting question about ${trimmedCmd.replace('ask', '').trim() || 'cybersecurity'}! Reeti has extensive experience in this area. For detailed answers, please contact her directly.`;
      } else if (trimmedCmd === 'time') {
        const now = new Date();
        response = `🕒 System Time: ${now.toLocaleTimeString()} | Date: ${now.toLocaleDateString()}`;
      } else if (trimmedCmd === '') {
        response = '';
      } else {
        response = `I'm not sure about "${cmd}". Try "help" for available commands, or ask me about cybersecurity topics!`;
      }

      setLines(prev => [...prev, {
        type: 'ai',
        content: response,
      }]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

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
      
      {/* Terminal Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full overflow-y-auto p-4"
        style={{
          background: 'rgba(0, 10, 15, 0.95)',
        }}
      >
        {/* Terminal Content */}
        <div className="font-mono text-sm space-y-2">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`whitespace-pre-wrap break-words leading-relaxed ${
                line.type === 'command'
                  ? 'text-cyan-300'
                  : line.type === 'ai'
                  ? 'text-green-300/90'
                  : 'text-cyan-400'
              }`}
            >
              {line.content}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="text-green-400/70 flex items-center gap-1">
              <span className="animate-pulse">●</span>
              <span>AI is thinking...</span>
            </div>
          )}

          {/* Input Line */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-cyan-300">┌─[</span>
            <span className="text-green-400">ai@assistant</span>
            <span className="text-cyan-300">]-[</span>
            <span className="text-purple-300">~</span>
            <span className="text-cyan-300">]</span>
            <div className="flex-1 relative ml-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-green-300 placeholder-green-300/50"
                placeholder="Type command..."
                autoFocus
                spellCheck="false"
              />
            </div>
            <div className="flex items-center">
              <span className="text-cyan-300">└─$</span>
              <span className="ml-1 w-[6px] h-4 bg-cyan-400 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 pt-4 border-t border-cyan-500/20">
          <div className="flex flex-wrap gap-3 text-xs text-cyan-400/60">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI: ACTIVE</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
              <span>ENCRYPTED CHAT</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>v1.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-cyan-500/30"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-purple-500/30"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-cyan-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-purple-500/30"></div>
    </div>
  );
}