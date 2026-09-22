import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { buttonVariants } from '../common/Button';
import { services } from '../../data/services';

export function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            align="left"
            label="What We Do"
            title="Services built for modern businesses"
            subtitle="From your first website to a fully custom web application, we cover the full range of digital product needs."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const primary = index < 2;
            return (
              <motion.article
                key={service.id}
                className={`group relative bg-white p-7 transition-colors duration-300 hover:bg-[#fff8f6] sm:p-9 ${primary ? 'md:col-span-6 lg:min-h-[320px]' : 'md:col-span-6 lg:min-h-[235px]'}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs font-semibold tracking-[0.14em] text-gray-400">0{index + 1}</span>
                    <div className="flex h-11 w-11 items-center justify-center border border-coral/25 text-coral transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-coral group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.65} />
                    </div>
                  </div>
                  <div className={primary ? 'mt-auto pt-12' : 'mt-9'}>
                    <h3 className={`${primary ? 'text-2xl sm:text-3xl' : 'text-xl'} font-semibold leading-tight tracking-tight text-dark`}>
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <motion.div
          className="mt-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/services" className={buttonVariants({ variant: 'outline', size: 'md' })}>
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
