# SonicDrop — DJ & Sound System Rental Service HTML Template

A modern, high-energy, commercial-grade HTML5 template specifically designed for **DJ booking services, sound system rentals, lighting technicians, wedding entertainment companies, and concert/festival stage production businesses**.

Built strictly with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5** (ThemeForest / TemplateMonster marketplace standard).

---

## 🎧 Key Features

- **100% Framework-Free Frontend Logic**: Zero jQuery, zero React/Vue/Angular, zero external build-step bloat. Pure HTML5 + CSS3 + Vanilla JavaScript + Bootstrap 5.
- **13 Complete Pages**:
  1. `index.html` (Home 1 — General DJ & Event Entertainment)
  2. `home-2.html` (Home 2 — Premium Club, Concert & Stage Experience)
  3. `about.html` (About Us — Heritage, Philosophy & DJ/Sound Crew)
  4. `services.html` (Services — Filterable Grid & Hardware Breakdown)
  5. `service-details.html` (Service Details — DJ Booking In-Depth & Booking Form)
  6. `packages.html` (Packages & Rental Rigs — Comparison Matrix & Add-Ons)
  7. `gallery.html` (Portfolio — Category Filter & Interactive Lightbox Modal)
  8. `blog.html` (Acoustic Guides — Live Keyword Search & Category Pills)
  9. `blog-details.html` (Article Reader — Technical Diagram & Sidebar Widgets)
  10. `contact.html` (Contact Us — Comprehensive Booking Form with Frontend Validation)
  11. `404.html` (Music-Themed Error Page)
  12. `coming-soon.html` (Launch Countdown Timer)
  13. `maintenance.html` (Audio Fleet Calibration & Emergency Dispatch)
- **5 to 6 Substantial Sections per Page**: (Excluding sticky header and multi-column footer).
- **Unique Imagery Guarantee**: Every single page features prominent, distinct, high-resolution photography without duplication.
- **Dark & Light Mode**:
  - Nightlife-inspired Obsidian Dark mode with electric violet (`#8B5CF6`) and cyber cyan (`#06B6D4`) accents.
  - High-end corporate/wedding Light mode.
  - State persisted via `localStorage`.
- **Bidirectional RTL / LTR Support**:
  - Dedicated `assets/css/rtl.css` with text-direction flipping, icon mirrors, and layout alignment.
  - State persisted via `localStorage` with explicit `RTL / LTR` button text.
- **Interactive Vanilla JS Engine**:
  - Real-time blog search and filtering
  - Service and package category filtering
  - Dynamic gallery lightbox modal
  - Form validation with simulated submission states, confirmation modals, and toast alerts
  - Animated numerical statistic counters
  - Sticky navbar with auto-highlighting active page links
  - Mobile offcanvas / collapse with outside-click and ESC key closing
  - Countdown timer for launch events
  - Smooth back-to-top button

---

## 📁 Project Structure

```text
dj-sound-system-template/
│
├── index.html              # Home 1 - General Entertainment
├── home-2.html             # Home 2 - Premium Club & Festival Stage
├── about.html              # About Company & Sound Engineers
├── services.html           # Services & Audio Hardware Fleet
├── service-details.html    # Dedicated DJ Booking Page
├── packages.html           # Rental Tiers & Comparison Table
├── gallery.html            # Event Showcase & Lightbox
├── blog.html               # Acoustic Insights with Live Search
├── blog-details.html       # Full Editorial Article & Sidebar
├── contact.html            # Event Booking Form & Studio Location
│
├── 404.html                # Error Page
├── coming-soon.html        # Live Countdown Timer
├── maintenance.html        # System Calibration
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Core design tokens, theme, components
│   │   ├── responsive.css  # Breakpoint fine-tuning (320px - 1920px)
│   │   └── rtl.css         # RTL layout and mirror overrides
│   │
│   └── js/
│       ├── main.js         # Sticky nav, mobile menu, counters, toasts
│       ├── theme.js        # Dark/Light mode switcher & localStorage
│       ├── rtl.js          # RTL toggle & localStorage
│       ├── forms.js        # Validation & demo submission states
│       ├── gallery.js      # Portfolio filter & lightbox modal
│       ├── filters.js      # Package/service filter & blog search
│       └── faq.js          # Accordions & countdown timer
│
└── README.md
```

---

## 🎨 Color Palette & CSS Variables

Colors are managed centrally in `assets/css/style.css`:

```css
:root {
  --primary-color: #8b5cf6;       /* Electric Violet */
  --secondary-color: #06b6d4;     /* Cyber Cyan */
  --accent-color: #f43f5e;        /* Energetic Magenta Flare */
  --amber-accent: #f59e0b;        /* Warm Stage Glow */
  --background-color: #0b0e17;    /* Deep Obsidian */
  --surface-color: #131826;       /* Midnight Surface */
  --surface-elevated: #1c2337;    /* Elevated Border/Card */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-color: rgba(255, 255, 255, 0.08);
}
```

---

## 🚀 How to Run Locally

1. Simply open any `.html` file (e.g. `index.html`) in any modern web browser.
2. Alternatively, run any local development server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

---

## 📱 Tested Breakpoints

- **Mobile**: 320px, 360px, 375px, 390px, 414px (Zero horizontal overflow)
- **Tablet**: 768px, 820px, 1024px
- **Desktop**: 1280px, 1440px, 1920px

---

## 📄 License & Attribution

Designed and developed for commercial production distribution. Suitable for direct client deployment and marketplace distribution.
All imagery sourced from Unsplash under open commercial licensing.
Icons provided by Bootstrap Icons.
Typography powered by Google Fonts (Outfit & Plus Jakarta Sans).
