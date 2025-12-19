'use client';
import { motion } from "framer-motion"; 
import ProjectCard from "@/components/Cards/ProjectCard";  
import SectionHeading from "@/components/ui/SectionHeading";


export default function ProjectsPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">
      <motion.div
        className="mb-4"
      >
     
        <div className="mb-8 group">
          <SectionHeading 
              directory="reeti@root:~$"
              command="ls Projects"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />   
        </div>  
      </motion.div>
      <ProjectCard />
 
    </main>
  );
}