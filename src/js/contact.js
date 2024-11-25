// contact.js
import '../styles/contact.css';

// Function to validate the form
function validateForm(e) {
    e.preventDefault();  // Prevent form submission if validation fails
    let isValid = true;

    // Clear previous error messages
    document.getElementById('name-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('message-error').style.display = 'none';

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        document.getElementById('name-error').innerText = "Full Name is required.";
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById('email-error').innerText = "Please enter a valid email address.";
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === "") {
        document.getElementById('message-error').innerText = "Message is required.";
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

    // If validation is successful, simulate form submission (this can be replaced with actual form submission logic)
    if (isValid) {
        // Simulate a successful form submission
        alert("Form submitted successfully!");
        // You can uncomment the next line to actually submit the form if necessary
        // document.getElementById('contactForm').submit();
    }

    return isValid;  // Prevent form submission if validation fails
}
