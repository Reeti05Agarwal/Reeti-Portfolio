'use client';

import { motion } from "framer-motion";
import { BlogData, blogsData } from "@/constants/BlogsData";  
import CalenderIcon from "@/components/Icons/calender" 
import ReadMoreButton from "@/components/Buttons/ReadMoreButton"
import Image from "next/image";  
import { FileText, BookOpen, Terminal, Cpu, Shield, Key, Database, Network } from 'lucide-react';
import { getCycledColor as getColorScheme } from "@/constants/ColorScheme";

interface BlogCardProps {
  activeCategory?: string;
}

export default function BlogCard({ activeCategory = 'all' }: BlogCardProps) {
  // Filter blogs based on active category
  const filteredBlogs = blogsData.filter(blog => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cyber') {
      return blog.tags.some(tag => 
        tag.toLowerCase().includes('security') || 
        tag.toLowerCase().includes('cyber') ||
        tag.toLowerCase().includes('hack') ||
        tag.toLowerCase().includes('pentest')
      );
    }
    if (activeCategory === 'tech') {
      return blog.tags.some(tag => 
        tag.toLowerCase().includes('tech') || 
        tag.toLowerCase().includes('development') ||
        tag.toLowerCase().includes('programming')
      );
    }
    if (activeCategory === 'research') {
      return blog.tags.some(tag => 
        tag.toLowerCase().includes('research') || 
        tag.toLowerCase().includes('analysis') ||
        tag.toLowerCase().includes('paper')
      );
    }
    return true;
  });

  // Get blog icon based on content
  const getBlogIcon = (blog: BlogData) => {
    const titleLower = blog.title.toLowerCase();
    const tagsLower = blog.tags.map(tag => tag.toLowerCase());
    
    if (titleLower.includes('cyber') || titleLower.includes('security') || 
        tagsLower.some(tag => tag.includes('security') || tag.includes('pentest'))) {
      return <Shield className="w-5 h-5" />;
    } else if (titleLower.includes('ai') || titleLower.includes('machine learning') || 
               tagsLower.some(tag => tag.includes('ai') || tag.includes('ml'))) {
      return <Cpu className="w-5 h-5" />;
    } else if (titleLower.includes('network') || titleLower.includes('infrastructure') || 
               tagsLower.some(tag => tag.includes('network') || tag.includes('system'))) {
      return <Network className="w-5 h-5" />;
    } else if (titleLower.includes('database') || titleLower.includes('data') || 
               tagsLower.some(tag => tag.includes('sql') || tag.includes('database'))) {
      return <Database className="w-5 h-5" />;
    } else if (titleLower.includes('crypto') || titleLower.includes('encryption') || 
               tagsLower.some(tag => tag.includes('crypto') || tag.includes('encrypt'))) {
      return <Key className="w-5 h-5" />;
    } else if (titleLower.includes('research') || titleLower.includes('paper') || 
               tagsLower.some(tag => tag.includes('research') || tag.includes('study'))) {
      return <BookOpen className="w-5 h-5" />;
    } else {
      return <FileText className="w-5 h-5" />;
    }
  };

  // Get gradient based on index
  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-900/10 via-transparent to-cyan-900/10',
      'from-purple-900/10 via-transparent to-pink-900/10',
      'from-pink-900/10 via-transparent to-rose-900/10',
      'from-emerald-900/10 via-transparent to-green-900/10',
      'from-cyan-900/10 via-transparent to-teal-900/10'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {filteredBlogs.map((blog, idx) => {
        const colors = getColorScheme(idx);
        const blogIcon = getBlogIcon(blog);
        const gradient = getGradient(idx);
        
        return (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 border border-black-500 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:border-black-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
             
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/30 rounded-tl"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-magenta-400/30 rounded-tr"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/30 rounded-bl"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-magenta-400/30 rounded-br"></div>
            
            {/* Blog ID Badge */}
            {/* <div className="absolute -top-5 -right-2 bg-black/80 border border-cyan-500/30 rounded-lg px-2 py-1 backdrop-blur-sm rotate-3">
              <span className="text-xs text-cyan-300 font-mono">BLOG_{String(idx + 1).padStart(2, '0')}</span>
            </div> */}

            {/* Image Container */}
            <div className="mb-4 w-full h-48 relative overflow-hidden rounded-lg border border-white/10 group-hover:border-cyan-400/30 transition-all duration-300">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Header with Blog Icon */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${colors.accent} backdrop-blur-sm`}>
                  {blogIcon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 font-mono leading-tight">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-blue-400/80 font-mono">ARTICLE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Date */}
            <div className="mb-4 flex items-center gap-2 p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
              <div className={`p-1.5 rounded ${colors.accent}`}>
                <CalenderIcon className={`w-4 h-4 ${colors.icon}`} />
              </div>
              <div>
                <span className="text-xs text-white/60 font-mono block">PUBLISHED</span>
                <p className="text-sm text-white/90">{blog.date}</p>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-4 flex-1">
              <div className="p-3 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded ${colors.accent} flex-shrink-0 mt-0.5`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-white/60 font-mono block">SUMMARY</span>
                    <p className="text-sm text-white/90 mt-1 line-clamp-3">{blog.summary}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`px-2 py-1 text-xs ${colors.accent} rounded-md font-mono hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read More Button */}
            <div className="mt-auto pt-3 border-t border-cyan-500/20">
              <a 
                href={blog.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <ReadMoreButton 
                  fullWidth={true}
                  className={`h-11 ${colors.primary} ${colors.glow}`}
                >
                  Read Article
                </ReadMoreButton>
              </a>
            </div>
          </motion.article>
        );
      })}
      
      {/* Empty state for filtered results */}
      {filteredBlogs.length === 0 && (
        <div className="col-span-full text-center py-12 border border-cyan-500/20 rounded-xl bg-black/30">
          <div className="text-cyan-400/50 text-3xl mb-3">📝</div>
          <p className="text-white/80 font-mono">No blog posts found for this category</p>
          <p className="text-cyan-400/60 text-sm font-mono mt-2">[CATEGORY_EMPTY]</p>
        </div>
      )}
    </div>
  );
}


// 'use client';
// import PageWithTabs from '@/components/Templates/PageWithTabs';
// import BlogCard from "@/components/Cards/BlogCard";
// import { Terminal, FileText, BookOpen, PenTool, FileText as BlogIcon } from 'lucide-react';

// export default function BlogsPage() {
//   const tabs = [
//     { 
//       id: 'all', 
//       label: 'All Posts', 
//       color: 'cyan' as const,
//       icon: <FileText className="w-4 h-4" />,
//       description: 'Browse all technical articles'
//     },
//     { 
//       id: 'cyber', 
//       label: 'Cybersecurity', 
//       color: 'purple' as const,
//       icon: <Terminal className="w-4 h-4" />,
//       description: 'Security research, penetration testing, and threat analysis'
//     },
//     { 
//       id: 'tech', 
//       label: 'Technology', 
//       color: 'green' as const,
//       icon: <PenTool className="w-4 h-4" />,
//       description: 'Development, programming, and technical tutorials'
//     },
//     { 
//       id: 'research', 
//       label: 'Research', 
//       color: 'blue' as const,
//       icon: <BookOpen className="w-4 h-4" />,
//       description: 'Academic papers, studies, and detailed analysis'
//     },
//   ];

//   return (
//     <PageWithTabs
//       pageTitle="TECH BLOGS"
//       pageCommand="./blogs"
//       pageDescription="Cybersecurity insights, technical deep-dives, and research publications"
//       tabs={tabs}
//       defaultTab="all"
//       stats={{
//         icon: <FileText className="w-4 h-4 text-green-400" />,
//         label: 'ARTICLES',
//         value: '10+',
//         color: 'green'
//       }}
//       footerNote={{
//         title: '[ BLOG DATABASE UPDATED REGULARLY ]',
//         description: 'All articles written with technical accuracy and practical insights'
//       }}
//       backgroundGradient="from-cyan-500/5 via-transparent to-purple-500/5"
//       headerIcon={<BlogIcon className="w-5 h-5 text-cyan-400" />}
//     >
//       {(activeTab) => <BlogCard activeCategory={activeTab} />}
//     </PageWithTabs>
//   );
// }