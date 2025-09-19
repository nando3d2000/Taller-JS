const curso = {
    titulo: "JavaScript",
    duracion: 40,
    temas: ["Funciones", "Objetos", "Asincronía"]
};

var { titulo, duracion, temas: [primerTema] } = curso;

console.log("Titulo es: " + titulo)
console.log("Duracion es: " + duracion)
console.log("El primer tema es : " + primerTema)