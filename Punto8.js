let usuariosConUsuario2 = [
    {id:1,name:"Usuario1"},
    {id:2,name:"Usuario2"},
    {id:3,name:"Usuario3"},
    {id:4,name:"Usuario4"},
    {id:5,name:"Usuario5"},
    {id:6,name:"Usuario6"},
    {id:7,name:"Usuario7"},
    {id:8,name:"Usuario8"},
    {id:9,name:"Usuario9"},
    {id:10,name:"Usuario10"},
    {id:11,name:"Usuario11"},
]

let usuariosSinUsuario2 = [
    {id:10,name:"Usuario10"},
    {id:11,name:"Usuario11"},
]

 let encontrarUsuario2 = (usuarios) => {
    return usuarios.find(user => user.id === 2) || {}
 } 

 console.log(encontrarUsuario2(usuariosConUsuario2))
 console.log(encontrarUsuario2(usuariosSinUsuario2))


