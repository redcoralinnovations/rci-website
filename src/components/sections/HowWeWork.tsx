import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { processSteps } from '../../data/process';

export function HowWeWork() {
  return (
    <section className="bg-[#fafaf7] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            align="left"
            label="Our Process"
            title="How we work"
            subtitle="A straightforward process built around your project — not the other way round."
          />
        </motion.div>

        <div className="relative mt-16 border-l border-gray-300 pl-7 md:grid md:grid-cols-5 md:border-l-0 md:pl-0">
          <div className="absolute left-[10%] right-[10%] top-[2.4rem] hidden h-px bg-gray-300 md:block" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className="relative z-10 pb-10 last:pb-0 md:px-4 md:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="absolute -left-[2.1rem] top-0 h-4 w-4 border-4 border-[#fafaf7] bg-coral md:relative md:left-auto md:flex md:h-20 md:w-20 md:items-center md:justify-center md:border-0 md:bg-white">
                <span className="hidden font-serif text-3xl font-semibold text-dark md:block">0{step.step}</span>
              </span>
              <div className="md:mt-6 md:text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral">Step 0{step.step}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
