"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { name, role, tagline } = portfolioData.hero;

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-6">
                Hello.
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[var(--color-primary)]">
                I'm {name}.
              </h2>
              <h3 className="text-xl md:text-2xl text-[var(--color-secondary)] mb-8 font-medium">
                {portfolioData.hero.role}
              </h3>
              <p className="text-lg md:text-xl max-w-2xl text-[var(--color-secondary)] leading-relaxed mb-12">
                {portfolioData.hero.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="bg-[var(--color-primary)] text-[var(--color-white)] px-8 py-4 text-sm font-medium hover:bg-black transition-colors"
              >
                View Projects
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-tertiary)] text-[var(--color-primary)] px-8 py-4 text-sm font-medium hover:bg-[#EAEAEA] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-sm font-medium hover:bg-[var(--color-tertiary)] transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4">
            <div className="w-full aspect-[3/4] bg-[var(--color-tertiary)] flex items-center justify-center p-8 border border-[var(--color-secondary)]/10 overflow-hidden relative">
              <span className="absolute bottom-4 right-6 text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-mono">
                System flow
              </span>
              <svg viewBox="0 0 200 300" className="w-full h-full text-[var(--color-primary)]">
                {/* Database Cylinder */}
                <motion.path
                  d="M100 240 C140 240, 160 230, 160 220 L160 260 C160 270, 140 280, 100 280 C60 280, 40 270, 40 260 L40 220 C40 230, 60 240, 100 240 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.ellipse
                  cx="100" cy="220" rx="60" ry="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />

                {/* API Node */}
                <motion.rect
                  x="60" y="100" width="80" height="40" rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <text x="100" y="125" textAnchor="middle" className="text-[10px] font-mono fill-current font-semibold">API GW</text>

                {/* Client Nodes */}
                <motion.circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} />
                <motion.circle cx="100" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
                <motion.circle cx="160" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />

                {/* Connecting Lines */}
                <motion.path
                  d="M40 55 L70 100 M100 55 L100 100 M160 55 L130 100 M100 140 L100 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />

                {/* Flowing Data Particles */}
                <motion.circle cx="100" cy="140" r="3" fill="currentColor"
                  animate={{ y: [0, 60], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 2 }}
                />
                <motion.circle cx="40" cy="55" r="3" fill="currentColor"
                  animate={{ x: [0, 30], y: [0, 45], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 2.5 }}
                />
                <motion.circle cx="160" cy="55" r="3" fill="currentColor"
                  animate={{ x: [0, -30], y: [0, 45], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 3 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
