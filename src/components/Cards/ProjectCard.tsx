'use client';

import { motion } from "framer-motion";  
import { projectData, ProjectData } from "@/constants/ProjectData";
import GithubButton from "@/components/Buttons/GithubButton";
import ReadMoreButton from "@/components/Buttons/ReadMoreButton";
import Image from "next/image"; 
import { Code, Cpu, Shield, Terminal, Database, Network, Zap, Server, Key, Bug } from "lucide-react";
import { getCycledColor as getColorScheme } from "@/constants/ColorScheme"; 

export default function ProjectCard() {

  // Get project type icon based on title/tags
  const getProjectIcon = (card: ProjectData) => {
    const titleLower = card.title.toLowerCase();
    const tagsLower = card.tags.map(tag => tag.toLowerCase());
    
    if (titleLower.includes('ai') || titleLower.includes('machine learning') || 
        tagsLower.some(tag => tag.includes('ai') || tag.includes('ml'))) {
      return <Cpu className="w-5 h-5" />;
    } else if (titleLower.includes('security') || titleLower.includes('cyber') || 
               tagsLower.some(tag => tag.includes('security') || tag.includes('pentest'))) {
      return <Shield className="w-5 h-5" />;
    } else if (titleLower.includes('network') || titleLower.includes('infrastructure') || 
               tagsLower.some(tag => tag.includes('network') || tag.includes('system'))) {
      return <Network className="w-5 h-5" />;
    } else if (titleLower.includes('database') || titleLower.includes('data') || 
               tagsLower.some(tag => tag.includes('sql') || tag.includes('database'))) {
      return <Database className="w-5 h-5" />;
    } else if (titleLower.includes('web') || titleLower.includes('frontend') || 
               tagsLower.some(tag => tag.includes('react') || tag.includes('web'))) {
      return <Code className="w-5 h-5" />;
    } else if (titleLower.includes('server') || titleLower.includes('backend') || 
               tagsLower.some(tag => tag.includes('server') || tag.includes('api'))) {
      return <Server className="w-5 h-5" />;
    } else {
      return <Terminal className="w-5 h-5" />;
    }
  };

  // Get gradient based on color scheme
  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-900/10 via-transparent to-cyan-900/10',    // Blue scheme
      'from-purple-900/10 via-transparent to-pink-900/10',  // Purple scheme
      'from-pink-900/10 via-transparent to-rose-900/10',    // Pink scheme
      'from-emerald-900/10 via-transparent to-green-900/10',// Green scheme
      'from-cyan-900/10 via-transparent to-teal-900/10'     // Cyan scheme
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectData.map((card: ProjectData, idx: number) => {
        const hasGithub = card.githubLink && card.githubLink.trim() !== '';
        const hasLink = card.link && card.link.trim() !== '';
        const colors = getColorScheme(idx); // Using centralized function
        const projectIcon = getProjectIcon(card);
        const gradient = getGradient(idx);
        
        return (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 border border-black-500 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:border-black-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            {/* Unique background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            
            {/* Diagonal corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/30 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-magenta-400/30 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/30 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-magenta-400/30 rounded-br"></div>
            
          
            {/* Image Container */}
            <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Header with Project Icon */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colors.accent} backdrop-blur-sm`}>
                  {projectIcon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white transition-colors duration-300 font-mono">
                    {card.title}
                  </h2>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400/80 font-mono">{card.state}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-4 p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0 mt-0.5`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-white/60 font-mono block">OVERVIEW</span>
                  <p className="text-sm text-white/90 mt-1">{card.description}</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`px-2 py-1 text-xs ${colors.accent} rounded-md font-mono hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-auto pt-3 border-t border-cyan-500/20">
              <div className={`flex gap-2 ${!hasGithub || !hasLink ? 'flex-col' : ''}`}>
                {/* Read More Button */}
                {hasLink && (
                  <a 
                    href={card.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasGithub ? 'w-full' : 'flex-1'}
                  >
                    <ReadMoreButton 
                      fullWidth={!hasGithub}
                      className={`h-11 ${colors.primary} ${colors.glow}`}
                    >
                      Read More
                    </ReadMoreButton>
                  </a>
                )}
                
                {/* GitHub Button */}
                {hasGithub && (
                  <a 
                    href={card.githubLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasLink ? 'w-full' : 'flex-1'}
                  >
                    <GithubButton 
                      fullWidth={!hasLink}
                      className={`h-11 ${colors.glow}`}
                    />
                  </a>
                )}
                
                {/* Fallback */}
                {!hasGithub && !hasLink && (
                  <div className="w-full text-center py-3 text-white/50 text-sm font-mono">
                    [NO LINKS AVAILABLE]
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}