'use client';
import { motion } from "framer-motion";
import { ExperienceData, cardVariants } from "@/constants/ExperienceData"; 
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import LocationPinIcon from "@/components/Icons/location"

export default function ExperienceCard() {
  return (
    <div className="relative">

    
        <div className="space-y-6 border-l-4 border-blue-300/30 pl-6 relative">
            {ExperienceData.map((exp, idx) => (
                <motion.div
                    key={idx}
                    custom={idx}
                    className="group flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
                >
                    {/* TIMELINE DOT */}
                    <div className="absolute -left-3 top-6 w-4 h-4 rounded-full bg-primary border-pink-300 border-3 shadow" />
                        {/* CONTENT */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-white leading-tight group-hover:text-green-400">
                                {exp.role}
                            </h2>
                            <p className="flex text-base text-white/80 bold pt-0.5 px-1 italic mt-1">
                                <CalenderIcon className="w-5 h-5 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                                {exp.period}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                             <p className="text-lg text-blue-300 font-medium">{exp.company}</p>
                             <p className="flex mt-1 text-white/80 text-lg">
                                <LocationPinIcon className="w-6 h-6 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                                {exp.location}
                            </p> 
                        </div>

                        
                        
                        
                        <p className="text-white/70 mt-2 text-md">{exp.description}</p>
                        <div className="mt-3 pt-3 border-t border-white/10">
                            {/* <GithubButton1/> */}
                            <a 
                                href={exp.link}
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
                </motion.div>
            ))}
        </div>

    </div>
    );
}