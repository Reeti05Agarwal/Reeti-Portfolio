'use client'; 
import TryhackmeBadge from "@/components/Icons/TryhackmeBadge"; 
import Link from "next/link"; 
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid"; 
import ProjectCard from "@/components/Cards/ProjectCard";
import ContactCard from "@/components/Cards/ContactCard"; 
import ExperienceCard from "@/components/Cards/ExperienceCard";   
import PinkTerminal from "@/components/TerminalUI/PinkTerminal";
import GithubCard from "@/components/Github/GithubCard";  
import DownloadButton from "@/components/Buttons/DownloadButton"; 
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";  
import TerminalHeading from "@/components/TerminalUI/TerminalHeading";
import BlueBotton from "@/components/Buttons/BlueButton";
import BlogCard from "@/components/Cards/BlogCard";
import TerminalHeading2 from "@/components/TerminalUI/TerminalHeading2";
import MoreButton from "@/components/Buttons/MoreButton";
import RecentProjects from "@/components/Cards/RecentProjects";
import RecentExperience from "@/components/Cards/RecentExperience";
import CtfCard from "@/components/Cards/CtfCard";
import HackCard from "@/components/Cards/HackCard";
import ResearchCard from "@/components/Cards/ResearchCard";
import CertCard from "@/components/Cards/CertCard";
import { Badge } from "lucide-react";


export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">  
        <section className="flex flex-col gap-6">

          {/*============= ABOUT =============*/}
          <section className="flex mb-10">
            <div className="flex flex-col lg:flex-row gap-10 ">
              
              {/* Terminal Section */}
              <div className="flex justify-center items-center rounded-2xl shadow-lg shadow-pink-300/20 md:basis-4/5">
                <PinkTerminal />
              </div>

              {/* Badge + Socials + Download Button */}
              <div className="flex flex-col md:flex-row lg:flex-col item-start sm:items-center md:items-center lg:item-start justify-centre  md:justify-between lg:justify-start md:basis-1/5 gap-y-8 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                
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

          {/*============= Competitions & Achivements =============*/}
          {/* Heading */}
          <div className="mb-4">
            <TerminalHeading2 pre_text="reeti@root:~$" text=" cd Achievements" />
          </div>  
          <section className="flex flex-col mb-10 gap-8 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
             
            {/* CTF */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/Achievements~$" text="ls _CTF_" />
              </div>
            
              {/* Cards */}
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <CtfCard />
              </div>
            </div>
            
            {/* Hackathon Cards*/} 
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/Achievements~$" text="ls _Hackathon_" />
              </div>
            
              {/* Cards */}
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
                <HackCard />
              </div>
            </div>

            {/* Research Paper */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/Achievements~$" text="ls _Research_Paper_" />
              </div>
            
              {/* Cards */}
              <div className="flex flex-col gap-6 md:basis-3/4 border-2 p-4 rounded-lg border-gray-200/20 backdrop-blur-md shadow-lg">
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
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls _Skills_" />
              </div>
              <div className=" md:basis-3/4 border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <SkillStackGrid />
              </div>
            </div>

            {/* Language Stack */}
            <div className="flex flex-col md:basis-1/3 gap-0.1">
              <div className="mb-4 "> 
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls _Languages_" />
              </div>
              
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <TechStackGrid />
              </div>
            </div>

            {/* Tool Stack */}
            <div className="flex flex-col md:basis-1/3  gap-0.1">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls _Tools_" />
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