'use client';

import { motion } from "framer-motion";  
import { projectData, ProjectData } from "@/constants/ProjectData";
import GithubButton1 from "../Github/GithubButton1";
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import LocationPinIcon from "@/components/Icons/location"
import Image from "next/image"; 
 
export default function ProjectCard() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {projectData.map((card, idx) => (
        <motion.article
          key={idx}
          className="group flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
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

            {/* Title */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                {card.title}
              </h2>
            </div>

            {/* Description */} 
            <div className="mb-4 flex-grow">
              <p className="mt-3 text-white/80 text-md">
                {card.description}
              </p>
            </div>
            
            {/* Badges */}
            <div className="mt-1 flex flex-wrap gap-2">
                {card.tags.map((tag, tagIdx) => (
                <span
                    key={tagIdx}
                    className="text-sm bg-gray-300/20 text-gray-300 px-2 py-0.5 rounded-md"
                >
                    {tag}
                </span>
                ))}
            </div>
            
          
            {/* Links */}
          <div className="mt-3 pt-3 border-t border-white/10">
            {/* <a 
              href={card.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center h-12">
              <GithubButton1 />
            </a> */}
            
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
