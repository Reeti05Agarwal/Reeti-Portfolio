'use client';

import { motion } from "framer-motion";  
import { certData, CertData } from "@/constants/CertData";  
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender" 
import ReadMoreButton from "@/components/Buttons/ReadMoreButton"
import Image from "next/image"; 
 
export default function CertCard() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {certData.map((card, idx) => (
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
          <div className="mb-2">
            <h2 className="text-xl font-bold text-white group-hover:text-green-400">
              {card.title}
            </h2>
          </div>

          {/* Date */}
          <div className="mb-1">
            <p className="flex mt-1 text-white/70 text-sm">
              <CalenderIcon className="w-5 h-5 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
              {card.date}
            </p>
          </div>

          {/* Description */}
          <div className="mb-4 flex-grow">
            <p className="mt-3 text-white/80 text-md">{card.description}</p>
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
              <a 
                href={card.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ReadMoreButton/>
              </a> 
            </div> 
            </div>
        </motion.article>
      ))}
    </div>
  );
}
