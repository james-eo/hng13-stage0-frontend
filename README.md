# Freeman's Portfolio - HNG Stage 1 Multi-Page Application

A responsive, accessible multi-page web application built with semantic HTML, modern CSS, and vanilla JavaScript. This project expands on the Stage 0 Profile Card to create a complete portfolio website with navigation, contact form validation, and reflective content.

### 📄 **Pages Overview**

#### 1. **Home Page** (`index.html`)

- ✅ Profile card from Stage 0 with all original elements
- ✅ Navigation menu integration
- ✅ All original `data-testid` attributes preserved

#### 2. **Contact Us Page** (`contact.html`)

- ✅ Contact form with validation
- ✅ All required fields and `data-testid` attributes:
  - `test-contact-name` — Full name input
  - `test-contact-email` — Email input
  - `test-contact-subject` — Subject input
  - `test-contact-message` — Message textarea
  - `test-contact-submit` — Submit button
  - `test-contact-error-<field>` — Error messages for each field
  - `test-contact-success` — Success message

#### 3. **About Me Page** (`about.html`)

- ✅ Reflective content with required sections:
  - `test-about-page` — Main page container
  - `test-about-bio` — Biography section
  - `test-about-goals` — Goals in the program
  - `test-about-confidence` — Areas of low confidence
  - `test-about-future-note` — Note to future self
  - `test-about-extra` — Extra thoughts and inspirations

## 🚀 Key Features

### 🧭 **Site-Wide Navigation**

- **Fixed navigation bar** with backdrop blur effect
- **Mobile-responsive hamburger menu** with smooth animations
- **Active page indication** with proper ARIA attributes
- **Keyboard accessible** with focus management
- **Consistent across all pages** for seamless UX

### ✅ **Contact Form Validation**

- **Real-time validation** with immediate feedback
- **Comprehensive error handling** for all field types
- **Custom validation rules:**
  - Name: Letters, spaces, hyphens, apostrophes only
  - Email: Valid email format (name@example.com)
  - Subject: 3-100 characters
  - Message: 10-500 characters with live character count
- **Accessible error messages** linked to form fields
- **Success confirmation** with auto-hide functionality
- **Loading states** with animated spinner

### 🎯 **Advanced Accessibility**

- **Semantic HTML5** throughout (`<main>`, `<section>`, `<nav>`, `<article>`)
- **ARIA landmarks and labels** for screen readers
- **Form accessibility** with proper `<label>` associations
- **Keyboard navigation** with visible focus indicators
- **Skip links** for improved navigation
- **Screen reader announcements** for dynamic content
- **Color contrast compliance** (WCAG 2.1 AA)

### 📱 **Responsive Design**

- **Mobile-first CSS** with progressive enhancement
- **Flexible grid layouts** adapting to screen size
- **Touch-friendly interactions** (44px minimum touch targets)
- **Optimized typography** scaling across devices
- **Four breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: 1024px - 1199px
  - Large Desktop: 1200px+

### 🎨 **Modern CSS Features**

- **CSS Grid and Flexbox** for layout
- **CSS Custom Properties** for theming
- **Backdrop filters** for modern glass effects
- **Gradient backgrounds** and hover animations
- **Dark mode support** via `prefers-color-scheme`
- **High contrast mode** compatibility
- **Reduced motion** respect for accessibility

### 💻 **JavaScript Features**

- **Modular ES6+ code** with proper error handling
- **Real-time form validation** with debouncing
- **Dynamic navigation** state management
- **Character counting** with visual feedback
- **Loading states** and animations
- **Mobile menu** toggle functionality
- **Time display** updating every second
- **Progressive enhancement** - works without JavaScript

## 📁 Project Structure

```
freeman-portfolio/
├── index.html          # Home page with profile card
├── contact.html        # Contact form with validation
├── about.html         # About me with reflective content
├── styles.css         # Main stylesheet (shared styles + navigation)
├── contact.css        # Contact page specific styles
├── about.css          # About page specific styles
├── script.js          # Main JavaScript (shared functionality)
├── contact.js         # Contact form validation logic
├── test.html          # Testing verification tool (optional)
├── README.md          # This documentation
└── DEPLOYMENT.md      # Deployment instructions
```

## 🔧 Local Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for full functionality)
- Text editor or IDE

### Quick Start

```bash
# Clone the repository
git clone https://github.com/james-eo/hng13-stage0-frontend.git
cd hng13-stage0-frontend

# Start local server
python -m http.server 8000
# OR
npx http-server
# OR
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Page Navigation

- **Home:** `http://localhost:8000/` or `index.html`
- **Contact:** `http://localhost:8000/contact.html`
- **About:** `http://localhost:8000/about.html`
- **Testing:** `http://localhost:8000/test.html` (verification tool)

## 🧪 Testing & Validation

### Data-TestID Verification

**Home Page (Stage 0 Elements):**

```javascript
// Home page elements
document.querySelector('[data-testid="test-profile-card"]'); // Profile container
document.querySelector('[data-testid="test-user-name"]'); // User name
document.querySelector('[data-testid="test-user-bio"]'); // Biography
document.querySelector('[data-testid="test-user-time"]'); // Current time
document.querySelector('[data-testid="test-user-avatar"]'); // Avatar image
document.querySelector('[data-testid="test-user-social-links"]'); // Social links
document.querySelector('[data-testid="test-user-hobbies"]'); // Hobbies list
document.querySelector('[data-testid="test-user-dislikes"]'); // Dislikes list
```

**Contact Page Elements:**

```javascript
// Form fields
document.querySelector('[data-testid="test-contact-name"]'); // Name input
document.querySelector('[data-testid="test-contact-email"]'); // Email input
document.querySelector('[data-testid="test-contact-subject"]'); // Subject input
document.querySelector('[data-testid="test-contact-message"]'); // Message textarea
document.querySelector('[data-testid="test-contact-submit"]'); // Submit button

// Validation messages
document.querySelector('[data-testid="test-contact-error-name"]'); // Name error
document.querySelector('[data-testid="test-contact-error-email"]'); // Email error
document.querySelector('[data-testid="test-contact-error-subject"]'); // Subject error
document.querySelector('[data-testid="test-contact-error-message"]'); // Message error
document.querySelector('[data-testid="test-contact-success"]'); // Success message
```

**About Page Elements:**

```javascript
// Content sections
document.querySelector('[data-testid="test-about-page"]'); // Main container
document.querySelector('[data-testid="test-about-bio"]'); // Biography section
document.querySelector('[data-testid="test-about-goals"]'); // Goals section
document.querySelector('[data-testid="test-about-confidence"]'); // Confidence section
document.querySelector('[data-testid="test-about-future-note"]'); // Future note section
document.querySelector('[data-testid="test-about-extra"]'); // Extra thoughts section
```

### Form Validation Testing

- **Required fields:** Try submitting empty form
- **Email validation:** Test invalid email formats
- **Character limits:** Test minimum/maximum lengths
- **Real-time feedback:** Watch errors appear/disappear as you type
- **Success flow:** Fill valid form and submit

## 📋 HNG Stage 1 Acceptance Criteria

### ✅ **Contact Us Page**

- ✅ All required fields with correct `data-testids`
- ✅ Form validation prevents invalid submissions
- ✅ Success message shows only after valid submission
- ✅ Error messages tied to inputs with `aria-describedby`
- ✅ All inputs have proper `<label>` associations
- ✅ Entire form is keyboard accessible

### ✅ **About Me Page**

- ✅ All required sections with correct `data-testids`
- ✅ Semantic HTML used (`main`, `section`, `h2`, `p`)
- ✅ Reflective content in each required section
- ✅ Proper heading hierarchy and structure

### ✅ **General Requirements**

- ✅ Semantic HTML throughout all pages
- ✅ Fully accessible (labels, alt text, ARIA associations)
- ✅ Responsive across mobile, tablet, desktop
- ✅ Keyboard navigable with visible focus
- ✅ Modular, readable, and consistent code
- ✅ All original Stage 0 elements preserved

## 🎨 Customization Guide

### **Personal Information**

```html
<!-- In index.html -->
<h1 data-testid="test-user-name">Your Name</h1>
<p data-testid="test-user-bio">Your bio...</p>

<!-- In about.html -->
<section data-testid="test-about-bio">
  <!-- Your story -->
</section>
```

### **Styling & Theming**

- **Main styles:** `styles.css` (navigation, shared components)
- **Contact styles:** `contact.css` (form-specific styling)
- **About styles:** `about.css` (page-specific layouts)
- **Color scheme:** CSS custom properties in `:root`
- **Responsive breakpoints:** Mobile-first media queries across all CSS files

### **JavaScript Functionality**

- **Main script:** `script.js` (navigation, time, accessibility)
- **Contact script:** `contact.js` (form validation logic)
- **Modular functions:** Easy to extend and maintain

## 🌐 Deployment

### **Netlify (Recommended)**

1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### **GitHub Pages**

1. Repository Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/` (root)
4. Visit: `https://username.github.io/repo-name`

## 🏆 **HNG Stage 1 Submission**

This multi-page portfolio fulfills all Stage 1 requirements:

### **Core Features:**

✅ **Three-page application** (Home, Contact, About)  
✅ **Site navigation** with mobile responsiveness  
✅ **Contact form** with comprehensive validation  
✅ **About page** with reflective, personal content  
✅ **All required `data-testids`** for automated testing  
✅ **Semantic HTML** and accessibility throughout  
✅ **Mobile-first responsive design**  
✅ **Modern CSS** with animations and effects  
✅ **Vanilla JavaScript** with error handling

### **Advanced Implementation:**

- **Progressive enhancement** - works without JavaScript
- **Real-time form validation** with accessible feedback
- **Mobile navigation** with smooth animations
- **Dark mode support** via CSS media queries
- **Print-friendly styles** for documentation
- **Cross-browser compatibility** and optimization

## 📞 Support & Issues

If you encounter any issues or have questions:

1. Check the browser console for JavaScript errors
2. Verify all files are in the correct structure
3. Test with a local server (not file:// protocol)
4. Ensure browser supports modern CSS features

## � Project Assets

- `assets/freeman.png` — Profile avatar image

## ⏰ **Important Dates**

- **Submission Deadline:** October 22, 2025 | 11:59 pm WAT
- **Status:** ✅ **READY FOR SUBMISSION**

## Links

- **Live Demo:** https://james-eo.github.io/hng13-stage0-frontend/
- **GitHub Repository:** https://github.com/james-eo/hng13-stage0-frontend

---

**Built with ❤️ for HNG Stage 1 Frontend Task**  
_Expanding from Stage 0 Profile Card to Multi-Page Portfolio Application_
