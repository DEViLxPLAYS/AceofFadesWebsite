import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import Logo from '../Logo';
import styles from './ChatBot.module.scss';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  'What are your opening hours?',
  'How do I book an appointment?',
  'What services do you offer?',
  'Where are you located?',
];

// Local knowledge base fallback
const knowledgeBase: Record<string, string> = {
  hours: 'We are open Monday–Friday 9AM–8PM, Saturday 8AM–7PM, and Sunday 10AM–5PM.',
  opening: 'We are open Monday–Friday 9AM–8PM, Saturday 8AM–7PM, and Sunday 10AM–5PM.',
  book: 'You can book an appointment by calling us at +44 (0) 123 456 7890, through WhatsApp, or by filling out our contact form on the website.',
  appointment: 'You can book an appointment by calling us at +44 (0) 123 456 7890, through WhatsApp, or by filling out our contact form on the website.',
  services: 'We offer Signature Haircuts, Beard Sculpting, Hair Coloring, Scalp Treatments, Kids Cuts, and our Royal Package. Check the Services section for full details and pricing!',
  price: 'Our packages start from £25 (Classic), £45 (Premium), and £75 (Royal). Individual services start from £12 for kids cuts.',
  pricing: 'Our packages start from £25 (Classic), £45 (Premium), and £75 (Royal). Individual services start from £12 for kids cuts.',
  location: 'We are located at 123 High Street, London, W1 2AB. There is free street parking and a car park a 2-minute walk away.',
  where: 'We are located at 123 High Street, London, W1 2AB. There is free street parking and a car park a 2-minute walk away.',
  parking: 'Yes! There is free street parking on surrounding streets and a pay-and-display car park just a 2-minute walk from the salon.',
  walk: 'We welcome both walk-ins and appointments. We recommend booking in advance for weekends and peak hours.',
  kids: 'Absolutely! We welcome kids aged 3 and above. Our barbers are great with young clients. Kids cuts start from £12.',
  products: 'We use premium products including Reuzel, Uppercut Deluxe, and American Crew. We also sell our own curated range.',
  payment: 'We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and contactless payments.',
  loyalty: 'Yes! After every 5 visits, you receive a complimentary service upgrade. Ask our team for details.',
  group: 'We offer group bookings for weddings, stag parties, and events. Contact us for custom packages.',
};

const findResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(knowledgeBase)) {
    if (lower.includes(key)) return value;
  }
  return "Thanks for your message! For specific enquiries, please call us at +44 (0) 123 456 7890 or use the contact form. We'd love to help you look your best! ✨";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Welcome to Ace of Fades! ✂️ I'm here to help you with bookings, services, pricing, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Try backend first, fallback to local
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              text: data.reply,
              sender: 'bot',
              timestamp: new Date(),
            },
          ]);
          setIsTyping(false);
        }, 800);
        return;
      }
    } catch {
      // Fallback to local
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: findResponse(text),
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatbot}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.avatar}>
                  <Logo size={32} />
                </div>
                <div>
                  <h4>Ace of Fades</h4>
                  <span className={styles.status}>
                    <span className={styles.dot} /> Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            <div className={styles.messages}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`${styles.message} ${styles[msg.sender]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === 'bot' && (
                    <div className={styles.msgAvatar}>
                      <Logo size={20} />
                    </div>
                  )}
                  <div className={styles.msgBubble}>
                    <p>{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className={`${styles.message} ${styles.bot}`}>
                  <div className={styles.msgAvatar}>
                    <Logo size={20} />
                  </div>
                  <div className={styles.typing}>
                    <span /><span /><span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className={styles.quickReplies}>
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className={styles.quickReply}
                  onClick={() => sendMessage(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.fab}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && <Sparkles size={12} className={styles.fabSparkle} />}
      </motion.button>
    </>
  );
};

export default ChatBot;
