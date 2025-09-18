export interface AchData {
  title: string;
  position: string;
  organised: string;
  date: string;
  tags: string[];
  description: string; 
  readMoreLink?: string; 
}

export const achData: AchData[] = [
  {
    title: "Women's CTF",
    position: "2nd Position",
    organised: "IITB Trust Lab",
    date: "2023-08-15",
    tags: ["Java", "Security", "Network", "MySQL"],
    description: " ",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Operation Cipher Shadows",
    position: "3nd Position",
    organised: "IIT Jammu",
    date: "08-04-2025",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Pentathon",
    position: "500 out of 3500",
    organised: "NPIIPC-AICTE",
    date: "2025",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  }, 
];
