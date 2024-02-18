// Dipakai untuk animasi Typerwritter
let text = document.querySelector(".text");
var typed = new Typed(text, {
    strings: ["Full-Stack Developer", "Front-End Developer", "Back-End Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
});

// Dipakai untuk "active" navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};