import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { 
  Terminal, Shield, Eye, Wifi, Cpu, GitBranch, 
  Search, Activity, Database, Key, Zap, FileSearch 
} from "lucide-react";

const securityTools = [
  {
    name: "Burp Suite",
    icon: <Shield className="w-5 h-5" />,
    color: "cyan",
    description: "Industry-standard web application security testing tool for intercepting and modifying HTTP traffic.",
    category: "Web Security"
  },
  {
    name: "Wireshark",
    icon: <Eye className="w-5 h-5" />,
    color: "blue",
    description: "Network protocol analyzer for capturing and inspecting network traffic in real-time.",
    category: "Network Analysis"
  },
  {
    name: "Metasploit",
    icon: <Terminal className="w-5 h-5" />,
    color: "pink",
    description: "Penetration testing framework for developing and executing exploit code.",
    category: "Exploitation"
  },
  {
    name: "Nmap",
    icon: <Search className="w-5 h-5" />,
    color: "green",
    description: "Network discovery and security auditing tool for port scanning and service detection.",
    category: "Network Scanning"
  },
  {
    name: "GitHub",
    icon: <GitBranch className="w-5 h-5" />,
    color: "purple",
    description: "Version control and collaboration platform for security tool development and research.",
    category: "Development"
  },
  {
    name: "Ollama",
    icon: <Cpu className="w-5 h-5" />,
    color: "cyan",
    description: "Local AI model runner for security research and threat analysis automation.",
    category: "AI Security"
  },
  {
    name: "Autopsy",
    icon: <FileSearch className="w-5 h-5" />,
    color: "blue",
    description: "Digital forensics platform for analyzing disk images and recovering evidence.",
    category: "Forensics"
  },
  {
    name: "Volatility",
    icon: <Database className="w-5 h-5" />,
    color: "pink",
    description: "Memory forensics framework for incident response and malware analysis.",
    category: "Memory Analysis"
  },
  {
    name: "SIEM Tools",
    icon: <Activity className="w-5 h-5" />,
    color: "green",
    description: "Security Information and Event Management for real-time security monitoring.",
    category: "Monitoring"
  },
  {
    name: "Packet Tracer",
    icon: <Wifi className="w-5 h-5" />,
    color: "purple",
    description: "Network simulation tool for designing and testing network configurations.",
    category: "Network Design"
  },
  {
    name: "Cryptography",
    icon: <Key className="w-5 h-5" />,
    color: "cyan",
    description: "Various cryptographic tools for encryption, decryption, and secure communication.",
    category: "Encryption"
  },
  {
    name: "Linux",
    icon: <Terminal className="w-5 h-5" />,
    color: "blue",
    description: "Primary operating system for security research and penetration testing.",
    category: "OS"
  },
];

// Color scheme mapping
const colorClasses = {
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/50",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
    shadow: "hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
    popover: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-400/50",
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    shadow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    popover: "border-blue-500/30",
    accent: "text-blue-400"
  },
  pink: {
    border: "border-pink-500/30 hover:border-pink-400/50",
    bg: "bg-pink-500/10",
    text: "text-pink-300",
    shadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
    popover: "border-pink-500/30",
    accent: "text-pink-400"
  },
  green: {
    border: "border-green-500/30 hover:border-green-400/50",
    bg: "bg-green-500/10",
    text: "text-green-300",
    shadow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    popover: "border-green-500/30",
    accent: "text-green-400"
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/50",
    bg: "bg-purple-500/10",
    text: "text-purple-300",
    shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    popover: "border-purple-500/30",
    accent: "text-purple-400"
  }
};

export default function ToolStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {securityTools.map((tool) => {
        const colors = colorClasses[tool.color as keyof typeof colorClasses];
        
        return (
          <Popover key={tool.name} placement="top">
            <PopoverTrigger>
              <div className={`group relative p-3 rounded-lg border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg} hover:scale-[1.02] ${colors.shadow} flex flex-col items-center justify-center`}>
                
                {/* Icon */}
                <div className={`w-6 h-6 mb-2 flex items-center justify-center ${colors.accent}`}>
                  {tool.icon}
                </div>
                
                {/* Name */}
                <p className={`text-xs font-bold font-mono text-center ${colors.text}`}>
                  {tool.name}
                </p>
                
                {/* Corner decorations */}
                <div className={`absolute top-1 left-1 w-1.5 h-1.5 border-t border-l ${colors.border.replace('border-', 'border-t- border-l-').replace('hover:border-', '')} rounded-tl`}></div>
                <div className={`absolute top-1 right-1 w-1.5 h-1.5 border-t border-r ${colors.border.replace('border-', 'border-t- border-r-').replace('hover:border-', '')} rounded-tr`}></div>
                <div className={`absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l ${colors.border.replace('border-', 'border-b- border-l-').replace('hover:border-', '')} rounded-bl`}></div>
                <div className={`absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r ${colors.border.replace('border-', 'border-b- border-r-').replace('hover:border-', '')} rounded-br`}></div>
                
              </div>
            </PopoverTrigger>
            
            <PopoverContent className={`bg-gray-900/95 backdrop-blur-xl border ${colors.popover} p-4 rounded-xl shadow-2xl max-w-xs`}>
              {/* Tool Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-5 h-5 flex items-center justify-center ${colors.accent}`}>
                  {tool.icon}
                </div>
                <div className={`font-bold font-mono text-sm ${colors.text}`}>
                  {tool.name}
                </div>
              </div>
              
              {/* Description */}
              <div className="text-white/80 text-xs font-mono mb-2">
                {tool.description}
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className={`text-[10px] ${colors.text}/70 font-mono px-2 py-1 rounded bg-black/30`}>
                  {tool.category}
                </div>
                <div className={`text-[10px] ${colors.text}/50 font-mono`}>
                  ACTIVE
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </div>
  );
}