function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const lengthCounter = document.getElementById('lengthCounter');
    const lengthCriteria = document.getElementById('length');
    const uppercaseCriteria = document.getElementById('uppercase');
    const lowercaseCriteria = document.getElementById('lowercase');
    const numbersCriteria = document.getElementById('numbers');
    const specialCriteria = document.getElementById('special');
    const strengthBar = document.getElementById('strengthBar');
    const congratsMessage = document.getElementById('congratsMessage');

    let score = 0;

    // Update length counter
    lengthCounter.textContent = `Length: ${password.length}`;

    // Check length
    if (password.length >= 12) {
        lengthCriteria.querySelector('.status').textContent = '✅';
        score += 1;
    } else {
        lengthCriteria.querySelector('.status').textContent = '❌';
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        uppercaseCriteria.querySelector('.status').textContent = '✅';
        score += 1;
    } else {
        uppercaseCriteria.querySelector('.status').textContent = '❌';
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        lowercaseCriteria.querySelector('.status').textContent = '✅';
        score += 1;
    } else {
        lowercaseCriteria.querySelector('.status').textContent = '❌';
    }

    // Check for numbers
    if (/\d/.test(password)) {
        numbersCriteria.querySelector('.status').textContent = '✅';
        score += 1;
    } else {
        numbersCriteria.querySelector('.status').textContent = '❌';
    }

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        specialCriteria.querySelector('.status').textContent = '✅';
        score += 1;
    } else {
        specialCriteria.querySelector('.status').textContent = '❌';
    }

    // Update strength bar width and color based on score
    const width = (score / 5) * 100;
    strengthBar.style.width = width + '%';

    if (score <= 1) {
        strengthBar.style.backgroundColor = 'red';
        congratsMessage.classList.add('hidden');
    } else if (score == 2) {
        strengthBar.style.backgroundColor = 'orange';
        congratsMessage.classList.add('hidden');
    } else if (score == 3) {
        strengthBar.style.backgroundColor = 'yellow';
        congratsMessage.classList.add('hidden');
    } else if (score >= 4) {
        strengthBar.style.backgroundColor = 'green';
    }

    // Show congratulation message if all criteria are met
    if (score === 5) {
        congratsMessage.classList.remove('hidden');
    } else {
        congratsMessage.classList.add('hidden');
    }
}
