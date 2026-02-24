// 'use client';
// import { motion } from "framer-motion"; 
// import ProjectCard from "@/components/Cards/ProjectCard";  
// import HackCard from "@/components/Cards/HackCard";
// import { useState, useEffect } from 'react';
// import { Terminal, Code, Trophy, Cpu } from 'lucide-react';
// import { TAB_CONFIG, Colors } from '@/constants/ColorScheme';


// export default function ProjectsPage() {
//   const [activeTab, setActiveTab] = useState('projects');

//   const tabs = [
//     { 
//       id: 'projects', 
//       label: TAB_CONFIG.projects.label, 
//       icon: <Code className="w-5 h-4" />,
//       color: TAB_CONFIG.projects.color 
//     },
//     { 
//       id: 'hackathons', 
//       label: TAB_CONFIG.hackathons.label, 
//       icon: <Trophy className="w-5 h-4" />,
//       color: TAB_CONFIG.hackathons.color 
//     },
//   ];

//   useEffect(() => {
//     // Scroll to top on page load
//     window.scrollTo(0, 0);
//   }, []);


//   return (
//     <main className="min-h-screen px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-20">
      

//       {/* Main Container */}
//       <div className="relative">
//         <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
        
//         <div className="">
//           {/* Page Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-10 text-center"
//           >
//             <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-6">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="text-cyan-400 font-mono">reeti@portfolio:~$</span>
//               <span className="text-white font-mono">./projects</span>
//               <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
//             </div>
            
//             <h1 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-wider mb-3">
//               PROJECTS 
//             </h1>
//             <p className="text-cyan-400/70 font-mono text-sm md:text-base mx-auto">
//               Cybersecurity applications, AI research tools, and development projects
//             </p>
//           </motion.div>

//           {/* Navigation Tabs */}
//           <div className="flex flex-wrap gap-3 mb-8 border-b border-cyan-500/20 pb-6">
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab.id;
              

//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-3 px-6 py-3 rounded-lg font-mono transition-all duration-300 border ${
//                     Colors.tab(tab.color, isActive)
//                   }`}
//                 >
//                   <span className={`${isActive ? '' : 'opacity-70'}`}>
//                     {tab.icon}
//                   </span>
//                   <span>{tab.label}</span>
//                   <span className={`text-xs px-3 py-1 rounded-full border ${
//                     Colors.badge(tab.color)
//                   }`}>
//                     {isActive ? 'ACTIVE' : 'VIEW'}
//                   </span>
//                 </button>
//               );
//             })}
            
//             {/* Stats Badge */}
//             <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-lg bg-black/50">
//               <Cpu className="w-4 h-4 text-green-400" />
//               <span className="text-xs text-green-400 font-mono">
//                 TOTAL: <span className="text-white">8+</span>
//               </span>
//             </div>
//           </div>

//           {/* Active Content Section */}
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className="mb-8"
//           >
//             {/* Content Header */}
//             <div className="flex items-center gap-3 mb-6 p-4 border border-cyan-500/20 rounded-xl bg-black/30 backdrop-blur-sm">
//               <div className={`p-2 rounded-lg border ${
//                 Colors.button(activeTab === 'projects' ? 'cyan' : 'purple')
//               }`}>
//                 {activeTab === 'projects' ? (
//                   <Terminal className="w-5 h-5 text-cyan-400" />
//                 ) : (
//                   <Trophy className="w-5 h-5 text-purple-400" />
//                 )}
//               </div>
//               <div>
//                 <h2 className={`text-lg font-bold font-mono ${
//                   activeTab === 'projects' ? 'text-cyan-400' : 'text-purple-400'
//                 }`}>
//                   {activeTab === 'projects' ? 'CYBERSECURITY PROJECTS' : 'HACKATHON PARTICIPATIONS'}
//                 </h2>
//                 <p className="text-white/70 font-mono text-sm">
//                   {TAB_CONFIG[activeTab as keyof typeof TAB_CONFIG].description}
//                 </p>
//               </div>
//               <span className="ml-auto text-xs text-white/50 font-mono px-3 py-1 border border-white/20 rounded-full">
//                 {activeTab === 'projects' ? 'PROJECTS_DB' : 'HACKATHONS_DB'}
//               </span>
//             </div>

//             {/* Content Cards */}
//             <div className="bg-black/30 backdrop-blur-sm">
//               {activeTab === 'projects' ? (
//                 <ProjectCard />
//               ) : (
//                 <HackCard />
//               )}
//             </div>
//           </motion.div>

          
 
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes scan {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
        
       
//       `}</style>
//     </main>
//   );
// }



'use client';
import PageWithTabs from '@/components/Templates/PageWithTabs';
import ProjectCard from "@/components/Cards/ProjectCard";  
import HackCard from "@/components/Cards/HackCard";
import { Code, Trophy, Cpu, Terminal } from 'lucide-react';

export default function ProjectsPage() {
  const tabs = [
    { 
      id: 'projects', 
      label: 'Projects', 
      color: 'cyan' as const,
      icon: <Code className="w-5 h-4" />,
      description: 'AI-driven security tools, forensic applications, and research projects',
      badge: 'DEV'
    },
    { 
      id: 'hackathons', 
      label: 'Hackathons', 
      color: 'purple' as const,
      icon: <Trophy className="w-5 h-4" />,
      description: 'CTF competitions, security challenges, and hackathon submissions',
      badge: 'CTF'
    },
  ];

  return (
    <PageWithTabs
      pageTitle="PROJECTS"
      pageCommand="./projects"
      pageDescription="Cybersecurity applications, AI research tools, and development projects"
      tabs={tabs}
      defaultTab="projects"
      stats={{
        icon: <Cpu className="w-4 h-4 text-green-400" />,
        label: 'TOTAL',
        value: '8+',
        color: 'green'
      }}
      footerNote={{
        title: '[ PROJECT DATABASE UPDATED REGULARLY ]',
        description: 'All projects include source code and detailed documentation'
      }}
      headerIcon={<Terminal className="w-5 h-5 text-cyan-400" />}
      onTabChange={(tab) => console.log(`Switched to ${tab} tab`)}
    >
      {(activeTab) => (
        activeTab === 'projects' ? <ProjectCard /> : <HackCard />
      )}
    </PageWithTabs>
  );
}