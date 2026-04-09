import { Section } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";

export function Contact() {
  const { contact } = portfolioData;

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Let's build<br />something together.
          </h2>
          <p className="text-xl text-[var(--color-secondary)] mb-16 max-w-md leading-relaxed">
            I'm currently available for full-time roles and open to discussing new opportunities in backend engineering.
          </p>

          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-6 text-xl font-medium text-[var(--color-primary)] w-fit"
            >
              <span className="p-4 bg-[var(--color-tertiary)] group-hover:bg-[#EAEAEA] transition-colors font-mono text-sm">
                [ EMAIL ]
              </span>
              <span className="border-b-2 border-transparent group-hover:border-[var(--color-primary)] transition-colors pb-1">
                {contact.email}
              </span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 text-xl font-medium text-[var(--color-primary)] w-fit"
            >
              <span className="p-4 bg-[var(--color-tertiary)] group-hover:bg-[#EAEAEA] transition-colors font-mono text-sm">
                [ LINKEDIN ]
              </span>
              <span className="border-b-2 border-transparent group-hover:border-[var(--color-primary)] transition-colors pb-1">
                LinkedIn Profile
              </span>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 text-xl font-medium text-[var(--color-primary)] w-fit"
            >
              <span className="p-4 bg-[var(--color-tertiary)] group-hover:bg-[#EAEAEA] transition-colors font-mono text-sm">
                [ GITHUB ]
              </span>
              <span className="border-b-2 border-transparent group-hover:border-[var(--color-primary)] transition-colors pb-1">
                GitHub Repository
              </span>
            </a>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-6 bg-[var(--color-tertiary)] p-8 md:p-12">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white border-b-2 border-[var(--color-secondary)]/20 px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white border-b-2 border-[var(--color-secondary)]/20 px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white border-b-2 border-[var(--color-secondary)]/20 px-4 py-4 text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-[var(--color-primary)] text-white px-8 py-5 text-lg font-medium hover:bg-black transition-colors w-full md:w-auto self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
