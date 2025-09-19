const imprimir = () => {
    if (true) {
        const variableConst = "Const tiene ambito de bloque"
        var variableVar = "Var tiene ambito de funcion"
        let variableLet = "Let tiene ambito de bloque"
    }
    console.log("Fuera del bloque solo existe var: " + variableVar)
    try {
        console.log(variableConst)

    } catch (error) {
        console.log("Se intento imprimir const, pero no existe fuera del bloque")
    }
    try {
        console.log(variableLet)

    } catch (error) {
        console.log("Se intento imprimir let, pero no existe fuera del bloque")
    }

}

imprimir()

const asignar = () => {
    
    const variableConst = "Const"
    var variableVar = "Var"
    let variableLet = "Let"
    
    try {
        variableConst = "Otra constante"
        console.log("Nuevo valor de const: "+ variableConst)

    } catch (error) {
        console.log("Si sale este log fue porque las const no se dejan reasignar")
    }
    try {
        variableVar = "Otra var"
        console.log("Nuevo valor de var: "+variableVar)

    } catch (error) {
        console.log("Si sale este log es porque var no se deja reasignar")
    }
    try {
        variableLet = "Otra let"
        console.log("Nuevo valor de let: "+variableLet)

    } catch (error) {
        console.log("Si sale este log es porque let no se deja reasignar")
    }

}

asignar()