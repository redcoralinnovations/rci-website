import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { buttonVariants } from '../common/Button';

export function AboutIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-5">
              About RCI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              A focused team that builds real digital products.
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Red Coral Innovations works with businesses to design, build, launch, and maintain
              practical digital solutions. We combine solid technical capability with a clear,
              direct way of working.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We're based in Trivandrum, India and Cambridge, UK — and we work with clients
              across both regions and beyond.
            </p>
            <div className="mt-8">
              <Link to="/about" className={buttonVariants({ variant: 'secondary', size: 'md' })}>
                About RCI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { value: '10+', label: 'Years of experience', accent: false },
              { value: '50+', label: 'Projects delivered', accent: true },
              { value: '2', label: 'Global offices', accent: false },
              { value: '100%', label: 'In-house development', accent: false },
            ].map(({ value, label, accent }) => (
              <div
                key={label}
                className={`rounded-2xl p-7 flex flex-col gap-2 ${
                  accent ? 'bg-coral text-white' : 'bg-white border border-gray-100'
                }`}
              >
                <span
                  className={`text-3xl font-bold tracking-tight ${accent ? 'text-white' : 'text-gray-900'}`}
                >
                  {value}
                </span>
                <span className={`text-sm leading-snug ${accent ? 'text-white/80' : 'text-gray-500'}`}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
