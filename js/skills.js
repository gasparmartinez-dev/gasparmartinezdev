const skills = {
    IA: [
        { nombre: "Pyhton", nivel: "Muy avanzado" },
        { nombre: "NumPy", nivel: "Muy Avanzado" },
        { nombre: "Pandas", nivel: "Avanzado" },
        { nombre: "Scikit-Learn", nivel: "Intermedio" },
        { nombre: "TensorFlow", nivel: "Avanzado" },
        { nombre: "Redes Neuronales", nivel: "Avanzado" },
        { nombre: "Sistemas de Recomendación", nivel: "Avanzado" },
    ],
    web: [
        { nombre: "HTML", nivel: "Experto" },
        { nombre: "CSS", nivel: "Experto" },
        { nombre: "JavaScript", nivel: "Muy avanzado" },
        { nombre: "SQL", nivel: "Avanzado" },
        { nombre: "MongoDB", nivel: "Avanzado" },
        { nombre: "Bootstrap", nivel: "Avanzado" },
        { nombre: "API REST", nivel: "Avanzado" },
    ],
    devops: [
        { nombre: "Git", nivel: "Experto" },
        { nombre: "GitHub", nivel: "Experto" },
        { nombre: "Linux", nivel: "Avanzado" },
        { nombre: "Docker", nivel: "Avanzado" },
        { nombre: "Vercel", nivel: "Intermedio" },
    ]
}

const grid = document.getElementById("skills-grid");

function renderSkills(category) {
  const items = skills[category];

  grid.innerHTML = items
    .map(
      skill => `
        <div class="skill_card">
          <h5>${skill.nombre}</h5>
          <span>${skill.nivel}</span>
        </div>
      `
    )
    .join("");
}

const opciones = document.querySelectorAll('.skills_opcion');

opciones.forEach(opcion => {opcion.addEventListener('click', () =>{
        opciones.forEach(opc => opc.classList.remove('active'));
        opcion.classList.add('active');

        const category = opcion.getAttribute('categoria');
        renderSkills(category);
    });
})

renderSkills('IA');