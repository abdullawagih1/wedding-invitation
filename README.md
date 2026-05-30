# 💍 دعوة زفاف رقمية — إسراء & عبدالله

A luxury digital wedding invitation built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start

### 1. Terminal Commands

```bash
# 1. Navigate to project folder
cd wedding-invitation

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser → http://localhost:3000
```

---

## 📁 Project Structure

```
wedding-invitation/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Envelope/       → Opening envelope animation
│   │   ├── Hero/           → Names, date, ring icon
│   │   ├── Countdown/      → Live countdown timer
│   │   ├── Story/          → Our story timeline
│   │   ├── Gallery/        → Swiper image carousel
│   │   ├── EventDetails/   → Venue + Google Maps
│   │   ├── StickyFooter/   → Persistent bottom bar
│   │   └── Shared/         → Reusable decorative components
│   ├── assets/
│   ├── data/
│   │   └── weddingData.js  → ← EDIT THIS to customize
│   ├── hooks/
│   │   ├── useCountdown.js
│   │   └── useScrolled.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Customization

Edit **`src/data/weddingData.js`** to change:
- Couple names (bride / groom)
- Wedding date & time
- Venue name, address, Google Maps URL
- Story timeline entries
- Gallery images (replace Unsplash URLs with your own)

---

## 🏗️ Build for Production

```bash
npm run build
# Output → dist/ folder
```

---

## 🌐 Deployment — Vercel (Recommended)

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# → Link to existing project? N
# → Project name: wedding-invitation
# → Root directory: ./
# → Build command: npm run build
# → Output directory: dist
```

### Option B — GitHub + Vercel Dashboard

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial: luxury wedding invitation"

# 2. Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/wedding-invitation.git
git branch -M main
git push -u origin main

# 3. Go to https://vercel.com
# → New Project → Import from GitHub
# → Select your repo
# → Build Command: npm run build
# → Output Directory: dist
# → Deploy ✓
```

---

## 📱 Features

| Feature | Status |
|---|---|
| Envelope opening animation | ✅ |
| Hero with Arabic names | ✅ |
| Live countdown (Arabic labels) | ✅ |
| Our Story timeline | ✅ |
| Swiper gallery with touch support | ✅ |
| Venue + Google Maps CTA | ✅ |
| Sticky footer with mini countdown | ✅ |
| Floating rose petals ambient effect | ✅ |
| Mobile-first responsive | ✅ |
| Glassmorphism UI elements | ✅ |
| Rose gold + champagne color scheme | ✅ |
| Cairo + Amiri Arabic fonts | ✅ |
| Framer Motion animations | ✅ |
| RTL layout | ✅ |

---

## 🔧 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Swiper 11**
- **Lucide React** (icons)
- **Google Fonts**: Cairo + Amiri

---

*Made with ❤️ for إسراء & عبدالله*
