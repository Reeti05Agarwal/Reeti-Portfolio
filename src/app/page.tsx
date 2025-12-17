'use client'; 
import TryhackmeBadge from "@/components/Icons/TryhackmeBadge";  
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid";  
import ContactCard from "@/components/Cards/ContactCard";   
import PinkTerminal from "@/components/TerminalUI/PinkTerminal";  
import DownloadButton from "@/components/Buttons/DownloadButton"; 
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";  
import TerminalHeading from "@/components/TerminalUI/TerminalHeading";
import BlueBotton from "@/components/Buttons/BlueButton";
import BlogCard from "@/components/Cards/BlogCard";
import TerminalHeading2 from "@/components/TerminalUI/TerminalHeading2"; 
import RecentProjects from "@/components/Cards/RecentProjects";
import RecentExperience from "@/components/Cards/RecentExperience";
import CtfCard from "@/components/Cards/CtfCard";
import HackCard from "@/components/Cards/HackCard";
import ResearchCard from "@/components/Cards/ResearchCard";
import CertCard from "@/components/Cards/CertCard"; 


export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-90 pt-24">  
        <section className="flex flex-col gap-6">

          {/*============= ABOUT =============*/}
          <section className="flex mb-10">
            <div className="flex flex-col lg:flex-row gap-10 ">
              
              {/* Terminal Section */}
              <div className="flex justify-center items-center rounded-2xl shadow-lg shadow-pink-300/20 md:basis-4/5">
                <PinkTerminal />
              </div>

              {/* Badge + Socials + Download Button */}
              <div className="flex flex-col md:flex-row lg:flex-col item-start sm:items-center md:items-center 
              lg:item-start justify-centre  md:justify-between lg:justify-start md:basis-1/5 gap-y-8 border-2 
              p-4 rounded-lg border-cyan-300/20 backdrop-blur-md shadow-lg shadow-cyan-400/20">
              {/* <div className="flex flex-col md:flex-row lg:flex-col items-start sm:items-center md:items-center lg:items-start 
              justify-between lg:justify-start md:basis-1/5 gap-8 border-2 p-6 rounded-xl border-cyan-400/30 backdrop-blur-lg 
              shadow-lg shadow-cyan-400/20 bg-gradient-to-br from-black/60 to-cyan-900/20 hover:shadow-cyan-400/30 transition-all duration-300"> */}
              

                
                <div className="flex flex-col items-center gap-6">
                  {/* Social Media */}
                  <div>
                    <SocialMediaButtons />
                  </div>
                  {/* Try Hack Me */}
                  <div>
                    <TryhackmeBadge />
                  </div>
                </div>
              
                {/* Download Button */}
                <div>
                  <DownloadButton />
                </div> 
              </div> 
            </div>
          </section>

          {/* ============= Competitions & Achivements ============= */}
          {/* Heading */}
          {/* <div className="mb-4">
            <TerminalHeading2 pre_text="reeti@root:~$" text=" cd Achievements" />
          </div>  

          <section className="flex flex-col mb-10 gap-8 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg"> */}
             
            {/* CTF */}
            {/* <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading 
                  head_text="reeti@root:/home/Achievements~$" 
                  command="ls "
                  bold_text="CTF" 
                />
              </div> 
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <CtfCard />
              </div>
            </div>
             */}
            {/* Hackathon Cards*/} 
            {/* <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading 
                  head_text="reeti@root:/home/Achievements~$"
                  command="ls " 
                  bold_text="Hackathon_" 
                />
              </div> 
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <HackCard />
              </div>
            </div> */}

            {/* Research Paper */}
            {/* <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/Achievements~$" 
                command="ls "
                bold_text="Research_Paper" 
                />
              </div> 
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <ResearchCard />
              </div>
            </div> */}

          {/* </section> */}

          {/*============= COMPETITIONS & ACHIEVEMENTS =============*/}
          {/* Enhanced Heading with Cyberpunk Style */}
          <div className="mb-8 group">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-black/60 border-2 border-cyan-400/30 backdrop-blur-lg w-fit cyber-glow-cyan hover:border-cyan-400/50 transition-all duration-300">
              <span className="text-cyan-400 font-mono font-bold">reeti@root:~$</span>
              <span className="text-white font-mono">cd Achievements</span>
              <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm group-hover:bg-pink-400 transition-colors duration-300"></div>
            </div>
          </div>  

          {/* Enhanced Main Section */}
          <section className="flex flex-col mb-16 gap-10 p-8 rounded-2xl border-2 border-cyan-400/40 backdrop-blur-xl shadow-2xl shadow-cyan-400/20 bg-gradient-to-br from-black/60 to-cyan-900/20 relative overflow-hidden">
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }} />
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50"></div>

            {/* CTF Section */}
            <div className="flex flex-col gap-6 group/section relative z-10">
              <div className="mb-2"> 
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-pink-400/30 w-fit">
                  <span className="text-pink-400 font-mono">reeti@root:/home/Achievements~$</span>
                  <span className="text-white font-mono">ls</span>
                  <span className="text-pink-300 font-bold font-mono">CTF</span>
                  <div className="w-2 h-5 bg-pink-400 animate-pulse ml-1"></div>
                </div>
              </div>
            
              {/* Enhanced Cards Container */}
              <div className="flex flex-col gap-8 p-6 rounded-xl border-2 border-pink-400/30 backdrop-blur-lg shadow-lg shadow-pink-400/20 bg-black/40 group-hover/section:shadow-pink-400/30 group-hover/section:border-pink-400/40 transition-all duration-500 hover-lift">
                <CtfCard />
              </div>
            </div>
            
            {/* Hackathon Section */}
            <div className="flex flex-col gap-6 group/section relative z-10">
              <div className="mb-2"> 
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-purple-400/30 w-fit">
                  <span className="text-purple-400 font-mono">reeti@root:/home/Achievements~$</span>
                  <span className="text-white font-mono">ls</span>
                  <span className="text-purple-300 font-bold font-mono">Hackathon_</span>
                  <div className="w-2 h-5 bg-purple-400 animate-pulse ml-1"></div>
                </div>
              </div>
            
              {/* Enhanced Cards Container */}
              <div className="flex flex-col gap-8 p-6 rounded-xl border-2 border-purple-400/30 backdrop-blur-lg shadow-lg shadow-purple-400/20 bg-black/40 group-hover/section:shadow-purple-400/30 group-hover/section:border-purple-400/40 transition-all duration-500 hover-lift">
                <HackCard />
              </div>
            </div>

            {/* Research Paper Section */}
            <div className="flex flex-col gap-6 group/section relative z-10">
              <div className="mb-2"> 
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-cyan-400/30 w-fit">
                  <span className="text-cyan-400 font-mono">reeti@root:/home/Achievements~$</span>
                  <span className="text-white font-mono">ls</span>
                  <span className="text-cyan-300 font-bold font-mono">Research_Paper</span>
                  <div className="w-2 h-5 bg-cyan-400 animate-pulse ml-1"></div>
                </div>
              </div>
            
              {/* Enhanced Cards Container */}
              <div className="flex flex-col gap-8 p-6 rounded-xl border-2 border-cyan-400/30 backdrop-blur-lg shadow-lg shadow-cyan-400/20 bg-black/40 group-hover/section:shadow-cyan-400/30 group-hover/section:border-cyan-400/40 transition-all duration-500 hover-lift">
                <ResearchCard />
              </div>
            </div>

          </section>
          


          {/*============= TECH STACK =============*/}
          {/* Heading */}
          <div className="mb-1">
            <TerminalHeading2 pre_text="reeti@root:~$" text=" cd tech_stack" />
          </div> 
          {/* Tech Stack Section */}
          <section className="flex flex-col gap-8 mb-10 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">

            {/* Skill Stack */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading 
                head_text="reeti@root:/home/tech_stack~$" 
                command="ls "
                bold_text="Skills" />
              </div>
              <div className=" md:basis-3/4 border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <SkillStackGrid />
              </div>
            </div>

            {/* Language Stack */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4 "> 
                <TerminalHeading 
                head_text="reeti@root:/home/tech_stack~$" 
                command="ls "
                bold_text="Languages" />
              </div>
              
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <TechStackGrid />
              </div>
            </div>

            {/* Tool Stack */}
            <div className="flex flex-col md:basis-1/3  gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading 
                head_text="reeti@root:/home/tech_stack~$" 
                command="ls "
                bold_text="Tools" />
              </div>
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <ToolStackGrid />
              </div>
            </div>

          </section>


          {/*============= Projects =============*/}
          <section className="flex flex-col mb-10 gap-1">
             
            {/* Heading */}
            <div className="mb-4">
              <TerminalHeading2 pre_text="reeti@root:~$" text=" ls PROJECTS -n 4" />
            </div> 

            {/* View All Button */}
            <div className="mb-4">
                <a href="/projects">
                  <BlueBotton text="View All Projects ->"/>
                  {/* <MoreButton text="View All Projects"/> */}

                </a>
            </div>
           
            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
              <RecentProjects />
            </div>
          </section>


          {/*============= Experience =============*/}
          <section className="flex flex-col mb-10 gap-1">
             
            {/* Heading */}
            {/* <div className="mb-4">
              <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Experience --active" />
            </div> */}
            <div className="mb-4">
              <TerminalHeading2 pre_text="reeti@root:~$" text=" ls Experience --active" />
            </div>

            {/* View All Button */}
            <div className="mb-4">
              <a href="/experience">
                <BlueBotton text="View All Experience ->"/>
              </a>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
              <RecentExperience />
            </div>
            
          </section>

          {/*============= Blogs =============*/}
          <section className="flex flex-col mb-10 gap-1">
              
            {/* Heading */}
            <div className="mb-4">
                <TerminalHeading2 pre_text="reeti@root:~$ /home/ " text="ls Blogs -n 4" />
            </div>
 
            {/* View All Button */}
            <div className="mb-4">
                <a href="/projects">
                  <BlueBotton text="View All Blogs ->"/>
                </a>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
              <BlogCard />
            </div>
            
          </section>

          {/*============= Certificates =============*/}
          <section className="flex flex-col mb-10 gap-1">
             
            {/* Heading */}
            <div className="mb-4">
              <TerminalHeading2 pre_text="reeti@root:~$" text=" ls CERTIFICATES -n 4" />
            </div> 

            {/* View All Button */}
            <div className="mb-4">
                <a href="/projects">
                  <BlueBotton text="View All Projects ->"/>
                  {/* <MoreButton text="View All Projects"/> */}

                </a>
            </div>
           
            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
              <CertCard />
            </div>
          </section>
          
          
          {/*============= Contact =============*/}
          <section className="flex flex-col mb-10 gap-1">
           
            {/* Heading */}
            <div className="mb-4">
              <TerminalHeading2 pre_text="reeti@root:~$ /home/ " text="ls Contact" />
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