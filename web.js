document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.hero button').addEventListener('click', function() {
    document.querySelector('#car-specs').scrollIntoView({
        behavior: 'smooth'
    });
});


const carCards = document.querySelectorAll('.car-card');
carCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});


document.getElementById('logout-btn').addEventListener('click', logout);


function logout() {
    
    localStorage.removeItem('is_logged_in');

    
    window.location.href = 'login.html';
}

