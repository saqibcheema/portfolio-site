import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTag from '../ui/SectionTag';
import { projectsData } from '../../data/projects';
import './Projects.css';

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
    >
      <div className="project-thumb">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-img"
          loading="lazy"
        />
        <div className="project-img-overlay" />
        <span className="project-tag">{project.tag}</span>
        <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
      </div>
      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s} className="stack-pill">{s}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="proj-link primary">
            <GitHubIcon /> View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>Projects</SectionTag>
            <h2 className="section-title">featured work</h2>
          </motion.div>
        </div>
        <p>These are real apps — not tutorials. Both have working codebases on GitHub.</p>
      </div>
      <div className="projects-grid">
        {projectsData.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
