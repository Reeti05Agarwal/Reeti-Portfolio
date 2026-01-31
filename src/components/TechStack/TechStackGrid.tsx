import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import PythonIcon from "@/components/Icons/Lang/python";
import BashIcon from "../Icons/Lang/bash";
import ReactIcon from "../Icons/Lang/react";
import LinuxIcon from "../Icons/Tools/linux";
import MongoDBIcon from "../Icons/Lang/mongodb";
import SqlIcon from "../Icons/Lang/sql";
import NextIcon from "../Icons/Lang/nextjs";
import CppIcon from "../Icons/Lang/cpp";
import JavaIcon from "../Icons/Lang/java";
import { 
  Database, Terminal, Cpu, Code, FileCode, 
  Server, Layers, GitBranch 
} from "lucide-react";

const techData = [
  {
    name: "Python",
    icon: <PythonIcon />,
    customIcon: <Terminal className="w-5 h-5" />,
    color: "cyan",
    description: "Versatile programming language used for scripting, automation, data science, cybersecurity tools, and backend development.",
    category: "Programming"
  },
  {
    name: "Bash",
    icon: <BashIcon />,
    customIcon: <Terminal className="w-5 h-5" />,
    color: "blue",
    description: "Command-line scripting for automating security tasks, system administration, and Linux/Unix system management.",
    category: "Scripting"
  },
  {
    name: "React",
    icon: <ReactIcon />,
    customIcon: <Code className="w-5 h-5" />,
    color: "pink",
    description: "JavaScript library for building interactive security dashboards, user interfaces, and single-page applications.",
    category: "Frontend"
  },
  {
    name: "Linux",
    icon: <LinuxIcon />,
    customIcon: <Server className="w-5 h-5" />,
    color: "green",
    description: "Primary operating system for security research, penetration testing, server management, and development environments.",
    category: "Operating System"
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon />,
    customIcon: <Database className="w-5 h-5" />,
    color: "purple",
    description: "NoSQL database for storing and managing unstructured security logs, threat intelligence, and flexible data structures.",
    category: "Database"
  },
  {
    name: "MySQL",
    icon: <SqlIcon />,
    customIcon: <Database className="w-5 h-5" />,
    color: "cyan",
    description: "Popular open-source relational database management system for structured security data, user management, and logs.",
    category: "Database"
  },
  {
    name: "NextJS",
    icon: <NextIcon />,
    customIcon: <Layers className="w-5 h-5" />,
    color: "blue",
    description: "React framework for server-side rendering, static site generation, and building full-stack security applications.",
    category: "Full Stack"
  },
  {
    name: "C++",
    icon: <CppIcon />,
    customIcon: <FileCode className="w-5 h-5" />,
    color: "pink",
    description: "High-performance programming language used for system programming, security tools development, and competitive programming.",
    category: "Programming"
  },
  {
    name: "Java",
    icon: <JavaIcon />,
    customIcon: <Cpu className="w-5 h-5" />,
    color: "green",
    description: "Object-oriented programming language used for enterprise security solutions, Android security, and cross-platform applications.",
    category: "Programming"
  },
  {
    name: "Git",
    icon: <GitBranch className="w-5 h-5" />,
    customIcon: <GitBranch className="w-5 h-5" />,
    color: "purple",
    description: "Version control system for collaborative security tool development, code management, and project tracking.",
    category: "DevOps"
  },
  {
    name: "Docker",
    icon: <Server className="w-5 h-5" />,
    customIcon: <Server className="w-5 h-5" />,
    color: "cyan",
    description: "Containerization platform for deploying isolated security tools, reproducible environments, and microservices.",
    category: "DevOps"
  },
  {
    name: "AWS/Azure",
    icon: <Database className="w-5 h-5" />,
    customIcon: <Database className="w-5 h-5" />,
    color: "blue",
    description: "Cloud platforms for deploying security infrastructure, threat intelligence systems, and scalable security solutions.",
    category: "Cloud"
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

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {techData.map((tech) => {
        const colors = colorClasses[tech.color as keyof typeof colorClasses];
        
        return (
          <Popover key={tech.name} placement="top">
            <PopoverTrigger>
              <div className={`group relative p-3 rounded-lg border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg} hover:scale-[1.02] ${colors.shadow} flex flex-col items-center justify-center h-full min-h-[100px]`}>
                
                {/* Icon - You can choose between custom icon or your icon component */}
                <div className={`w-6 h-6 mb-2 flex items-center justify-center ${colors.accent}`}>
                  {tech.customIcon || tech.icon}
                </div>
                
                {/* Name */}
                <p className={`text-xs font-bold font-mono text-center ${colors.text} line-clamp-2`}>
                  {tech.name}
                </p>
                
                {/* Corner decorations */}
                <div className={`absolute top-1 left-1 w-1.5 h-1.5 border-t border-l ${colors.border.replace('border-', 'border-t- border-l-').replace('hover:border-', '')} rounded-tl`}></div>
                <div className={`absolute top-1 right-1 w-1.5 h-1.5 border-t border-r ${colors.border.replace('border-', 'border-t- border-r-').replace('hover:border-', '')} rounded-tr`}></div>
                <div className={`absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l ${colors.border.replace('border-', 'border-b- border-l-').replace('hover:border-', '')} rounded-bl`}></div>
                <div className={`absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r ${colors.border.replace('border-', 'border-b- border-r-').replace('hover:border-', '')} rounded-br`}></div>
                
              </div>
            </PopoverTrigger>
            
            <PopoverContent className={`bg-gray-900/95 backdrop-blur-xl border ${colors.popover} p-4 rounded-xl shadow-2xl max-w-xs`}>
              {/* Tech Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-5 h-5 flex items-center justify-center ${colors.accent}`}>
                  {tech.customIcon || tech.icon}
                </div>
                <div className={`font-bold font-mono text-sm ${colors.text}`}>
                  {tech.name}
                </div>
              </div>
              
              {/* Description */}
              <div className="text-white/80 text-xs font-mono mb-2">
                {tech.description}
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className={`text-[10px] ${colors.text}/70 font-mono px-2 py-1 rounded bg-black/30`}>
                  {tech.category}
                </div>
                <div className={`text-[10px] ${colors.text}/50 font-mono`}>
                  PRO
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </div>
  );
}