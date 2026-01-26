export interface CertData {
  title: string; 
  organised: string;
  date: string;
  image: string;
  tags: string[];
  description: string; 
  link?: string; 
  verification?: string;
  homePage: boolean;
}

export const certData: CertData[] = [
  {
    title: "Junior Penetration Tester (eJPT)",
    organised: "INE",
    date: "Dec 2025",
    image: "./images/ipdr.png",
    tags: ["VAPT", "Security Auditing", "Linux", "Security Operations"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Certificates/Google-Cybersecurity-Professional", 
    verification: 'https://example.com/verify/google-cert',
    homePage: true,
  },
  {
    title: "Google cybersecurity Course",
    organised: "Google",
    date: "2023-08-15",
    image: "./images/ipdr.png",
    tags: ["Cyber Security", "Security Auditing", "Linux", "Security Operations"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Certificates/Google-Cybersecurity-Professional", 
    verification: '',
    homePage: true,
  },
  {
    title: "Cisco Certificates",
    organised: "",
    date: "",
    image: "./images/ipdr.png",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Introduction to Cybersecurity \n Cybersecurity Essentials \n Introduction to Packet Tracer \n Network Essentials",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Certificates/Cisco-Certificates", 
    verification: '',
    homePage: true,
  }, 
  {
    title: "Cyber Security and Ethical Hacking",
    organised: "CSFF",
    date: "08-04-2025",
    image: "./images/ipdr.png",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Certificates/Cyber-Security-and-Ethical-Hacking", 
    verification: '',
    homePage: false,
  },
  {
    title: "Bash Shell Scripting",
    organised: "Udemy",
    date: "",
    image: "./images/ipdr.png",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      " ",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Certificates/Bash-Shell-Scripting", 
    verification: '',
    homePage: false,
  }, 
  
];
