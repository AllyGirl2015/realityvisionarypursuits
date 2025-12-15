import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WorkCard } from "@/components/WorkCard";
import { QuoteSection } from "@/components/QuoteSection";
import { AuthorCard } from "@/components/AuthorCard";
import { Footer } from "@/components/Footer";
import { works, quotes, authors } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Get first 3 works
  const featuredWorks = works.slice(0, 3);
  // Get first 3 authors
  const featuredAuthors = authors.slice(0, 3);

  return (
    <main className="min-h-screen selection:bg-[#FF6B6B] selection:text-white pb-24 bg-[#F0F4F8]">
      <Navbar />
      
      <Hero />

      <section id="about" className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-[#FFE66D] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-8 fun-shadow">
            01 — THE MANIFESTO
          </span>
          <div className="prose prose-lg md:prose-2xl mx-auto">
            <p className="font-black text-2xl md:text-5xl leading-tight text-slate-900 mb-8">
              We operate at the intersection of <span className="text-[#FF6B6B] underline decoration-4 decoration-slate-900">philosophy</span>, <span className="text-[#4ECDC4] underline decoration-4 decoration-slate-900">art</span>, and <span className="text-[#FFE66D] underline decoration-4 decoration-slate-900">vision</span>.
            </p>
            <p className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Reality Visionary Pursuits is a digital canvas for the bold and the curious. We explore ideas that challenge the status quo, blending serious inquiry with creative expression.
            </p>
            <div className="mt-12">
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 rounded-xl font-bold text-slate-900 fun-shadow hover:fun-shadow-hover hover:bg-slate-50 transition-all w-full md:w-auto justify-center">
                READ THE VISION <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quotes={quotes} />

      <section id="works" className="py-16 md:py-24 px-6 md:px-12 bg-[#FF6B6B] border-y-2 border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="inline-block px-4 py-1 bg-white border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
                02 — SELECTED WORKS
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white text-stroke-3">THE COLLECTION</h2>
            </div>
            <Link href="/works" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
              VIEW ALL WORKS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <WorkCard key={work.id} {...work} href={`/works/${work.slug}`} index={index} />
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link href="/works" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all w-full">
              VIEW ALL WORKS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="authors" className="py-16 md:py-24 px-6 md:px-12 bg-[#4ECDC4] border-b-2 border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="inline-block px-4 py-1 bg-white border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
                03 — THE MINDS
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900">OUR AUTHORS</h2>
            </div>
            <Link href="/authors" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
              MEET THE TEAM <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAuthors.map((author, index) => (
              <AuthorCard key={author.id} author={author} index={index} />
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Link href="/authors" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all w-full">
              MEET THE TEAM <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900">
            JOIN THE <span className="text-[#FF6B6B]">MOVEMENT</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
            Got a visionary idea? A philosophical rant? Or just a really good joke? 
            We want to hear it. Submit your works and join the collective.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#FFE66D] text-slate-900 font-bold rounded-xl border-2 border-slate-900 fun-shadow hover:fun-shadow-hover transition-all flex items-center justify-center gap-2 w-full md:w-auto">
              SUBMIT YOUR WORK
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-900 fun-shadow hover:fun-shadow-hover transition-all flex items-center justify-center gap-2 w-full md:w-auto">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
