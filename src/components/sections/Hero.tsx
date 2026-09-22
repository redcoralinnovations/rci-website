import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Cloud, Layers3, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { buttonVariants } from '../common/Button';

type CapabilityCardProps = {
  icon: typeof Layers3;
  label: string;
  className: string;
};

function CapabilityCard({ icon: Icon, label, className }: CapabilityCardProps) {
  return (
    <div className={`absolute hidden items-center gap-2 border border-dark/10 bg-white/90 px-3 py-2 shadow-[0_12px_28px_-18px_rgba(15,17,24,0.35)] backdrop-blur-sm sm:flex ${className}`}>
      <Icon className="h-3.5 w-3.5 text-coral" strokeWidth={1.75} />
      <span className="text-[10px] font-semibold tracking-wide text-dark">{label}</span>
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[38rem] select-none py-8 sm:py-12 lg:py-8">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/15 blur-3xl" />
      <div className="absolute inset-x-[11%] top-[16%] bottom-[16%] bg-[radial-gradient(rgba(15,17,24,0.14)_1px,transparent_1px)] bg-[size:14px_14px] opacity-60" />
      <div className="absolute -left-1 top-[17%] h-24 w-24 border-l border-t border-coral/60 sm:-left-5 sm:h-32 sm:w-32" />
      <div className="absolute bottom-[8%] right-2 h-20 w-20 border-b border-r border-dark/15 sm:right-7 sm:h-28 sm:w-28" />

      <motion.div
        className="relative z-10 mx-auto w-[92%] border border-dark/10 bg-[#fdfdfb] shadow-[0_28px_70px_-36px_rgba(15,17,24,0.45)]"
        initial={false}
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex h-10 items-center border-b border-dark/10 bg-white px-3 sm:px-4">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-coral/75" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <div className="mx-auto h-4 w-28 border border-gray-200 bg-gray-50 sm:w-40" />
          <div className="h-4 w-5" />
        </div>

        <div className="grid min-h-[260px] grid-cols-[3.4rem_1fr] sm:min-h-[330px] sm:grid-cols-[4.5rem_1fr]">
          <aside className="border-r border-dark/10 bg-[#f8f8f6] px-3 py-4">
            <div className="h-5 w-5 bg-coral" />
            <div className="mt-7 space-y-4">
              <span className="block h-1.5 w-5 bg-dark/20" />
              <span className="block h-1.5 w-5 bg-dark/12" />
              <span className="block h-1.5 w-5 bg-dark/12" />
            </div>
          </aside>

          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-coral">RCI Studio</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-dark sm:text-2xl">Build what&apos;s next</h3>
              </div>
              <div className="flex h-7 w-7 items-center justify-center bg-dark text-white">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-[1.3fr_0.7fr] gap-3 sm:gap-4">
              <div className="border border-dark/10 bg-white p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">Momentum</p>
                  <Activity className="h-3.5 w-3.5 text-coral" strokeWidth={1.7} />
                </div>
                <div className="mt-4 flex h-16 items-end gap-1.5 sm:h-20">
                  {[32, 48, 42, 68, 56, 82, 76].map((height, index) => (
                    <span key={height} className={`w-full ${index === 5 ? 'bg-coral' : 'bg-dark/12'}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="border border-dark/10 bg-[#fff7f5] p-3 sm:p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-500">Active</p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-dark sm:text-3xl">24</p>
                <div className="mt-3 h-1.5 w-full bg-coral/20"><span className="block h-full w-2/3 bg-coral" /></div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="border border-dark/10 bg-white p-3">
                <div className="flex items-center gap-2"><span className="h-2 w-2 bg-coral" /><span className="text-[10px] font-semibold text-dark">Project system</span></div>
                <span className="mt-3 block h-1.5 w-4/5 bg-dark/12" />
              </div>
              <div className="border border-dark/10 bg-white p-3">
                <div className="flex items-center gap-2"><span className="h-2 w-2 border border-coral" /><span className="text-[10px] font-semibold text-dark">Ready to ship</span></div>
                <span className="mt-3 block h-1.5 w-3/5 bg-dark/12" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[1%] right-[1%] z-20 hidden w-32 border border-dark/10 bg-white p-3 shadow-[0_18px_35px_-22px_rgba(15,17,24,0.5)] sm:block lg:right-0"
        initial={false}
        animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="mx-auto h-1 w-7 bg-dark/15" />
        <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.15em] text-coral">Mobile view</p>
        <span className="mt-2 block h-2 w-4/5 bg-dark" />
        <span className="mt-2 block h-1.5 w-full bg-dark/10" />
        <span className="mt-1 block h-1.5 w-3/5 bg-dark/10" />
        <div className="mt-4 h-12 bg-coral/10 p-2"><span className="block h-full w-3/4 bg-coral" /></div>
      </motion.div>

      <CapabilityCard icon={Layers3} label="Web Applications" className="left-[5%] top-[7%]" />
      <CapabilityCard icon={Cloud} label="Cloud & Hosting" className="right-3 top-[15%] md:hidden lg:flex" />
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
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,17,24,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,17,24,0.035)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-[34rem] w-[34rem] -translate-y-1/4 translate-x-1/3 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(780px,100svh)] max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="relative z-10 max-w-2xl lg:col-span-7">
          <motion.p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-coral" {...fadeUp(0)}>
            <span className="h-px w-9 bg-coral" />
            Your partner in digital growth
          </motion.p>
          <motion.h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.02] tracking-normal text-dark sm:text-6xl lg:text-5xl xl:text-[2.9rem]" {...fadeUp(0.08)}>
            We design and build <span className="text-coral">digital products</span> that move businesses forward.
          </motion.h1>
          <motion.p className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg" {...fadeUp(0.16)}>
            Custom websites, web applications and software solutions, designed, developed and supported by Red Coral Innovations.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...fadeUp(0.24)}>
            <Link to="/contact" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Explore Our Services</Link>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none" initial={false} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <HeroVisual />
          <p className="mt-1 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Digital products, built with intent</p>
        </motion.div>
      </div>
    </section>
  );
}
