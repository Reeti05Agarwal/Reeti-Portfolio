import { motion } from "framer-motion";   
import CtfCard from "@/components/Cards/CtfCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CyberpunkTerminal from "@/components/ui/CyberpunkTerminal";  

export default function Terminal() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 pt-24">
       <section className="my-16">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
                  
                  <div className="border border-cyan-500/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-b border-cyan-500/20 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="text-cyan-400 font-mono text-sm">reeti@cybersec:~$ portfolio_terminal</span>
                      </div>
                      <span className="text-xs text-cyan-400/60 font-mono">[INTERACTIVE]</span>
                    </div>
                    <div className="h-[400px]">
                      <CyberpunkTerminal />
                    </div>
                  </div>
                </div>
              </section>
      
          
    </main>
  );
}
