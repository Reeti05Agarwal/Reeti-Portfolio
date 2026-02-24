import ContactCard from "@/components/Cards/ContactCard";     


export default function ContactSection(){
    return (
        <section>
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10 rounded-2xl blur-2xl -z-10"></div>
                
                <div className="border border-cyan-500/20 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                    {/* Contact Header */}
                    <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 font-mono">reeti@cybersec:~$</span>
                        <span className="text-white font-mono">./connect</span>
                        <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-white font-mono tracking-wider">
                        CONNECT WITH ME
                    </h2>
                    <p className="text-cyan-400/70 font-mono text-sm mt-2">
                        Let&apos;s discuss cybersecurity, AI research, or potential collaborations
                    </p>
                    </div>
    
                    {/* Contact Content */}
                    <div className="max-w-4xl mx-auto">
                    <ContactCard />
                    </div>
    
                    {/* Contact Footer */}
                    <div className="mt-10 pt-8 border-t border-cyan-500/20">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
                        <div className="text-white/60">
                        [SYSTEM: CONNECTIONS_OPEN]
                        </div>
                        <div className="flex items-center gap-4">
                        <span className="text-green-400 flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            RESPONSE_TIME: 
                        </span>
                        <span className="text-cyan-400">|</span>
                        <span className="text-cyan-400/70">
                            Last online: Today
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}