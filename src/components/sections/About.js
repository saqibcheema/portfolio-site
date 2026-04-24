import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import SectionTag from '../ui/SectionTag';
import './About.css';

const stats = [
  { target: 1, suffix: '', label: 'App Completed', sub: 'Calorie Counter' },
  { target: 1, suffix: '', label: 'In Progress', sub: 'Anonymous Chat App' },
  { target: 6, suffix: 'th', label: 'Semester CS', sub: 'University of Chenab' },
  { target: 15, suffix: '+', label: 'Tech Stack', sub: 'Kotlin, Flutter, Firebase' },
];

function StatRow({ stat }) {
  const { ref, count } = useCounterAnimation(stat.target);
  return (
    <div className="stat-row" ref={ref}>
      <div className="stat-num">
        <span>{count}</span>{stat.suffix}
      </div>
      <div>
        <div className="stat-label">{stat.label}</div>
        <div className="stat-sub">{stat.sub}</div>
      </div>
    </div>
  );
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 40 }}
          animate={textVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTag>About Me</SectionTag>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>
            A mobile engineer<br />who ships real apps
          </h2>
          <div className="about-text">
            <div className="about-text-content">
              <p>Hi, I’m <strong>Saqib Ali</strong>. While currently a 6th-semester Computer Science student at the University of Chenab, my daily focus is architecting and shipping real-world, production-ready mobile applications — not just academic projects.</p>
              <p>Specializing in <strong>Native Android (Kotlin & Jetpack Compose)</strong> and cross-platform <strong>Flutter</strong> development, I believe in building offline-first, scalable systems. My philosophy revolves around implementing clean architecture from day one and seamlessly weaving AI integrations to enhance UX, rather than just as a gimmick.</p>
              <p>Operating remotely from Wazirabad, Pakistan, I collaborate globally to turn complex ideas into refined, performant mobile products. I am currently open to compelling freelance challenges and long-term strategic partnerships.</p>
            </div>
          </div>
          <div className="about-links">
            <a href="https://github.com/saqibcheema" target="_blank" rel="noreferrer" className="about-link">
              <GitHubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/saqib-cheema/" target="_blank" rel="noreferrer" className="about-link">
              <LinkedInIcon /> LinkedIn
            </a>
            <div className="email-tooltip-container">
              <a href="mailto:saqibyu961@gmail.com" className="about-link">✉ Email Me</a>
              <span className="email-tooltip">saqibyu961@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={statsRef}
          className="about-stats"
          initial={{ opacity: 0, x: 40 }}
          animate={statsVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((s) => (
            <StatRow key={s.label} stat={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
