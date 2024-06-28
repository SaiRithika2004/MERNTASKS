function validateForm() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let valid = true;

    // Basic validation for empty fields
    if (username.value.trim() === '') {
        alert('Please enter your username.');
        valid = false;
    }

    if (password.value.trim() === '') {
        alert('Please enter your password.');
        valid = false;
    }

    return valid;
}