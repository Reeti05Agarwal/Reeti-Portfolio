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


export default function Home() {
  return (
    <>
      {/* <Navbar />  */}
      <main className="px-70 pt-24">

        {/*============= ABOUT =============*/}
        <section className="flex flex-col gap-6">
          <section className="flex mb-10">
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              
              {/* Terminal Section */}
              <div className="flex justify-center items-center rounded-2xl shadow-lg shadow-pink-300/20">
                <PinkTerminal />
              </div>

              {/* Badge + Socials + Download Button */}
              <div className="flex flex-col items-center justify-between md:basis-1/5 gap-y-4">
                <div className="shadow-lg shadow-purple-300/20 rounded-2xl">
                  {/* <SocialGlowButtons /> */}
                  <SocialMediaButtons />
                </div>
                <div>
                  <DownloadButton />
                </div> 
              </div>

              {/* Github Card */}
              <div className="flex flex-col md:basis-1/5 h-full">
                <div className="h-full items-stretch  ">
                  <div className="w-full">
                    <GithubCard /> 
                  </div>
                  <div  className="w-full">
                    <TryhackmeBadge />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Achievement Section */}
          <section className="flex mb-10">
            {/* <Achievement /> */}
            {/* <BadgesSection /> */}
          </section>
  
   
          {/* Tech Stack Section */}
          <section className="flex  gap-8 mb-10">

            {/* Language Stack */}
            <div className="flex flex-col md:basis-1/3   gap-6">
              <div className="mb-4 "> 
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls Tech_Stack/_Languages" />
              </div>
              
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <TechStackGrid />
              </div>
            </div>

            {/* Skill Stack */}
            <div className="flex flex-col md:basis-1/3   gap-6">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls Tech_Stack/_Skills" />
              </div>
              <div className=" md:basis-3/4 border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <SkillStackGrid />
              </div>
            </div>

            {/* Tool Stack */}
            <div className="flex flex-col md:basis-1/3  gap-6">
              <div className="mb-4"> 
                <TerminalHeading head_text="reeti@root:/home/tech_stack~$" text="ls Tech_Stack/_Tools" />
              </div>
              <div className="border-2 border-gray-200/20 p-3 rounded-lg backdrop-blur-xl shadow-lg shadow-purple-300/20">
                <ToolStackGrid />
              </div>
            </div>

          </section>


          {/*============= Projects =============*/}
          <section className="flex flex-col mb-10 gap-4">
            <div className="flex gap-6 md:basis-1/4">
              {/* Heading */}
              <div className="mb-4">
                <div className="mb-4 ">
                   <TerminalHeading2 pre_text="reeti@root:~$" text=" ls PROJECTS -n 4" />
                </div>
              </div>

              {/* View All Button */}
              <div className="mb-4">
                  <a href="/projects">
                    {/* <BlueBotton text="View All Projects"/> */}
                    <MoreButton text="View All Projects"/>

                  </a>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4">
              <RecentProjects />
            </div>
          </section>


          {/*============= Experience =============*/}
          <section className="flex mb-10 gap-4">
            <div className="flex flex-col gap-6 md:basis-1/4">
              
              {/* Heading */}
              <div className="mb-4">
                  <div className="mb-4 ">
                   <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Experience --active" />
                </div>
              </div>

              {/* View All Button */}
              <div className="mb-4">
                  <a href="/projects">
                    <BlueBotton text="View All Experience"/>
                  </a>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4">
              <ExperienceCard />
            </div>
            
          </section>

          {/*============= Blogs =============*/}
          <section className="flex mb-10 gap-4">
            <div className="flex flex-col gap-6 md:basis-1/4">
              
              {/* Heading */}
              <div className="mb-4">
                  <div className="mb-4 ">
                   <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Blogs -n 2" />
                </div>
              </div>

              {/* View All Button */}
              <div className="mb-4">
                  <a href="/projects">
                    <BlueBotton text="View All Blogs"/>
                  </a>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4">
              <BlogCard />
            </div>
            
          </section>
          
          
          {/*============= Contact =============*/}
          <section className="flex mb-10 gap-4">
            <div className="flex flex-col gap-6 md:basis-1/4">
              {/* Heading */}
              <div className="mb-4">
                 <div className="mb-4 ">
                   <TerminalHeading head_text="reeti@root:~$ /home/ " text="ls Contact" />
                </div>
              </div>

              {/* View All Button */}
              <div className="mb-4">
                  <a href="/contact">
                    <BlueBotton text="Contact"/>
                  </a>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6 md:basis-3/4">
              <ContactCard /> 
            </div>
          </section>
  
        </section>
 

      </main>
    </>
  );
}