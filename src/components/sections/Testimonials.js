import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import SectionTag from '../ui/SectionTag';
import { testimonialsData } from '../../data/testimonials';
import './Testimonials.css';

function StarRating({ count }) {
  return <div className="testi-stars">{'★'.repeat(count)}</div>;
}

function TestiCard({ t, delay }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className={`testi-card${t.featured ? ' featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
    >
      <StarRating count={t.stars} />
      <p className="testi-quote">{t.quote}</p>
      <div className="testi-author">
        <div className="testi-avatar">{t.initials}</div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function CounterStat({ target, suffix, label }) {
  const { ref, count } = useCounterAnimation(target);
  return (
    <div className="testi-stat" ref={ref}>
      <div className="num">
        <span style={{ color: 'var(--accent)' }}>{count}</span>
        <span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Testimonials</SectionTag>
          <h2 className="section-title">what clients say</h2>
        </motion.div>
        <div>
          <div className="testi-stats">
            <CounterStat target={100} suffix="%" label="Satisfaction Rate" />
            <CounterStat target={2} suffix="+" label="Projects Delivered" />
          </div>
          <div className="testi-note">* Actively seeking first freelance clients. Testimonials below reflect project collaborations and peer reviews.</div>
        </div>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((t, i) => (
          <TestiCard key={t.id} t={t} delay={i * 0.1} />
        ))}
      </div>
      <p className="testi-placeholder-note">Working on getting your first paid client review? This section will fill up fast once you start freelancing.</p>
    </section>
  );
}
