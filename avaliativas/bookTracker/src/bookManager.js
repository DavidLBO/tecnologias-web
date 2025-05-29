// Elementos do DOM
const bookForm = document.getElementById('book-form');
const booksContainer = document.getElementById('books-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLink = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

// Event Listeners
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const status = button.dataset.status;
        filterBooks(status);
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.screen;
        
        // Atualiza a navegação ativa
        navLinks.forEach(nav => {
            if (nav === link) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });
        
        // Mostra a seção correspondente
        contentSections.forEach(section => {
            if (section.id === target) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

// Função para adicionar um livro
function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const status = document.getElementById('book-status').value;
    const rating = document.getElementById('book-rating').value;
    const notes = document.getElementById('book-notes').value;
    
    const newBook = {
        id: Date.now(),
        title,
        author,
        status,
        rating: rating || null,
        notes: notes || null,
        addedDate: new Date().toISOString()
    };
    
    const user = getCurrentUser();
    if (user) {
        user.books.push(newBook);
        updateUserData(user);
        renderBooks(user.books);
        bookForm.reset();
    }
}

// Função para renderizar os livros
function renderBooks(books) {
    booksContainer.innerHTML = '';
    
    if (books.length === 0) {
        booksContainer.innerHTML = '<p>Nenhum livro adicionado ainda.</p>';
        return;
    }
    
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.dataset.id = book.id;
        bookElement.dataset.status = book.status;
        
        let statusText = '';
        let statusClass = '';
        
        switch(book.status) {
            case 'want-to-read':
                statusText = 'Quero Ler';
                statusClass = 'status-want-to-read';
                break;
            case 'reading':
                statusText = 'Lendo';
                statusClass = 'status-reading';
                break;
            case 'completed':
                statusText = 'Concluído';
                statusClass = 'status-completed';
                break;
        }
        
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Status:</strong> <span class="book-status ${statusClass}">${statusText}</span></p>
            ${book.rating ? `<p><strong>Avaliação:</strong> ${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</p>` : ''}
            ${book.notes ? `<p><strong>Notas:</strong> ${book.notes}</p>` : ''}
            <div class="book-actions">
                <button class="change-status-btn" data-id="${book.id}">Mudar Status</button>
                <button class="delete-btn" data-id="${book.id}">Remover</button>
            </div>
        `;
        
        booksContainer.appendChild(bookElement);
    });
    
    // Adiciona event listeners aos botões de ação
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = parseInt(e.target.dataset.id);
            deleteBook(bookId);
        });
    });
    
    document.querySelectorAll('.change-status-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const bookId = parseInt(e.target.dataset.id);
            changeBookStatus(bookId);
        });
    });
}

// Função para filtrar livros por status
function filterBooks(status) {
    const user = getCurrentUser();
    if (!user) return;
    
    if (status === 'all') {
        renderBooks(user.books);
    } else {
        const filteredBooks = user.books.filter(book => book.status === status);
        renderBooks(filteredBooks);
    }
}

// Função para deletar um livro
function deleteBook(bookId) {
    const user = getCurrentUser();
    if (!user) return;
    
    user.books = user.books.filter(book => book.id !== bookId);
    updateUserData(user);
    renderBooks(user.books);
}

// Função para mudar o status de um livro
function changeBookStatus(bookId) {
    const user = getCurrentUser();
    if (!user) return;
    
    const book = user.books.find(b => b.id === bookId);
    if (!book) return;
    
    switch(book.status) {
        case 'want-to-read':
            book.status = 'reading';
            break;
        case 'reading':
            book.status = 'completed';
            break;
        case 'completed':
            book.status = 'want-to-read';
            break;
    }
    
    updateUserData(user);
    renderBooks(user.books);
}

// Função para carregar os livros do usuário
function loadBooks() {
    const user = getCurrentUser();
    if (user) {
        renderBooks(user.books);
    }
}

// Função para atualizar os dados do usuário no localStorage
function updateUserData(user) {
    const users = JSON.parse(localStorage.getItem('bookTrackerUsers')) || [];
    const index = users.findIndex(u => u.username === user.username);
    
    if (index !== -1) {
        users[index] = user;
        localStorage.setItem('bookTrackerUsers', JSON.stringify(users));
    }
}