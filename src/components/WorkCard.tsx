'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WorkCardProps {
  title: string;
  description: string;
  category: string;
  href?: string;
  index: number;
}

export function WorkCard({ title, description, category, href = "#", index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white border-2 border-slate-900 rounded-2xl p-6 md:p-8 fun-shadow hover:fun-shadow-hover transition-all duration-300"
    >
      <Link href={href} className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-[#FFE66D] text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-900">
            {category}
          </span>
          <span className="text-slate-400 font-mono text-xs">#{String(index + 1).padStart(2, '0')}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#FF6B6B] transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
