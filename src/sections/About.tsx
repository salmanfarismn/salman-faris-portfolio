import { Section, SectionHeader } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { summary, focusAreas } = portfolioData.about;

  return (
    <Section id="about" className="bg-[var(--color-tertiary)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5">
          <SectionHeader title="About" />
        </div>
        <div className="lg:col-span-7">
          <div className="prose prose-lg max-w-none text-[var(--color-secondary)] mb-12">
            <p className="text-xl leading-relaxed">{summary}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-6 uppercase tracking-wider">
              Focus Areas
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2.5 flex-shrink-0" />
                  <span className="text-lg text-[var(--color-secondary)]">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
