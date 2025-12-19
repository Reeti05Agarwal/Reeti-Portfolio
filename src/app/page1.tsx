
'use client'; 
import TryhackmeBadge from "@/components/Icons/TryhackmeBadge";  
import TechStackGrid from "@/components/TechStack/TechStackGrid";
import SkillStackGrid from "@/components/TechStack/SkillStackGrid";
import ToolStackGrid from "@/components/TechStack/ToolStackGrid";  
import ContactCard from "@/components/Cards/ContactCard";   
import PinkTerminal from "@/components/TerminalUI/PinkTerminal";  
import DownloadButton from "@/components/Buttons/DownloadButton"; 
import SocialMediaButtons from "@/components/Buttons/SocialMediaButtons";    
import AchCtfCard from "@/components/Cards/AchCtfCard";
import HackCard from "@/components/Cards/HackCard";
import ResearchCard from "@/components/Cards/ResearchCard";
import CertCard from "@/components/Cards/CertCard"; 
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-20">
      
      {/* ============= HERO SECTION ============= */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Terminal Section - Takes 2/3 on desktop */}
          <div className="lg:w-2/3">
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-pink-300/20 border border-white/10 backdrop-blur-sm">
              <PinkTerminal />
            </div>
          </div>

          {/* Side Panel - Takes 1/3 on desktop */}
          <div className="lg:w-1/3">
            <div className="relative border-2 border-cyan-300/20 rounded-xl backdrop-blur-md p-6 shadow-lg shadow-cyan-400/10 
                         hover:shadow-cyan-400/20 hover:border-cyan-300/30 transition-all duration-300">
              
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-cyan-300/60"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-cyan-300/60"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-cyan-300/60"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-cyan-300/60"></div>
              
              {/* Content Stack */}
              <div className="flex flex-col items-center gap-8">
                
                {/* Social Media Buttons */}
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// social_links</span>
                  </div>
                  <SocialMediaButtons />
                </div>
                
                {/* Try Hack Me Badge */}
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// tryhackme_profile</span>
                  </div>
                  <div className="flex justify-center">
                    <TryhackmeBadge />
                  </div>
                </div>
                
                {/* Download Button */}
                <div className="w-full">
                  <div className="text-center mb-3">
                    <span className="text-cyan-300 text-sm font-mono">// resume_download</span>
                  </div>
                  <div className="flex justify-center">
                    <DownloadButton />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TECH STACK ============= */}
      <section className="mb-16">
        <SectionHeading 
          command="cd Tech_Stack"
          description="Explore my technical arsenal"
          glowColor="cyan"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          
          {/* Skills Stack */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <h3 className="text-cyan-300 font-mono font-bold">Skills</h3>
              </div>
              <SkillStackGrid />
            </div>
          </div>
          
          {/* Languages Stack */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <h3 className="text-purple-300 font-mono font-bold">Languages</h3>
              </div>
              <TechStackGrid />
            </div>
          </div>
          
          {/* Tools Stack */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <h3 className="text-pink-300 font-mono font-bold">Tools</h3>
              </div>
              <ToolStackGrid />
            </div>
          </div>
          
        </div>
      </section>

      {/* ============= ACHIEVEMENTS ============= */}
      <section className="mb-16">
        <SectionHeading 
          command="cd Achievements"
          description="CTFs, Hackathons & Research"
          glowColor="pink"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          
          {/* CTF Achievements */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-cyan-300 font-mono font-bold">CTF Competitions</h3>
                </div>
                <p className="text-white/60 text-sm">Capture The Flag achievements and rankings</p>
              </div>
              <AchCtfCard />
            </div>
          </div>
          
          {/* Hackathon Achievements */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <h3 className="text-blue-300 font-mono font-bold">Hackathons</h3>
                </div>
                <p className="text-white/60 text-sm">Competitions and collaborative projects</p>
              </div>
              <HackCard />
            </div>
          </div>
          
          {/* Research Achievements */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <h3 className="text-purple-300 font-mono font-bold">Research Papers</h3>
                </div>
                <p className="text-white/60 text-sm">Academic publications and research work</p>
              </div>
              <ResearchCard />
            </div>
          </div>
          
        </div>
      </section>

      {/* ============= CERTIFICATES ============= */}
      <section className="mb-16">
        <SectionHeading 
          command="ls Certificates"
          description="Official certifications and courses"
          glowColor="cyan"
        />
        
        <div className="mt-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-green-300 font-mono font-bold">Certifications</h3>
                </div>
                <button className="text-sm text-cyan-300 hover:text-cyan-200 font-mono px-3 py-1 border border-cyan-500/30 rounded hover:border-cyan-500/50 transition-colors">
                  view_all
                </button>
              </div>
              <CertCard />
            </div>
          </div>
        </div>
      </section>

      {/* ============= CONTACT ============= */}
      <section className="mb-16">
        <SectionHeading 
          command="./contact.sh"
          description="Get in touch with me"
          glowColor="purple"
        />
        
        <div className="mt-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <h3 className="text-pink-300 font-mono font-bold">Contact Information</h3>
              </div>
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}