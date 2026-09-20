"use strict";

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");

function clearMessages() {
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";
}

function validateForm(event) {
  event.preventDefault();
  clearMessages();

  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must have at least 8 characters, one uppercase letter, and one number.";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required.";
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
