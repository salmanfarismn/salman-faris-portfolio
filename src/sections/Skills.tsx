import { Section, SectionHeader } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { skills } = portfolioData;

  const skillGroups = [
    { title: "Languages", items: skills.languages },
    { title: "Backend", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "Frontend", items: skills.frontend },
    { title: "Security", items: skills.security },
    { title: "Tools & Platforms", items: skills.tools },
  ];

  return (
    <Section id="skills">
      <SectionHeader title="Skills.03" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-16">
        {skillGroups.map((group, index) => (
          <div key={index}>
            <h3 className="text-[var(--color-primary)] font-semibold text-lg mb-6 border-b border-[var(--color-tertiary)] pb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[var(--color-tertiary)] text-[var(--color-secondary)] px-4 py-2 text-sm font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
