'use client'; 
import TryhackmeBadge from "@/components/Buttons/TryHackMeBadge";  
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid";  
import ContactCard from "@/components/Cards/ContactCard";   
import PinkTerminal from "@/components/ui/PinkTerminal";  
import DownloadButton from "@/components/Buttons/DownloadButton"; 
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";    
import HackCard from "@/components/Cards/HackCard";
import ResearchCard from "@/components/Cards/ResearchCard";
import AchCertCard from "@/components/Cards/AchCertCard"; 
import AchCtfCard from "@/components/Cards/AchCtfCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SubSectionHeading from "@/components/ui/SubSectionHeading";
import HackTheBoxBadge from "@/components/Buttons/HackTheBoxBadge";

export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">  
        <section className="flex flex-col gap-6">

          {/*============= ABOUT =============*/}
          <section className="flex mb-1">
            <div className="flex flex-col lg:flex-row gap-10 ">
              
              {/* Terminal Section */}
              <div className="flex justify-center items-center md:basis-4/5">
                <PinkTerminal/>
              </div>
 
              <div className="relative">
                
                {/* Content container */}
                <div className="flex flex-col items-center gap-8">
                  
                  {/* Social Media Buttons (unchanged) */}
                  <div className="w-full"> 
                    <SocialMediaButtons />
                  </div>

                  {/* Download Button - Redesigned to match image style */}
                  <div className="w-full"> 
                    <DownloadButton/>
                  </div> 
                </div>
              </div> 
              </div>
            
      
          </section>
          <section className="flex flex-col gap-4"> 
              <div className="">
                <TryhackmeBadge/>
              </div> 
              <div>
                <HackTheBoxBadge />
              </div> 
          </section>

          {/* <section className="flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              
 
              <div className="flex items-center gap-6 p-6 sm:p-8 rounded-xl bg-black/50 border border-green-300/20 hover:border-green-300/40 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 w-full max-w-md">
                <div className="text-cyan-300">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                    
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-cyan-300 font-mono">TryHackMe</h3>
                    <p className="text-white/60 text-sm">Security Learning Platform</p>
                  </div>
              
                  <a 
                    href="https://tryhackme.com/p/ReetiAgarwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200 hover:underline transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
              
            
              <div className="flex items-center gap-6 p-6 sm:p-8 rounded-xl bg-black/50 border border-green-300/20 hover:border-green-300/40 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 w-full max-w-md">
                <div className="text-green-400">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="currentColor" viewBox="0 0 24 24">
                
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-green-300 font-mono">HackTheBox</h3>
                    <p className="text-white/60 text-sm">Penetration Testing Labs</p>
                  </div>
          
                  <a 
                    href="YOUR_HACKTHEBOX_PROFILE_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-green-300 hover:text-green-200 hover:underline transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
              
            </div>
          </section>
           */}

  

          {/*============= TECH STACK =============*/} 
          <SectionHeading 
              directory="reeti@root:~$"
              command="cd Tech_Stack"
              description="Explore my technical arsenal"
              glowColor="cyan"
          />  


          {/* Tech Stack Section */}
          <section className="flex flex-col gap-8 mb-10 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
            
            {/* Skill Stack */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              
              <div className="mb-2"> 
                <SubSectionHeading 
                  directory="reeti@root:/Tech_Stack~$"
                  command="ls Skills"
                  description="List of my Skills"
                  glowColor="cyan"
                /> 
                 
              </div>

              <div className=" md:basis-3/4 border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <SkillStackGrid />
              </div>
            </div>

            {/* Language Stack */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-2"> 
                <SubSectionHeading 
                  directory="reeti@root:/Tech_Stack~$"
                  command="ls Languages"
                  description="List of all Languages I know"
                  glowColor="cyan"
                />  
              </div>
              
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <TechStackGrid />
              </div>
            </div>

            {/* Tool Stack */}
            <div className="flex flex-col md:basis-1/3  gap-0.1">
              <div className="mb-2">
                <SubSectionHeading 
                  directory="reeti@root:/Tech_Stack~$"
                  command="ls Tools"
                  description="List of all Tools I know"
                  glowColor="cyan"
                />    
              </div>
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <ToolStackGrid />
              </div>
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

           <section className="flex flex-col mb-10 gap-8 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
             
            {/* CERTIFICATES */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SubSectionHeading 
                    directory="reeti@root:/Achievements~$"
                    command="ls Certificate"
                    description="List of all Tools I know"
                    glowColor="cyan"
                  />  
              </div>   
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <AchCertCard />
              </div>
            </div>

            {/* CTF */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SubSectionHeading 
                  directory="reeti@root:/Achievements~$"
                  command="ls CTF"
                  description="List of all Tools I know"
                  glowColor="cyan"
                />    
              </div>   
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <AchCtfCard />
              </div>
            </div>
            
            {/* Hackathon Cards*/} 
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-8 group">
                <SubSectionHeading 
                  directory="reeti@root:/Achievements~$"
                  command="ls Hackathon"
                  description="List of all Tools I know"
                  glowColor="cyan"
                />    
            </div>   
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <HackCard />
              </div>
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
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <ResearchCard />
              </div>
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



