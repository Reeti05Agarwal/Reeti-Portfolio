 
import GithubIcon from "../Icons/SocialMediaIcons/github";
import MediumIcon from "../Icons/SocialMediaIcons/medium";
import { Linkedin, LinkedinIcon } from "lucide-react";


export default function SocialMediaButtons() {
    return (
        <div>
            <div className="example-2">
                <div className="icon-content">
                    <a
                        href="https://github.com/Reeti05Agarwal"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Github"
                        data-social="github"
                    >
                    <div className="filled"></div>
                    <GithubIcon/>
             
                    </a>
                    <div className="tooltip">Github</div>
                </div>

                <div className="icon-content">
                    <a
                        href="https://www.linkedin.com/in/reeti-agarwal-cyber/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="linkedin"
                        data-social="linkedin"
                    >
                    <div className="filled"></div>
                    <LinkedinIcon />
                    </a>
                    <div className="tooltip">Linkedin</div>
                </div>
                <div className="icon-content">
                    <a
                        href="https://reeti05agarwal.github.io/Tech_Blogs/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Tech Blogs"
                        data-social="blogs"
                    >
                    <div className="filled"></div>
                    <MediumIcon/>
             
                    </a>
                    <div className="tooltip">Blogs</div>
                </div>
                <div className="icon-content">
                    <a
                        href="https://medium.com/@reeti05agarwal"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Medium"
                        data-social="medium"
                    >
                    <div className="filled"></div>
                    <MediumIcon/>
             
                    </a>
                    <div className="tooltip">Medium</div>
                </div>
                

                
                 
            </div>

        </div>
        
    );
}