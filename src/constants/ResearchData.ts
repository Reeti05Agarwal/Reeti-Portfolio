export interface ResearchData {
  title: string; 
  organised: string;
  date: string;
  tags: string[];
//   description: string; 
  readMoreLink?: string; 
}

export const researchData: ResearchData[] = [
  {
    title: "Quantum Computing Odyssey: Teleporting to the Realm of Unparalleled Possibilities",
    organised: "Research Paper Published in 2024 International Conference on ADICS",
    date: "2023-08-15",
    tags: ["Quantum Computing", "Security", "Network", "MySQL"],
    // description:
    //   "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    readMoreLink: "https://reeti05agarwal.github.io/Tech_Blogs/Research-Paper/Quantum-Computing-Odyssey---Teleporting-to-the-Realm-of-Unparalleled-Possibilities", 
  }, 
];
