import { motion } from 'motion/react';
import { capabilities } from '../../data/capabilities';

export function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-28">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_49.8%,rgba(255,255,255,0.14)_50%,transparent_50.2%)] [background-size:96px_100%]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Engineering capability</p>
            <h2 className="mt-5 max-w-lg font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">Technology that holds up after launch.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-gray-300">A deliberate, production-ready stack selected for the needs of your product, not for the sake of a trend.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.category}
              className="border-b border-white/15 py-8 sm:border-r sm:px-7 sm:first:pl-0 sm:nth-[2n]:border-r-0 lg:border-b-0 lg:nth-[2n]:border-r lg:last:border-r-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral">{capability.category === 'Deployment' ? 'Infrastructure' : capability.category}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {capability.items.map((item) => <li key={item} className="border border-white/15 px-3 py-1.5 text-sm text-gray-200">{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
