import { 
  Shield, Cpu, Code, GitBranch, Lock, Terminal, Zap, 
  Trophy, Users, Target, Award, BookOpen 
} from "lucide-react";
import { ReactElement } from "react";

// Project/Hackathon icon mapping
export function getProjectIcon(title: string): ReactElement {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('cyber') || titleLower.includes('security') || titleLower.includes('hack')) {
    return <Shield className="w-4 h-4" />;
  } else if (titleLower.includes('ai') || titleLower.includes('machine') || titleLower.includes('learning')) {
    return <Cpu className="w-4 h-4" />;
  } else if (titleLower.includes('web') || titleLower.includes('app') || titleLower.includes('frontend')) {
    return <Code className="w-4 h-4" />;
  } else if (titleLower.includes('network') || titleLower.includes('system') || titleLower.includes('infra')) {
    return <GitBranch className="w-4 h-4" />;
  } else if (titleLower.includes('crypto') || titleLower.includes('encrypt') || titleLower.includes('blockchain')) {
    return <Lock className="w-4 h-4" />;
  } else if (titleLower.includes('ctf') || titleLower.includes('capture') || titleLower.includes('flag')) {
    return <Terminal className="w-4 h-4" />;
  } else {
    return <Zap className="w-4 h-4" />;
  }
}

// Certification icon mapping
export function getCertIcon(title: string): ReactElement {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('cyber') || titleLower.includes('security') || titleLower.includes('pentest')) {
    return <Shield className="w-4 h-4" />;
  } else if (titleLower.includes('google') || titleLower.includes('professional')) {
    return <Award className="w-4 h-4" />;
  } else if (titleLower.includes('cisco') || titleLower.includes('network')) {
    return <GitBranch className="w-4 h-4" />;
  } else if (titleLower.includes('bash') || titleLower.includes('shell') || titleLower.includes('scripting')) {
    return <Terminal className="w-4 h-4" />;
  } else if (titleLower.includes('ethical') || titleLower.includes('hacking')) {
    return <Lock className="w-4 h-4" />;
  } else {
    return <Shield className="w-4 h-4" />;
  }
}

// Common icons for reuse
export const Icons = {
  Trophy,
  Users,
  Target,
  Award,
  BookOpen,
  Shield,
  Cpu,
  Code,
  GitBranch,
  Lock,
  Terminal,
  Zap
};