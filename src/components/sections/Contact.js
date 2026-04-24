import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionTag from '../ui/SectionTag';
import './Contact.css';

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Toast = ({ show, type, message }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={`toast toast-${type}`}
      >
        <span>{type === 'success' ? '✓' : '✕'}</span>
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: '', message: '' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "bc09e6a6-84fd-49d7-adad-1c59a3121a22", 
          name: form.name,
          email: form.email,
          subject: form.type ? `Portfolio Inquiry: ${form.type}` : "Portfolio Inquiry",
          message: form.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        showToast('success', 'Message sent successfully!');
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', email: '', type: '', message: '' });
        }, 3000);
      } else {
        showToast('error', 'Failed to send message. Try again later.');
      }
    } catch (err) {
      console.log(err);
      showToast('error', 'Something went wrong. Please try again.');
    }
  };

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionTag>Get In Touch</SectionTag>
          <h2 className="section-title">let's build<br />something</h2>
          <p>Got an app idea? A project that needs a mobile developer who actually cares about architecture? Let's talk. I respond within 24 hours.</p>

          <div className="contact-detail">
            <div className="contact-icon"><MailIcon /></div>
            <div className="contact-detail-text">
              <div className="label">Email</div>
              <div className="value">saqibyu961@gmail.com</div>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon"><MapIcon /></div>
            <div className="contact-detail-text">
              <div className="label">Location</div>
              <div className="value">Wazirabad, Pakistan (Remote)</div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/saqibcheema" target="_blank" rel="noreferrer" className="social-btn" title="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/saqib-cheema/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn"><LinkedInIcon /></a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={onChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={onChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Project Type</label>
            <select name="type" value={form.type} onChange={onChange}>
              <option value="">Select a service...</option>
              <option>Native Android App</option>
              <option>Flutter App (iOS + Android)</option>
              <option>AI Feature Integration</option>
              <option>Firebase Backend</option>
              <option>Full App from Scratch</option>
              <option>Something Else</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tell me about your project</label>
            <textarea name="message" placeholder="What are you building? What problem does it solve? Any specific features or deadlines?" value={form.message} onChange={onChange} />
          </div>
          <motion.button
            type="submit"
            className="form-submit"
            whileHover={{ scale: 0.98, opacity: 0.9 }}
            whileTap={{ scale: 0.96 }}
            style={submitted ? { background: '#22c55e' } : {}}
          >
            {submitted ? 'Message Sent ✓' : <><span>Send Message</span><SendIcon /></>}
          </motion.button>
        </motion.form>
      </div>
      
      <Toast show={toast.show} type={toast.type} message={toast.message} />
    </section>
  );
}
