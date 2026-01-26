'use client';
import { motion } from "framer-motion";
import { ExperienceData, cardVariants } from "@/constants/ExperienceData"; 
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender"
import ReadMoreButton from "@/components/Buttons/ReadMoreButton"
import LocationPinIcon from "@/components/Icons/location"

export default function ExperienceCard() {
  return (
    <div className="relative">

    
        <div className="space-y-6 border-l-4 border-blue-300/30 pl-6 relative">
            {ExperienceData.map((exp, idx) => (
                <motion.div
                    key={idx}
                    custom={idx}
                    className="group flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
                >
                    {/* TIMELINE DOT */}
                    <div className="absolute -left-4 sm:-left-5 top-6">
                        <div className="relative">
                            {/* Outer glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            {/* Dot */}
                            <div className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-white/80 shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4"> 
                        {/* CONTENT */} 
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 leading-tight">
                                {exp.role}
                            </h2>
                            </div>
                            
                            <div className="flex items-center text-white/70 text-sm sm:text-base">
                            <CalenderIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                            <span className="font-medium">{exp.period}</span>
                            </div>
                        </div>
                        
                        {/* Company & Location Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center">
                            <span className="text-base sm:text-md font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-400/30">
                                {exp.company}
                            </span>
                            </div>
                            
                            <div className="flex items-center text-white/70 text-sm sm:text-base">
                            <LocationPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                            <span>{exp.location}</span>
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className="mt-1 flex-grow">
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                            {exp.description}
                            </p>
                        </div>

                        {/* Badges */}
                        <div className="mt-1 flex flex-wrap gap-2">
                            {exp.tags.map((tag, tagIdx) => (
                            <span
                                key={tagIdx}
                                className="text-sm bg-gray-300/20 text-gray-300 px-2 py-0.5 rounded-md"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>


                        <div className="mt-1 pt-3 border-t border-white/10">
                            {/* <GithubButton1/> */}
                            <a 
                                href={exp.link}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                                >
                             <ReadMoreButton/>
                            </a> 
                    </div>
                    </div>
                </motion.div>
            ))}
        </div>

    </div>
    );
}