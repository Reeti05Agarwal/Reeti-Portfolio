'use client';

import { motion } from "framer-motion"; 
import { Badge } from "@/components/ui/badge"
import { projectData, ProjectData } from "@/constants/ProjectData";
import GithubButton1 from "../Github/GithubButton1";
import ReadButton from "../Buttons/ReadButton";
 
export default function ProjectCard() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projectData.map((card, idx) => (
        <motion.article
          key={idx}
          className="flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-pink-300/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
        >
          {/* Title */}
          <h2 className="text-2xl font-semibold text-pink-300 leading-snug">
            {card.title}
          </h2>

          {/* Description */}
          <p className="mt-1 text-white/60 text-sm">{card.author}</p>
          <p className="mt-3 text-white/80 text-sm">{card.description}</p>
          
          {/* Badges */}
          <div className="mt-2 flex flex-wrap gap-2">
            {card.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="text-xs bg-pink-300/20 text-pink-300 px-2 py-0.5 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="mt-4 w-full h-40 object-cover rounded-lg"
          />

          {/* Links */}
        <div className="mt-4 flex justify-between items-center">
          <a href={card.githubLink} className="flex items-center h-12">
            <GithubButton1 />
          </a>
          
          <a href={card.readMoreLink} className="flex items-center h-12">
            <ReadButton text="Read More" />
          </a>
        </div>


        </motion.article>
      ))}
    </div>
  );
}
