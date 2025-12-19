'use client';
import { motion } from "framer-motion";   
import CtfCard from "@/components/Cards/CtfCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CtfPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">
      <motion.div
        className="mb-4" 
      >
     
        <div className="mb-8 group">
          <SectionHeading 
              directory="reeti@root:~$"
              command="ls CTF_Competitions"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />  
        </div>  
      </motion.div>
      <CtfCard/>

          
    </main>
  );
}
