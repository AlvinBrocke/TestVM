// Scroll to gallery section
document.getElementById('learn-more').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('gallery').offsetTop,
        behavior: 'smooth'
    });
});

// Motorcycle hover effect
const cards = document.querySelectorAll('.motorcycle-card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transition = 'background-color 0.3s, transform 0.3s';
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
