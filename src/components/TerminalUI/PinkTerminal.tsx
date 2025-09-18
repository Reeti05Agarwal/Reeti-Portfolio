import { Terminal } from "lucide-react";

export default function PinkTerminal() {
  return (
    <div className="bg-black/70 p-6 rounded-2xl border border-pink-500/30 shadow-xl backdrop-blur-md">
      <div className="flex items-center mb-4">
        <Terminal className="text-pink-400 mr-2 animate-pulse" />
        <span className="text-pink-300 font-mono text-lg terminal-glow-pink">Terminal</span>
      </div>

      <div className="text-pink-200 font-mono space-y-3 text-sm md:text-base leading-relaxed">
        <div>
          <span className="terminal-glow-pink text-xl">reeti@portfolio:~$</span>{" "}
          <span className="text-white font-bold text-xl">whoami</span>{" "}
          <span className="text-pink-400 cursor">|</span>
        </div>
        <div className="text-3xl font-bold text-pink-300">Reeti Agarwal</div>
        <div className="text-blue-300 font-bold text-sm md:text-base">
          Aspiring CyberSecurity Professional 
          <br />
          CTF Player | TryHackMe | eJPT
          <br />
          
        </div>

        <div className="pt-4">
          <span className="terminal-glow-pink text-xl">reeti@portfolio:~$</span>{" "}
          <span className="text-white font-bold text-xl">cat About_Reeti.txt</span>{" "}
          <span className="text-pink-400 cursor">|</span>
        </div>
        <p>
          Aspiring cybersecurity professional with a strong foundation in computer science, currently pursuing a BTech at Symbiosis Institute of Technology. I have hands-on experience through internships and projects in cybersecurity, digital forensics, data science, and Python programming.
        </p>
      </div>
    </div>
  );
}
