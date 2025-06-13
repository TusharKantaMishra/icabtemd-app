# ICABTEMD 2025 Web Application

A modern, responsive web application for the International Conference on Advanced Biomaterials for Tissue Engineering and Medical Devices (ICABTEMD 2025), built with React.

## Overview
This project powers the official website for ICABTEMD 2025, providing information about the conference, committees, topics, call for papers, registration, and contact details. The site is fully responsive and optimized for both desktop and mobile users.

## Features
- Clean, modern, and responsive design
- Animated topics section
- Mobile-friendly navbar with hamburger toggle
- Dedicated pages for About, Committees, Topics, Call for Papers, Registration, and Contact
- Smooth navigation and scroll-to-top behavior
- Easily customizable with modular React components

## Getting Started

### Prerequisites
- Node.js (v14 or above recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd icabtemd-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```
The production-ready files will be in the `build/` directory.

## Project Structure
```
icabtemd-app/
├── public/
├── src/
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable React components (Navbar, Footer, PageHeader, etc.)
│   ├── pages/             # Main pages (HomePage, AboutPage, TopicsPage, etc.)
│   ├── styles/            # CSS files for styling
│   ├── App.js             # App entry point
│   └── index.js           # React DOM entry
├── package.json
└── README.md
```

## Main Scripts
- `npm start` — Run in development mode
- `npm run build` — Build for production
- `npm test` — Run tests (if implemented)

## Customization
- Update content in the `src/pages/` and `src/components/` directories as needed.
- Adjust styles in `src/styles/` for branding or layout changes.

## Credits
- Built with [React](https://reactjs.org/)
- UI animations powered by [AOS](https://michalsnik.github.io/aos/)
- Designed and developed for ICABTEMD 2025

---

For questions or contributions, please contact the organizing committee or open an issue in this repository.

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
