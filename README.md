# ProdPilot AI — Web Client & Design System

A modern SaaS client dashboard built using **React (JSX)**, **Vite**, **UnoCSS**, and **JavaScript** (zero TypeScript/Tailwind framework overhead).

This repository features a custom **Neo-Brutalist Retro SaaS Design System & Component Library** inspired byGumroad, Figma, and classic 90s console interfaces. It combines retro computing details (monospaced typography, thick black borders, vintage cream/charcoal color themes) with interactive components.

---

## 🚀 Milestones Built So Far

### 📂 Day 1: Project Foundation, Layouts, & Routing
- **Routing Configuration**: Standard declarative routing using React Router.
- **Global Layout Shells**: Navbars, Sidebars, and responsive page containers.
- **Base Views**: Implemented initial page structures including Login/Register flows and Feedback dashboards.

### 🎨 Day 2: Neo-Brutalist Retro Design System & Component Library
- **Centralized Design Tokens**: Defined theme attributes in [theme.css](file:///d:/prodpilot_ai/src/styles/theme.css) (color pallets, space units, boxy border radiuses, and hard offset block shadows).
- **Global Base Styles**: Configured monospace typography mappings (Google **Space Mono** font), retro matrix grid backgrounds, custom block scrollbars, and mechanical focus/active states in [main.css](file:///d:/prodpilot_ai/src/styles/main.css).
- **UnoCSS Shortcuts**: Mapped variables to semantic shorthand classes (e.g. `btn-base`, `card-base`, `input-base`, `glass-panel`) in [uno.config.js](file:///d:/prodpilot_ai/uno.config.js).
- **Named Exports Entrance**: Centralized component distribution in [src/ui/index.js](file:///d:/prodpilot_ai/src/ui/index.js).
- **Interactive Playground Page**: Created the `/components` route playground inside [Components.jsx](file:///d:/prodpilot_ai/src/pages/Components.jsx) to review, test, and preview all components and states side-by-side.

---

## 🛠️ The 18 Reusable UI Components (`src/ui/`)

All components are located inside [src/ui/](file:///d:/prodpilot_ai/src/ui) and fully support dark/light modes:

1. **Button** (`Button.jsx`): Mechanical click triggers (down-right translation), sizes (`sm`, `md`, `lg`), semantic variants, loading indicators, and trailing/leading icons.
2. **Input** (`Input.jsx`): Standard fields, Password show/hide inputs, Select lists, Textareas, Date Pickers, Number fields, File Upload wrappers, helper labels, and validation states.
3. **Card** (`Card.jsx`): Boxy containers with thick borders and solid shadows. Supports composable `Card.Header`, `Card.Body`, `Card.Footer`, and `Card.Stat` elements.
4. **Badge** (`Badge.jsx`): Flat border-2 tags supporting pill/square outlines and solid/subtle variations.
5. **Avatar** (`Avatar.jsx`): Circle/square avatars with activity status indicators (online, offline, busy) and a custom initials-hash background generator.
6. **Modal** (`Modal.jsx`): Windows 95 inspired dialog boxes featuring colored title bars, boxy close icons, backdrop click dismissals, and Escape key bindings.
7. **Alert** (`Alert.jsx`): Warning banners styled as solid retro warning strips with thick borders and block shadows.
8. **Loader** (`Loader.jsx`): Loading Spinners alongside pulsing skeleton placeholders (`SkeletonText`, `SkeletonCard`).
9. **Dropdown** (`Dropdown.jsx`): Menus with keyboard-focus management, list items, custom profile cards (`Dropdown.ProfileHeader`), and unread indicator cards (`Dropdown.NotificationItem`).
10. **Tabs** (`Tabs.jsx`): Horizontal tab strips with animated sliding indicator highlights and overflow swipe support.
11. **Accordion** (`Accordion.jsx`): Collapsible disclosure drawers utilizing CSS Grid row height auto-transitions.
12. **Table** (`Table.jsx`): Sorting columns, loading rows, and empty state handlers, set up with thick cell dividers.
13. **Pagination** (`Pagination.jsx`): Numbered navigation selectors showcasing dot ellipses (`...`) and click shifts.
14. **Toast** (`Toast.jsx`): Portal-based notification system triggerable anywhere with auto-dismiss timers.
15. **Progress** (`Progress.jsx`): SVG circular loaders, progress tracks, and Stepper checkpoint trackers.
16. **Breadcrumb** (`Breadcrumb.jsx`): Hierarchical path navigators.
17. **EmptyState** (`EmptyState.jsx`): Retro vector illustrations with title blocks and CTA buttons.
18. **CommandPalette** (`CommandPalette.jsx`): Linear-inspired search palette panel activated by pressing `Ctrl + K` or `Cmd + K`.

---

## 📁 Repository Structure

```bash
prodpilot_ai/
├── src/
│   ├── components/       # Global shell widgets (Navbar, Sidebar)
│   ├── constants/        # Routing constants & navigation configs
│   ├── hooks/            # Context hooks (Theme, Auth)
│   ├── pages/            # View Pages (Components playground, Login, Feedback)
│   ├── router/           # Routing components
│   ├── styles/           # Styling tokens (theme.css, main.css)
│   ├── ui/               # Reusable Component Library
│   │   ├── index.js      # Central named exports
│   │   └── ...           # JSX component files
│   ├── utils/            # Shared utility functions (class-name mergers)
│   ├── App.jsx           # Global application root wrapper
│   └── main.jsx          # Entrypoint script
├── uno.config.js         # UnoCSS configurations
├── vite.config.js        # Vite build bundler options
└── package.json          # Node dependencies and scripts
```

---

## 💻 Development Commands

Install the node modules:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Run static code linter analysis:
```bash
npm run lint
```

Build the production distribution bundle:
```bash
npm run build
```
