import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works, authors } from "@/data/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  const author = authors.find((a) => a.id === work.authorId);

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#F0F4F8]">
      <Navbar />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#FF6B6B] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-6 fun-shadow">
            {work.category}
          </span>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            {work.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-slate-600 font-bold">
            {author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-xs md:text-sm uppercase tracking-wider">AUTHOR:</span>
                <Link href={`/authors/${author.slug}`} className="text-slate-900 hover:text-[#FF6B6B] underline decoration-2 decoration-slate-900 transition-colors">
                  {author.name}
                </Link>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs md:text-sm uppercase tracking-wider">PUBLISHED:</span>
              <span className="text-slate-900">
                {new Date(work.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white p-6 md:p-12 border-2 border-slate-900 rounded-xl fun-shadow">
          <div 
            className="prose prose-lg md:prose-xl prose-slate prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-medium prose-strong:text-slate-900 prose-a:text-[#FF6B6B] prose-a:font-bold max-w-none"
            dangerouslySetInnerHTML={{ __html: work.content }}
          />
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/works" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all">
            <ArrowLeft className="w-4 h-4" /> BACK TO COLLECTION
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
