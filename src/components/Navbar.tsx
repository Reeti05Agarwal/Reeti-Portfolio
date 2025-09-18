"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandBlogger,
} from "@tabler/icons-react";

const navItems = [
  {
    title: "~/Home",
    href: "/",
    icon: <IconHome className="h-5 w-5 text-white/80" />,
  },
  {
    title: "~/Projects",
    href: "/projects",
    icon: <IconTerminal2 className="h-5 w-5 text-white/80" />,
  },
  {
    title: "~/Experience",
    href: "/experience",
    icon: <IconBrandBlogger className="h-5 w-5 text-white/80" />,
  },
  {
    title: "~/Blogs",
    href: "/blogs",
    icon: <IconExchange className="h-5 w-5 text-white/80" />,
  }, 
  {
    title: "~/Resume",
    href: "/resume.pdf",
    icon: <IconBrandGithub className="h-5 w-5 text-white/80" />,
  },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, type: "spring", stiffness: 120 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/5 border border-white/10 backdrop-blur-2xl px-8 py-2 rounded-full shadow-lg"
    >
      <motion.ul
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex gap-1 items-center"
      >
        {navItems.map((item) => (
          <motion.li
            key={item.title}
            className="group relative"
            whileHover={{ scale: 1.15, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
            >
              <span className="block p-3 rounded-full terminal-glow-blue hover:bg-black/50 transition-all duration-200">
               
                {item.title}
              </span> 
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
