import { Terminal, Cpu, Zap, Shield } from "lucide-react";

export default function PinkTerminal() {
  return (
    <div className="relative bg-black/50 p-8 rounded-2xl border-1 border-pink-300/40 shadow-sm backdrop-blur-md group">
      
      {/* Cyberpunk Corner Accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-pink-400 opacity-60"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-pink-400 opacity-60"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-pink-400 opacity-60"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-pink-400 opacity-60"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255, 20, 147, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 20, 147, 0.3) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }} />

      {/* Header with Enhanced Icons */}
      {/* <div className="flex items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Terminal className="text-pink-400 w-6 h-6 animate-pulse" />
            <div className="absolute -inset-1 bg-pink-400 rounded-full blur-sm opacity-30 animate-ping"></div>
          </div>
          <span className="text-pink-300 font-mono text-xl font-bold tracking-wider terminal-text-glow">
            root@terminal:~
          </span>
        </div>
        <div className="ml-auto flex gap-2">
          <Cpu className="text-pink-400 w-4 h-4 animate-pulse" />
          <Zap className="text-pink-400 w-4 h-4 animate-pulse delay-75" />
          <Shield className="text-pink-400 w-4 h-4 animate-pulse delay-150" />
        </div>
      </div> */}

      {/* Terminal Content */}
      <div className="text-pink-300 font-mono space-y-4 text-base leading-relaxed relative z-10">
        
        {/* First Command */}
        <div className="flex items-start gap-2 group/command">
          <span className="text-cyan-300 font-bold text-lg whitespace-nowrap terminal-prompt-glow">
            reeti@portfolio:~$
          </span>
          <span className="text-white font-bold text-lg command-glow">whoami</span> 
        </div>

        {/* Username Output */}
        <div className="ml-4">
          <div className="text-4xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-300 transition-all duration-300">
            Reeti Agarwal
          </div>
        </div>

        {/* Tagline */}
        <div className="ml-4 flex flex-wrap gap-3 text-cyan-300 font-semibold text-sm">
          <span className="px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-200">
            Aspiring Cybersecurity Professional
          </span>
          <span className="px-3 py-1 rounded-full border border-pink-400/30 bg-pink-400/10 backdrop-blur-sm hover:bg-pink-400/20 hover:border-pink-400/50 transition-all duration-200">
            CTF Player
          </span>
          <span className="px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-200">
            TryHackMe
          </span>
          <span className="px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 backdrop-blur-sm hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-200">
            eJPT
          </span>
        </div>

        {/* Second Command */}
        <div className="flex items-start gap-2 group/command pt-6">
          <span className="text-cyan-400 font-bold text-lg whitespace-nowrap terminal-prompt-glow">
            reeti@portfolio:~$
          </span>
          <span className="text-white font-bold text-lg command-glow">cat About_Reeti.txt</span> 
        </div>

        {/* About Text */}
        <div className="ml-4 p-4 rounded-lg border border-pink-400/20 bg-pink-400/5 backdrop-blur-sm hover:border-pink-400/30 hover:bg-pink-400/10 transition-all duration-300">
          <p className="text-gray-200 leading-7">
            Aspiring cybersecurity professional with a strong foundation in computer science. 
            I have hands-on experience through internships and projects in cybersecurity, digital forensics, data science, andPython programming.
          </p>
        </div>
 
      </div>
    </div>
  );
}