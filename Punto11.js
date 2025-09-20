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


async function getProduct(id){
    try{
        let result = await  getProducto(id)
        console.log("El producto es: ",result)
    }catch(error){
        console.error(error)
    }
}

getProduct(3)
getProduct(10)



