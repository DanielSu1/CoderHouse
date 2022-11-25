// EJERCICIO #1
const operacion = (funcion) => funcion
let resultado = 0;
const suma = (a,b)=>{
    resultado = a+b;
    console.log(`Su resultado es: ${resultado}`)
}
const resta = (a,b)=>{
    resultado = a-b;
    console.log(`Su resultado es: ${resultado}`)
}
const multiplicacion = (a,b)=>{
    resultado = a*b;
    console.log(`Su resultado es: ${resultado}`)
}
const division = (a,b)=>{
    resultado = a/b;
    console.log(`Su resultado es: ${resultado}`)
}
operacion(division(3,6));