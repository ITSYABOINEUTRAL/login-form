document.getElementById("resetPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting immediately

    let oldPassword = document.getElementById("oldpassword").value.trim();
    let newPassword = document.getElementById("newpassword").value.trim();
    let confirmPassword = document.getElementById("confirmpassword").value.trim();

    let oldPasswordError = document.getElementById("oldpasswordError");
    let newPasswordError = document.getElementById("newpasswordError");
    let confirmPasswordError = document.getElementById("confirmpasswordError");

    // Reset error messages
    oldPasswordError.textContent = "";
    newPasswordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    // Check if new password is the same as the old one
    if (oldPassword === newPassword) {
        newPasswordError.textContent = "New password cannot be the same as the old password.";
        isValid = false;
    }

    // Check password length (example: minimum 8 characters)
    if (newPassword.length < 8) {
        newPasswordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // If everything is valid, process the password reset (e.g., Firebase auth)
    if (isValid) {
        alert("Password successfully reset!");
        // Add logic to update the password in Firebase or backend.
    }
});