'use client';

import { motion } from "framer-motion";
import { ExperienceData } from "@/constants/ExperienceData";
import CalenderIcon from "@/components/Icons/calender";
import ReadMoreButton from "@/components/Buttons/ReadMoreButton";
import LocationPinIcon from "@/components/Icons/location";
import { Building2, FileText, Cpu, Shield, Network, Database, Key, BookOpen } from "lucide-react";
import { getCycledColor as getColorScheme } from "@/constants/ColorScheme";

interface ExperienceCardProps {
  activeCategory?: string; // 'all' | 'work' | 'organisations'
}

export default function ExperienceCard({ activeCategory = "all" }: ExperienceCardProps) {
  
  // ✅ Correct tab-based filtering
  const filteredData = ExperienceData.filter((exp) => {
    if (activeCategory === "all") return true;
    return exp.tab.includes(activeCategory);
  });

  // ✅ Icon logic based on role/tags
  const getExperienceIcon = (exp: (typeof ExperienceData)[number]) => {
    const titleLower = exp.role.toLowerCase();
    const tagsLower = exp.tags.map(tag => tag.toLowerCase());

    if (titleLower.includes("security") || tagsLower.some(tag => tag.includes("pentest"))) {
      return <Shield className="w-5 h-5" />;
    }

    if (titleLower.includes("ai") || tagsLower.some(tag => tag.includes("ai"))) {
      return <Cpu className="w-5 h-5" />;
    }

    if (tagsLower.some(tag => tag.includes("network"))) {
      return <Network className="w-5 h-5" />;
    }

    if (tagsLower.some(tag => tag.includes("database"))) {
      return <Database className="w-5 h-5" />;
    }

    if (tagsLower.some(tag => tag.includes("crypto"))) {
      return <Key className="w-5 h-5" />;
    }

    if (titleLower.includes("research")) {
      return <BookOpen className="w-5 h-5" />;
    }

    return <FileText className="w-5 h-5" />;
  };

  return (
    <div className="relative">
      <div className="space-y-8 border-l-4 border-white/10 pl-8 relative">

        {filteredData.map((exp, idx) => {
          const colors = getColorScheme(idx);
          const expIcon = getExperienceIcon(exp);

          return (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 
              border border-white/10 backdrop-blur-xl rounded-2xl p-6 
              transition-all duration-300 ${colors.primary} ${colors.glow}`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[38px] top-8">
                <div className="relative">
                  <div
                    className={`absolute -inset-1 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300 ${colors.accent}`}
                  />
                  <div
                    className={`relative w-4 h-4 rounded-full border-2 border-white shadow-lg ${colors.accent}`}
                  />
                </div>
              </div>

              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${colors.accent}`}>
                    <span className={colors.icon}>
                      {expIcon}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-mono text-white">
                      {exp.role}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center text-white/70 text-sm">
                  <CalenderIcon className={`w-4 h-4 mr-2 ${colors.icon}`} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Company & Location */}
              <div className="mb-4 p-4 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Building2 className={`w-4 h-4 ${colors.icon}`} />
                    <span className={`text-sm font-semibold ${colors.icon}`}>
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center text-white/70 text-sm">
                    <LocationPinIcon className={`w-4 h-4 mr-2 ${colors.icon}`} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 p-4 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-white/60 font-mono block mb-2">
                  OVERVIEW
                </span>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className={`px-2 py-1 text-xs rounded-md font-mono transition-transform duration-200 hover:scale-105 ${colors.accent}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className={`pt-4 border-t ${colors.primary}`}>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ReadMoreButton
                    fullWidth
                    className={`${colors.primary} ${colors.glow}`}
                  />
                </a>
              </div>
            </motion.article>
          );
        })}

      </div>
    </div>
  );
}