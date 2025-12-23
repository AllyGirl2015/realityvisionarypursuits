'use client';

import { motion } from 'framer-motion';
import { Quote } from '@/data/mockData';
import { authors } from '@/data/mockData';

import Link from 'next/link';

interface QuoteSectionProps {
  quotes: Quote[];
}

export function QuoteSection({ quotes }: QuoteSectionProps) {
  return (
    <section className="py-16 px-4 md:py-24 md:px-12 bg-[#FFE66D] border-y-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1 bg-white border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
                ALLEGED WISDOM
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900">DAILY INSIGHTS</h2>
            </div>
            <Link href="/quotes" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
              READ MORE LIES <span className="text-xs">(JOKING)</span> →
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.slice(0, 2).map((quote, index) => {
            const author = authors.find(a => a.id === quote.authorId);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 border-2 border-slate-900 rounded-xl fun-shadow flex flex-col justify-between h-full"
              >
                <blockquote className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight">
                  "{quote.text}"
                </blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[#FF6B6B] rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-white text-sm">
                    {author?.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-slate-900 block">
                      {author?.name}
                    </cite>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {author?.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:hidden text-center">
            <Link href="/quotes" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
              READ MORE QUOTES →
            </Link>
        </div>
      </div>
    </section>
  );
}
