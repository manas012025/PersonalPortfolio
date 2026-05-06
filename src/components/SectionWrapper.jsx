import { motion } from 'framer-motion';

/**
 * SectionWrapper — wraps any section with a scroll-triggered fade+slide-up animation.
 */
export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  );
}
