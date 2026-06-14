import styles from './Marquee.module.scss';

const Marquee = () => {
  const text = "Precision Haircuts · Expert Beard Styling · Luxury Grooming · Groom Styling · Ace of Fades · Bahawalpur's Finest · Hassan Malik · Premium Salon Experience";
  const items = text.split(' · ');

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeContent}>
        {/* Render twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {items.map((item, idx) => (
              <span key={`${i}-${idx}`} className={styles.item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
