import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section className="bg-[#fff8f6] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Testimonials"
            title="What our clients say"
            subtitle="We let the results speak for themselves."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 border-t border-coral/20 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              className="flex min-h-[300px] flex-col border-b border-coral/20 py-8 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:not-last:border-r lg:last:pr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="font-serif text-6xl leading-none text-coral/45">&ldquo;</span>
              <p className="mt-5 flex-1 text-lg leading-8 text-dark">{t.quote}</p>
              <footer className="mt-7 border-t border-coral/20 pt-4">
                <p className="text-sm font-semibold text-dark">{t.author}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-500">{t.role}{t.company ? `, ${t.company}` : ''}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
