import { AnimatedSpan, UITerminal ,TypingAnimation } from "@/components/magicui/UIterminal";
import React from "react";
import { Orbitron } from "next/font/google";

interface TerminalProps {
  head_text: string;
  text: string; 
}

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const TerminalHeading: React.FC<TerminalProps> = ({ head_text, text})  => {
  return (
    <UITerminal head_text={head_text}>
      <span>
        {/* Orbitron font applied here */}
        <span
          className={`${orbitron.className} text-purple-200 font-bold text-2xl `}
        >
          {text}
        </span>
        <span className="text-pink-400 cursor">|</span>
      </span>
    </UITerminal>
  );
};

export default TerminalHeading;
