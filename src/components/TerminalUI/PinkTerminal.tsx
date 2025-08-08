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
          <span className="terminal-glow-pink text-lg">reeti@portfolio:~$</span>{" "}
          <span className="text-white">whoami</span>{" "}
          <span className="text-pink-400 cursor">|</span>
        </div>
        <div className="text-2xl font-bold text-pink-300">Reeti Agarwal</div>
        <div className="italic text-pink-400 text-sm md:text-base">
          Hacker | TryHackMe | eJPT
          <br />
          3rd Year BTech Student at Symbiosis Institute of Technology
        </div>

        <div className="pt-4">
          <span className="terminal-glow-pink text-lg">reeti@portfolio:~$</span>{" "}
          <span className="text-white">cat About_Reeti.txt</span>{" "}
          <span className="text-pink-400 cursor">|</span>
        </div>
        <p>
          Aspiring cybersecurity professional with a strong foundation in computer science, currently pursuing a BTech at Symbiosis Institute of Technology. I have hands-on experience through internships and projects in cybersecurity, digital forensics, data science, and Python programming.
        </p>
      </div>
    </div>
  );
}
