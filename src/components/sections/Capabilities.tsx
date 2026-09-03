import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { capabilities } from '../../data/capabilities';

export function Capabilities() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Capabilities"
            title="Technology we work with"
            subtitle="A selective stack of proven, production-grade tools — chosen for reliability, not trend-following."
            dark
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.category}
              className="bg-dark-card rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-coral mb-5">
                {cap.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                    <span className="w-1 h-1 rounded-full bg-coral/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
