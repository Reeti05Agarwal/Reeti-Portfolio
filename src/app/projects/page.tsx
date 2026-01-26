'use client';
import { motion } from "framer-motion"; 
import ProjectCard from "@/components/Cards/ProjectCard";  
import SectionHeading from "@/components/ui/SectionHeading";
import HackCard from "@/components/Cards/HackCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-16 sm:pt-20 md:pt-24">
      <motion.div
        className="mb-6 sm:mb-8"
      >

        {/* Hackathon Cards*/} 
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SectionHeading 
                  directory="reeti@root:/Achievements~$"
                  command="ls Hackathon"
                  description="List of all Tools I know"
                  glowColor="cyan"
                />    
            </div>   
              {/* <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg"> */}
                <HackCard />
              {/* </div> */}
            </div>
     
        <div className="mb-6 sm:mb-8 md:mb-10 group">
          <SectionHeading 
              directory="reeti@root:~$"
              command="ls Projects"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />   
        </div>  
      </motion.div>
      <div className="w-full">
        <ProjectCard />
      </div>
    </main>
  );
}