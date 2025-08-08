'use client';

import { motion } from "framer-motion"; 
import React from 'react';
 
const badges = [
  {
    image: "badges/google-cybersecurity-professional-certificate-v2.png",
    name: "Google Cybersecurity Professional Certificate",
  },
  {
    image: " ",
    name: "Certified Ethical Hacker",
  },
  {
    image: " ",
    name: "Machine Learning Specialization",
  },
];

const BadgesSection = () => {
  return (
 
    <div className="grid gap-8 sm:grid-cols-2">
      {badges.map((badge, index) => (
        <motion.article
          key={index}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-md transition-all hover:shadow-lg hover:border-pink-300/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
        <img
          src={badge.image}
          alt={badge.name}
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h3 className="text-lg font-medium">{badge.name}</h3>
        </motion.article>
      ))}
    </div>
  );
};

export default BadgesSection;
