// Simulated user database
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = null;

function toggleForms() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('register-form').classList.toggle('hidden');
}

function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (users.find(user => user.email === email)) {
        alert('Email already registered');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    toggleForms();
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        initializeSlideshow();
    } else {
        alert('Invalid email or password');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('content').classList.add('hidden');
}