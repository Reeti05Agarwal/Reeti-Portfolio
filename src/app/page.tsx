'use client';  
import StatsSection from '@/components/Sections/StatsSection';  
import HeroLeftContent from '@/components/ui/HeroLeftContent';
import HeroProfilePicture from '@/components/ui/ProfilePicture';
import TechStackSection from "@/components/Sections/TechStackSection";
import AchievementSection from "@/components/Sections/AchievementSection";
import ContactSection from "@/components/Sections/ContactSection"


export default function Home() {
  return (
    <>
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20 relative">  
        
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="relative bg-gradient-to-br from-black/40 via-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 transition-all duration-500 overflow-hidden border border-white/10 hover:border-cyan-500/30">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(255,255,255,0.05) 100px, transparent 1px),
                    linear-gradient(0deg, rgba(255,255,255,0.05) 100px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
          
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <HeroLeftContent />
                <HeroProfilePicture />
              </div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-3 h-3 border-l border-t border-cyan-500/50 rounded-tl pointer-events-none"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-r border-t border-cyan-500/50 rounded-tr pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-l border-b border-cyan-500/50 rounded-bl pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-r border-b border-cyan-500/50 rounded-br pointer-events-none"></div>
          </div>
 
        </section>
 
        {/* Stats Section*/}
        <section className="my-16">
          <div className="md:col-span-2 lg:col-span-3">
            <StatsSection />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="my-16">
          <TechStackSection />
        </section>

        {/* Achievements Section */}
        <section className="my-16">
           <AchievementSection/>
        </section>

        {/* Contact Section */}
        <section className="my-16">
          <ContactSection/>
        </section>
      </main>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
      `}</style>
    </>
  );
}