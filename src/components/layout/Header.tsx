import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { buttonVariants } from '../common/Button';
import { cn } from '../../utils/cn';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoMissing, setLogoMissing] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Red Coral Innovations">
            {logoMissing ? (
              <>
                <span className="text-coral font-bold text-xl tracking-tight">RCI</span>
                <span className="hidden sm:inline text-gray-700 font-medium text-sm">
                  Red Coral Innovations
                </span>
              </>
            ) : (
              <img
                src="/rci-logo.png"
                alt="Red Coral Innovations"
                className="h-12 w-auto max-w-[260px] object-contain"
                onError={() => setLogoMissing(true)}
              />
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150',
                    isActive
                      ? 'text-coral'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'hidden sm:inline-flex')}
            >
              Start a Project
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                      isActive
                        ? 'text-coral bg-coral-50'
                        : 'text-gray-700 hover:bg-gray-50',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 mt-1 border-t border-gray-100">
                <Link
                  to="/contact"
                  className={buttonVariants({ variant: 'primary', size: 'md', className: 'w-full' })}
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
