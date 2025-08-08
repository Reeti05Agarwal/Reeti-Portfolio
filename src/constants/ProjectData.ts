export interface ProjectData {
  title: string;
  author: string;
  tags: string[];
  description: string;
  image: string;
  readMoreLink?: string;
  githubLink?: string;
}

export const projectData: ProjectData[] = [
  {
    title: "Network Intrusion System",
    author: "By Hirohiko Araki",
    tags: ["Java", "Security", "Network", "MySQL"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    image: "/images/cat.png", // store in /public/images,
    readMoreLink: "https://example.com/steel-ball-run",
    githubLink: "https://github.com/Reeti05Agarwal/NIDS/tree/main",
  },
  {
    title: "AI driven Customer Behavior Prediction and Fraud Detection",
    author: "By Ghostwriter X",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    image: "/images/cat.png",
    readMoreLink: "https://example.com/steel-ball-run",
    githubLink: "https://github.com/Reeti05Agarwal/PBL-1",
  },
  {
    title: "AI-Powered Cybersecurity Assistant",
    author: "By Ghostwriter X",
    tags: ["Python", "Machine Learning", "Cloud", ],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    image: "/images/cat.png",
    readMoreLink: "https://example.com/steel-ball-run",
    githubLink: "",
  },
  // {
  //   title: " ",
  //   author: " ",
  //   tags: [" " ],
  //   description:
  //     " ",
  //   image: "/images/cat.png",
  //   readMoreLink: " ",
  //   githubLink: "",
  // },
];
