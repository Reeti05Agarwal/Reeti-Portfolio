'use client';
import { motion } from "framer-motion"; 
import TerminalHeading from "@/components/TerminalUI/TerminalHeading";
import BlogCard from "@/components/Cards/BlogCard";


export default function BlogsPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.4 }}
      >
     
        <div className="mb-4 ">
          {/* <CubeButton text="reeti@root:~$ Tech_Stack/Language" /> */}
          <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Blogs" />
        </div>
      </motion.div>
      <BlogCard/>

       

      
      
    </main>
  );
}
