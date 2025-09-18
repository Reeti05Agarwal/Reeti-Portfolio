export interface CertData {
  title: string;
  position: string;
  organised: string;
  date: string;
  tags: string[];
  description: string; 
  readMoreLink?: string; 
}

export const certData: CertData[] = [
  {
    title: "Cyber Security and Blockchain Hackathon",
    position: "2nd Position",
    organised: "Cyber Secured India and India Blockchain Alliance",
    date: "2023-08-15",
    tags: ["Java", "Security", "Network", "MySQL"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "Operation Cipher Shadows",
    position: "",
    organised: "IIT Jammu",
    date: "08-04-2025",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    readMoreLink: "https://example.com/steel-ball-run", 
  },
  {
    title: "AI-Powered Cybersecurity Assistant",
    position: "",
    organised: "",
    date: "2023-08-15",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    readMoreLink: "https://example.com/steel-ball-run", 
  }, 
];
