'use client';

import GithubIcon from "../Icons/SocialMediaIcons/github";
import MediumIcon from "../Icons/SocialMediaIcons/medium";
// import LinkedinIcon from "../Icons/SocialMediaIcons/linkedin";

export default function SocialMediaButtons() {
    return (
        <div className="flex gap-2">
            <div className="icon-content">
                <a
                    href="https://github.com/Reeti05Agarwal"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Github"
                    data-social="github"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                    <div className="filled absolute inset-0 bg-grey opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <GithubIcon />
                </a>
                <div className="tooltip">Github</div>
            </div>

            <div className="icon-content">
                <a
                    href="https://www.linkedin.com/in/reeti-agarwal-cyber/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                    <div className="filled absolute inset-0 bg-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <MediumIcon />
                </a>
                <div className="tooltip">LinkedIn</div>
            </div>

            <div className="icon-content">
                <a
                    href="https://medium.com/@reeti05agarwal"
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    data-social="medium"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                    <div className="filled absolute inset-0 bg-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <MediumIcon />
                </a>
                <div className="tooltip">Medium</div>
            </div>
        </div>
    );
}