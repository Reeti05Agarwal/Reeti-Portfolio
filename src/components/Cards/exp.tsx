import { motion } from "framer-motion";
import { ExperienceData } from "@/constants/ExperienceData";  
import CalenderIcon from "@/components/Icons/calender"
import ReadMoreButton from "@/components/Buttons/ReadMoreButton"
import LocationPinIcon from "@/components/Icons/location"

export default function ExperienceCard() {
  return (
    <div className="relative">
      {/* Timeline Container */}
      <div className="relative space-y-8 pl-6 sm:pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 via-purple-400/30 to-pink-400/30"></div>
        
        {ExperienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            className="group relative flex flex-col bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:border-green-400/30 hover:scale-[1.01]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            
            {/* Timeline Dot with Glow Effect */}
            <div className="absolute -left-4 sm:-left-5 top-6">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                {/* Dot */}
                <div className="relative w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-white/80 shadow-lg"></div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="flex flex-col gap-4">
              
              {/* Header Section: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 leading-tight">
                    {exp.role}
                  </h2>
                </div>
                
                <div className="flex items-center text-white/70 text-sm sm:text-base">
                  <CalenderIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                  <span className="font-medium italic">{exp.period}</span>
                </div>
              </div>
              
              {/* Company & Location Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center">
                  <span className="text-base sm:text-lg font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-400/30">
                    {exp.company}
                  </span>
                </div>
                
                <div className="flex items-center text-white/80 text-sm sm:text-base">
                  <LocationPinIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mt-2">
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
              
              {/* Technologies/Skills (if you have them) */}
              {/* Uncomment if you have tech stack data
              {exp.technologies && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              */}
              
              {/* Button Section with Top Border */}
              {exp.link && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a 
                    href={exp.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <ReadMoreButton/>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}