import Link from 'next/link';
import { Home, BookOpen, Users, MessageSquare, Mail, Quote } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-md">
      <div className="flex items-center justify-between md:justify-center gap-1 md:gap-2 bg-white/90 backdrop-blur-md px-4 md:px-6 py-3 rounded-full border-2 border-slate-900 fun-shadow">
        <Link href="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="Home">
          <Home className="w-5 h-5 text-slate-900 group-hover:text-[#FF6B6B] transition-colors" />
        </Link>
        <div className="w-px h-4 bg-slate-200" />
        <Link href="/about" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="About">
          <BookOpen className="w-5 h-5 text-slate-900 group-hover:text-[#4ECDC4] transition-colors" />
        </Link>
        <Link href="/works" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="Works">
          <MessageSquare className="w-5 h-5 text-slate-900 group-hover:text-[#FFE66D] transition-colors" />
        </Link>
        <Link href="/quotes" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="Quotes">
          <Quote className="w-5 h-5 text-slate-900 group-hover:text-[#FF6B6B] transition-colors" />
        </Link>
        <Link href="/authors" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="Authors">
          <Users className="w-5 h-5 text-slate-900 group-hover:text-[#4ECDC4] transition-colors" />
        </Link>
        <Link href="/contact" className="p-2 hover:bg-slate-100 rounded-full transition-colors group" title="Contact">
          <Mail className="w-5 h-5 text-slate-900 group-hover:text-[#FFE66D] transition-colors" />
        </Link>
      </div>
    </nav>
  );
}
