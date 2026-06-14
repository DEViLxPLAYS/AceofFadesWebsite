import { motion } from 'framer-motion';
import styles from './Services.module.scss';

const standardServices = [
  { id: 1, name: 'Beard', price: 'Rs. 300', emoji: '🧔' },
  { id: 2, name: 'Haircut', price: 'Rs. 400', emoji: '✂️' },
  { id: 3, name: 'Beard + Haircut', price: 'Rs. 700', emoji: '💈' },
  { id: 5, name: 'Full Body Manicure & Pedicure with Haircut and Beard', price: 'Rs. 2,000', emoji: '✨' },
];

const getWaLink = (service: string) => `https://wa.me/923494588610?text=I%20want%20to%20book%20a%20${encodeURIComponent(service)}`;

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>✦ Our Premium Services</span>
          <h2 className="section-title">
            Our <span className="accent">Premium</span> Services
          </h2>
          <p className="section-subtitle">
            Experience the finest grooming in Bahawalpur. We don't just cut hair — we craft confidence.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {standardServices.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.emoji}>{service.emoji}</div>
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.cardDesc}>Precision grooming tailored to your style.</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.session}>/session</span>
              </div>
              <a href={getWaLink(service.name)} target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                Book This <span>→</span>
              </a>
            </motion.div>
          ))}

          {/* Featured Card (Full Width) */}
          <motion.div
            className={`${styles.card} ${styles.featuredCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.badge}>MOST POPULAR</div>
            <div className={styles.featuredGrid}>
              <div className={styles.featuredDetails}>
                <div className={styles.emoji}>💆‍♂️</div>
                <h3 className={styles.cardTitle}>Beard + Haircut + Head Massage</h3>
                <p className={styles.cardDesc}>The ultimate relaxation package. Sharp cut, styled beard, and a soothing head massage.</p>
                <a href={getWaLink('Beard + Haircut + Head Massage')} target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                  Book This <span>→</span>
                </a>
              </div>
              <div className={styles.featuredPrice}>
                <span className={styles.priceLarge}>Rs. 1,200</span>
              </div>
              <div className={styles.featuredIncludes}>
                <h4>Includes:</h4>
                <ul>
                  <li>Precision Haircut</li>
                  <li>Beard Styling & Shave</li>
                  <li>Relaxing Head Massage</li>
                  <li>Hot Towel Treatment</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.emoji}>{standardServices[3].emoji}</div>
            <h3 className={styles.cardTitle}>{standardServices[3].name}</h3>
            <p className={styles.cardDesc}>Complete top-to-bottom grooming package.</p>
            <div className={styles.priceRow}>
              <span className={styles.price}>{standardServices[3].price}</span>
              <span className={styles.session}>/session</span>
            </div>
            <a href={getWaLink(standardServices[3].name)} target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
              Book This <span>→</span>
            </a>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            className={`${styles.card} ${styles.groomCard}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.badgePremium}>PREMIUM</div>
            <div className={styles.emoji}>👑</div>
            <h3 className={styles.cardTitle}>Groom Styling</h3>
            <p className={styles.cardDesc}>Our most comprehensive offering — designed to make you look and feel perfect for your wedding.</p>
            <div className={styles.priceRow}>
              <span className={styles.price}>Rs. 5,000</span>
              <span className={styles.session}>/session</span>
            </div>
            <a href={getWaLink('Groom Styling')} target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
              Book This <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
