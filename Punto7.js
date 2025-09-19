var arrayObjects = [
    { nombre: "Monitor", precio: 200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 60 }   
]

console.log(arrayObjects.sort((a,b)=>a.precio-b.precio))