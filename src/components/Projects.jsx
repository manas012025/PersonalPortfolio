import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink, HiChevronDown, HiChevronUp, HiStar } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';

/**
 * ProjectCard — card for a single project with expandable details.
 */
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="card group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Color accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-amber-400">
          <HiStar size={12} />
          <span className="font-mono text-xs">Featured</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4 pr-16">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: project.color, boxShadow: `0 0 8px ${project.color}` }}
          />
          <span className="font-mono text-xs text-text-muted">{project.subtitle}</span>
        </div>
        <h3 className="font-display text-xl font-700 text-text-primary">{project.name}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.description}</p>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed mb-5 pt-2 border-t border-border">
              {project.longDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.highlights.map((h) => (
          <span key={h} className="tag">{h}</span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-text-muted bg-surface-2 px-2 py-0.5 rounded border border-border">
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm"
          >
            <FaGithub size={14} />
            <span className="font-mono text-xs">GitHub</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm"
            >
              <HiExternalLink size={14} />
              <span className="font-mono text-xs">Live</span>
            </a>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 font-mono text-xs text-text-muted hover:text-accent transition-colors"
        >
          {expanded ? 'Less' : 'More'}
          {expanded ? <HiChevronUp size={12} /> : <HiChevronDown size={12} />}
        </button>
      </div>
    </motion.div>
  );
}

/**
 * Projects — 2-column grid of all project cards.
 */
export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Projects</span>
          <h2 className="section-title mb-4">
            Things I've{' '}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Real-world backend projects — each solving a concrete engineering challenge.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/manas-tripathy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
