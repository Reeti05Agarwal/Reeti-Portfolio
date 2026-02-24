
import ResearchCard from "@/components/Cards/ResearchCard"; 
import AchCertCard from "@/components/Cards/AchCertCard";
import CtfCard from "@/components/Cards/CtfCard";
import HackCard from "@/components/Cards/HackCard";
import { useState } from 'react';

export default function AchievementSection() {
    const [activeAchievementTab, setActiveAchievementTab] = useState('ctf');

    return (
        <section>
            <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
                {/* Section Header */}
                <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 rounded-full bg-black/50 mb-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-400 font-mono">ACHIEVEMENTS_DB</span>
                </div>
                <h2 className="text-2xl font-bold text-white font-mono tracking-wider">
                    <span className="text-purple-400">ACHIEVEMENTS</span> & <span className="text-pink-400">CERTIFICATIONS</span>
                </h2>
                {/* <p className="text-purple-400/70 font-mono text-sm mt-2">
                    CTF Wins, Hackathons, Research & Certifications
                </p> */}
                </div>

                {/* Achievement Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 border-b border-purple-500/20 pb-6">
                {[
                    { id: 'ctf', label: 'CTF Wins', color: 'cyan', icon: '🏆' },
                    { id: 'hackathons', label: 'Hackathons', color: 'purple', icon: '⚔️' },
                    { id: 'certifications', label: 'Certifications', color: 'green', icon: '📜' },
                    { id: 'research', label: 'Research', color: 'pink', icon: '🔬' },
                ].map((tab) => {
                    const isActive = activeAchievementTab === tab.id;
                    return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveAchievementTab(tab.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-lg font-mono transition-all duration-300 border ${
                        isActive
                            ? `bg-${tab.color}-500/20 border-${tab.color}-500/40 text-${tab.color}-300`
                            : 'bg-black/30 border-white/10 text-white/60 hover:border-white/20 hover:text-white/80'
                        }`}
                    >
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-${tab.color}-500/20 border border-${tab.color}-500/30`}>
                        {isActive ? 'ACTIVE' : 'VIEW'}
                        </span>
                    </button>
                    );
                })}
                </div>

                {/* Active Achievement Content */}
                <div className="border border-purple-500/20 rounded-xl p-6 bg-black/30 backdrop-blur-sm">
                {activeAchievementTab === 'ctf' && <CtfCard />}
                {activeAchievementTab === 'hackathons' && <HackCard />}
                {activeAchievementTab === 'certifications' && <AchCertCard />}
                {activeAchievementTab === 'research' && <ResearchCard />}
                </div>

                {/* Achievement Footer */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                <div className="flex flex-wrap gap-4 justify-center text-xs font-mono">
                    <span className="text-cyan-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    CTF_WINS: 3+
                    </span>
                    <span className="text-purple-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    HACKATHONS: 5+
                    </span>
                    <span className="text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    CERTIFICATIONS: 8+
                    </span>
                    <span className="text-pink-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    RESEARCH: 1+
                    </span>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}