'use client';

import { motion } from "framer-motion";  
import { ctfData } from "@/constants/CtfData";   
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import LocationPinIcon from "@/components/Icons/location"
import Image from "next/image"; 
  
export default function CtfCard() {
  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {ctfData.map((card, idx) => (
        <motion.article
          key={idx}
          className="group flex flex-col bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
  
        > 
          <div className="flex flex-col flex-grow">

            {/* Image Container */}
            <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Title Section */}
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                {card.title}
              </h2>
            </div>
            
            {/* Position Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-bold text-sm sm:text-base">
                {card.position}
              </span>
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
            
            {/* Description (if exists) */} 
            <div className="mb-2 flex-grow">
              <p className="text-white/60 text-sm sm:text-base italic border-l-2 border-green-500/50 pl-3">
                {card.description}
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
          </div>
        </motion.article>
      ))}
    </div>
  );
}