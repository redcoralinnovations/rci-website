import { cn } from '../../utils/cn';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ label, title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn('pt-32 pb-16 bg-white border-b border-gray-100', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {label && (
          <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-4 bg-coral-50 px-3 py-1.5 rounded-full">
            {label}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
