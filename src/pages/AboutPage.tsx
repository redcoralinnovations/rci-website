import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/common/PageHero';
import { FinalCTA } from '../components/sections/FinalCTA';
import { buttonVariants } from '../components/common/Button';

const values = [
  {
    title: 'Practical over impressive',
    description:
      'We focus on building things that work for your business, not on showcasing technology for its own sake.',
  },
  {
    title: 'Transparent by default',
    description:
      'You always know what we are building, why, and what it will cost. No surprises, no scope creep by stealth.',
  },
  {
    title: 'Built to last',
    description:
      'We write clean, maintainable code so that your product can be extended, updated, and handed over without a rewrite.',
  },
  {
    title: 'Always improving',
    description:
      'The digital landscape changes quickly. We keep our skills and tooling current so your product benefits from it.',
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About RCI"
        title="A team that builds digital products properly."
        subtitle="Red Coral Innovations works with businesses to design, build, and maintain practical digital solutions — without the fluff."
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                Who we are
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Red Coral Innovations is a software and digital product company with offices in
                Trivandrum, India and Cambridge, UK. We work directly with businesses to design,
                build, and support websites, web applications, and digital platforms.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Our team combines strong technical expertise — across frontend, backend, and
                infrastructure — with a direct, practical way of working. We avoid unnecessary
                complexity and focus on delivering things that actually solve the problem.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Whether you need a polished company website, a custom internal tool, or a full
                SaaS platform — we build it the right way and support it after launch.
              </p>
              <div className="mt-8">
                <Link to="/contact" className={buttonVariants({ variant: 'primary', size: 'md' })}>
                  Work with us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {[
                { n: '10+', l: 'Years of experience' },
                { n: '50+', l: 'Projects delivered' },
                { n: '2', l: 'Offices globally' },
                { n: '100%', l: 'In-house development' },
              ].map(({ n, l }, i) => (
                <div
                  key={l}
                  className={`rounded-2xl p-7 ${i === 1 ? 'bg-coral text-white' : 'bg-gray-50 border border-gray-100'}`}
                >
                  <div className={`text-3xl font-bold tracking-tight mb-1 ${i === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {n}
                  </div>
                  <div className={`text-sm ${i === 1 ? 'text-white/80' : 'text-gray-500'}`}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center max-w-xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-4">
              How we work
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              The principles we work by
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-2 h-8 bg-coral rounded-full mb-5" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center max-w-xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold text-coral uppercase tracking-widest mb-4">
              Our offices
            </span>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Where we are</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { city: 'Trivandrum', country: 'Kerala, India' },
              { city: 'Cambridge', country: 'United Kingdom' },
            ].map((loc) => (
              <div key={loc.city} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-coral" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{loc.city}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{loc.country}</p>
                  <a
                    href="mailto:hello@redcoralinnovations.com"
                    className="inline-flex items-center gap-1.5 text-coral text-sm mt-3 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    hello@redcoralinnovations.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
