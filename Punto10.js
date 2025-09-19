let productos = [
    {id:1,name:"Producto 1"},
    {id:2,name:"Producto 2"},
    {id:3,name:"Producto 3"},
    {id:4,name:"Producto 4"},
    {id:5,name:"Producto 5"},
    {id:6,name:"Producto 6"},
    {id:7,name:"Producto 7"},
    {id:8,name:"Producto 8"},
    {id:9,name:"Producto 9"},
]


const getProducto = (id) => {
    return new Promise((result,error)=> {
        setTimeout(() => {
            var producto = productos.find(producto => producto.id === id)
            if(producto !== undefined)
                result(producto)
            else
                error("El producto no exite")
        },1000)
    })
}

var result = getProducto(3).then(result => console.log("El produto es: ",result))
                            .catch(error => log.error(error))