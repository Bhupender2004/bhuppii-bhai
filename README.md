# Modern Developer Portfolio

A stunning, modern personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features premium design with glassmorphism effects, smooth animations, and full responsiveness.

## ✨ Features

- **Modern Design**: Premium UI with glassmorphism, gradients, and neumorphism effects
- **Fully Responsive**: Optimized for all screen sizes and devices
- **Dark Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized images, fonts, and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safe**: Built with TypeScript for better development experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Theme**: next-themes
- **Icons**: Lucide React
- **Fonts**: Inter & Fira Code (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   ├── common/            # Reusable components
│   └── providers/         # Context providers
├── data/                  # Static data (projects, skills, experience)
├── lib/                   # Utility functions and configurations
└── types/                 # TypeScript type definitions
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your content**
   - Update personal information in `src/data/social.ts`
   - Add your projects in `src/data/projects.ts`
   - Update skills in `src/data/skills.ts`
   - Modify experience in `src/data/experience.ts`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Edit `src/data/social.ts` to update:
- Name, title, and bio
- Contact information
- Social media links
- Resume URL

### Projects
Add your projects in `src/data/projects.ts`:
- Project details and descriptions
- Technologies used
- Live demo and GitHub links
- Project categories and status

### Skills
Update your skills in `src/data/skills.ts`:
- Skill levels and categories
- Icons and descriptions

### Theme Colors
Customize colors in `src/app/globals.css`:
- Light and dark theme variables
- Gradient colors
- Custom CSS properties

## 📱 Sections

1. **Hero**: Eye-catching introduction with animated elements
2. **About**: Personal story, skills, and statistics
3. **Projects**: Filterable project showcase with live demos
4. **Experience**: Professional timeline and education
5. **Contact**: Contact form with validation and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js and modern web technologies**
