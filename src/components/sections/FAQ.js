import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTag from '../ui/SectionTag';
import { faqData } from '../../data/faq';
import './FAQ.css';

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <span className="faq-q-text">{item.question}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0, background: isOpen ? 'var(--accent)' : 'transparent' }}
          transition={{ duration: 0.3 }}
          style={{ color: isOpen ? '#0c0c0e' : 'var(--text-muted)', borderColor: isOpen ? 'var(--accent)' : 'var(--border)' }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="faq-answer-inner">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="faq" id="faq">
      <motion.div
        ref={ref}
        className="faq-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionTag>FAQ</SectionTag>
        <h2 className="section-title">common questions</h2>
        <p>Everything you'd typically ask before we start working together — answered honestly.</p>
      </motion.div>
      <div className="faq-list">
        {faqData.map((item) => (
          <FaqItem 
            key={item.id} 
            item={item} 
            isOpen={openId === item.id} 
            onToggle={() => handleToggle(item.id)} 
          />
        ))}
      </div>
    </section>
  );
}
