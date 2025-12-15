'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { quotes } from "@/data/mockData";
import { QuoteCard } from "@/components/QuoteCard";
import { useState } from "react";
import { X } from "lucide-react";

export default function QuotesPage() {
  const allTags = Array.from(new Set(quotes.flatMap(q => q.tags)));
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredQuotes = selectedTag 
    ? quotes.filter(q => q.tags.includes(selectedTag))
    : quotes;

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#FFF3E0]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#FFE66D] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
            ALLEGED WISDOM
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6">
            QUOTES & QUIPS
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Profound thoughts from our contributors. Take them with a grain of salt.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 border-2 border-slate-900 rounded-xl fun-shadow">
              <h3 className="text-lg font-black text-slate-900 mb-4">FILTER BY THEME</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`text-xs font-bold px-3 py-1.5 border-2 rounded-lg transition-all ${
                      selectedTag === tag 
                        ? 'border-slate-900 bg-[#FF6B6B] text-white fun-shadow' 
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-900 hover:text-slate-900'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTag && (
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="text-xs font-bold px-3 py-1.5 border-2 border-red-200 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 hover:border-red-500 transition-all flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> CLEAR
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-8">
              {filteredQuotes.length > 0 ? (
                filteredQuotes.map((quote, index) => (
                  <QuoteCard key={index} quote={quote} index={index} />
                ))
              ) : (
                <div className="text-center py-20 bg-white border-2 border-slate-900 border-dashed rounded-xl">
                  <p className="text-2xl font-black text-slate-300">NO QUOTES FOUND</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
