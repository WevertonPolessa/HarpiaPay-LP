const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.onclick = () => {
    nav.classList.toggle('active');
};