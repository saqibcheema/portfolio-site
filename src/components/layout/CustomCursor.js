import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    let raf;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.left = ring.current.x + 'px';
      ringEl.style.top = ring.current.y + 'px';
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);

    const interactables = document.querySelectorAll(
      'a, button, .faq-question, .service-card, .project-card, .tech-tag'
    );
    const addGrow = () => document.body.classList.add('cursor-grow');
    const removeGrow = () => document.body.classList.remove('cursor-grow');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
