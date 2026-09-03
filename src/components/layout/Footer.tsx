import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const serviceLinks = [
  { to: '/services', label: 'Web Design & Development' },
  { to: '/services', label: 'Custom Software Development' },
  { to: '/services', label: 'Hosting & App Management' },
  { to: '/services', label: 'Digital Growth & IT' },
];

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About RCI' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-coral font-bold text-xl tracking-tight">RCI</span>
              <span className="text-white/70 font-medium text-sm">Red Coral Innovations</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We design, build, and support digital products for businesses that want to move
              forward — from custom websites to complex web applications.
            </p>
            <div className="flex gap-2.5 mt-6">
              <a
                href="https://www.linkedin.com/company/redcoral-innovations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Red Coral Innovations on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-coral transition-colors duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-coral transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-coral transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <a
                  href="mailto:hello@redcoralinnovations.com"
                  className="hover:text-coral transition-colors duration-150"
                >
                  hello@redcoralinnovations.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>Trivandrum, India · Cambridge, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Red Coral Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
