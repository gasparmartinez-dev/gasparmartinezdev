document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las secciones de la página
  const sections = document.querySelectorAll("section");
  // Seleccionamos todos los enlaces dentro del menú en el header
  const navLinks = document.querySelectorAll("header div a");

  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.5 
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // obtengo el id de la sección visible (ej: "sobre_mi")
        const id = entry.target.getAttribute("id");

        // Quitamos la clase 'active' de TODOS los enlaces del menú
        navLinks.forEach((link) => link.classList.remove("active"));

        // Buscamos el enlace exacto que apunta a esa sección (href="#sobre_mi") y le ponemos 'active'
        const activeLink = document.querySelector(`header div a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Ponemos al observador a vigilar cada una de tus secciones
  sections.forEach((section) => observer.observe(section));
});