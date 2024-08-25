const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (!/^[а-яА-Яa-zA-Z\s]+$/.test(nameInput.value.trim())) {
    nameError.textContent = "Name can only contain letters and spaces.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (
    passwordInput.value.length < 8 ||
    !/[a-zA-Z]/.test(passwordInput.value) ||
    !/\d/.test(passwordInput.value)
  ) {
    passwordError.textContent =
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    window.location.href = "success.html";
  }
});
