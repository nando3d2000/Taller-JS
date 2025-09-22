const EstadoTarea = {
    PENDIENTE : "PENDIENTE",
    COMPLETADO : "COMPLETADO"
}

class Tarea{
    constructor(titulo,estado){
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

let tarea1 = new Tarea("Tarea1",EstadoTarea.PENDIENTE)

console.log(`Titulo de la tarea: ${tarea1.titulo} estado: ${tarea1.estado}`)

tarea1.toggleEstado()

console.log(`Titulo de la tarea: ${tarea1.titulo} estado: ${tarea1.estado}`)



