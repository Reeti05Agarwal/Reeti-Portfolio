'use client';
import { motion } from "framer-motion"; 
import ExperienceCard from "@/components/Cards/ExperienceCard";
import TerminalHeading from "@/components/TerminalUI/TerminalHeading";
 

export default function ExperiencePage() {
  return (
    <main className="px-70 pt-24 p-1 mx-auto mt-5">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
     
        <div className="mb-4 ">
          {/* <CubeButton text="reeti@root:~$ Tech_Stack/Language" /> */}
          <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Experience" />
        </div>
      </motion.div>
      
      <ExperienceCard />
    </main>
  );
}
