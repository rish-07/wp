function validateForm(event, successMessage) {
    event.preventDefault();
    const email = document.getElementById('mail').value;
    const password = document.getElementById('Password').value;

    if (!validateInput(email, /^[a-zA-Z0-9+-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!validateInput(password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)) {
        alert('Please enter a valid password (at least 8 characters, including uppercase, lowercase, and a number)');
        return;
    }

    alert(successMessage);
}

function validateInput(value, regex) {
    return regex.test(value);
}

const regForm = document.getElementById('Registration');
if (regForm) {
    regForm.addEventListener('submit', (event) => {
        validateForm(event, 'Registration successful');
    });
}

const logForm = document.getElementById('log');
if (logForm) {
    logForm.addEventListener('submit', (event) => {
        validateForm(event, 'Login successful');
    });
}
