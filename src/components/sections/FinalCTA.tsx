import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { buttonVariants } from '../common/Button';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-28 sm:py-32">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,transparent_47%,rgba(224,74,63,0.5)_47.2%,rgba(224,74,63,0.5)_47.5%,transparent_47.7%)] [background-size:520px_520px]" />
      <div className="absolute right-0 -top-20 font-serif text-[17rem] font-semibold leading-none text-coral/10 sm:text-[24rem]">+</div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Get in touch</p>
          <h2 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Tell us what you're building. We'll help you work out the right solution.
          </p>
          <div className="mt-9">
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
