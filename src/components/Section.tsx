import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} {...props}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-24">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{title}</h2>
      {description && (
        <p className="text-lg text-[var(--color-secondary)] max-w-2xl">{description}</p>
      )}
    </div>
  );
}
