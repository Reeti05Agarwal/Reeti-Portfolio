export interface BlogData {
  title: string;
  date: string;
  summary: string;
  image: string;
  link: string;
  tags: string[];  
}

export const blogsData: BlogData[] = [ 
  {
    title: "Windows Services Architecture",
    summary: "",
    date: "15 Dec 2025",
    link: "https://medium.com/@reeti05agarwal/windows-services-architecture-f6b78997467f",
    image: "/images/Blogs/WindowsServices.png",
    tags: ["Windows", "Services", "Technology"]
  }, 
  {
    title: "Mastering Nmap",
    summary: "The Ultimate Nmap Guide for Beginners",
    date: "19 Aug 2025",
    link: "https://medium.com/@reeti05agarwal/mastering-nmap-the-ultimate-guide-for-beginners-209d87c124eb",
    image: "/images/Blogs/NmapFundamentals.png",
    tags: ["Cybersecurity"]
  }, 
  {
    title: "VirtualBox Kali Linux",
    summary: "Step-by-step guide to installing Kali Linux on VirtualBox.",
    date: "11 Aug 2025",
    link: "https://medium.com/@reeti05agarwal/kali-linux-virtual-machine-virtual-box-d6d35de163b6",
    image: "/images/Blogs/VirtualBox.png",
    tags: ["Technology"]
  },  
  {
    title: "CTF Reverse Engineering",
    summary: "A Beginner’s Guide with Ghidra and GDB",
    date: "6 Jun 2025",
    link: "https://medium.com/@reeti05agarwal/ctf-reverse-engineering-using-ghidra-and-gdb-eb9b1c682264",
    image: "/images/Blogs/ReverseEngineeringCTF.png",
    tags: ["Cybersecurity"]
  },
];