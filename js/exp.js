const experiencias = {
    profe: {
        titulo: "Profesor de curso de informática",
        empresa: "Centro Educa, La Roda",
        ciudad: "La Roda, Albacete",
        periodo: "Jun 2025 - Jul 2025",
        p1: "Impartí un curso de introducción a la informática a niños de entre 10 y 18 años. Se trataros varias materias, como ofimática, pero lo más destacado fue enseñarles a usar Scratch.",
        p2: "Desarrollaron distintos juegos con Scratch, cada uno en función de sus capacidades. Así, conseguí introducirlos al mundo de la programación de una forma sencilla y entretenida, y los alumnos quedaron muy contentos.",
        logro1: "Diseño e impartición de programas formativos de Scratch y Ofimática.",
        logro2: "Adaptación de contenidos a distintos niveles y rangos de edad.",
        logro3: "Introducción de conceptos fundamentales de programación (variables, bucles...)",
        skill1: "Scratch",
        skill2: "Ofimática",
        skill3: "Canva",
        skill4: "Docencia",
        skill5: "Programación básica"
    },

    freelance: {
        titulo: "Desarrollador web freelance",
        empresa: "Desarrollo freelance",
        ciudad: "La Roda, Albacete",
        periodo: "Nov 2025 - Ahora",
        p1: "Desarrollo páginas web de forma autónoma, empezando por comercios locales, para ganar experiencia y mejorar mis habilidades en el desarrollo web Frontend y Backend.",
        p2: "Actualmente, he desarrollado proyectos tanto personales, como una aplicación de estudio, como para clientes reales, como una Landing Page para un abogado.",
        logro1: "Desarrollo y despliegue de aplicaciones web completas para clientes y negocios locales.",
        logro2: "Diseño de arquitecturas frontend y backend adaptadas a las necesidades de cada proyecto.",
        logro3: "Entrega exitosa de múltiples proyectos web cumpliendo plazos y requisitos de negocio.",
        skill1: "JS",
        skill2: "HTML",
        skill3: "CSS",
        skill4: "Python",
        skill5: "Figma"
    }
}

function renderExperiencia(id) {
    const exp = experiencias[id];

    document.getElementById('expcard_titulo').textContent = exp.titulo;
    document.getElementById('expcard_empresa').textContent = exp.empresa;
    document.getElementById('expcard_ciudad').textContent = exp.ciudad;
    document.getElementById('expcard_periodo').textContent = exp.periodo;
    document.getElementById('expcard_p1').textContent = exp.p1;
    document.getElementById('expcard_p2').textContent = exp.p2;
    document.getElementById('expcard_logros').textContent = "LOGROS CLAVE";
    document.getElementById('expcard_ul1').textContent = exp.logro1;
    document.getElementById('expcard_ul2').textContent = exp.logro2;
    document.getElementById('expcard_ul3').textContent = exp.logro3;
    document.getElementById('expcard_usado1').textContent = exp.skill1;
    document.getElementById('expcard_usado2').textContent = exp.skill2;
    document.getElementById('expcard_usado3').textContent = exp.skill3;
    document.getElementById('expcard_usado4').textContent = exp.skill4;
    document.getElementById('expcard_usado5').textContent = exp.skill5;

}


const exp_opciones = document.querySelectorAll('.exp_opcion');

exp_opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {

        exp_opciones.forEach(opc => opc.classList.remove('active'));
        opcion.classList.add('active');

        renderExperiencia(opcion.dataset.id);
    });
});

renderExperiencia('freelance');
