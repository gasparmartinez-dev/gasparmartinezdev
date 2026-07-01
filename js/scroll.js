const elementos = document.querySelectorAll(".animar-scroll");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});