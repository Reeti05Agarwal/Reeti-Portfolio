export interface ExperienceData {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  link: string;
  tags: string[];  
  tab: string[];
}

export const ExperienceData = [
  {
    role: "Vice President",
    company: "Cyber Blockchain Club SIT Pune",
    location: "Pune",
    period: "August 2024 - Present",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Worked on AI-driven malware detection, NLP-based threat analysis, and regulatory AI system compliance.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Cyber-Blockchain-Club",
    tab: ["organisations"]
  },
  {
    role: "Cyber Intern",
    company: "Deepcytes Cyber Lab",
    location: "Pune",
    period: "March 2025 - Present",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Conducting research on AI-driven threats, dark web intelligence, and counter-surveillance; supporting legal and policy cases with insights on cyber risks, compliance gaps, and digital forensics.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Deepcytes-Cyber-Lab",
    tab: ["work"]
  },
  {
    role: "Cyber Intern",
    company: "Rosche System",
    location: "Pune",
    period: "Feb 2025 - Present",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Research on vulnerabilities. Pentesting.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Rosche-System",
    tab: ["work"]
  },
  {
    role: "Intern",
    company: "Cyber Crime Department",
    location: "Indore",
    period: "16 Dec - 24 Dec 2024",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Observed investigations into phishing, QR scams, and WhatsApp hacks. Gained hands-on exposure to digital forensics and social media tracking. Analyzed 10+ cases to inform local cybercrime prevention efforts.",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Cyber-Crime-Department,-Indore",
    tab: ["work"]
  },
  {
    role: "Cisco Virtual Internship",
    company: "Cisco",
    location: "Pune",
    period: "May - July 2024",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Completed hands-on training in networking and cybersecurity fundamentals. Designed secure network topologies and practiced device configurations and troubleshooting using Cisco Packet Tracer",
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Cisco-Virtual-Internship",
    tab: ["work"]
  },
  {
    role: "Cyber Security Intern",
    company: "Cyber Secured India",
    location: "Pune",
    period: "April 2025",
    tags: ["Apache", "ElasticSearch", "React", "Docker", "Kafka"],
    description:
      "Gained practical experience in core cybersecurity concepts, including system/network security, offensive and defensive techniques, and Linux fundamentals. Applied skills through hands-on labs and real-world simulation exercises.",
    // tags: [];
    link: "https://reeti05agarwal.github.io/Tech_Blogs/Experience/Cyber-Secured-India",
    tab: ["work"]
  },
];

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};
