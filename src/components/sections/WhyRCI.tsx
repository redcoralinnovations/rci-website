import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { whyPoints } from '../../data/whyRci';

export function WhyRCI() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Why RCI"
            title="What makes working with us different"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                className="bg-white rounded-2xl p-7 border border-gray-100 flex gap-5 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-coral" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
