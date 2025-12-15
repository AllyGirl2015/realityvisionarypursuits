import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-[#F0F4F8]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-1 bg-[#FF6B6B] border-2 border-slate-900 rounded-full text-sm font-bold text-slate-900 mb-4 fun-shadow">
            04 — CONTACT
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Have a visionary idea or just want to say hello? We are listening.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-8">
            <div className="bg-[#FFE66D] p-6 md:p-8 border-2 border-slate-900 rounded-xl fun-shadow rotate-1">
              <p className="text-lg md:text-xl text-slate-900 font-bold leading-relaxed mb-6">
                "Collaboration is the essence of innovation. Let's build something extraordinary together."
              </p>
              <p className="text-sm font-black text-slate-900 uppercase tracking-wider">— RVP Team</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 bg-white border-2 border-slate-900 rounded-xl fun-shadow hover:fun-shadow-hover transition-all group cursor-pointer">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> EMAIL US
                </h3>
                <a href="mailto:alissarobbin2015@gmail.com" className="block text-lg md:text-xl font-bold text-slate-600 group-hover:text-[#FF6B6B] transition-colors break-all">
                  alissarobbin2015@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/manadbny" 
            method="POST"
            className="space-y-6 bg-white p-6 md:p-8 border-2 border-slate-900 rounded-xl fun-shadow -rotate-1"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-black text-slate-900 uppercase tracking-wider">NAME</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-slate-50 border-2 border-slate-200 p-4 text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-black text-slate-900 uppercase tracking-wider">EMAIL</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-slate-50 border-2 border-slate-200 p-4 text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all rounded-lg"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-black text-slate-900 uppercase tracking-wider">MESSAGE</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-slate-50 border-2 border-slate-200 p-4 text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all resize-none rounded-lg"
                placeholder="Tell us about your vision..."
              />
            </div>
            <button 
              type="submit"
              className="w-full px-8 py-4 bg-[#FF6B6B] border-2 border-slate-900 rounded-lg text-white font-black text-sm uppercase tracking-widest hover:bg-[#ff5252] hover:fun-shadow-hover fun-shadow transition-all flex items-center justify-center gap-2"
            >
              SEND MESSAGE <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
