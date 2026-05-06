import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';

/**
 * Contact — email + social links + simple frontend-only contact form.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Frontend-only: opens default mail client with pre-filled content
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const socialLinks = [
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#00D4FF',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/manas-tripathy',
      href: personalInfo.github,
      color: '#E8F0FE',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manas-tripathy',
      href: personalInfo.linkedin,
      color: '#0A66C2',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: '#10B981',
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Contact</span>
          <h2 className="section-title mb-4">
            Let's build something{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            I'm actively looking for my first backend engineering role. Whether you have an
            opportunity, a question, or just want to chat — reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  className="card flex items-center gap-4 hover:border-accent/40"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${link.color}18`, border: `1px solid ${link.color}30` }}
                  >
                    <link.icon size={16} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-text-muted mb-0.5">{link.label}</div>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="text-sm text-text-secondary">{link.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume download */}
            <motion.div
              className="mt-6 p-5 rounded-xl border border-accent/20 bg-accent/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-text-secondary mb-3">
                Want the full picture? Download my resume for a detailed overview of my skills
                and projects.
              </p>
              <a href={personalInfo.resumeUrl} className="btn-primary text-sm">
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display font-600 text-text-primary mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Jane Smith', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'jane@example.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs text-text-muted block mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 
                                 text-sm text-text-primary placeholder:text-text-muted 
                                 focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-xs text-text-muted block mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Backend Developer Opportunity"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 
                             text-sm text-text-primary placeholder:text-text-muted 
                             focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-text-muted block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  required
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-2.5 
                             text-sm text-text-primary placeholder:text-text-muted resize-none
                             focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? (
                  'Opening mail client...'
                ) : status === 'sent' ? (
                  '✓ Message Ready!'
                ) : (
                  <>
                    <HiPaperAirplane size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
