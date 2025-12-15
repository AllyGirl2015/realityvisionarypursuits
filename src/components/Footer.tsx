import Link from 'next/link';
import { Globe, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-4 md:py-12 md:px-6 border-t-2 border-slate-900 bg-white mt-16 md:mt-20 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">REALITY VISIONARY PURSUITS</h2>
          <p className="text-sm md:text-base text-slate-600 font-medium">Exploring the intersection of philosophy, art, and the human condition.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/rbentertainmemtworks/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#FF6B6B] border-2 border-slate-900 rounded-lg fun-shadow hover:fun-shadow-hover transition-all text-slate-900">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.rbentertainment-works.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#4ECDC4] border-2 border-slate-900 rounded-lg fun-shadow hover:fun-shadow-hover transition-all text-slate-900">
            <Globe className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right text-sm font-bold text-slate-500">
          <p>© {new Date().getFullYear()} Reality Visionary Pursuits.</p>
          <p>Developed by <span className="text-slate-900">Emerson Rodrigues</span></p>
        </div>
      </div>
    </footer>
  );
}