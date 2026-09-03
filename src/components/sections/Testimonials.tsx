import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { TestimonialCard } from '../common/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
