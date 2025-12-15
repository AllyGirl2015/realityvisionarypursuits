'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, authors } from '@/data/mockData';
import Link from 'next/link';
import { Copy, Check } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
  index: number;
}

export function QuoteCard({ quote, index }: QuoteCardProps) {
  const [copied, setCopied] = useState(false);
  const author = authors.find(a => a.id === quote.authorId);

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${author?.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleCopy}
      className="group relative p-6 md:p-8 bg-[#FFE66D] border-2 border-slate-900 rounded-2xl fun-shadow hover:fun-shadow-hover transition-all cursor-pointer"
    >
      <div className="absolute top-4 right-4 p-2 bg-white rounded-full border border-slate-900 text-slate-900">
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </div>

      <blockquote className="text-2xl md:text-3xl font-black leading-tight text-slate-900 mb-6">
        "{quote.text}"
      </blockquote>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
            {quote.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-900 px-2 py-1 rounded-md text-slate-900">
                    {tag}
                </span>
            ))}
        </div>
        
        {author && (
          <Link 
            href={`/authors/${author.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-bold text-slate-900 hover:text-[#FF6B6B] transition-colors"
          >
            — {author.name}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
