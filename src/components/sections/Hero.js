import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// PersonIcon removed as it's no longer used

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -120]);
  const x1 = useTransform(scrollY, [0, 500], [0, 50]);

  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const x2 = useTransform(scrollY, [0, 500], [0, -60]);

  const y3 = useTransform(scrollY, [0, 500], [0, -70]);
  const x3 = useTransform(scrollY, [0, 500], [0, -40]);

  const y4 = useTransform(scrollY, [0, 500], [0, 90]);
  const x4 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div className="hero-badge" {...fadeUp(0.1)}>
          <span className="badge-dot" />
          Available for work
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.25)}>
          Muhammad<br />Saqib Ali
        </motion.h1>

        <motion.div className="hero-title" {...fadeUp(0.4)}>
          mobile<br />developer
        </motion.div>

        <motion.p className="hero-sub" {...fadeUp(0.55)}>
          I build <strong>Native Android</strong> apps with Kotlin &amp; Jetpack Compose,
          and cross-platform apps with <strong>Flutter</strong> — using clean architecture
          and real AI integrations that solve actual business problems.
        </motion.p>

        <motion.div className="hero-btns" {...fadeUp(0.7)}>
          <a href="#projects" className="btn-primary">
            View Projects <ArrowIcon />
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Parallax Floating Cards */}
      <motion.div className="parallax-wrap pw-1" style={{ y: y1, x: x1 }}>
        <div className="parallax-card">
          <div className="float-label">Projects Delivered</div>
          <div className="float-value accent">1</div>
        </div>
      </motion.div>
      
      <motion.div className="parallax-wrap pw-2" style={{ y: y2, x: x2 }}>
        <div className="parallax-card">
          <div className="float-label">Stack</div>
          <div className="float-value">Android &amp; Flutter</div>
        </div>
      </motion.div>

      <motion.div className="parallax-wrap pw-3" style={{ y: y3, x: x3 }}>
        <div className="parallax-card">
          <div className="float-label">UI/UX Focus</div>
          <div className="float-value">Pixel Perfect</div>
        </div>
      </motion.div>

      <motion.div className="parallax-wrap pw-4" style={{ y: y4, x: x4 }}>
        <div className="parallax-card">
          <div className="float-label">Code Quality</div>
          <div className="float-value">Clean &amp; Scalable</div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        scroll to explore
        <div className="scroll-line" />
      </motion.div>

      <div className="hero-glow" />
    </section>
  );
}
