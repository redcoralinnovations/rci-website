import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-xs font-semibold uppercase tracking-widest mb-4',
            dark ? 'text-coral/80' : 'text-coral',
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
          dark ? 'text-white' : 'text-gray-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            dark ? 'text-gray-300' : 'text-gray-500',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
