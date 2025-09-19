const punto2 = (usuario) => {
    return `El usuario ${usuario.nombre} tiene el rol de ${usuario.rol}`
}

var usuario = {
    nombre: "Ana",
    rol: "Administrador"
};

console.log(punto2(usuario))