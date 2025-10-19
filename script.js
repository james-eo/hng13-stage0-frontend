/**
 * Profile Card JavaScript
 * Handles dynamic time display and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the profile card functionality
  initializeProfileCard();
});

/**
 * Initialize all profile card features
 */
function initializeProfileCard() {
  updateCurrentTime();
  setupTimeUpdater();
  setupAccessibilityFeatures();
  setupImageErrorHandling();
}

/**
 * Update the current time display with Date.now()
 */
function updateCurrentTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const currentTime = Date.now();
    timeElement.textContent = currentTime.toString();
    timeElement.setAttribute("aria-live", "polite");
    timeElement.setAttribute(
      "aria-label",
      `Current time in milliseconds: ${currentTime}`
    );
  }
}

/**
 * Set up automatic time updates every second
 */
function setupTimeUpdater() {
  // Update time every second for real-time display
  setInterval(updateCurrentTime, 1000);
}

/**
 * Setup accessibility features
 */
function setupAccessibilityFeatures() {
  // Add keyboard navigation support for all interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, [tabindex]"
  );

  interactiveElements.forEach((element) => {
    // Ensure proper focus handling
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #667eea";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "";
      this.style.outlineOffset = "";
    });

    // Add keyboard support for Enter and Space keys
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (this.tagName === "A") {
          // For links, let default behavior handle it
          return;
        }
        // Prevent default space scrolling for other elements
        e.preventDefault();
        this.click();
      }
    });
  });

  // Add skip link for accessibility (optional enhancement)
  addSkipLink();
}

/**
 * Add a skip link for screen readers
 */
function addSkipLink() {
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "Skip to main content";
  skipLink.className = "skip-link";
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;

  skipLink.addEventListener("focus", function () {
    this.style.top = "6px";
  });

  skipLink.addEventListener("blur", function () {
    this.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add id to main content
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.id = "main-content";
  }
}

/**
 * Handle image loading errors with fallback
 */
function setupImageErrorHandling() {
  const avatarImage = document.querySelector(
    '[data-testid="test-user-avatar"]'
  );

  if (avatarImage) {
    avatarImage.addEventListener("error", function () {
      // Fallback to a default avatar if the image fails to load
      this.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNjY3RUVBIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNTAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03NSAyMjVDNzUgMTg2IDE0MCAyMjUgMTUwIDIyNUMxNjAgMjI1IDIyNSAxODYgMjI1IDIyNVYyNzVINzVWMjI1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
      this.alt = "Default avatar - Profile image failed to load";
    });

    // Add loading state
    avatarImage.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    avatarImage.style.opacity = "0";
    avatarImage.style.transition = "opacity 0.3s ease";

    // Set opacity to 1 once loaded or if already cached
    if (avatarImage.complete) {
      avatarImage.style.opacity = "1";
    }
  }
}

/**
 * Utility function to format time in a more readable way (optional)
 */
function formatTimeForDisplay(timestamp) {
  const date = new Date(timestamp);
  return {
    timestamp: timestamp,
    readable: date.toLocaleString(),
    iso: date.toISOString(),
  };
}

/**
 * Add animation to profile card elements on scroll (optional enhancement)
 */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll(
    ".social-section, .hobbies-section, .dislikes-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Initialize scroll animations if supported
if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", setupScrollAnimations);
}

/**
 * Handle print styles (optional enhancement)
 */
function setupPrintStyles() {
  window.addEventListener("beforeprint", function () {
    // Ensure the current time is displayed correctly when printing
    updateCurrentTime();
  });
}

setupPrintStyles();

// Export functions for testing purposes (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    updateCurrentTime,
    formatTimeForDisplay,
    initializeProfileCard,
  };
}
