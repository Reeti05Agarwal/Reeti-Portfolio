import { Orbitron } from "next/font/google";

interface BlueButtonProps { 
  text: string;  
}

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const BlueButton: React.FC<BlueButtonProps> = ({ text })  => { 
  return (
    <button className="relative bg-sky-950 text-sky-300 border border-sky-300 border-b-4 font-medium px-6 py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group overflow-hidden">
      
      {/* Actual button text */}
      <span className={`${orbitron.className} relative z-10 text-sm font-bold`}>
        {text}
      </span>

      {/* Glow effect (moving bar) */}
      <span className="absolute -top-[150%] left-0 w-full h-[5px] bg-sky-300 opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_15px_5px_rgba(56,189,248,0.7)]"></span>
    </button>
  );
};

export default BlueButton;
