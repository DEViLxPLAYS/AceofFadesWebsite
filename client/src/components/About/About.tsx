import { motion } from 'framer-motion';
import Logo from '../Logo';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* LEFT - Visual display */}
        <motion.div
          className={styles.visualSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.visualCard}>
            <div className={styles.visualGradient} />
            <Logo size={260} />
            <div className={styles.estTag}>Est. Bahawalpur</div>
          </div>

          <div className={styles.floatingPills}>
            <div className={styles.pill}>
              <span className={styles.pillValue}>500+</span>
              <span className={styles.pillLabel}>Happy Clients</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillValue}>6+</span>
              <span className={styles.pillLabel}>Premium Services</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillValue}>★ 5</span>
              <span className={styles.pillLabel}>Rated Salon</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Text content */}
        <div className={styles.textSide}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ✦ Our Story
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Crafted for the <br />
            <span className={styles.accent}>Modern Man</span>
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ace of Fades is Bahawalpur's destination for men who take their appearance seriously. We blend classic barbering traditions with contemporary style — every visit is an experience in precision, care, and confidence.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From sharp fades to full groom styling packages, our skilled team ensures you leave looking and feeling your absolute best. This isn't just a haircut — it's a statement.
          </motion.p>

          <motion.div
            className={styles.ownerCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.avatar}>HM</div>
            <div className={styles.ownerInfo}>
              <h4>Hassan Malik</h4>
              <span>✦ Owner & Master Barber</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
