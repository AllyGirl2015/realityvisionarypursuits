'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Author } from '@/data/mockData';
import { User } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
  index: number;
}

export function AuthorCard({ author, index }: AuthorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white border-2 border-slate-900 rounded-2xl p-6 fun-shadow hover:fun-shadow-hover transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-[#4ECDC4] rounded-full border-2 border-slate-900 flex items-center justify-center text-slate-900 overflow-hidden">
            <User className="w-8 h-8" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-900">{author.name}</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF6B6B]">{author.role}</p>
        </div>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {author.bio}
      </p>

      <Link 
        href={`/authors/${author.slug}`}
        className="inline-block px-4 py-2 bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-900 hover:bg-[#FFE66D] transition-colors"
      >
        View Profile
      </Link>
    </motion.div>
  );
}
