'use client';

import { motion } from "framer-motion";
import { ExperienceData, cardVariants } from "@/constants/ExperienceData";
import ReadButton from "../Buttons/ReadButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GithubButton1 from "../Github/GithubButton1";

export default function RecentExperience() {
  const recentExp = ExperienceData.slice(0, 4); 

  return (
    <div className="relative">
      {/* Header with arrow button */}
      {/* <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-pink-300">Recent Projects</h2>
        <Link href="/projects" className="text-pink-300 hover:text-pink-400 transition">
          <ArrowRight size={24} />
        </Link>
      </div> */}

      {/* Project cards in one row */}
      <div className="space-y-6 border-l-4 border-blue-300/30 pl-6 relative">
        {recentExp.map((exp, idx) => (
            <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-white/20"
            >
                {/* TIMELINE DOT */}
                <div className="absolute -left-3 top-6 w-4 h-4 rounded-full bg-primary border-pink-300 border-3 shadow" />
                    {/* CONTENT */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-pink-300 leading-tight">
                            {exp.role}
                        </h2>
                        <p className="text-base text-black/60 bg-gray-300/50 rounded-sm bold pt-0.5 px-1 italic mt-1">
                            {exp.period}
                        </p>
                    </div>

                    
                    <p className="text-sm text-blue-300 font-medium">{exp.company}</p>
                    
                    <p className="text-white/70 mt-2 text-sm">{exp.description}</p>
                    <div className="mt-2 py-2 flex justify-between items-center">
                        <GithubButton1/>
                        <a 
                            href={exp.readMoreLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <button className="readButton">
                            Read More
                            </button>
                        </a>
                </div>
            </motion.div>
        ))}
        </div>
    </div>
  );
}
