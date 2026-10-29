// 1. Grab the form and the message area
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// 2. Grab the eight inputs
const studentId = document.getElementById("studentId");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const programme = document.getElementById("programme");
const year = document.getElementById("year");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function showError(fieldId, text) {
  document.getElementById(fieldId + "Error").textContent = text;
}
// 3. Listen for the submit event
form.addEventListener("submit", function (event) {

  // 4. Stop the page from reloading
  event.preventDefault();
   // Start by assuming the form is valid
  let isValid = true;

  // Clear old error messages
  document.querySelectorAll(".error").forEach(function (span) {
    span.textContent = "";
  });

  message.textContent = "";
  message.classList.remove("success", "error-message");

  // Student ID
  const idValue = studentId.value.trim();

  if (idValue === "") {
    showError("studentId", "Student ID is required");
    isValid = false;
  } else if (!/^\d+$/.test(idValue)) {
    showError("studentId", "Student ID must contain numbers only");
    isValid = false;
  } else if (idValue.length < 9 || idValue.length > 10) {
    showError("studentId", "Student ID must be 9 to 10 digits");
    isValid = false;
  }

  // Full Name
  const nameValue = fullName.value.trim();

  if (nameValue === "") {
    showError("fullName", "Full name is required");
    isValid = false;
  } else if (nameValue.length < 3) {
    showError("fullName", "Name must have at least 3 characters");
    isValid = false;
  }
    // Email
  const emailValue = email.value.trim();

  if (emailValue === "") {
    showError("email", "Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    showError("email", "Enter a valid email address");
    isValid = false;
  }

  // Phone
  const phoneValue = phone.value.trim();

  if (phoneValue === "") {
    showError("phone", "Phone number is required");
    isValid = false;
  } else if (!/^\d+$/.test(phoneValue)) {
    showError("phone", "Phone number must contain numbers only");
    isValid = false;
  } else if (phoneValue.length < 9 || phoneValue.length > 10) {
    showError("phone", "Phone number must be 9 to 10 digits");
    isValid = false;
  }

  // Programme
  if (programme.value === "") {
    showError("programme", "Please select a programme");
    isValid = false;
  }

  // Year of study
  if (year.value === "") {
    showError("year", "Please select your year of study");
    isValid = false;
  }
    // Password
  const passwordValue = password.value;

  if (passwordValue === "") {
    showError("password", "Password is required");
    isValid = false;
  } else if (passwordValue.length < 6) {
    showError("password", "Password must have at least 6 characters");
    isValid = false;
  } else if (!/\d/.test(passwordValue)) {
    showError("password", "Password must contain at least one number");
    isValid = false;
  }

  // Confirm password
  const confirmValue = confirmPassword.value;

  if (confirmValue === "") {
    showError("confirmPassword", "Please confirm your password");
    isValid = false;
  } else if (confirmValue !== passwordValue) {
    showError("confirmPassword", "Passwords do not match");
    isValid = false;
  }

  // Final result
  if (isValid) {
    message.textContent = "Registration successful! Welcome, " + nameValue;
    message.classList.add("success");
    form.reset();
  } else {
    message.textContent = "Please fix the errors above and try again";
    message.classList.add("error-message");
  }

});