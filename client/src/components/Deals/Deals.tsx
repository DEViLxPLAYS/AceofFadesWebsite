import { motion } from 'framer-motion';
import styles from './Deals.module.scss';

const deals = [
  {
    number: '3',
    price: '1,500',
    title: 'Upto 50% Discount',
    includes: [
      'Hand Polish',
      'Feet Polish',
      'Stylish Haircut',
      'Stylish Beard Shave',
      'Cleansing + Head Wash',
    ],
  },
  {
    number: '4',
    price: '3,000',
    title: 'Upto 50% Discount',
    includes: [
      'Haircut + Styling',
      'Beard',
      'Cleansing',
      'Face Wash',
      'Protein Hair Treatment',
    ],
  },
];

const Deals = () => {
  return (
    <section id="deals" className={styles.deals}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>✦ Special Offers</span>
          <h2 className="section-title">
            Exclusive <span className="accent">Deal</span> Packages
          </h2>
          <p className="section-subtitle">
            Premium grooming packages designed to give you the ultimate Ace of
            Fades experience at an exceptional value.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {deals.map((deal, i) => (
            <motion.div
              key={deal.number}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className={styles.ghostNumber}>#{deal.number}</div>
              <div className={deal.number === '4' ? styles.tagOutline : styles.tagSolid}>
                ✦ Deal #{deal.number}
              </div>

              <div className={styles.priceWrap}>
                <span className={styles.currency}>Rs.</span>
                <span className={styles.price}>{deal.price}</span>
              </div>
              <p className={styles.subtitle}>{deal.title}</p>

              <ul className={styles.includesList}>
                {deal.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.discountBadge}>
                <span>50%</span>
                <span>OFF</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
