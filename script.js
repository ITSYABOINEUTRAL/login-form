// script.js

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    // Get error message elements
    let errors = document.querySelectorAll(".error");
    errors.forEach(error => error.textContent = ""); // Clear previous errors

    let isValid = true;

    // Username validation
    if (name === "") {
        errors[0].textContent = "Username is required";
        isValid = false;
    }

    // Email validation (basic check)
    if (email === "") {
        errors[1].textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        errors[1].textContent = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        errors[2].textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        errors[2].textContent = "Password must be at least 8 characters";
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        alert("Form submitted successfully!");
    }
});