// Menu para celular
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// Ano automático no rodapé
document.getElementById("year").textContent =
    new Date().getFullYear();

// Destacar seção ativa no menu
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});