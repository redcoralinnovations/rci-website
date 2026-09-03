import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { buttonVariants } from '../common/Button';

function HeroVisual() {
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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#FAFAF9]">
      {/* Dot grid */}
      <div className="absolute inset-0 [background-image:radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF9] via-[#FAFAF9]/90 to-coral/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center text-xs font-semibold text-coral uppercase tracking-widest mb-6 bg-coral-50 px-3.5 py-1.5 rounded-full border border-coral/10">
                Red Coral Innovations
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              {...fadeUp(0.1)}
            >
              We design and build digital products that{' '}
              <span className="text-coral">move businesses forward.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl"
              {...fadeUp(0.2)}
            >
              Custom websites, web applications and software solutions — designed, developed
              and supported by Red Coral Innovations.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeUp(0.3)}>
              <Link to="/contact" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          {/* Right: abstract visual */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
