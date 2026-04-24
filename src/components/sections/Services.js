import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTag from '../ui/SectionTag';
import { servicesData } from '../../data/services';
import { AndroidIcon, FlutterIcon, AIIcon, DatabaseIcon } from '../ui/ServiceIcons';
import './Services.css';

// Map iconKey → SVG component
const iconMap = {
  android: AndroidIcon,
  flutter: FlutterIcon,
  ai: AIIcon,
  database: DatabaseIcon,
};

// Removed per-card theme array — now uses global accent variables

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7l3.5 3.5L12 3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ServiceCard({ service, index, delay }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const IconComponent = iconMap[service.iconKey];

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      style={{
        '--card-color':  'var(--accent)',
        '--card-bg':     'var(--accent-dim)',
        '--card-glow':   'var(--accent-glow)',
        '--card-border': 'var(--accent-border)',
      }}
    >
      {/* Corner glow */}
      <motion.div
        className="card-corner-glow"
        variants={{ hover: { opacity: 1, scale: 1.3 } }}
        initial={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Top accent line */}
      <motion.div
        className="card-top-line"
        variants={{ hover: { scaleX: 1 } }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ background: `linear-gradient(90deg, var(--accent), transparent)` }}
      />

      {/* Header */}
      <div className="card-header">
        <motion.div
          className="card-icon-wrap"
          variants={{ hover: { scale: 1.12, rotate: -5 } }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {IconComponent && <IconComponent size={30} color="var(--accent)" />}
        </motion.div>
        <span className="card-num">{service.num}</span>
      </div>

      {/* Titles */}
      <div className="card-titles">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-subtitle">{service.subtitle}</p>
      </div>

      {/* Separator */}
      <div className="card-sep" style={{ background: `linear-gradient(90deg, var(--accent-border), transparent)` }} />

      {/* Feature list */}
      <ul className="card-list">
        {service.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: delay + 0.08 + i * 0.055 }}
          >
            <span className="check-icon"><CheckIcon color="var(--accent)" /></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="services" id="skills">
      <motion.div
        ref={ref}
        className="services-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionTag>What I Do</SectionTag>
        <h2 className="section-title">what I can<br />build for you</h2>
        <p>I architect and develop high-performance mobile applications utilizing Native Android and Flutter. My focus is on delivering secure, scalable, and enterprise-grade solutions that offer seamless user experiences and solve complex business challenges.</p>
      </motion.div>

      <div className="services-grid">
        {servicesData.map((s, i) => (
          <ServiceCard key={s.num} service={s} index={i} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
