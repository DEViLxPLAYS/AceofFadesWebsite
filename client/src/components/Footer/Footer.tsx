import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Logo from '../Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.top}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.brand}>
            <Logo size={200} />
            <p className={styles.brandDesc}>
              Premium men's grooming in Bahawalpur. Crafted for the modern man.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/about">Our Story</Link>
              <Link to="/services">Services</Link>
              <Link to="/deals">Deals</Link>
            </div>
            <div className={styles.linkColumn}>
              <h4>Contact</h4>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Location</Link>
              <a href="https://wa.me/923494588610" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://www.instagram.com/aceoffades2024" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>Hours</h4>
              <p>Mon–Thu: 12PM – 12AM</p>
              <p>Fri: 2PM – 12AM</p>
              <p>Sat–Sun: 12PM – 12AM</p>
            </div>
          </div>
        </motion.div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Ace of Fades. Owned by Hassan Malik. All rights reserved.
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            Back to top <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
