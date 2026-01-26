'use client'; 
import TryhackmeBadge from "@/components/Buttons/TryHackMeBadge";  
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid";  
import ContactCard from "@/components/Cards/ContactCard";    
import CyberpunkTerminal from "@/components/ui/CyberpunkTerminal";  
import HeroLeftContent from '@/components/ui/HeroLeftContent';
import HeroProfilePicture from '@/components/ui/ProfilePicture';

import ResearchCard from "@/components/Cards/ResearchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SubSectionHeading from "@/components/ui/SubSectionHeading";
import HackTheBoxBadge from "@/components/Buttons/HackTheBoxBadge";
import AchCertCard from "@/components/Cards/AchCertCard";  


export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">  
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <HeroLeftContent />
              <HeroProfilePicture />
            </div>
          </div>
          <HeroStyles />
        </section>

        <section>
            <CyberpunkTerminal/>
          </section>

           
        <section className="flex flex-col gap-6">

          <section className="flex flex-col gap-4"> 
              <div className="">
                <TryhackmeBadge/>
              </div> 
              <div>
                <HackTheBoxBadge />
              </div> 
          </section>
 

          {/*============= TECH STACK =============*/} 
          <SectionHeading 
              directory="reeti@root:~$"
              command="cd Tech_Stack"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />  


          {/* Tech Stack Section */}
<section className="flex flex-col gap-8 mb-10 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg shadow-cyan-300/20">
  
  {/* Skills Section - Cybersecurity Focus */}
  <div className="flex flex-col gap-4">
    <div className="mb-2"> 
      <SubSectionHeading 
        directory="reeti@root:/Tech_Stack~$"
        command="ls Cyber_Skills"
        description="List of Cybersecurity Domains"
        glowColor="cyan"
      /> 
    </div>
    <SkillStackGrid />
  </div>

  {/* Languages Section */}
  <div className="flex flex-col gap-4">
    <div className="mb-2"> 
      <SubSectionHeading 
        directory="reeti@root:/Tech_Stack~$"
        command="ls Development_Languages"
        description="List of Programming Languages"
        glowColor="cyan"
      />  
    </div>
    <TechStackGrid />
  </div>

  {/* Tools Section - Security Tools */}
  <div className="flex flex-col gap-4">
    <div className="mb-2">
      <SubSectionHeading 
        directory="reeti@root:/Tech_Stack~$"
        command="ls Security_Tools"
        description="List of Cybersecurity Tools"
        glowColor="cyan"
      />    
    </div>
    <ToolStackGrid />
  </div>

</section>


          {/*============= COMPETITIONS & ACHIEVEMENTS =============*/}
          {/* Enhanced Heading with Cyberpunk Style */}
          <div className="mb-8 group">
            <SectionHeading 
              directory="reeti@root:~$"
              command="cd Achievements"
              description="CTFs, Hackathons & Research"
              glowColor="cyan"
            />   
          </div>  

           <section className="flex flex-col mb-10 gap-8 ">
             {/* CERTIFICATES */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SectionHeading 
                    directory="reeti@root:/Achievements~$"
                    command="ls Certificate"
                    description="List of all Tools I know"
                    glowColor="cyan"
                  />  
              </div>   
              {/* <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg"> */}
                <AchCertCard />
              {/* </div> */}
            </div>
            


            {/* Research Paper */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SubSectionHeading 
                  directory="reeti@root:/Achievements~$"
                  command="ls Research_Papers"
                  description="List of all Tools I know"
                  glowColor="cyan"
                />    
            </div>   
              {/* <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg"> */}
                <ResearchCard />
              {/* </div> */}
            </div>

          </section>
 
          {/*============= Contact =============*/}
          <section className="flex flex-col mb-10 gap-1">
           
            {/* Heading */} 
            <div className="mb-8 group">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-black/60 border-2 border-cyan-400/30 backdrop-blur-lg w-fit cyber-glow-cyan hover:border-cyan-400/50 transition-all duration-300">
                <span className="text-cyan-400 font-mono font-bold">reeti@root:~$ /home/Contact </span>
                <span className="text-white font-mono">./Contact</span>
                <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm group-hover:bg-pink-400 transition-colors duration-300"></div>
              </div>
            </div>  

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
              <ContactCard /> 
            </div>
          </section>
  
        </section>
 

      </main>
    </>
  );
}



function HeroStyles() {
  return (
    <style jsx>{`
      @keyframes scan {
        0% {
          transform: translateY(0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateY(320px);
          opacity: 0;
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
          opacity: 0.3;
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
          opacity: 0.7;
        }
      }
      
      .animate-scan {
        animation: scan 3s linear infinite;
      }
      
      .animate-float {
        animation: float ease-in-out infinite;
      }
      
      .cyber-glow {
        text-shadow: 0 0 10px rgba(34, 211, 238, 0.5),
                    0 0 20px rgba(34, 211, 238, 0.3),
                    0 0 30px rgba(34, 211, 238, 0.1);
      }
      
      .cyber-card {
        border: 1px solid rgba(34, 211, 238, 0.1);
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }
      
      .cyber-card:hover {
        border-color: rgba(34, 211, 238, 0.3);
        box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
      }
    `}</style>
  );
}