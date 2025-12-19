
export default function HackTheBoxBadge() {
    return (
        <div className="flex justify-center">
            <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-cyan-300/30 rounded-xl p-4 shadow-lg hover:border-cyan-300/50 hover:shadow-cyan-400/20 transition-all duration-300 w-full max-w-xs">
            <div className="flex flex-col items-center gap-3">
                <div className="text-cyan-300 font-mono text-sm text-center">Hack The Box</div>
                
                <button 
                className="text-xs text-cyan-300 hover:text-cyan-200 font-mono border border-cyan-300/30 px-3 py-1.5 rounded hover:border-cyan-300/50 hover:bg-cyan-300/10 transition-all"
                onClick={() => window.open("https://app.hackthebox.com/users/1875214", "_blank")}
                >
                View Profile
                </button>
            </div>
            </div>
        </div>
    );
}