const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.onclick = () => {
    nav.classList.toggle('active');
};


const text = "Soluções bancárias seguras, ágeis e personalizadas para o crescimento do seu negócio.";
const speed = 40;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;