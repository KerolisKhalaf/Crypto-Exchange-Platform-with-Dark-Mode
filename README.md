# 🚀 Crypto Exchange Platform with Dark Mode

A modern, responsive cryptocurrency exchange platform built with Angular 17, featuring a beautiful dark mode toggle and comprehensive trading interface.

## 🌐 Live Demo

🔗 **[View Live Demo](https://keroliskhalaf.github.io/Crypto-Exchange-Platform-with-Dark-Mode/)**


## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Real-time Data**: Simulated live cryptocurrency price updates
- **Trading Features**: Spot trading, futures, margin trading, and staking information
- **Blog System**: News and insights section with category filtering
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: SCSS with CSS Custom Properties
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/           # About page component
│   │   ├── blog/            # Blog/news component
│   │   ├── contact/         # Contact form component
│   │   ├── footer/          # Footer component
│   │   ├── home/            # Home page component
│   │   ├── navbar/          # Navigation component
│   │   └── services/        # Services page component
│   ├── services/
│   │   ├── crypto-data.service.ts    # Crypto data management
│   │   └── dark-mode.service.ts      # Theme management
│   ├── app.component.ts     # Main app component
│   └── app.routes.ts        # Routing configuration
├── assets/                  # Static assets
├── styles.scss              # Global styles
└── index.html               # Main HTML file
```

## 🎨 Design System

### Color Palette

#### Light Theme
- Primary: #6366f1 (Indigo)
- Secondary: #f59e0b (Amber)
- Accent: #10b981 (Emerald)
- Background: #ffffff
- Surface: #f8fafc
- Text Primary: #1e293b
- Text Secondary: #64748b

#### Dark Theme
- Primary: #818cf8 (Light Indigo)
- Secondary: #fbbf24 (Light Amber)
- Accent: #34d399 (Light Emerald)
- Background: #0f172a (Dark Slate)
- Surface: #1e293b (Slate)
- Text Primary: #f1f5f9
- Text Secondary: #cbd5e1

### Typography
- Font Family: Inter (Google Fonts)
- Headings: 600 weight
- Body: 400 weight
- Line Height: 1.6

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Angular CLI (v17)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crypto-exchange-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Pages & Components

### Home Page
- Hero section with live market data
- Feature highlights
- Company statistics
- Call-to-action sections

### Services Page
- Trading features overview
- Popular trading pairs
- Advanced trading tools
- Fee structure table

### About Page
- Company mission and values
- Leadership team
- Company timeline
- Office locations

### Blog Page
- Featured articles
- Category filtering
- Article grid with search
- Newsletter signup

### Contact Page
- Contact form with validation
- Company information
- FAQ section
- Office locations

## 🎯 Key Features Implementation

### Dark Mode Service
- System preference detection
- Local storage persistence
- Smooth theme transitions
- CSS custom properties integration

### Crypto Data Service
- Simulated real-time price updates
- Market data management
- Search and filtering capabilities
- Historical data simulation

### Responsive Design
- Mobile-first approach
- Flexible grid system
- Adaptive typography
- Touch-friendly interactions

## 🔧 Customization

### Adding New Pages
1. Create component in `src/app/components/`
2. Add route in `src/app/app.routes.ts`
3. Update navigation in `navbar.component.ts`

### Modifying Styles
- Global styles: `src/styles.scss`
- Component styles: Individual component files
- CSS custom properties for consistent theming

### Adding New Services
1. Create service in `src/app/services/`
2. Import in components as needed
3. Follow Angular service patterns

## 📊 Performance Optimizations

- Standalone components for better tree-shaking
- OnPush change detection strategy
- Lazy loading for routes
- Optimized images and assets
- CSS custom properties for efficient theming

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please contact us through the contact form on the website or create an issue in the repository.

---

Built with ❤️ using Angular and modern web technologies.
