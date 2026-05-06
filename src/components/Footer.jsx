import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '../data/portfolio';

/**
 * Footer — minimal footer with logo, nav, socials, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg border border-accent/40 flex items-center justify-center">
                <span className="font-display text-xs font-700 text-accent">M</span>
              </div>
              <span className="font-display font-600 text-text-primary">
                Manas Tripathy
              </span>
            </div>
            <p className="font-mono text-xs text-text-muted">Backend Java Developer</p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {[
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <HiMail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-text-muted">
            © {year} Manas Tripathy. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built with{' '}
            <span className="text-accent">React</span> &{' '}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
