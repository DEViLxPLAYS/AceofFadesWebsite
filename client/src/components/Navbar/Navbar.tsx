import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';
import styles from './Navbar.module.scss';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Deals', href: '/deals' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <Logo size={220} className={styles.navLogo} />
          <span className={styles.wordmark}>
            ACE <span className={styles.accent}>OF</span> FADES
          </span>
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`${styles.navLink} ${location.pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="https://wa.me/923065055467" target="_blank" rel="noopener noreferrer" className={styles.bookBtn}>
            BOOK NOW
          </a>
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.mobileMenuInner}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={styles.mobileLink}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://wa.me/923065055467"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCta}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
