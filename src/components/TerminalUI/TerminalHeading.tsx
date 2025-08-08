import { AnimatedSpan, UITerminal ,TypingAnimation } from "@/components/magicui/UIterminal";
import React, { useEffect, useState } from "react";

interface TerminalProps {
  head_text: string;
  text: string; 
}

const TerminalHeading: React.FC<TerminalProps> = ({ head_text, text})  => {
 
  return (
      
    <UITerminal head_text={head_text}>
        <span>
          <span className="text-purple-300 text-xl terminal-glow-p">
            {text}
          
          </span>
          <span className="text-pink-400 cursor">  |</span>
        </span>
        

        {/* <AnimatedSpan delay={500} className="text-gray-500">
        <span className="text-lg block break-words whitespace-pre-line">
            
        </span>
        </AnimatedSpan> */}
    </UITerminal>
     
  );
};

export default TerminalHeading;