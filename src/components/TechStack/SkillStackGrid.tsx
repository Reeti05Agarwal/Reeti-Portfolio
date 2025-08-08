// components/TechStackGrid.tsx
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";

import PythonIcon from "@/components/Icons/Lang/python";
import BashIcon from "../Icons/Lang/bash";
import ReactIcon from "../Icons/Lang/react";
import LinuxIcon from "../Icons/Tools/linux";
import MongoDBIcon from "../Icons/Lang/mongodb";
import SqlIcon from "../Icons/Lang/sql";
import NextIcon from "../Icons/Lang/nextjs";
import CppIcon from "../Icons/Lang/cpp";
import JavaIcon from "../Icons/Lang/java";

const stack = [
  {
    name: "Python",
    icon: <PythonIcon />,
    description: "Versatile programming language used for scripting, automation, data science, and backend development.",
  },
  {
    name: "Bash",
    icon: <BashIcon />,
    description: "Command-line scripting for automating tasks and managing Linux/Unix systems.",
  },
  {
    name: "React",
    icon: <ReactIcon />,
    description: "JavaScript library for building interactive user interfaces and single-page applications.",
  },
  {
    name: "Linux",
    icon: <LinuxIcon />,
    description: "Open-source operating system widely used for servers, development, and cybersecurity.",
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon />,
    description: "NoSQL database for storing and managing unstructured data in a flexible, scalable way.",
  },
  {
    name: "MySQL",
    icon: <SqlIcon />,
    description: "Popular open-source relational database management system for structured data.",
  },
  {
    name: "NextJS",
    icon: <NextIcon />,
    description: "React framework for server-side rendering, static site generation, and building full-stack web apps.",
  },
  {
    name: "C++",
    icon: <CppIcon />,
    description: "High-performance programming language used for system/software development and competitive programming.",
  },
  {
    name: "Java",
    icon: <JavaIcon />,
    description: "Object-oriented programming language used for building cross-platform applications and enterprise solutions.",
  },
  {
    name: "Javaj",
    icon: <JavaIcon />,
    description: "Object-oriented programming language used for building cross-platform applications and enterprise solutions.",
  },
];

export default function SkillStackGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {stack.map((tech) => (
        <Popover key={tech.name}>
          <PopoverTrigger>
            <div className="flex flex-col items-center justify-center rounded-lg bg-black p-4 text-white border backdrop-blur-md border-zinc-700 hover:scale-105 hover:bg-transparent hover:text-white hover:text-shadow-pink hover:border-purple-300 transition-transform duration-200 cursor-pointer">
              <div className="w-10 h-12 mb-2">
                {tech.icon}
              </div>
              <p className="text-base bold text-center">{tech.name}</p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-gray-800 text-white p-3 rounded-lg max-w-xs shadow-lg border border-zinc-600">
            <div className="font-semibold text-sm">{tech.name}</div>
            <div className="text-xs mt-1 opacity-80">{tech.description}</div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
