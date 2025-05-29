// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se há um usuário logado (simulação)
    // Na prática, você usaria um sistema de autenticação mais robusto
    const currentUser = getCurrentUser();
    
    if (currentUser) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('app-screen').classList.add('active');
        loadBooks();
    } else {
        document.getElementById('login-screen').classList.add('active');
    }
    
    // Define a primeira seção como ativa
    if (document.querySelector('.content-section')) {
        document.querySelector('.content-section').classList.add('active');
    }
    
    // Define o primeiro link de navegação como ativo
    if (document.querySelector('.nav-link')) {
        document.querySelector('.nav-link').classList.add('active');
    }
});