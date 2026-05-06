import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen — shown briefly on first load.
 * Displays a minimal animated loader before the portfolio mounts.
 */
export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg-dark flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-2xl border border-accent/40 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-2xl bg-accent/5 animate-pulse-slow" />
              <span className="font-display text-2xl font-700 gradient-text">MT</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-border overflow-hidden rounded-full">
            <div className="h-full bg-accent loader-bar rounded-full" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-mono text-xs text-text-muted tracking-widest"
          >
            INITIALIZING...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
