'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#FF6B6B] rounded-full blur-2xl opacity-20" 
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-48 h-48 bg-[#4ECDC4] rounded-full blur-3xl opacity-20" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFE66D] rounded-full blur-[100px] opacity-10" 
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        className="text-center max-w-5xl mx-auto space-y-8 relative"
      >
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full border-2 border-slate-900 fun-shadow-sm mb-4">
          <Sparkles className="w-2.5 h-2.5 text-[#FF6B6B]" />
          <span className="text-[10px] md:text-sm font-bold text-slate-900">EST. 2025 — VISIONARY PURSUITS</span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-slate-900">
          REALITY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D]">VISIONARY</span> <br />
          PURSUITS
        </h1>
        
        <p className="text-lg md:text-2xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
          Where philosophy meets design, and serious ideas get a colorful makeover. 
          (We take our nonsense very seriously.)
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 pt-8 px-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-[#FF6B6B] text-white font-bold rounded-xl border-2 border-slate-900 fun-shadow hover:fun-shadow-hover transition-all flex items-center justify-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            EXPLORE THE ARCHIVE
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-900 fun-shadow hover:fun-shadow-hover transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 text-[#FFE66D]" />
            GET INSPIRED
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
