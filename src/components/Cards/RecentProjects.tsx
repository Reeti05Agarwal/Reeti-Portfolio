'use client';

import { motion } from "framer-motion";
import { projectData } from "@/constants/ProjectData";
import ReadButton from "../Buttons/ReadButton"; 
import GithubButton1 from "../Github/GithubButton1";

export default function RecentProjects() {
  const recentProjects = projectData.slice(0, 4); 

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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {recentProjects.map((card, idx) => (
          <motion.article
            key={idx}
            className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-pink-300/40"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <h3 className="text-lg font-semibold text-pink-300">{card.title}</h3>
            {/* <p className="mt-1 text-white/60 text-sm">{card.author}</p> */}
            {/* <p className="mt-2 text-white/80 text-sm">{card.description}</p> */}

            {/* Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {card.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-lg bg-blue-300/20 text-blue-300 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3 text-white/80 text-sm">{card.description}</p>

            {/* Image */}
            {/* <img
              src={card.image}
              alt={card.title}
              className="mt-4 w-full h-32 object-cover rounded-lg"
            /> */}

            {/* Read more */}
            <div className="mt-4 mb-2 flex sm:flex-col md:flex-col gap-2 justify-between items-center">
              <a 
                href={card.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center h-12">
                <GithubButton1 />
              </a>
              
              <a 
                href={card.readMoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center h-12"
              >
                <ReadButton text="Read More" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
