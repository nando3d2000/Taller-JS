const operar = (num1,num2,func) => {
    return func(num1,num2)
}

function suma(num1,num2){
    return num1+num2
}

function resta(num1,num2){
    return num1-num2
}

function multiplicar(num1,num2){
    return num1*num2 
}

console.log(operar(2,2,suma))
console.log(operar(2,2,resta))
console.log(operar(3,3,multiplicar))