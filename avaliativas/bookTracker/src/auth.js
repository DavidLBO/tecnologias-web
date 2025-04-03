// Simulação de banco de dados de usuários
const users = JSON.parse(localStorage.getItem('bookTrackerUsers')) || [];

// Elementos do DOM
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const appScreen = document.getElementById('app-screen');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const logoutBtn = document.getElementById('logout-btn');

// Usuário atualmente logado
let currentUser = null;

// Event Listeners
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.classList.remove('active');
    registerScreen.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerScreen.classList.remove('active');
    loginScreen.classList.add('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        loginScreen.classList.remove('active');
        appScreen.classList.add('active');
        loadBooks(); // Carrega os livros do usuário
    } else {
        alert('Usuário ou senha incorretos');
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem');
        return;
    }
    
    if (users.some(u => u.username === username)) {
        alert('Nome de usuário já existe');
        return;
    }
    
    const newUser = {
        username,
        password,
        books: []
    };
    
    users.push(newUser);
    localStorage.setItem('bookTrackerUsers', JSON.stringify(users));
    
    alert('Conta criada com sucesso! Faça login para continuar.');
    registerScreen.classList.remove('active');
    loginScreen.classList.add('active');
    
    // Limpa o formulário
    registerForm.reset();
});

logoutBtn.addEventListener('click', () => {
    currentUser = null;
    appScreen.classList.remove('active');
    loginScreen.classList.add('active');
    loginForm.reset();
});

// Função para obter o usuário atual
function getCurrentUser() {
    return currentUser;
}