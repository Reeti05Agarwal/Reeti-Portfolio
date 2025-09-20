'use client';

import { motion } from "framer-motion";  
import { achData, AchData } from "@/constants/AchData"; 
import ReadButton from "../Buttons/ReadButton";
import LinkedinButtons from "../Buttons/LinkedinButton";
import LinkedinButton from "../Buttons/LinkedinButton";
  
export default function CtfCard() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {achData.map((card, idx) => (
        <motion.article
          key={idx}
          className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-pink-300/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
        >
          {/* Title */}
          <h2 className="text-2xl font-bold text-pink-300 ">
            {card.title}
          </h2>

          {/* Description */}
          <div className="flex justify-between items-center">
            <p className="flex mt-1 text-white/80 text-sm">{card.organised}</p>
            <p className="flex mt-1 text-white/70 text-sm">{card.date}</p>
          </div> 
          <p className="mt-1 text-green-300 font-bold text-lg">{card.position}</p>
          <p className="mt-3 text-white/80 text-md">{card.description}</p>
          
          {/* Badges */}
          {/* <div className="mt-2 flex flex-wrap gap-2">
            {card.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="text-lg bg-blue-300/20 text-blue-300 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>  */}
          {/* Links */}
        <div className="mt-4 flex justify-between items-center"> 
          <a 
            href={card.readMoreLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center h-12"
          >
            <ReadButton text="Read More" />
          </a> 
          {/* <div className="flex items-center h-12">
            <LinkedinButton/>
          </div> */}
          
        </div>


        </motion.article>
      ))}
    </div>
  );
}
