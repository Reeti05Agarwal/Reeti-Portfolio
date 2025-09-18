'use client';
import { motion } from "framer-motion";
import { BlogsData } from "@/constants/BlogsData"; 
import MediumIcon from "../Icons/SocialMediaIcons/medium";

export default function BlogCard() {
  return (
        <div className="grid gap-8 sm:grid-cols-2">
            {BlogsData.map((blog, idx) => (
            <motion.article
                key={idx}
                className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
            >
                <h2 className="text-2xl font-semibold text-pink-300 leading-snug">
                {blog.title}
                </h2>
                <p className="mt-2 text-white/50 text-xs italic">{blog.date}</p>
                <p className="mt-3 text-white/80 text-sm">{blog.summary}</p>
                <div className="mt-3 flex gap-2">
                    <a 
                        href={blog.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="readButton">
                        Read More
                        </button>
                    </a> 
                    {/* <div className= "border-2 p-1 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                        <div className="icon-content"> 
                            <MediumIcon /> 
                            <div className="tooltip">Medium</div>
                        </div>
                    </div> */}
                    
                     
                </div>
                
            </motion.article>
            ))}
        </div>
    );
}