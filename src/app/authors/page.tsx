'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { authors, works } from "@/data/mockData";
import { AuthorCard } from "@/components/AuthorCard";
import { useState } from "react";
import { X } from "lucide-react";

export default function AuthorsPage() {
  // Derive all unique tags from all works
  const allTags = Array.from(new Set(works.flatMap(w => w.tags)));
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter authors based on whether they have written a work with the selected tag
  const filteredAuthors = selectedTag
    ? authors.filter(author => {
        const authorWorks = works.filter(w => w.authorId === author.id);
        return authorWorks.some(w => w.tags.includes(selectedTag));
      })
    : authors;

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#F3E5F5]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#4ECDC4] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
            THE USUAL SUSPECTS
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6">
            OUR CONTRIBUTORS
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Meet the minds shaping the future. Or at least trying to.
          </p>
        </header>

        <div className="mb-16 bg-white p-8 border-2 border-slate-900 rounded-xl fun-shadow">
            <h3 className="text-lg font-black text-slate-900 mb-4">FILTER BY EXPERTISE</h3>
            <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
                <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`text-xs font-bold px-3 py-1.5 border-2 rounded-lg transition-all ${
                    selectedTag === tag 
                    ? 'border-slate-900 bg-[#FFE66D] text-slate-900 fun-shadow' 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAuthors.map((author, index) => (
             <AuthorCard key={author.id} author={author} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
