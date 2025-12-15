import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works, authors, quotes } from "@/data/mockData";
import { WorkCard } from "@/components/WorkCard";
import { QuoteCard } from "@/components/QuoteCard";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);

  if (!author) {
    notFound();
  }

  const authorWorks = works.filter((w) => w.authorId === author.id);
  const authorQuotes = quotes.filter((q) => q.authorId === author.id);

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#F0F4F8]">
      <Navbar />

      <div className="max-w-4xl mx-auto mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-[#FFE66D] border-2 border-slate-900 rounded-full flex items-center justify-center text-5xl md:text-6xl font-black text-slate-900 shrink-0 fun-shadow">
            {author.name.charAt(0)}
          </div>
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-7xl font-black text-slate-900">
              {author.name}
            </h1>
            <span className="inline-block px-4 py-1 bg-[#4ECDC4] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 fun-shadow">
              {author.role}
            </span>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed bg-white p-6 border-2 border-slate-900 rounded-xl fun-shadow">
              {author.bio}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 md:mb-12 flex items-center gap-4">
            <span className="w-10 h-10 md:w-12 md:h-12 bg-[#FF6B6B] border-2 border-slate-900 rounded-full flex items-center justify-center text-lg md:text-xl text-white">1</span>
            PUBLISHED WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorWorks.length > 0 ? (
              authorWorks.map((work, index) => (
                <WorkCard key={work.id} {...work} href={`/works/${work.slug}`} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white border-2 border-slate-900 border-dashed rounded-xl">
                <p className="text-xl font-bold text-slate-400">No works published yet.</p>
              </div>
            )}
          </div>
        </div>

        {authorQuotes.length > 0 && (
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 md:mb-12 flex items-center gap-4">
              <span className="w-10 h-10 md:w-12 md:h-12 bg-[#FFE66D] border-2 border-slate-900 rounded-full flex items-center justify-center text-lg md:text-xl text-slate-900">2</span>
              QUOTES
            </h2>
            <div className="flex flex-col gap-8">
              {authorQuotes.map((quote, index) => (
                <QuoteCard key={index} quote={quote} index={index} />
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <Link href="/authors" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
            <ArrowLeft className="w-4 h-4" /> BACK TO CONTRIBUTORS
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
