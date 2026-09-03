import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { processSteps } from '../../data/process';

export function HowWeWork() {
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
            label="Our Process"
            title="How we work"
            subtitle="A straightforward process built around your project — not the other way round."
          />
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-200 z-0" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              className="relative z-10 flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Step number circle */}
              <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center mb-5 relative">
                <span className="text-xs font-bold text-coral absolute -top-2 -right-2 bg-coral-50 rounded-full w-6 h-6 flex items-center justify-center border border-coral/20">
                  {step.step}
                </span>
                <span className="text-base font-bold text-gray-900">{step.title.charAt(0)}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
