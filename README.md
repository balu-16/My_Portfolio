# My Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my projects, experience, and skills with smooth animations and a clean, professional design.

## ✨ Features

- **Modern Design**: Clean and professional UI with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO
- **TypeScript**: Fully typed for better development experience and code reliability
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component-Based**: Modular component architecture for maintainability

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Tabler Icons & Lucide React
- **UI Components**: Radix UI
- **Build Tool**: Webpack with custom SVG handling

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── ui/            # UI components
│   ├── Card.tsx       # Card component
│   └── HeroOrbit.tsx  # Hero orbit animation
├── sections/          # Page sections
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact section
│   ├── Experience.tsx # Experience section
│   ├── Footer.tsx     # Footer section
│   ├── Header.tsx     # Header/Navigation
│   ├── Hero.tsx       # Hero section
│   ├── Projects.tsx   # Projects showcase
│   └── Tape.tsx       # Tape section
└── lib/
    └── utils.ts       # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd MyPortfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

You can customize the portfolio by:

1. **Content**: Update the content in each section component (`src/sections/`)
2. **Styling**: Modify Tailwind classes or add custom CSS in `globals.css`
3. **Images**: Replace images in the `public/images/` directory
4. **Icons**: Add or modify icons in the `public/icons/` directory
5. **Resume**: Replace `public/resume.pdf` with your own resume

## 📱 Sections

- **Header**: Navigation with smooth scrolling
- **Hero**: Introduction with animated elements
- **About**: Personal information and skills
- **Experience**: Work experience and timeline
- **Projects**: Showcase of featured projects
- **Contact**: Contact form and information
- **Footer**: Social links and additional info

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect it's a Next.js project
4. Deploy with default settings

### Build Optimization

For optimal performance in production:

1. **Install Sharp** (recommended for image optimization):
```bash
npm install sharp
```

2. **Update Browserslist** (for better browser compatibility):
```bash
npx update-browserslist-db@latest
```

### Environment Variables

If you have any environment variables, create a `.env.local` file:
```bash
# Example
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ using Next.js and TypeScript
