export interface HackData {
  title: string;
  position: string;
  organised: string;
  date: string;
  tags: string[];
  description: string; 
  readMoreLink?: string; 
}

export const hackData: HackData[] = [
  {
    title: "Cyber Security and Blockchain Hackathon",
    position: "2nd Position",
    organised: "Cyber Secured India and India Blockchain Alliance",
    date: "04-08-2023",
    tags: ["Java", "Security", "Network", "MySQL"],
    description: "",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "CyberShield Hackathon",
    position: "",
    organised: "MP Police",
    date: "01-09-2025",
    tags: ["Kibana", "ElasticSearch", "postgres", ],
    description: "IPDR Analysis Tool",
    readMoreLink: "https://example.com/steel-ball-run", 
  },  
];
