const punto3 = (num) => {
    return num < 0 ? "Negativo" : num === 0 ? "Cero" : "Positivo"
}

console.log(punto3(-20))
console.log(punto3(0))
console.log(punto3(20))