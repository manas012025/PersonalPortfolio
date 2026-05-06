import { motion } from 'framer-motion';
import { HiCheckCircle, HiAcademicCap, HiCode, HiLightningBolt } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { experience } from '../data/portfolio';

const TYPE_ICONS = {
  'Learning & Projects': HiCode,
  'Core Learning': HiLightningBolt,
  'Academic Foundation': HiAcademicCap,
};

/**
 * Journey — vertical timeline showing learning progression.
 */
export default function Journey() {
  return (
    <SectionWrapper id="journey">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">Learning Journey</span>
          <h2 className="section-title mb-4">
            From zero to{' '}
            <span className="gradient-text">production-ready</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            A self-directed path toward professional backend engineering — through persistence,
            real-world projects, and continuous iteration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {experience.map((item, i) => {
              const Icon = TYPE_ICONS[item.type] || HiCode;
              const isRight = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  className={`relative flex gap-6 md:gap-0 ${
                    isRight ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full 
                                  bg-accent border-2 border-bg-dark glow-dot z-10 top-6" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isRight ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className="card group">
                      {/* Type badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 
                                        flex items-center justify-center text-accent">
                          <Icon size={12} />
                        </div>
                        <span className="font-mono text-xs text-accent">{item.type}</span>
                      </div>

                      {/* Year + Title */}
                      <div className="mb-3">
                        <span className="font-mono text-xs text-text-muted">{item.year}</span>
                        <h3 className="font-display font-600 text-text-primary text-lg mt-1">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {item.achievements.map((ach) => (
                          <li key={ach} className="flex items-start gap-2 text-sm text-text-secondary">
                            <HiCheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mindset banner */}
        <motion.div
          className="mt-16 p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-xl font-600 text-text-primary mb-2">
            "The best backend code is the code that{' '}
            <span className="gradient-text">no one notices</span> — because it just works."
          </p>
          <p className="text-text-muted font-mono text-xs">— Manas Tripathy</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
