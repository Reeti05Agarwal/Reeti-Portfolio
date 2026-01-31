export default function HackTheBoxBadge() {
    return (
        <div className="group relative">
            {/* Background Glow Effect - Purple/Blue theme */}
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Main Badge Container */}
            <div className="relative bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 w-full max-w-xs overflow-hidden">
                
                {/* Scan Line Effect - Purple theme */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]"></div>
                
                {/* Corner Decorations - Purple/Blue theme */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-purple-400/50 rounded-tl"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-blue-400/50 rounded-tr"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-purple-400/50 rounded-bl"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-blue-400/50 rounded-br"></div>
                
                {/* Content */}
                <div className="flex flex-col items-center gap-4">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            {/* Icon Background - Purple theme */}
                            <div className="absolute -inset-3 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {/* HackTheBox Icon */}
                            <div className="relative p-3 bg-gradient-to-br from-purple-900/40 to-blue-700/30 border border-purple-500/30 rounded-xl">
                                <div className="text-2xl text-purple-300">⚔️</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-purple-400 font-mono text-lg font-bold tracking-wider">HACKTHEBOX</div>
                            <div className="text-xs text-blue-400/70 font-mono">PENETRATION TESTING</div>
                        </div>
                    </div>
                    
                    {/* Status Indicator - Blue theme */}
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-blue-500/30 rounded-full">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-blue-400 font-mono">ELITE HACKER</span>
                    </div>
                    
                    {/* Profile Button - Purple/Blue theme */}
                    <button 
                        className="relative w-full px-6 py-3 text-purple-300 hover:text-purple-200 font-mono text-sm border border-purple-500/40 rounded-lg hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] bg-gradient-to-r from-purple-900/20 via-black/30 to-purple-900/20 hover:from-purple-900/30 hover:via-black/40 hover:to-purple-900/30 transition-all duration-300 group/btn overflow-hidden"
                        onClick={() => window.open("https://app.hackthebox.com/users/1875214", "_blank")}
                    >
                        {/* Button Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-purple-500/10 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Button Content */}
                        <div className="relative z-10 flex items-center justify-center gap-2">
                            <span className="font-bold">$ ./htb_profile</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                />
                            </svg>
                        </div>
                        
                        {/* Button Scan Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-[scan_1s_linear]"></div>
                    </button>
                    
                    {/* Footer Stats */}
                    <div className="flex items-center justify-center gap-4 text-xs text-purple-400/60 font-mono mt-2">
                        <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            MACHINES
                        </span>
                        <span className="text-purple-400/30">|</span>
                        <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            FORTRESS
                        </span>
                        <span className="text-purple-400/30">|</span>
                        <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                            BATTLEGROUNDS
                        </span>
                    </div>
                </div>
                
                {/* Binary Code Decoration */}
                <div className="absolute -bottom-2 -right-2 text-[8px] text-purple-400/20 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    01001000 01010100 01000010
                </div>
            </div>
            
            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}