'use client';
import { motion } from "framer-motion";
import { BlogsData } from "@/constants/BlogsData"; 
import MediumIcon from "../Icons/SocialMediaIcons/medium";
import { Button } from "@/components/ui/button"; 
import CalenderIcon from "@/components/Icons/calender" 
import Image from "next/image";  

export default function BlogCard() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {BlogsData.map((blog, idx) => (
        <motion.article
          key={idx}
          className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 hover:border-green-400/30 "
        >
          {/* Image Container */}
          <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* Title */}
          <h2 className="text-xl font-semibold text-white leading-snug">
            {blog.title}
          </h2>
          {/* Date */}
          <p className="flex mt-1 text-white/70 text-sm">
            <CalenderIcon className="w-5 h-5 sm:w-5 sm:h-5 mr-2 text-cyan-300 flex-shrink-0" />
            {blog.date}
          </p>
          {/* Description */}
          <p className="mt-3 text-white text-md">{blog.summary}</p>
          {/* Link */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <a 
              href={blog.link}
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
        </motion.article>
      ))}
    </div>
  );
}