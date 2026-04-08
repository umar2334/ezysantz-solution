# Outcrowd.io Clone — Next.js

A pixel-perfect clone of [outcrowd.io](https://www.outcrowd.io/) built with **Next.js 14** (App Router) and pure React.

## ✨ Features

- **Preloader** — Animated progress bar with spinning logo
- **Custom Cursor** — Dual-circle cursor that scales on interactive elements
- **Scroll Progress Bar** — Gradient progress indicator at the top
- **Parallax Hero** — Mouse-tracking gradient orbs and floating shapes
- **Counter Animation** — Stats count up on scroll with easing
- **Text Reveal** — Headings slide up with clip animation
- **3D Tilt Cards** — Perspective-based hover tilt on all cards
- **Magnetic Buttons** — Buttons follow cursor with magnetic pull
- **Marquee Ticker** — Infinite scrolling logo strip with hover effects
- **Accordion FAQ** — Smooth expand/collapse with rotating icon
- **Staggered Animations** — Every section cascades with delays
- **Mobile Responsive** — Full hamburger menu, responsive grids

## 📁 Project Structure

```
outcrowd/
├── app/
│   ├── layout.js          # Root layout with metadata & SEO
│   └── page.js            # Homepage (assembles all sections)
├── components/
│   ├── ui/                # Reusable animation & UI components
│   │   ├── FadeUp.jsx     # Scroll-triggered fade up
│   │   ├── ScaleIn.jsx    # Scroll-triggered scale in
│   │   ├── TextReveal.jsx # Text slide-up reveal
│   │   ├── MagneticBtn.jsx# Magnetic hover button
│   │   ├── TiltCard.jsx   # 3D perspective tilt card
│   │   ├── Marquee.jsx    # Infinite scroll ticker
│   │   └── index.js       # Barrel export
│   └── sections/          # Page sections
│       ├── Preloader.jsx
│       ├── CustomCursor.jsx
│       ├── ScrollProgress.jsx
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── Stages.jsx
│       ├── Services.jsx
│       ├── LogoSection.jsx
│       ├── Cases.jsx
│       ├── Testimonials.jsx
│       ├── Awards.jsx
│       ├── Blog.jsx
│       ├── FAQ.jsx
│       ├── CTA.jsx
│       ├── Footer.jsx
│       └── index.js       # Barrel export
├── hooks/
│   ├── useInView.js       # Intersection Observer hook
│   ├── useMousePosition.js# Mouse tracking hook
│   ├── useCounter.js      # Animated counter hook
│   └── index.js           # Barrel export
├── styles/
│   ├── globals.css        # Global styles & keyframes
│   └── tokens.js          # Design tokens (colors, fonts, spacing)
├── public/                # Static assets (add your images here)
├── package.json
├── next.config.js
└── jsconfig.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Replace Content
- Edit data arrays (SERVICES, CASES, REVIEWS, etc.) in each section component
- All content is defined as constants at the top of each file

### Change Colors
- Edit `styles/tokens.js` to update the color scheme
- The `accent` color (#c8ff00) is the signature lime green

### Add Images
- Place images in the `public/` folder
- Replace placeholder gradient backgrounds in Cases and Blog sections

### Add New Pages
- Create new files in `app/` directory (e.g., `app/about/page.js`)
- Import and reuse components from `components/ui/` and `components/sections/`

## 📦 Tech Stack

- **Next.js 14** — React framework with App Router
- **React 18** — UI library
- **Google Fonts** — Syne (headings) + DM Sans (body)
- **CSS-in-JS** — Inline styles with design tokens
- **No external UI libraries** — Pure custom components

## 📝 License

This is a clone for educational/portfolio purposes. Original design by [Outcrowd](https://www.outcrowd.io/).
