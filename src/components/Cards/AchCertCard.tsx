'use client';

import { motion } from "framer-motion";  
import { certData, CertData } from "@/constants/CertData";  
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import Image from "next/image"; 
 
export default function AchCertCard() {

  const homePageData = certData.filter(card => card.homePage === true);
    
  if (homePageData.length === 0) {
    return (
      <div className="text-center p-8 text-white/60 border border-white/10 rounded-xl">
        No Certification to display
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {homePageData.map((card, idx) => (
        <motion.article
          key={idx}
          className="group flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
  
        >
          {/* Image Container
          <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div> */}
          {/* Title */}
          <h2 className="text-xl font-bold text-white group-hover:text-green-400">
            {card.title}
          </h2> 
          {/* Date */}
          <p className="flex mt-1 text-white/70 text-sm">
            <CalenderIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
            {card.date}
          </p> 
          {/* Links */}
          <div className="mt-3 pt-3 border-t border-white/10">
              <a 
                href={card.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 text-green-400 border-green-400/30 bg-black/20 hover:bg-green-400/10 hover:border-green-400/50 hover:text-green-300 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Button>
              </a> 
            </div>


        </motion.article>
      ))}
    </div>
  );
}

 