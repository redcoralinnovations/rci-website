import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { buttonVariants } from '../common/Button';
import heroConcept from '../../assets/rci-hero-concept.png';

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Soft coral glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main UI card */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Window chrome */}
          <div className="bg-gray-50/80 border-b border-gray-100 px-4 py-3 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <div className="ml-2 h-3 w-32 bg-gray-200/80 rounded-full" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* Nav mockup */}
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-10 bg-gray-200 rounded-full" />
              <div className="h-2.5 w-8 bg-gray-200 rounded-full" />
              <div className="h-2.5 w-12 bg-gray-200 rounded-full" />
              <div className="ml-auto h-5 w-16 bg-coral rounded-md" />
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-gray-50 rounded-xl p-3.5">
                <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wide">Revenue</div>
                <div className="text-lg font-bold text-gray-900">£48.2k</div>
                <div className="text-[10px] text-emerald-500 font-medium mt-0.5">↑ 12% this month</div>
              </div>
              <div className="bg-coral-50 rounded-xl p-3.5 border border-coral/10">
                <div className="text-[10px] text-coral/70 mb-1 uppercase tracking-wide">Projects</div>
                <div className="text-lg font-bold text-coral">24</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Active</div>
              </div>
            </div>

            {/* Chart bars */}
            <div className="space-y-2">
              {[
                { label: 'Web', w: 85, accent: true },
                { label: 'Apps', w: 62, accent: false },
                { label: 'SaaS', w: 90, accent: false },
                { label: 'IT', w: 48, accent: false },
              ].map(({ label, w, accent }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="text-[10px] text-gray-400 w-6 shrink-0">{label}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${accent ? 'bg-coral' : 'bg-gray-300'}`}
                      style={{ width: `${w}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live badge */}
        <div className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-gray-700">Live</span>
        </div>

        {/* Performance badge */}
        <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3.5 py-2.5 shadow-lg border border-gray-100">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide">Performance</div>
          <div className="text-sm font-bold text-coral mt-0.5">98 / 100</div>
        </div>
      </div>
    </div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: false,
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf7]">
      {/* Dot grid */}
      <div className="absolute inset-0 [background-image:radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF9] via-[#FAFAF9]/90 to-coral/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
          <div className="relative mx-auto grid min-h-[min(780px,100svh)] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-24">
          {/* Left: text */}
          <div>



              <motion.p
                className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-coral"
                {...fadeUp(0)}
              >
                <span className="h-px w-9 bg-coral" />
                Your partner in digital growth
              </motion.p>
              <motion.h1
                className="max-w-xl font-serif text-5xl font-semibold leading-[0.98] tracking-normal text-dark sm:text-6xl lg:text-[4.5rem] xl:text-[5.1rem]"
                {...fadeUp(0.08)}
              >
                We design and build digital products that <span className="text-coral">move businesses forward.</span>
              </motion.h1>
              <motion.p
                className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg"
                {...fadeUp(0.16)}
              >
                Custom websites, web applications and software solutions, designed, developed and
                supported by Red Coral Innovations.
              </motion.p>
              <motion.div className="mt-9 flex flex-wrap gap-3" {...fadeUp(0.24)}>
                <Link to="/contact" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                  Explore Our Services
                </Link>
              </motion.div>
          </div>

          {/* Right: abstract visual */}
            <motion.div
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
            >
              <div className="absolute -left-3 top-[14%] h-20 w-20 border-l border-t border-coral/50 sm:-left-6 sm:h-32 sm:w-32" />
              <div className="absolute -bottom-5 right-[5%] h-24 w-24 border-b border-r border-dark/15 sm:h-36 sm:w-36" />
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-coral/10 blur-2xl" />
              <div className="relative overflow-hidden border border-dark/10 bg-white p-2 shadow-[0_28px_70px_-30px_rgba(15,17,24,0.35)] sm:p-3">
                <img
                  src={heroConcept}
                  alt="A preview of a Red Coral Innovations digital product interface"
                  className="aspect-[1.14] w-full object-cover"
                />
              </div>
              <p className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                Digital products, built with intent
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
