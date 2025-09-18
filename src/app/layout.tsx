import "@/app/globals.css";
import { JetBrains_Mono, Orbitron } from "next/font/google";
import Navbar from "@/components/Navbar";  
 




const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata = {
  title: "Reeti | Portfolio",
  description: "Tech-savvy hacker-style portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className={`bg-transparent text-black font-mono relative min-h-screen ${jetbrains.className}`}>         
        <Navbar />
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/Anime-Girl2.png')",
            //backgroundImage: "url('images/tech.jpg')",  
            // backgroundImage: "url('images/')",
            filter: "blur(10px)",  
            opacity: 0.5,        
          }}
        />  
        <div className="relative z-10 mt-8 mx-w-screen-xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}