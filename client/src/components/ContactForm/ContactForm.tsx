import { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Ace of Fades!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service Interested In:* ${formData.service}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/923494588610?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Book Your Appointment</h2>
          <p>Fill out the form below and we'll connect with you on WhatsApp instantly.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" />
          </div>
          <div className={styles.inputGroup}>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>Select a Service</option>
              <option value="Haircut">Haircut</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Haircut & Beard">Haircut & Beard</option>
              <option value="Facial / Skin Care">Facial / Skin Care</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us what you need..."></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send on WhatsApp <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
