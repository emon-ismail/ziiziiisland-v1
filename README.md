# 🏝️ Zii Zii Island - Modern Family Entertainment Website

A modern, responsive website for Zii Zii Island - a family entertainment center featuring play zones, birthday parties, and delicious food. Built with Bootstrap 5, AOS animations, and a modular architecture for easy maintenance.

## ✨ Features

### 🎨 Design & User Experience
- **Modern, Family-Friendly Design** - Updated color scheme with Coral, Deep Violet, and Sunny Yellow
- **Modular Architecture** - Each section in separate files for easy maintenance
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **AOS Animations** - Smooth scroll-triggered animations throughout the site
- **Gradient Text Effects** - Eye-catching typography with gradient overlays
- **Typing Animation** - Animated hero headline with typewriter effect
- **Hover Effects** - Interactive elements with smooth transitions

### 🚀 Performance & Optimization
- **Fast Loading** - Optimized assets and lazy loading for images
- **SEO Optimized** - Proper meta tags, semantic HTML, and alt text
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Cross-Browser Compatible** - Works on all modern browsers

### 🎯 Interactive Features
- **Sticky Navigation** - Fixed navbar with smooth scrolling and logo
- **Scrollspy** - Active section highlighting in navigation
- **Branch Selection** - Interactive branch selection with dedicated views
- **Booking Modal** - Interactive booking form with validation
- **Gallery Lightbox** - Click to view images in modal
- **FAQ Accordion** - Expandable FAQ section
- **Contact Form** - Functional contact form with validation
- **Floating Book Now Button** - Mobile-optimized call-to-action

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with modular structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Bootstrap 5** - Responsive framework
- **JavaScript (ES6+)** - Interactive functionality
- **AOS (Animate On Scroll)** - Scroll animations
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & Nunito)

## 📁 Project Structure

```
zii-zii-island/
├── index.html           # Main HTML file (modular loader)
├── header.html          # Navigation and header section
├── hero.html            # Hero banner section
├── playzones.html       # Play zones section
├── packages.html        # Packages & parties section
├── menu.html            # Restaurant menu section
├── gallery.html         # Photo gallery section
├── faq.html             # FAQ section
├── contact.html         # Contact & location section
├── branches.html        # Branch selection section
├── footer.html          # Footer section
├── style.css            # Custom CSS styles
├── script.js            # JavaScript functionality
├── logo.png             # Brand logo (placeholder)
└── README.md            # Project documentation
```

## 🎨 Color Theme

- **Primary Color**: `#ff6f61` (Coral)
- **Secondary Color**: `#5a4fcf` (Deep Violet)
- **Accent Color**: `#ffe066` (Sunny Yellow)
- **Background**: `#fefefe`
- **Text Color**: `#222222`

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **That's it!** The website is ready to use

### Local Development

For development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit the `:root` section in `style.css`:

```css
:root {
    --primary-color: #ff6f61;
    --secondary-color: #5a4fcf;
    --accent-color: #ffe066;
    --background-color: #fefefe;
    --text-color: #222222;
    /* ... more colors */
}
```

### Content
- **Text Content**: Edit the HTML directly in each modular file
- **Images**: Replace image URLs with your own images
- **Contact Information**: Update phone numbers, addresses, and email in the contact section
- **Logo**: Replace `logo.png` with your actual brand logo

### Animations
- **AOS Settings**: Modify animation duration, easing, and offset in `script.js`
- **Custom Animations**: Add new CSS animations in `style.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 992px

## 🎯 Key Sections

### 1. Header & Navigation
- Sticky navbar with logo
- Responsive mobile menu
- Smooth scrolling navigation
- Branch dropdown menu

### 2. Hero Banner
- Full-screen gradient background
- Animated typing headline
- Call-to-action buttons
- Responsive hero image

### 3. Play Zones
- Grid layout with hover effects
- Icon-based cards
- AOS animations (fade-left/right)

### 4. Packages & Parties
- Pricing cards with featured highlight
- Hover glow effects
- Package comparison

### 5. Restaurant Menu
- Tabbed interface (Snacks, Meals, Drinks, Desserts)
- Image gallery
- Price display

### 6. Photo Gallery
- Masonry-style grid
- Lightbox functionality
- Hover overlays

### 7. FAQ Section
- Bootstrap accordion
- Staggered animations
- Common questions

### 8. Contact & Location
- Contact form with validation
- Google Maps integration
- Branch information

### 9. Branch Selection
- Interactive branch cards
- Dedicated branch views
- Branch-specific galleries
- Location maps for each branch

## 🔧 Configuration

### AOS Animations
Configure AOS settings in `script.js`:

```javascript
AOS.init({
    duration: 800,        // Animation duration
    easing: 'ease-in-out', // Animation easing
    once: true,           // Animate only once
    mirror: false,        // Mirror animations
    offset: 100           // Offset trigger point
});
```

### Google Maps
Replace the Google Maps embed URLs in the HTML files with your actual locations:

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

### Analytics
Add Google Analytics tracking code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify Assets**: Compress CSS and JavaScript for production
3. **CDN Usage**: Use CDN links for external libraries
4. **Lazy Loading**: Images load as they enter viewport
5. **Caching**: Implement proper cache headers

## 🔒 Security Considerations

- Form validation on both client and server side
- Sanitize user inputs
- Use HTTPS in production
- Implement CSRF protection for forms

## 📞 Support

For questions or support:
- **Email**: info@ziiziiisland.com
- **Phone**: +880 1234-567890
- **Website**: http://ziiziiisland.com/

## 📄 License

This project is created for Zii Zii Island. All rights reserved.

## 🙏 Acknowledgments

- **Bootstrap** - For the responsive framework
- **AOS** - For scroll animations
- **Font Awesome** - For beautiful icons
- **Google Fonts** - For typography
- **Unsplash** - For placeholder images

---

**Built with ❤️ for families and fun!** 🎉 #   z i i z i i i s l a n d - v 1  
 