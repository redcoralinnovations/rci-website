import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PageHero } from '../components/common/PageHero';
import { ServiceCard } from '../components/common/ServiceCard';
import { FinalCTA } from '../components/sections/FinalCTA';
import { buttonVariants } from '../components/common/Button';
import { services } from '../data/services';

const serviceDetails = [
  {
    id: 'web-design',
    heading: 'Web Design & Development',
    body: [
      'We build websites that are fast, accessible, and designed to convert — not just look good in a Figma file. Every project starts with a clear understanding of your business goals, then we work through design and development in close collaboration with you.',
      'Whether you need a polished marketing site, a content platform, or a customer-facing product — we build it properly, with clean code and modern standards.',
    ],
    points: [
      'Responsive, mobile-first design',
      'Performance optimised',
      'SEO-ready structure',
      'Accessibility built in',
      'CMS integration where needed',
    ],
  },
  {
    id: 'software-dev',
    heading: 'Custom Software Development',
    body: [
      'Off-the-shelf software rarely fits exactly. We build custom web applications and SaaS platforms tailored to your specific workflows, using modern technology that scales as your business grows.',
      'From internal business tools to customer-facing platforms, we handle the full development lifecycle — architecture, backend, frontend, and deployment.',
    ],
    points: [
      'Web application development',
      'SaaS platform development',
      'React + TypeScript frontend',
      'Java / Spring Boot backend',
      'REST API design & integration',
    ],
  },
  {
    id: 'hosting',
    heading: 'Hosting & Application Management',
    body: [
      'Building a product is only part of the picture. We also manage hosting, deployment, and ongoing technical maintenance so that your systems stay reliable and secure.',
      'We handle the infrastructure side — whether that is deploying to cloud platforms, managing CI/CD pipelines, or providing ongoing updates after launch.',
    ],
    points: [
      'Cloud hosting setup & management',
      'Deployment pipelines (CI/CD)',
      'Security & performance monitoring',
      'Ongoing updates & maintenance',
      'Domain & SSL management',
    ],
  },
  {
    id: 'digital-growth',
    heading: 'Digital Growth & IT Solutions',
    body: [
      'Getting online is one thing — growing your presence and making it work for your business is another. We provide practical digital marketing and IT support to help you do both.',
      'From SEO foundations and digital advertising campaigns to general IT support and technical consulting, we help businesses operate and grow online.',
    ],
    points: [
      'SEO strategy & implementation',
      'Google & social ad campaigns',
      'Analytics setup & reporting',
      'IT support & consulting',
      'Business software recommendations',
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What we build and how we help"
        subtitle="A focused set of services covering everything from your first website to a fully custom software platform."
      />

      {/* Service cards overview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <ServiceCard service={service} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service descriptions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {serviceDetails.map((detail, i) => (
              <motion.div
                key={detail.id}
                id={detail.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                    {detail.heading}
                  </h2>
                  {detail.body.map((para, j) => (
                    <p key={j} className="text-gray-500 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={buttonVariants({ variant: 'primary', size: 'md' })}
                    >
                      Discuss this service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-xs font-semibold text-coral uppercase tracking-widest mb-5">
                    What&apos;s included
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {detail.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-700 text-sm">
                        <span className="w-5 h-5 rounded-full bg-coral-50 border border-coral/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
