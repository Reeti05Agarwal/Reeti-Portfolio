import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover"; 
import { 
  Shield, Search, Eye, Lock, Key, Terminal, 
  Cpu, Network, AlertTriangle, Database, Wifi, Activity 
} from "lucide-react";

const skillsData = [
  {
    name: "Network Security",
    icon: <Network className="w-5 h-5" />,
    color: "blue",
    description: "Design and implementation of secure network architectures, firewall configurations, and intrusion detection systems.",
    category: "Security"
  },
  {
    name: "Web Pentesting",
    icon: <Shield className="w-5 h-5" />,
    color: "cyan",
    description: "OWASP Top 10 vulnerability assessment, SAST/DAST scanning, and penetration testing methodologies.",
    category: "Web Security"
  },
  {
    name: "Digital Forensics",
    icon: <Search className="w-5 h-5" />,
    color: "purple",
    description: "Evidence collection, disk imaging, memory analysis, and timeline reconstruction for incident investigation.",
    category: "Forensics"
  },
  {
    name: "Cryptography",
    icon: <Lock className="w-5 h-5" />,
    color: "green",
    description: "Symmetric/asymmetric encryption, hash functions, digital signatures, and cryptographic protocol analysis.",
    category: "Encryption"
  },
  {
    name: "OSINT",
    icon: <Eye className="w-5 h-5" />,
    color: "pink",
    description: "Open Source Intelligence gathering, social media investigation, and digital footprint analysis.",
    category: "Intelligence"
  },
  {
    name: "Ethical Hacking",
    icon: <Terminal className="w-5 h-5" />,
    color: "cyan",
    description: "Authorized penetration testing, vulnerability assessment, and security posture evaluation.",
    category: "Offensive Security"
  },
  {
    name: "AI Security",
    icon: <Cpu className="w-5 h-5" />,
    color: "blue",
    description: "Adversarial machine learning, model security assessment, and AI-driven threat detection.",
    category: "AI/ML"
  },
  {
    name: "Incident Analysis",
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "purple",
    description: "Security incident response, log analysis, malware reverse engineering, and threat hunting.",
    category: "Incident Response"
  },
  {
    name: "SIEM/SOC",
    icon: <Activity className="w-5 h-5" />,
    color: "green",
    description: "Security Information and Event Management, Security Operations Center monitoring and alerting.",
    category: "Monitoring"
  },
  {
    name: "Cloud Security",
    icon: <Database className="w-5 h-5" />,
    color: "pink",
    description: "Cloud infrastructure security, identity and access management, and container security.",
    category: "Cloud"
  },
  {
    name: "CTF Challenges",
    icon: <Key className="w-5 h-5" />,
    color: "cyan",
    description: "Capture The Flag competitions covering cryptography, forensics, reverse engineering, and web exploitation.",
    category: "Competitions"
  },
  {
    name: "Mobile Security",
    icon: <Wifi className="w-5 h-5" />,
    color: "blue",
    description: "Android/iOS application security testing, mobile malware analysis, and device security assessment.",
    category: "Mobile"
  },
];

// Color scheme mapping (same as tools)
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

export default function SkillStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {skillsData.map((skill) => {
        const colors = colorClasses[skill.color as keyof typeof colorClasses];
        
        return (
          <Popover key={skill.name} placement="top">
            <PopoverTrigger>
              <div className={`group relative p-3 rounded-lg border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg} hover:scale-[1.02] ${colors.shadow} flex flex-col items-center justify-center h-full min-h-[100px]`}>
                
                {/* Icon */}
                <div className={`w-6 h-6 mb-2 flex items-center justify-center ${colors.accent}`}>
                  {skill.icon}
                </div>
                
                {/* Name */}
                <p className={`text-xs font-bold font-mono text-center ${colors.text} line-clamp-2`}>
                  {skill.name}
                </p>
                
                {/* Corner decorations */}
                <div className={`absolute top-1 left-1 w-1.5 h-1.5 border-t border-l ${colors.border.replace('border-', 'border-t- border-l-').replace('hover:border-', '')} rounded-tl`}></div>
                <div className={`absolute top-1 right-1 w-1.5 h-1.5 border-t border-r ${colors.border.replace('border-', 'border-t- border-r-').replace('hover:border-', '')} rounded-tr`}></div>
                <div className={`absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l ${colors.border.replace('border-', 'border-b- border-l-').replace('hover:border-', '')} rounded-bl`}></div>
                <div className={`absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r ${colors.border.replace('border-', 'border-b- border-r-').replace('hover:border-', '')} rounded-br`}></div>
                
              </div>
            </PopoverTrigger>
            
            <PopoverContent className={`bg-gray-900/95 backdrop-blur-xl border ${colors.popover} p-4 rounded-xl shadow-2xl max-w-xs`}>
              {/* Skill Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-5 h-5 flex items-center justify-center ${colors.accent}`}>
                  {skill.icon}
                </div>
                <div className={`font-bold font-mono text-sm ${colors.text}`}>
                  {skill.name}
                </div>
              </div>
              
              {/* Description */}
              <div className="text-white/80 text-xs font-mono mb-2">
                {skill.description}
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className={`text-[10px] ${colors.text}/70 font-mono px-2 py-1 rounded bg-black/30`}>
                  {skill.category}
                </div>
                <div className={`text-[10px] ${colors.text}/50 font-mono`}>
                  EXPERT
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </div>
  );
}