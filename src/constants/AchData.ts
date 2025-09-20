export interface AchData {
  title: string;
  position: string;
  organised: string;
  date: string; 
  description: string; 
  readMoreLink?: string; 
}

export const achData: AchData[] = [
  {
    title: "Women's CTF",
    position: "2nd Position",
    organised: "IITB Trust Lab",
    date: "2023-08-15", 
    description: " ",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Operation Cipher Shadows",
    position: "3nd Position",
    organised: "IIT Jammu",
    date: "08-04-2025", 
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Pentathon",
    position: "500 out of 3500",
    organised: "NPIIPC-AICTE",
    date: "2025", 
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  }, 
  {
    title: "CBC Techfest 2023-24",
    position: "1st Position",
    organised: "Cyber Blockchain Club of SIT, Pune",
    date: "2023", 
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  }, 
];
