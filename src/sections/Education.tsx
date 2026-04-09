import { Section, SectionHeader } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <Section id="education" className="bg-[var(--color-tertiary)]">
      <SectionHeader title="Education" />
      <div className="max-w-4xl border-t border-[var(--color-secondary)]/20 mt-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-secondary)]/20 gap-4"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-[var(--color-secondary)] font-medium">
                {edu.institution}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="inline-block px-4 py-2 border border-[var(--color-primary)] text-sm font-mono font-medium">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
