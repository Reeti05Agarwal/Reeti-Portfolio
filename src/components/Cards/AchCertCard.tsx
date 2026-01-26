'use client';

import { motion } from "framer-motion";  
import { certData, CertData } from "@/constants/CertData";  
import CalenderIcon from "@/components/Icons/calender";
import ReadMoreButton from "@/components/Buttons/ReadMoreButton";
import CertVerificationButton from '@/components/Buttons/CertVerificationButton';
import Image from "next/image"; 

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
        
        return (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-gray-900/80 border border-cyan-500/20 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            {/* Background Glow Effect */}
            {/* <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/5 via-transparent to-magenta-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div> */}
            
            {/* Corner Decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-magenta-400/50 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-magenta-400/50 rounded-br"></div>
            
            {/* Header with Icon */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1"> 
                  <span className="text-xs text-cyan-400/70 font-mono tracking-wider">CERT_ID: {String(idx + 1).padStart(3, '0')}</span>
                </div>
                
                {/* Title with glitch effect */}
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 font-mono tracking-tight leading-tight">
                  {card.title}
                  <span className="absolute -top-0.5 -left-0.5 text-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.title}
                  </span>
                </h2>
                
                {/* Issuer with icon */}
                {card.organised && (
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-green-300/90 font-mono">ISSUER:</span>
                    <span className="text-xs text-white/80">{card.organised}</span>
                  </div>
                )}
              </div>
              
            </div>
            
            {/* Tags with cyberpunk style */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {card.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-2 py-0.5 text-xs bg-purple-900/30 text-purple-300/80 border border-purple-500/20 rounded-md font-mono hover:bg-purple-800/40 hover:border-purple-400/30 transition-all duration-200 cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Footer with date */}
            <div className="mt-auto pt-3 border-t border-cyan-500/20">
              <div className="flex items-center justify-between mb-3">
                {card.date && card.date.trim() !== '' && (
                  <div className="flex items-center gap-1.5">
                    <CalenderIcon className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300 flex-shrink-0" />
                    <span className="text-xs text-white/70 font-mono tracking-tight">
                      {card.date}
                    </span>
                  </div>
                )}
                
                {/* Data integrity check */}
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> 
                  <span className="text-[12px] text-green-400/70 font-mono">Verified: SHA-256✓</span>
                </div>
              </div>
              
              {/* Links - Dynamic width handling (like project card) */}
              <div className={`flex gap-2 ${!hasVerification || !hasLink ? 'flex-col' : ''}`}>
                
                {/* Read More Button - only if link exists */}
                {hasLink && (
                  <a 
                    href={card.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasVerification ? 'w-full' : 'flex-1'}
                  >
                    <ReadMoreButton 
                      fullWidth={!hasVerification}
                      className="h-11"
                    >
                      $ View Certificate
                    </ReadMoreButton>
                  </a>
                )}
                
                {/* Verification Button - only if verification link exists */}
                {hasVerification && (
                  <a 
                    href={card.verification}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={!hasLink ? 'w-full' : 'flex-1'}
                  >
                    <CertVerificationButton 
                      fullWidth={!hasLink}
                      className="h-11"
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

// Add this CSS to your global styles or in a style tag
const cyberpunkStyles = `
@keyframes scan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`;