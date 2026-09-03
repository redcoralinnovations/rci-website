import { Quote } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5 shadow-sm h-full">
      <Quote className="w-7 h-7 text-coral opacity-50 flex-shrink-0" strokeWidth={1.5} />
      <p className="text-gray-700 text-base leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-coral-50 flex items-center justify-center text-coral font-semibold text-sm flex-shrink-0">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
          <p className="text-gray-400 text-xs">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
