'use client';

import { motion } from "framer-motion";  
import { certData, CertData } from "@/constants/CertData";  
import CalenderIcon from "@/components/Icons/calender";
import ReadMoreButton from "@/components/Buttons/ReadMoreButton";
import CertVerificationButton from '@/components/Buttons/CertVerificationButton';
import { getColorScheme } from "@/constants/ColorScheme";
import { getProjectIcon } from "@/constants/IconUtils";
import { Icons } from "@/constants/IconUtils";
import { Star, Award } from "lucide-react";

export default function AchCertCard() {
  const homePageData = certData.filter(card => card.homePage === true);
  
  if (homePageData.length === 0) {
    return (
      <div className="text-center p-8 text-white/60 border border-cyan-500/20 rounded-xl bg-black/30 backdrop-blur-sm">
        <div className="text-cyan-400/50 text-2xl mb-2">⌁</div>
        <p className="font-mono">No certifications to display</p>
        <p className="text-xs text-cyan-400/50 mt-2">[SYSTEM: NO DATA FOUND]</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {homePageData.map((card: CertData, idx: number) => {
        const hasVerification = card.verification && card.verification.trim() !== '';
        const hasLink = card.link && card.link.trim() !== '';
        const colors = getColorScheme(idx);
        const hasDescription = card.description && card.description.trim() !== '';
        
        return (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-gray-900/80 border border-cyan-500/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-magenta-400/50 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-magenta-400/50 rounded-br"></div>
            
            {/* Header with dynamic icon */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colors.accent} backdrop-blur-sm`}>
                  {getProjectIcon(card.title)}
                </div>
                
                <div>
                  <span className="text-xs text-white/60 font-mono">CERT_{String(idx + 1).padStart(3, '0')}</span>
                  <h2 className="text-lg font-bold text-white transition-colors duration-300 font-mono">
                    {card.title}
                  </h2>
                </div>
              </div>

              
              
              {/* Status Indicator */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">VERIFIED</span>
                </div>
                <span className="text-[10px] text-green-400/70 font-mono">SHA-256✓</span>
              </div>
            </div>

            {card.isProfessional && (
              <div className="mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-yellow-300 font-mono">Professional Certification</span>
                  <Award className="w-3 h-3 text-yellow-400" />
                </div>
              </div>
            )}
            
            
            
            {/* Tags with dynamic colors */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {card.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className={`px-2 py-0.5 text-xs border rounded-md font-mono hover:border-${colors.icon.replace('text-', '')}/50 transition-all duration-200 cursor-default ${colors.accent}`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Issuer with icon */}
            {card.organised && card.organised.trim() !== '' && (
              <div className="mb-4 flex items-center justify-between gap-2">
                {/* Issuer - Left side */}
                <div className="flex items-center gap-2 flex-1">
                  <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0`}>
                    <Icons.Award className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-white/60 font-mono block">ISSUER</span>
                    <p className="text-sm text-white/90 truncate">{card.organised}</p>
                  </div>
                </div>
                
                {/* Date - Right side */}
                {card.date && card.date.trim() !== '' && (
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0`}>
                      <CalenderIcon className={`w-4 h-4 ${colors.icon}`} />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-white/60 font-mono block">DATE</span>
                      <p className="text-sm text-white/90 whitespace-nowrap">{card.date}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Footer with date */}
            <div className="mt-auto pt-3 border-t border-cyan-500/20">
              {/* Links - Dynamic width handling */}
              <div className={`flex gap-2 ${!hasVerification || !hasLink ? 'flex-col' : ''}`}>
                
                {/* View Certificate Button */}
                {hasLink && (
                  <a 
                    href={card.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasVerification ? 'w-full' : 'flex-1'}
                  >
                    <ReadMoreButton 
                      fullWidth={!hasVerification}
                      className={`h-11 ${colors.primary} ${colors.glow}`}
                    >
                      $ View Certificate
                    </ReadMoreButton>
                  </a>
                )}
                
                {/* Verification Button */}
                {hasVerification && (
                  <a 
                    href={card.verification}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasLink ? 'w-full' : 'flex-1'}
                  >
                    <CertVerificationButton 
                      fullWidth={!hasLink}
                      className={`h-11 ${colors.primary} ${colors.glow}`}
                    >
                      Verify
                    </CertVerificationButton>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}