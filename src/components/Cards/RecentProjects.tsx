// import { motion } from "framer-motion";
// import { projectData } from "@/constants/ProjectData"; 
// // import GithubButton1 from "../Github/GithubButton1";
// import Image from "next/image";

// export default function RecentProjects() {
//   const recentProjects = projectData.slice(0, 4); 

//   return (
//     <div className="relative w-full">
//       {/* Container with responsive padding and max-width */}
//       <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Project cards with responsive grid */}
//         <div className="grid gap-4 sm:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {recentProjects.map((card, idx) => (
//             <motion.article
//               key={idx}
//               className="flex flex-col justify-between bg-black/50 border border-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-lg hover:border-gray-300/40"
              
//             >
//               {/* Image Container with aspect ratio */}
//               <div className="mb-3 sm:mb-4 w-full aspect-video relative overflow-hidden rounded-lg">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                   priority={idx < 2} // Priority load for first 2 images
//                 />
//               </div>

//               {/* Content Section */}
//               <div className="flex-grow flex flex-col">
//                 <h3 className="text-lg sm:text-xl font-semibold text-white line-clamp-1">
//                   {card.title}
//                 </h3> 
                
//                 <p className="mt-2 text-white/80 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
//                   {card.short}
//                 </p>
//               </div>

//               {/* Buttons Container - Responsive layout */}
//               <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3">
//                 <a 
//                   href={card.githubLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex-1 flex justify-center items-center min-h-[44px] sm:min-h-[48px]"
//                 >
//                   <GithubButton1 />
//                 </a>
                
                 
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }