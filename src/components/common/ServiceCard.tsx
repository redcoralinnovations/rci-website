import { cn } from '../../utils/cn';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div
      className={cn(
        'group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col gap-4',
        className,
      )}
    >
      <div className="w-11 h-11 bg-coral-50 rounded-xl flex items-center justify-center group-hover:bg-coral transition-colors duration-300 flex-shrink-0">
        <Icon
          className="w-5 h-5 text-coral group-hover:text-white transition-colors duration-300"
          strokeWidth={1.75}
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
