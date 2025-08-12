const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').innerHTML = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('name-error').innerHTML = '';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('email-error').innerHTML = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('email-error').innerHTML = '';
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        document.getElementById('message-error').innerHTML = 'Message is required';
        isValid = false;
    } else {
        document.getElementById('message-error').innerHTML = '';
    }

 if (!isValid) {
        e.preventDefault();
    } else {
        successMessage.innerHTML = 'Form submitted successfully!';
        // Prevent actual form submission for demo purposes
        e.preventDefault();
    }
});

