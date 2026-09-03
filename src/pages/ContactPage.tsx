import { useState } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { motion } from 'motion/react';
import { PageHero } from '../components/common/PageHero';
import { Button } from '../components/common/Button';

const serviceOptions = [
  'Web Design & Development',
  'Custom Software Development',
  'Hosting & Application Management',
  'Digital Growth & IT Solutions',
  'Not sure yet',
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  company: '',
  service: '',
  details: '',
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to a form service or serverless function
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Start a project with RCI"
        subtitle="Tell us what you're building. We'll respond within one business day."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-2xl p-10 border border-gray-100 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-coral-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-coral" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Message received</h2>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    Thank you for reaching out. We'll review your enquiry and get back to you
                    within one business day.
                  </p>
                  <button
                    className="mt-2 text-sm text-coral hover:underline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name <span className="text-coral">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-coral">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Your company (optional)"
                        className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service interested in
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors bg-white appearance-none"
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="text-sm font-medium text-gray-700">
                      Project details <span className="text-coral">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      value={form.details}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project — what you're trying to build, your timeline, and any relevant context."
                      className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition-colors bg-white resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="self-start">
                    Send Enquiry
                  </Button>

                  <p className="text-xs text-gray-400">
                    We'll respond within one business day. Your details are never shared.
                  </p>
                </motion.form>
              )}
            </div>

            {/* Contact details */}
            <aside className="lg:col-span-2">
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-7 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div>
                  <h2 className="text-base font-semibold text-gray-900 mb-1">
                    Red Coral Innovations
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Digital products, software development, and IT solutions.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-coral-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-coral" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Email</p>
                      <a
                        href="mailto:hello@redcoralinnovations.com"
                        className="text-sm text-gray-700 hover:text-coral transition-colors"
                      >
                        hello@redcoralinnovations.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-coral-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-coral" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">Offices</p>
                      <p className="text-sm text-gray-700">Trivandrum, Kerala, India</p>
                      <p className="text-sm text-gray-700">Cambridge, United Kingdom</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-coral-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LinkedinIcon className="w-4 h-4 text-coral" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/company/redcoral-innovations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 hover:text-coral transition-colors"
                      >
                        redcoral-innovations
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-gray-200">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We typically respond to all enquiries within one business day.
                  </p>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
