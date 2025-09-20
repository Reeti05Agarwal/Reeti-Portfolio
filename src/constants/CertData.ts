export interface CertData {
  title: string; 
  organised: string;
  date: string;
  tags: string[];
  description: string; 
  readMoreLink?: string; 
}

export const certData: CertData[] = [
  {
    title: "Google cybersecurity Course",
    organised: "Google",
    date: "2023-08-15",
    tags: ["Cyber Security", "Security Auditing", "Linux", "Security Operations"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Cyber Security and Ethical Hacking",
    organised: "CSFF",
    date: "08-04-2025",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Cisco",
    organised: "",
    date: "",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Introduction to Cybersecurity \n Cybersecurity Essentials \n Introduction to Packet Tracer \n Network Essentials",
    readMoreLink: "https://example.com/steel-ball-run", 
  }, 
];
