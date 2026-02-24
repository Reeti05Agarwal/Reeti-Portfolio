
'use client';
import PageWithTabs from '@/components/Templates/PageWithTabs';
import BlogCard from "@/components/Cards/BlogCard";
import { Terminal, FileText, BookOpen, PenTool, FileText as BlogIcon } from 'lucide-react';

export default function BlogsPage() {
  const tabs = [
    { 
      id: 'all', 
      label: 'All Posts', 
      color: 'cyan' as const,
      icon: <FileText className="w-4 h-4" />,
      description: 'Browse all technical articles'
    },
    { 
      id: 'cyber', 
      label: 'Cybersecurity', 
      color: 'purple' as const,
      icon: <Terminal className="w-4 h-4" />,
      description: 'Security research, penetration testing, and threat analysis'
    },
    { 
      id: 'tech', 
      label: 'Technology', 
      color: 'green' as const,
      icon: <PenTool className="w-4 h-4" />,
      description: 'Development, programming, and technical tutorials'
    },
    { 
      id: 'research', 
      label: 'Research', 
      color: 'blue' as const,
      icon: <BookOpen className="w-4 h-4" />,
      description: 'Academic papers, studies, and detailed analysis'
    },
  ];

  return (
    <PageWithTabs
      pageTitle="TECH BLOGS"
      pageCommand="./blogs"
      pageDescription="Cybersecurity insights, technical deep-dives, and research publications"
      tabs={tabs}
      defaultTab="all"
      stats={{
        icon: <FileText className="w-4 h-4 text-green-400" />,
        label: 'ARTICLES',
        value: '10+',
        color: 'green'
      }}
      footerNote={{
        title: '[ BLOG DATABASE UPDATED REGULARLY ]',
        description: 'All articles written with technical accuracy and practical insights'
      }}
      backgroundGradient="from-cyan-500/5 via-transparent to-purple-500/5"
      headerIcon={<BlogIcon className="w-5 h-5 text-cyan-400" />}
    >
      {(activeTab) => <BlogCard activeCategory={activeTab} />}
    </PageWithTabs>
  );
}