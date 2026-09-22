import { motion } from 'motion/react';
import { whyPoints } from '../../data/whyRci';

export function WhyRCI() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-8">
        <motion.div
          className="lg:sticky lg:top-28 lg:self-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Why RCI</p>
          <h2 className="mt-5 max-w-md font-serif text-4xl font-semibold leading-[1.06] text-dark sm:text-5xl">A capable team you can work with directly.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-gray-600">Practical expertise, clear thinking and a long-term view of the products we build together.</p>
        </motion.div>

        <div className="border-t border-gray-200">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                className="group grid gap-5 border-b border-gray-200 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex h-11 w-11 items-center justify-center border border-coral/30 text-coral transition-colors duration-200 group-hover:bg-coral group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.65} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-dark">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
