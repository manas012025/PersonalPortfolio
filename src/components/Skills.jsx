import { motion } from 'framer-motion';
import {
  SiOpenjdk, SiSpringboot, SiSpringsecurity, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithubactions, SiReact, SiSwagger,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { skills, techStack } from '../data/portfolio';

// Icon map for tech stack pills
const ICON_MAP = {
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  'Spring Security': SiSpringsecurity,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Docker: SiDocker,
  'AWS EC2': FaAws,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  React: SiReact,
  'Swagger': SiSwagger,
};

/**
 * SkillBar — animated progress bar for a single skill.
 */
function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-text-secondary">{name}</span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/**
 * Skills — skill categories with progress bars and a tech stack pill grid.
 */
export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            The tools I build{' '}
            <span className="gradient-text">with</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A focused set of technologies — chosen for depth over breadth.
          </p>
        </div>

        {/* Skill category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-4 bg-accent rounded-full" />
                <h3 className="font-display font-600 text-text-primary text-sm tracking-wide">
                  {group.category}
                </h3>
              </div>
              {group.items.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech stack pills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <HiCode className="text-accent" size={16} />
            <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
              Full Stack Overview
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => {
              const Icon = ICON_MAP[tech.name];
              return (
                <motion.span
                  key={tech.name}
                  className="skill-badge cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ '--tech-color': tech.color }}
                >
                  {Icon && <Icon size={12} style={{ color: tech.color }} />}
                  {tech.name}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
