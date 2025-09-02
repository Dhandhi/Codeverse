
// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => menu.classList.toggle('show'));
// Close on link click (mobile)
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('show')));

// Simple form handlers
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for reaching out! The team will respond shortly.');
    e.target.reset();
});
document.getElementById('regForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Registration received! A confirmation email will be sent soon.');
    e.target.reset();
});