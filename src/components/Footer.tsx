import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white py-12 border-t border-[#333333] mt-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-bold text-xl tracking-tighter mb-2">S.F.</p>
          <p className="text-[#A1A1A1] text-sm">
            &copy; {year} {portfolioData.hero.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
