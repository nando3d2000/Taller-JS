let posts = []

const obtenerPosts = () => {
    return posts
}

const agregarPost = (post) => {
    posts = [...posts,post]
}

const obtenerPostPorId = (id) => {
    return posts.find(post => post.id === id) || {}
}

console.log("Obtengo todos los objetos: ",posts)

var post1 = {
    id: 1,
    contenido: "Contenido del post 1"
}

var post2 = {
    id: 2,
    contenido: "Contenido del post 2"
}

console.log("Inserto el objeto: ",post1)
agregarPost(post1)
console.log("Inserto el objeto: ",post2)
agregarPost(post2)
console.log("Obtengo los posts existentes: ", obtenerPosts())

console.log("El post con id 1 es: ",obtenerPostPorId(1))
console.log("El post con id 10 es: ",obtenerPostPorId(10))
