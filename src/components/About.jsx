import { motion } from 'framer-motion';
import { HiLightningBolt, HiShieldCheck, HiCloud } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';

const highlights = [
  {
    icon: HiLightningBolt,
    title: 'Performance-First',
    desc: 'Writing efficient, optimized backend code that scales from day one.',
  },
  {
    icon: HiShieldCheck,
    title: 'Security-Minded',
    desc: 'Applying JWT, Spring Security, and encryption best practices in every project.',
  },
  {
    icon: HiCloud,
    title: 'Cloud-Ready',
    desc: 'Containerizing apps with Docker and deploying to AWS EC2 and Railway.',
  },
];

/**
 * About — professional summary, philosophy highlights, and quick facts.
 */
export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title mb-6">
              Backend engineer,{' '}
              <span className="gradient-text">problem solver</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a Backend Java Developer from{' '}
                <span className="text-text-primary">Bhubaneswar, Odisha</span>, focused on
                building robust, secure, and scalable server-side systems. My core stack revolves
                around Java, Spring Boot, and PostgreSQL — with a strong emphasis on clean
                architecture and maintainable code.
              </p>
              <p>
                Over the past year, I've built real-world projects spanning JWT-secured REST APIs,
                microservice gateways, encrypted file transfer systems, and more. I'm a fresher
                actively seeking my first professional role where I can contribute meaningfully
                from day one.
              </p>
              <p>
                I believe that great backend engineering isn't just about making things work — it's
                about making them{' '}
                <span className="text-accent">reliable, observable, and ready to grow</span>.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '4+', label: 'Projects Built' },
                { number: '1yr+', label: 'Java Experience' },
                { number: '∞', label: 'Curiosity' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-surface border border-border rounded-xl">
                  <div className="font-display text-2xl font-700 gradient-text">{stat.number}</div>
                  <div className="font-mono text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: philosophy cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="card flex gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 border border-accent/20 
                                flex items-center justify-center text-accent mt-0.5">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display font-600 text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Currently exploring */}
            <motion.div
              className="card border-accent/20 bg-accent/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-widest">CURRENTLY EXPLORING</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Kafka', 'Redis', 'Kubernetes', 'System Design'].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
