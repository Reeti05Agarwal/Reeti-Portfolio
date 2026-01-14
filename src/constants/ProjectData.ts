export interface ProjectData {
  title: string; 
  tags: string[];
  description: string;
  short: string,
  image: string;
  link?: string;
  githubLink?: string;
}

export const projectData: ProjectData[] = [
  {
    title: "TraceProbe",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "A real-time analytics tool for law enforcement to detect suspicious patterns in massive IPDR logs using Kafka and Flink. Developed for a cybersecurity hackathon to aid in digital forensic investigations.",
    short: "A real-time analytics tool for law enforcement to detect suspicious patterns in massive IPDR logs using Kafka and Flink.",
    image: "./images/ipdr.png",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Projects/TraceProbe",
    githubLink: "https://github.com/Reeti05Agarwal/TraceProbe",
  },
  {
    title: "NexGuard",
    tags: ["Python", "Machine Learning", "Cloud", "Flet"],
    description:
      "Designed a secure, AI-based system for real-time fraud detection and behavior analysis. Utilized knowledge distillation, time-series RNNs, and explainability tools (LIME) to ensure efficient and transparent decision-making.",
    short: "AI-based system for real-time fraud detection and behavior analysis.",
    image: "./images/cat.png",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Projects/NexGaurd",
    githubLink: "https://github.com/Reeti05Agarwal/NexGaurd",
  },
  {
    title: "Network Intrusion System", 
    tags: ["Java", "Security", "Network", "MySQL"],
    description:
      "Developed a Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection, slashing network breaches by 15% and flagging 200+ suspicious packetsdaily.",
    short: "Rule-based Network Intrusion Detection (NID) system incorporating real-time packet inspection.",
    image: "./images/cat.png", // store in /public./images,
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Projects/Network-Intrusion-System-(NIDS)",
    githubLink: "https://github.com/Reeti05Agarwal/NIDSs",
  },  
];
