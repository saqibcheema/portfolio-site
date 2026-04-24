import { techStack } from '../../data/techStack';
import './TechStrip.css';

// Duplicate for seamless infinite scroll
const doubled = [...techStack, ...techStack];

export default function TechStrip() {
  return (
    <div className="tech-strip">
      <p className="tech-strip-label">Technologies I work with daily</p>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
