export interface CtfData {
  title: string;
  position: string;
  organised: string;
  date: string; 
  image: string;
  description: string; 
  link?: string; 
  homePage: boolean;
}

export const ctfData: CtfData[] = [
  {
    title: "Women's CTF",
    position: "2nd Position",
    organised: "IITB Trust Lab",
    date: "15 Aug 2023", 
    image: "/images/ipdr.png",
    description: "Team: Sudo_No_Sleep",
    link: "https://www.linkedin.com/posts/iitb-trust-lab_ctf-women-cybersecurity-ugcPost-7314264207124783104-pfYN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVYFdUBYltJd07fzmmHjlui1DMjl5r9_Qk", 
    homePage: true,
  },
  {
    title: "Operation Cipher Shadows",
    position: "3nd Position",
    organised: "IIT Jammu",
    date: "08 April 2025", 
    image: "/images/ipdr.png",
    description: "",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/CTF/Competitions/Operation-Cipher-Shadows", 
    homePage: true,
  },
  {
    title: "Pentathon 2024-25",
    position: "500 out of 3500",
    organised: "NPIIPC-AICTE",
    date: "2025", 
    image: "/images/ipdr.png",
    description: "",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/CTF/Competitions/Pentathon-2024-25", 
    homePage: true,
  }, 
  {
    title: "CBC Techfest 2023-24",
    position: "1st Position",
    organised: "Cyber Blockchain Club of SIT, Pune",
    date: "2023", 
    image: "/images/ipdr.png",
    description: "",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/CTF/Competitions/CBC-Techfest-2023-24", 
    homePage: true,
  },
  {
    title: "CBC Techfest 2024-25",
    position: "Designed Challenges",
    organised: "Cyber Blockchain Club of SIT, Pune",
    date: "2024", 
    image: "/images/ipdr.png",
    description: "",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/CTF/Competitions/CBC-Techfest-2024-25", 
    homePage: false,
  }, 
  {
    title: "CBC Techfest 2025-26",
    position: "Designed Challenges",
    organised: "Cyber Blockchain Club of SIT, Pune",
    date: "2025", 
    image: "/images/ipdr.png",
    description: "",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/CTF/Competitions/CBC-Techfest-2025-26", 
    homePage: false,
  },  
];
