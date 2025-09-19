console.log("Punto 1 \n")

const imprimir = () => {
    if (true) {
        const variableConst = "Const tiene ambito de bloque"
        var variableVar = "Var tiene ambito de funcion"
        let variableLet = "Let tiene ambito de bloque"
    }
    console.log("Fuera del bloque solo existe var: " + variableVar)
    try {
        console.log(variableConst)

    } catch (error) {
        console.log("Se intento imprimir const, pero no existe fuera del bloque")
    }
    try {
        console.log(variableLet)

    } catch (error) {
        console.log("Se intento imprimir let, pero no existe fuera del bloque")
    }

}

imprimir()

console.log("\n Punto 2 \n")

const punto2 = (usuario) => {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}`
}

var usuario = {
    nombre: "Ana",
    rol: "Administrador"
};

console.log(punto2(usuario))


console.log("\n Punto 3 \n")

const punto3 = (num) => {
    return num < 0 ? "Negativo" : num === 0 ? "Cero" : "Positivo"
}

console.log(punto3(-20))
console.log(punto3(0))
console.log(punto3(20))

console.log("\n Punto 4 \n")

const curso = {
    titulo: "JavaScript",
    duracion: 40,
    temas: ["Funciones", "Objetos", "Asincronía"]
};

var { titulo, duracion, temas: [primerTema] } = curso;

console.log("Titulo es: " + titulo)
console.log("Duracion es: " + duracion)
console.log("El primer tema es : " + primerTema)

console.log("\n Punto 5 \n")

let configuration = {
    usuario: "usuario",
    contraseña: "Contraseña"
}

var configurationComplete = { ...configuration, host: "Localhost" }

console.log(configurationComplete)

const punto5 = (...numeros) => {
    return numeros.reduce((acum, n) => acum + n, 0) / numeros.length
}

console.log("El promedio de 5+5+4 es: " + punto5(5, 5, 4))

console.log("\n Punto 6 \n")

let numeros = [3, 8, 12, 5, 20, 7];

let result = numeros.filter(num => num > 6)
    .map(num => num * 2);

console.log(result)

console.log("\n Punto 6 \n")

var arrayObjects = [
    { nombre: "Monitor", precio: 200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 60 }   
]

console.log(arrayObjects.sort((a,b)=>a.precio-b.precio))