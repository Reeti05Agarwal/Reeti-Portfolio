'use client';
import { motion } from "framer-motion";
import { BlogsData } from "@/constants/BlogsData";
import GithubButton1 from "../Github/GithubButton1";
import GithubButton2 from "../Github/GithubButton2";

export default function BlogCard() {
  return (
        <div className="grid gap-8 sm:grid-cols-2">
            {BlogsData.map((blog, idx) => (
            <motion.article
                key={idx}
                className="flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
            >
                <h2 className="text-2xl font-semibold text-pink-300 leading-snug">
                {blog.title}
                </h2>
                <p className="mt-3 text-white/80 text-sm">{blog.summary}</p>
                <p className="mt-2 text-white/50 text-xs italic">{blog.date}</p>
                <div className="mt-2 py-2 flex justify-between items-center">
                    {/* <GithubButton1/> */}
                    <a href={blog.link}>
                        <button className="readButton">
                        Read More
                        </button>
                    </a>
                    
                     
                </div>
            </motion.article>
            ))}
        </div>
    );
}