import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Phone } from 'lucide-react';
import Logo from '../Logo';
import styles from './FAQ.module.scss';

const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'We welcome both walk-ins and appointments. However, booking via WhatsApp guarantees your preferred time slot and avoids waiting. Message us on 0349-4588610 to reserve your spot.',
  },
  {
    q: 'Where exactly is Ace of Fades located?',
    a: "We're located at Gulberg Road, chowk, near Al Kifaya super mart, Cheema Town Bahawalpur, Bahawalpur, 63100. Easy to find and conveniently accessible.",
  },
  {
    q: "What's included in the Groom Styling package?",
    a: 'Our Groom Styling package (Rs. 5,000) is our most comprehensive offering — designed to make you look and feel perfect for your wedding or formal event. Contact us for a personalized consultation.',
  },
  {
    q: 'How long does a typical session take?',
    a: 'A standard haircut takes 30–45 minutes. Beard + Haircut combos 45–60 minutes. Full packages like Groom Styling can take 1.5–2 hours. We never rush your experience.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash and bank transfers. For queries, contact via WhatsApp or call 0349-4588610.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.faqList}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>✦ FAQ</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Got <span className="accent">Questions?</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              Everything you need to know about our services, booking process, and what to expect during your visit.
            </p>
          </div>

          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className={styles.questionRow}>
                  <h3>{faq.q}</h3>
                  <div className={styles.iconWrap}>
                    <Plus size={20} className={styles.icon} />
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.answerWrap}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.logoCircle}>
              <Logo size={60} />
            </div>
            <h3>Still have questions?</h3>
            <p>
              Chat with our AI assistant below, or reach us directly on WhatsApp or phone — Hassan and the team are happy to help.
            </p>
            <a href="https://wa.me/923494588610" target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a href="tel:03494588610" className={styles.callBtn}>
              <Phone size={20} />
              0349-4588610
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
