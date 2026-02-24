'use client';
import { motion } from "framer-motion"; 
import ExperienceCard from "@/components/Cards/ExperienceCard";  

import SectionHeading from "@/components/ui/SectionHeading";


export default function ExperiencePage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">
      <motion.div
        className="mb-4" 
      >
     
        <div className="mb-8 group">
          <SectionHeading 
              directory="reeti@root:~$"
              command="ls Experience"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />   
        </div>  
      </motion.div>
      
      <ExperienceCard /> 
    </main>
  );
}
