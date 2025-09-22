const EstadoTarea = {
    PENDIENTE : "PENDIENTE",
    COMPLETADO : "COMPLETADO"
}

class Tarea{
    constructor(id,titulo,estado){
        this.id = id
        this.titulo = titulo
        this.estado = estado
    }

    toggleEstado(){
        if(this.estado === EstadoTarea.COMPLETADO){
            this.estado = EstadoTarea.PENDIENTE
        }else{
            this.estado = EstadoTarea.COMPLETADO
        }
    }
}

const tareas = []

const tareaExiste = (id) => {
    return undefined !== tareas.find(tarea => tarea.id === id)
}

const crearTarea = (id,titulo) => {
    let tarea = new Tarea(id,titulo,EstadoTarea.PENDIENTE)
    tareas.push(tarea)
}

const obtenerTareaPorId = (id) => {
    return tareas.find(tarea => tarea.id === id) || {}
}

const obtenerTodaslasTareas = () => {
    return tareas
}

const actualizarTareaPorId = (id) =>{
    if(tareaExiste(id)){
        tareas.find(tarea => tarea.id === id).toggleEstado()
    }
}

const borraTareaPorId = (id) => {
    var indice = tareas.findIndex(tarea => tarea.id === id)
    if(indice !== -1){
        tareas.splice(indice,1)
    }
}

crearTarea(1,"Tarea 1")
crearTarea(2,"Tarea 2")
crearTarea(3,"Tarea 3")
crearTarea(4,"Tarea 4")



function renderizarTareas(){
    let root = document.getElementById("root")
    let lista = document.createElement("ul")

    tareas.forEach(tarea => {
        let item = document.createElement("li")
        
        item.textContent = `ID: ${tarea.id} - Título: ${tarea.titulo} - Estado: ${tarea.estado}`
        
        lista.appendChild(item)
    })

    root.innerHTML = ''
    root.appendChild(lista)
}

renderizarTareas()

