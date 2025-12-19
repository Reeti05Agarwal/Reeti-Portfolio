'use client';

import { motion } from "framer-motion";  
import { ctfData } from "@/constants/CtfData";   
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import LocationPinIcon from "@/components/Icons/location"
  
export default function AchCtfCard() {

  const homePageData = ctfData.filter(card => card.homePage === true); 
  if (homePageData.length === 0) {
    return (
      <div className="text-center p-8 text-white/60 border border-white/10 rounded-xl">
        No CTF achievements to display
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-3 grid-cols-4">
      {homePageData.map((card, idx) => (
        <motion.article
          key={idx}
          className="group flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-md transition-all hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30"
        > 
        <div className="flex flex-col flex-grow">
          {/* Title */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white group-hover:text-green-400">
              {card.title}
            </h2>
          </div> 
          {/* Position */}
          <div className="mb-4">
            <p className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-bold text-sm sm:text-base">{card.position}</p> 
          </div>
          {/* Details */}
          <div className="mb-2">
            {/* Date */}
            <p className="flex mt-1 text-white/70 text-sm">
                <CalenderIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                {card.date}
            </p>
            {/* Location */}
            <p className="flex mt-1 text-white/80 text-sm">
              <LocationPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
              {card.organised}
            </p> 
          </div>  
          
          <div className="flex-grow"></div>

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
                    className="w-full flex items-center justify-center gap-2 text-green-400 border-green-400/30 bg-black/20 hover:bg-green-400/10 hover:border-green-400/50 hover:text-green-300 transition-all duration-200"
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
          </div>
        </motion.article>
      ))}
    </div>
  );
}


  

          {/* Description */}
          {/* <div className="flex justify-between items-center">
            <p className="flex mt-1 text-white/80 text-sm">
              <LocationPinIcon className="w-4 h-4 mr-1 text-cyan-300" />
              {card.organised}
            </p>
            <p className="flex mt-1 text-white/70 text-sm">
              <CalenderIcon className="w-4 h-4 mr-2" />
              {card.date}
            </p>
          </div>  */}