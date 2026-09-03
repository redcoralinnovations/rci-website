import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { buttonVariants } from '../common/Button';

export function FinalCTA() {
  return (
    <section className="py-24 bg-dark overflow-hidden relative">
      {/* Subtle coral radial */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-6">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed">
            Tell us what you're building. We'll help you work out the right solution.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
