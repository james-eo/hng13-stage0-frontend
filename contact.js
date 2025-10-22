/**
 * Contact Form JavaScript
 * Handles form validation, submission, and accessibility features
 */

document.addEventListener("DOMContentLoaded", function () {
  initializeContactForm();
});

/**
 * Initialize contact form functionality
 */
function initializeContactForm() {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input, textarea");
  const submitButton = form.querySelector(
    '[data-testid="test-contact-submit"]'
  );

  if (!form) return;

  setupFormValidation(form, inputs);
  setupRealTimeValidation(inputs);
  setupCharacterCount();
  setupFormSubmission(form, submitButton);
}

/**
 * Set up form validation rules and error handling
 */
function setupFormValidation(form, inputs) {
  // Validation rules
  const validationRules = {
    fullName: {
      required: true,
      minLength: 2,
      pattern: /^[a-zA-Z\s'-]+$/,
      message:
        "Please enter a valid full name (letters, spaces, hyphens, and apostrophes only)",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address (e.g., name@example.com)",
    },
    subject: {
      required: true,
      minLength: 3,
      maxLength: 100,
      message: "Subject must be between 3 and 100 characters",
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 500,
      message: "Message must be between 10 and 500 characters",
    },
  };

  // Store validation rules on form for later use
  form.validationRules = validationRules;

  // Prevent default HTML5 validation messages
  inputs.forEach((input) => {
    input.addEventListener("invalid", function (e) {
      e.preventDefault();
    });
  });
}

/**
 * Set up real-time validation as user types
 */
function setupRealTimeValidation(inputs) {
  inputs.forEach((input) => {
    // Validate on blur (when user leaves field)
    input.addEventListener("blur", function () {
      if (this.value.trim()) {
        validateField(this, true);
      }
    });

    // Validate on input for immediate feedback after first interaction
    let hasInteracted = false;
    input.addEventListener("input", function () {
      if (hasInteracted || this.classList.contains("error")) {
        validateField(this, true);
      }
      hasInteracted = true;

      // Update character count for message field
      if (this.name === "message") {
        updateCharacterCount(this);
      }
    });

    // Clear errors when user starts typing
    input.addEventListener("focus", function () {
      clearFieldError(this);
    });
  });
}

/**
 * Validate individual field
 */
function validateField(field, showError = false) {
  const form = field.closest("form");
  const rules = form.validationRules[field.name];
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  if (!rules) return true;

  // Check required fields
  if (rules.required && !value) {
    isValid = false;
    errorMessage = `${getFieldDisplayName(field.name)} is required`;
  }

  // Check minimum length
  else if (rules.minLength && value.length < rules.minLength) {
    isValid = false;
    errorMessage = `${getFieldDisplayName(field.name)} must be at least ${
      rules.minLength
    } characters`;
  }

  // Check maximum length
  else if (rules.maxLength && value.length > rules.maxLength) {
    isValid = false;
    errorMessage = `${getFieldDisplayName(field.name)} must not exceed ${
      rules.maxLength
    } characters`;
  }

  // Check pattern
  else if (rules.pattern && value && !rules.pattern.test(value)) {
    isValid = false;
    errorMessage = rules.message;
  }

  // Update field state
  updateFieldState(field, isValid, showError ? errorMessage : "");

  return isValid;
}

/**
 * Update field visual state and error message
 */
function updateFieldState(field, isValid, errorMessage) {
  const errorElement = document.querySelector(
    `[data-testid="test-contact-error-${field.name.toLowerCase()}"]`
  );

  // Update ARIA attributes
  field.setAttribute("aria-invalid", !isValid);

  // Update visual state
  field.classList.toggle("error", !isValid);
  field.classList.toggle("valid", isValid && field.value.trim());

  // Update error message
  if (errorElement) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = errorMessage ? "flex" : "none";

    // Update aria-describedby
    const describedBy = field.getAttribute("aria-describedby") || "";
    if (errorMessage && !describedBy.includes(errorElement.id)) {
      field.setAttribute(
        "aria-describedby",
        `${describedBy} ${errorElement.id}`.trim()
      );
    }
  }
}

/**
 * Clear field error state
 */
function clearFieldError(field) {
  field.classList.remove("error");
  field.setAttribute("aria-invalid", "false");

  const errorElement = document.querySelector(
    `[data-testid="test-contact-error-${field.name.toLowerCase()}"]`
  );
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

/**
 * Set up character count for message field
 */
function setupCharacterCount() {
  const messageField = document.querySelector(
    '[data-testid="test-contact-message"]'
  );
  const charCountElement = document.querySelector(".char-count");

  if (messageField && charCountElement) {
    updateCharacterCount(messageField);

    messageField.addEventListener("input", function () {
      updateCharacterCount(this);
    });
  }
}

/**
 * Update character count display
 */
function updateCharacterCount(field) {
  const charCountElement = document.querySelector(".char-count");
  if (charCountElement) {
    const count = field.value.length;
    charCountElement.textContent = count;

    // Update color based on character count
    charCountElement.style.color =
      count >= 500
        ? "#e53e3e"
        : count >= 450
        ? "#ff8c00"
        : count >= 10
        ? "#48bb78"
        : "#718096";
  }
}

/**
 * Set up form submission handling
 */
function setupFormSubmission(form, submitButton) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate all fields
    const inputs = form.querySelectorAll("input, textarea");
    let isFormValid = true;

    inputs.forEach((input) => {
      const isFieldValid = validateField(input, true);
      if (!isFieldValid) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      // Focus first error field
      const firstError = form.querySelector(".error");
      if (firstError) {
        firstError.focus();
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Simulate form submission
    await submitForm(form, submitButton);
  });
}

/**
 * Simulate form submission process
 */
async function submitForm(form, submitButton) {
  // Show loading state
  setLoadingState(submitButton, true);

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    // Here you would normally send data to your backend
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form submitted with data:", data);

    // Show success message
    showSuccessMessage();

    // Reset form
    form.reset();

    // Clear any remaining error states
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      clearFieldError(input);
      input.classList.remove("valid");
    });

    // Reset character count
    const charCountElement = document.querySelector(".char-count");
    if (charCountElement) {
      charCountElement.textContent = "0";
      charCountElement.style.color = "#718096";
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showErrorMessage("Something went wrong. Please try again later.");
  } finally {
    setLoadingState(submitButton, false);
  }
}

/**
 * Set button loading state
 */
function setLoadingState(button, isLoading) {
  const buttonText = button.querySelector(".button-text");
  const buttonLoading = button.querySelector(".button-loading");

  button.disabled = isLoading;

  if (buttonText && buttonLoading) {
    buttonText.hidden = isLoading;
    buttonLoading.hidden = !isLoading;
  }

  button.setAttribute("aria-busy", isLoading);
}

/**
 * Show success message
 */
function showSuccessMessage() {
  const successElement = document.querySelector(
    '[data-testid="test-contact-success"]'
  );
  if (successElement) {
    successElement.hidden = false;
    successElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Hide success message after 10 seconds
    setTimeout(() => {
      successElement.hidden = true;
    }, 10000);
  }
}

/**
 * Show error message (you can implement this for general errors)
 */
function showErrorMessage(message) {
  // This could show a general error toast or banner
  alert(message); // Simple implementation, you could make this more sophisticated
}

/**
 * Get user-friendly field display name
 */
function getFieldDisplayName(fieldName) {
  const displayNames = {
    fullName: "Full name",
    email: "Email address",
    subject: "Subject",
    message: "Message",
  };

  return displayNames[fieldName] || fieldName;
}

/**
 * Utility function to get form data as an object
 */
function getFormData(form) {
  const formData = new FormData(form);
  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value.trim();
  }

  return data;
}

/**
 * Export functions for testing
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validateField,
    updateFieldState,
    getFormData,
    setupFormValidation,
  };
}
