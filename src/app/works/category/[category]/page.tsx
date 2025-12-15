import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works } from "@/data/mockData";
import { WorkCard } from "@/components/WorkCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  
  const categoryWorks = works.filter(w => w.category === decodedCategory);

  if (categoryWorks.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#F0F4F8]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <Link href="/works" className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-900 rounded-lg font-bold text-slate-900 fun-shadow hover:fun-shadow-hover transition-all mb-6 md:mb-8">
            <ArrowLeft className="w-4 h-4" /> BACK TO COLLECTION
          </Link>
          <h1 className="text-3xl md:text-7xl font-black text-slate-900 mt-4 uppercase">
            {decodedCategory}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 font-medium">
            Curated works in this category.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryWorks.map((work, index) => (
            <WorkCard key={work.id} {...work} href={`/works/${work.slug}`} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
