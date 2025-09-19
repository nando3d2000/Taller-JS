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


