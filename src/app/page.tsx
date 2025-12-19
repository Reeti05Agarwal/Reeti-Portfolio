'use client'; 
import TryhackmeBadge from "@/components/Icons/TryhackmeBadge";  
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid";  
import ContactCard from "@/components/Cards/ContactCard";   
import PinkTerminal from "@/components/TerminalUI/PinkTerminal";  
import DownloadButton from "@/components/Buttons/DownloadButton"; 
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";    
import HackCard from "@/components/Cards/HackCard";
import ResearchCard from "@/components/Cards/ResearchCard";
import AchCertCard from "@/components/Cards/AchCertCard"; 
import AchCtfCard from "@/components/Cards/AchCtfCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SubSectionHeading from "@/components/ui/SubSectionHeading";

export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20">  
        <section className="flex flex-col gap-6">

          {/*============= ABOUT =============*/}
          <section className="flex mb-10">
            <div className="flex flex-col lg:flex-row gap-10 ">
              
              {/* Terminal Section */}
              <div className="flex justify-center items-center rounded-2xl shadow-lg shadow-pink-300/20 md:basis-4/5">
                <PinkTerminal />
              </div>

              {/* Badge + Socials + Download Button */}
              {/* <div className="flex flex-col md:flex-row lg:flex-col item-start sm:items-center md:items-center 
              lg:item-start justify-centre  md:justify-between lg:justify-start md:basis-1/5 gap-y-8 border-2 
              p-4 rounded-lg border-cyan-300/20 backdrop-blur-md shadow-lg shadow-cyan-400/20"> 
              

                <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-cyan-300 opacity-60"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-cyan-300 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-cyan-300 opacity-60"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-cyan-300 opacity-60"></div>
                <div className="flex flex-col items-center gap-6">
          
 
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// social_links</span>
                  </div>
                  <SocialMediaButtons />
                </div>
       
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// tryhackme_profile</span>
                  </div>
                  <div className="flex justify-center">
                    <TryhackmeBadge />
                  </div>
                </div>
                
          
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// resume_download</span>
                  </div>
                  <div className="flex justify-center">
                    <DownloadButton />
                  </div>
                </div>
              </div>  */}

             
              <div className="relative">
                
                {/* Corner accents (more subtle) */}
                {/* <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-cyan-300/40"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-cyan-300/40"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-cyan-300/40"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-cyan-300/40"></div> */}
                
                {/* Content container */}
                <div className="flex flex-col items-center gap-8">
                  
                  {/* Social Media Buttons (unchanged) */}
                  <div className="w-full">
                    <div className="text-center mb-3">
                      <span className="text-cyan-300 text-sm font-mono tracking-wider">social_links</span>
                    </div>
                    <SocialMediaButtons />
                  </div>

                  {/* Download Button - Redesigned to match image style */}
                  <div className="w-full">
                    
                    <div className="flex justify-center">
                      <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-cyan-300/30 rounded-xl p-4 shadow-lg hover:border-cyan-300/50 hover:shadow-cyan-400/20 transition-all duration-300 w-full max-w-xs">
                        <div className="flex flex-col items-center gap-4">
                          <div className="text-center">
                            <div className="text-cyan-300 font-mono text-sm mb-1">Resume</div>
                            
                          </div>
                          
                          {/* PDF Icon */}
                          <div className="relative">
                            <div className="w-16 h-20 bg-gradient-to-b from-red-500/20 to-red-600/30 border border-red-400/30 rounded-lg flex items-center justify-center">
                              <div className="text-red-400 font-bold text-2xl">PDF</div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Download Button */}
                          <button
                            onClick={() => window.open("/resume.pdf", "_blank")}
                            className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-300/40 text-cyan-300 font-mono text-sm rounded-lg hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-300/60 hover:text-cyan-200 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-cyan-400/20"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Open My Resume
                          </button>
                        </div>
                      </div>
                    </div>
                  
                  {/* TryHackMe Badge - Redesigned to match image style */}
                  <div className="w-full">
                 
                    <div className="flex justify-center">
                      <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-cyan-300/30 rounded-xl p-4 shadow-lg hover:border-cyan-300/50 hover:shadow-cyan-400/20 transition-all duration-300 w-full max-w-xs">
                        <div className="flex flex-col items-center gap-3">
                          <div className="text-cyan-300 font-mono text-sm text-center">TryHackMe</div>
                           
                          <button 
                            className="text-xs text-cyan-300 hover:text-cyan-200 font-mono border border-cyan-300/30 px-3 py-1.5 rounded hover:border-cyan-300/50 hover:bg-cyan-300/10 transition-all"
                            onClick={() => window.open("https://tryhackme.com/p/ReetiAgarwal", "_blank")}
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
  
                </div>
              </div>


              </div>
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



