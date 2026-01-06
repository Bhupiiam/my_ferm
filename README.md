# AI Automation & Operations Intelligence Firm - Website

A modern, professional website for an AI-powered automation and monitoring systems firm. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Professional dark theme with subtle AI/tech accents
- **Smooth Animations**: Subtle animations and transitions for a polished experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices

## 📋 Sections

1. **Hero Section** - Compelling headline and primary CTA
2. **What We Do** - Overview of services
3. **Services** - Detailed service offerings:
   - AI Process Automation
   - Intelligent Monitoring & Supervision
   - Smart Order & Workflow Management
4. **How We Work** - Process timeline
5. **Industries** - Target industries served
6. **Why Choose Us** - Key differentiators
7. **Case Studies** - Placeholder for future case studies
8. **Blog/Insights** - Future-ready blog section
9. **Contact** - Contact form and call-to-action

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 5.4.0** - Build tool and dev server
- **CSS3** - Custom styling with modern CSS features

## 📦 Prerequisites

- **Node.js**: v16.0.0 or higher (v18+ recommended)
- **npm**: v6.0.0 or higher

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my_ferm
```

2. Install dependencies:
```bash
npm install
```

**Note**: If you encounter issues with optional dependencies (like `@rollup/rollup-darwin-arm64`), try:
```bash
rm -rf node_modules package-lock.json
npm install
```

If you encounter npm cache permission issues, fix them with:
```bash
sudo chown -R $(whoami) ~/.npm
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
my_ferm/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Footer component
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Industries.tsx
│   │   ├── Why.tsx
│   │   ├── Cases.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors

The color scheme is defined in `src/styles.css`. Key CSS variables:
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background
- `--text-primary`: Primary text color
- `--accent`: Accent color for highlights
- `--accent-hover`: Hover state for accents

### Content

Edit the content in the respective section components:
- `src/sections/Hero.tsx` - Hero headline and CTA
- `src/sections/Services.tsx` - Service descriptions
- `src/sections/Contact.tsx` - Contact form fields

## 📝 Contact Form

The contact form in `src/sections/Contact.tsx` currently handles form submission on the client side. To connect it to a backend:

1. Update the `handleSubmit` function in `Contact.tsx`
2. Add your API endpoint
3. Handle form submission to your backend service

## 🔧 Troubleshooting

### Node.js Version Issues

If you see syntax errors like `Unexpected token '??='`, you need Node.js v16 or higher:
```bash
node --version  # Check your version
```

Use `nvm` to switch versions:
```bash
nvm install 18
nvm use 18
```

### Missing Dependencies

If you encounter missing module errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a different port in `vite.config.ts`:
```typescript
server: {
  port: 3000  // or any other port
}
```

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Vite
