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
            {/* Minimal right side. Empty space acts as whitespace, but we could add a subtle structural element. */}
            <div className="w-full aspect-[3/4] bg-[var(--color-tertiary)] flex items-end p-8">
              <span className="text-xs text-[var(--color-secondary)] uppercase tracking-widest font-mono">
                System Design Focus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
