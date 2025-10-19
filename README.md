# Profile Card - HNG Stage 0 Task

A responsive, accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript. This project meets all the requirements for the HNG Stage 0 task.

## 🎯 Task Requirements

This profile card includes all required elements with proper `data-testid` attributes for automated testing:

### ✅ Required Elements

- **Profile card root container** — `data-testid="test-profile-card"`
- **Name (plain text)** — `data-testid="test-user-name"`
- **Short biography (paragraph)** — `data-testid="test-user-bio"`
- **Current time (in milliseconds)** — `data-testid="test-user-time"`
- **Avatar image (user photo)** — `data-testid="test-user-avatar"`
- **Social links list** — `data-testid="test-user-social-links"`
  - Individual links: `test-user-social-github`, `test-user-social-linkedin`, `test-user-social-twitter`
- **Hobbies (list)** — `data-testid="test-user-hobbies"`
- **Dislikes (list)** — `data-testid="test-user-dislikes"`

## 🚀 Features

### Semantic HTML

- Uses semantic tags: `<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`, `<h1>`, `<p>`, `<ul>`, `<li>`
- Proper heading hierarchy and document structure
- Accessible image with descriptive alt text

### Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Flexbox and CSS Grid** for modern layout techniques
- **Three breakpoints:**
  - Mobile: < 768px (stacked layout)
  - Tablet: 768px - 1023px (side-by-side with 2-column lists)
  - Desktop: 1024px+ (optimized spacing with 3-column lists)

### Accessibility

- **Keyboard navigation** support for all interactive elements
- **Focus indicators** with proper contrast
- **ARIA labels** and live regions where appropriate
- **Screen reader friendly** semantic structure
- **Skip link** for keyboard users
- **High contrast mode** support
- **Reduced motion** support for users who prefer it
- **Dark mode** support based on user preferences

### JavaScript Functionality

- **Real-time clock** displaying `Date.now()` in milliseconds
- **Updates every second** for accuracy
- **Error handling** for image loading failures
- **Progressive enhancement** - works without JS
- **Accessibility features** programmatically added

## 📱 Responsive Breakpoints

```css
/* Mobile: Default styles */
/* Tablet: 768px and up */
@media (min-width: 768px) {
  ...;
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  ...;
}

/* Large Desktop: 1200px and up */
@media (min-width: 1200px) {
  ...;
}
```

## 🔧 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Running the Project

#### Option 1: Direct File Opening

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. The profile card will load and display current time

#### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### File Structure

```
stage0/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🧪 Testing Data-TestIDs

All required test IDs are implemented. You can verify them using browser dev tools or automated tests:

```javascript
// Test ID verification examples
document.querySelector('[data-testid="test-profile-card"]');
document.querySelector('[data-testid="test-user-name"]');
document.querySelector('[data-testid="test-user-bio"]');
document.querySelector('[data-testid="test-user-time"]');
document.querySelector('[data-testid="test-user-avatar"]');
document.querySelector('[data-testid="test-user-social-links"]');
document.querySelector('[data-testid="test-user-hobbies"]');
document.querySelector('[data-testid="test-user-dislikes"]');
```

## 🌐 Deployment Options

### Netlify (Recommended)

1. Fork/clone this repository
2. Connect your GitHub account to Netlify
3. Deploy from the repository
4. Netlify will automatically build and deploy

### GitHub Pages

1. Push code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically deploy
3. Get instant live URL

## 📋 Acceptance Criteria Checklist

- ✅ All required elements with exact `data-testid` attributes
- ✅ Semantic HTML tags used throughout
- ✅ Time displays `Date.now()` in milliseconds and updates
- ✅ Avatar with proper alt attribute
- ✅ Social links in container with individual test IDs
- ✅ Distinct hobbies and dislikes lists
- ✅ Keyboard navigation works with visible focus
- ✅ Responsive layout at mobile/tablet/desktop breakpoints
- ✅ Links open in new tab with security attributes

## 🎨 Customization

### Changing Profile Information

Edit the content in `index.html`:

- Update name in the `h1` tag
- Modify bio in the `p` tag
- Change avatar `src` and `alt` attributes
- Update social links and their URLs
- Customize hobbies and dislikes lists

### Styling Modifications

All styles are in `styles.css`:

- Colors and gradients
- Typography and spacing
- Animation effects
- Responsive breakpoints

### JavaScript Enhancements

`script.js` contains:

- Time update functionality
- Accessibility features
- Image error handling
- Optional scroll animations

## 🏆 HNG Stage 0 Submission

This project fulfills all requirements for the HNG Stage 0 Frontend task:

1. **Responsive profile card** with all required elements
2. **Semantic HTML** structure with proper accessibility
3. **Data-testid attributes** for automated testing
4. **Real-time millisecond display** using `Date.now()`
5. **Mobile-responsive design** that works on all devices
6. **Keyboard accessibility** and focus management
7. **Modern CSS** with Flexbox and Grid
8. **Clean, maintainable code** with comments

## 🔗 Links

- **Live Demo:** [Your deployed URL here]
- **GitHub Repository:** [Your repository URL here]

---

**Built with ❤️ for HNG Stage 0 Frontend Task**
