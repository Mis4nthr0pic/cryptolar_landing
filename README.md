# CryptoLar 2025 Website

A modern, responsive website for the CryptoLar 2025 blockchain event in Florianópolis, Brazil. Built with React, featuring beautiful animations, internationalization, and glassmorphism design.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Multi-language Support**: Portuguese, English, and Spanish
- **Interactive Animations**: Smooth transitions and 3D effects
- **Company Showcase**: Interactive company logos with hover effects
- **Event Information**: Comprehensive details about talks, hackathon, and location
- **Modern UI**: Glassmorphism design with gradient backgrounds

## 🛠 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Internationalization**: react-i18next
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗 Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment on Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new one
   - Select project settings (usually auto-detected)
   - Deploy!

4. **Production deployment**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push code to Git repository** (GitHub, GitLab, or Bitbucket)

2. **Go to [vercel.com](https://vercel.com) and sign in**

3. **Click "New Project"**

4. **Import your Git repository**

5. **Configure project settings:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory if you need environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_ANALYTICS_ID=your_analytics_id_here
```

### Vercel Configuration

Create a `vercel.json` file in the root directory for advanced configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 📁 Project Structure

```
website/
├── public/
│   ├── images/           # Static images and logos
│   └── index.html
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   ├── Speakers.jsx  # Company showcase
│   │   ├── Location.jsx
│   │   └── ...
│   ├── i18n/            # Internationalization
│   │   └── locales/     # Language files
│   │       ├── en.json
│   │       ├── es.json
│   │       └── pt.json
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Customization

### Adding New Companies

1. **Add company logo** to `public/images/` directory
2. **Update company list** in `src/components/Speakers.jsx`:
   ```javascript
   const companies = [
     // Add new company
     { name: 'Company Name', logo: 'logo_company.png', website: 'https://company.com' },
   ];
   ```
3. **For larger logos**, add company name to `largerLogos` array

### Adding Translations

1. **Add new language** in `src/i18n/locales/`
2. **Update language switcher** in `src/components/LanguageSwitcher.jsx`
3. **Add translations** for all keys used in components

### Modifying Animations

- **Tailwind animations**: Defined in `tailwind.config.js`
- **Custom CSS animations**: Located in `src/index.css`
- **Component-specific animations**: Inline styles in React components

## 🚀 Performance Optimization

- **Image optimization**: Use WebP format for better compression
- **Code splitting**: Automatic with Vite
- **Lazy loading**: Implemented for images
- **Minification**: Automatic in production build

## 🌍 Internationalization

The website supports multiple languages:

- **Portuguese (pt)**: Default language
- **English (en)**: English translation
- **Spanish (es)**: Spanish translation

Language files are located in `src/i18n/locales/`.

## 📱 Mobile Optimization

- **Responsive grid**: Adapts from 2 columns on mobile to 6 on desktop
- **Touch-friendly**: Optimized for mobile interactions
- **Performance**: Reduced animations on mobile for better performance

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with "out of memory"**
   ```bash
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

2. **Images not loading**
   - Ensure images are in `public/images/` directory
   - Check file paths and extensions

3. **Translations not working**
   - Verify language files exist in `src/i18n/locales/`
   - Check translation keys match component usage

### Vercel-Specific Issues

1. **Build timeouts**
   - Check build command and dependencies
   - Optimize build process

2. **Routing issues**
   - Ensure `vercel.json` has correct rewrites for SPA

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: [contact@cryptolar.com]
- Website: [https://cryptolar.com]

---

**Made with ❤️ for the CryptoLar 2025 community**