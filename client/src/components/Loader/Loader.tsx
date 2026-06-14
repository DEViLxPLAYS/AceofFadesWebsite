import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import styles from './Loader.module.scss';

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Logo size={160} className={styles.logo} />
            <motion.div
              className={styles.line}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />
            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Men's Luxury Salon
            </motion.p>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          <div className={styles.ambientGlow} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
