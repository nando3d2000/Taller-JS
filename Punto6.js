let numeros = [3, 8, 12, 5, 20, 7];

let result = numeros.filter(num => num > 6)
    .map(num => num * 2);

console.log(result)