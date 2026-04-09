import { Section, SectionHeader } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";
import { MoveUpRight } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-[var(--color-primary)] text-[var(--color-white)]">
      <div className="mb-24">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Case Studies</h2>
        <p className="text-lg text-[#A1A1A1] max-w-2xl">
          Detailed breakdowns of systems I've architected, focusing on backend logic and data flow.
        </p>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <p className="text-sm font-mono text-[#A1A1A1] mb-4">0{index + 1} // {project.subtitle}</p>
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-[#A1A1A1] text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[var(--color-white)] pb-1 hover:text-[#A1A1A1] hover:border-[#A1A1A1] transition-all font-medium"
                >
                  View Source Code <MoveUpRight size={16} />
                </a>

                <div className="mt-12 flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 border border-[#333333] text-[#A1A1A1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12">
              <div>
                <h4 className="text-lg font-semibold uppercase tracking-widest text-[#A1A1A1] mb-6">
                  The Problem
                </h4>
                <p className="text-lg leading-relaxed text-[var(--color-white)]">
                  {project.problem}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold uppercase tracking-widest text-[#A1A1A1] mb-6">
                  The Solution
                </h4>
                <p className="text-lg leading-relaxed text-[var(--color-white)]">
                  {project.solution}
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-8 md:p-12 border-l-4 border-white">
                <h4 className="text-lg font-semibold uppercase tracking-widest text-white mb-6">
                  Backend Architecture & Data Flow
                </h4>
                <p className="text-lg leading-relaxed text-[#D1D1D1]">
                  {project.backendArchitecture}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold uppercase tracking-widest text-[#A1A1A1] mb-6">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
