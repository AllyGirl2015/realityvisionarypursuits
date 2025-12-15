'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works } from "@/data/mockData";
import { WorkCard } from "@/components/WorkCard";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Filter, X } from "lucide-react";

export default function WorksPage() {
  const categories = Array.from(new Set(works.map(w => w.category)));
  const allTags = Array.from(new Set(works.flatMap(w => w.tags)));
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredWorks = selectedTag 
    ? works.filter(w => w.tags.includes(selectedTag))
    : works;

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#E0F7FA]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#FF6B6B] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
            THE ARCHIVE (OF CHAOS)
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6">
            VISIONARY WORKS
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Explore our curated selection of philosophical essays, artistic critiques, and things we found on the internet.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 border-2 border-slate-900 rounded-xl fun-shadow">
              <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                CATEGORIES
              </h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <Link 
                      href={`/works/category/${encodeURIComponent(category)}`}
                      className="block p-2 rounded-lg hover:bg-slate-100 font-bold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 border-2 border-slate-900 rounded-xl fun-shadow">
              <h3 className="text-lg font-black text-slate-900 mb-4">FILTER BY TAG</h3>
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
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredWorks.length > 0 ? (
                filteredWorks.map((work, index) => (
                  <WorkCard key={work.id} {...work} href={`/works/${work.slug}`} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-white border-2 border-slate-900 border-dashed rounded-xl">
                  <p className="text-2xl font-black text-slate-300">NO WORKS FOUND</p>
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
