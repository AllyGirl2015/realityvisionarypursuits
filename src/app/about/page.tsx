import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#E8F5E9]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#FFE66D] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
            01 — ABOUT US
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6">
            THE VISION (AND THE MADNESS)
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Exploring the boundaries of reality and imagination. Mostly imagination.
          </p>
        </header>

        <div className="bg-white p-6 md:p-12 border-2 border-slate-900 rounded-xl fun-shadow">
          <p className="text-xl md:text-3xl text-slate-900 font-black mb-8 md:mb-12 leading-tight">
            Reality Visionary Pursuits is not just a publication; it is an <span className="bg-[#FF6B6B] text-white px-2">intellectual accelerator</span> for the post-modern age.
          </p>
          
          <div className="space-y-8 text-lg text-slate-600 font-medium">
            <p>
              Founded in the digital ether, RVP serves as a nexus for thinkers who refuse to be constrained by the boundaries of traditional academia or the short-termism of corporate futurism. We believe that the most important ideas are often the ones that seem most radical when first articulated.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#4ECDC4] border-2 border-slate-900 rounded-full flex items-center justify-center text-sm">1</span>
              OUR METHODOLOGY
            </h3>
            <p>
              We employ a rigorous process of "speculative architecture." We do not merely predict the future; we attempt to construct the theoretical scaffolding upon which it can be built. From the governance of planetary ecosystems to the ethics of artificial consciousness, our work is defined by its depth and its daring.
            </p>

            <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#FFE66D] border-2 border-slate-900 rounded-full flex items-center justify-center text-sm">2</span>
              THE COMMUNITY
            </h3>
            <p>
              RVP is a collective of philosophers, scientists, artists, and technologists. We operate on the principle of open-source intelligence—that the best way to solve the complex problems of the 21st century is to share our most potent ideas freely and fearlessly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
