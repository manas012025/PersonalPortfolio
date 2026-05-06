# Manas Tripathy — Portfolio

A production-ready, modern portfolio website for a Backend Java Developer.

## Tech Stack

- **React 18** + **Vite** — fast build tooling
- **Tailwind CSS 3** — utility-first styling with dark mode
- **Framer Motion** — smooth animations and transitions
- **React Router v6** — client-side routing
- **React Icons** — icon library (FaGithub, SiJava, etc.)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx   # Animated loader on first visit
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu & theme toggle
│   │   ├── ScrollProgress.jsx  # Top scroll indicator bar
│   │   ├── SectionWrapper.jsx  # Reusable scroll-triggered animation wrapper
│   │   ├── Hero.jsx            # Full-screen landing section
│   │   ├── About.jsx           # Bio + philosophy cards
│   │   ├── Skills.jsx          # Skill bars + tech stack pills
│   │   ├── Projects.jsx        # Project cards with expandable detail
│   │   ├── Journey.jsx         # Vertical timeline / experience
│   │   ├── Contact.jsx         # Social links + contact form
│   │   └── Footer.jsx          # Minimal footer
│   ├── data/
│   │   └── portfolio.js        # ← All content lives here. Edit this!
│   ├── hooks/
│   │   ├── useTheme.js         # Dark/light mode with localStorage
│   │   └── useScrollProgress.js
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind directives + global styles
├── index.html                  # SEO meta tags + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                # Netlify deployment config (SPA redirect)
└── package.json
```

## Customization

All portfolio content is in **`src/data/portfolio.js`**. Update:
- `personalInfo` — name, email, GitHub, LinkedIn, resume URL
- `projects` — add your real GitHub links and live URLs
- `skills` — adjust skill levels (0–100)
- `experience` — update your learning timeline

## Deployment on Netlify

### Option 1: Netlify CLI
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard
1. Push code to GitHub
2. Go to netlify.com → "New site from Git"
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy

The `netlify.toml` handles SPA routing automatically.

## Environment

- Node.js 18+
- npm 8+
