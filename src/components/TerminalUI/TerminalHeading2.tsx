import { AnimatedSpan, UITerminal2 ,TypingAnimation } from "@/components/magicui/UIterminal2";
import React, { useEffect, useState } from "react";

interface Terminal2Props { 
  pre_text: string;
  text: string; 
}

const TerminalHeading2: React.FC<Terminal2Props> = ({ text, pre_text})  => {
 
  return (
      
    <UITerminal2 >
        <span>
          <span className="text-blue-200 terminal-glow-blue text-lg">
            {pre_text}
          </span>
          <span className="text-purple-300 text-2xl font-bold">
            {text} 
          </span>
          <span className="text-pink-400 cursor">  |</span>
        </span> 
    </UITerminal2>
     
  );
};

export default TerminalHeading2;