
import CyberpunkTerminal from "@/components/ui/CyberpunkTerminal";  

export default function Terminal() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 pt-24 min-h-screen">
      <section className="my-16">
        <div className="max-w-8xl mx-auto">
          
          <div className="rounded-2xl border border-cyan-500/20 shadow-lg overflow-hidden bg-[#0f1720]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/10 bg-[#111a22]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-mono text-cyan-400">
                  reeti@cybersec:~$
                </span>
              </div>

              <span className="text-xs text-cyan-400/60 font-mono">
                INTERACTIVE TERMINAL
              </span>
            </div>

            {/* Terminal Window */}
            <div className="h-[700px]">
              <CyberpunkTerminal />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}