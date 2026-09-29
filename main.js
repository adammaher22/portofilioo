const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.innerHTML = isOpen
        ? '<i class="fas fa-xmark"></i>'
        : '<i class="fas fa-bars"></i>';

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


/* Close mobile menu when resizing */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});